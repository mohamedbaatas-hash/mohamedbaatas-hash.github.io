import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, Play, ChevronDown, ChevronUp, Network, GitFork, Gauge, Zap } from 'lucide-react';
import { useEpanetEngine } from '../../../hooks/useEpanetEngine';
import { SectionHeading } from '../../common/SectionHeading';
import { EpanetNetworkCanvas } from './EpanetNetworkCanvas';
import { EpanetNodeInspector } from './EpanetNodeInspector';
import { EpanetControls } from './EpanetControls';

export function EpanetSimulator() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    scenarios,
    currentScenario,
    solvedNetwork,
    selectedNode,
    selectedLink,
    selectedElementId,
    pumpActive,
    burstPipes,
    setScenario,
    selectElement,
    setPipeThrottle,
    toggleBoosterPump,
    togglePipeBurst,
    resetNetwork
  } = useEpanetEngine();

  return (
    <section id="epanet-sim" className="transition-all duration-300 border-b border-border-slate/80 bg-obsidian py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('EPANET.tag', 'INTERACTIVE_SIMULATOR_02')}
          title={t('EPANET.title', 'EPANET 2.2 Looped Hydraulic Network Solver')}
          description={t('EPANET.desc', 'Interactive municipal water distribution network executing real-time Hazen-Williams head loss, nodal mass balance, and Newton-Raphson gradient iterations. Test operational scenarios, throttle valve positions, and inject pipe bursts.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 rounded-xl border border-border-slate/80 bg-surface-sunken/90 backdrop-blur-sm p-6 sm:p-8 shadow-xl hover:border-cyan-500/40 transition-all duration-300">
            {/* Top specs & badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-slate/60">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-500/40 font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {t('EPANET.status_ready', 'HYDRAULIC ENGINE COMPILED')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-500/30">
                  <Network className="w-3.5 h-3.5 text-blue-400" />
                  Looped Municipal Grid (8 Nodes • 11 Links)
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                  Newton-Raphson Solver
                </span>
                <span className="flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-blue-400" />
                  Hazen-Williams Head Loss
                </span>
              </div>
            </div>

            {/* 3 Capabilities Preview Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-obsidian border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 mb-1">
                  <Gauge className="w-4 h-4" />
                  <span>01. Nodal Pressure Gradients</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Real-time mass balance calculation with color-coded hydraulic pressure heads from elevated storage tanks down to consumer taps.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-obsidian border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 mb-1">
                  <Zap className="w-4 h-4" />
                  <span>02. Valve & Burst Injections</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interactive node inspector allowing real-time pipe throttling, valve closure, pressure relief, and pipe rupture simulations.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-obsidian border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>03. Operational Scenarios</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  One-click scenario testing: Base Demand, Morning Peak, Booster Pump Activation, and High-Flow Fire Suppression.
                </p>
              </div>
            </div>

            {/* Launch Call To Action */}
            <div className="mt-8 pt-6 border-t border-border-slate/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-400">
                {t('EPANET.launch_desc', 'Launch the interactive network canvas, inspect nodal pressures, throttle valves, and run real-time scenarios.')}
              </p>
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-cobalt-950/40 hover:shadow-cobalt-500/20 group"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{t('EPANET.launch_btn', 'Launch Interactive EPANET Solver')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED SIMULATOR VIEW */}
        {isExpanded && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500 mt-6">
            {/* Top Collapse Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('EPANET.collapse_btn', 'Collapse Simulator')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            {/* Controls Strip */}
            <EpanetControls
              scenarios={scenarios}
              currentScenario={currentScenario}
              onSelectScenario={setScenario}
              pumpActive={pumpActive}
              onTogglePump={toggleBoosterPump}
              onResetNetwork={resetNetwork}
            />

            {/* Main Network Canvas + Inspector Split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <EpanetNetworkCanvas
                  solvedNetwork={solvedNetwork}
                  selectedElementId={selectedElementId}
                  onSelectElement={selectElement}
                />
              </div>
              <div className="lg:col-span-1">
                <EpanetNodeInspector
                  selectedNode={selectedNode}
                  selectedLink={selectedLink}
                  onSetThrottle={setPipeThrottle}
                  onToggleBurst={togglePipeBurst}
                  burstPipes={burstPipes}
                />
              </div>
            </div>

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('EPANET.collapse_btn', 'Collapse Simulator')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
