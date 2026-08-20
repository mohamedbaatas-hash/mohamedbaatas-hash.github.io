import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, Cpu, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { MetricBadge } from '../common/MetricBadge';

export function CaseStudiesSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const { t } = useTranslation();
  const caseStudies = t('CASE_STUDIES', { returnObjects: true });

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="case-studies" className={`transition-all duration-300 border-b border-border-slate/80 bg-obsidian ${isExpanded ? 'py-20' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('CASE_STUDIES_SECTION.tag', 'ENGINEERING_PROJECTS')}
          title={t('CASE_STUDIES_SECTION.title', 'Flagship Case Studies & Applied Systems')}
          description={t('CASE_STUDIES_SECTION.desc', 'In-depth breakdown of municipal water distribution modeling, cyber-physical SCADA telemetry testbeds, and high-concurrency cloud telemetry pipelines.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {isExpanded && (
          <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
            {caseStudies && caseStudies.map((study) => {
              const isCardExpanded = expandedId === study.id;

              return (
                <Card key={study.id} className="transition-all duration-200">
                  {/* Header Strip */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border-slate/60">
                    <div>
                      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cobalt-400 font-semibold uppercase tracking-wider">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>{study.category}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {study.title}
                      </h3>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(study.id);
                      }}
                      className="self-start md:self-auto inline-flex items-center gap-2 px-3 py-1.5 rounded bg-elevated-slate hover:bg-slate-700 text-xs font-mono text-slate-300 border border-border-slate transition-colors"
                    >
                      <span>{isCardExpanded ? t('CASE_STUDIES_SECTION.collapse', 'Collapse Architecture') : t('CASE_STUDIES_SECTION.expand', 'Expand Full Methodology')}</span>
                      {isCardExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Summary & Metrics */}
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {study.metrics && study.metrics.map((m, idx) => (
                      <MetricBadge
                        key={idx}
                        label={m.label}
                        value={m.value}
                        status={idx === 0 ? "cobalt" : (idx === 1 ? "amber" : "nominal")}
                      />
                    ))}
                  </div>

                  {/* Expanded Deep Dive */}
                  {isCardExpanded && (
                    <div className="mt-6 pt-6 border-t border-border-slate/60 space-y-6">
                      {/* Problem Statement */}
                      <div className="p-4 rounded bg-red-950/20 border border-red-500/30">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-1.5">
                          <ShieldAlert className="w-4 h-4" />
                          <span>{t('CASE_STUDIES_SECTION.problem', 'Problem Statement & Field Vulnerability')}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {study.problem}
                        </p>
                      </div>

                      {/* Methodology Steps */}
                      <div>
                        <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                          {t('CASE_STUDIES_SECTION.methodology', 'Engineered Methodology & Technical Implementation')}
                        </h4>
                        <ul className="space-y-2">
                          {study.methodology && study.methodology.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Hardware & Software Stack Badges */}
                      <div>
                        <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                          {t('CASE_STUDIES_SECTION.stack', 'Hardware & Software Technology Stack')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.stack && study.stack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded bg-elevated-slate border border-border-slate text-xs font-mono text-cobalt-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
