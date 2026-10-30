import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

export function EpanetNodeInspector({
  epanet,
  selectedNode: propSelectedNode,
  selectedLink: propSelectedLink,
  onSetThrottle: propOnSetThrottle,
  onToggleBurst: propOnToggleBurst,
  burstPipes: propBurstPipes
}) {
  const selectedNode = propSelectedNode !== undefined ? propSelectedNode : epanet?.selectedNode;
  const selectedLink = propSelectedLink !== undefined ? propSelectedLink : epanet?.selectedLink;
  const onSetThrottle = propOnSetThrottle || epanet?.setPipeThrottle || (() => {});
  const onToggleBurst = propOnToggleBurst || epanet?.togglePipeBurst || (() => {});
  const burstPipes = propBurstPipes || epanet?.burstPipes || [];

  if (selectedNode) {
    const isCritical = selectedNode.pressureStatus === 'critical';
    const isWarning = selectedNode.pressureStatus === 'warning';

    return (
      <div className="bg-[#080C17] border border-slate-800 p-5">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-sky-400" />
            <h4 className="font-mono text-sm font-bold text-white uppercase">
              Node Inspector: {selectedNode.id}
            </h4>
          </div>
          <span className="font-mono text-xs px-2 py-0.5 bg-slate-900 border border-slate-800 text-sky-300 uppercase">
            {selectedNode.type}
          </span>
        </div>

        <p className="text-xs text-slate-300 mb-4">{selectedNode.description}</p>

        <div className="grid grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-2.5 bg-slate-900/60 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase">Elevation (Z)</span>
            <div className="text-sm font-bold text-white mt-0.5">{selectedNode.elevationM} m</div>
          </div>
          <div className="p-2.5 bg-slate-900/60 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase">Actual Demand</span>
            <div className="text-sm font-bold text-white mt-0.5">{selectedNode.actualDemandLps} L/s</div>
          </div>
          <div className="p-2.5 bg-slate-900/60 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase">Total Head (HGL)</span>
            <div className="text-sm font-bold text-sky-400 mt-0.5">{selectedNode.computedHglM} m</div>
          </div>
          <div
            className={`p-2.5 border ${
              isCritical
                ? 'bg-red-950/40 border-red-500 text-red-300'
                : isWarning
                ? 'bg-amber-950/40 border-amber-500 text-amber-300'
                : 'bg-emerald-950/20 border-emerald-500/40 text-emerald-400'
            }`}
          >
            <span className="text-[10px] uppercase font-semibold">Residual Pressure</span>
            <div className="text-sm font-bold mt-0.5">
              {selectedNode.computedPressureBar} bar ({selectedNode.computedPressureM} mH₂O)
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedLink) {
    const isBurst = burstPipes.includes(selectedLink.id);

    return (
      <div className="bg-[#080C17] border border-slate-800 p-5">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-sky-400" />
            <h4 className="font-mono text-sm font-bold text-white uppercase">
              Link Inspector: {selectedLink.id}
            </h4>
          </div>
          <span className="font-mono text-xs px-2 py-0.5 bg-slate-900 border border-slate-800 text-sky-300 uppercase">
            {selectedLink.type}
          </span>
        </div>

        <p className="text-xs text-slate-300 mb-4">{selectedLink.description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs mb-5">
          <div className="p-2 bg-slate-900/60 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase">Flow Rate</span>
            <div className="text-sm font-bold text-white mt-0.5">{selectedLink.computedFlowLps} L/s</div>
          </div>
          <div className="p-2 bg-slate-900/60 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase">Velocity</span>
            <div className="text-sm font-bold text-sky-400 mt-0.5">{selectedLink.computedVelocityMs} m/s</div>
          </div>
          <div className="p-2 bg-slate-900/60 border border-slate-800">
            <span className="text-[10px] text-slate-400 uppercase">Head Loss (hf)</span>
            <div className="text-sm font-bold text-amber-400 mt-0.5">{selectedLink.computedHeadLossM} m</div>
          </div>
          {selectedLink.diameterMm && (
            <div className="p-2 bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase">Diameter</span>
              <div className="text-xs font-bold text-white mt-0.5">Ø {selectedLink.diameterMm} mm</div>
            </div>
          )}
          {selectedLink.lengthM && (
            <div className="p-2 bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase">Length</span>
              <div className="text-xs font-bold text-white mt-0.5">{selectedLink.lengthM} m</div>
            </div>
          )}
          {selectedLink.roughnessC && (
            <div className="p-2 bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase">Roughness (C)</span>
              <div className="text-xs font-bold text-white mt-0.5">{selectedLink.roughnessC}</div>
            </div>
          )}
        </div>

        {/* Interactive Link Controls */}
        {selectedLink.type === 'pipe' && (
          <div className="pt-4 border-t border-slate-800 space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                <span>Valve Throttling (TCV)</span>
                <span className="text-sky-400 font-bold">{selectedLink.throttlePct ?? 100}% Open</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={selectedLink.throttlePct !== undefined ? selectedLink.throttlePct : 100}
                onChange={(e) => onSetThrottle(selectedLink.id, e.target.value)}
                className="w-full h-1.5 bg-slate-800 appearance-none cursor-pointer accent-sky-400"
              />
            </div>

            <button
              onClick={() => onToggleBurst(selectedLink.id)}
              className={`w-full py-2 px-3 font-mono text-xs font-bold flex items-center justify-center gap-2 border transition-colors ${
                isBurst
                  ? 'bg-red-950 text-red-300 border-red-500 hover:bg-red-900'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{isBurst ? 'Repair Burst Rupture' : 'Simulate Rupture / Leak on Pipe'}</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-[#080C17] border border-slate-800 p-5 flex flex-col items-center justify-center text-slate-400 text-center py-12">
      <Info className="w-8 h-8 text-slate-500 mb-2" />
      <span className="font-mono text-xs">Click any Node or Pipe in the network to inspect live hydraulics.</span>
    </div>
  );
}

export default EpanetNodeInspector;
