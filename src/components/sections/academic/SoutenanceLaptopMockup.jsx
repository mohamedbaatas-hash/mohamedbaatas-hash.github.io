import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Monitor, TrendingUp, Award, Activity, BarChart2, CheckCircle2, ChevronRight, Presentation } from 'lucide-react';

export function SoutenanceLaptopMockup() {
  const { t } = useTranslation();
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      id: 'cod',
      label: t('ACADEMIC_HUB.presentation.metrics.cod_label', 'COD Removal Efficiency'),
      value: '92.4%',
      target: t('ACADEMIC_HUB.presentation.metrics.cod_target', 'Target > 85.0%'),
      percent: 92.4,
      color: 'bg-cyan-400',
      textColor: 'text-cyan-400',
      borderColor: 'border-cyan-400/40',
      glow: 'shadow-[0_0_12px_rgba(0,229,255,0.4)]'
    },
    {
      id: 'bod',
      label: t('ACADEMIC_HUB.presentation.metrics.bod_label', 'BOD5 Compliance Rate'),
      value: '89.1%',
      target: t('ACADEMIC_HUB.presentation.metrics.bod_target', 'Regulatory Norms Met'),
      percent: 89.1,
      color: 'bg-blue-500',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/40',
      glow: 'shadow-[0_0_12px_rgba(59,130,246,0.4)]'
    },
    {
      id: 'energy',
      label: t('ACADEMIC_HUB.presentation.metrics.energy_label', 'Aeration Energy Savings'),
      value: '+28.5%',
      target: t('ACADEMIC_HUB.presentation.metrics.energy_target', 'Closed-loop DO Control'),
      percent: 78.5,
      color: 'bg-fluid-yellow',
      textColor: 'text-fluid-yellow',
      borderColor: 'border-fluid-yellow/40',
      glow: 'shadow-[0_0_12px_rgba(247,181,0,0.4)]'
    },
    {
      id: 'do',
      label: t('ACADEMIC_HUB.presentation.metrics.do_label', 'Dissolved Oxygen Stability'),
      value: '4.8 mg/L',
      target: t('ACADEMIC_HUB.presentation.metrics.do_target', 'Optimal Biological Range'),
      percent: 84.0,
      color: 'bg-emerald-400',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-400/40',
      glow: 'shadow-[0_0_12px_rgba(16,185,129,0.4)]'
    }
  ];

  const takeaways = [
    t('ACADEMIC_HUB.presentation.takeaways.0', 'Structured & concise narrative highlighting experimental methodology'),
    t('ACADEMIC_HUB.presentation.takeaways.1', 'High-definition vector charts that impress defense committee members'),
    t('ACADEMIC_HUB.presentation.takeaways.2', 'Visual pacing engineered to keep jury attention within strict time limits')
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Slide Meta Tag */}
      <div className="w-full flex items-center justify-between gap-3 mb-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Presentation className="w-4 h-4 text-fluid-yellow" />
          <span className="font-semibold text-slate-200 uppercase tracking-wider">
            {t('ACADEMIC_HUB.presentation.kicker', 'SOUTENANCE DEFENSE SLIDE // PRESENTATION DECK')}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-cyan-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>16:10 4K UHD DECK</span>
        </div>
      </div>

      {/* Realistic Laptop Chassis Wrapper */}
      <div className="w-full max-w-4xl relative">
        {/* Laptop Screen Bezel */}
        <div className="relative mx-auto w-[92%] sm:w-[88%] bg-[#1a2336] rounded-t-2xl sm:rounded-t-3xl p-2.5 sm:p-4 border-t-2 border-x-2 border-slate-700 shadow-2xl">
          {/* Top Webcam Notch & Status Light */}
          <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a0f18] ring-1 ring-slate-600" />
            <span className="w-1 h-1 rounded-full bg-emerald-400/80 animate-ping" />
          </div>

          {/* Laptop Screen Display Area (16:10 Aspect Ratio) */}
          <div className="relative w-full aspect-[16/10] bg-[#07133F] rounded-lg sm:rounded-xl overflow-hidden border border-blue-900/40 p-4 sm:p-7 flex flex-col justify-between text-white shadow-inner">
            {/* Slide Blueprint Background Accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-slate-950/80 to-[#07133F] pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
            
            {/* Slide Header */}
            <div className="relative z-10 flex items-start justify-between border-b border-blue-800/40 pb-3">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-condensed font-bold tracking-widest uppercase bg-fluid-yellow/20 text-fluid-yellow border border-fluid-yellow/30">
                  {t('ACADEMIC_HUB.presentation.screen_kicker', 'THESIS DEFENSE // SOUTENANCE 2026')}
                </span>
                <h4 className="text-sm sm:text-xl font-bold font-title text-white tracking-tight mt-1">
                  {t('ACADEMIC_HUB.presentation.slide_title', 'RESEARCH FINDINGS: WWTP OPTIMIZATION')}
                </h4>
                <p className="text-[10px] sm:text-xs text-cyan-300 font-mono">
                  {t('ACADEMIC_HUB.presentation.slide_subtitle', 'Hydroinformatics telemetry & mass balance analysis')}
                </p>
              </div>

              {/* Presenter Watermark */}
              <div className="text-right hidden sm:block text-[11px] font-mono text-slate-400">
                <span className="text-slate-200 font-semibold block">
                  {t('ACADEMIC_HUB.presentation.presenter', 'Eng. Mohamed Baatas')}
                </span>
                <span className="text-[10px] text-slate-400">
                  {t('ACADEMIC_HUB.presentation.institution', 'National Higher School of Hydraulics')}
                </span>
              </div>
            </div>

            {/* Slide Center: Animated Research Charts & Telemetry Grid */}
            <div className="relative z-10 py-2 sm:py-3 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 flex-1 items-end">
              {metrics.map((m, idx) => {
                const isSelected = activeMetric === idx;
                return (
                  <div
                    key={m.id}
                    onClick={() => setActiveMetric(idx)}
                    className={`relative p-2 sm:p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between h-full max-h-[160px] ${
                      isSelected
                        ? `bg-blue-950/80 ${m.borderColor} ${m.glow} scale-[1.03]`
                        : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-400 mb-1">
                        <span className="truncate">{m.label}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-base sm:text-2xl font-black font-condensed ${m.textColor}`}>
                          {m.value}
                        </span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block mt-0.5 truncate">
                        {m.target}
                      </span>
                    </div>

                    {/* Animated Vertical Bar Indicator */}
                    <div className="w-full bg-slate-950/80 h-2 sm:h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-800 mt-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${m.color}`}
                        style={{ width: `${m.percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slide Footer Information Bar */}
            <div className="relative z-10 pt-2 border-t border-blue-800/40 flex items-center justify-between text-[9px] sm:text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                <span className="text-cyan-300 font-semibold">SLIDE 18 / 32 • STATISTICAL VALIDATION</span>
              </div>
              <span className="text-fluid-yellow font-bold">R² = 0.984 • p &lt; 0.001</span>
            </div>
          </div>
        </div>

        {/* Realistic Laptop Base & Keyboard Chassis */}
        <div className="relative mx-auto w-full h-4 sm:h-6 bg-gradient-to-b from-[#8f9ba8] via-[#546073] to-[#2c3645] rounded-b-xl shadow-2xl flex items-start justify-center">
          {/* Center Trackpad Notch */}
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#1e2633] rounded-b-md mx-auto" />
        </div>
      </div>

      {/* 3 Presentation Takeaway Badges */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        {takeaways.map((takeaway, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 text-xs text-slate-300"
          >
            <div className="p-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="font-medium">{takeaway}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoutenanceLaptopMockup;
