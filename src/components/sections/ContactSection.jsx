import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  FileText,
  ArrowUpRight,
  Copy,
  Check,
  ArrowUp
} from 'lucide-react';
import { PERSONAL_DATA } from '../../data/portfolioData';

export function ContactSection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-20 sm:py-28 px-4 sm:px-8 flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10 space-y-10">
        
        {/* Section Header (Like Screen 8 "CONTACT ME" in Figma) */}
        <div className="text-center space-y-3">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40">
            04 // {isAr ? 'التواصل المباشر والسيرة الذاتية' : 'DIRECT CONTACT & OFFICIAL CV'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-title text-white tracking-tight drop-shadow-[0_0_25px_rgba(56,189,248,0.45)]">
            {isAr ? 'تواصل معي مباشرة' : 'CONTACT ME'}
          </h2>
        </div>

        {/* Translucent Cosmic Glass Container (Matching Figma Frame 8) */}
        <div className="rounded-3xl bg-slate-950/70 backdrop-blur-2xl border border-sky-400/40 shadow-[0_0_60px_rgba(0,229,255,0.2)] p-6 sm:p-10 space-y-6 text-white">
          
          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
            {/* Academic Email */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] text-sky-300 uppercase block font-bold">
                  {isAr ? 'البريد الجامعي الرسمي' : 'Academic Institutional Email'}
                </span>
                <a
                  href={`mailto:${PERSONAL_DATA.academicEmail}`}
                  className="text-xs sm:text-sm font-bold text-white hover:text-sky-300 truncate block mt-1"
                >
                  {PERSONAL_DATA.academicEmail}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_DATA.academicEmail, 'acad')}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white shrink-0"
                title="Copy"
              >
                {copiedKey === 'acad' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Personal Email */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] text-sky-300 uppercase block font-bold">
                  {isAr ? 'البريد الشخصي' : 'Personal Email'}
                </span>
                <a
                  href={`mailto:${PERSONAL_DATA.email}`}
                  className="text-xs sm:text-sm font-bold text-white hover:text-sky-300 truncate block mt-1"
                >
                  {PERSONAL_DATA.email}
                </a>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_DATA.email, 'pers')}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white shrink-0"
                title="Copy"
              >
                {copiedKey === 'pers' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Numbers */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] text-emerald-300 uppercase block font-bold">
                  {isAr ? 'الهاتف والواتساب' : 'Phone & WhatsApp'}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white block mt-1 tabular-nums">
                  {PERSONAL_DATA.phones.join(' / ')}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(PERSONAL_DATA.phones[0], 'phone')}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white shrink-0"
                title="Copy"
              >
                {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/15 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-[10px] text-amber-300 uppercase block font-bold">
                  {isAr ? 'الموقع الجغرافي' : 'Location'}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white block mt-1">
                  {isAr ? PERSONAL_DATA.locationAr : PERSONAL_DATA.location}
                </span>
              </div>
            </div>
          </div>

          {/* Prominent Full-Width ATS CV Download / View Button */}
          <div className="pt-2">
            <a
              href={PERSONAL_DATA.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 hover:from-indigo-400 hover:to-cyan-300 text-slate-950 font-mono font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-[0_0_35px_rgba(56,189,248,0.4)] transition-all hover:scale-[1.01]"
            >
              <FileText className="w-4 h-4" />
              <span>
                {isAr
                  ? 'فتح وتحميل السيرة الذاتية الرسمية المعتمدة (ATS CV — صفحة A4 واحدة)'
                  : 'Open & Download Verified 1-Page ATS CV (A4 Format)'}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Bottom Social Icons & Back to Top */}
          <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-sky-500/30 border border-white/15 flex items-center gap-2 text-xs font-mono font-bold transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-sky-500/30 border border-white/15 flex items-center gap-2 text-xs font-mono font-bold transition-colors"
              >
                <Github className="w-4 h-4 text-sky-400" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-sky-500/30 border border-white/15 flex items-center gap-2 text-xs font-mono font-bold transition-colors"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Telegram</span>
              </a>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono font-bold text-sky-300 transition-colors"
            >
              <span>{isAr ? 'العودة للأعلى' : 'Back to Orbit'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;
