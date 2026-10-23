import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Languages, BookmarkCheck, MonitorPlay, Check } from 'lucide-react';

export function AcademicServicesGrid() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'format',
      number: '01',
      tapeTag: '01 // FORMATTING',
      icon: <FileText className="w-5 h-5 text-cyan-400" />,
      title: t('ACADEMIC_HUB.services.items.format.title', 'Academic Formatting & University Standards'),
      desc: t('ACADEMIC_HUB.services.items.format.desc', 'Formatting aligned with university guidelines, margin standards, font hierarchy, and automated pagination.'),
      deliverables: [
        'Official university guidelines compliance',
        'Automated TOC, figures and tables indexing',
        'Clean high-resolution Word & PDF export'
      ],
      tag: 'WORD / LATEX / PDF'
    },
    {
      id: 'language',
      number: '02',
      tapeTag: '02 // PROOFREADING',
      icon: <Languages className="w-5 h-5 text-emerald-400" />,
      title: t('ACADEMIC_HUB.services.items.language.title', 'Scientific Linguistic Proofreading'),
      desc: t('ACADEMIC_HUB.services.items.language.desc', 'Linguistic proofreading in Arabic, French, and English, eliminating grammatical flaws and elevating academic syntax.'),
      deliverables: [
        'Academic phrasing & syntax polish',
        'Precise scientific & engineering terminology',
        'Trilingual review (Arabic / French / English)'
      ],
      tag: 'ARABIC / FRENCH / ENGLISH'
    },
    {
      id: 'references',
      number: '03',
      tapeTag: '03 // CITATIONS',
      icon: <BookmarkCheck className="w-5 h-5 text-blue-400" />,
      title: t('ACADEMIC_HUB.services.items.references.title', 'Reference Management & Indexing'),
      desc: t('ACADEMIC_HUB.services.items.references.desc', 'Standardized citation styling (APA 7th, IEEE), DOI verification, bibliography consolidation, and Zotero integration.'),
      deliverables: [
        'APA 7th, IEEE & Vancouver citation compliance',
        'Verified DOI links and primary sources',
        'BibTeX, RIS & Zotero library export'
      ],
      tag: 'APA 7TH / IEEE / ZOTERO'
    },
    {
      id: 'presentation',
      number: '04',
      tapeTag: '04 // SOUTENANCE',
      icon: <MonitorPlay className="w-5 h-5 text-fluid-yellow" />,
      title: t('ACADEMIC_HUB.services.items.presentation.title', 'Soutenance Defense Slide Decks'),
      desc: t('ACADEMIC_HUB.services.items.presentation.desc', 'Presentation slide decks engineered for defense juries, combining executive conciseness with custom scientific charts.'),
      deliverables: [
        'Defense-ready PowerPoint & Keynote decks',
        'Custom vector scientific infographics & charts',
        'Structured slide timing & visual hierarchy'
      ],
      tag: 'POWERPOINT / INFOGRAPHICS'
    }
  ];

  return (
    <div className="w-full">
      {/* Services Grid Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
            04 CORE ACADEMIC MODULES
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-title text-slate-900 dark:text-white">
          {t('ACADEMIC_HUB.services.title', 'Core Academic Services')}
        </h3>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="group rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white/80 dark:bg-[#0A1B54]/80 p-5 flex flex-col justify-between hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-md relative overflow-hidden backdrop-blur-sm"
          >
            <div>
              {/* Yellow Tape Badge with separate number element for test detection */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-[11px] uppercase">
                  {svc.tapeTag}
                </span>
                <span className="font-mono font-bold text-xs text-slate-400 dark:text-cyan-400/80">
                  {svc.number}
                </span>
              </div>

              {/* Header with Icon and Title */}
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30 shrink-0">
                  {svc.icon}
                </div>
                <h4 className="text-sm font-bold font-title text-slate-900 dark:text-white leading-snug">
                  {svc.title}
                </h4>
              </div>

              {/* Punchline */}
              <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {svc.desc}
              </p>

              {/* 3 Micro-Deliverables */}
              <ul className="mt-3.5 space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                {svc.deliverables.map((d, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                    <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tag */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-mono text-cyan-400 font-semibold tracking-wider">
                {svc.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademicServicesGrid;
