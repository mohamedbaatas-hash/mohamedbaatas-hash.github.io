import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const experienceTimeline = t('EXPERIENCE_TIMELINE', { returnObjects: true });
  const educationData = t('EDUCATION_DATA', { returnObjects: true });

  return (
    <section id="experience" className={`transition-all duration-300 border-b border-border-slate/80 bg-surface-sunken ${isExpanded ? 'py-20' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('EXPERIENCE_SECTION.tag', 'CAREER_AND_ACADEMICS')}
          title={t('EXPERIENCE_SECTION.title', 'Engineering Experience & Academic Foundation')}
          description={t('EXPERIENCE_SECTION.desc', 'Leadership in scientific associations, enterprise networking training, and rigorous academic credentials in municipal hydraulics and water services management.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {isExpanded && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-in fade-in slide-in-from-top-4 duration-500">
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

                  <Card className="hover:border-cobalt-500/40 transition-colors">
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

                  <Card className="hover:border-emerald-500/40 transition-colors">
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

                    <div className="mt-4 border-t border-border-slate/60 pt-3">
                      <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                        {t('EXPERIENCE_SECTION.focus', 'Curriculum Focus & Core Subjects')}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {edu.focus}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
