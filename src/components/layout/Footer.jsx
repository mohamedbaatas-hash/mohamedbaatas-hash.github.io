import React from 'react';
import { Github, Linkedin, Send, Phone, Mail, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../../data/portfolioData';
import { FluiDevLogo } from '../common/FluiDevLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-sans text-xs sm:text-sm transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Identity & FluiDev Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FluiDevLogo size={28} />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-title font-bold text-fluid-ink-dark dark:text-white tracking-tight text-base">
                  {t('HEADER.name', 'Mohamed Baatas')}
                </span>
                <span className="hidden sm:inline text-slate-400 dark:text-slate-600">·</span>
                <span className="font-mono text-[11px] text-fluid-blue dark:text-fluid-cyan bg-blue-100 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-500/30">
                  {t('HEADER.role_subtitle', 'Hydroinformatics & Software Solutions')}
                </span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t(
                'FOOTER.desc',
                'Specialized engineering portfolio bridging municipal water hydraulics, cyber-physical SCADA telemetry, EPANET numerical simulations, and academic digital excellence.'
              )}
            </p>
          </div>

          {/* Navigation Links (including Academic Hub) */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
              {t('FOOTER.navigation', 'Quick Navigation')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#selected-works" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.works', 'Selected Works')}
                </a>
              </li>
              <li>
                <a href="#interactive-lab" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.lab', 'Interactive Engineering Lab')}
                </a>
              </li>
              <li>
                <a href="#engineering-pillars" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.pillars', 'Core Capabilities')}
                </a>
              </li>
              <li>
                <a href="#academic-hub" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.academic', 'Academic Hub')}
                </a>
              </li>
              <li>
                <a href="#trajectory" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.trajectory', 'Experience & Education')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.contact', 'Direct Contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Channels */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
              {t('FOOTER.channels', 'Channels')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={CONTACT_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  {t('FOOTER.github', 'GitHub')}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  {t('FOOTER.linkedin', 'LinkedIn')}
                </a>
              </li>
              {CONTACT_INFO.socials.telegram && (
                <li>
                  <a
                    href={CONTACT_INFO.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    Telegram (@Fluidev)
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              {CONTACT_INFO.phone1 && (
                <li>
                  <a
                    href={`tel:${CONTACT_INFO.phone1}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    +213 655 74 85 13
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Energy Yellow Node Accent */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F7B500] inline-block animate-pulse" />
            <span>
              © {currentYear} {t('HEADER.name', 'Mohamed Baatas')} (FluiDev). {t('FOOTER.rights', 'Engineered with Precision & Minimalist Clarity.')}
            </span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors text-xs"
          >
            <span>{t('FOOTER.back_to_top', 'Back to top')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
