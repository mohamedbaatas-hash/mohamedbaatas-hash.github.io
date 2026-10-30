import React from 'react';
import { useTranslation } from 'react-i18next';
import { Droplet, Compass, Code2, Cpu } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../../data/portfolioData';
import { BlueprintCadre } from '../common/BlueprintCadre';

const DOMAIN_ICONS = [
  <Droplet className="w-4 h-4 text-blue-600 dark:text-sky-400" />,
  <Compass className="w-4 h-4 text-blue-600 dark:text-sky-400" />,
  <Code2 className="w-4 h-4 text-blue-600 dark:text-sky-400" />,
  <Cpu className="w-4 h-4 text-blue-600 dark:text-sky-400" />
];

export function SkillsMatrixSection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <BlueprintCadre
      id="skills-matrix"
      cadreTag="04 // TECHNICAL & COMPUTATIONAL COMPETENCIES MATRIX"
      coordinates="EPANET • SWMM • AUTOCAD • ARCGIS • PYTHON"
      scale="VERIFIED STACK"
    >
      {/* Editorial Section Header */}
      <div className="p-6 sm:p-10 lg:p-12 border-b border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E]">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-sky-400 mb-2">
            [ 04 // {isAr ? 'مصفوفة البرامج والكفاءات التقنية' : 'ENGINEERING & COMPUTATIONAL TOOLKIT'} ]
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-title tracking-tight">
            {isAr ? 'الأدوات الهندسية واللغات البرمجية المعتمدة' : 'Technical Specifications & Software Matrix'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            {isAr
              ? 'قائمة دقيقة وموثقة للبرامج الهندسية ولغات البرمجة المستخدمة فعلياً في النمذجة الهيدروليكية، نظم المعلومات الجغرافية، وتطوير التطبيقات.'
              : 'Strictly verified engineering simulation suites, CAD/GIS environments, and programming languages actively utilized across academic research and production software.'}
          </p>
        </div>
      </div>

      {/* 4-Column Structural Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x rtl:divide-x-reverse divide-slate-200/90 dark:divide-slate-800/90 bg-white dark:bg-[#0B101E]">
        {SKILLS_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="flex flex-col justify-between">
            <div>
              {/* Domain Header Cell */}
              <div className="p-5 sm:p-6 border-b border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#080C17]">
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-400 mb-2">
                  <span>DOM.0{idx + 1}</span>
                  {DOMAIN_ICONS[idx % DOMAIN_ICONS.length]}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white font-title leading-snug">
                  {isAr ? cat.domainAr : cat.domain}
                </h3>
                <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1">
                  {isAr ? cat.descriptionAr : cat.description}
                </p>
              </div>

              {/* Individual Tool Rows */}
              <div className="divide-y divide-slate-200/70 dark:divide-slate-800/70">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 sm:px-6 hover:bg-slate-50/80 dark:hover:bg-slate-900/40 transition-colors"
                  >
                    <div className="flex items-center justify-between font-mono text-xs mb-1">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-blue-600 dark:text-sky-400 font-semibold tabular-nums">
                        0{idx + 1}.{sIdx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column Footer Stamp */}
            <div className="px-6 py-3 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/40 dark:bg-[#080C17]/50 font-mono text-[10px] text-slate-400 flex items-center justify-between">
              <span>STATUS: VERIFIED</span>
              <span>{cat.skills.length} MODULES</span>
            </div>
          </div>
        ))}
      </div>
    </BlueprintCadre>
  );
}

export default SkillsMatrixSection;
