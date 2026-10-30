import React from 'react';
import { ArrowUp, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PERSONAL_DATA } from '../../data/portfolioData';
import { FluiDevLogo } from '../common/FluiDevLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#060911] text-slate-600 dark:text-slate-400 font-mono text-xs transition-colors duration-200">
      <div className="max-w-[1320px] mx-auto border-x border-slate-200/90 dark:border-slate-800/90 divide-y divide-slate-200/90 dark:divide-slate-800/90">
        
        {/* Top Structural Row */}
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <FluiDevLogo size={28} />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-title font-bold text-slate-950 dark:text-white text-sm">
                  {isAr ? 'محمد بعتاس' : PERSONAL_DATA.fullName}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 bg-blue-600/10 dark:bg-sky-400/10 text-blue-700 dark:text-sky-300 border border-blue-600/20 dark:border-sky-400/20 font-bold">
                  FluiDev
                </span>
              </div>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                {isAr ? 'مهندس ري وموارد مائية — جامعة محمد خيضر بسكرة' : 'Hydraulic & Water Resources Engineer — Université Mohamed Khider Biskra'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Mohammed_Baatas_CV_ATS.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-950 dark:bg-sky-400 text-white dark:text-slate-950 font-bold text-[11px] uppercase tracking-wider"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>ATS CV [A4]</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-blue-600 dark:hover:border-sky-400 transition-colors text-[11px]"
            >
              <span>{isAr ? 'الأعلى' : 'TOP'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Coordinates Bar */}
        <div className="px-6 sm:px-8 py-3.5 bg-slate-50/70 dark:bg-[#080C17] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
          <span>© {currentYear} Mohammed Baatas (FluiDev). All academic & engineering records 100% verified.</span>
          <span className="tabular-nums">COORD: 34.8500° N, 5.7300° E // BISKRA, ALGERIA</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
