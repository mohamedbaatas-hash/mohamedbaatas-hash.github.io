import React from 'react';
import { useTranslation } from 'react-i18next';
import { Droplet, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CircuitBackground } from '../common/CircuitBackground';

export function EngineeringPillarsSection() {
  const { t } = useTranslation();

  const pillars = [
    {
      num: '01',
      tapeTag: '01 // FLUID MECHANICS',
      domain: 'Hydraulic Systems & Infrastructure',
      tag: 'Fluid Mechanics & Sanitary Modeling',
      icon: <Droplet className="w-5 h-5 text-fluid-blue dark:text-cyan-400" />,
      punchline: 'Rigorous computational modeling of pressurized drinking networks, treatment plants, and urban water cycles.',
      skills: [
        { name: 'EPANET 2.2 Solver', tag: 'Extended Period Simulation' },
        { name: 'Hazen-Williams & Darcy', tag: 'Head Loss Formulation' },
        { name: 'ArcGIS Pro / ArcMap', tag: 'DEM & Spatial Networks' },
        { name: 'AutoCAD Civil 3D', tag: 'Pipeline Alignments' },
        { name: 'WWTP Process Design', tag: 'Coagulation & Digestion' },
        { name: 'NRW Leak Detection', tag: 'DMA Pressure Management' }
      ]
    },
    {
      num: '02',
      tapeTag: '02 // SOFTWARE & DATA',
      domain: 'Full-Stack & Desktop Architecture',
      tag: 'Modern Software & Relational Systems',
      icon: <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      punchline: 'High-reliability desktop software, asynchronous Python backends, and resilient offline-first databases.',
      skills: [
        { name: 'Python 3.11 / FastAPI', tag: 'Asyncio Microservices' },
        { name: 'Electron & Desktop ERP', tag: 'Cross-Platform Binaries' },
        { name: 'React 18 & TypeScript', tag: 'Dynamic Web Interfaces' },
        { name: 'SQLite3 & PostgreSQL', tag: 'ACID Relational Storage' },
        { name: 'REST APIs & Webhooks', tag: 'Event-Driven Systems' },
        { name: 'Design Systems & UI', tag: 'Tailwind CSS Precision' }
      ]
    },
    {
      num: '03',
      tapeTag: '03 // EDGE TELEMETRY',
      domain: 'Cyber-Physical IoT & Edge Telemetry',
      tag: 'Embedded Systems & Industrial Telemetry',
      icon: <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      punchline: 'Microcontroller firmware, edge sensor loops, and real-time cloud telemetry for automated fluid infrastructure.',
      skills: [
        { name: 'ESP32 & Arduino C++', tag: 'FreeRTOS & ADC Calibration' },
        { name: 'Industrial Sensor Loops', tag: 'Ultrasonic, Flow & Pressure' },
        { name: 'Closed-Loop PID Control', tag: 'Automated Dosing & Pumps' },
        { name: 'MQTT & Cloud Sync', tag: 'Firebase Realtime Broker' },
        { name: 'Actuators & Relays', tag: 'Solenoid Valves & Boosters' },
        { name: 'Edge Trip Protection', tag: 'Dry-Run & Overflow Cutoffs' }
      ]
    }
  ];

  return (
    <BlueprintCadre
      id="engineering-pillars"
      cadreTag="SYSTEM_DISCIPLINES: 03_PILLARS // BALANCED"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={true}
      conduitPosition="left"
      className="py-16 sm:py-24 bg-slate-50/50 dark:bg-[#07133f]/70 relative"
    >
      <CircuitBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Minimal & Punchy */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30">
              04 // CORE CAPABILITIES
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              01 · 10 · 11 // TELEMETRY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white">
            {t('PILLARS.section_title', 'Three Engineering Pillars')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Bridging fluid physics, modern software architectures, and embedded edge electronics.
          </p>
        </div>

        {/* 3 Pillars Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="group rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-[#0A1B54]/80 p-6 flex flex-col justify-between hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-lg relative overflow-hidden backdrop-blur-sm"
            >
              {/* Corner Technical Crosshairs */}
              <span className="absolute top-2.5 right-2.5 text-[11px] font-mono text-slate-300 dark:text-cyan-400/50 select-none pointer-events-none">
                +
              </span>

              <div>
                {/* Yellow Tape Strip Badge at Top */}
                <div className="inline-block mb-3.5">
                  <span className="px-3 py-1 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs uppercase shadow-sm">
                    {pillar.tapeTag}
                  </span>
                </div>

                {/* Header with Numbered Badge */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-title text-slate-900 dark:text-white tracking-tight">
                        {pillar.domain}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-2xl font-black font-condensed text-slate-200 dark:text-blue-950 group-hover:text-emerald-500/50 dark:group-hover:text-emerald-400/50 transition-colors select-none">
                    {pillar.num}
                  </span>
                </div>

                {/* Single Punchline */}
                <p className="mt-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                  {pillar.punchline}
                </p>

                {/* Clean Technical Skills Grid */}
                <div className="mt-5 space-y-2 pt-3.5 border-t border-slate-100 dark:border-slate-800">
                  {pillar.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#07133F] border border-slate-200/80 dark:border-blue-500/20 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400 shrink-0" />
                        <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-cyan-300/80 bg-slate-100 dark:bg-blue-950/60 px-2 py-0.5 rounded shrink-0">
                        {skill.tag}
                      </span>
                    </div>
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
