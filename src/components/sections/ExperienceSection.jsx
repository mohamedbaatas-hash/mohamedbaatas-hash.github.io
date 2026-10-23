import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const experienceTimeline = t('EXPERIENCE_TIMELINE', { returnObjects: true });
  const educationData = t('EDUCATION_DATA', { returnObjects: true });

  return (
    <section id="experience" className="transition-all duration-300 border-b border-border-slate/80 bg-surface-sunken py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('EXPERIENCE_SECTION.tag', 'CAREER_AND_ACADEMICS')}
          title={t('EXPERIENCE_SECTION.title', 'Engineering Experience & Academic Foundation')}
          description={t('EXPERIENCE_SECTION.desc', 'Leadership in scientific associations, enterprise networking training, and rigorous academic credentials in municipal hydraulics and water services management.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 rounded-xl border border-border-slate/80 bg-obsidian/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl hover:border-cobalt-500/40 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-border-slate/60">
              
              {/* Preview Col 1: Leadership & Industry */}
              <div 
                onClick={() => setIsExpanded(true)}
                className="group cursor-pointer p-5 rounded-lg bg-surface-sunken/80 border border-border-slate/60 hover:border-cobalt-500/40 hover:bg-elevated-slate/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cobalt-400" />
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {t('EXPERIENCE_SECTION.col1', 'Leadership & Industry Experience')}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-cobalt-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                
                <div className="space-y-3 mt-4">
                  {experienceTimeline && experienceTimeline.slice(0, 2).map((exp, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-200 block">{exp.role}</span>
                        <span className="text-slate-400 text-[11px]">{exp.organization}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-black/40 border border-border-slate font-mono text-[10px] text-slate-400 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview Col 2: Academic Degrees */}
              <div 
                onClick={() => setIsExpanded(true)}
                className="group cursor-pointer p-5 rounded-lg bg-surface-sunken/80 border border-border-slate/60 hover:border-emerald-500/40 hover:bg-elevated-slate/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {t('EXPERIENCE_SECTION.col2', 'Academic Education & Degrees')}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>

                <div className="space-y-3 mt-4">
                  {educationData && educationData.slice(0, 2).map((edu, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-200 block">{edu.degree}</span>
                        <span className="text-slate-400 text-[11px]">{edu.institution}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-black/40 border border-border-slate font-mono text-[10px] text-slate-400 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Expand Call To Action */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('EXPERIENCE_SECTION.credentials_count', 'Master of Science (M.S.) + Bachelor of Science (B.S.) • Huawei Seeds For Future • Club Leadership')}</span>
              </div>
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md group"
              >
                <span>{t('EXPERIENCE_SECTION.expand_btn', 'Expand Full Timeline & Credentials')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED FULL TIMELINE VIEW */}
        {isExpanded && (
          <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500 mt-6">
            {/* Top Collapse Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('EXPERIENCE_SECTION.collapse_btn', 'Collapse Timeline')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Column 1: Leadership & Industry Experience */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-border-slate/60">
                  <Briefcase className="w-5 h-5 text-cobalt-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {t('EXPERIENCE_SECTION.col1', 'Leadership & Industry Experience')}
                  </h3>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-border-slate/60">
                  {experienceTimeline && experienceTimeline.map((exp, idx) => (
                    <div key={idx} className="relative pl-9">
                      {/* Timeline node marker */}
                      <div className="absolute left-1.5 top-1.5 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-cobalt-500 bg-obsidian flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400" />
                      </div>

                      <Card className="hover:border-cobalt-500/40 transition-colors border-border-slate/90 shadow-xl bg-surface-sunken">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cobalt-950/60 border border-cobalt-500/30 font-mono text-xs text-cobalt-400 font-semibold">
                            {exp.type}
                          </span>
                          <div className="flex items-center gap-1 font-mono text-xs text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                          <span className="text-cobalt-300">{exp.organization}</span>
                          {exp.location && (
                            <>
                              <span className="text-slate-600">•</span>
                              <span className="flex items-center gap-1 text-slate-400">
                                <MapPin className="w-3 h-3" />
                                {exp.location}
                              </span>
                            </>
                          )}
                        </div>

                        <ul className="mt-4 space-y-2 border-t border-border-slate/60 pt-3">
                          {exp.highlights && exp.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Academic Education */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-border-slate/60">
                  <GraduationCap className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {t('EXPERIENCE_SECTION.col2', 'Academic Education & Degrees')}
                  </h3>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-border-slate/60">
                  {educationData && educationData.map((edu, idx) => (
                    <div key={idx} className="relative pl-9">
                      {/* Timeline node marker */}
                      <div className="absolute left-1.5 top-1.5 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-emerald-500 bg-obsidian flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>

                      <Card className="hover:border-emerald-500/40 transition-colors border-border-slate/90 shadow-xl bg-surface-sunken">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 font-mono text-xs text-emerald-400 font-semibold">
                            <Award className="w-3 h-3" />
                            {t('EXPERIENCE_SECTION.accredited', 'Accredited Degree')}
                          </span>
                          <div className="flex items-center gap-1 font-mono text-xs text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                          {edu.institution}
                        </p>

                        <div className="mt-4 border-t border-border-slate/60 pt-3 space-y-2">
                          <div className="text-xs text-slate-300">
                            <span className="font-mono text-slate-400">{t('EXPERIENCE_SECTION.specialization', 'Specialization:')} </span>
                            {edu.specialization}
                          </div>
                          {edu.focus && (
                            <div className="text-xs text-slate-400">
                              <span className="font-mono text-slate-500">{t('EXPERIENCE_SECTION.thesis', 'Focus / Thesis:')} </span>
                              {edu.focus}
                            </div>
                          )}
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('EXPERIENCE_SECTION.collapse_btn', 'Collapse Timeline')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
