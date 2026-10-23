import React, { useState } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FluiDevLogo } from '../common/FluiDevLogo';
import { ThemeToggle } from '../common/ThemeToggle';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t('NAV.works', 'Works'), href: '#selected-works' },
    { label: t('NAV.lab', 'Engineering Lab'), href: '#interactive-lab' },
    { label: t('NAV.pillars', 'Capabilities'), href: '#engineering-pillars' },
    { label: t('NAV.academic', 'Academic Hub'), href: '#academic-hub' },
    { label: t('NAV.trajectory', 'Trajectory'), href: '#trajectory' },
    { label: t('NAV.contact', 'Contact'), href: '#contact' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMobileMenuOpen(false);
  };

  const LanguageDropdown = () => (
    <div className="relative group/lang flex items-center">
      <button
        className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-fluid-blue dark:hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
        aria-label="Select language"
      >
        <Globe className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400" />
        <span className="uppercase">{i18n.language || 'en'}</span>
      </button>
      <div className="absolute right-0 top-full mt-2 w-32 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-200 py-1.5 z-50">
        <button
          onClick={() => changeLanguage('en')}
          className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
            i18n.language === 'en' ? 'text-fluid-blue dark:text-cyan-400 font-bold' : 'text-slate-700 dark:text-slate-300'
          }`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('ar')}
          className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
            i18n.language === 'ar' ? 'text-fluid-blue dark:text-cyan-400 font-bold' : 'text-slate-700 dark:text-slate-300'
          }`}
        >
          العربية
        </button>
        <button
          onClick={() => changeLanguage('fr')}
          className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
            i18n.language === 'fr' ? 'text-fluid-blue dark:text-cyan-400 font-bold' : 'text-slate-700 dark:text-slate-300'
          }`}
        >
          Français
        </button>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-[#07133F]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a href="#" className="flex items-center gap-3 group">
          <FluiDevLogo size={36} className="transition-transform duration-200 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-title font-bold text-fluid-ink-dark dark:text-white tracking-tight text-sm sm:text-base leading-none">
              {t('HEADER.name', 'Mohamed Baatas')}
            </span>
            <span className="text-xs font-mono tracking-wider text-slate-500 dark:text-fluid-cyan uppercase mt-1">
              {t('HEADER.role_subtitle', 'Hydroinformatics & Software Solutions')}
            </span>
          </div>
        </a>

        {/* Desktop Navigation & Actions */}
        <div className="hidden md:flex items-center gap-5">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-fluid-blue dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="w-px h-5 bg-slate-200 dark:bg-slate-800" />
          
          <LanguageDropdown />

          <ThemeToggle />

          <a
            href="/Mohamed_Baatas_CV.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-semibold font-condensed tracking-wide px-4 py-2 rounded-md shadow-sm transition-all duration-150"
          >
            <Download className="w-3.5 h-3.5 text-[#07133F]" />
            <span>{t('HEADER.download_cv', 'Resume / CV')}</span>
          </a>
        </div>

        {/* Mobile Hamburger & Quick Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle showLabel={false} />
          <LanguageDropdown />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#07133F]/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-fluid-blue dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Theme Mode
              </span>
              <ThemeToggle />
            </div>

            <a
              href="/Mohamed_Baatas_CV.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-semibold font-condensed tracking-wide px-4 py-2.5 rounded-md shadow-sm transition-all duration-150"
            >
              <Download className="w-3.5 h-3.5 text-[#07133F]" />
              <span>{t('HEADER.download_cv', 'Resume / CV')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
