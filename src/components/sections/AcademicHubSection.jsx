import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThesisMakeoverCompare } from './academic/ThesisMakeoverCompare';
import { SoutenanceLaptopMockup } from './academic/SoutenanceLaptopMockup';
import { AcademicServicesGrid } from './academic/AcademicServicesGrid';
import { AcademicEthicsBanner } from './academic/AcademicEthicsBanner';
import { AcademicCtaBanner } from './academic/AcademicCtaBanner';
import { CircuitBackground } from '../common/CircuitBackground';
import { GraduationCap, FileCheck, Clock, Globe, Laptop, Split, Sparkles } from 'lucide-react';

export function AcademicHubSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('makeover');

  const stats = [
    {
      value: t('ACADEMIC_HUB.stats.theses_transformed', '50+ Theses'),
      detail: t('ACADEMIC_HUB.stats.theses_detail', 'Delivered for Master & PhD defenses'),
      icon: <GraduationCap className="w-4 h-4 text-cyan-400" />
    },
    {
      value: t('ACADEMIC_HUB.stats.defense_ready', '100%'),
      detail: t('ACADEMIC_HUB.stats.defense_detail', 'Jury-compliant formatting & timing'),
      icon: <FileCheck className="w-4 h-4 text-emerald-400" />
    },
    {
      value: t('ACADEMIC_HUB.stats.turnaround', '< 5 Days'),
      detail: t('ACADEMIC_HUB.stats.turnaround_detail', 'Rapid turnaround for critical deadlines'),
      icon: <Clock className="w-4 h-4 text-fluid-yellow" />
    },
    {
      value: t('ACADEMIC_HUB.stats.satisfaction', '3 Languages'),
      detail: t('ACADEMIC_HUB.stats.satisfaction_detail', 'Arabic, French & English proficiency'),
      icon: <Globe className="w-4 h-4 text-blue-400" />
    }
  ];

  return (
    <section
      id="academic-hub"
      className="relative py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#07133f]/70 overflow-hidden"
    >
      <CircuitBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-fluid-yellow" />
              03 // {t('ACADEMIC_HUB.section_badge', 'ACADEMIC TRANSFORMATION // FLUIDEV')}
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              01 001 1010
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-title text-slate-900 dark:text-white tracking-tight leading-tight">
            {t('ACADEMIC_HUB.section_title', 'Academic Transformation & Thesis Hub')}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t(
              'ACADEMIC_HUB.section_subtitle',
              'Transforming raw scientific research and engineering drafts into defense-ready theses, high-impact Soutenance presentation decks, and university-compliant publications.'
            )}
          </p>
        </div>

        {/* 4 Stats Cards Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/90 dark:bg-[#0A1B54]/90 border border-slate-200 dark:border-blue-500/30 backdrop-blur-sm flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-2xl font-black font-condensed text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </span>
                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30">
                  {stat.icon}
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-tight">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Showcase Tabs Switcher */}
        <div className="mb-8 flex items-center justify-center">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-blue-500/30 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('makeover')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'makeover'
                  ? 'bg-fluid-blue text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Split className="w-4 h-4" />
              <span>{t('ACADEMIC_HUB.tabs.thesis_makeover', 'Thesis Makeover')}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('presentation')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'presentation'
                  ? 'bg-fluid-blue text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>{t('ACADEMIC_HUB.tabs.presentation_mockup', 'Defense Presentation')}</span>
            </button>
          </div>
        </div>

        {/* Interactive Showcase Container */}
        <div className="mb-14">
          {activeTab === 'makeover' ? (
            <div className="transition-opacity duration-300">
              <ThesisMakeoverCompare />
            </div>
          ) : (
            <div className="transition-opacity duration-300">
              <SoutenanceLaptopMockup />
            </div>
          )}
        </div>

        {/* 4 Core Academic Services Grid */}
        <div className="mb-14">
          <AcademicServicesGrid />
        </div>

        {/* Academic Ethics & Integrity Guarantee Banner */}
        <div className="mb-10">
          <AcademicEthicsBanner />
        </div>

        {/* Direct Call-to-Action Banner */}
        <div>
          <AcademicCtaBanner />
        </div>
      </div>
    </section>
  );
}

export default AcademicHubSection;
