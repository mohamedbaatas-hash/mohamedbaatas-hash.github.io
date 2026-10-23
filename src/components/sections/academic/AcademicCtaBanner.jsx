import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Send, Mail, Zap, Shield, RefreshCw, ArrowRight } from 'lucide-react';

export function AcademicCtaBanner() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  // Customized prefilled message based on active language
  const prefilledMessage = encodeURIComponent(
    isRTL
      ? 'مرحباً مهندس محمد، أود الاستفسار عن خدمات المرافقة وتنسيق المذكرات وعروض المناقشة (Academic Hub).'
      : i18n.language === 'fr'
      ? 'Bonjour Ing. Mohamed Baatas, je souhaite me renseigner sur vos services de mise en page de mémoire et présentation de soutenance.'
      : 'Hello Eng. Mohamed Baatas, I would like to inquire about your Academic Thesis Makeover & Defense Presentation services.'
  );

  const whatsappUrl = `https://wa.me/213655748513?text=${prefilledMessage}`;
  const telegramUrl = 'https://t.me/mohamed_baatas';

  const guarantees = [
    {
      icon: <Zap className="w-4 h-4 text-fluid-yellow shrink-0" />,
      text: t('ACADEMIC_HUB.cta.guarantees.0', 'Rapid turnaround respecting tight defense deadlines')
    },
    {
      icon: <Shield className="w-4 h-4 text-cyan-400 shrink-0" />,
      text: t('ACADEMIC_HUB.cta.guarantees.1', 'Strict confidentiality & 100% scientific originality preservation')
    },
    {
      icon: <RefreshCw className="w-4 h-4 text-emerald-400 shrink-0" />,
      text: t('ACADEMIC_HUB.cta.guarantees.2', 'Continuous adjustments and revisions up to defense day')
    }
  ];

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      // Pre-select service in inquiry form if dropdown exists
      const domainSelect = document.querySelector('select[name="domain"]');
      if (domainSelect) {
        domainSelect.value = 'academic';
      }
    }
  };

  return (
    <div className="w-full relative overflow-hidden rounded-3xl bg-slate-900/90 dark:bg-[#07133F] border border-blue-900/50 p-6 sm:p-10 shadow-2xl">
      {/* Blueprint Conduit Glow Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-fluid-yellow" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Column: Heading & Subtitle */}
        <div className="max-w-2xl">
          <span className="px-3 py-1 rounded-full text-xs font-condensed font-bold uppercase tracking-widest bg-fluid-yellow/20 text-fluid-yellow border border-fluid-yellow/30 inline-block mb-3">
            {t('ACADEMIC_HUB.cta.ready_kicker', 'READY FOR YOUR DEFENSE?')}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-title text-white tracking-tight leading-tight">
            {t('ACADEMIC_HUB.cta.title', 'Book Your Academic Thesis & Presentation Makeover')}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            {t('ACADEMIC_HUB.cta.subtitle', 'Send your field of study, draft document, and target defense deadline for an immediate technical evaluation and timeline quote.')}
          </p>
        </div>

        {/* Right Column: Multi-Channel CTAs */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
          {/* WhatsApp Direct Primary Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-fluid-yellow text-slate-950 hover:bg-fluid-yellow-hover transition-all duration-200 shadow-lg shadow-fluid-yellow/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>{t('ACADEMIC_HUB.cta.btn_whatsapp', 'Inquire via WhatsApp')}</span>
            <span className="text-xs font-mono font-normal opacity-75">(+213 655 74 85 13)</span>
          </a>

          {/* Secondary Action Row: Telegram & Direct Order Form */}
          <div className="flex items-center gap-3">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm bg-blue-600/20 text-cyan-300 border border-cyan-500/30 hover:bg-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>{t('ACADEMIC_HUB.cta.btn_telegram', 'Telegram')}</span>
            </a>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4 text-slate-300" />
              <span>{t('ACADEMIC_HUB.cta.btn_inquire', 'Order Support')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Turnaround & Guarantee Strip */}
      <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4">
        {guarantees.map((g, idx) => (
          <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
            <div className="p-1 rounded-full bg-slate-800/80 border border-slate-700">
              {g.icon}
            </div>
            <span>{g.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademicCtaBanner;
