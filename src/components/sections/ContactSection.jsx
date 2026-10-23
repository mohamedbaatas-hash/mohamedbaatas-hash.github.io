import React, { useState } from 'react';
import { Mail, Send, ExternalLink, Check, FileText, Globe, Clock, Github, Linkedin, MessageSquare, ShieldCheck, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CollageBackground } from '../common/CollageBackground';

function BottomFlowSystem() {
  const wavePath = "M0 14C65 0 135 28 200 14S335 0 400 14S535 28 600 14S735 0 800 14S935 28 1000 14S1135 0 1200 14";

  return (
    <div className="w-full mt-16 pt-8 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <svg
        className="w-full h-12 overflow-visible"
        preserveAspectRatio="none"
        viewBox="0 0 1200 60"
        aria-hidden="true"
      >
        <path d={`${wavePath}V60H0Z`} fill="#f7b500" fillOpacity="0.12" />
        <path
          d={wavePath}
          fill="none"
          stroke="#001db5"
          strokeLinecap="round"
          strokeWidth="6"
          className="dark:stroke-[#0A1B54]"
        />
        <path
          d={wavePath}
          fill="none"
          stroke="#00e5ff"
          strokeDasharray="16 10"
          strokeLinecap="round"
          strokeWidth="2.5"
          className="dark:stroke-[#00e5ff] stroke-[#005bff]"
        />

        {/* Junction Nodes with Valve Crosshairs */}
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

        {/* Secondary Yellow Valve Nodes */}
        <g fill="#f7b500" stroke="#001db5" strokeWidth="1.5" className="dark:stroke-[#07133f]">
          <circle cx="200" cy="14" r="4" />
          <circle cx="600" cy="14" r="4" />
          <circle cx="1000" cy="14" r="4" />
        </g>
      </svg>
    </div>
  );
}

export function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    domain: 'Hydraulic Modeling & EPANET',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
  };

  const channels = [
    { key: 'phone', label: 'Direct Phone', value: '+213 655 74 85 13', link: 'tel:+213655748513', icon: <Phone className="w-4 h-4 text-[#F7B500]" /> },
    { key: 'email', label: 'Direct Email', value: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}`, icon: <Mail className="w-4 h-4 text-cyan-400" /> },
    { key: 'telegram', label: 'Telegram Direct', value: CONTACT_INFO.socials.telegram, link: CONTACT_INFO.socials.telegram, icon: <Send className="w-4 h-4 text-cyan-400" /> },
    { key: 'github', label: 'GitHub Repository', value: CONTACT_INFO.socials.github, link: CONTACT_INFO.socials.github, icon: <Github className="w-4 h-4 text-slate-300" /> },
    { key: 'linkedin', label: 'LinkedIn Network', value: CONTACT_INFO.socials.linkedin, link: CONTACT_INFO.socials.linkedin, icon: <Linkedin className="w-4 h-4 text-blue-400" /> }
  ];

  return (
    <BlueprintCadre
      id="contact"
      cadreTag="TELEMETRY_DISPATCH // TERMINAL_OUTPUT"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={true}
      conduitPosition="right"
      className="py-16 sm:py-24 bg-[#07133F] relative overflow-hidden"
    >
      <CollageBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-500/30">
              06 // DISPATCH &amp; CONTACT
            </span>
            <span className="text-xs font-mono text-slate-400">
              0101 / FLOW.DATA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-white">
            تواصل مباشر وبدء المشاريع
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            ناقش تفاصيل مذكرتك الأكاديمية، مشروعك البرمجي، أو استشر مهندس مياه وبرمجيات عن بُعد.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Channels & Telemetry Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-blue-500/30 bg-[#0A1B54]/90 shadow-xl space-y-4 backdrop-blur-sm relative">
              
              {/* Yellow Tape Badge */}
              <div className="inline-block mb-1">
                <span className="px-3 py-1 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs uppercase shadow-sm">
                  READY TO START? // ابدأ مشروعك
                </span>
              </div>

              <h3 className="text-base font-bold font-title text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Verified Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                متاح لكل الولايات وعن بُعد، مع استشارة أولية مجانية لمناقشة أهداف المشروع.
              </p>

              <div className="space-y-2.5 pt-2">
                {channels.map((ch) => (
                  <div key={ch.key} className="p-3 rounded-xl bg-[#07133F] border border-blue-500/20 flex items-center justify-between gap-3 shadow-sm hover:border-cyan-400/50 transition-colors">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-blue-950 border border-blue-500/30">
                        {ch.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-wider">{ch.label}</span>
                        <span className="block text-xs font-mono text-slate-200 truncate">{ch.value}</span>
                      </div>
                    </div>
                    <a
                      href={ch.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-blue-900/60 hover:bg-blue-800 text-cyan-300 border border-blue-500/30 shrink-0 transition-colors inline-flex items-center justify-center"
                      title={`Open ${ch.label}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>

              {/* Station Telemetry */}
              <div className="pt-4 border-t border-blue-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-cyan-400" /> {CONTACT_INFO.location}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-emerald-400" /> {CONTACT_INFO.timezone}</span>
              </div>

              {/* Resume Export CTA */}
              <div className="pt-2">
                <a
                  href="/Mohamed_Baatas_CV.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-condensed font-bold text-sm tracking-wide shadow-md transition-all"
                >
                  <FileText className="w-4 h-4 text-[#07133F]" />
                  <span>Download Resume (CV)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl border border-blue-500/30 bg-[#0A1B54]/90 shadow-xl relative backdrop-blur-sm">
              <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-cyan-400/50 select-none pointer-events-none" aria-hidden="true">+</span>
              
              <h3 className="text-base font-bold font-title text-white font-mono uppercase tracking-wider flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                Technical Inquiry Form
              </h3>
              <p className="text-xs text-slate-300 mb-6 font-sans">
                أرسل تفاصيل مشروعك أو مذكرتك. يتم الرد خلال أقل من 24 ساعة.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-900/60 border border-emerald-500 flex items-center justify-center text-emerald-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white font-mono text-sm">تم إرسال الطلب بنجاح</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    شكراً لك <span className="text-white font-semibold">{formState.name}</span>. سيتم التواصل معك عبر البريد <span className="text-cyan-300 font-mono">{formState.email}</span> في أقرب وقت.
                  </p>
                  <button
                    onClick={() => { setFormSubmitted(false); setFormState({ name: '', email: '', domain: 'Hydraulic Modeling & EPANET', message: '' }); }}
                    className="mt-2 px-4 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-xs font-mono text-cyan-300 border border-blue-500/30"
                  >
                    إرسال استفسار آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                        الاسم / الجهة *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="محمد / باحث / شركة"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#07133F] border border-blue-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs font-mono transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                        البريد الإلكتروني / الهاتف *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="example@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#07133F] border border-blue-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                      نوع الخدمة أو المشروع
                    </label>
                    <select
                      value={formState.domain}
                      onChange={(e) => setFormState({ ...formState, domain: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07133F] border border-blue-500/30 text-white focus:outline-none focus:border-cyan-400 text-xs font-mono transition-colors"
                    >
                      <option value="تنسيق مذكرات وبحوث أكاديمية">تنسيق مذكرات وبحوث أكاديمية (Word / LaTeX)</option>
                      <option value="عروض تقديمية للمناقشة Soutenance">عروض تقديمية للمناقشة Soutenance (PowerPoint)</option>
                      <option value="تطوير تطبيقات سطح المكتب والويب">تطوير تطبيقات سطح المكتب والويب (Desktop ERP)</option>
                      <option value="نمذجة هيدروليكية EPANET">نمذجة هيدروليكية وحسابات شبكات (EPANET)</option>
                      <option value="أنظمة أتمتة وإنترنت الأشياء IoT">أنظمة أتمتة وإنترنت الأشياء (IoT &amp; Telemetry)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                      تفاصيل المشروع *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="صف أهداف المشروع، الموعد النهائي، أو أي متطلبات خاصة..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#07133F] border border-blue-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-xs font-sans transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#001db5] hover:bg-[#0027ea] text-white font-bold font-condensed text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال الطلب الآن</span>
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
