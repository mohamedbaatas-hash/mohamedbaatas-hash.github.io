import React, { useState } from 'react';

/**
 * Interactive CAD Blueprint Schematics for the 4 Verified Hydraulic Engineering Studies:
 * 1. water-supply-network: Interactive EPANET Looped Network Plan with clickable nodes
 * 2. sewerage-drainage: Interactive Longitudinal Gravity Sewer Collector Profile (Profil en Long)
 * 3. water-reservoir: Interactive Cylindrical RC Storage Tank Cross-Section & Hydraulic Chamber
 * 4. artesian-well: Interactive Hydrogeological Borehole Log & Step-Drawdown Cone of Depression
 */
export function HydraulicSchematicViewer({ studyId, isAr }) {
  if (studyId === 'water-supply-network') {
    return <WaterSupplyNetworkSchematic isAr={isAr} />;
  }
  if (studyId === 'sewerage-drainage') {
    return <SewerageProfileSchematic isAr={isAr} />;
  }
  if (studyId === 'water-reservoir') {
    return <ReservoirCrossSectionSchematic isAr={isAr} />;
  }
  return <ArtesianWellSchematic isAr={isAr} />;
}

/* ============================================================================
 * 1. LOOPED DRINKING WATER DISTRIBUTION NETWORK (EPANET 2.2)
 * ============================================================================ */
const NETWORK_NODES = [
  { id: 'J-01', x: 145, y: 75, z: '112.0m', q: '6.4 L/s', pNom: '34.2 mH₂O', pFire: '28.5 mH₂O' },
  { id: 'J-02', x: 280, y: 65, z: '109.5m', q: '8.2 L/s', pNom: '35.1 mH₂O', pFire: '27.8 mH₂O' },
  { id: 'J-03', x: 405, y: 85, z: '106.0m', q: '9.5 L/s', pNom: '36.8 mH₂O', pFire: '25.4 mH₂O' },
  { id: 'J-04', x: 155, y: 175, z: '110.2m', q: '7.1 L/s', pNom: '34.9 mH₂O', pFire: '28.1 mH₂O' },
  { id: 'J-05', x: 285, y: 180, z: '107.8m', q: '11.0 L/s', pNom: '35.6 mH₂O', pFire: '26.0 mH₂O' },
  { id: 'J-06', x: 410, y: 175, z: '104.5m', q: '12.8 L/s', pNom: '37.2 mH₂O', pFire: '22.9 mH₂O' },
];

function WaterSupplyNetworkSchematic({ isAr }) {
  const [selectedNodeId, setSelectedNodeId] = useState('J-05');
  const [fireMode, setFireMode] = useState(false);

  const activeNode = NETWORK_NODES.find((n) => n.id === selectedNodeId) || NETWORK_NODES[4];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Schematic Toolbar */}
      <div className="px-4 py-2.5 border-b border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-[#0B101E]/90 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 bg-blue-600 text-white dark:bg-sky-400 dark:text-slate-950 font-bold text-[10px]">
            CAD // EPANET 2.2
          </span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {isAr ? 'مخطط الشبكة الحلقية (Réseau Maillé)' : 'LOOPED DISTRIBUTION TOPOLOGY (MAILLÉ)'}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setFireMode(false)}
            className={`px-2.5 py-1 text-[10px] border transition-colors ${
              !fireMode
                ? 'bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950 border-transparent font-bold'
                : 'bg-transparent border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
            }`}
          >
            {isAr ? 'ذروة الاستهلاك' : 'PEAK HOUR'}
          </button>
          <button
            onClick={() => setFireMode(true)}
            className={`px-2.5 py-1 text-[10px] border transition-colors ${
              fireMode
                ? 'bg-amber-500 text-slate-950 border-transparent font-bold'
                : 'bg-transparent border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
            }`}
          >
            {isAr ? 'سيناريو حريق (+17 L/s)' : 'FIRE FLOW (+17 L/s)'}
          </button>
        </div>
      </div>

      {/* SVG Network Blueprint */}
      <div className="p-4 sm:p-6 flex-1 flex items-center justify-center relative bg-swiss-grid">
        <svg viewBox="0 0 470 240" className="w-full h-auto select-none">
          {/* Pressure Zone Contour Background */}
          <rect
            x="115"
            y="35"
            width="330"
            height="175"
            rx="4"
            className="fill-blue-500/[0.03] dark:fill-sky-400/[0.03] stroke-slate-300 dark:stroke-slate-800"
            strokeDasharray="4 4"
          />
          <text x="125" y="50" className="fill-slate-400 dark:fill-slate-500 font-mono text-[8px]">
            LOOPED PRESSURE ZONE 01 // PEHD PN16 // C = 140
          </text>

          {/* Elevated Reservoir R-01 */}
          <g transform="translate(22, 102)">
            <rect x="0" y="0" width="46" height="36" className="fill-blue-600/15 dark:fill-sky-400/15 stroke-blue-600 dark:stroke-sky-400" strokeWidth="1.5" />
            <line x1="4" y1="12" x2="42" y2="12" className="stroke-blue-600 dark:stroke-sky-400" strokeWidth="1.5" />
            <text x="23" y="25" textAnchor="middle" className="fill-slate-900 dark:fill-white font-mono text-[9px] font-bold">
              R-01
            </text>
            <text x="23" y="48" textAnchor="middle" className="fill-slate-500 dark:fill-slate-400 font-mono text-[7.5px]">
              H₀=148.0m
            </text>
          </g>

          {/* Main Feeder Pipe from Reservoir to J-01 & J-04 */}
          <path
            d="M68 120 L105 120 L145 75 M105 120 L155 175"
            fill="none"
            className="stroke-slate-700 dark:stroke-slate-300"
            strokeWidth="4"
          />
          <path
            d="M68 120 L105 120 L145 75 M105 120 L155 175"
            fill="none"
            className="stroke-sky-400 animate-hydraulic-flow"
            strokeWidth="1.8"
            strokeDasharray="5 5"
          />
          <text x="86" y="112" textAnchor="middle" className="fill-blue-600 dark:fill-sky-400 font-mono text-[8px] font-bold">
            DN315
          </text>

          {/* Looped Ring Pipes (Maille I & Maille II) */}
          {[
            { x1: 145, y1: 75, x2: 280, y2: 65, dn: 'DN250' },
            { x1: 280, y1: 65, x2: 405, y2: 85, dn: 'DN200' },
            { x1: 155, y1: 175, x2: 285, y2: 180, dn: 'DN250' },
            { x1: 285, y1: 180, x2: 410, y2: 175, dn: 'DN200' },
            { x1: 145, y1: 75, x2: 155, y2: 175, dn: 'DN160' },
            { x1: 280, y1: 65, x2: 285, y2: 180, dn: 'DN160' },
            { x1: 405, y1: 85, x2: 410, y2: 175, dn: 'DN160' },
          ].map((pipe, idx) => (
            <g key={idx}>
              <line
                x1={pipe.x1}
                y1={pipe.y1}
                x2={pipe.x2}
                y2={pipe.y2}
                className="stroke-slate-600 dark:stroke-slate-400"
                strokeWidth="3"
              />
              <line
                x1={pipe.x1}
                y1={pipe.y1}
                x2={pipe.x2}
                y2={pipe.y2}
                className={`${fireMode ? 'stroke-amber-400' : 'stroke-sky-400'} animate-hydraulic-flow`}
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />
              <text
                x={(pipe.x1 + pipe.x2) / 2}
                y={(pipe.y1 + pipe.y2) / 2 - 6}
                textAnchor="middle"
                className="fill-slate-500 dark:fill-slate-400 font-mono text-[7.5px]"
              >
                {pipe.dn}
              </text>
            </g>
          ))}

          {/* Loop Labels */}
          <text x="215" y="128" textAnchor="middle" className="fill-slate-400/70 dark:fill-slate-600 font-mono text-[10px] font-bold">
            LOOP I (ΔQ=0)
          </text>
          <text x="345" y="128" textAnchor="middle" className="fill-slate-400/70 dark:fill-slate-600 font-mono text-[10px] font-bold">
            LOOP II (ΔQ=0)
          </text>

          {/* Clickable Junction Nodes */}
          {NETWORK_NODES.map((node) => {
            const isSelected = node.id === selectedNodeId;
            return (
              <g
                key={node.id}
                onClick={() => setSelectedNodeId(node.id)}
                className="cursor-pointer"
              >
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="13"
                    className="fill-blue-500/20 dark:fill-sky-400/20 stroke-blue-600 dark:stroke-sky-400"
                    strokeWidth="1"
                  />
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="6.5"
                  className={
                    isSelected
                      ? 'fill-blue-600 dark:fill-sky-400 stroke-white dark:stroke-slate-950'
                      : 'fill-white dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-200'
                  }
                  strokeWidth="2"
                />
                <text
                  x={node.x}
                  y={node.y + 18}
                  textAnchor="middle"
                  className={`font-mono text-[8.5px] font-bold ${
                    isSelected ? 'fill-blue-600 dark:fill-sky-400' : 'fill-slate-700 dark:fill-slate-300'
                  }`}
                >
                  {node.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Bottom Interactive Node Telemetry Strip */}
      <div className="border-t border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E] grid grid-cols-4 divide-x rtl:divide-x-reverse divide-slate-200/90 dark:divide-slate-800/90 font-mono text-xs">
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Selected Node</span>
          <span className="font-bold text-blue-600 dark:text-sky-400">{activeNode.id} (Click node)</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Ground Elev (Z)</span>
          <span className="font-bold text-slate-900 dark:text-white tabular-nums">{activeNode.z}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Nodal Demand</span>
          <span className="font-bold text-slate-900 dark:text-white tabular-nums">{activeNode.q}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Service Pressure</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
            {fireMode ? activeNode.pFire : activeNode.pNom}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 2. URBAN WASTEWATER & STORMWATER GRAVITY DRAINAGE (PROFIL EN LONG)
 * ============================================================================ */
const STORM_SCENARIOS = {
  dry: {
    id: 'dry',
    label: 'Dry Weather (EU)',
    labelAr: 'مياه الصرف (طقس جاف)',
    qPeak: '34.0 L/s',
    fillRatio: '28% (h/D = 0.28)',
    velocity: '0.94 m/s',
    shear: '2.1 N/m² (OK)',
    waterOffset: 4
  },
  storm5: {
    id: 'storm5',
    label: '5-Yr Storm (T=5)',
    labelAr: 'عاصفة مطرية (5 سنوات)',
    qPeak: '165.0 L/s',
    fillRatio: '64% (h/D = 0.64)',
    velocity: '1.58 m/s',
    shear: '4.6 N/m² (OK)',
    waterOffset: 8
  },
  storm10: {
    id: 'storm10',
    label: '10-Yr Storm (T=10)',
    labelAr: 'ذروة مطرية (10 سنوات)',
    qPeak: '242.0 L/s',
    fillRatio: '79% (h/D = 0.79)',
    velocity: '1.86 m/s',
    shear: '5.8 N/m² (OK)',
    waterOffset: 11
  }
};

function SewerageProfileSchematic({ isAr }) {
  const [stormKey, setStormKey] = useState('storm10');
  const storm = STORM_SCENARIOS[stormKey];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Toolbar */}
      <div className="px-4 py-2.5 border-b border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-[#0B101E]/90 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 bg-blue-600 text-white dark:bg-sky-400 dark:text-slate-950 font-bold text-[10px]">
            CAD // PROFIL EN LONG
          </span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {isAr ? 'المقطع الطولي للمجمع الرئيسي (Collecteur A)' : 'GRAVITY COLLECTOR LONGITUDINAL PROFILE'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {Object.values(STORM_SCENARIOS).map((s) => (
            <button
              key={s.id}
              onClick={() => setStormKey(s.id)}
              className={`px-2 py-1 text-[10px] border transition-colors ${
                stormKey === s.id
                  ? 'bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950 border-transparent font-bold'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {isAr ? s.labelAr : s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Longitudinal Profile SVG */}
      <div className="p-4 sm:p-6 flex-1 flex items-center justify-center bg-swiss-grid">
        <svg viewBox="0 0 470 240" className="w-full h-auto select-none">
          {/* Datum Reference Plane */}
          <line x1="25" y1="195" x2="445" y2="195" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1.5" />
          <text x="28" y="210" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8px] font-bold">
            DATUM ELEVATION: 100.00m NGA // SLOPE I = 0.0085 m/m // MANNING Ks = 75
          </text>

          {/* Natural Ground Surface Line (Côte Terrain Naturel - TN) */}
          <polyline
            points="50,52 145,62 240,74 335,84 425,96"
            fill="none"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="2"
            strokeDasharray="4 2"
          />
          <text x="55" y="44" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[8px] font-bold">
            CÔTE TERRAIN NATUREL (TN)
          </text>

          {/* Gravity Collector Pipe Crown & Invert (DN400 - DN500) */}
          <polygon
            points="50,104 425,152 425,168 50,120"
            className="fill-slate-200/80 dark:fill-slate-800/90 stroke-slate-700 dark:stroke-slate-300"
            strokeWidth="1.5"
          />

          {/* Dynamic Free-Surface Water Depth inside Gravity Sewer */}
          <polygon
            points={`50,${120 - storm.waterOffset} 425,${168 - storm.waterOffset} 425,168 50,120`}
            className="fill-sky-500/45 dark:fill-sky-400/45 transition-all duration-500"
          />
          <line
            x1="50"
            y1={120 - storm.waterOffset}
            x2="425"
            y2={168 - storm.waterOffset}
            className="stroke-blue-600 dark:stroke-sky-300 animate-hydraulic-flow transition-all duration-500"
            strokeWidth="1.8"
            strokeDasharray="6 4"
          />

          {/* Inspection Manholes (Regards de Visite R1 -> R5) */}
          {[
            { id: 'R1', x: 50, tnY: 52, radY: 120, tn: '114.20', rad: '111.80' },
            { id: 'R2', x: 145, tnY: 62, radY: 132, tn: '113.40', rad: '110.95' },
            { id: 'R3', x: 240, tnY: 74, radY: 144, tn: '112.50', rad: '110.10' },
            { id: 'R4', x: 335, tnY: 84, radY: 156, tn: '111.70', rad: '109.25' },
            { id: 'R5', x: 425, tnY: 96, radY: 168, tn: '110.85', rad: '108.40' },
          ].map((mh) => (
            <g key={mh.id}>
              {/* Vertical Manhole Shaft */}
              <rect
                x={mh.x - 5}
                y={mh.tnY}
                width="10"
                height={mh.radY - mh.tnY}
                className="fill-white/90 dark:fill-slate-900/90 stroke-slate-800 dark:stroke-slate-200"
                strokeWidth="1.5"
              />
              {/* Reference Vertical Drop Line to Datum */}
              <line
                x1={mh.x}
                y1={mh.radY}
                x2={mh.x}
                y2="195"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeDasharray="2 2"
              />
              {/* Manhole ID & Invert Elevation */}
              <text x={mh.x} y={mh.tnY - 6} textAnchor="middle" className="fill-slate-900 dark:fill-white font-mono text-[8.5px] font-bold">
                {mh.id}
              </text>
              <text x={mh.x} y="190" textAnchor="middle" className="fill-blue-600 dark:fill-sky-400 font-mono text-[7.5px] font-bold">
                {mh.rad}m
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Bottom Telemetry Strip */}
      <div className="border-t border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E] grid grid-cols-4 divide-x rtl:divide-x-reverse divide-slate-200/90 dark:divide-slate-800/90 font-mono text-xs">
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Rational Flow Q</span>
          <span className="font-bold text-slate-900 dark:text-white tabular-nums">{storm.qPeak}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Filling Ratio</span>
          <span className="font-bold text-blue-600 dark:text-sky-400 tabular-nums">{storm.fillRatio}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Flow Velocity V</span>
          <span className="font-bold text-slate-900 dark:text-white tabular-nums">{storm.velocity}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Self-Cleansing τ₀</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">{storm.shear}</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 3. MUNICIPAL WATER STORAGE RESERVOIR CROSS-SECTION
 * ============================================================================ */
const RESERVOIR_STATES = {
  normal: {
    id: 'normal',
    label: 'Normal Service (NPE)',
    labelAr: 'مستوى التشغيل العادي',
    waterTopY: 68,
    volume: '1,500 m³ (100%)',
    fireReserve: '240 m³ (Protected)',
    inletState: 'OPEN (45 L/s)',
    drainState: 'CLOSED'
  },
  fire: {
    id: 'fire',
    label: 'Fire Reserve Drawdown',
    labelAr: 'سحب احتياطي الحريق',
    waterTopY: 118,
    volume: '380 m³ (Emergency)',
    fireReserve: 'ACTIVE FIRE DISCHARGE',
    inletState: 'MAX INFLOW (65 L/s)',
    drainState: 'CLOSED'
  },
  scour: {
    id: 'scour',
    label: 'Maintenance Scour (Vidange)',
    labelAr: 'تفريغ وصيانة القاع',
    waterTopY: 146,
    volume: '65 m³ (Draining)',
    fireReserve: 'BYPASS ACTIVE',
    inletState: 'ISOLATED',
    drainState: 'OPEN (DN200 SCOUR)'
  }
};

function ReservoirCrossSectionSchematic({ isAr }) {
  const [stateKey, setStateKey] = useState('normal');
  const rState = RESERVOIR_STATES[stateKey];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Toolbar */}
      <div className="px-4 py-2.5 border-b border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-[#0B101E]/90 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 bg-blue-600 text-white dark:bg-sky-400 dark:text-slate-950 font-bold text-[10px]">
            CAD // COUPÉ AA
          </span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {isAr ? 'مقطع الخزان والغرفة الهيدروليكية (Chambre des Vannes)' : 'RC RESERVOIR & HYDRAULIC CHAMBER SECTION'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {Object.values(RESERVOIR_STATES).map((st) => (
            <button
              key={st.id}
              onClick={() => setStateKey(st.id)}
              className={`px-2 py-1 text-[10px] border transition-colors ${
                stateKey === st.id
                  ? 'bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950 border-transparent font-bold'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {isAr ? st.labelAr : st.label}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Tank Cross-Section */}
      <div className="p-4 sm:p-6 flex-1 flex items-center justify-center bg-swiss-grid">
        <svg viewBox="0 0 470 240" className="w-full h-auto select-none">
          {/* Reinforced Concrete Cylindrical Shell */}
          <path
            d="M95,42 L355,42 L355,175 L95,175 Z"
            className="fill-white/90 dark:fill-slate-900/90 stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="6"
          />
          {/* Roof Dome / Ventilation Lantern */}
          <rect x="205" y="26" width="40" height="16" className="fill-slate-200 dark:fill-slate-800 stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" />
          <text x="225" y="21" textAnchor="middle" className="fill-slate-500 font-mono text-[7.5px]">
            VENTILATION // AIR FILTER
          </text>

          {/* Dynamic Water Column Inside Tank */}
          <rect
            x="99"
            y={rState.waterTopY}
            width="252"
            height={171 - rState.waterTopY}
            className="fill-sky-500/35 dark:fill-sky-400/30 transition-all duration-500"
          />
          <line
            x1="99"
            y1={rState.waterTopY}
            x2="351"
            y2={rState.waterTopY}
            className="stroke-blue-600 dark:stroke-sky-400 transition-all duration-500"
            strokeWidth="2"
          />

          {/* Level Lines: N.P.E (Max Water Level) & Fire Reserve Threshold */}
          <line x1="99" y1="68" x2="351" y2="68" className="stroke-blue-600/50 dark:stroke-sky-400/50" strokeDasharray="3 3" />
          <text x="106" y="63" className="fill-blue-600 dark:fill-sky-400 font-mono text-[8px] font-bold">
            N.P.E. (MAX WATER LEVEL +4.80m)
          </text>

          <line x1="99" y1="132" x2="351" y2="132" className="stroke-amber-500/70" strokeDasharray="4 3" />
          <text x="106" y="127" className="fill-amber-600 dark:fill-amber-400 font-mono text-[8px] font-bold">
            FIRE RESERVE THRESHOLD (RÉSERVE INCENDIE +1.20m)
          </text>

          {/* Left Pipe: Inlet Supply (Adduction + Float Valve) */}
          <polyline
            points="25,58 115,58 115,68"
            fill="none"
            className="stroke-blue-600 dark:stroke-sky-400"
            strokeWidth="3.5"
          />
          <circle cx="115" cy="68" r="4.5" className="fill-amber-400 stroke-slate-900" strokeWidth="1.5" />
          <text x="25" y="50" className="fill-slate-700 dark:fill-slate-300 font-mono text-[8px] font-bold">
            ADDUCTION DN250
          </text>

          {/* Right Pipe 1: Bellmouth Service Outlet (Distribution + Crépine) */}
          <polyline
            points="325,132 325,155 440,155"
            fill="none"
            className="stroke-emerald-600 dark:stroke-emerald-400"
            strokeWidth="4"
          />
          <polygon points="318,132 332,132 328,140 322,140" className="fill-emerald-500" />
          <text x="440" y="147" textAnchor="end" className="fill-emerald-600 dark:fill-emerald-400 font-mono text-[8px] font-bold">
            DISTRIBUTION + CRÉPINE DN300
          </text>

          {/* Right Pipe 2: Overflow Weir & Bottom Scour Drain (Trop-Plein & Vidange) */}
          <polyline
            points="340,66 375,66 375,192 440,192"
            fill="none"
            className="stroke-amber-500"
            strokeWidth="2.5"
          />
          <polyline
            points="225,175 225,192 375,192"
            fill="none"
            className="stroke-amber-500"
            strokeWidth="2.5"
          />
          <text x="440" y="204" textAnchor="end" className="fill-amber-600 dark:fill-amber-400 font-mono text-[8px] font-bold">
            TROP-PLEIN & VIDANGE DN200
          </text>
        </svg>
      </div>

      {/* Bottom Telemetry Strip */}
      <div className="border-t border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E] grid grid-cols-4 divide-x rtl:divide-x-reverse divide-slate-200/90 dark:divide-slate-800/90 font-mono text-xs">
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Stored Volume</span>
          <span className="font-bold text-slate-900 dark:text-white tabular-nums">{rState.volume}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Fire Protection</span>
          <span className="font-bold text-amber-600 dark:text-amber-400 tabular-nums">{rState.fireReserve}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Float Inlet Valve</span>
          <span className="font-bold text-blue-600 dark:text-sky-400 tabular-nums">{rState.inletState}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Bottom Scour</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">{rState.drainState}</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
 * 4. ARTESIAN WELL & HYDROGEOLOGICAL PUMPING TEST (FORAGE PROFOND)
 * ============================================================================ */
const PUMPING_STEPS = {
  step1: {
    id: 'step1',
    label: 'Step 1 (Q = 15 L/s)',
    labelAr: 'المرحلة 1 (15 ل/ث)',
    discharge: '15.0 L/s',
    staticLvl: '-18.5 m',
    dynamicLvl: '-26.0 m',
    drawdown: 's = 7.5 m',
    hma: 'Hman = 54.0 m',
    coneY: 88
  },
  step2: {
    id: 'step2',
    label: 'Step 2 (Q = 28 L/s)',
    labelAr: 'المرحلة 2 (28 ل/ث)',
    discharge: '28.0 L/s',
    staticLvl: '-18.5 m',
    dynamicLvl: '-35.2 m',
    drawdown: 's = 16.7 m',
    hma: 'Hman = 66.5 m',
    coneY: 112
  },
  step3: {
    id: 'step3',
    label: 'Step 3 (Q = 40 L/s)',
    labelAr: 'المرحلة 3 (40 ل/ث)',
    discharge: '40.0 L/s',
    staticLvl: '-18.5 m',
    dynamicLvl: '-46.8 m',
    drawdown: 's = 28.3 m',
    hma: 'Hman = 81.2 m',
    coneY: 138
  }
};

function ArtesianWellSchematic({ isAr }) {
  const [stepKey, setStepKey] = useState('step2');
  const step = PUMPING_STEPS[stepKey];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Top Toolbar */}
      <div className="px-4 py-2.5 border-b border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-[#0B101E]/90 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 bg-blue-600 text-white dark:bg-sky-400 dark:text-slate-950 font-bold text-[10px]">
            CAD // ESSAI DE POMPAGE
          </span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {isAr ? 'مقطع البئر الارتوازي ومخروط الانخفاض (Rabattement)' : 'BOREHOLE LOG & CONE OF DEPRESSION'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          {Object.values(PUMPING_STEPS).map((st) => (
            <button
              key={st.id}
              onClick={() => setStepKey(st.id)}
              className={`px-2 py-1 text-[10px] border transition-colors ${
                stepKey === st.id
                  ? 'bg-slate-900 text-white dark:bg-sky-400 dark:text-slate-950 border-transparent font-bold'
                  : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400'
              }`}
            >
              {isAr ? st.labelAr : st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Borehole SVG */}
      <div className="p-4 sm:p-6 flex-1 flex items-center justify-center bg-swiss-grid">
        <svg viewBox="0 0 470 240" className="w-full h-auto select-none">
          {/* Stratigraphy Layers */}
          <rect x="20" y="30" width="430" height="35" className="fill-amber-500/10 stroke-slate-300 dark:stroke-slate-800" />
          <text x="30" y="48" className="fill-slate-500 dark:fill-slate-400 font-mono text-[8px]">
            0–35m: QUATERNARY ALLUVIUM & MARL
          </text>

          <rect x="20" y="65" width="430" height="145" className="fill-sky-500/10 dark:fill-sky-400/5 stroke-slate-300 dark:stroke-slate-800" />
          <text x="30" y="198" className="fill-blue-600 dark:fill-sky-400 font-mono text-[8px] font-bold">
            CONFINED LIMESTONE / SANDSTONE AQUIFER (NAPPE CAPTIVE)
          </text>

          {/* Static Piezometric Level (Niveau Statique NS) */}
          <line x1="20" y1="68" x2="450" y2="68" className="stroke-blue-600 dark:stroke-sky-400" strokeDasharray="4 3" strokeWidth="1.5" />
          <text x="442" y="63" textAnchor="end" className="fill-blue-600 dark:fill-sky-400 font-mono text-[8px] font-bold">
            STATIC LEVEL (NS = -18.5m)
          </text>

          {/* Dynamic Cone of Depression Curve (Cône de Rabattement) */}
          <path
            d={`M 20,68 Q 185,68 223,${step.coneY} Q 261,68 450,68`}
            fill="none"
            className="stroke-amber-500 transition-all duration-500"
            strokeWidth="2.2"
          />
          <text x="442" y={step.coneY + 4} textAnchor="end" className="fill-amber-600 dark:fill-amber-400 font-mono text-[8px] font-bold">
            DYNAMIC LEVEL (ND = {step.dynamicLvl}) // {step.drawdown}
          </text>

          {/* Outer Borehole Drilling Wall & Gravel Pack (Massif Filtrant) */}
          <rect x="206" y="25" width="58" height="185" className="fill-slate-200/70 dark:fill-slate-800/70 stroke-slate-500" strokeDasharray="2 2" />
          {/* Steel Casing (Tubage) & Slotted Screen (Crépine) */}
          <rect x="217" y="20" width="36" height="190" className="fill-white dark:fill-slate-950 stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />

          {/* Slotted Screen Horizontal Bars (Crépine Inox) */}
          {[145, 155, 165, 175, 185, 195].map((yPos) => (
            <line key={yPos} x1="217" y1={yPos} x2="253" y2={yPos} className="stroke-sky-400" strokeWidth="1.5" strokeDasharray="4 2" />
          ))}

          {/* Submersible Multistage Pump & Rising Main (Colonne d'Exhaure) */}
          <line x1="235" y1="15" x2="235" y2="145" className="stroke-blue-600 dark:stroke-sky-400 animate-hydraulic-flow" strokeWidth="3" strokeDasharray="5 3" />
          <rect x="225" y="138" width="20" height="28" rx="2" className="fill-amber-500 stroke-slate-950" strokeWidth="1.5" />
          <text x="272" y="155" className="fill-slate-800 dark:fill-slate-200 font-mono text-[8px] font-bold">
            SUBMERSIBLE PUMP ({step.hma})
          </text>
        </svg>
      </div>

      {/* Bottom Telemetry Strip */}
      <div className="border-t border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E] grid grid-cols-4 divide-x rtl:divide-x-reverse divide-slate-200/90 dark:divide-slate-800/90 font-mono text-xs">
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Test Flow Q</span>
          <span className="font-bold text-slate-900 dark:text-white tabular-nums">{step.discharge}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Drawdown (s)</span>
          <span className="font-bold text-amber-600 dark:text-amber-400 tabular-nums">{step.drawdown}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Dynamic Level</span>
          <span className="font-bold text-blue-600 dark:text-sky-400 tabular-nums">{step.dynamicLvl}</span>
        </div>
        <div className="p-3">
          <span className="text-[9px] text-slate-400 uppercase block">Pump Head Hman</span>
          <span className="font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">{step.hma}</span>
        </div>
      </div>
    </div>
  );
}

export default HydraulicSchematicViewer;
