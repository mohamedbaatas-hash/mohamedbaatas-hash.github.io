import React from 'react';
import { RotateCcw, Cpu } from 'lucide-react';

export function EpanetControls({
  epanet,
  scenarios: propScenarios,
  currentScenario: propCurrentScenario,
  onSelectScenario: propOnSelectScenario,
  pumpActive: propPumpActive,
  onTogglePump: propOnTogglePump,
  onResetNetwork: propOnResetNetwork
}) {
  const scenarios = propScenarios || epanet?.scenarios || [];
  const currentScenario = propCurrentScenario || epanet?.currentScenario || {};
  const onSelectScenario = propOnSelectScenario || epanet?.setScenario || (() => {});
  const pumpActive = propPumpActive !== undefined ? propPumpActive : (epanet?.pumpActive ?? true);
  const onTogglePump = propOnTogglePump || epanet?.toggleBoosterPump || (() => {});
  const onResetNetwork = propOnResetNetwork || epanet?.resetNetwork || (() => {});

  return (
    <div className="bg-[#0B101E] border border-slate-800 p-4 sm:p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-sky-400" />
          <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            Hydraulic Operational Scenarios (EPANET 2.2)
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePump}
            className={`px-3 py-1.5 font-mono text-xs font-bold border transition-colors ${
              pumpActive
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40 hover:bg-emerald-900/40'
                : 'bg-red-950/40 text-red-400 border-red-500/40 hover:bg-red-900/40'
            }`}
          >
            PMP-1: {pumpActive ? 'ONLINE' : 'STOPPED'}
          </button>

          <button
            onClick={onResetNetwork}
            className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            title="Reset Network"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scenario Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {scenarios.map((sc) => {
          const isActive = currentScenario?.id === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => onSelectScenario(sc.id)}
              className={`p-3 text-left border transition-all ${
                isActive
                  ? 'bg-sky-500/15 border-sky-400 text-white'
                  : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold">{sc.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />}
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                {sc.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default EpanetControls;
