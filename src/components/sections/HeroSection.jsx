import React from 'react';
import {
  Download,
  Mail,
  Phone,
  Github,
  Code2,
  Activity,
  GraduationCap,
  Droplet,
  Play
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CollageBackground } from '../common/CollageBackground';

const DOSSIER_I18N = {
  ar: {
    tape: 'ENGINEERING IDENTITY // هوية المهندس',
    kicker: 'FLUIDEV / IDENTITY & CREDENTIALS',
    name: 'محمد بعتاس',
    roleHighlight: 'مهندس مياه وبرمجيات',
    bio: 'مهندس دولة خريج المدرسة الوطنية العليا للري (ENSH)، وباحث ماستر في تسيير منظومات مياه الشرب والتطهير، ومطوّر نظم برمجية متقدم. أكرّس خبرتي لدمج الفهم الفيزيائي الدقيق لشبكات المياه ومحطات المعالجة، مع هندسة البرمجيات الحديثة، النظم المستقلة (Offline-First)، وتقنيات الأتمتة والبحث العلمي.',
    sloganSub: 'نحوّل الأفكار الهندسية إلى حلول رقمية تعمل.',
    pillars: [
      {
        num: '01',
        title: 'الهندسة المائية والري (Hydraulics & Sanitation)',
        desc: 'مهندس دولة خريج المدرسة الوطنية العليا للري + ماستر تسيير منشآت مياه الشرب ومحطات التطهير (WWTP) ونمذجة الشبكات المعقدة بـ EPANET و GIS.'
      },
      {
        num: '02',
        title: 'تطوير النظم والبرمجيات (Full-Stack & Desktop Systems)',
        desc: 'هندسة برمجيات سطح المكتب المستقلة (Offline-First بـ Electron و Python)، محاكيات تفاعلية، ولوحات تحكم صناعية (SCADA).'
      },
      {
        num: '03',
        title: 'الخدمات الأكاديمية والبحثية (Academic Hub & Mentorship)',
        desc: 'مرافقة الباحثين والطلبة، تدقيق وصياغة مذكرات التخرج ورسائل الماجستير (APA / IEEE)، وتصميم عروض المناقشة الاحترافية.'
      }
    ],
    btnCv: 'تحميل السيرة الذاتية (CV)',
    btnContact: 'تواصل معي مباشرة',
    btnLab: 'تشغيل المختبر التفاعلي',
    avail: 'متاح للمشاريع والتعاقد التقني (Algiers / Remote)',
    ch1: '01 // أعمال وبرمجيات',
    ch2: '02 // المختبر الهيدروليكي',
    ch3: '03 // المركز الأكاديمي',
    ch4: '04 // الركائز والقدرات'
  },
  fr: {
    tape: 'ENGINEERING IDENTITY // DOSSIER INGÉNIEUR',
    kicker: 'FLUIDEV / IDENTITÉ & COMPÉTENCES',
    name: 'Mohamed Baatas',
    roleHighlight: 'Ingénieur en Hydroinformatique & Logiciels',
    bio: "Ingénieur d'État diplômé de l'École Nationale Supérieure d'Hydraulique (ENSH), chercheur en Master (Gestion des Services d'Eau et d'Assainissement) et architecte logiciel Full-Stack. Je fusionne la mécanique des fluides et la modélisation hydraulique avec des logiciels de bureau Offline-First, des jumeaux numériques SCADA et l'accompagnement académique.",
    sloganSub: 'Transformer les concepts d’ingénierie en systèmes numériques fiables.',
    pillars: [
      {
        num: '01',
        title: 'Génie Hydraulique & Assainissement (ENSH)',
        desc: 'Modélisation sous pression EPANET 2.2, stations d’épuration (STEP), réduction des eaux non facturées (NRW) et SIG spatial (ArcGIS Pro).'
      },
      {
        num: '02',
        title: 'Architecture Logicielle & ERP Desktop (Offline-First)',
        desc: 'Applications de bureau haute fiabilité (Electron, React 18, Python PyQt6, SQLite), systèmes POS commerciaux et télémétrie IoT.'
      },
      {
        num: '03',
        title: 'Pôle Académique & Soutenance (Academic Hub)',
        desc: 'Mise en page normée de mémoires (APA 7e / IEEE), révision linguistique trilingue et conception de présentations de soutenance.'
      }
    ],
    btnCv: 'Télécharger le CV',
    btnContact: 'Contact Direct',
    btnLab: 'Lancer le Labo Interactif',
    avail: 'Disponible pour Projets & Consulting (Alger / Remote)',
    ch1: '01 // Projets & Logiciels',
    ch2: '02 // Laboratoire Hydraulique',
    ch3: '03 // Pôle Académique',
    ch4: '04 // Compétences Clés'
  },
  en: {
    tape: 'ENGINEERING IDENTITY // EXECUTIVE DOSSIER',
    kicker: 'FLUIDEV / IDENTITY & CREDENTIALS',
    name: 'Mohamed Baatas',
    roleHighlight: 'Hydroinformatics & Software Engineer',
    bio: 'State Hydraulics Engineer (ENSH Algiers), M.S. researcher in Water & Sanitation Services Management, and Full-Stack Software Architect. Dedicated to bridging pressurized water network physics and WWTP process engineering with offline-first desktop ERPs, real-time SCADA digital twins, and academic research excellence.',
    sloganSub: 'Turning complex engineering physics into production software.',
    pillars: [
      {
        num: '01',
        title: 'Hydraulics & Water Infrastructure (ENSH)',
        desc: 'Pressurized pipe network modeling (EPANET 2.2), wastewater treatment plant (WWTP) optimization, NRW reduction, and ArcGIS Pro.'
      },
      {
        num: '02',
        title: 'Full-Stack & Offline-First Desktop Systems',
        desc: 'Production desktop ERPs & POS suites (Electron, React 18, Python PyQt6, SQLite3), browser-based physical solvers, and IoT telemetry.'
      },
      {
        num: '03',
        title: 'Academic Transformation & Thesis Hub',
        desc: 'University-compliant thesis formatting (APA 7th / IEEE), trilingual scientific proofreading, and executive defense presentation decks.'
      }
    ],
    btnCv: 'Download Resume (CV)',
    btnContact: 'Direct Inquiry',
    btnLab: 'Launch Interactive Lab',
    avail: 'Available for Consulting & Engineering Roles (Algiers / Remote)',
    ch1: '01 // Selected Works',
    ch2: '02 // Hydraulic Lab',
    ch3: '03 // Academic Hub',
    ch4: '04 // Core Pillars'
  }
};

export function HeroSection() {
  const { i18n } = useTranslation();
  const langKey = i18n.language?.startsWith('ar')
    ? 'ar'
    : i18n.language?.startsWith('fr')
    ? 'fr'
    : 'en';
  const copy = DOSSIER_I18N[langKey];
  const isRTL = langKey === 'ar';

  const handleOpenLab = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('fluiddev:launch-lab', { detail: { tab: 'epanet' } }));
    const labEl = document.getElementById('interactive-lab');
    if (labEl) labEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BlueprintCadre
      id="hero"
      cadreTag="FLUIDEV // IDENTITY_BLUEPRINT"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={false}
      className="relative pt-4 pb-10 sm:pt-6 sm:pb-14 bg-slate-100/80 dark:bg-[#07133F] overflow-hidden min-h-[90vh] flex flex-col justify-between transition-colors duration-300"
    >
      <CollageBackground />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto py-4">
          
          {/* Portrait & Radar Column */}
          <div className={`lg:col-span-5 ${isRTL ? 'order-1 lg:order-2 lg:items-end lg:text-right' : 'order-1 lg:order-2 lg:items-end lg:text-right'} flex flex-col items-center text-center`}>
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-[330px] sm:h-[390px] lg:h-[430px] flex items-end justify-center lg:justify-end mb-4">
              <div className="absolute top-1/4 inset-x-8 h-64 bg-gradient-to-tr from-blue-600/30 via-cyan-400/25 to-transparent rounded-full filter blur-3xl pointer-events-none" />

              {/* Animated Rotating Radar Rings */}
              <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:right-6 pointer-events-none select-none">
                <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full border border-dashed border-fluid-blue/40 dark:border-cyan-400/50 animate-spin-slow flex items-center justify-center relative">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F7B500] border-2 border-white shadow-[0_0_12px_#F7B500]" />
                  <span className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-[#00E5FF] border border-[#07133F] shadow-[0_0_8px_#00E5FF]" />
                  <span className="absolute top-16 left-6 w-3 h-3 rounded-full bg-[#D62828] border border-white shadow-[0_0_6px_#D62828]" />
                  <span className="absolute top-2 right-1/4 text-[9px] font-mono font-bold text-fluid-blue dark:text-cyan-300/80">000° // N</span>
                  <span className="absolute bottom-3 left-1/4 text-[9px] font-mono font-bold text-fluid-blue dark:text-cyan-300/80">180° // S</span>
                </div>

                <div className="absolute w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] lg:w-[350px] lg:h-[350px] rounded-full border border-fluid-blue/30 dark:border-cyan-400/40 animate-spin-reverse-slow flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-dashed border-blue-500/60 scale-95" />
                  <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F7B500] border border-white" />
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00E5FF] border border-[#07133F]" />
                </div>

                <div className="absolute w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] rounded-full border border-blue-400/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                </div>

                <div
                  className="absolute right-0 bottom-4 text-transparent font-black font-condensed text-[120px] sm:text-[150px] lg:text-[180px] leading-none opacity-20 pointer-events-none select-none"
                  style={{ WebkitTextStroke: '1.5px rgba(0, 229, 255, 0.4)' }}
                >
                  01
                </div>
              </div>

              <img
                src="/assets/mohamed-portrait-cutout.png"
                alt="Mohamed Baatas"
                className="relative z-10 max-h-full max-w-full object-contain pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  filter: `
                    drop-shadow(2px 0 0 white)
                    drop-shadow(-2px 0 0 white)
                    drop-shadow(0 -2px 0 white)
                    drop-shadow(0 3px 0 white)
                    drop-shadow(-10px 18px 24px rgba(0, 0, 0, 0.5))
                  `
                }}
              />
            </div>

            {/* Persona Identity Badge Block */}
            <div className="space-y-2 relative z-10 w-full max-w-md lg:max-w-lg">
              <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded bg-white text-[#07133F] shadow-lg border-l-4 border-[#F7B500]">
                <span className="w-6 h-6 rounded bg-[#00E5FF] text-[#07133F] font-black font-condensed text-sm flex items-center justify-center transform -skew-x-12">
                  F
                </span>
                <span className="font-title font-bold text-sm tracking-tight text-[#07133F]">FluiDev</span>
                <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider">• FLUID DEVELOPER</span>
              </div>

              <div className="space-y-0.5">
                <div className="text-xs font-mono font-bold tracking-widest text-[#d62828] uppercase" dir="ltr">
                  ENGINEERING
                </div>
                <div className="text-2xl sm:text-3xl font-black font-condensed tracking-tight text-slate-900 dark:text-white leading-none">
                  SMART SOLUTIONS.
                </div>
                <div className="text-xs sm:text-sm text-fluid-blue dark:text-cyan-300 font-medium pt-0.5 border-t border-[#F7B500]/60 inline-block">
                  {copy.sloganSub}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-1.5 pt-1">
                <span className="px-2.5 py-0.5 rounded bg-[#001db5] border-l-2 border-[#F7B500] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
                  HYDROINFORMATICS
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#001db5] border-l-2 border-[#F7B500] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
                  SOFTWARE SYSTEMS
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#001db5] border-l-2 border-[#F7B500] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
                  DATA &amp; AUTOMATION
                </span>
              </div>
            </div>
          </div>

          {/* Tactile Cut Paper Engineering Dossier Column */}
          <div className="lg:col-span-7 order-2 lg:order-1" dir={isRTL ? 'rtl' : 'ltr'}>
            <div
              className="relative p-6 sm:p-9 lg:p-10 rounded-2xl shadow-2xl text-slate-900 overflow-hidden transition-transform duration-300"
              style={{
                backgroundColor: '#FAFBFD',
                backgroundImage: `
                  linear-gradient(rgba(0, 50, 160, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 50, 160, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '18px 18px',
                border: '1px solid rgba(0, 29, 181, 0.18)',
                boxShadow: '0 25px 65px -15px rgba(2, 11, 39, 0.45), 0 0 0 1px rgba(0, 29, 181, 0.12)'
              }}
            >
              {/* Metallic Paperclip */}
              <div
                className="absolute -top-3 left-10 w-5 h-12 pointer-events-none"
                style={{
                  border: '3px solid #9ea4ad',
                  borderBottom: 'none',
                  borderRadius: '99px 99px 0 0',
                  boxShadow: 'inset 0 2px 2px rgba(255,255,255,0.7), 2px 4px 6px rgba(7, 19, 63, 0.25)'
                }}
              />

              {/* Traffic Dots */}
              <div className="absolute top-5 left-16 flex items-center gap-1.5 pointer-events-none" dir="ltr">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f7b500] border border-[#001db5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fa8c16] border border-[#001db5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#d62828] border border-[#001db5]" />
              </div>

              {/* Notebook Red Margin Line */}
              <div
                className={`absolute top-0 bottom-0 ${
                  isRTL ? 'right-6 sm:right-10' : 'left-6 sm:left-10'
                } w-0.5 bg-red-500/60 pointer-events-none`}
              />

              <div className={isRTL ? 'pr-5 sm:pr-8 text-right' : 'pl-5 sm:pl-8 text-left'}>
                {/* Yellow Masking Tape Header */}
                <div className="inline-block mb-3">
                  <span className="inline-block px-3.5 py-1 bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs sm:text-sm uppercase shadow-sm">
                    {copy.tape}
                  </span>
                </div>

                {/* Identity Headline */}
                <div className="mb-5">
                  <div className="text-[11px] font-mono font-bold tracking-widest text-[#001db5] uppercase mb-0.5" dir="ltr">
                    {copy.kicker}
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-title tracking-tight text-[#07133F] leading-tight">
                    {copy.name} <br />
                    <span className="text-[#001db5]">{copy.roleHighlight}</span>
                  </h1>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans max-w-2xl">
                    {copy.bio}
                  </p>
                </div>

                {/* 3 Core Identity Credentials */}
                <div className="space-y-2.5 mb-5 border-t border-slate-200/90 pt-4">
                  {copy.pillars.map((item) => (
                    <div
                      key={item.num}
                      className="group flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50/80 transition-colors"
                    >
                      <span className="w-8 h-8 rounded-lg bg-[#001db5] text-white font-black font-condensed text-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                        {item.num}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-bold text-[#07133F] group-hover:text-[#001db5] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Quick Action Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-slate-200/90">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href="/Mohamed_Baatas_CV.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-bold font-condensed tracking-wide text-xs sm:text-sm shadow-md transition-all"
                    >
                      <Download className="w-4 h-4 text-[#07133F]" />
                      <span>{copy.btnCv}</span>
                    </a>

                    <a
                      href="#interactive-lab"
                      onClick={handleOpenLab}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#001db5] hover:bg-[#0027ea] text-white font-bold font-condensed tracking-wide text-xs sm:text-sm shadow-md transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>{copy.btnLab}</span>
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold font-condensed tracking-wide text-xs sm:text-sm shadow-sm transition-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{copy.btnContact}</span>
                    </a>
                  </div>

                  <span className="text-[11px] sm:text-xs font-mono text-slate-600 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {copy.avail}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Technical Chapters & Contact Bar Strip */}
        <div className="pt-4 mt-2 border-t border-slate-300 dark:border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#selected-works"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-blue-950/80 hover:bg-blue-50 dark:hover:bg-blue-900 border border-slate-300 dark:border-blue-500/30 text-slate-800 dark:text-white font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <Code2 className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-300" />
              <span>{copy.ch1}</span>
            </a>

            <a
              href="#interactive-lab"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-blue-950/80 hover:bg-blue-50 dark:hover:bg-blue-900 border border-slate-300 dark:border-blue-500/30 text-slate-800 dark:text-slate-200 font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <Activity className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{copy.ch2}</span>
            </a>

            <a
              href="#academic-hub"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-blue-950/80 hover:bg-blue-50 dark:hover:bg-blue-900 border border-slate-300 dark:border-blue-500/30 text-fluid-blue dark:text-cyan-300 font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-500 dark:text-fluid-yellow" />
              <span>{copy.ch3}</span>
            </a>

            <a
              href="#engineering-pillars"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-blue-950/80 hover:bg-blue-50 dark:hover:bg-blue-900 border border-slate-300 dark:border-blue-500/30 text-slate-800 dark:text-slate-200 font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <Droplet className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{copy.ch4}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-700 dark:text-cyan-300" dir="ltr">
            <a href="tel:+213655748513" className="flex items-center gap-1.5 hover:text-fluid-blue dark:hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F7B500]" />
              <span>+213 655 74 85 13</span>
            </a>
            <span className="text-blue-500">•</span>
            <a href="mailto:mohamedbaatas@gmail.com" className="flex items-center gap-1.5 hover:text-fluid-blue dark:hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400" />
              <span>mohamedbaatas@gmail.com</span>
            </a>
            <span className="text-blue-500">•</span>
            <a href="https://github.com/mohamedbaatas-hash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-fluid-blue dark:hover:text-white transition-colors">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </BlueprintCadre>
  );
}

export default HeroSection;
