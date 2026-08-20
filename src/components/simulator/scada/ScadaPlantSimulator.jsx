import React, { useState } from 'react';
import { useScadaEngine } from '../../../hooks/useScadaEngine';
import { SectionHeading } from '../../common/SectionHeading';
import { ScadaFlowDiagram } from './ScadaFlowDiagram';
import { ScadaControlDesk } from './ScadaControlDesk';
import { ScadaTelemetryPanel } from './ScadaTelemetryPanel';
import { ScadaAlarmBanner } from './ScadaAlarmBanner';

export function ScadaPlantSimulator() {
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
    <section id="scada-plant" className="py-20 border-b border-border-slate/80 bg-gradient-to-b from-obsidian via-surface-sunken to-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="INTERACTIVE_SIMULATOR_01"
          title="SCADA Smart Natural Lagoon WWTP Simulator"
          description="Live continuous cyber-physical process simulation modeled on the Zeriba El Oued municipal wastewater treatment plant. Features real-time diurnal flow modeling, anaerobic digestion, and facultative algal photosynthesis."
        />

        <div className="space-y-6">
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
        </div>
      </div>
    </section>
  );
}
