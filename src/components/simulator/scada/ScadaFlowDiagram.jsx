import React from 'react';

export function ScadaFlowDiagram({ state }) {
  const {
    flowM3d,
    bodIn,
    codIn,
    bodOut,
    tempC,
    tankLevel,
    pumpIn1,
    pumpIn2,
    pumpOut1,
    pumpOut2
  } = state;

  const tankWaterHeight = (tankLevel / 100.0) * 80;
  const tankWaterY = 170 - tankWaterHeight;

  return (
    <div className="w-full bg-surface-sunken border border-border-slate rounded-lg p-4 overflow-x-auto">
      <div className="min-w-[760px] relative">
        <svg viewBox="0 0 800 230" className="w-full h-auto select-none">
          <defs>
            <linearGradient id="waterLevelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="sludgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#92400E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#451A03" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Background grid */}
          <pattern id="scadaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.5" />
          </pattern>
          <rect width="800" height="230" fill="url(#scadaGrid)" />

          {/* MAIN PIPELINES */}
          <path
            d="M 20 120 L 120 120 L 140 120 L 250 120 L 270 120 L 380 120 L 400 120 L 510 120 L 530 120 L 640 120"
            fill="none"
            stroke="#334155"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {state.isRunning && flowM3d > 5 && (
            <path
              d="M 20 120 L 120 120 L 140 120 L 250 120 L 270 120 L 380 120 L 400 120 L 510 120 L 530 120 L 640 120"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="4"
              strokeDasharray="6 6"
              className="animate-[dash_1.5s_linear_infinite]"
            />
          )}

          {/* ================= STAGE 1: INTAKE & LIFT ================= */}
          <g transform="translate(20, 70)">
            <rect x="0" y="20" width="80" height="70" rx="4" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <text x="40" y="38" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              INTAKE PUMP
            </text>
            <text x="40" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              {Number(flowM3d).toFixed(0)} m³/d
            </text>
            <circle cx="25" cy="74" r="6" fill={pumpIn1 ? '#059669' : '#334155'} />
            <circle cx="55" cy="74" r="6" fill={pumpIn2 ? '#059669' : '#334155'} />
          </g>

          {/* ================= STAGE 2: PRETREATMENT ================= */}
          <g transform="translate(130, 60)">
            <rect x="0" y="10" width="90" height="90" rx="4" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <text x="45" y="28" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              PRETREAT
            </text>
            <line x1="30" y1="35" x2="30" y2="70" stroke="#64748B" strokeWidth="4" />
            <line x1="45" y1="35" x2="45" y2="70" stroke="#64748B" strokeWidth="4" />
            <line x1="60" y1="35" x2="60" y2="70" stroke="#64748B" strokeWidth="4" />
            <text x="45" y="90" fill="#F8FAFC" fontSize="9" textAnchor="middle" fontFamily="monospace">
              COD: {Number(codIn).toFixed(0)}
            </text>
          </g>

          {/* ================= STAGE 3: ANAEROBIC LAGOON ================= */}
          <g transform="translate(250, 60)">
            <rect x="0" y="10" width="90" height="90" rx="10" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <rect x="0" y="60" width="90" height="40" rx="10" fill="url(#sludgeGrad)" />
            <text x="45" y="28" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              ANAEROBIC
            </text>
            <text x="45" y="92" fill="#E2E8F0" fontSize="9" textAnchor="middle" fontFamily="monospace">
              Temp: {Number(tempC).toFixed(1)}°C
            </text>
          </g>

          {/* ================= STAGE 4: FACULTATIVE LAGOON ================= */}
          <g transform="translate(370, 60)">
            <rect x="0" y="10" width="90" height="90" rx="10" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <circle cx="45" cy="50" r="15" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="2 2" />
            <text x="45" y="28" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              FACULTATIVE
            </text>
            <text x="45" y="90" fill="#F8FAFC" fontSize="9" textAnchor="middle" fontFamily="monospace">
              DO: {state.doMgL.toFixed(1)} mg/L
            </text>
          </g>

          {/* ================= STAGE 5: MATURATION LAGOON ================= */}
          <g transform="translate(490, 60)">
            <rect x="0" y="10" width="90" height="90" rx="10" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <text x="45" y="28" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              MATURATION
            </text>
            <text x="45" y="92" fill="#F8FAFC" fontSize="9" textAnchor="middle" fontFamily="monospace">
              UV STERILE
            </text>
          </g>

          {/* ================= STAGE 6: FINISHED & DISTRIBUTION ================= */}
          <g transform="translate(610, 45)">
            <rect x="0" y="15" width="100" height="110" rx="4" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <rect
              x="2"
              y={tankWaterY}
              width="96"
              height={tankWaterHeight}
              rx="2"
              fill="url(#waterLevelGrad)"
              className="transition-all duration-300"
            />
            <text x="50" y="32" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              TREATED EFF.
            </text>
            <text x="50" y="70" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              {Number(tankLevel).toFixed(1)}%
            </text>

            <g transform="translate(110, 20)">
              <circle cx="20" cy="20" r="14" fill={pumpOut1 ? '#059669' : '#334155'} stroke="#10B981" strokeWidth="1.5" />
              <text x="20" y="24" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">P-501</text>
              <circle cx="20" cy="60" r="14" fill={pumpOut2 ? '#059669' : '#334155'} stroke="#10B981" strokeWidth="1.5" />
              <text x="20" y="64" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">P-502</text>
            </g>
          </g>

          {/* Compliance Tag */}
          <g transform="translate(630, 195)">
            <rect x="0" y="0" width="150" height="24" rx="3" fill="#020617" stroke="#334155" />
            <text x="75" y="16" fill={bodOut > 25 ? "#EF4444" : "#10B981"} fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              EFF BOD5: {Number(bodOut).toFixed(1)} mg/L
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
