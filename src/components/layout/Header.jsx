import React, { useState } from 'react';
import { Menu, X, FileText, Globe, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FluiDevLogo } from '../common/FluiDevLogo';

export function Header({ activeScene = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const isAr = i18n.language === 'ar';

  const navLinks = [
    { index: 0, label: isAr ? 'الرئيسية' : 'Home', href: '#hero' },
    { index: 1, label: isAr ? 'الدراسات الهيدروليكية' : 'Hydraulic Studies', href: '#hydraulic-studies' },
    { index: 2, label: isAr ? 'برمجيات FluiDev' : 'Software & Tools', href: '#fluidev-software' },
    { index: 3, label: isAr ? 'المسار والمهارات' : 'Trajectory & Skills', href: '#trajectory' },
    { index: 4, label: isAr ? 'التواصل والـ CV' : 'Contact & CV', href: '#contact' },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(isAr ? 'en' : 'ar');
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 py-3 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Left: Brand Pill */}
        <a
          href="#hero"
          className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/15 hover:border-sky-400/50 transition-all"
        >
          <FluiDevLogo size={26} />
          <div className="flex items-center gap-2">
            <span className="font-title font-bold text-white text-xs sm:text-sm">
              {isAr ? 'محمد بعتاس' : 'Mohammed Baatas'}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-400/20 text-sky-300 border border-sky-400/30 font-bold">
              FluiDev
            </span>
          </div>
        </a>

        {/* Center: Floating Scene Navigation Dock */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/15">
          {navLinks.map((link) => {
            const isActive = activeScene === link.index;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  isActive
                    ? 'bg-sky-400 text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Language & ATS CV Button */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/15 hover:border-sky-400/50 text-xs font-mono font-bold text-white transition-all"
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>{isAr ? 'EN' : 'عربي'}</span>
          </button>

          <a
            href="/Mohammed_Baatas_CV_ATS.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-mono font-extrabold text-xs shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isAr ? 'السيرة الذاتية CV' : 'ATS CV'}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-xl bg-slate-950/70 backdrop-blur-xl border border-white/20 text-xs font-mono font-bold text-white"
          >
            {isAr ? 'EN' : 'عربي'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-950/70 backdrop-blur-xl border border-white/20 text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 p-4 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/20 space-y-2 pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-slate-200 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Mohammed_Baatas_CV_ATS.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-400 text-slate-950 font-mono font-extrabold text-xs mt-2"
          >
            <FileText className="w-4 h-4" />
            <span>{isAr ? 'فتح السيرة الذاتية (CV A4)' : 'Open Verified ATS CV (A4)'}</span>
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
