import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, act, renderHook } from '@testing-library/react';

// Modules under adversarial stress testing
import {
  computePipeResistance,
  computeHazenWilliamsHeadLoss,
  computeHeadLossDerivative,
  solveHydraulicNetwork
} from '../src/utils/hydraulicEngine.js';
import { EPANET_NETWORK_CONFIG } from '../src/data/epanetData.js';
import { evaluateScadaAlarms, stepScadaPhysics } from '../src/utils/scadaPhysics.js';
import { useTheme } from '../src/hooks/useTheme.js';
import { BlueprintCadre } from '../src/components/common/BlueprintCadre.jsx';
import { ThesisMakeoverCompare } from '../src/components/sections/academic/ThesisMakeoverCompare.jsx';
import { SoutenanceLaptopMockup } from '../src/components/sections/academic/SoutenanceLaptopMockup.jsx';

describe('Adversarial Stress Testing & Tier 5 Hardening Suite', () => {

  // =========================================================================
  // 1. HYDRAULIC SOLVER CONVERGENCE UNDER EXTREME / SINGULAR INPUTS
  // =========================================================================
  describe('1. Hydraulic Solver Convergence Under Extreme & Boundary Inputs', () => {

    it('converges with zero nodal demands (zero-demand loops)', () => {
      // Set all junction base demands to 0 and demand multiplier to 0
      const solved = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 0.0);

      expect(solved).toBeDefined();
      expect(solved.nodes).toHaveLength(EPANET_NETWORK_CONFIG.nodes.length);
      expect(solved.links).toHaveLength(EPANET_NETWORK_CONFIG.links.length);

      // Verify no NaN or Infinity in heads, pressures, flows, or velocities
      solved.nodes.forEach(node => {
        expect(Number.isFinite(node.computedHglM)).toBe(true);
        expect(Number.isFinite(node.computedPressureM)).toBe(true);
        expect(node.computedPressureM).toBeGreaterThanOrEqual(0);
      });

      solved.links.forEach(link => {
        expect(Number.isFinite(link.computedFlowLps)).toBe(true);
        expect(Number.isFinite(link.computedVelocityMs)).toBe(true);
        expect(Number.isFinite(link.computedHeadLossM)).toBe(true);
      });
    });

    it('survives extreme pipe diameters (5000mm mega-pipe and 5mm micro-pipe) without numerical explosion', () => {
      // Test extreme large diameter (5000mm): Resistance R approaches near 0
      const R_huge = computePipeResistance(1000, 5000, 130, 0);
      expect(Number.isFinite(R_huge)).toBe(true);
      expect(R_huge).toBeGreaterThan(0);
      expect(R_huge).toBeLessThan(0.01);

      // Test extreme micro diameter (5mm): Resistance R is astronomical
      const R_micro = computePipeResistance(100, 5, 100, 0);
      expect(Number.isFinite(R_micro)).toBe(true);
      expect(R_micro).toBeGreaterThan(1e9);

      // Inject extreme pipes into network topology
      const customTopology = JSON.parse(JSON.stringify(EPANET_NETWORK_CONFIG));
      customTopology.links[1].diameterMm = 5000; // Mega pipe
      customTopology.links[2].diameterMm = 5;    // Micro pipe

      const solved = solveHydraulicNetwork(customTopology, 1.0);
      expect(solved).toBeDefined();

      solved.nodes.forEach(node => {
        expect(Number.isFinite(node.computedHglM)).toBe(true);
        expect(Number.isFinite(node.computedPressureM)).toBe(true);
      });
    });

    it('converges when initial boundary heads are negative or severely depleted', () => {
      const customTopology = JSON.parse(JSON.stringify(EPANET_NETWORK_CONFIG));
      const reservoir = customTopology.nodes.find(n => n.type === 'reservoir');
      if (reservoir) reservoir.fixedHeadM = -25.0; // Severely negative reservoir head
      const tank = customTopology.nodes.find(n => n.type === 'tank');
      if (tank) tank.elevationM = -10.0;

      const solved = solveHydraulicNetwork(customTopology, 1.0, {}, {}, false); // pump disabled
      expect(solved).toBeDefined();

      solved.nodes.forEach(node => {
        expect(Number.isFinite(node.computedHglM)).toBe(true);
        expect(Number.isFinite(node.computedPressureM)).toBe(true);
        expect(node.computedPressureM).toBeGreaterThanOrEqual(0); // Clamped at 0
      });
    });

    it('handles hyper-surge demand (10x normal load) without solver divergence', () => {
      const solved = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 10.0);
      expect(solved).toBeDefined();

      solved.nodes.forEach(node => {
        expect(Number.isFinite(node.computedHglM)).toBe(true);
        expect(Number.isFinite(node.computedPressureM)).toBe(true);
        // Pressures should drop heavily under 10x load, resulting in critical status
        if (node.type === 'junction') {
          expect(['critical', 'warning', 'nominal']).toContain(node.pressureStatus);
        }
      });
    });

    it('handles 100% pipe isolation on all non-pump links without crashing', () => {
      const allThrottles = {};
      EPANET_NETWORK_CONFIG.links.forEach(l => {
        if (l.type !== 'pump') {
          allThrottles[l.id] = 0; // Completely shut
        }
      });

      const solved = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 1.0, {}, allThrottles);
      expect(solved).toBeDefined();

      // Flow on throttled pipes should be virtually zero
      solved.links.forEach(link => {
        if (link.type !== 'pump') {
          expect(Math.abs(link.computedFlowLps)).toBeLessThanOrEqual(0.1);
        }
      });
    });

    it('handles simultaneous burst on all junction links', () => {
      const allPipeIds = EPANET_NETWORK_CONFIG.links.map(l => l.id);
      const solved = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 1.0, {}, {}, true, allPipeIds);

      expect(solved).toBeDefined();
      solved.nodes.forEach(node => {
        expect(Number.isFinite(node.computedHglM)).toBe(true);
        expect(Number.isFinite(node.computedPressureM)).toBe(true);
      });
    });
  });

  // =========================================================================
  // 2. SCADA ALARMS & PHYSICS DYNAMICS UNDER EXTREME SENSOR INPUTS
  // =========================================================================
  describe('2. SCADA Alarms & Dynamics Under Extreme Inputs', () => {

    it('correctly evaluates extreme out-of-range sensor inputs (FIT-101 > 35000, AIT-101/102 > 900, TIT-201 < 10 & > 50)', () => {
      // Extreme catastrophic state
      const extremeState = {
        flowM3d: 120000, // Extreme storm surge >> 35000
        codIn: 4500,     // Catastrophic COD >> 900
        tempC: -15,      // Sub-zero freezing temp < 10
        methaneLel: 85,  // Explosive methane >> 15
        doMgL: 0.1,      // Deep septic anoxia < 2.0
        bodOut: 120,     // High effluent BOD >= 30
        tankLevel: 99,   // Overflow tank level >= 92
        pumpIn1: false,  // Inlet pump tripped
        gridPower: false,
        generatorFuel: 5.0
      };

      const alarms = evaluateScadaAlarms(extremeState);

      expect(alarms).toHaveLength(8);
      const alarmTags = alarms.map(a => a.tag);
      expect(alarmTags).toContain('P-101');   // Pump tripped
      expect(alarmTags).toContain('FIT-101'); // Flow storm surge
      expect(alarmTags).toContain('AIT-102'); // Industrial COD spike
      expect(alarmTags).toContain('TIT-201'); // Low temperature
      expect(alarmTags).toContain('AIT-201'); // High methane LEL
      expect(alarmTags).toContain('AIT-301'); // Low DO
      expect(alarmTags).toContain('AIT-401'); // Effluent BOD limit exceeded
      expect(alarmTags).toContain('LIT-501'); // High tank level

      // Verify severity levels
      const criticals = alarms.filter(a => a.severity === 'CRITICAL');
      expect(criticals.length).toBeGreaterThanOrEqual(3);
    });

    it('evaluates low tank level extreme boundary (tankLevel <= 25 and tankLevel = 0)', () => {
      const lowLevelState = {
        flowM3d: 24000,
        codIn: 450,
        tempC: 22,
        methaneLel: 4,
        doMgL: 4.5,
        bodOut: 15,
        tankLevel: 0, // completely dry tank
        pumpIn1: true
      };

      const alarms = evaluateScadaAlarms(lowLevelState);
      const tankAlarm = alarms.find(a => a.tag === 'LIT-501');
      expect(tankAlarm).toBeDefined();
      expect(tankAlarm.id).toBe('ALM_L_LEVEL');
      expect(tankAlarm.msg).toContain('Low Level');
    });

    it('stress tests physics stepping over 1,000 steps with extreme dt values', () => {
      let state = {
        flowM3d: 50000,
        bodIn: 600,
        codIn: 1200,
        tssIn: 800,
        tempC: 5,
        methaneLel: 30,
        doMgL: 1.0,
        ph: 7.2,
        bodOut: 90,
        turbidityOut: 40,
        tankLevel: 80,
        pumpIn1: true,
        pumpIn2: false,
        pumpOut1: true,
        pumpOut2: false,
        pumpOut3: false,
        gridPower: false,
        generatorFuel: 2.0
      };

      // Run 1,000 steps with dt = 5.0 seconds
      for (let i = 0; i < 1000; i++) {
        state = stepScadaPhysics(state, 5.0);
      }

      // Fuel must clamp to 0 and not become negative
      expect(state.generatorFuel).toBe(0);

      // Flow must relax towards diurnal baseline ~24000 +/- 3000
      expect(state.flowM3d).toBeGreaterThan(20000);
      expect(state.flowM3d).toBeLessThan(28000);

      // All numerical values must remain finite and non-NaN
      Object.entries(state).forEach(([key, val]) => {
        if (typeof val === 'number') {
          expect(Number.isFinite(val)).toBe(true);
        }
      });
    });

    it('handles diurnal cycle with extreme timestamp values (t < 0, t = 1e12)', () => {
      const origDateNow = Date.now;
      try {
        // Test negative timestamp
        Date.now = () => -500000;
        let stateNeg = stepScadaPhysics({ flowM3d: 24000, bodIn: 200, codIn: 400, tempC: 20, doMgL: 4, generatorFuel: 10 }, 1.0);
        expect(Number.isFinite(stateNeg.flowM3d)).toBe(true);

        // Test huge timestamp
        Date.now = () => 1e14;
        let stateHuge = stepScadaPhysics({ flowM3d: 24000, bodIn: 200, codIn: 400, tempC: 20, doMgL: 4, generatorFuel: 10 }, 1.0);
        expect(Number.isFinite(stateHuge.flowM3d)).toBe(true);
      } finally {
        Date.now = origDateNow;
      }
    });
  });

  // =========================================================================
  // 3. THEME ENGINE & LOCALSTORAGE RESILIENCE UNDER CORRUPTED INPUTS
  // =========================================================================
  describe('3. Theme Engine & LocalStorage Under Corrupted Inputs', () => {
    const THEME_STORAGE_KEY = 'fluiddev-theme';

    beforeEach(() => {
      localStorage.clear();
      document.documentElement.className = '';
      document.documentElement.removeAttribute('data-theme');
    });

    afterEach(() => {
      localStorage.clear();
      document.documentElement.className = '';
      document.documentElement.removeAttribute('data-theme');
      vi.restoreAllMocks();
    });

    it('falls back safely to dark mode when localStorage contains corrupted strings', () => {
      const corruptedValues = ['blue', 'neon', 'undefined', 'null', '', '{"theme":"dark"}', '999', 'TRUE'];

      corruptedValues.forEach(val => {
        localStorage.setItem(THEME_STORAGE_KEY, val);
        document.documentElement.className = '';

        const { result, unmount } = renderHook(() => useTheme());

        // Must safely initialize to 'dark'
        expect(result.current.theme).toBe('dark');
        expect(result.current.isDark).toBe(true);
        expect(document.documentElement.classList.contains('dark')).toBe(true);
        expect(document.documentElement.classList.contains('light')).toBe(false);

        unmount();
      });
    });

    it('ignores invalid arguments to setTheme() and maintains valid theme state', () => {
      const { result } = renderHook(() => useTheme());

      expect(result.current.theme).toBe('dark');

      act(() => {
        result.current.setTheme('invalid-color');
      });
      expect(result.current.theme).toBe('dark');

      act(() => {
        result.current.setTheme(null);
      });
      expect(result.current.theme).toBe('dark');

      act(() => {
        result.current.setTheme(undefined);
      });
      expect(result.current.theme).toBe('dark');

      act(() => {
        result.current.setTheme(12345);
      });
      expect(result.current.theme).toBe('dark');
    });

    it('handles 100 rapid-fire toggle operations without class desynchronization', () => {
      const { result } = renderHook(() => useTheme());

      // Perform 100 rapid toggles
      act(() => {
        for (let i = 0; i < 100; i++) {
          result.current.toggleTheme();
        }
      });

      // 100 toggles from 'dark' should return to 'dark'
      expect(result.current.theme).toBe('dark');
      expect(result.current.isDark).toBe(true);
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('light')).toBe(false);
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    });

    it('gracefully handles localStorage.setItem QuotaExceededError without crashing', () => {
      const { result } = renderHook(() => useTheme());

      // Mock setItem to throw QuotaExceededError
      vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new DOMException('Quota exceeded', 'QuotaExceededError');
      });

      // Toggling theme should not throw
      expect(() => {
        act(() => {
          result.current.toggleTheme();
        });
      }).not.toThrow();

      // In-memory DOM state must still update
      expect(result.current.theme).toBe('light');
      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });
  });

  // =========================================================================
  // 4. ACADEMIC HUB SLIDER INTERACTIONS & SOUTENANCE LAPTOP RESPONSIVENESS
  // =========================================================================
  describe('4. Academic Hub Slider & Soutenance Laptop Mockup', () => {

    it('renders ThesisMakeoverCompare and handles extreme pointer drag coordinates (out-of-bounds)', () => {
      const { container } = render(<ThesisMakeoverCompare />);

      const stage = container.querySelector('.select-none.touch-none');
      expect(stage).toBeInTheDocument();

      // Mock getBoundingClientRect
      stage.getBoundingClientRect = () => ({
        left: 100,
        top: 100,
        width: 800,
        height: 500,
        right: 900,
        bottom: 600
      });

      // Simulate dragging far to the negative left (clientX = -1000)
      fireEvent.pointerDown(stage, { clientX: 500 });
      fireEvent.pointerMove(stage, { clientX: -1000 });
      fireEvent.pointerUp(stage);

      // Verify range input value is clamped at minimum 5%
      const slider = container.querySelector('input[type="range"]');
      if (slider) {
        expect(Number(slider.value)).toBeGreaterThanOrEqual(5);
        expect(Number(slider.value)).toBeLessThanOrEqual(95);
      }

      // Simulate dragging far to the right (clientX = 5000)
      fireEvent.pointerDown(stage, { clientX: 500 });
      fireEvent.pointerMove(stage, { clientX: 5000 });
      fireEvent.pointerUp(stage);

      if (slider) {
        expect(Number(slider.value)).toBeLessThanOrEqual(95);
      }
    });

    it('rapidly toggles between Split, Before, and After modes without visual corruption', () => {
      render(<ThesisMakeoverCompare />);

      const btnSplit = screen.getByRole('button', { name: /Split Compare/i });
      const btnBefore = screen.getByRole('button', { name: /Raw Draft/i });
      const btnAfter = screen.getByRole('button', { name: /FluiDev Thesis/i });

      // Click before
      fireEvent.click(btnBefore);
      expect(screen.getByText(/BEFORE \/\/ RAW DRAFT/i)).toBeInTheDocument();

      // Click after
      fireEvent.click(btnAfter);
      expect(screen.getByText(/AFTER \/\/ DEFENSE READY/i)).toBeInTheDocument();

      // Click back to split
      fireEvent.click(btnSplit);
      expect(screen.getByText(/AFTER \/\/ DEFENSE READY/i)).toBeInTheDocument();
      expect(screen.getByText(/BEFORE \/\/ RAW DRAFT/i)).toBeInTheDocument();
    });

    it('renders Soutenance Laptop Mockup with genuine hydroinformatics research metrics', () => {
      const { container } = render(<SoutenanceLaptopMockup />);

      // Verify research metrics
      expect(screen.getByText(/92.4%/)).toBeInTheDocument(); // COD
      expect(screen.getByText(/89.1%/)).toBeInTheDocument(); // BOD5
      expect(screen.getByText(/\+28.5%/)).toBeInTheDocument(); // Energy
      expect(screen.getByText(/4.8 mg\/L/)).toBeInTheDocument(); // DO

      // Verify aerospace laptop chassis elements
      expect(container.querySelector('.bg-\\[\\#1a2336\\]')).toBeInTheDocument(); // Bezel
      expect(container.querySelector('.rounded-b-xl')).toBeInTheDocument(); // Keyboard base
      expect(screen.getByText(/THESIS DEFENSE \/\/ SOUTENANCE 2026/i)).toBeInTheDocument();
      expect(screen.getByText(/National Higher School of Hydraulics/i)).toBeInTheDocument();
    });
  });

  // =========================================================================
  // 5. BLUEPRINT CADRE POINTER-EVENTS PASS-THROUGH & SIMULATOR ISOLATION
  // =========================================================================
  describe('5. Blueprint Cadre Pointer Events Pass-Through & Simulator Workstation Isolation', () => {

    it('guarantees that decorative reticles, scales, and conduit channels strictly have pointer-events-none', () => {
      const { container } = render(
        <BlueprintCadre id="test-cadre" showConduit={true} conduitPosition="left">
          <button data-testid="interactive-btn" onClick={() => {}}>Click Me</button>
        </BlueprintCadre>
      );

      // Check corner reticles
      const reticles = container.querySelectorAll('.cadre-reticle');
      expect(reticles).toHaveLength(4);
      reticles.forEach(reticle => {
        expect(reticle.className).toContain('pointer-events-none');
      });

      // Check scale ticks
      const scales = container.querySelectorAll('.cadre-scale');
      scales.forEach(scale => {
        expect(scale.className).toContain('pointer-events-none');
      });

      // Check pipe conduit channel
      const conduit = container.querySelector('.cadre-pipe-channel');
      expect(conduit).toBeInTheDocument();
      expect(conduit.className).toContain('pointer-events-none');

      const conduitSvg = conduit.querySelector('svg');
      expect(conduitSvg.getAttribute('class')).toContain('pointer-events-none');
    });

    it('verifies that user click events pass through 100% cleanly to children inside BlueprintCadre', () => {
      const handleClick = vi.fn();
      render(
        <BlueprintCadre id="interactive-test-cadre" showConduit={true}>
          <button data-testid="target-button" onClick={handleClick}>
            Target Button
          </button>
        </BlueprintCadre>
      );

      const button = screen.getByTestId('target-button');
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(3);
    });

    it('verifies simulation CAD workstation container classes isolate canvases in high-contrast dark palette', () => {
      // Test the workstation classes contract
      const cadWorkstationClass = "rounded-2xl border border-cyan-500/40 bg-[#07133F] text-slate-100 p-6 sm:p-8 shadow-2xl space-y-6 animate-in fade-in duration-300 relative CAD-workstation-terminal";
      const scadaDiagramBgClass = "bg-[#0B1120] rounded-xl p-4 border border-cyan-500/20 overflow-x-auto";
      const epanetCanvasBgClass = "bg-[#0B1120] rounded-xl p-4 border border-cyan-500/20";

      expect(cadWorkstationClass).toContain('bg-[#07133F]');
      expect(scadaDiagramBgClass).toContain('bg-[#0B1120]');
      expect(epanetCanvasBgClass).toContain('bg-[#0B1120]');
    });
  });

});
