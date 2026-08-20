import React from 'react';
import { Play, Pause, AlertOctagon, RotateCcw, Zap, Droplets, Sliders, Settings } from 'lucide-react';

export function ScadaControlDesk({
  state,
  toggleSimulation,
  setControlMode,
  togglePumpIn,
  togglePumpOut,
  setScreenAuto,
  triggerStormSurge,
  triggerPollutionSpike,
  simulatePumpFailure,
  emergencyStop,
  resetSimulation
}) {
  const isAuto = state.controlMode === 'AUTO';

  return (
    <div className="bg-surface-sunken border border-border-slate rounded-lg p-5 space-y-6">
      {/* Top Header & Master Mode Switch */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-slate">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-cobalt-400" />
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            SCADA PLC Operator Interface
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Master Run/Pause */}
          <button
            onClick={toggleSimulation}
            className={`px-3 py-1.5 rounded font-mono text-xs font-bold flex items-center gap-1.5 border transition-colors ${
              state.isRunning
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40 hover:bg-emerald-900/40'
                : 'bg-amber-950/40 text-amber-400 border-amber-500/40 hover:bg-amber-900/40'
            }`}
          >
            {state.isRunning ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            <span>{state.isRunning ? 'PLC ACTIVE' : 'PAUSED'}</span>
          </button>

          {/* Mode Switch */}
          <div className="flex rounded border border-border-slate bg-obsidian p-0.5">
            <button
              onClick={() => setControlMode('AUTO')}
              className={`px-3 py-1 rounded font-mono text-xs font-semibold transition-colors ${
                isAuto ? 'bg-cobalt-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              NORMAL (Diurnal Flow)
            </button>
            <button
              onClick={() => setControlMode('MANUAL')}
              className={`px-3 py-1 rounded font-mono text-xs font-semibold transition-colors ${
                !isAuto ? 'bg-cobalt-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              MANUAL OVERRIDE
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Screen Cleaning Mechanism */}
        <div className="p-3 rounded bg-elevated-slate/60 border border-border-slate/80 flex flex-col justify-between">
          <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-2">
            <span>Screen Cleaning (SC-201)</span>
          </div>
          <button
            disabled={isAuto}
            onClick={() => setScreenAuto(!state.screenAuto)}
            className={`w-full py-1.5 rounded font-mono text-xs font-bold transition-colors border ${
              state.screenAuto
                ? 'bg-emerald-950/30 text-emerald-400 border-emerald-500/30'
                : 'bg-slate-800 text-slate-300 border-slate-600'
            } disabled:opacity-50`}
          >
            {state.screenAuto ? 'AUTO (15cm ΔH Threshold)' : 'MANUAL'}
          </button>
        </div>

        {/* Grid Power Status */}
        <div className="p-3 rounded bg-elevated-slate/60 border border-border-slate/80">
          <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-2">
            <span>Grid Power Status</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${state.gridPower ? 'bg-emerald-400' : 'bg-red-500'}`} />
            <span className="font-mono text-xs text-white">
              {state.gridPower ? 'CONNECTED (380V)' : 'DISCONNECTED'}
            </span>
          </div>
        </div>

        {/* Generator Fuel Reserve */}
        <div className="p-3 rounded bg-elevated-slate/60 border border-border-slate/80">
          <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
            <span>Generator Fuel Reserve</span>
            <span className="text-amber-400 font-bold tabular-nums">{state.generatorFuel}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700 rounded-lg overflow-hidden mt-3">
             <div className="h-full bg-amber-500" style={{ width: `${state.generatorFuel}%` }}></div>
          </div>
        </div>
      </div>

      {/* Pumps Toggle Strip & Fault Injection Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex flex-col gap-2">
            {/* Inlet Lift Pumps */}
            <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase w-24">Inlet Lift:</span>
            {[1, 2].map((num) => {
                const active = state[`pumpIn${num}`];
                return (
                <button
                    key={num}
                    disabled={isAuto}
                    onClick={() => togglePumpIn(num)}
                    className={`px-3 py-1 rounded font-mono text-xs font-bold border transition-colors ${
                    active
                        ? 'bg-emerald-900/40 text-emerald-400 border-emerald-500/50'
                        : 'bg-elevated-slate text-slate-400 border-border-slate'
                    } disabled:opacity-60`}
                >
                    P-10{num}: {active ? 'ON' : 'OFF'}
                </button>
                );
            })}
            </div>

            {/* Effluent Distribution Pumps */}
            <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase w-24">Dist. Pumps:</span>
            {[1, 2, 3].map((num) => {
                const active = state[`pumpOut${num}`];
                return (
                <button
                    key={num}
                    disabled={isAuto}
                    onClick={() => togglePumpOut(num)}
                    className={`px-3 py-1 rounded font-mono text-xs font-bold border transition-colors ${
                    active
                        ? 'bg-emerald-900/40 text-emerald-400 border-emerald-500/50'
                        : 'bg-elevated-slate text-slate-400 border-border-slate'
                    } disabled:opacity-60`}
                >
                    P-50{num}: {active ? 'ON' : 'OFF'}
                </button>
                );
            })}
            </div>
        </div>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
          <button
            onClick={triggerStormSurge}
            className="px-3 py-1.5 rounded bg-blue-950/40 hover:bg-blue-900/60 text-blue-300 border border-blue-500/40 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Droplets className="w-3.5 h-3.5" />
            <span>Inject Storm Surge</span>
          </button>

          <button
            onClick={triggerPollutionSpike}
            className="px-3 py-1.5 rounded bg-amber-950/40 hover:bg-amber-900/60 text-amber-300 border border-amber-500/40 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Inject Ind. Pollution</span>
          </button>

          <button
            onClick={simulatePumpFailure}
            className="px-3 py-1.5 rounded bg-orange-950/40 hover:bg-orange-900/60 text-orange-400 border border-orange-500/40 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Simulate Pump Failure</span>
          </button>

          <button
            onClick={emergencyStop}
            className="px-3 py-1.5 rounded bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-500 font-mono text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>E-STOP</span>
          </button>

          <button
            onClick={resetSimulation}
            className="p-1.5 rounded bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate transition-colors"
            title="Reset Simulator"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
