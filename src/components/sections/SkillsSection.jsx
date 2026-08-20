import React from 'react';
import { Layers, CheckCircle, Droplet, Code, Cpu } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function SkillsSection() {
  const domainIcons = {
    0: <Droplet className="w-4 h-4 text-cobalt-400" />,
    1: <Code className="w-4 h-4 text-emerald-400" />,
    2: <Cpu className="w-4 h-4 text-cyan-400" />
  };

  return (
    <section id="skills" className="py-20 border-b border-border-slate/80 bg-surface-sunken">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="COMPETENCIES_MATRIX"
          title="Technical Competencies & Engineering Stacks"
          description="Rigorous domain categorization across hydraulic modeling, modern full-stack software architecture, and cyber-physical IoT telemetry. Structured capability matrices with verified production applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <Card key={idx} className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-border-slate/60">
                {domainIcons[idx]}
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {cat.domain}
                </h3>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                {cat.description}
              </p>

              {/* Skills List (Strictly badges/lists, ZERO progress bars) */}
              <div className="space-y-3 mt-auto">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded bg-elevated-slate/60 border border-border-slate/70 hover:border-slate-600 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs font-bold text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian text-cobalt-300 border border-border-slate">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal font-sans">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
