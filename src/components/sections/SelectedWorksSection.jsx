import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Laptop, Droplets, Store, Activity } from 'lucide-react';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CircuitBackground } from '../common/CircuitBackground';

export function SelectedWorksSection() {
  const { t } = useTranslation();

  const works = [
    {
      id: 'constracker-suite',
      num: '01',
      tapeTag: '01 // CIVIL DESKTOP ERP',
      title: t('WORKS.constracker_title', 'Constracker Suite'),
      subtitle: 'Civil Engineering & Construction Management ERP',
      tag: 'Desktop Application • Offline-First',
      icon: <Laptop className="w-5 h-5 text-fluid-blue dark:text-cyan-400" />,
      punchline: 'Offline-first desktop software engineered with Electron, React 18, and SQLite3 to unify site worker assignments, budgeting, and materials without active internet.',
      bullets: [
        'Zero-latency local SQLite3 database',
        '7 integrated core project management modules',
        'Cross-platform native executable packaging'
      ],
      stack: ['Electron', 'React 18', 'TypeScript', 'SQLite3', 'Tailwind CSS'],
      metrics: [
        { label: 'Architecture', value: 'Offline-First' },
        { label: 'Modules', value: '7 Core Tools' },
        { label: 'Database', value: 'SQLite Local' }
      ]
    },
    {
      id: 'waterfit-telemetry',
      num: '02',
      tapeTag: '02 // IOT TELEMETRY & CLOUD',
      title: t('WORKS.waterfit_title', 'WaterFit Telemetry'),
      subtitle: 'Cloud-Connected Water & IoT Microservice',
      tag: 'IoT Telemetry • Cloud Microservice',
      icon: <Droplets className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      punchline: 'Asynchronous telemetry platform connecting domestic water sensors with an async FastAPI backend and Telegram alerts to log consumption and flag micro-leaks.',
      bullets: [
        'Sub-180ms webhook ingestion latency',
        'Automated fluid deficit & micro-leak anomaly alerts',
        'Bidirectional Telegram Bot API & Firestore sync'
      ],
      stack: ['Python 3.11', 'FastAPI', 'Telegram API', 'Firebase', 'Asyncio'],
      metrics: [
        { label: 'Latency', value: '<180 ms' },
        { label: 'Alert Rate', value: 'Real-time' },
        { label: 'Throughput', value: '500+ req/s' }
      ]
    },
    {
      id: 'maktabi-pos',
      num: '03',
      tapeTag: '03 // COMMERCIAL DESKTOP POS',
      title: t('WORKS.maktabi_title', 'Maktabi POS & Commercial Systems'),
      subtitle: 'Production Retail Ledger & Turnstile ERPs',
      tag: 'Commercial Software • Retail Production',
      icon: <Store className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      punchline: 'Production commercial desktop suites deployed for business clients in retail and fitness, handling 10,000+ item catalogs and hardware biometric turnstiles.',
      bullets: [
        'Sub-second barcode lookup across 10,000+ items',
        'Direct ESC/POS thermal printer and serial drawer control',
        'Hardware biometric integration & automated renewal alerts'
      ],
      stack: ['Python', 'PyQt / Qt', 'SQLite', 'ESC/POS Protocol', 'Hardware Drivers'],
      metrics: [
        { label: 'Deployment', value: 'Retail Stores' },
        { label: 'Inventory', value: '10,000+ SKUs' },
        { label: 'Uptime', value: '100% Offline' }
      ]
    },
    {
      id: 'epanet-solver',
      num: '04',
      tapeTag: '04 // HYDRAULIC GRAPH ENGINE',
      title: t('WORKS.epanet_title', 'EPANET 2.2 Looped Network Solver'),
      subtitle: 'Interactive Municipal Hydraulic Graph Engine',
      tag: 'Hydraulic Modeling • Numerical Simulation',
      icon: <Activity className="w-5 h-5 text-fluid-blue dark:text-blue-400" />,
      punchline: 'Deterministic in-browser hydraulic solver modeling municipal drinking water networks with Hazen-Williams friction equations and Newton-Raphson iteration.',
      bullets: [
        'Deterministic head loss calibrated to roughness C-factors',
        'Newton-Raphson nodal gradient iterations in real-time',
        'Interactive scenario testing: peak demand & pipe rupture'
      ],
      stack: ['React', 'JavaScript Math Engine', 'Hazen-Williams', 'SVG Canvas'],
      metrics: [
        { label: 'Topology', value: '8 Nodes • 11 Links' },
        { label: 'Physics', value: 'Hazen-Williams' },
        { label: 'Solver', value: 'Newton-Raphson' }
      ]
    }
  ];

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
        
        {/* Section Header: Minimal & Punchy */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-fluid-blue dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/30">
              01 // SIGNATURE WORKS
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              0101 / FLOW.DATA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white">
            {t('WORKS.section_title', 'Selected Engineering & Software Systems')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Production desktop applications, IoT telemetry pipelines, and computational hydraulic solvers built for real-world reliability.
          </p>
        </div>

        {/* Selected Works Grid: Physical Paper & Blueprint Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {works.map((work) => (
            <div
              key={work.id}
              className="group rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-[#0A1B54]/80 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 p-6 flex flex-col justify-between shadow-lg relative overflow-hidden backdrop-blur-sm"
            >
              {/* Corner Technical Crosshairs */}
              <span className="absolute top-2.5 right-2.5 text-[11px] font-mono text-slate-300 dark:text-cyan-400/50 select-none pointer-events-none">
                +
              </span>

              <div>
                {/* Yellow Tape Strip Badge at Top */}
                <div className="inline-block mb-3.5">
                  <span className="px-3 py-1 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs uppercase shadow-sm">
                    {work.tapeTag}
                  </span>
                </div>

                {/* Header Strip with Icon and Title */}
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

                {/* Single Punchline */}
                <p className="mt-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                  {work.punchline}
                </p>

                {/* Micro-Bullets (3 short bullet points) */}
                <ul className="mt-4 space-y-1.5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
                  {work.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Strip: Metrics & Tech Stack */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                {/* Real Metrics Badges */}
                <div className="grid grid-cols-3 gap-2">
                  {work.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-slate-50 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/20 text-center">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block">{m.label}</span>
                      <span className="text-xs font-bold font-condensed text-slate-900 dark:text-cyan-300 mt-0.5 block">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Stack Pills */}
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
              </div>
            </div>
          ))}
        </div>

      </div>
    </BlueprintCadre>
  );
}
