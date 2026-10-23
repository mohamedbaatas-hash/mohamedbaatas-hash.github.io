import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, Cpu, CheckCircle2, ShieldAlert, ExternalLink, ArrowRight, Activity, Terminal } from 'lucide-react';
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
    if (!isExpanded) setIsExpanded(true);
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="case-studies" className="transition-all duration-300 border-b border-border-slate/80 bg-obsidian py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('CASE_STUDIES_SECTION.tag', 'ENGINEERING_PROJECTS')}
          title={t('CASE_STUDIES_SECTION.title', 'Flagship Case Studies & Applied Systems')}
          description={t('CASE_STUDIES_SECTION.desc', 'In-depth breakdown of municipal water distribution modeling, cyber-physical SCADA telemetry testbeds, and high-concurrency cloud telemetry pipelines.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies && caseStudies.map((study, idx) => (
                <div
                  key={study.id}
                  onClick={() => {
                    setIsExpanded(true);
                    setExpandedId(study.id);
                  }}
                  className="group cursor-pointer rounded-xl border border-border-slate/80 bg-surface-sunken/90 p-6 flex flex-col justify-between hover:border-cobalt-500/50 hover:bg-elevated-slate/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Category Pill */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[11px] font-semibold text-cobalt-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        {study.id === 'waterfit-telemetry' ? 'Cloud & Telemetry' : (study.id === 'constracker-suite' ? 'Civil & Desktop ERP' : 'SCADA & Simulation')}
                      </span>
                      <span className="text-xs font-mono text-slate-500 group-hover:text-cobalt-300 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cobalt-300 transition-colors line-clamp-2">
                      {study.title.split('—')[0]}
                    </h3>

                    {/* Subtitle / category detail */}
                    <p className="text-xs text-slate-400 font-mono mt-1 mb-3 line-clamp-1">
                      {study.category}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {study.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border-slate/60 space-y-3">
                    {/* Key Metrics Chips */}
                    <div className="grid grid-cols-2 gap-2">
                      {study.metrics && study.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="p-2 rounded bg-elevated-slate/60 border border-border-slate/60 text-center">
                          <span className="text-[10px] text-slate-400 block font-mono">{m.label}</span>
                          <span className="text-xs font-bold text-white font-mono">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stack tags preview */}
                    <div className="flex flex-wrap gap-1.5">
                      {study.stack && study.stack.slice(0, 3).map((stk, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded bg-black/40 border border-border-slate text-[10px] font-mono text-slate-300">
                          {stk}
                        </span>
                      ))}
                      {study.stack && study.stack.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                          +{study.stack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Expand CTA */}
                    <div className="flex items-center justify-between text-xs font-mono text-cobalt-400 group-hover:text-cobalt-300 pt-2">
                      <span>{t('CASE_STUDIES_SECTION.view_study', 'View Full Case Study')}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General Expand Banner */}
            <div className="rounded-xl border border-border-slate/80 bg-obsidian/70 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-slate-400">
                {t('CASE_STUDIES_SECTION.expand_all_prompt', 'Click to expand all engineering methodologies, field problems, and full architectural stacks.')}
              </span>
              <button
                onClick={() => {
                  setIsExpanded(true);
                  setExpandedId(null);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md group"
              >
                <span>{t('CASE_STUDIES_SECTION.expand_all_btn', 'Expand Complete Project Architectures')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED FULL ARCHITECTURES VIEW */}
        {isExpanded && (
          <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500 mt-6">
            {/* Top Collapse Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('CASE_STUDIES_SECTION.collapse_all_btn', 'Collapse Case Studies')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            {caseStudies && caseStudies.map((study) => {
              const isCardExpanded = expandedId === study.id || expandedId === null;

              return (
                <Card key={study.id} className="transition-all duration-200 border-border-slate/90 shadow-xl bg-surface-sunken">
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
                      <span>{isCardExpanded ? t('CASE_STUDIES_SECTION.collapse', 'Collapse Details') : t('CASE_STUDIES_SECTION.expand', 'Expand Full Methodology')}</span>
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
                      <div className="p-4 rounded-lg bg-red-950/20 border border-red-500/30">
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
                        <ul className="space-y-2.5">
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

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('CASE_STUDIES_SECTION.collapse_all_btn', 'Collapse Case Studies')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
