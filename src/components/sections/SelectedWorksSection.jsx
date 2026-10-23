import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CheckCircle2,
  Laptop,
  Droplets,
  Store,
  Activity,
  Layers,
  Play,
  X,
  ShieldAlert,
  Cpu
} from 'lucide-react';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CircuitBackground } from '../common/CircuitBackground';

export function SelectedWorksSection() {
  const { t } = useTranslation();
  const [selectedModalWork, setSelectedModalWork] = useState(null);

  const caseStudies = t('CASE_STUDIES', { returnObjects: true }) || [];
  const freelanceSolutions = t('FREELANCE_SOLUTIONS', { returnObjects: true }) || [];

  const findCaseStudy = (id) =>
    Array.isArray(caseStudies) ? caseStudies.find((c) => c.id === id) : null;
  const findFreelance = (id) =>
    Array.isArray(freelanceSolutions) ? freelanceSolutions.find((f) => f.id === id) : null;

  const works = [
    {
      id: 'constracker-suite',
      num: '01',
      tapeTag: '01 // CIVIL DESKTOP ERP',
      title: t('WORKS.constracker_title', 'Constracker Suite'),
      tag: t('WORKS.constracker_tag', 'Desktop Application • Civil ERP'),
      icon: <Laptop className="w-5 h-5 text-fluid-blue dark:text-cyan-400" />,
      punchline: t(
        'WORKS.constracker_desc',
        'Offline-first desktop software engineered with Electron, React 18, and SQLite3 to unify site worker assignments, budgeting, and materials without active internet.'
      ),
      bullets: [
        t('WORKS.constracker_h1', 'Offline-first local SQLite3 database with zero-latency querying.'),
        t('WORKS.constracker_h2', '7 integrated core project management & measurement modules.'),
        t('WORKS.constracker_h3', 'Cross-platform native executable packaging via Electron Builder.')
      ],
      stack: ['Electron', 'React 18', 'TypeScript', 'SQLite3', 'Tailwind CSS', 'shadcn/ui'],
      metrics: [
        { label: t('WORKS.metric_arch', 'Architecture'), value: 'Offline-First' },
        { label: t('WORKS.metric_modules', 'Modules'), value: '7 Core Tools' },
        { label: t('WORKS.metric_db', 'Database'), value: 'SQLite Local' }
      ],
      deepDive: findCaseStudy('constracker-suite')
    },
    {
      id: 'waterfit-telemetry',
      num: '02',
      tapeTag: '02 // IOT TELEMETRY & CLOUD',
      title: t('WORKS.waterfit_title', 'WaterFit Telemetry'),
      tag: t('WORKS.waterfit_tag', 'IoT Telemetry • Cloud Microservice'),
      icon: <Droplets className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      punchline: t(
        'WORKS.waterfit_desc',
        'Asynchronous telemetry platform connecting water sensors with an async Python FastAPI backend and Telegram Bot API to log consumption and flag micro-leaks.'
      ),
      bullets: [
        t('WORKS.waterfit_h1', 'Sub-2s conversational ingestion via Telegram Bot API.'),
        t('WORKS.waterfit_h2', 'Asynchronous FastAPI webhook listeners & background tasks.'),
        t('WORKS.waterfit_h3', 'Real-time Firebase sync with proactive deficit & leak alerts.')
      ],
      stack: ['Python 3.11', 'FastAPI', 'Telegram Bot API', 'Firebase', 'Asyncio Webhooks'],
      metrics: [
        { label: t('WORKS.metric_latency', 'Latency'), value: '<180 ms' },
        { label: t('WORKS.metric_compliance', 'Compliance'), value: '+340%' },
        { label: t('WORKS.metric_concurrency', 'Throughput'), value: '500+ req/s' }
      ],
      deepDive: findCaseStudy('waterfit-telemetry')
    },
    {
      id: 'maktabi-pos',
      num: '03',
      tapeTag: '03 // COMMERCIAL DESKTOP POS',
      title: t('WORKS.maktabi_title', 'Maktabi POS & Commercial Systems'),
      tag: t('WORKS.maktabi_tag', 'Commercial Software • Retail Production'),
      icon: <Store className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      punchline: t(
        'WORKS.maktabi_desc',
        'Production commercial desktop suites deployed for business clients in retail and fitness, handling 10,000+ item catalogs and hardware biometric turnstiles.'
      ),
      bullets: [
        t('WORKS.maktabi_h1', 'Sub-second barcode lookup across 10,000+ SKU catalogs.'),
        t('WORKS.maktabi_h2', 'Direct ESC/POS thermal printer and serial cash drawer control.'),
        t('WORKS.maktabi_h3', 'Biometric/RFID turnstile control with +28% renewal increase.')
      ],
      stack: ['Python', 'PyQt6 / Qt', 'SQLite', 'ESC/POS Protocol', 'RFID / Biometrics'],
      metrics: [
        { label: t('WORKS.metric_deployment', 'Deployment'), value: '3 Stores / Gyms' },
        { label: t('WORKS.metric_audit', 'Audit Saved'), value: '-65% Time' },
        { label: t('WORKS.metric_uptime', 'Uptime'), value: '100% Offline' }
      ],
      deepDive: findFreelance('maktabi-pos')
    },
    {
      id: 'epanet-solver',
      num: '04',
      tapeTag: '04 // HYDRAULIC & SCADA ENGINES',
      title: t('WORKS.epanet_title', 'EPANET 2.2 & SCADA Digital Twins'),
      tag: t('WORKS.epanet_tag', 'Hydraulic Modeling • Numerical Simulation'),
      icon: <Activity className="w-5 h-5 text-fluid-blue dark:text-blue-400" />,
      punchline: t(
        'WORKS.epanet_desc',
        'Deterministic hydraulic solver and Zeriba El Oued WWTP SCADA digital twin implementing Hazen-Williams friction equations and Newton-Raphson matrix iterations.'
      ),
      bullets: [
        t('WORKS.epanet_h1', 'Deterministic head loss calibrated to pipe roughness C-factors.'),
        t('WORKS.epanet_h2', 'Newton-Raphson nodal gradient iterations solving pressures live.'),
        t('WORKS.epanet_h3', 'Interactive scenarios: morning peak, fire flow & pipe rupture.')
      ],
      stack: ['EPANET 2.2 Math', 'Newton-Raphson', 'Hazen-Williams', 'PyQt6 / React SVG'],
      metrics: [
        { label: t('WORKS.metric_topology', 'Topology'), value: '8 Nodes • 11 Links' },
        { label: t('WORKS.metric_physics', 'Physics'), value: 'Hazen-Williams' },
        { label: t('WORKS.metric_interactivity', 'Solver'), value: 'Newton-Raphson' }
      ],
      deepDive: findCaseStudy('scada-wwtp'),
      hasLiveLab: true
    }
  ];

  const handleLaunchLab = (tabName) => {
    window.dispatchEvent(new CustomEvent('fluiddev:launch-lab', { detail: { tab: tabName } }));
    const labSection = document.getElementById('interactive-lab');
    if (labSection) {
      labSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BlueprintCadre
      id="selected-works"
      cadreTag="CADRE_CATALOG: PRODUCTION_SOFTWARE // 04_NODES"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={true}
      conduitPosition="left"
      className="py-16 sm:py-24 bg-slate-50/40 dark:bg-[#07133f]/70 relative"
    >
      <CircuitBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-fluid-blue dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/30">
              01 // {t('WORKS.section_tag', 'SIGNATURE WORKS')}
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              0101 / FLOW.DATA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white">
            {t('WORKS.section_title', 'Selected Engineering & Software Systems')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t(
              'WORKS.section_desc',
              'Production desktop applications, IoT telemetry pipelines, and computational hydraulic solvers built for real-world reliability.'
            )}
          </p>
        </div>

        {/* Selected Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {works.map((work) => (
            <div
              key={work.id}
              className="group rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-[#0A1B54]/80 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 p-6 flex flex-col justify-between shadow-lg relative overflow-hidden backdrop-blur-sm"
            >
              <span className="absolute top-2.5 right-2.5 text-[11px] font-mono text-slate-300 dark:text-cyan-400/50 select-none pointer-events-none">
                +
              </span>

              <div>
                <div className="inline-block mb-3.5">
                  <span className="px-3 py-1 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs uppercase shadow-sm">
                    {work.tapeTag}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30">
                      {work.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-title text-slate-900 dark:text-white tracking-tight group-hover:text-fluid-blue dark:group-hover:text-cyan-300 transition-colors">
                        {work.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {work.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-2xl font-black font-condensed text-slate-200 dark:text-blue-950 group-hover:text-fluid-blue/40 dark:group-hover:text-cyan-400/40 transition-colors select-none">
                    {work.num}
                  </span>
                </div>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                  {work.punchline}
                </p>

                <ul className="mt-4 space-y-1.5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
                  {work.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {work.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-2 rounded-lg bg-slate-50 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/20 text-center"
                    >
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block truncate">
                        {m.label}
                      </span>
                      <span className="text-xs font-bold font-condensed text-slate-900 dark:text-cyan-300 mt-0.5 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {work.stack.map((stk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-blue-950/60 border border-slate-200 dark:border-blue-500/30 text-[10px] font-mono text-slate-700 dark:text-blue-300"
                    >
                      {stk}
                    </span>
                  ))}
                </div>

                {/* Interactive Deep-Dive & Live Simulator Action Row */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/60">
                  {work.deepDive && (
                    <button
                      type="button"
                      onClick={() => setSelectedModalWork(work)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-fluid-blue dark:text-cyan-400 hover:underline"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{t('CASE_STUDIES_SECTION.view_study', 'View Full Case Study')}</span>
                    </button>
                  )}

                  {work.hasLiveLab && (
                    <button
                      type="button"
                      onClick={() => handleLaunchLab('epanet')}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-fluid-blue hover:bg-fluid-blue-bright text-white text-xs font-condensed font-bold tracking-wide shadow-sm transition-all"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>{t('LAB.btn_launch_epanet', 'Launch EPANET Solver')}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Architecture Modal */}
      {selectedModalWork && selectedModalWork.deepDive && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedModalWork(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#07133F] border border-slate-200 dark:border-cyan-500/40 p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed text-xs uppercase">
                  {selectedModalWork.tapeTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-title mt-2">
                  {selectedModalWork.deepDive.title || selectedModalWork.deepDive.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModalWork(null)}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-5 text-xs sm:text-sm">
              {selectedModalWork.deepDive.problem && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-500/30">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-600 dark:text-red-400 uppercase mb-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    <span>{t('CASE_STUDIES_SECTION.problem', 'Problem Statement & Field Vulnerability')}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    {selectedModalWork.deepDive.problem}
                  </p>
                </div>
              )}

              <div>
                <h4 className="font-mono text-xs font-bold text-fluid-blue dark:text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  <span>{t('CASE_STUDIES_SECTION.methodology', 'Engineered Methodology & Implementation')}</span>
                </h4>
                <ul className="space-y-2">
                  {(selectedModalWork.deepDive.methodology || selectedModalWork.deepDive.features || []).map(
                    (step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </BlueprintCadre>
  );
}

export default SelectedWorksSection;
