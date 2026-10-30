import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Mail,
  Github,
  Linkedin,
  Send,
  ArrowDown,
  ArrowUpRight,
  Camera,
  Sparkles,
  Award,
  GraduationCap,
  EyeOff,
  Eye
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PERSONAL_DATA } from '../../data/portfolioData';

const PHOTO_STORAGE_KEY = 'mohammed_baatas_portrait_v2';
const PHOTO_VISIBILITY_KEY = 'mohammed_baatas_show_photo_v2';
const DEFAULT_LAB_PHOTO = '/assets/mohammed-larhyss-lab.jpg';

export function HeroSection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [photoDataUrl, setPhotoDataUrl] = useState(DEFAULT_LAB_PHOTO);
  const [showPhoto, setShowPhoto] = useState(true);
  const fileInputRef = useRef(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(PHOTO_STORAGE_KEY);
      if (saved) setPhotoDataUrl(saved);
      const savedVis = localStorage.getItem(PHOTO_VISIBILITY_KEY);
      if (savedVis !== null) setShowPhoto(savedVis === 'true');
    } catch {
      // ignore storage errors
    }
  }, []);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      setPhotoDataUrl(result);
      setShowPhoto(true);
      try {
        localStorage.setItem(PHOTO_STORAGE_KEY, result);
        localStorage.setItem(PHOTO_VISIBILITY_KEY, 'true');
      } catch {
        // ignore quota errors
      }
    };
    reader.readAsDataURL(file);
  };

  const togglePhotoVisibility = () => {
    const next = !showPhoto;
    setShowPhoto(next);
    try {
      localStorage.setItem(PHOTO_VISIBILITY_KEY, String(next));
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center relative z-10 space-y-6">
        
        {/* 1. Top Sci-Fi Glowing Title Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/40 backdrop-blur-md text-sky-300 font-mono text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>
              {isAr ? 'أهلاً بك في عالمي الهندسي والرقمي // FLUIDEV' : 'WELCOME TO MY ENGINEERING UNIVERSE // FLUIDEV'}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-title tracking-tight text-white drop-shadow-[0_0_30px_rgba(56,189,248,0.45)] leading-tight pt-2">
            {isAr ? 'محمد بعتاس' : 'MOHAMMED BAATAS'}
          </h1>

          <p className="text-lg sm:text-2xl font-bold font-title text-sky-300 tracking-wide">
            {isAr ? PERSONAL_DATA.titleAr : PERSONAL_DATA.title}
          </p>
        </div>

        {/* 2. LARHYSS Hydraulics Research Laboratory Snapshot Frame (Smart-Cropped to highlight Lab Glassware & Researcher) */}
        {showPhoto ? (
          <div className="relative group my-1">
            <div className="w-72 sm:w-88 h-40 sm:h-44 rounded-2xl p-1 bg-gradient-to-tr from-sky-400 via-cyan-300 to-indigo-500 shadow-[0_0_45px_rgba(56,189,248,0.4)] relative">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-950 border border-white/30 relative">
                {/* Smart crop focusing on upper-right (researcher + LARHYSS volumetric flasks, hiding lower-left cardboard boxes) */}
                <img
                  src={photoDataUrl}
                  alt="Mohammed Baatas at LARHYSS Hydraulics Research Laboratory"
                  className="w-full h-full object-cover object-[75%_18%] scale-[1.18] contrast-[1.06] brightness-[0.96]"
                />
                {/* Subtle Oceanic Blueprint Gradient Overlay for readable HUD badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041028]/90 via-[#041028]/15 to-transparent pointer-events-none" />

                {/* Bottom Caption Inside Frame: LARHYSS Laboratory Credential */}
                <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between gap-2 text-left rtl:text-right">
                  <div>
                    <span className="block font-mono text-[10px] font-extrabold uppercase tracking-wider text-sky-300">
                      {isAr ? 'مخبر أبحاث الهيدروليك LARHYSS' : 'LARHYSS HYDRAULICS LAB'}
                    </span>
                    <span className="block font-sans text-[10px] text-slate-200/90">
                      {isAr ? 'تحاليل المياه والهيدروليك — جامعة بسكرة' : 'Water & Hydro-Chemical Analysis • Univ. Biskra'}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-300 font-mono text-[9px] font-bold shrink-0">
                    M2 Researcher
                  </span>
                </div>

                {/* Hover Controls: Change Photo or Hide Frame */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2.5 px-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-400 text-slate-950 font-mono text-[10px] font-extrabold hover:bg-sky-300 transition-colors"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>{isAr ? 'تغيير الصورة' : 'Change Photo'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={togglePhotoVisibility}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 text-white border border-white/25 font-mono text-[10px] font-semibold hover:bg-white/25 transition-colors"
                  >
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>{isAr ? 'إخفاء الصورة' : 'Hide Photo'}</span>
                  </button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={togglePhotoVisibility}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-sky-300/30 font-mono text-[11px] text-sky-200 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-sky-400" />
            <span>{isAr ? 'إظهار صورة مخبر LARHYSS' : 'Show LARHYSS Lab Photo'}</span>
          </button>
        )}

        {/* 3. Translucent Cosmic Glass Bio Card */}
        <div className="max-w-3xl w-full rounded-3xl bg-slate-950/65 backdrop-blur-2xl border border-sky-400/35 shadow-[0_0_50px_rgba(6,24,68,0.8)] p-6 sm:p-8 text-center space-y-5">
          {/* Quick Identity Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 border border-white/15">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              {isAr ? 'ماستر 2: تسيير وهندسة خدمات المياه والتطهير' : 'M.Sc. (M2) Water & Sanitation Engineering'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 text-sky-200 border border-sky-400/30">
              {isAr ? 'مخبر أبحاث الهيدروليك LARHYSS' : 'LARHYSS Hydraulics Lab'}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              {isAr ? 'المرتبة 1 — مسابقة الأمن الطاقوي' : '1st Place — Energy Security Competition'}
            </span>
          </div>

          {/* Concise Bio */}
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans">
            {isAr ? PERSONAL_DATA.bioAr : PERSONAL_DATA.bio}
          </p>

          {/* Primary Action Buttons: Download/View ATS CV + Explore Works */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1">
            <a
              href={PERSONAL_DATA.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-400 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 text-slate-950 font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all hover:scale-[1.03]"
            >
              <FileText className="w-4 h-4" />
              <span>{isAr ? 'تحميل ومعاينة السيرة الذاتية (CV A4)' : 'Download & View ATS CV (A4)'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#hydraulic-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs sm:text-sm uppercase tracking-wider border border-white/25 backdrop-blur-md transition-all hover:scale-[1.02]"
            >
              <span>{isAr ? 'استكشاف أعمالي الدراسية' : 'Explore My Studies & Works'}</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Corner HUD Elements (Left Socials, Right Scroll Down) */}
      <div className="max-w-7xl mx-auto w-full pt-6 flex items-end justify-between relative z-10 text-xs font-mono text-slate-300">
        {/* Bottom-Left Social Icons */}
        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-950/60 hover:bg-sky-500/30 border border-white/20 text-white hover:text-sky-300 backdrop-blur-md transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-950/60 hover:bg-sky-500/30 border border-white/20 text-white hover:text-sky-300 backdrop-blur-md transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_DATA.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-950/60 hover:bg-sky-500/30 border border-white/20 text-white hover:text-sky-300 backdrop-blur-md transition-all"
            title="Telegram"
          >
            <Send className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_DATA.email}`}
            className="p-2.5 rounded-full bg-slate-950/60 hover:bg-sky-500/30 border border-white/20 text-white hover:text-sky-300 backdrop-blur-md transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom-Right Scroll Indicator */}
        <a
          href="#hydraulic-studies"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-950/60 border border-white/20 backdrop-blur-md text-[11px] uppercase tracking-widest text-sky-300 hover:border-sky-400 transition-colors"
        >
          <span>{isAr ? 'انزل للأسفل' : 'SCROLL DOWN'}</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
