/**
 * SCADA WWTP (Zeriba El Oued) Numerical Physics Engine
 */

export function evaluateScadaAlarms(state) {
  const alarms = [];

  // Pump tripped
  if (!state.pumpIn1) {
    alarms.push({ id: 'ALM_TRIP_INLET', tag: 'P-101', severity: 'CRITICAL', msg: 'Inlet Pump P-101 Tripped: Thermal Overload' });
  }

  // Flow alarms
  if (state.flowM3d >= 35000) {
    alarms.push({ id: 'ALM_HH_FLOW', tag: 'FIT-101', severity: 'CRITICAL', msg: 'Storm Surge Influx: Flow Exceeds Design Capacity' });
  }

  // Pollution Spikes
  if (state.codIn >= 900) {
    alarms.push({ id: 'ALM_HH_COD', tag: 'AIT-102', severity: 'CRITICAL', msg: 'Industrial Pollution Spike Detected: High COD' });
  }

  // Anaerobic Lagoon
  if (state.tempC < 10) {
    alarms.push({ id: 'ALM_L_TEMP', tag: 'TIT-201', severity: 'WARNING', msg: 'Anaerobic Digestion Slowdown: Low Temperature' });
  }
  if (state.methaneLel > 15) {
    alarms.push({ id: 'ALM_H_CH4', tag: 'AIT-201', severity: 'WARNING', msg: 'High Methane Concentration (LEL)' });
  }

  // Facultative
  if (state.doMgL < 2.0) {
    alarms.push({ id: 'ALM_L_DO', tag: 'AIT-301', severity: 'WARNING', msg: 'Low Dissolved Oxygen: Risk of Septicity' });
  }

  // Effluent Quality
  if (state.bodOut >= 30) {
    alarms.push({ id: 'ALM_H_BOD_OUT', tag: 'AIT-401', severity: 'WARNING', msg: 'Effluent BOD5 Limit Exceeded' });
  }

  // Tank Level
  if (state.tankLevel >= 92) {
    alarms.push({ id: 'ALM_H_LEVEL', tag: 'LIT-501', severity: 'WARNING', msg: 'Treated Water Tank High Level' });
  } else if (state.tankLevel <= 25) {
    alarms.push({ id: 'ALM_L_LEVEL', tag: 'LIT-501', severity: 'WARNING', msg: 'Treated Water Tank Low Level' });
  }

  return alarms;
}

export function stepScadaPhysics(state, dtSeconds = 1.0) {
  let {
    flowM3d,
    bodIn,
    codIn,
    tssIn,
    tempC,
    methaneLel,
    doMgL,
    ph,
    bodOut,
    turbidityOut,
    tankLevel,
    pumpIn1,
    pumpIn2,
    pumpOut1,
    pumpOut2,
    pumpOut3,
    generatorFuel
  } = state;

  // Relax towards nominal if not actively spiked
  const diurnalTargetFlow = 24000 + Math.sin(Date.now() / 10000) * 3000;
  flowM3d += (diurnalTargetFlow - flowM3d) * 0.05 * dtSeconds;
  
  if (bodIn > 250) bodIn -= 2.0 * dtSeconds;
  if (codIn > 500) codIn -= 4.0 * dtSeconds;
  if (tssIn > 300) tssIn -= 2.0 * dtSeconds;

  // Biology simulation
  const removalEfficiency = tempC > 15 && doMgL > 3.0 ? 0.95 : 0.85;
  bodOut = bodIn * (1 - removalEfficiency);
  
  // Fuel usage if grid disconnected
  if (!state.gridPower && generatorFuel > 0) {
    generatorFuel -= 0.1 * dtSeconds;
  }

  const nextState = {
    ...state,
    flowM3d,
    bodIn,
    codIn,
    tssIn,
    tempC,
    methaneLel,
    doMgL,
    ph,
    bodOut,
    turbidityOut,
    tankLevel,
    generatorFuel: Math.max(0, generatorFuel)
  };

  nextState.activeAlarms = evaluateScadaAlarms(nextState);

  return nextState;
}
