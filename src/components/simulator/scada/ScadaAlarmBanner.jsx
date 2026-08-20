import React from 'react';
import { AlertTriangle, ShieldCheck, Terminal, Clock } from 'lucide-react';

export function ScadaAlarmBanner({ activeAlarms = [], eventLog = [] }) {
  const hasAlarms = activeAlarms.length > 0;

  return (
    <div className="space-y-4">
      {/* Active Alarm Banner */}
      {hasAlarms ? (
        <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/60 text-red-200">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-red-400 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-red-400 animate-bounce" />
            <span>ACTIVE ISA-18.2 PROCESS ALARMS ({activeAlarms.length})</span>
          </div>
          <div className="space-y-1.5 font-mono text-xs">
            {activeAlarms.map((alm) => (
              <div key={alm.id} className="flex items-center justify-between bg-red-900/30 px-2.5 py-1 rounded border border-red-500/30">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-bold text-[10px]">
                    {alm.severity}
                  </span>
                  <span className="font-bold text-red-300">[{alm.tag}]</span>
                  <span>{alm.msg}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 font-mono text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold">ALL PROCESS LOOPS NOMINAL • ZERO ACTIVE TRIPS</span>
          </div>
          <span className="text-[11px] text-emerald-500 font-semibold">INTERLOCKS READY</span>
        </div>
      )}

      {/* Rolling Historian Log */}
      <div className="bg-surface-sunken border border-border-slate rounded-lg p-4">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-border-slate">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-300 uppercase">
            <Terminal className="w-3.5 h-3.5 text-cobalt-400" />
            <span>SCADA Event Historian Log</span>
          </div>
          <span className="font-mono text-[10px] text-slate-500">Auto-rolling Stream</span>
        </div>

        <div className="max-h-36 overflow-y-auto space-y-1 font-mono text-xs pr-1">
          {eventLog.map((log) => (
            <div key={log.id} className="flex items-start gap-2 text-slate-300 py-0.5 border-b border-slate-800/40 text-[11px]">
              <span className="text-slate-500 shrink-0">{log.time}</span>
              <span
                className={`px-1 rounded text-[9px] font-bold shrink-0 ${
                  log.severity === 'CRITICAL'
                    ? 'bg-red-600 text-white'
                    : log.severity === 'WARNING'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-700 text-slate-200'
                }`}
              >
                {log.severity}
              </span>
              <span className="text-slate-300 leading-tight">{log.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
