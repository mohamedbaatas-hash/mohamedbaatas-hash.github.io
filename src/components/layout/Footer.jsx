import React from 'react';
import { Terminal, ShieldCheck, Activity, Github, Linkedin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-surface-sunken border-t border-border-slate/80 text-slate-400 font-sans text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-border-slate/60">
          {/* Column 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded bg-cobalt-500" />
              <span className="font-bold text-white tracking-tight text-base font-sans">
                {t('HEADER.name', 'Mohamed Baatas')}
              </span>
              <span className="font-mono text-xs text-cobalt-400 bg-cobalt-950/60 px-2 py-0.5 rounded border border-cobalt-500/30">
                {t('HEADER.role', 'Hydroinformatics')}
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              {t('FOOTER.desc', 'Specialized engineering portfolio bridging municipal water hydraulics, cyber-physical SCADA telemetry, EPANET numerical simulations, and modern web software.')}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>ISA-5.1 Instrumentation • Todini-Pilati GGA Solver</span>
            </div>
          </div>

          {/* Column 2: System Architecture */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              {t('FOOTER.specs', 'Simulation Specs')}
            </h4>
            <ul className="space-y-1.5 font-mono text-xs text-slate-400">
              <li>• SCADA: 6-Stage Process Train</li>
              <li>• Physics: Hazen-Williams Head Loss</li>
              <li>• EPANET: 6-Node Looped Topology</li>
              <li>• Time-Step: 1.0s Continuous Integration</li>
            </ul>
          </div>

          {/* Column 3: Contact & Links */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
              {t('FOOTER.channels', 'Channels')}
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href={CONTACT_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <Github className="w-3.5 h-3.5 text-slate-400" /> {t('FOOTER.github', 'GitHub Profile')}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400" /> {t('FOOTER.linkedin', 'LinkedIn Network')}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.socials.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <Send className="w-3.5 h-3.5 text-slate-400" /> {t('FOOTER.telegram', 'Telegram Channel')}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-cobalt-400 hover:underline font-mono">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © {currentYear} {t('HEADER.name', 'Mohamed Baatas')}. {t('FOOTER.rights', 'All engineering specifications and code genuine.')}
          </div>
          <div className="flex items-center gap-4">
            <span>{t('FOOTER.location', 'Lat/Long: Algiers (36.75°N, 3.05°E)')}</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">{t('FOOTER.nominal', 'ALL SYSTEMS NOMINAL')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
