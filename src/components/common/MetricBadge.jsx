import React from 'react';

export function MetricBadge({ label, value, unit, status = "nominal", detail }) {
  const statusColors = {
    nominal: "border-slate-700 bg-elevated-slate/60 text-slate-200",
    emerald: "border-emerald-500/30 bg-emerald-950/20 text-emerald-400",
    cyan: "border-cyan-500/30 bg-cyan-950/20 text-cyan-400",
    amber: "border-amber-500/30 bg-amber-950/20 text-amber-400",
    red: "border-red-500/30 bg-red-950/20 text-red-400",
    cobalt: "border-cobalt-500/30 bg-cobalt-950/20 text-cobalt-400"
  };

  return (
    <div className={`flex flex-col p-3 rounded border font-mono tabular-nums ${statusColors[status] || statusColors.nominal}`}>
      <span className="text-[11px] text-slate-400 uppercase tracking-wider font-sans font-medium">
        {label}
      </span>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="text-xl sm:text-2xl font-bold tracking-tight font-mono text-white">
          {value}
        </span>
        {unit && <span className="text-xs text-slate-400 font-mono">{unit}</span>}
      </div>
      {detail && (
        <span className="text-[11px] text-slate-400 font-sans mt-0.5">
          {detail}
        </span>
      )}
    </div>
  );
}
