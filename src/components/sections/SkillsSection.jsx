import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Droplet, Code, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const skillsCategories = t('SKILLS_CATEGORIES', { returnObjects: true });

  const domainIcons = {
    0: <Droplet className="w-4 h-4 text-cobalt-400" />,
    1: <Code className="w-4 h-4 text-emerald-400" />,
    2: <Cpu className="w-4 h-4 text-cyan-400" />
  };

  // Top 10-12 curated skills for the rich compact preview
  const topPreviewSkills = [
    { name: "EPANET 2.2", domain: "hydraulics", level: "Expert", color: "border-blue-500/40 text-blue-300 bg-blue-950/30" },
    { name: "Python 3 / FastAPI", domain: "software", level: "Expert", color: "border-emerald-500/40 text-emerald-300 bg-emerald-950/30" },
    { name: "React 18 & Vite", domain: "software", level: "Advanced", color: "border-cyan-500/40 text-cyan-300 bg-cyan-950/30" },
    { name: "Hazen-Williams / Hydraulics", domain: "hydraulics", level: "Expert", color: "border-blue-500/40 text-blue-300 bg-blue-950/30" },
    { name: "SCADA & Telemetry", domain: "iot", level: "Advanced", color: "border-purple-500/40 text-purple-300 bg-purple-950/30" },
    { name: "ArcGIS Pro / ArcMap", domain: "hydraulics", level: "Advanced", color: "border-blue-500/40 text-blue-300 bg-blue-950/30" },
    { name: "AutoCAD Civil 3D", domain: "hydraulics", level: "Advanced", color: "border-blue-500/40 text-blue-300 bg-blue-950/30" },
    { name: "SQLite & PostgreSQL", domain: "software", level: "Advanced", color: "border-emerald-500/40 text-emerald-300 bg-emerald-950/30" },
    { name: "ESP32 & Arduino C++", domain: "iot", level: "Advanced", color: "border-purple-500/40 text-purple-300 bg-purple-950/30" },
    { name: "Tailwind CSS", domain: "software", level: "Expert", color: "border-cyan-500/40 text-cyan-300 bg-cyan-950/30" },
    { name: "Blynk IoT / MQTT", domain: "iot", level: "Advanced", color: "border-purple-500/40 text-purple-300 bg-purple-950/30" },
    { name: "Water Treatment (WWTP)", domain: "hydraulics", level: "Advanced", color: "border-blue-500/40 text-blue-300 bg-blue-950/30" },
  ];

  return (
    <section id="skills" className="transition-all duration-300 border-b border-border-slate/80 bg-surface-sunken py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('SKILLS_SECTION.tag', 'COMPETENCIES_MATRIX')}
          title={t('SKILLS_SECTION.title', 'Technical Competencies & Engineering Stacks')}
          description={t('SKILLS_SECTION.desc', 'Rigorous domain categorization across hydraulic modeling, modern full-stack software architecture, and cyber-physical IoT telemetry.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 rounded-xl border border-border-slate/80 bg-obsidian/70 backdrop-blur-sm p-6 sm:p-8 shadow-lg hover:border-cobalt-500/40 transition-all duration-300">
            {/* Pillars Overview Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-slate/60">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  {t('SKILLS_SECTION.core_domains', 'Core Engineering Domains:')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-950/50 text-blue-300 border border-blue-500/30">
                  <Droplet className="w-3.5 h-3.5 text-blue-400" />
                  {t('SKILLS_SECTION.domain_hydro', 'Hydraulics & Sanitation')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">
                  <Code className="w-3.5 h-3.5 text-emerald-400" />
                  {t('SKILLS_SECTION.domain_soft', 'Software & Web Stacks')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-950/50 text-purple-300 border border-purple-500/30">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  {t('SKILLS_SECTION.domain_iot', 'SCADA & IoT Hardware')}
                </span>
              </div>

              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('SKILLS_SECTION.skills_count', '21 Verified Production Skills')}</span>
              </div>
            </div>

            {/* Curated Preview Skills Pills */}
            <div className="mt-6">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                {t('SKILLS_SECTION.featured_preview', 'Featured Competencies Preview (12 Skills):')}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {topPreviewSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 hover:scale-105 ${skill.color}`}
                  >
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-[10px] opacity-75 font-sans px-1.5 py-0.2 rounded bg-black/30">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expand Action Button */}
            <div className="mt-8 pt-5 border-t border-border-slate/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-400">
                {t('SKILLS_SECTION.expand_prompt', 'Click to expand complete capability matrix with detailed engineering descriptions, standards, and levels.')}
              </p>
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md hover:shadow-cobalt-500/20 group"
              >
                <span>{t('SKILLS_SECTION.expand_btn', 'Expand Full Competency Matrix & Tables')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED FULL TABLES VIEW */}
        {isExpanded && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
            {/* Collapse Bar */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('SKILLS_SECTION.collapse_btn', 'Collapse Matrix')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            {/* 3 Full Domain Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {skillsCategories && skillsCategories.map((cat, idx) => (
                <Card key={idx} className="flex flex-col h-full border-border-slate/90 shadow-xl bg-obsidian/90">
                  {/* Card Header */}
                  <div className="flex items-center gap-2.5 pb-3 border-b border-border-slate/60">
                    {domainIcons[idx]}
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {cat.domain}
                    </h3>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Skills Detailed Table/Cards */}
                  <div className="space-y-3 mt-auto">
                    {cat.skills && cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-lg bg-elevated-slate/60 border border-border-slate/70 hover:border-slate-500 transition-all hover:bg-elevated-slate"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-xs font-bold text-slate-100 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian text-cobalt-300 border border-border-slate">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal font-sans pl-5">
                          {skill.detail}
                        </p>
                      </div>
                    ))}
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
                <span>{t('SKILLS_SECTION.collapse_btn', 'Collapse Matrix')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
