import React from 'react';
import { Download, Mail, Phone, Github, Code2, Activity, GraduationCap, Droplet, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CollageBackground } from '../common/CollageBackground';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <BlueprintCadre
      id="hero"
      cadreTag="FLUIDEV // IDENTITY_BLUEPRINT"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={false}
      className="relative pt-4 pb-10 sm:pt-6 sm:pb-14 bg-[#07133F] overflow-hidden min-h-[92vh] flex flex-col justify-between"
    >
      {/* Background Cut Paper Sheets, Circuit Traces & Golden Nodes */}
      <CollageBackground />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Main 2-Column Command Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto py-4">
          
          {/* Column A (Right in RTL): Balanced Portrait + Animated Rotating Radar + FluiDev Slogan */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center text-center lg:items-end lg:text-right">
            
            {/* Portrait Stage with Concentric Rotating Radar Rings */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-[340px] sm:h-[400px] lg:h-[440px] flex items-end justify-center lg:justify-end mb-4">
              
              {/* Radial Cyan Glow Behind Head */}
              <div className="absolute top-1/4 inset-x-8 h-64 bg-gradient-to-tr from-blue-600/30 via-cyan-400/25 to-transparent rounded-full filter blur-3xl pointer-events-none" />

              {/* 1. ANIMATED ROTATING RADAR / COMPASS RINGS (Centered behind Portrait) */}
              <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:right-6 pointer-events-none select-none">
                
                {/* Outer Dashed Orbit Ring - Rotating Clockwise */}
                <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] rounded-full border border-dashed border-cyan-400/50 animate-spin-slow flex items-center justify-center relative">
                  
                  {/* Orbiting Planetary Solder Nodes */}
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F7B500] border-2 border-white shadow-[0_0_12px_#F7B500]" />
                  <span className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-[#00E5FF] border border-[#07133F] shadow-[0_0_8px_#00E5FF]" />
                  <span className="absolute top-16 left-6 w-3 h-3 rounded-full bg-[#D62828] border border-white shadow-[0_0_6px_#D62828]" />
                  
                  {/* Telemetry Degree Stamps */}
                  <span className="absolute top-2 right-1/4 text-[9px] font-mono font-bold text-cyan-300/80">000° // N</span>
                  <span className="absolute bottom-3 left-1/4 text-[9px] font-mono font-bold text-cyan-300/80">180° // S</span>
                </div>

                {/* Middle Precision Scale Ring - Counter-Rotating Counter-Clockwise */}
                <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] rounded-full border border-cyan-400/40 animate-spin-reverse-slow flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-dashed border-blue-500/60 scale-95" />
                  <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F7B500] border border-white" />
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00E5FF] border border-[#07133F]" />
                </div>

                {/* Inner Crosshair Target */}
                <div className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border border-blue-400/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-full h-[1px] bg-cyan-400/20" />
                    <span className="absolute h-full w-[1px] bg-cyan-400/20" />
                  </div>
                </div>

                {/* Translucent Blueprint Watermark "01" */}
                <div
                  className="absolute right-0 bottom-4 text-transparent font-black font-condensed text-[120px] sm:text-[150px] lg:text-[180px] leading-none opacity-20 pointer-events-none select-none"
                  style={{
                    WebkitTextStroke: '1.5px rgba(0, 229, 255, 0.4)',
                  }}
                >
                  01
                </div>

              </div>

              {/* Ultra-Res Cutout Portrait - Sized with Dignity and Balance */}
              <img
                src="/assets/mohamed-portrait-cutout.png"
                alt="محمد بعتاس"
                className="relative z-10 max-h-full max-w-full object-contain pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  filter: `
                    drop-shadow(2px 0 0 white)
                    drop-shadow(-2px 0 0 white)
                    drop-shadow(0 -2px 0 white)
                    drop-shadow(0 3px 0 white)
                    drop-shadow(-10px 18px 24px rgba(0, 0, 0, 0.65))
                  `,
                }}
              />
            </div>

            {/* Persona Identity Badge Block (Direct from Banner Right Panel) */}
            <div className="space-y-2 relative z-10 w-full max-w-md lg:max-w-lg">
              
              {/* Brand Pill */}
              <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded bg-white text-[#07133F] shadow-lg border-l-4 border-[#F7B500]">
                <span className="w-6 h-6 rounded bg-[#00E5FF] text-[#07133F] font-black font-condensed text-sm flex items-center justify-center transform -skew-x-12">
                  F
                </span>
                <span className="font-title font-bold text-sm tracking-tight text-[#07133F]">FluiDev</span>
                <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider">• FLUID DEVELOPER</span>
              </div>

              {/* Persona Slogan */}
              <div className="space-y-0.5">
                <div className="text-xs font-mono font-bold tracking-widest text-[#d62828] uppercase" dir="ltr">
                  ENGINEERING
                </div>
                <div className="text-2xl sm:text-3xl font-black font-condensed tracking-tight text-white leading-none">
                  SMART SOLUTIONS.
                </div>
                <div className="text-xs sm:text-sm text-cyan-300 font-medium pt-0.5 border-t border-[#F7B500]/60 inline-block">
                  نحوّل الأفكار الهندسية إلى حلول رقمية تعمل.
                </div>
              </div>

              {/* Badges Strip */}
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

          {/* Column B (Left in RTL): Tactile Cut Paper Dossier (ورقة المربعات الهندسية - Who I Am First) */}
          <div className="lg:col-span-7 order-2 lg:order-1" dir="rtl">
            <div
              className="relative p-6 sm:p-9 lg:p-10 rounded-2xl shadow-2xl text-slate-900 overflow-hidden transform hover:-translate-y-0.5 transition-transform duration-300"
              style={{
                backgroundColor: '#FAFBFD',
                backgroundImage: `
                  linear-gradient(rgba(0, 50, 160, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 50, 160, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '18px 18px',
                border: '1px solid rgba(0, 29, 181, 0.18)',
                boxShadow: '0 25px 65px -15px rgba(2, 11, 39, 0.65), 0 0 0 1px rgba(0, 29, 181, 0.12)',
                transform: 'rotate(-0.5deg)',
              }}
            >
              {/* Metallic Paperclip Pinned over Top Edge */}
              <div
                className="absolute -top-3 left-10 w-5 h-12 pointer-events-none"
                style={{
                  border: '3px solid #9ea4ad',
                  borderBottom: 'none',
                  borderRadius: '99px 99px 0 0',
                  boxShadow: 'inset 0 2px 2px rgba(255,255,255,0.7), 2px 4px 6px rgba(7, 19, 63, 0.25)',
                }}
              />

              {/* Binder Punch Holes along Left Edge */}
              <div className="absolute top-10 bottom-10 left-3 flex flex-col justify-between pointer-events-none opacity-40">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={`punch-${i}`}
                    className="w-2.5 h-2.5 rounded-full bg-slate-300 border border-slate-400 shadow-inner"
                  />
                ))}
              </div>

              {/* Traffic Dots (Corner) */}
              <div className="absolute top-5 left-16 flex items-center gap-1.5 pointer-events-none" dir="ltr">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f7b500] border border-[#001db5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fa8c16] border border-[#001db5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#d62828] border border-[#001db5]" />
              </div>

              {/* Red Notebook Margin Line (On the Right for Arabic) */}
              <div className="absolute top-0 bottom-0 right-8 sm:right-12 w-0.5 bg-red-500/60 pointer-events-none" />

              {/* Yellow Masking Tape Header */}
              <div className="inline-block mb-3 pr-6 sm:pr-10">
                <span
                  className="inline-block px-3.5 py-1 bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs sm:text-sm uppercase shadow-sm"
                  style={{
                    transform: 'rotate(1deg)',
                  }}
                >
                  ENGINEERING IDENTITY // هوية المهندس
                </span>
              </div>

              {/* Who I Am Section Header */}
              <div className="mb-5 pr-6 sm:pr-10 text-right">
                <div className="text-[11px] font-mono font-bold tracking-widest text-[#001db5] uppercase mb-0.5" dir="ltr">
                  FLUIDEV / IDENTITY &amp; CREDENTIALS
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-title tracking-tight text-[#07133F] leading-tight">
                  محمد بعتاس <br />
                  <span className="text-[#001db5]">مهندس مياه وبرمجيات</span>
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans max-w-2xl">
                  مهندس دولة خريج المدرسة الوطنية العليا للري (ENSH)، وباحث ماستر في تسيير منظومات مياه الشرب والتطهير، ومطوّر نظم برمجية متقدم. أكرّس خبرتي لدمج الفهم الفيزيائي الدقيق لشبكات المياه ومحطات المعالجة، مع هندسة البرمجيات الحديثة، النظم المستقلة (Offline-First)، وتقنيات الأتمتة والبحث العلمي.
                </p>
              </div>

              {/* 3 Core Identity Credentials (Clean Right-to-Left Alignment) */}
              <div className="space-y-2.5 mb-5 pr-6 sm:pr-10 border-t border-slate-200/90 pt-4 text-right">
                
                <div className="group flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50/70 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-[#001db5] text-white font-black font-condensed text-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    01
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-[#07133F] group-hover:text-[#001db5] transition-colors leading-snug">
                      الهندسة المائية والري (Hydraulics &amp; Sanitation)
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                      مهندس دولة خريج المدرسة الوطنية العليا للري + ماستر تسيير منشآت مياه الشرب ومحطات التطهير (WWTP) ونمذجة الشبكات المعقدة بـ EPANET و GIS.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50/70 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-[#001db5] text-white font-black font-condensed text-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    02
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-[#07133F] group-hover:text-[#001db5] transition-colors leading-snug">
                      تطوير النظم والبرمجيات (Full-Stack &amp; Desktop Systems)
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                      هندسة برمجيات سطح المكتب المستقلة (Offline-First بالـ Electron و Python)، محاكيات تفاعلية، ولوحات تحكم صناعية (SCADA).
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50/70 transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-[#001db5] text-white font-black font-condensed text-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    03
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-[#07133F] group-hover:text-[#001db5] transition-colors leading-snug">
                      الخدمات الأكاديمية والبحثية (Academic Hub &amp; Mentorship)
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                      مرافقة الباحثين والطلبة، تدقيق وصياغة مذكرات التخرج ورسائل الماجستير (APA / IEEE)، وتصميم عروض المناقشة الاحترافية.
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Action Strip on the Paper */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-slate-200/90 pr-6 sm:pr-10">
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="/Mohamed_Baatas_CV.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-bold font-condensed tracking-wide text-xs sm:text-sm shadow-md transition-all group"
                  >
                    <Download className="w-4 h-4 text-[#07133F]" />
                    <span>تحميل السيرة الذاتية (CV)</span>
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#001db5] hover:bg-[#0027ea] text-white font-bold font-condensed tracking-wide text-xs sm:text-sm shadow-md transition-all group"
                  >
                    <Mail className="w-4 h-4" />
                    <span>تواصل معي مباشرة</span>
                  </a>
                </div>

                <span className="text-[11px] sm:text-xs font-mono text-slate-600 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  متاح للمشاريع والتعاقد التقني (Algiers / Remote)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Technical Chapters & Contact Bar Strip Across the Entire Hero */}
        <div className="pt-4 mt-2 border-t border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Chapter Navigation Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <a 
              href="#selected-works"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/80 hover:bg-blue-900 border border-blue-500/30 text-white font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <Code2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>01 // أعمال وبرمجيات</span>
            </a>

            <a 
              href="#interactive-lab"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/80 hover:bg-blue-900 border border-blue-500/30 text-slate-200 font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>02 // المختبر الهيدروليكي</span>
            </a>

            <a 
              href="#academic-hub"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/80 hover:bg-blue-900 border border-blue-500/30 text-cyan-300 font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <GraduationCap className="w-3.5 h-3.5 text-fluid-yellow" />
              <span>03 // المركز الأكاديمي</span>
            </a>

            <a 
              href="#engineering-pillars"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/80 hover:bg-blue-900 border border-blue-500/30 text-slate-200 font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <Droplet className="w-3.5 h-3.5 text-blue-400" />
              <span>04 // الركائز والقدرات</span>
            </a>
          </div>

          {/* Banner-Style Direct Contact Bars */}
          <div className="flex items-center gap-3 text-xs font-mono text-cyan-300">
            <a href="tel:+213655748513" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F7B500]" />
              <span>+213 655 74 85 13</span>
            </a>
            <span className="text-blue-500">•</span>
            <a href="mailto:mohamedbaatas@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>mohamedbaatas@gmail.com</span>
            </a>
            <span className="text-blue-500">•</span>
            <a href="https://github.com/mohamedbaatas-hash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Github className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub</span>
            </a>
          </div>

        </div>

      </div>
    </BlueprintCadre>
  );
}

export default HeroSection;
