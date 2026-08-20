import React, { useState } from 'react';
import { useEpanetEngine } from '../../../hooks/useEpanetEngine';
import { SectionHeading } from '../../common/SectionHeading';
import { EpanetNetworkCanvas } from './EpanetNetworkCanvas';
import { EpanetNodeInspector } from './EpanetNodeInspector';
import { EpanetControls } from './EpanetControls';

export function EpanetSimulator() {
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
    <section id="epanet-sim" className={`transition-all duration-300 border-b border-border-slate/80 bg-obsidian ${isExpanded ? 'py-20' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="INTERACTIVE_SIMULATOR_02"
          title="EPANET 2.2 Looped Hydraulic Network Solver"
          description="Interactive municipal water distribution network executing real-time Hazen-Williams head loss, nodal mass balance, and Newton-Raphson gradient iterations. Test operational scenarios, throttle valve positions, and inject pipe bursts."
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {isExpanded && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
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
          </div>
        )}
      </div>
    </section>
  );
}
