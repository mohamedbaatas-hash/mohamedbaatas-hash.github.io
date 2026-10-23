import React, { useState } from 'react';
import { ShoppingBag, Users, BarChart3, CheckCircle, Award, ChevronDown, ChevronUp, ArrowRight, Store, Dumbbell, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function FreelanceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const freelanceSolutions = t('FREELANCE_SOLUTIONS', { returnObjects: true });

  const icons = {
    "maktabi-pos": <Store className="w-5 h-5 text-cobalt-400" />,
    "alquds-gym": <Dumbbell className="w-5 h-5 text-emerald-400" />,
    "custom-consulting": <Database className="w-5 h-5 text-cyan-400" />
  };

  return (
    <section id="freelance" className="transition-all duration-300 border-b border-border-slate/80 bg-obsidian py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('FREELANCE_SECTION.tag', 'COMMERCIAL_SOFTWARE')}
          title={t('FREELANCE_SECTION.title', 'Freelance Engineering & Bespoke Software')}
          description={t('FREELANCE_SECTION.desc', 'High-reliability desktop solutions, access control ERPs, and custom scientific data visualizers designed and deployed for commercial business clients.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {freelanceSolutions && freelanceSolutions.map((sol) => (
                <div
                  key={sol.id}
                  onClick={() => setIsExpanded(true)}
                  className="group cursor-pointer rounded-xl border border-border-slate/80 bg-surface-sunken/90 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-elevated-slate/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-3 border-b border-border-slate/60">
                      <div className="p-2 rounded-lg bg-elevated-slate border border-border-slate/70">
                        {icons[sol.id] || <ShoppingBag className="w-5 h-5 text-cobalt-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base tracking-tight group-hover:text-emerald-300 transition-colors">
                          {sol.name.split('—')[0]}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400 block">
                          {sol.client}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {sol.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border-slate/60 space-y-3">
                    {/* Impact preview pill */}
                    <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="line-clamp-1 text-[11px] font-medium">{sol.impact}</span>
                    </div>

                    {/* Stack preview tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {sol.stack && sol.stack.slice(0, 3).map((stk, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded bg-black/40 border border-border-slate text-[10px] font-mono text-slate-300">
                          {stk}
                        </span>
                      ))}
                      {sol.stack && sol.stack.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                          +{sol.stack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-400 group-hover:text-emerald-300 pt-1">
                      <span>{t('FREELANCE_SECTION.view_features', 'View Full Capabilities')}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General Expand Banner */}
            <div className="rounded-xl border border-border-slate/80 bg-obsidian/70 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-slate-400">
                {t('FREELANCE_SECTION.expand_prompt', 'Click to expand all engineering capabilities, hardware integrations, and client deployment details.')}
              </span>
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md group"
              >
                <span>{t('FREELANCE_SECTION.expand_btn', 'Expand All Commercial Systems')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED FULL VIEW */}
        {isExpanded && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500 mt-6">
            {/* Top Collapse Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('FREELANCE_SECTION.collapse_btn', 'Collapse Systems')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {freelanceSolutions && freelanceSolutions.map((sol) => (
                <Card key={sol.id} className="flex flex-col justify-between h-full border-border-slate/90 shadow-xl bg-surface-sunken">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-3 border-b border-border-slate/60">
                      <div className="p-2 rounded-lg bg-elevated-slate border border-border-slate/70">
                        {icons[sol.id] || <ShoppingBag className="w-5 h-5 text-cobalt-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base sm:text-lg tracking-tight">
                          {sol.name}
                        </h3>
                        <span className="text-[11px] font-mono text-cobalt-400 uppercase tracking-wider block mt-0.5">
                          {sol.type}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {sol.description}
                    </p>

                    {/* Features */}
                    <div className="mt-5 space-y-2">
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {t('FREELANCE_SECTION.capabilities', 'Engineered Capabilities')}
                      </h4>
                      <ul className="space-y-2">
                        {sol.features && sol.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border-slate/60 space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {sol.stack && sol.stack.map((stk, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-elevated-slate border border-border-slate text-[11px] font-mono text-slate-300"
                        >
                          {stk}
                        </span>
                      ))}
                    </div>

                    {/* Commercial Impact */}
                    <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-2 text-emerald-300 text-xs font-sans">
                      <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{sol.impact}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('FREELANCE_SECTION.collapse_btn', 'Collapse Systems')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
