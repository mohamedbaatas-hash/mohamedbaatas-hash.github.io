import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Calculator,
  Droplets,
  Smartphone,
  Database,
  BookOpen,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { FLUIDEV_SOFTWARE, FLUIDEV_ACADEMIC_SERVICES } from '../../data/portfolioData';
import { MosaicStageGrid } from '../common/MosaicStageGrid';
import { SoftwareSchematicPreview } from './SoftwareSchematics';

const APP_STYLES = {
  'avant-metre': {
    color: 'indigo',
    shape: 'wide', // 8 cols x 1 row
    icon: <Calculator className="w-3.5 h-3.5" />,
  },
  'waterfit': {
    color: 'cyan',
    shape: 'tall', // 4 cols x 2 rows
    icon: <Droplets className="w-3.5 h-3.5" />,
  },
  'nfc-business-card': {
    color: 'amber',
    shape: 'square', // 4 cols x 1 row
    icon: <Smartphone className="w-3.5 h-3.5" />,
  },
  'management-erps': {
    color: 'emerald',
    shape: 'square', // 4 cols x 1 row
    icon: <Database className="w-3.5 h-3.5" />,
  },
};

export function SoftwareSolutionsSection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const softwareItems = FLUIDEV_SOFTWARE.map((app) => {
    const style = APP_STYLES[app.id] || { color: 'cyan', shape: 'medium' };
    return {
      id: app.id,
      title: app.title,
      subtitle: isAr ? app.subtitleAr : app.subtitle,
      badge: app.badge,
      summary: isAr ? app.descriptionAr : app.description,
      tags: app.stack,
      color: style.color,
      shape: style.shape,
      icon: style.icon,
      detailsList: isAr ? app.featuresAr : app.features,
      renderDiagram: () => (
        <div className="w-full text-slate-900 dark:text-white">
          <SoftwareSchematicPreview appId={app.id} isAr={isAr} />
        </div>
      ),
    };
  });

  // Add the Academic & Engineering Services as a 5th asymmetric mosaic card
  const academicCard = {
    id: 'academic-services-card',
    title: isAr
      ? 'الخدمات الأكاديمية والهندسية (تنسيق مذكرات، عروض، وشيتات حسابية)'
      : 'FluiDev Academic & Engineering Deliverables (Theses, Decks & Spreadsheets)',
    subtitle: isAr
      ? 'مرافقة تقنية للطلبة والباحثين ومكاتب الدراسات'
      : 'Technical Formatting, Defense Presentations & Custom Engineering Sheets',
    badge: 'FLUIDEV ACADEMIC SERVICES',
    summary: isAr
      ? 'تقديم خدمات متخصصة تشمل التنسيق الأكاديمي لمذكرات التخرج (PFE / Master)، تصميم عروض المناقشة الاحترافية (Soutenance)، وبناء شيتات إكسل الحسابية.'
      : 'Dedicated support for graduating students, researchers, and engineering offices: thesis typesetting, defense slide decks, and automated hydraulic calculation sheets.',
    tags: ['PFE / Master Thesis', 'PowerPoint Soutenance', 'Excel Hydraulic Sheets'],
    color: 'violet',
    shape: 'banner',
    icon: <BookOpen className="w-3.5 h-3.5" />,
    detailsList: FLUIDEV_ACADEMIC_SERVICES.map((srv) =>
      isAr ? `${srv.titleAr}: ${srv.descAr}` : `${srv.title}: ${srv.desc}`
    ),
    renderDiagram: () => (
      <div className="p-5 bg-slate-950/90 text-white font-mono text-xs space-y-3">
        <div className="text-[10px] text-purple-300 font-bold uppercase tracking-wider border-b border-white/10 pb-2">
          {isAr ? 'الخدمات المتاحة عبر FluiDev' : 'AVAILABLE DELIVERABLES MATRIX'}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {FLUIDEV_ACADEMIC_SERVICES.map((srv, i) => (
            <div key={srv.id} className="p-3 rounded-xl bg-white/5 border border-purple-400/30 space-y-1">
              <span className="text-[10px] text-purple-300 font-bold block">0{i + 1} // DELIVERABLE</span>
              <div className="font-title font-bold text-xs text-white">
                {isAr ? srv.titleAr : srv.title}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-2 flex justify-end">
          <a
            href="https://t.me/Fluidev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-400/40 text-purple-200 hover:bg-purple-500/30 text-[11px] font-bold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{isAr ? 'تواصل عبر تيليجرام @Fluidev' : 'Request on Telegram @Fluidev'}</span>
          </a>
        </div>
      </div>
    ),
  };

  const allItems = [...softwareItems, academicCard];

  return (
    <section
      id="fluidev-software"
      className="relative min-h-screen w-full py-20 sm:py-28 px-4 sm:px-8 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full bg-indigo-500/25 text-indigo-200 border border-indigo-400/40">
            02 // {isAr ? 'البرامج والحلول التقنية' : 'SOFTWARE & COMPUTATIONAL TOOLS'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-title text-white tracking-tight drop-shadow-[0_0_25px_rgba(99,102,241,0.4)]">
            {isAr ? 'ابتكارات وبرمجيات FLUIDEV' : 'FLUIDEV SOFTWARE & TOOLS'}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-indigo-200/80">
            {isAr
              ? 'اضغط على أي بطاقة لمعاينة البرنامج وتجربته، أو اضغط "تمدد كلي" لعرض كافة المزايا'
              : 'Click any tile to preview the software architecture, or click "Full Expand" for complete details'}
          </p>
        </div>

        {/* 3-Stage Asymmetric Mosaic Gallery */}
        <MosaicStageGrid items={allItems} isAr={isAr} />

      </div>
    </section>
  );
}

export default SoftwareSolutionsSection;
