/**
 * SCADA WWTP Configuration & ISA-5.1 Instrumentation Data (Zeriba El Oued)
 */

export const SENSOR_TAGS = {
  "FIT-101": {
    tag: "FIT-101",
    name: "Raw Sewage Inlet Flow",
    unit: "m³/d",
    nominalLow: 15000,
    nominalHigh: 28000,
    warnHigh: 35000,
    critHigh: 40000
  },
  "AIT-101": {
    tag: "AIT-101",
    name: "Raw Influent BOD5",
    unit: "mg/L",
    nominalLow: 150,
    nominalHigh: 350,
    warnHigh: 450,
    critHigh: 600
  },
  "AIT-102": {
    tag: "AIT-102",
    name: "Raw Influent COD",
    unit: "mg/L",
    nominalLow: 300,
    nominalHigh: 700,
    warnHigh: 900,
    critHigh: 1200
  },
  "AIT-103": {
    tag: "AIT-103",
    name: "Raw Influent TSS (MES)",
    unit: "mg/L",
    nominalLow: 150,
    nominalHigh: 400,
    warnHigh: 550,
    critHigh: 800
  },
  "TIT-201": {
    tag: "TIT-201",
    name: "Anaerobic Lagoon Temp",
    unit: "°C",
    nominalLow: 15,
    nominalHigh: 30,
    warnLow: 10,
    warnHigh: 35,
    critLow: 5,
    critHigh: 40
  },
  "AIT-201": {
    tag: "AIT-201",
    name: "Anaerobic Methane",
    unit: "% LEL",
    nominalLow: 4,
    nominalHigh: 12,
    warnHigh: 15,
    critHigh: 20
  },
  "AIT-301": {
    tag: "AIT-301",
    name: "Facultative Lagoon DO",
    unit: "mg/L",
    nominalLow: 4.0,
    nominalHigh: 8.0,
    warnLow: 2.0,
    critLow: 1.0
  },
  "AIT-302": {
    tag: "AIT-302",
    name: "Facultative Lagoon pH",
    unit: "pH",
    nominalLow: 6.5,
    nominalHigh: 8.5,
    warnLow: 6.0,
    warnHigh: 9.0,
    critLow: 5.0,
    critHigh: 10.0
  },
  "AIT-401": {
    tag: "AIT-401",
    name: "Final Effluent BOD5",
    unit: "mg/L",
    nominalLow: 5,
    nominalHigh: 25,
    warnHigh: 30,
    critHigh: 50
  },
  "AIT-402": {
    tag: "AIT-402",
    name: "Final Effluent Turbidity",
    unit: "NTU",
    nominalLow: 1.0,
    nominalHigh: 10.0,
    warnHigh: 15.0,
    critHigh: 25.0
  },
  "LIT-501": {
    tag: "LIT-501",
    name: "Treated Water Tank Level",
    unit: "%",
    nominalLow: 40.0,
    nominalHigh: 85.0,
    warnLow: 25.0,
    warnHigh: 92.0,
    critLow: 12.0,
    critHigh: 98.0
  }
};

export const INITIAL_SCADA_STATE = {
  isRunning: true,
  controlMode: "AUTO",
  flowM3d: 24000.0,
  bodIn: 250.0,
  codIn: 500.0,
  tssIn: 300.0,
  tempC: 22.0,
  methaneLel: 8.0,
  doMgL: 5.5,
  ph: 7.8,
  bodOut: 12.0,
  turbidityOut: 3.5,
  tankLevel: 65.0,
  
  pumpIn1: true,
  pumpIn2: true,
  pumpOut1: true,
  pumpOut2: true,
  pumpOut3: false,
  
  gridPower: true,
  generatorFuel: 85.0,
  screenAuto: true,
  
  activeAlarms: [],
  eventLog: [
    { id: 1, time: "00:00:01", severity: "INFO", message: "SCADA PLC Controller Online - Normal Diurnal Flow Active" },
    { id: 2, time: "00:00:02", severity: "INFO", message: "Zeriba El Oued Process Train Initialized - Nominal Steady State" }
  ]
};
