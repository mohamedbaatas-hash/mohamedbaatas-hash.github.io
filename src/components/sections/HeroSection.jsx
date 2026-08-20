import React from 'react';
import { Terminal, Shield, ArrowRight, Download, Activity, Cpu, Droplets } from 'lucide-react';
import { HERO_DATA } from '../../data/portfolioData';
import { MetricBadge } from '../common/MetricBadge';

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 border-b border-border-slate/80 bg-gradient-to-b from-obsidian via-deep-slate to-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Telemetry Flag */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {HERO_DATA.badge}
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cobalt-950/40 border border-cobalt-500/30 text-cobalt-300 font-mono text-xs">
            <Droplets className="w-3.5 h-3.5 text-cobalt-400" />
            <span>Hydraulics + IoT Systems</span>
          </div>
        </div>

        {/* Primary Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Engineering High-Precision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt-400 via-cyan-300 to-blue-200">
              Hydroinformatics & SCADA
            </span> Telemetry
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed">
            {HERO_DATA.bio}
          </p>
        </div>

        {/* Action Triggers */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/Mohamed_Baatas_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume / CV</span>
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate font-medium text-sm transition-colors"
          >
            <span>Explore Engineering Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#scada-plant"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate font-mono text-sm transition-colors"
          >
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>SCADA Simulator</span>
          </a>
          <a
            href="#epanet-sim"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate font-mono text-sm transition-colors"
          >
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>EPANET Solver</span>
          </a>
        </div>

        {/* High-Density KPI Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {HERO_DATA.kpis.map((kpi, idx) => (
            <MetricBadge
              key={idx}
              label={kpi.label}
              value={kpi.value}
              detail={kpi.detail}
              status={idx === 0 ? "cobalt" : (idx === 1 ? "cyan" : (idx === 2 ? "emerald" : "nominal"))}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
