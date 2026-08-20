/**
 * EPANET 2.2 Looped Hydraulic Network Topology & Scenario Configurations
 */

export const EPANET_NETWORK_CONFIG = {
  nodes: [
    {
      id: "RES-1",
      label: "Water Source Reservoir",
      type: "reservoir",
      x: 90,
      y: 80,
      elevationM: 45.0,
      fixedHeadM: 85.0,
      baseDemandLps: 0.0,
      description: "Primary municipal impoundment reservoir providing constant boundary head."
    },
    {
      id: "J-1",
      label: "Transmission Intake Hub",
      type: "junction",
      x: 180,
      y: 160,
      elevationM: 46.0,
      baseDemandLps: 0.0,
      description: "Primary transmission manifold connecting low-lift pump discharge to arterial loop."
    },
    {
      id: "J-2",
      label: "Commercial District Junction",
      type: "junction",
      x: 450,
      y: 160,
      elevationM: 52.0,
      baseDemandLps: 18.0,
      description: "Commercial center with offices, shopping complexes, and steady daytime demand."
    },
    {
      id: "J-3",
      label: "North Residential Sector",
      type: "junction",
      x: 580,
      y: 280,
      elevationM: 58.0,
      baseDemandLps: 24.0,
      description: "High-elevation residential zone sensitive to peak hour pressure drops."
    },
    {
      id: "J-4",
      label: "Industrial Park Hub",
      type: "junction",
      x: 400,
      y: 380,
      elevationM: 49.0,
      baseDemandLps: 32.0,
      description: "Heavy commercial & light industrial zone with high base consumption and fire hydrants."
    },
    {
      id: "J-5",
      label: "South Residential Sector",
      type: "junction",
      x: 200,
      y: 340,
      elevationM: 54.0,
      baseDemandLps: 20.0,
      description: "Dense residential neighborhood served by western arterial return pipe P-107."
    },
    {
      id: "TK-1",
      label: "Elevated Balancing Tank",
      type: "tank",
      x: 640,
      y: 440,
      elevationM: 62.0,
      initialLevelM: 7.5,
      minLevelM: 2.0,
      maxLevelM: 12.0,
      diameterM: 15.0,
      baseDemandLps: 0.0,
      description: "Elevated storage tank providing peak shaving and gravity pressure stabilization."
    }
  ],
  links: [
    {
      id: "PMP-1",
      label: "Booster Pump Station 01",
      type: "pump",
      fromNode: "RES-1",
      toNode: "J-1",
      nominalHeadM: 55.0,
      shutoffHeadM: 65.0,
      isActive: true,
      throttlePct: 100,
      description: "Variable-frequency centrifugal booster pump station delivering water into arterial loop."
    },
    {
      id: "P-101",
      label: "Main Arterial Trunk P-101",
      type: "pipe",
      fromNode: "J-1",
      toNode: "J-2",
      lengthM: 1200,
      diameterMm: 350,
      roughnessC: 130,
      minorLossKm: 0.5,
      throttlePct: 100,
      isBurst: false,
      description: "Primary ductile iron transmission main connecting intake to commercial zone."
    },
    {
      id: "P-102",
      label: "North Distribution Line P-102",
      type: "pipe",
      fromNode: "J-2",
      toNode: "J-3",
      lengthM: 950,
      diameterMm: 250,
      roughnessC: 120,
      minorLossKm: 1.2,
      throttlePct: 100,
      isBurst: false,
      description: "Feeder pipeline conveying flow northward to residential sector."
    },
    {
      id: "P-103",
      label: "Industrial Central Feeder P-103",
      type: "pipe",
      fromNode: "J-2",
      toNode: "J-4",
      lengthM: 800,
      diameterMm: 300,
      roughnessC: 130,
      minorLossKm: 0.8,
      throttlePct: 100,
      isBurst: false,
      description: "High-capacity line branching south to industrial park."
    },
    {
      id: "P-104",
      label: "Inter-Sector Loop Tie P-104",
      type: "pipe",
      fromNode: "J-3",
      toNode: "J-4",
      lengthM: 600,
      diameterMm: 200,
      roughnessC: 110,
      minorLossKm: 1.5,
      throttlePct: 100,
      isBurst: false,
      description: "Loop tie-in providing network redundancy between North and Industrial sectors."
    },
    {
      id: "P-105",
      label: "South Industrial Connector P-105",
      type: "pipe",
      fromNode: "J-4",
      toNode: "J-5",
      lengthM: 1100,
      diameterMm: 250,
      roughnessC: 120,
      minorLossKm: 1.0,
      throttlePct: 100,
      isBurst: false,
      description: "Secondary loop arterial conveying flow toward South residential zone."
    },
    {
      id: "P-106",
      label: "Tank Balancing Line P-106",
      type: "pipe",
      fromNode: "J-3",
      toNode: "TK-1",
      lengthM: 450,
      diameterMm: 250,
      roughnessC: 130,
      minorLossKm: 2.0,
      throttlePct: 100,
      isBurst: false,
      description: "Bidirectional filling and draining pipeline connecting elevated tank to North hub."
    },
    {
      id: "P-107",
      label: "Western Return Arterial P-107",
      type: "pipe",
      fromNode: "J-5",
      toNode: "J-1",
      lengthM: 1400,
      diameterMm: 300,
      roughnessC: 125,
      minorLossKm: 0.5,
      throttlePct: 100,
      isBurst: false,
      description: "Western loop closure pipe returning excess head to primary manifold."
    }
  ]
};

export const HYDRAULIC_SCENARIOS = [
  {
    id: "SCENARIO_BASE",
    name: "Nominal Base Flow",
    description: "Standard daytime average demand profile (100% baseline consumption).",
    demandMultiplier: 1.0,
    demandOverrides: {},
    burstPipes: []
  },
  {
    id: "SCENARIO_MORNING_PEAK",
    name: "Morning Peak Demand (1.85x)",
    description: "High residential and commercial consumption surge across all sectors.",
    demandMultiplier: 1.85,
    demandOverrides: {},
    burstPipes: []
  },
  {
    id: "SCENARIO_MIN_NIGHT",
    name: "Minimum Night Flow (0.40x)",
    description: "Low midnight demand causing elevated static pressures and tank replenishment.",
    demandMultiplier: 0.40,
    demandOverrides: {},
    burstPipes: []
  },
  {
    id: "SCENARIO_FIRE_FLOW",
    name: "Emergency Fire Flow at J-4",
    description: "Sudden industrial fire hydrant activation (+70 L/s at Industrial Hub J-4).",
    demandMultiplier: 1.2,
    demandOverrides: { "J-4": 102.0 },
    burstPipes: []
  },
  {
    id: "SCENARIO_PIPE_BURST",
    name: "Main Arterial Burst (P-101)",
    description: "Simulated catastrophic rupture on main trunk P-101 with 45 L/s emitter leak.",
    demandMultiplier: 1.0,
    demandOverrides: {},
    burstPipes: ["P-101"]
  }
];
