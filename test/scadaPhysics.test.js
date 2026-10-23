import { describe, it, expect } from 'vitest';
import { evaluateScadaAlarms, stepScadaPhysics } from '../src/utils/scadaPhysics.js';
import { INITIAL_SCADA_STATE } from '../src/data/scadaData.js';

describe('SCADA Physics Engine (Zeriba El Oued WWTP)', () => {
  // =========================================================================
  // TIER 1: FEATURE COVERAGE (ISA-5.1 Alarms, Step Dynamics, Biology Removal)
  // =========================================================================
  describe('Tier 1 - Feature Coverage', () => {
    it('produces zero alarms for baseline nominal plant state', () => {
      const alarms = evaluateScadaAlarms(INITIAL_SCADA_STATE);
      expect(alarms).toHaveLength(0);
    });

    it('detects inlet pump trip with CRITICAL alarm and ISA-5.1 tag P-101', () => {
      const state = { ...INITIAL_SCADA_STATE, pumpIn1: false };
      const alarms = evaluateScadaAlarms(state);

      expect(alarms).toHaveLength(1);
      expect(alarms[0]).toMatchObject({
        id: 'ALM_TRIP_INLET',
        tag: 'P-101',
        severity: 'CRITICAL'
      });
    });

    it('detects storm surge influx exceeding design capacity (>= 35000 m3/d)', () => {
      const state = { ...INITIAL_SCADA_STATE, flowM3d: 36500 };
      const alarms = evaluateScadaAlarms(state);

      expect(alarms).toHaveLength(1);
      expect(alarms[0]).toMatchObject({
        id: 'ALM_HH_FLOW',
        tag: 'FIT-101',
        severity: 'CRITICAL'
      });
    });

    it('detects industrial pollution shock load on raw COD (>= 900 mg/L)', () => {
      const state = { ...INITIAL_SCADA_STATE, codIn: 980 };
      const alarms = evaluateScadaAlarms(state);

      expect(alarms).toHaveLength(1);
      expect(alarms[0]).toMatchObject({
        id: 'ALM_HH_COD',
        tag: 'AIT-102',
        severity: 'CRITICAL'
      });
    });

    it('detects anaerobic digestion slowdown below 10°C', () => {
      const state = { ...INITIAL_SCADA_STATE, tempC: 8.5 };
      const alarms = evaluateScadaAlarms(state);

      expect(alarms).toHaveLength(1);
      expect(alarms[0]).toMatchObject({
        id: 'ALM_L_TEMP',
        tag: 'TIT-201',
        severity: 'WARNING'
      });
    });

    it('detects hazardous methane buildup in anaerobic lagoon (> 15% LEL)', () => {
      const state = { ...INITIAL_SCADA_STATE, methaneLel: 17.5 };
      const alarms = evaluateScadaAlarms(state);

      expect(alarms).toHaveLength(1);
      expect(alarms[0]).toMatchObject({
        id: 'ALM_H_CH4',
        tag: 'AIT-201',
        severity: 'WARNING'
      });
    });

    it('detects facultative lagoon septic risk when dissolved oxygen < 2.0 mg/L', () => {
      const state = { ...INITIAL_SCADA_STATE, doMgL: 1.4 };
      const alarms = evaluateScadaAlarms(state);

      expect(alarms).toHaveLength(1);
      expect(alarms[0]).toMatchObject({
        id: 'ALM_L_DO',
        tag: 'AIT-301',
        severity: 'WARNING'
      });
    });

    it('detects treated water storage tank overflow (>= 92%) and low level (<= 25%)', () => {
      const highState = { ...INITIAL_SCADA_STATE, tankLevel: 94.0 };
      const highAlarms = evaluateScadaAlarms(highState);
      expect(highAlarms).toContainEqual(
        expect.objectContaining({ id: 'ALM_H_LEVEL', tag: 'LIT-501', severity: 'WARNING' })
      );

      const lowState = { ...INITIAL_SCADA_STATE, tankLevel: 22.0 };
      const lowAlarms = evaluateScadaAlarms(lowState);
      expect(lowAlarms).toContainEqual(
        expect.objectContaining({ id: 'ALM_L_LEVEL', tag: 'LIT-501', severity: 'WARNING' })
      );
    });

    it('achieves 95% biological removal efficiency under warm aerated conditions', () => {
      const warmAeratedState = {
        ...INITIAL_SCADA_STATE,
        tempC: 22.0,
        doMgL: 5.0,
        bodIn: 200.0
      };
      const next = stepScadaPhysics(warmAeratedState, 1.0);

      // removalEfficiency = 0.95 -> bodOut = 200 * (1 - 0.95) = 10 mg/L
      expect(next.bodOut).toBeCloseTo(10.0, 1);
    });

    it('drops to 85% removal efficiency under cold or depleted DO conditions', () => {
      const coldState = {
        ...INITIAL_SCADA_STATE,
        tempC: 12.0, // cold: <= 15
        doMgL: 5.0,
        bodIn: 200.0
      };
      const nextCold = stepScadaPhysics(coldState, 1.0);
      // removalEfficiency = 0.85 -> bodOut = 200 * (1 - 0.85) = 30 mg/L
      expect(nextCold.bodOut).toBeCloseTo(30.0, 1);

      const lowDoState = {
        ...INITIAL_SCADA_STATE,
        tempC: 22.0,
        doMgL: 2.5, // low DO: <= 3.0
        bodIn: 200.0
      };
      const nextLowDo = stepScadaPhysics(lowDoState, 1.0);
      expect(nextLowDo.bodOut).toBeCloseTo(30.0, 1);
    });
  });

  // =========================================================================
  // TIER 2: BOUNDARY & CORNER CASES (Exact Thresholds, Fuel Exhaustion, Overflows)
  // =========================================================================
  describe('Tier 2 - Boundary & Corner Cases', () => {
    it('verifies exact threshold boundaries for storm surge flow (35000 m3/d)', () => {
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, flowM3d: 34999.9 })).toHaveLength(0);
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, flowM3d: 35000.0 })).toHaveLength(1);
    });

    it('verifies exact threshold boundaries for COD pollution (900 mg/L)', () => {
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, codIn: 899.9 })).toHaveLength(0);
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, codIn: 900.0 })).toHaveLength(1);
    });

    it('verifies strict inequality boundaries for temperature (< 10) and methane (> 15)', () => {
      // tempC < 10 triggers
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, tempC: 10.0 })).toHaveLength(0);
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, tempC: 9.99 })).toHaveLength(1);

      // methaneLel > 15 triggers
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, methaneLel: 15.0 })).toHaveLength(0);
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, methaneLel: 15.01 })).toHaveLength(1);
    });

    it('verifies exact tank level boundaries at 92% and 25%', () => {
      // High level: >= 92
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, tankLevel: 91.9 })).toHaveLength(0);
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, tankLevel: 92.0 })).toHaveLength(1);

      // Low level: <= 25
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, tankLevel: 25.1 })).toHaveLength(0);
      expect(evaluateScadaAlarms({ ...INITIAL_SCADA_STATE, tankLevel: 25.0 })).toHaveLength(1);
    });

    it('consumes diesel fuel strictly during grid outage and prevents negative fuel levels', () => {
      // Grid connected: fuel remains constant
      const gridOnline = { ...INITIAL_SCADA_STATE, gridPower: true, generatorFuel: 50.0 };
      const nextOnline = stepScadaPhysics(gridOnline, 10.0);
      expect(nextOnline.generatorFuel).toBe(50.0);

      // Grid lost: fuel burns at 0.1 L/s * dt
      const gridOffline = { ...INITIAL_SCADA_STATE, gridPower: false, generatorFuel: 50.0 };
      const nextOffline = stepScadaPhysics(gridOffline, 10.0);
      expect(nextOffline.generatorFuel).toBeCloseTo(49.0, 5);

      // Fuel starvation: stops at zero without becoming negative
      const lowFuel = { ...INITIAL_SCADA_STATE, gridPower: false, generatorFuel: 0.05 };
      const exhausted = stepScadaPhysics(lowFuel, 10.0);
      expect(exhausted.generatorFuel).toBe(0);
    });

    it('relaxes high pollution spikes towards nominal baseline without undershooting', () => {
      const spiked = {
        ...INITIAL_SCADA_STATE,
        bodIn: 300,
        codIn: 600,
        tssIn: 400
      };
      const stepped = stepScadaPhysics(spiked, 5.0);

      // bodIn decreases by 2.0 * dt = 10 -> 290
      expect(stepped.bodIn).toBe(290);
      // codIn decreases by 4.0 * dt = 20 -> 580
      expect(stepped.codIn).toBe(580);
      // tssIn decreases by 2.0 * dt = 10 -> 390
      expect(stepped.tssIn).toBe(390);

      // When values are at or below baseline, relaxation stops
      const baseline = {
        ...INITIAL_SCADA_STATE,
        bodIn: 250,
        codIn: 500,
        tssIn: 300
      };
      const steppedBaseline = stepScadaPhysics(baseline, 10.0);
      expect(steppedBaseline.bodIn).toBe(250);
      expect(steppedBaseline.codIn).toBe(500);
      expect(steppedBaseline.tssIn).toBe(300);
    });
  });

  // =========================================================================
  // TIER 3: CROSS-FEATURE COMBINATIONS (Compound Failure & Cascade Alarms)
  // =========================================================================
  describe('Tier 3 - Cross-Feature Combinations', () => {
    it('aggregates multiple concurrent ISA-5.1 alarms during catastrophic plant event', () => {
      const catastropheState = {
        ...INITIAL_SCADA_STATE,
        pumpIn1: false,     // ALM_TRIP_INLET (CRITICAL)
        flowM3d: 38000,     // ALM_HH_FLOW (CRITICAL)
        codIn: 1200,        // ALM_HH_COD (CRITICAL)
        tempC: 7,           // ALM_L_TEMP (WARNING)
        methaneLel: 19,     // ALM_H_CH4 (WARNING)
        doMgL: 1.2,         // ALM_L_DO (WARNING)
        bodOut: 45,         // ALM_H_BOD_OUT (WARNING)
        tankLevel: 96       // ALM_H_LEVEL (WARNING)
      };

      const alarms = evaluateScadaAlarms(catastropheState);

      expect(alarms).toHaveLength(8);

      const criticalAlarms = alarms.filter(a => a.severity === 'CRITICAL');
      const warningAlarms = alarms.filter(a => a.severity === 'WARNING');

      expect(criticalAlarms).toHaveLength(3);
      expect(warningAlarms).toHaveLength(5);

      const tags = alarms.map(a => a.tag);
      expect(tags).toEqual(
        expect.arrayContaining(['P-101', 'FIT-101', 'AIT-102', 'TIT-201', 'AIT-201', 'AIT-301', 'AIT-401', 'LIT-501'])
      );
    });

    it('demonstrates biological failure cascading into effluent quality violation', () => {
      // In warm aerated conditions with moderate influent BOD (250 mg/L),
      // 95% removal yields bodOut = 12.5 mg/L (< 30 mg/L limit)
      const normalBiology = {
        ...INITIAL_SCADA_STATE,
        tempC: 25.0,
        doMgL: 6.0,
        bodIn: 250.0
      };
      const normalResult = stepScadaPhysics(normalBiology, 1.0);
      expect(normalResult.bodOut).toBeCloseTo(12.5, 4);
      const normalAlarms = evaluateScadaAlarms(normalResult);
      expect(normalAlarms.find(a => a.id === 'ALM_H_BOD_OUT')).toBeUndefined();

      // Winter chill (temp drops to 12°C): removal drops to 85%
      // bodOut = 250 * 0.15 = 37.5 mg/L -> triggers ALM_H_BOD_OUT (>= 30)
      const winterBiology = {
        ...INITIAL_SCADA_STATE,
        tempC: 12.0,
        doMgL: 6.0,
        bodIn: 250.0
      };
      const winterResult = stepScadaPhysics(winterBiology, 1.0);
      expect(winterResult.bodOut).toBeCloseTo(37.5, 4);
      expect(winterResult.activeAlarms.find(a => a.id === 'ALM_H_BOD_OUT')).toBeDefined();
    });
  });

  // =========================================================================
  // TIER 4: REAL-WORLD APPLICATION SCENARIOS (Spill Remediation & Diurnal Flow)
  // =========================================================================
  describe('Tier 4 - Real-World Application Scenarios', () => {
    it('simulates progressive plant recovery following industrial spill event', () => {
      // Acute industrial shock load: COD spiked to 1100 mg/L, BOD spiked to 350 mg/L
      let currentState = {
        ...INITIAL_SCADA_STATE,
        codIn: 1100.0,
        bodIn: 350.0,
        activeAlarms: []
      };

      // Initial state has active COD spike alarm
      currentState.activeAlarms = evaluateScadaAlarms(currentState);
      expect(currentState.activeAlarms.some(a => a.id === 'ALM_HH_COD')).toBe(true);

      // Simulate 60 seconds of process dynamics (60 steps of dt = 1.0s)
      for (let t = 0; t < 60; t++) {
        currentState = stepScadaPhysics(currentState, 1.0);
      }

      // COD decreases by 4.0 mg/L each second: 1100 - (60 * 4) = 860 mg/L
      expect(currentState.codIn).toBeCloseTo(860.0, 1);
      // Because COD < 900, the ALM_HH_COD alarm clears automatically!
      expect(currentState.activeAlarms.some(a => a.id === 'ALM_HH_COD')).toBe(false);

      // BOD decreases by 2.0 mg/L each second: 350 - (60 * 2) = 230 mg/L -> relaxes to 250
      expect(currentState.bodIn).toBeLessThanOrEqual(250.0);
    });

    it('simulates 24-step diurnal cycle tracking target flow within bounded limits', () => {
      let state = { ...INITIAL_SCADA_STATE };

      for (let step = 0; step < 24; step++) {
        state = stepScadaPhysics(state, 5.0);

        // Flow should stay within safe design parameters (around 24000 +/- 3000)
        expect(state.flowM3d).toBeGreaterThan(18000);
        expect(state.flowM3d).toBeLessThan(30000);
        expect(state.activeAlarms).toBeDefined();
      }
    });
  });
});
