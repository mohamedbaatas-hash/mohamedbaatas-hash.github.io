import React from 'react';
import { SENSOR_TAGS } from '../../../data/scadaData';
import { Gauge } from 'lucide-react';

export function ScadaTelemetryPanel({ state }) {
  const sensorMap = [
    { tag: 'FIT-101', val: state.flowM3d },
    { tag: 'AIT-101', val: state.bodIn },
    { tag: 'AIT-102', val: state.codIn },
    { tag: 'AIT-103', val: state.tssIn },
    { tag: 'TIT-201', val: state.tempC },
    { tag: 'AIT-201', val: state.methaneLel },
    { tag: 'AIT-301', val: state.doMgL },
    { tag: 'AIT-302', val: state.ph },
    { tag: 'AIT-401', val: state.bodOut },
    { tag: 'AIT-402', val: state.turbidityOut },
    { tag: 'LIT-501', val: state.tankLevel }
  ];

  return (
    <div className="bg-surface-sunken border border-border-slate rounded-lg p-5">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-slate">
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-cyan-400" />
          <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            ISA-5.1 Sensor Telemetry Matrix
          </h4>
        </div>
        <span className="font-mono text-[11px] text-slate-400">11 Channels Active</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        {sensorMap.map(({ tag, val }) => {
          const config = SENSOR_TAGS[tag];
          if (!config) return null;

          let statusColor = "text-emerald-400 border-emerald-500/30 bg-emerald-950/20";
          let statusText = "NOMINAL";

          if (config.critHigh && val >= config.critHigh) {
            statusColor = "text-red-400 border-red-500/40 bg-red-950/30";
            statusText = "CRIT HIGH";
          } else if (config.critLow && val <= config.critLow) {
            statusColor = "text-red-400 border-red-500/40 bg-red-950/30";
            statusText = "CRIT LOW";
          } else if (config.warnHigh && val >= config.warnHigh) {
            statusColor = "text-amber-400 border-amber-500/30 bg-amber-950/20";
            statusText = "WARN HIGH";
          } else if (config.warnLow && val <= config.warnLow) {
            statusColor = "text-amber-400 border-amber-500/30 bg-amber-950/20";
            statusText = "WARN LOW";
          }

          return (
            <div
              key={tag}
              className={`p-3 rounded border font-mono ${statusColor} transition-colors`}
            >
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-bold text-slate-300">{tag}</span>
                <span className="text-[10px] font-semibold">{statusText}</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-lg font-bold text-white tabular-nums">{Number(val).toFixed(1)}</span>
                <span className="text-xs text-slate-400 font-sans">{config.unit}</span>
              </div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5 font-sans">
                {config.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
