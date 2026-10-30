import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Presentation, FileSpreadsheet, ArrowUpRight } from 'lucide-react';
import { FLUIDEV_ACADEMIC_SERVICES } from '../../data/portfolioData';
import { BlueprintCadre } from '../common/BlueprintCadre';

const SERVICE_ICONS = [
  <BookOpen className="w-4 h-4 text-blue-600 dark:text-sky-400" />,
  <Presentation className="w-4 h-4 text-blue-600 dark:text-sky-400" />,
  <FileSpreadsheet className="w-4 h-4 text-blue-600 dark:text-sky-400" />
];

export function AcademicHubSection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <BlueprintCadre
      id="academic-services"
      cadreTag="06 // FLUIDEV ACADEMIC & TECHNICAL DELIVERABLES"
      coordinates="THESIS • DEFENSE • CALCULATION SHEETS"
      scale="CONSULTANCY"
    >
      {/* Editorial Section Header */}
      <div className="p-6 sm:p-10 lg:p-12 border-b border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E]">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-sky-400 mb-2">
            [ 06 // {isAr ? 'الخدمات الأكاديمية والهندسية' : 'ACADEMIC & ENGINEERING CONSULTANCY'} ]
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-title tracking-tight">
            {isAr ? 'خدمات FluiDev للطلبة والباحثين ومكاتب الدراسات' : 'Academic Formatting & Calculation Deliverables'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            {isAr
              ? 'مرافقة تقنية وأكاديمية متخصصة: من تنسيق مذكرات التخرج (PFE / Master) وفق المعايير الجامعية، إلى تصميم عروض المناقشة الاحترافية، وإعداد شيتات الحسابات الهيدروليكية.'
              : 'Specialized technical support for engineering researchers, graduating students, and consulting offices: university-compliant PFE thesis typesetting, defense presentation decks, and automated hydraulic calculation sheets.'}
          </p>
        </div>
      </div>

      {/* 3-Column Swiss Structural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rtl:divide-x-reverse divide-slate-200/90 dark:divide-slate-800/90 bg-white dark:bg-[#0B101E]">
        {FLUIDEV_ACADEMIC_SERVICES.map((srv, idx) => (
          <div
            key={srv.id}
            className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 hover:bg-slate-50/70 dark:hover:bg-slate-900/30 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                <span className="font-bold text-blue-600 dark:text-sky-400">SRV.0{idx + 1}</span>
                <div className="p-2 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#080C17]">
                  {SERVICE_ICONS[idx % SERVICE_ICONS.length]}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white font-title">
                {isAr ? srv.titleAr : srv.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                {isAr ? srv.descAr : srv.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between font-mono text-xs">
              <a
                href="https://t.me/Fluidev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
              >
                <span>{isAr ? 'طلب الخدمة عبر تيليجرام' : 'Inquire via Telegram'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] text-slate-400">@Fluidev</span>
            </div>
          </div>
        ))}
      </div>
    </BlueprintCadre>
  );
}

export default AcademicHubSection;
