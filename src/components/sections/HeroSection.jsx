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
  GraduationCap
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PERSONAL_DATA } from '../../data/portfolioData';

const PHOTO_STORAGE_KEY = 'mohammed_baatas_portrait_v1';

export function HeroSection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [photoDataUrl, setPhotoDataUrl] = useState(null);
  const [showBioBox, setShowBioBox] = useState(true);
  const fileInputRef = useRef(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(PHOTO_STORAGE_KEY);
      if (saved) setPhotoDataUrl(saved);
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
      try {
        localStorage.setItem(PHOTO_STORAGE_KEY, result);
      } catch {
        // ignore quota errors
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] w-full flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center relative z-10 space-y-6">
        
        {/* 1. Top Sci-Fi Glowing Title Header (Just like Figma Frame 1) */}
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

        {/* 2. Personal Portrait Frame (Orbital Sci-Fi Ring above the Rotating Planet) */}
        <div className="relative group my-2">
          {/* Outer Rotating Dashed Blueprint Ring */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-tr from-sky-400 via-indigo-500 to-emerald-400 shadow-[0_0_45px_rgba(56,189,248,0.5)] relative">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 border-2 border-white/40 flex items-center justify-center relative">
              {photoDataUrl ? (
                <img
                  src={photoDataUrl}
                  alt="Mohammed Baatas"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-b from-[#0d2556] to-[#06102b] flex flex-col items-center justify-center p-3 text-center">
                  <svg viewBox="0 0 80 80" className="w-16 h-16 sm:w-20 sm:h-20 text-sky-300">
                    <circle cx="40" cy="26" r="14" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" />
                    <path d="M16 68 C16 48 64 48 64 68" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="font-mono text-[9px] text-sky-300/90 uppercase tracking-wider mt-0.5">
                    {isAr ? 'اضغط لإضافة صورتك' : 'Click to set photo'}
                  </span>
                </div>
              )}

              {/* Hover Overlay to Upload Personal Photo */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-slate-950/65 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-white font-mono text-[10px] font-bold"
                title={isAr ? 'رفع صورتك الشخصية' : 'Upload Personal Photo'}
              >
                <Camera className="w-5 h-5 text-sky-400" />
                <span>{isAr ? 'تغيير الصورة' : 'Set Photo'}</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Floating Status Pill on Avatar */}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-mono text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
            M2 Hydraulics • Biskra
          </span>
        </div>

        {/* 3. Translucent Cosmic Glass Bio Card (Like Frame 5 in the Figma Screenshot!) */}
        <div className="max-w-3xl w-full rounded-3xl bg-slate-950/65 backdrop-blur-2xl border border-sky-400/35 shadow-[0_0_50px_rgba(6,24,68,0.8)] p-6 sm:p-8 text-center space-y-5">
          {/* Quick Identity Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 border border-white/15">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              {isAr ? 'ماستر 2: تسيير وهندسة خدمات المياه والتطهير' : 'M.Sc. (M2) Water & Sanitation Engineering'}
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

      {/* Bottom Corner HUD Elements (Exactly like the Figma Space Template: Left Socials, Right Scroll Down) */}
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
