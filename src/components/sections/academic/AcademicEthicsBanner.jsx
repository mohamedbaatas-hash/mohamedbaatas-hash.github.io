import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Scale, Award, Lock } from 'lucide-react';

export function AcademicEthicsBanner() {
  const { t } = useTranslation();

  return (
    <div className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900/90 to-blue-950/60 border border-blue-900/40 p-6 sm:p-8 backdrop-blur-md shadow-xl">
      {/* Background Subtle Watermark */}
      <div className="absolute right-4 -bottom-6 opacity-5 pointer-events-none">
        <ShieldCheck className="w-56 h-56 text-white" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-cyan-400 shrink-0 mt-1">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-[10px] sm:text-xs font-condensed font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                {t('ACADEMIC_HUB.ethics.badge', 'ACADEMIC INTEGRITY GUARANTEE')}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold font-title text-white">
              {t('ACADEMIC_HUB.ethics.title', 'Responsible Academic Accompaniment & Scientific Ethics')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mt-1.5">
              {t('ACADEMIC_HUB.ethics.description', "We provide editorial, formatting, linguistic, and presentation structuring support. All core scientific research, calculations, data collection, and intellectual conclusions remain 100% the student's original work in strict adherence to academic honesty and ethics.")}
            </p>
          </div>
        </div>

        {/* 3 Integrity Micro-Pills */}
        <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-cyan-300">
            <Scale className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Zero Plagiarism Policy</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-emerald-300">
            <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>100% Originality Preserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicEthicsBanner;
