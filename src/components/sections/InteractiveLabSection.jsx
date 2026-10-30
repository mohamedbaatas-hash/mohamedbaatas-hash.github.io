import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Network, ChevronUp, ChevronDown } from 'lucide-react';
import { useEpanetEngine } from '../../hooks/useEpanetEngine';
import { EpanetNetworkCanvas } from '../simulator/epanet/EpanetNetworkCanvas';
import { EpanetNodeInspector } from '../simulator/epanet/EpanetNodeInspector';
import { EpanetControls } from '../simulator/epanet/EpanetControls';
import { BlueprintCadre } from '../common/BlueprintCadre';

export function InteractiveLabSection() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [isOpen, setIsOpen] = useState(true);

  const epanet = useEpanetEngine();

  return (
    <BlueprintCadre
      id="interactive-lab"
      cadreTag="03 // INTERACTIVE EPANET 2.2 NUMERICAL SOLVER"
      coordinates="NEWTON-RAPHSON // HAZEN-WILLIAMS"
      scale="LIVE SIMULATION"
    >
      {/* Editorial Section Header */}
      <div className="p-6 sm:p-10 lg:p-12 border-b border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B101E] flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="max-w-3xl">
          <div className="font-mono text-[11px] uppercase tracking-widest text-blue-600 dark:text-sky-400 mb-2">
            [ 03 // {isAr ? 'المختبر الهيدروليكي التفاعلي' : 'CLIENT-SIDE HYDRAULIC SOLVER'} ]
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-950 dark:text-white">
            {isAr ? 'محاكي شبكات المياه الحلقية EPANET 2.2' : 'EPANET 2.2 Looped Network Numerical Workbench'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            {isAr
              ? 'محرك حسابي تفاعلي يعمل مباشرة داخل المتصفح: يقوم بحل معادلات حفظ الكتلة وفقدان الشحنة وفق صيغة Hazen-Williams وتكرار Newton-Raphson. اضغط على أي عقدة أو أنبوب أو غير السيناريو التشغيلي لملاحظة تغير الضغوط والتدفقات.'
              : 'Deterministic in-browser hydraulic solver computing mass balance and nodal piezometric heads on a looped municipal distribution grid via Hazen-Williams friction loss and Newton-Raphson iterations. Click any junction or pipe to inspect real-time telemetry.'}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:grid grid-cols-3 divide-x rtl:divide-x-reverse divide-slate-200 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#080C17] font-mono text-xs">
            <div className="px-3 py-2">
              <span className="text-[9px] text-slate-400 block uppercase">Nodes</span>
              <span className="font-bold text-slate-900 dark:text-white tabular-nums">
                {epanet?.solvedNetwork?.nodes?.length ?? 8}
              </span>
            </div>
            <div className="px-3 py-2">
              <span className="text-[9px] text-slate-400 block uppercase">Pipes</span>
              <span className="font-bold text-blue-600 dark:text-sky-400 tabular-nums">
                {epanet?.solvedNetwork?.links?.length ?? 11}
              </span>
            </div>
            <div className="px-3 py-2">
              <span className="text-[9px] text-slate-400 block uppercase">Formula</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">H-W</span>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2 px-4 py-3 bg-slate-950 dark:bg-sky-400 text-white dark:text-slate-950 font-mono font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            <Network className="w-3.5 h-3.5" />
            <span>{isOpen ? (isAr ? 'طي المحاكي' : 'Collapse Lab') : (isAr ? 'فتح المحاكي' : 'Expand Lab')}</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Live Interactive EPANET Workbench */}
      {isOpen && (
        <div className="bg-[#060911] text-slate-100 divide-y divide-slate-800/90">
          {/* Scenario & Solver Controls Bar */}
          <div className="p-4 sm:p-6 bg-[#080C17]">
            <EpanetControls
              scenarios={epanet.scenarios}
              currentScenario={epanet.currentScenario}
              onSelectScenario={epanet.setScenario}
              pumpActive={epanet.pumpActive}
              onTogglePump={epanet.toggleBoosterPump}
              onResetNetwork={epanet.resetNetwork}
            />
          </div>

          {/* 12-Column Split: Network Canvas (8 Cols) + Node/Link Inspector (4 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x rtl:divide-x-reverse divide-slate-800/90">
            <div className="lg:col-span-8 p-4 sm:p-6 bg-[#060911] relative min-h-[440px]">
              <EpanetNetworkCanvas
                solvedNetwork={epanet.solvedNetwork}
                selectedElementId={epanet.selectedElementId}
                onSelectElement={epanet.selectElement}
              />
            </div>

            <div className="lg:col-span-4 p-4 sm:p-6 bg-[#0B101E]">
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
    </BlueprintCadre>
  );
}

export default InteractiveLabSection;
