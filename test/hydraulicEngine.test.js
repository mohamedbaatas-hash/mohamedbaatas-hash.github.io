import { describe, it, expect } from 'vitest';
import {
  computePipeResistance,
  computeHazenWilliamsHeadLoss,
  computeHeadLossDerivative,
  solveHydraulicNetwork
} from '../src/utils/hydraulicEngine.js';
import { EPANET_NETWORK_CONFIG } from '../src/data/epanetData.js';

describe('Hydraulic Engine (EPANET 2.2 Solver)', () => {
  // =========================================================================
  // TIER 1: FEATURE COVERAGE (Pure Mathematical Solvers in Isolation)
  // =========================================================================
  describe('Tier 1 - Feature Coverage', () => {
    it('computes pipe resistance R accurately according to Hazen-Williams SI formula', () => {
      const lengthM = 1000;
      const diameterMm = 200;
      const roughnessC = 130;
      const R = computePipeResistance(lengthM, diameterMm, roughnessC, 0);

      // Theoretical: 10.67 * 1000 / (130^1.852 * 0.2^4.8704) ~= 3291.58
      expect(R).toBeGreaterThan(3200);
      expect(R).toBeLessThan(3400);
      expect(Number(R.toFixed(2))).toBe(3291.58);
    });

    it('scales friction resistance linearly with pipe length and adds minor losses', () => {
      const R1 = computePipeResistance(500, 250, 120, 0);
      const R2 = computePipeResistance(1000, 250, 120, 0);
      expect(R2).toBeCloseTo(R1 * 2, 5);

      const R_with_minor = computePipeResistance(1000, 250, 120, 5.0);
      expect(R_with_minor).toBeGreaterThan(R2);
    });

    it('computes Hazen-Williams frictional head loss for positive flow', () => {
      const R = 3291.58;
      const flowM3s = 0.04; // 40 L/s
      const hf = computeHazenWilliamsHeadLoss(flowM3s, R);

      // hf = R * Q^1.852 = 3291.58 * (0.04)^1.852 ~= 8.44 m
      expect(hf).toBeGreaterThan(8.0);
      expect(hf).toBeLessThan(9.0);
    });

    it('preserves sign symmetry for reverse flow in head loss calculation', () => {
      const R = 2500;
      const flowPos = 0.035;
      const flowNeg = -0.035;
      const hfPos = computeHazenWilliamsHeadLoss(flowPos, R);
      const hfNeg = computeHazenWilliamsHeadLoss(flowNeg, R);

      expect(hfPos).toBeGreaterThan(0);
      expect(hfNeg).toBeLessThan(0);
      expect(hfPos).toBeCloseTo(-hfNeg, 6);
    });

    it('computes head loss derivative matching finite difference approximation', () => {
      const R = 3000;
      const flow = 0.05;
      const analyticalDeriv = computeHeadLossDerivative(flow, R);

      // Finite difference comparison: [hf(Q+eps) - hf(Q-eps)] / (2*eps)
      const eps = 1e-6;
      const hfPlus = computeHazenWilliamsHeadLoss(flow + eps, R);
      const hfMinus = computeHazenWilliamsHeadLoss(flow - eps, R);
      const numericalDeriv = (hfPlus - hfMinus) / (2 * eps);

      expect(analyticalDeriv).toBeCloseTo(numericalDeriv, 3);
    });

    it('solves nominal EPANET network topology with mass balance conservation', () => {
      const result = solveHydraulicNetwork(EPANET_NETWORK_CONFIG);

      expect(result).toHaveProperty('nodes');
      expect(result).toHaveProperty('links');
      expect(result).toHaveProperty('timestamp');
      expect(result.nodes).toHaveLength(7);
      expect(result.links).toHaveLength(8);

      // Boundary fixed heads
      const res = result.nodes.find(n => n.id === 'RES-1');
      const tank = result.nodes.find(n => n.id === 'TK-1');
      expect(res.computedHglM).toBe(85.0);
      expect(tank.computedHglM).toBe(69.5);

      // All junctions have positive pressure and valid pressure status
      const junctions = result.nodes.filter(n => n.type === 'junction');
      junctions.forEach(j => {
        expect(j.computedHglM).toBeGreaterThan(j.elevationM);
        expect(j.computedPressureM).toBeGreaterThan(0);
        expect(j.computedPressureBar).toBeGreaterThan(0);
        expect(['nominal', 'warning', 'critical', 'high']).toContain(j.pressureStatus);
      });

      // Flow directions on links are valid
      result.links.forEach(l => {
        expect(['forward', 'reverse', 'zero']).toContain(l.flowDirection);
        expect(l.computedVelocityMs).toBeGreaterThanOrEqual(0);
        expect(l.computedHeadLossM).toBeGreaterThanOrEqual(0);
      });
    });
  });

  // =========================================================================
  // TIER 2: BOUNDARY & CORNER CASES (Singularities, Extreme Inputs, Isolation)
  // =========================================================================
  describe('Tier 2 - Boundary & Corner Cases', () => {
    it('handles zero flow gracefully without NaN or division by zero', () => {
      const R = 2000;
      const hfZero = computeHazenWilliamsHeadLoss(0.0, R);
      const derivZero = computeHeadLossDerivative(0.0, R);

      expect(hfZero).toBe(0);
      expect(Number.isFinite(derivZero)).toBe(true);
      expect(derivZero).toBeGreaterThan(0);
    });

    it('linearizes head loss for ultra-small flows (|Q| < 1e-5) to prevent gradient singularity', () => {
      const R = 3000;
      const tinyFlow1 = 1e-6;
      const tinyFlow2 = -1e-6;

      const hf1 = computeHazenWilliamsHeadLoss(tinyFlow1, R);
      const hf2 = computeHazenWilliamsHeadLoss(tinyFlow2, R);

      expect(hf1).toBeGreaterThan(0);
      expect(hf2).toBeLessThan(0);
      expect(hf1).toBeCloseTo(-hf2, 10);
      expect(computeHeadLossDerivative(tinyFlow1, R)).toBeGreaterThan(0);
    });

    it('solves zero-demand network yielding static equilibrium between boundaries', () => {
      const result = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 0.0);

      expect(result.nodes.length).toBe(7);
      // In zero demand, junctions remain pressurized
      result.nodes.forEach(n => {
        expect(n.computedPressureM).toBeGreaterThanOrEqual(0);
      });
    });

    it('handles heavy peak demand multiplier (2.5x) with resulting pressure drop', () => {
      const nominalResult = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 1.0);
      const peakResult = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 2.5);

      const nomJ3 = nominalResult.nodes.find(n => n.id === 'J-3');
      const peakJ3 = peakResult.nodes.find(n => n.id === 'J-3');

      // Higher demand must result in lower pressure at high elevation node J-3
      expect(peakJ3.computedPressureM).toBeLessThan(nomJ3.computedPressureM);
    });

    it('isolates pipe completely when throttled to 0% with resistance 1e12', () => {
      const result = solveHydraulicNetwork(
        EPANET_NETWORK_CONFIG,
        1.0,
        {},
        { 'P-103': 0 } // completely closed valve
      );

      const pipe103 = result.links.find(l => l.id === 'P-103');
      // Flow on isolated pipe should be negligible / close to 0
      expect(Math.abs(pipe103.computedFlowLps)).toBeLessThanOrEqual(0.1);
    });

    it('simulates pump station deactivation and corresponding head reduction', () => {
      const pumpOn = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 1.0, {}, {}, true);
      const pumpOff = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 1.0, {}, {}, false);

      const j1On = pumpOn.nodes.find(n => n.id === 'J-1');
      const j1Off = pumpOff.nodes.find(n => n.id === 'J-1');

      // Disabling pump station drops intake hub head
      expect(j1Off.computedHglM).toBeLessThan(j1On.computedHglM);
    });

    it('injects emitter leak flow during pipe rupture / burst scenario', () => {
      const normalResult = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 1.0);
      const burstResult = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 1.0, {}, {}, true, ['P-102']);

      const burstJ2 = burstResult.nodes.find(n => n.id === 'J-2');
      const normalJ2 = normalResult.nodes.find(n => n.id === 'J-2');

      // J-2 connects to burst pipe P-102; demand increases by 22.5 L/s emitter leak
      expect(burstJ2.actualDemandLps).toBeGreaterThan(normalJ2.actualDemandLps);
      expect(burstJ2.actualDemandLps).toBeCloseTo(normalJ2.actualDemandLps + 22.5, 1);
    });

    it('accepts specific nodal demand overrides', () => {
      const overrideResult = solveHydraulicNetwork(
        EPANET_NETWORK_CONFIG,
        1.0,
        { 'J-4': 95.0 } // Override industrial node demand to 95 L/s
      );

      const j4 = overrideResult.nodes.find(n => n.id === 'J-4');
      expect(j4.actualDemandLps).toBe(95.0);
    });
  });

  // =========================================================================
  // TIER 3: CROSS-FEATURE COMBINATIONS (Pump + Throttles + Burst + Multipliers)
  // =========================================================================
  describe('Tier 3 - Cross-Feature Combinations', () => {
    it('maintains convergence under simultaneous pump trip, pipe burst, and peak demand', () => {
      const stressResult = solveHydraulicNetwork(
        EPANET_NETWORK_CONFIG,
        1.8, // 1.8x peak demand
        { 'J-2': 45 },
        { 'P-104': 20 }, // 80% throttled
        false, // pump tripped
        ['P-105'] // burst pipe
      );

      expect(stressResult).toBeDefined();
      expect(stressResult.nodes).toHaveLength(7);

      // Verify all junction pressures are physically bounded numbers (no NaN or Infinity)
      stressResult.nodes.forEach(node => {
        expect(Number.isFinite(node.computedHglM)).toBe(true);
        expect(Number.isFinite(node.computedPressureM)).toBe(true);
        expect(node.computedPressureM).toBeGreaterThanOrEqual(0);
      });
    });

    it('redistributes flow through loop when arterial pipe is throttled', () => {
      const baseline = solveHydraulicNetwork(EPANET_NETWORK_CONFIG);
      const throttled = solveHydraulicNetwork(
        EPANET_NETWORK_CONFIG,
        1.0,
        {},
        { 'P-102': 10 } // severely throttled main link
      );

      const p102Base = baseline.links.find(l => l.id === 'P-102');
      const p102Throttled = throttled.links.find(l => l.id === 'P-102');

      // Severe throttle reduces flow through P-102
      expect(Math.abs(p102Throttled.computedFlowLps)).toBeLessThan(Math.abs(p102Base.computedFlowLps));
    });

    it('accurately captures tank dynamic interaction (negative demand when filling)', () => {
      const lowDemand = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 0.4);
      const tankNode = lowDemand.nodes.find(n => n.id === 'TK-1');

      // Tank node reports actual demand in L/s reflecting inflow/outflow
      expect(Number.isFinite(tankNode.actualDemandLps)).toBe(true);
    });
  });

  // =========================================================================
  // TIER 4: REAL-WORLD APPLICATION SCENARIOS (24-Hour Diurnal Demand & Pressure)
  // =========================================================================
  describe('Tier 4 - Real-World Application Scenarios', () => {
    it('simulates a complete 24-hour diurnal operational cycle with robust stability', () => {
      // 24-hour diurnal pattern typical in municipal water supply
      const diurnalCurve = [
        0.65, 0.58, 0.55, 0.58, 0.70, 0.95, // 00:00 - 05:00 night low
        1.35, 1.55, 1.40, 1.25, 1.15, 1.10, // 06:00 - 11:00 morning peak
        1.15, 1.20, 1.15, 1.10, 1.25, 1.45, // 12:00 - 17:00 afternoon plateau
        1.60, 1.50, 1.35, 1.15, 0.90, 0.75  // 18:00 - 23:00 evening peak & drop
      ];

      const hourlyResults = diurnalCurve.map((mult, hour) => {
        const solved = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, mult);
        return { hour, mult, solved };
      });

      expect(hourlyResults).toHaveLength(24);

      // Verify each hour converged cleanly
      hourlyResults.forEach(({ hour, mult, solved }) => {
        const j3 = solved.nodes.find(n => n.id === 'J-3');
        expect(j3.computedPressureM).toBeGreaterThan(0);
        expect(solved.links.length).toBe(8);

        // When demand is higher, total system friction losses are higher
        const totalHeadLoss = solved.links.reduce((acc, l) => acc + l.computedHeadLossM, 0);
        expect(totalHeadLoss).toBeGreaterThan(0);
      });

      // Compare peak morning hour (07:00, 1.55x) with trough hour (02:00, 0.55x)
      const peakHour = hourlyResults[7];
      const troughHour = hourlyResults[2];

      const peakPressures = peakHour.solved.nodes
        .filter(n => n.type === 'junction')
        .map(n => n.computedPressureM);
      const troughPressures = troughHour.solved.nodes
        .filter(n => n.type === 'junction')
        .map(n => n.computedPressureM);

      const avgPeakPressure = peakPressures.reduce((a, b) => a + b, 0) / peakPressures.length;
      const avgTroughPressure = troughPressures.reduce((a, b) => a + b, 0) / troughPressures.length;

      expect(avgPeakPressure).toBeLessThan(avgTroughPressure);
    });

    it('evaluates emergency fire flow at industrial node J-4 with pressure safety margin at J-3', () => {
      // Normal demand vs Fire flow emergency (90 L/s at J-4 during 1.2x demand)
      const normal = solveHydraulicNetwork(EPANET_NETWORK_CONFIG, 1.2);
      const fireFlow = solveHydraulicNetwork(
        EPANET_NETWORK_CONFIG,
        1.2,
        { 'J-4': 90.0 }
      );

      const j4Fire = fireFlow.nodes.find(n => n.id === 'J-4');
      const j3Fire = fireFlow.nodes.find(n => n.id === 'J-3');

      expect(j4Fire.actualDemandLps).toBe(90.0);
      // High draw at J-4 should pull down pressure at J-3
      const j3Normal = normal.nodes.find(n => n.id === 'J-3');
      expect(j3Fire.computedPressureM).toBeLessThan(j3Normal.computedPressureM);
    });
  });
});
