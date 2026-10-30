import React from 'react';
import { useTranslation } from 'react-i18next';
import { Droplets, Activity, Layers, Compass, CheckCircle2 } from 'lucide-react';
import { HYDRAULIC_STUDIES } from '../../data/portfolioData';
import { MosaicStageGrid } from '../common/MosaicStageGrid';
import { HydraulicSchematicViewer } from './HydraulicSchematics';
import { useEpanetEngine } from '../../hooks/useEpanetEngine';
import { EpanetControls } from '../simulator/epanet/EpanetControls';
import { EpanetNetworkCanvas } from '../simulator/epanet/EpanetNetworkCanvas';
import { EpanetNodeInspector } from '../simulator/epanet/EpanetNodeInspector';

const STUDY_META = {
  'water-supply-network': {
    color: 'cyan',
    shape: 'tall', // 4 cols x 2 rows (Vertical Tall Card)
    icon: <Droplets className="w-3.5 h-3.5" />,
  },
  'sewerage-drainage': {
    color: 'indigo',
    shape: 'wide', // 8 cols x 1 row (Horizontal Wide Card)
    icon: <Activity className="w-3.5 h-3.5" />,
  },
  'water-reservoir': {
    color: 'emerald',
    shape: 'medium', // 5 cols x 1 row
    icon: <Layers className="w-3.5 h-3.5" />,
  },
  'artesian-well': {
    color: 'amber',
    shape: ' {square}', // 3 cols x 1 row -> handled below
    icon: <Compass className="w-3.5 h-3.5" />,
  },
};

export function HydraulicStudiesSection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const epanet = useEpanetEngine();

  const mosaicItems = HYDRAULIC_STUDIES.map((study, idx) => {
    const meta = STUDY_META[study.id] || { color: 'cyan', shape: 'medium' };
    // Exact asymmetric puzzle spans:
    // Item 0: Tall (4 cols, 2 rows)
    // Item 1: Wide (8 cols, 1 row)
    // Item 2: Medium (5 cols, 1 row)
    // Item 3: Compact Square (3 cols, 1 row) -> wait: MosaicStageGrid has square = 4 cols, let's use medium/square cleanly
    const shapes = ['tall', 'wide', 'square', 'square'];

    return {
      id: study.id,
      title: isAr ? study.titleAr : study.title,
      subtitle: isAr ? study.categoryAr : study.category,
      badge: study.badge,
      summary: isAr ? study.summaryAr : study.summary,
      tags: study.tools,
      color: meta.color,
      shape: shapes[idx] || 'medium',
      icon: meta.icon,
      renderDiagram: () => (
        <div className="w-full h-full text-slate-900 dark:text-white">
          <HydraulicSchematicViewer studyId={study.id} isAr={isAr} />
        </div>
      ),
      renderFull: () => (
        <div className="space-y-8">
          {/* Top Split: Methodology + Schematic */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 6 Cols: Full Summary, Methodology & Parameters */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/15">
                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-300 font-bold block mb-1.5">
                  {isAr ? 'ملخص الدراسة الهندسية' : 'EXECUTIVE ENGINEERING SCOPE'}
                </span>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                  {isAr ? study.summaryAr : study.summary}
                </p>
              </div>

              {/* Step-by-Step Methodology */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-300">
                  {isAr ? 'خطوات الحساب والتنفيذ الهندسي:' : 'Hydraulic Calculation & Execution Methodology:'}
                </h4>
                {(isAr ? study.methodologyAr : study.methodology).map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                  >
                    <span className="w-6 h-6 rounded-full bg-sky-400/20 text-sky-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{sIdx + 1}
                    </span>
                    <span className="leading-relaxed font-sans">{step}</span>
                  </div>
                ))}
              </div>

              {/* Technical Parameters Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono">
                {study.parameters.map((param, pIdx) => (
                  <div key={pIdx} className="p-3.5 rounded-xl bg-slate-900/90 border border-white/15">
                    <span className="text-[10px] text-slate-400 uppercase block">{param.key}</span>
                    <span className="text-xs sm:text-sm font-bold text-sky-300 mt-0.5 block">
                      {param.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 6 Cols: Interactive Blueprint Diagram */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-white/20 bg-slate-950">
              <HydraulicSchematicViewer studyId={study.id} isAr={isAr} />
            </div>
          </div>

          {/* Bonus in Full Expand for Drinking Water Network: Full EPANET 2.2 Simulator */}
          {study.id === 'water-supply-network' && (
            <div className="pt-8 border-t border-white/15 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-bold block">
                    LIVE NUMERICAL SOLVER // HAZEN-WILLIAMS
                  </span>
                  <h4 className="text-xl font-extrabold font-title text-white">
                    {isAr
                      ? 'المحاكي التفاعلي لشبكة توزيع المياه (EPANET 2.2)'
                      : 'Interactive EPANET 2.2 Looped Network Workbench'}
                  </h4>
                </div>
              </div>

              <EpanetControls
                scenarios={epanet.scenarios}
                currentScenario={epanet.currentScenario}
                onSelectScenario={epanet.setScenario}
                pumpActive={epanet.pumpActive}
                onTogglePump={epanet.toggleBoosterPump}
                onResetNetwork={epanet.resetNetwork}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                  <EpanetNetworkCanvas
                    solvedNetwork={epanet.solvedNetwork}
                    selectedElementId={epanet.selectedElementId}
                    onSelectElement={epanet.selectElement}
                  />
                </div>
                <div className="lg:col-span-4">
                  <EpanetNodeInspector
                    selectedNode={epanet.selectedNode}
                    selectedLink={epanet.selectedLink}
                    onSetThrottle={epanet.setPipeThrottle}
                    onToggleBurst={epanet.togglePipeBurst}
                    burstPipes={epanet.burstPipes}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    };
  });

  return (
    <section
      id="hydraulic-studies"
      className="relative min-h-screen w-full py-20 sm:py-28 px-4 sm:px-8 flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-10">
        
        {/* Section Header (Figma Space/Ocean Style) */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-block font-mono text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40">
            01 // {isAr ? 'الأعمال الدراسية الهندسية' : 'HYDRAULIC ENGINEERING STUDIES'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-title text-white tracking-tight drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
            {isAr ? 'مشاريع ودراسات الهندسة المائية' : 'MY HYDRAULIC ENGINEERING WORKS'}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-sky-200/80">
            {isAr
              ? 'اضغط على أي بطاقة لمعاينة المخطط الهندسي، ثم اضغط "تمدد كلي" لعرض كافة الحسابات والتفاصيل'
              : 'Click any tile to preview its blueprint diagram, then click "Full Expand" for complete calculations'}
          </p>
        </div>

        {/* 3-Stage Asymmetric Mosaic Gallery */}
        <MosaicStageGrid items={mosaicItems} isAr={isAr} />

      </div>
    </section>
  );
}

export default HydraulicStudiesSection;
