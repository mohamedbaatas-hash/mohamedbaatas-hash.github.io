import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCE_TIMELINE, EDUCATION_DATA } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 border-b border-border-slate/80 bg-surface-sunken">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="CAREER_AND_ACADEMICS"
          title="Engineering Experience & Academic Foundation"
          description="Leadership in scientific associations, enterprise networking training, and rigorous academic credentials in municipal hydraulics and water services management."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Column 1: Leadership & Industry Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-border-slate/60">
              <Briefcase className="w-5 h-5 text-cobalt-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Leadership & Industry Experience
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-border-slate/60">
              {EXPERIENCE_TIMELINE.map((exp, idx) => (
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
                      {exp.highlights.map((item, hIdx) => (
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
                Academic Education & Degrees
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-border-slate/60">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="relative pl-9">
                  {/* Timeline node marker */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-emerald-500 bg-obsidian flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  <Card className="hover:border-emerald-500/40 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 font-mono text-xs text-emerald-400 font-semibold">
                        <Award className="w-3 h-3" />
                        Accredited Degree
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
                        Curriculum Focus & Core Subjects
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
      </div>
    </section>
  );
}
