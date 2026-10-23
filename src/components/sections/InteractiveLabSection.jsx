import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Network, Droplets, X, ChevronUp } from 'lucide-react';
import { useScadaEngine } from '../../hooks/useScadaEngine';
import { useEpanetEngine } from '../../hooks/useEpanetEngine';
import { ScadaFlowDiagram } from '../simulator/scada/ScadaFlowDiagram';
import { ScadaControlDesk } from '../simulator/scada/ScadaControlDesk';
import { ScadaTelemetryPanel } from '../simulator/scada/ScadaTelemetryPanel';
import { ScadaAlarmBanner } from '../simulator/scada/ScadaAlarmBanner';
import { EpanetNetworkCanvas } from '../simulator/epanet/EpanetNetworkCanvas';
import { EpanetNodeInspector } from '../simulator/epanet/EpanetNodeInspector';
import { EpanetControls } from '../simulator/epanet/EpanetControls';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CollageBackground } from '../common/CollageBackground';

export function InteractiveLabSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('scada'); // 'scada' | 'epanet'
  const [isOpen, setIsOpen] = useState(false);

  // SCADA Engine Hook (preserves 100% of physical model)
  const scada = useScadaEngine();

  // EPANET Engine Hook (preserves 100% of mathematical solver)
  const epanet = useEpanetEngine();

  return (
    <BlueprintCadre
      id="interactive-lab"
      cadreTag="TESTBED_TERMINAL // RUNNING"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={true}
      conduitPosition="right"
      className="py-16 sm:py-24 bg-slate-50/40 dark:bg-[#07133f]/70 relative overflow-hidden"
    >
      <CollageBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/30">
              {t('LAB.section_tag', 'Experimental Testbed')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white mt-4">
              {t('LAB.section_title', 'The Interactive Engineering Lab')}
            </h2>
            <p className="mt-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {t('LAB.section_desc', 'Explore live, deterministic cyber-physical simulations executed directly in your browser. Toggle between the natural lagoon WWTP process train and the pressurized looped EPANET hydraulic solver.')}
            </p>
          </div>

          {/* Tab Selector & Launch Button */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            <button
              onClick={() => {
                setActiveTab('scada');
                setIsOpen(true);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'scada' && isOpen
                  ? 'bg-fluid-blue text-white font-semibold shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900'
              }`}
            >
              <Droplets className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
              <span>{t('LAB.tab_scada', 'SCADA Water Plant')}</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('epanet');
                setIsOpen(true);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'epanet' && isOpen
                  ? 'bg-cyan-600 text-white font-semibold shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900'
              }`}
            >
              <Network className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              <span>{t('LAB.tab_epanet', 'EPANET Solver')}</span>
            </button>
          </div>
        </div>

        {/* Compact Showcase Card (When not opened) */}
        {!isOpen && (
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/50 p-8 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                  {t('LAB.lab_status', 'Laboratory Architecture')}
                </span>
                <h3 className="text-2xl font-bold font-title text-slate-900 dark:text-white tracking-tight">
                  {t('LAB.lab_headline', 'Mathematical Rigor Meets In-Browser Interaction')}
                </h3>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {t('LAB.lab_narrative', 'These engines aren\'t mockups. They run continuous time-step mass balance, diurnal flow algorithms, and non-linear hydraulic matrix equations entirely on client-side JavaScript.')}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                  <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                    • Zeriba El Oued Lagoon (24,000 m³/day)
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                    • Hazen-Williams Head Loss
                  </span>
                  <span className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                    • Newton-Raphson Solver
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={() => {
                    setActiveTab('scada');
                    setIsOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-fluid-blue hover:bg-fluid-blue-bright text-white font-semibold font-condensed tracking-wide text-sm transition-all shadow-lg hover:shadow-blue-500/20 group"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{t('LAB.btn_launch_scada', 'Launch SCADA Simulation')}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('epanet');
                    setIsOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold font-condensed tracking-wide text-sm transition-all shadow-lg hover:shadow-cyan-500/20"
                >
                  <Network className="w-4 h-4 text-white" />
                  <span>{t('LAB.btn_launch_epanet', 'Launch EPANET Solver')}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Live Opened Simulator Frame (Housed in Autonomous High-Contrast Dark CAD Workstation) */}
        {isOpen && (
          <div className="rounded-2xl border border-cyan-500/40 bg-[#07133F] text-slate-100 p-6 sm:p-8 shadow-2xl space-y-6 animate-in fade-in duration-300 relative CAD-workstation-terminal">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-4 border-b border-cyan-950/60">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider">
                  {activeTab === 'scada' 
                    ? t('LAB.scada_live_title', 'SCADA Process Train — Zeriba El Oued WWTP') 
                    : t('LAB.epanet_live_title', 'EPANET 2.2 Network Solver — Looped Municipal Grid')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab(activeTab === 'scada' ? 'epanet' : 'scada')}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 border border-slate-700 transition-colors"
                >
                  {activeTab === 'scada' ? t('LAB.switch_to_epanet', 'Switch to EPANET') : t('LAB.switch_to_scada', 'Switch to SCADA')}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close Lab"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* SCADA View (Retains Pure Mathematical State & Realtime Updates) */}
            {activeTab === 'scada' && (
              <div className="space-y-6">
                <div className="bg-[#0B1120] rounded-xl p-4 border border-cyan-500/20 overflow-x-auto">
                  <ScadaFlowDiagram state={scada.state} />
                </div>
                <ScadaControlDesk
                  state={scada.state}
                  toggleSimulation={scada.toggleSimulation}
                  setControlMode={scada.setControlMode}
                  togglePumpIn={scada.togglePumpIn}
                  togglePumpOut={scada.togglePumpOut}
                  setScreenAuto={scada.setScreenAuto}
                  triggerStormSurge={scada.triggerStormSurge}
                  triggerPollutionSpike={scada.triggerPollutionSpike}
                  simulatePumpFailure={scada.simulatePumpFailure}
                  emergencyStop={scada.emergencyStop}
                  resetSimulation={scada.resetSimulation}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ScadaTelemetryPanel state={scada.state} />
                  <ScadaAlarmBanner activeAlarms={scada.state.activeAlarms} eventLog={scada.state.eventLog} />
                </div>
              </div>
            )}

            {/* EPANET View (Retains Pure Mathematical Solver & Exact Coordinates) */}
            {activeTab === 'epanet' && (
              <div className="space-y-6">
                <EpanetControls
                  scenarios={epanet.scenarios}
                  currentScenario={epanet.currentScenario}
                  onSelectScenario={epanet.setScenario}
                  pumpActive={epanet.pumpActive}
                  onTogglePump={epanet.toggleBoosterPump}
                  onResetNetwork={epanet.resetNetwork}
                />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-[#0B1120] rounded-xl p-4 border border-cyan-500/20 overflow-x-auto min-w-0">
                    <EpanetNetworkCanvas
                      solvedNetwork={epanet.solvedNetwork}
                      selectedElementId={epanet.selectedElementId}
                      onSelectElement={epanet.selectElement}
                    />
                  </div>
                  <div className="lg:col-span-1">
                    <EpanetNodeInspector
                      selectedNode={epanet.selectedNode}
                      selectedLink={epanet.selectedLink}
                      onSetThrottle={epanet.setPipeThrottle}
                      onToggleBurst={epanet.togglePipeBurst}
                      burstPipes={epanet.burstPipes}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Close Button at bottom */}
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
              >
                <span>{t('LAB.close_lab', 'Minimize Lab Console')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </BlueprintCadre>
  );
}
