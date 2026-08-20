import React, { useState } from 'react';
import { ShoppingBag, Users, BarChart3, CheckCircle, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function FreelanceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const freelanceSolutions = t('FREELANCE_SOLUTIONS', { returnObjects: true });

  const icons = {
    "maktabi-pos": <ShoppingBag className="w-5 h-5 text-cobalt-400" />,
    "alquds-gym": <Users className="w-5 h-5 text-emerald-400" />,
    "custom-consulting": <BarChart3 className="w-5 h-5 text-cyan-400" />
  };

  return (
    <section id="freelance" className={`transition-all duration-300 border-b border-border-slate/80 bg-obsidian ${isExpanded ? 'py-20' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('FREELANCE_SECTION.tag', 'COMMERCIAL_SOFTWARE')}
          title={t('FREELANCE_SECTION.title', 'Freelance Engineering & Bespoke Software')}
          description={t('FREELANCE_SECTION.desc', 'High-reliability desktop solutions, access control ERPs, and custom scientific data visualizers designed and deployed for commercial business clients.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {isExpanded && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
          {freelanceSolutions && freelanceSolutions.map((sol) => (
            <Card key={sol.id} className="flex flex-col justify-between h-full">
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-border-slate/60">
                  {icons[sol.id]}
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
                  <ul className="space-y-1.5">
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
                <div className="p-3 rounded bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-2 text-emerald-300 text-xs font-sans">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{sol.impact}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
