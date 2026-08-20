import React from 'react';
import { Play, RotateCcw, Activity, ShieldAlert, Cpu } from 'lucide-react';

export function EpanetControls({
  scenarios,
  currentScenario,
  onSelectScenario,
  pumpActive,
  onTogglePump,
  onResetNetwork
}) {
  return (
    <div className="bg-surface-sunken border border-border-slate rounded-lg p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border-slate">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            Hydraulic Operational Scenarios
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePump}
            className={`px-3 py-1.5 rounded font-mono text-xs font-bold border transition-colors ${
              pumpActive
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40 hover:bg-emerald-900/40'
                : 'bg-red-950/40 text-red-400 border-red-500/40 hover:bg-red-900/40'
            }`}
          >
            PMP-1: {pumpActive ? 'ONLINE' : 'STOPPED'}
          </button>

          <button
            onClick={onResetNetwork}
            className="p-1.5 rounded bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate transition-colors"
            title="Reset Network"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scenario Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {scenarios.map((sc) => {
          const isActive = currentScenario.id === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => onSelectScenario(sc.id)}
              className={`p-3 rounded text-left border transition-all ${
                isActive
                  ? 'bg-cobalt-600/20 border-cobalt-500 text-white shadow-sm'
                  : 'bg-elevated-slate/40 border-border-slate/70 text-slate-300 hover:bg-elevated-slate hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold">{sc.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-cobalt-400 animate-pulse" />}
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
