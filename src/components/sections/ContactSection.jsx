import React, { useState } from 'react';
import {
  Mail,
  Send,
  ExternalLink,
  Check,
  FileText,
  Globe,
  Clock,
  Github,
  Linkedin,
  MessageSquare,
  ShieldCheck,
  Phone,
  Copy
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../../data/portfolioData';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CollageBackground } from '../common/CollageBackground';

const CONTACT_COPY = {
  ar: {
    title: 'تواصل مباشر وبدء المشاريع',
    subtitle: 'ناقش تفاصيل مذكرتك الأكاديمية، مشروعك البرمجي، أو استشر مهندس مياه وبرمجيات عن بُعد.',
    tape: 'READY TO START? // ابدأ مشروعك',
    channelsHeader: 'قنوات التواصل المعتمدة',
    channelsDesc: 'متاح لكل الولايات وعن بُعد، مع استشارة أولية مجانية لمناقشة أهداف المشروع.',
    cvBtn: 'تحميل السيرة الذاتية (CV)',
    formTitle: 'نموذج طلب خدمة أو استشارة تقنية',
    formDesc: 'أرسل تفاصيل مشروعك أو مذكرتك، ويمكنك إرسالها فوراً عبر واتساب أو البريد الإلكتروني.',
    lblName: 'الاسم / الجهة *',
    phName: 'محمد / باحث / شركة',
    lblEmail: 'البريد الإلكتروني أو رقم الهاتف *',
    phEmail: 'example@gmail.com / +213...',
    lblDomain: 'نوع الخدمة أو المشروع',
    lblMsg: 'تفاصيل المشروع *',
    phMsg: 'صف أهداف المشروع، الموعد النهائي، أو أي متطلبات خاصة...',
    submitBtn: 'تجهيز وإرسال الطلب الآن',
    sentTitle: 'تم تجهيز طلبك للإرسال الفوري!',
    sentSub: 'اختر وسيلة الإرسال المفضلة لديك أدناه ليصلني طلبك مباشرة:',
    whatsappBtn: 'إرسال فوري عبر واتساب',
    emailBtn: 'إرسال عبر البريد الإلكتروني',
    resetBtn: 'إرسال استفسار آخر',
    options: [
      'تنسيق مذكرات وبحوث أكاديمية (Word / LaTeX)',
      'عروض تقديمية للمناقشة Soutenance (PowerPoint)',
      'تطوير تطبيقات سطح المكتب والويب (Desktop ERP)',
      'نمذجة هيدروليكية وحسابات شبكات (EPANET)',
      'أنظمة أتمتة وإنترنت الأشياء (IoT & Telemetry)'
    ]
  },
  fr: {
    title: 'Contact Direct & Lancement de Projet',
    subtitle: 'Discutez de votre mémoire académique, de votre logiciel sur mesure ou réservez une consultation en hydroinformatique.',
    tape: 'READY TO START? // DÉMARRER',
    channelsHeader: 'Canaux de Contact Vérifiés',
    channelsDesc: 'Disponible en Algérie et à distance (Remote), avec consultation initiale gratuite.',
    cvBtn: 'Télécharger le CV Complet',
    formTitle: 'Formulaire de Demande Technique',
    formDesc: 'Décrivez votre besoin et expédiez-le directement via WhatsApp ou Email en un clic.',
    lblName: 'Nom / Organisation *',
    phName: 'Nom complet ou Entreprise',
    lblEmail: 'Email ou Téléphone *',
    phEmail: 'nom@domaine.com / +213...',
    lblDomain: 'Domaine du Projet',
    lblMsg: 'Détails & Échéance du Projet *',
    phMsg: 'Précisez vos objectifs, délais de soutenance ou spécifications techniques...',
    submitBtn: 'Préparer & Envoyer la Demande',
    sentTitle: 'Brief Technique Prêt à l’Envoi !',
    sentSub: 'Choisissez votre canal préféré ci-dessous pour me transmettre votre message instantanément :',
    whatsappBtn: 'Envoyer via WhatsApp Direct',
    emailBtn: 'Envoyer via Client Email',
    resetBtn: 'Nouvelle Demande',
    options: [
      'Mise en Page de Mémoire & Thèse (Word / LaTeX)',
      'Présentation de Soutenance (PowerPoint / Infographies)',
      'Développement Logiciel Desktop & ERP (Offline-First)',
      'Modélisation Hydraulique EPANET 2.2 & SIG',
      'Automatisation SCADA & Télémétrie IoT'
    ]
  },
  en: {
    title: 'Direct Contact & Project Dispatch',
    subtitle: 'Discuss your engineering software, hydraulic network model, or academic thesis makeover directly.',
    tape: 'READY TO START? // DISPATCH',
    channelsHeader: 'Verified Contact Channels',
    channelsDesc: 'Available across Algeria and remotely worldwide, with a complimentary initial technical consultation.',
    cvBtn: 'Download Resume (CV)',
    formTitle: 'Technical Inquiry & Project Brief',
    formDesc: 'Fill out your project specifications below for immediate dispatch via WhatsApp or Email.',
    lblName: 'Full Name / Organization *',
    phName: 'Engineer / Researcher / Company',
    lblEmail: 'Email Address or Phone *',
    phEmail: 'name@company.com / +213...',
    lblDomain: 'Service or Engineering Domain',
    lblMsg: 'Project Specifications & Timeline *',
    phMsg: 'Describe your project scope, target defense deadline, or technical requirements...',
    submitBtn: 'Prepare & Dispatch Inquiry',
    sentTitle: 'Project Brief Ready for Dispatch!',
    sentSub: 'Select your preferred channel below to send your formatted inquiry directly to Mohamed Baatas:',
    whatsappBtn: 'Send Instantly via WhatsApp',
    emailBtn: 'Send via Email Client',
    resetBtn: 'Create Another Inquiry',
    options: [
      'Academic Thesis Formatting & Proofreading (Word / LaTeX)',
      'Soutenance Defense Presentation Deck (PowerPoint)',
      'Custom Desktop ERP & Offline-First Software',
      'Hydraulic Network Modeling (EPANET 2.2 & GIS)',
      'SCADA Digital Twin & IoT Telemetry Systems'
    ]
  }
};

function BottomFlowSystem() {
  const wavePath = 'M0 14C65 0 135 28 200 14S335 0 400 14S535 28 600 14S735 0 800 14S935 28 1000 14S1135 0 1200 14';

  return (
    <div className="w-full mt-16 pt-8 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <svg className="w-full h-12 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 60" aria-hidden="true">
        <path d={`${wavePath}V60H0Z`} fill="#f7b500" fillOpacity="0.12" />
        <path d={wavePath} fill="none" stroke="#001db5" strokeLinecap="round" strokeWidth="6" className="dark:stroke-[#0A1B54]" />
        <path d={wavePath} fill="none" stroke="#00e5ff" strokeDasharray="16 10" strokeLinecap="round" strokeWidth="2.5" className="dark:stroke-[#00e5ff] stroke-[#005bff]" />
        <g transform="translate(400, 14)">
          <circle fill="#f7b500" r="11" stroke="#001db5" strokeWidth="3" className="dark:stroke-[#07133f]" />
          <circle fill="#00e5ff" r="5" stroke="white" strokeWidth="1.5" />
          <path d="M-15 0H15M0-15V15" stroke="#07133f" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(800, 14)">
          <circle fill="#f7b500" r="11" stroke="#001db5" strokeWidth="3" className="dark:stroke-[#07133f]" />
          <circle fill="#00e5ff" r="5" stroke="white" strokeWidth="1.5" />
          <path d="M-15 0H15M0-15V15" stroke="#07133f" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

export function ContactSection() {
  const { i18n } = useTranslation();
  const langKey = i18n.language?.startsWith('ar')
    ? 'ar'
    : i18n.language?.startsWith('fr')
    ? 'fr'
    : 'en';
  const copy = CONTACT_COPY[langKey];

  const [copiedKey, setCopiedKey] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    domain: copy.options[0],
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (key, val) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(val);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
  };

  const formattedBrief = `Hello Eng. Mohamed Baatas (FluiDev),\n\n• Name: ${formState.name}\n• Contact: ${formState.email}\n• Domain: ${formState.domain}\n• Project Brief:\n${formState.message}`;
  const whatsappDispatchUrl = `https://wa.me/213655748513?text=${encodeURIComponent(formattedBrief)}`;
  const mailtoDispatchUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    `[FluiDev Inquiry] ${formState.domain} — ${formState.name}`
  )}&body=${encodeURIComponent(formattedBrief)}`;

  const channels = [
    { key: 'phone', label: 'Direct Phone / WhatsApp', value: '+213 655 74 85 13', link: 'tel:+213655748513', icon: <Phone className="w-4 h-4 text-[#F7B500]" /> },
    { key: 'email', label: 'Direct Email', value: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}`, icon: <Mail className="w-4 h-4 text-cyan-400" /> },
    { key: 'telegram', label: 'Telegram Direct', value: '@Fluidev', link: CONTACT_INFO.socials.telegram, icon: <Send className="w-4 h-4 text-cyan-400" /> },
    { key: 'github', label: 'GitHub Repository', value: 'mohamedbaatas-hash', link: CONTACT_INFO.socials.github, icon: <Github className="w-4 h-4 text-slate-300" /> },
    { key: 'linkedin', label: 'LinkedIn Network', value: 'in/mohamedbaatas', link: CONTACT_INFO.socials.linkedin, icon: <Linkedin className="w-4 h-4 text-blue-400" /> }
  ];

  return (
    <BlueprintCadre
      id="contact"
      cadreTag="TELEMETRY_DISPATCH // TERMINAL_OUTPUT"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={true}
      conduitPosition="right"
      className="py-16 sm:py-24 bg-slate-100/90 dark:bg-[#07133F] relative overflow-hidden transition-colors duration-300"
    >
      <CollageBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-fluid-blue dark:text-cyan-400 bg-blue-100 dark:bg-blue-950/80 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/30">
              06 // DISPATCH &amp; CONTACT
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              0101 / FLOW.DATA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white">
            {copy.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-[#0A1B54]/90 shadow-xl space-y-4 backdrop-blur-sm relative">
              <div className="inline-block mb-1">
                <span className="px-3 py-1 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs uppercase shadow-sm">
                  {copy.tape}
                </span>
              </div>

              <h3 className="text-base font-bold font-title text-slate-900 dark:text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                {copy.channelsHeader}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
                {copy.channelsDesc}
              </p>

              <div className="space-y-2.5 pt-2">
                {channels.map((ch) => (
                  <div
                    key={ch.key}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/20 flex items-center justify-between gap-3 shadow-sm hover:border-fluid-blue dark:hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-slate-900 dark:bg-blue-950 border border-blue-500/30">
                        {ch.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {ch.label}
                        </span>
                        <span className="block text-xs font-mono text-slate-900 dark:text-slate-200 truncate" dir="ltr">
                          {ch.value}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopy(ch.key, ch.value)}
                        className="p-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                        title="Copy"
                      >
                        {copiedKey === ch.key ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <a
                        href={ch.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-fluid-blue/10 dark:bg-blue-900/60 hover:bg-fluid-blue/20 dark:hover:bg-blue-800 text-fluid-blue dark:text-cyan-300 border border-fluid-blue/20 dark:border-blue-500/30 transition-colors inline-flex items-center justify-center"
                        title={`Open ${ch.label}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-blue-500/20 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400" /> {CONTACT_INFO.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> {CONTACT_INFO.timezone}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href="/Mohamed_Baatas_CV.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-condensed font-bold text-sm tracking-wide shadow-md transition-all"
                >
                  <FileText className="w-4 h-4 text-[#07133F]" />
                  <span>{copy.cvBtn}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-[#0A1B54]/90 shadow-xl relative backdrop-blur-sm">
              <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-cyan-400/50 select-none pointer-events-none" aria-hidden="true">
                +
              </span>

              <h3 className="text-base font-bold font-title text-slate-900 dark:text-white font-mono uppercase tracking-wider flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-fluid-blue dark:text-cyan-400" />
                {copy.formTitle}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 font-sans">
                {copy.formDesc}
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-center space-y-4">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white font-mono text-sm">
                    {copy.sentTitle}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    {copy.sentSub}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsappDispatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-bold text-xs shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{copy.whatsappBtn}</span>
                    </a>
                    <a
                      href={mailtoDispatchUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-fluid-blue hover:bg-fluid-blue-bright text-white font-bold text-xs shadow-md transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{copy.emailBtn}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({ name: '', email: '', domain: copy.options[0], message: '' });
                    }}
                    className="mt-2 inline-block px-4 py-1.5 rounded-lg bg-slate-200 dark:bg-blue-900 hover:bg-slate-300 dark:hover:bg-blue-800 text-xs font-mono text-slate-800 dark:text-cyan-300"
                  >
                    {copy.resetBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                        {copy.lblName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={copy.phName}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07133F] border border-slate-300 dark:border-blue-500/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-fluid-blue dark:focus:border-cyan-400 text-xs font-mono transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                        {copy.lblEmail}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={copy.phEmail}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07133F] border border-slate-300 dark:border-blue-500/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-fluid-blue dark:focus:border-cyan-400 text-xs font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                      {copy.lblDomain}
                    </label>
                    <select
                      name="domain"
                      value={formState.domain}
                      onChange={(e) => setFormState({ ...formState, domain: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07133F] border border-slate-300 dark:border-blue-500/30 text-slate-900 dark:text-white focus:outline-none focus:border-fluid-blue dark:focus:border-cyan-400 text-xs font-mono transition-colors"
                    >
                      {copy.options.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                      {copy.lblMsg}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={copy.phMsg}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07133F] border border-slate-300 dark:border-blue-500/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-fluid-blue dark:focus:border-cyan-400 text-xs font-sans transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#001db5] hover:bg-[#0027ea] text-white font-bold font-condensed text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{copy.submitBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <BottomFlowSystem />
      </div>
    </BlueprintCadre>
  );
}

export default ContactSection;
