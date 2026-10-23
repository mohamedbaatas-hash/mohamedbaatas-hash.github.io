import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Activity, Play, ChevronDown, ChevronUp, Droplets, Sliders, ShieldCheck, Gauge } from 'lucide-react';
import { useScadaEngine } from '../../../hooks/useScadaEngine';
import { SectionHeading } from '../../common/SectionHeading';
import { ScadaFlowDiagram } from './ScadaFlowDiagram';
import { ScadaControlDesk } from './ScadaControlDesk';
import { ScadaTelemetryPanel } from './ScadaTelemetryPanel';
import { ScadaAlarmBanner } from './ScadaAlarmBanner';

export function ScadaPlantSimulator() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const {
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
  } = useScadaEngine();

  return (
    <section id="scada-plant" className="transition-all duration-300 border-b border-border-slate/80 bg-gradient-to-b from-obsidian via-surface-sunken to-obsidian py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('SCADA.tag', 'INTERACTIVE_SIMULATOR_01')}
          title={t('SCADA.title', 'SCADA Smart Natural Lagoon WWTP Simulator')}
          description={t('SCADA.desc', 'Live continuous cyber-physical process simulation modeled on the Zeriba El Oued municipal wastewater treatment plant. Features real-time diurnal flow modeling, anaerobic digestion, and facultative algal photosynthesis.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 rounded-xl border border-border-slate/80 bg-obsidian/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl hover:border-emerald-500/40 transition-all duration-300">
            {/* Top specs & badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-slate/60">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {t('SCADA.status_ready', 'CYBER-PHYSICAL TWIN READY')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-500/30">
                  <Droplets className="w-3.5 h-3.5 text-blue-400" />
                  Zeriba El Oued Lagoon WWTP (24,000 m³/day)
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  PID & Manual Modes
                </span>
                <span className="flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                  Real-time Telemetry
                </span>
              </div>
            </div>

            {/* 3 Capabilities Preview Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-surface-sunken border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-1">
                  <Activity className="w-4 h-4" />
                  <span>01. Biological Treatment Train</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interactive multi-stage process from grit removal and anaerobic decomposition to facultative lagoons and chlorination.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-surface-sunken border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 mb-1">
                  <Sliders className="w-4 h-4" />
                  <span>02. Dynamic Process Controls</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Real-time pump speed throttling, storm surge triggers, simulated pollution spikes, and emergency stop interlocks.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-surface-sunken border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>03. Live SCADA Alarms</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Threshold monitoring with automated visual telemetry, alarm banner logs, and biochemical oxygen demand (BOD) tracking.
                </p>
              </div>
            </div>

            {/* Launch Call To Action */}
            <div className="mt-8 pt-6 border-t border-border-slate/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-400">
                {t('SCADA.launch_desc', 'Launch the full interactive SVG diagram, adjust live pumps, trigger surges, and monitor telemetry.')}
              </p>
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 group"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{t('SCADA.launch_btn', 'Launch Interactive SCADA Simulator')}</span>
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
                <span>{t('SCADA.collapse_btn', 'Collapse Simulator')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            {/* SVG Process Train */}
            <ScadaFlowDiagram state={state} />

            {/* Control Desk */}
            <ScadaControlDesk
              state={state}
              toggleSimulation={toggleSimulation}
              setControlMode={setControlMode}
              togglePumpIn={togglePumpIn}
              togglePumpOut={togglePumpOut}
              setScreenAuto={setScreenAuto}
              triggerStormSurge={triggerStormSurge}
              triggerPollutionSpike={triggerPollutionSpike}
              simulatePumpFailure={simulatePumpFailure}
              emergencyStop={emergencyStop}
              resetSimulation={resetSimulation}
            />

            {/* Bottom Grid: Telemetry & Alarms */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ScadaTelemetryPanel state={state} />
              <ScadaAlarmBanner activeAlarms={state.activeAlarms} eventLog={state.eventLog} />
            </div>

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('SCADA.collapse_btn', 'Collapse Simulator')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
