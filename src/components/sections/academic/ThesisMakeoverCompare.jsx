import React, { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, AlertTriangle, CheckCircle, Split, Eye, Layers, BookOpen, BookmarkCheck, FileText, Languages } from 'lucide-react';

export function ThesisMakeoverCompare() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  // Modes: 'split' | 'before' | 'after'
  const [viewMode, setViewMode] = useState('split');
  // Slider position from 0 to 100%
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const containerRef = useRef(null);

  // Drag interaction handler
  const handlePointerMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    if (clientX === undefined) return;

    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (isRTL) {
      pos = 100 - pos;
    }
    pos = Math.max(5, Math.min(95, pos));
    setSliderPos(pos);
  }, [isRTL]);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Hotspots definitions
  const hotspots = [
    {
      id: 'h1',
      number: '01',
      icon: <Layers className="w-3.5 h-3.5 text-amber-400" />,
      title: t('ACADEMIC_HUB.makeover.hotspots.h1_title', 'Structural Heading Hierarchy'),
      desc: t('ACADEMIC_HUB.makeover.hotspots.h1_desc', 'University-approved H1/H2/H3 styles with calibrated leading and automated section numbering.'),
      position: { top: '14%', right: '8%' }
    },
    {
      id: 'h2',
      number: '02',
      icon: <FileText className="w-3.5 h-3.5 text-cyan-400" />,
      title: t('ACADEMIC_HUB.makeover.hotspots.h2_title', 'Automated Indexing & Figures'),
      desc: t('ACADEMIC_HUB.makeover.hotspots.h2_desc', 'Dynamic Table of Contents, List of Figures and Tables, and separate Roman/Arabic pagination.'),
      position: { top: '34%', left: '8%' }
    },
    {
      id: 'h3',
      number: '03',
      icon: <BookmarkCheck className="w-3.5 h-3.5 text-blue-400" />,
      title: t('ACADEMIC_HUB.makeover.hotspots.h3_title', 'Unified APA / IEEE References'),
      desc: t('ACADEMIC_HUB.makeover.hotspots.h3_desc', 'Standardized citations with DOI verification and Mendeley/Zotero reference manager sync.'),
      position: { top: '62%', right: '8%' }
    },
    {
      id: 'h4',
      number: '04',
      icon: <Languages className="w-3.5 h-3.5 text-emerald-400" />,
      title: t('ACADEMIC_HUB.makeover.hotspots.h4_title', 'Academic Proofreading & Terminology'),
      desc: t('ACADEMIC_HUB.makeover.hotspots.h4_desc', 'Rigorous scientific terminology polish and grammatical correction in Arabic, French, and English.'),
      position: { bottom: '12%', left: '8%' }
    }
  ];

  // Effective split percentage based on current viewMode
  const effectiveSplit = viewMode === 'before' ? 100 : viewMode === 'after' ? 0 : sliderPos;

  return (
    <div className="w-full">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-slate-900/80 dark:bg-slate-900/90 border border-slate-800 p-2.5 sm:p-3 rounded-xl backdrop-blur-md">
        {/* Toggle Mode Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-lg border border-slate-800/80 text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={() => setViewMode('split')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              viewMode === 'split'
                ? 'bg-fluid-blue text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Split className="w-3.5 h-3.5" />
            <span>{t('ACADEMIC_HUB.makeover.toggle_split', 'Split Compare')}</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('before')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              viewMode === 'before'
                ? 'bg-red-500/20 text-red-300 border border-red-500/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>{t('ACADEMIC_HUB.makeover.toggle_before', 'Raw Draft (Before)')}</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('after')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              viewMode === 'after'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('ACADEMIC_HUB.makeover.toggle_after', 'FluiDev Thesis (After)')}</span>
          </button>
        </div>

        {/* Guidance Instruction & Slider Quick Percentage Indicator */}
        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
            <Sparkles className="w-3 h-3 text-fluid-yellow animate-pulse" />
            {t('ACADEMIC_HUB.makeover.slider_instruction', 'Drag slider or click buttons to reveal transformation')}
          </span>
          {viewMode === 'split' && (
            <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-semibold border border-slate-700">
              {Math.round(sliderPos)}% / {Math.round(100 - sliderPos)}%
            </span>
          )}
        </div>
      </div>

      {/* Main Makeover Stage Area */}
      <div
        ref={containerRef}
        onPointerMove={isDragging ? handlePointerMove : undefined}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[580px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl select-none touch-none bg-slate-950"
      >
        {/* Layer 1: AFTER (Full Canvas Underneath) - The FluiDev Clean Thesis */}
        <div className="absolute inset-0 w-full h-full p-4 sm:p-8 flex items-center justify-center bg-slate-900/95 dark:bg-[#07133F]">
          {/* Calibrated Thesis Sheet */}
          <div className="relative w-full max-w-2xl h-full bg-white dark:bg-[#0B1B4F] text-slate-900 dark:text-slate-100 rounded-lg shadow-xl p-6 sm:p-9 border border-slate-200 dark:border-blue-900/60 overflow-hidden flex flex-col justify-between">
            {/* Top Binding & Header Strip */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-700 via-cyan-500 to-amber-400" />
            
            {/* Header Telemetry */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-blue-800/40 pb-3 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold tracking-wider">
                {t('ACADEMIC_HUB.makeover.after_badge', 'AFTER // DEFENSE READY')}
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {t('ACADEMIC_HUB.makeover.after_status', 'Accredited University Standard')}
              </span>
            </div>

            {/* Structured Thesis Body */}
            <div className="py-3 flex-1 flex flex-col justify-center">
              {/* Chapter Badge */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-condensed tracking-widest uppercase font-bold bg-amber-400/20 text-amber-800 dark:text-amber-300 border border-amber-400/30">
                  {t('ACADEMIC_HUB.makeover.after_chapter', 'CHAPTER 01 // HYDRODYNAMICS')}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">P. 14 / 120</span>
              </div>

              {/* Title with Alexandria Typography */}
              <h4 className="text-base sm:text-xl font-bold font-title text-slate-900 dark:text-white leading-snug mb-1">
                {t('ACADEMIC_HUB.makeover.after_title', 'Hydrodynamic Modeling and Dissolved Oxygen Optimization in Facultative Lagoons')}
              </h4>
              <p className="text-xs text-blue-600 dark:text-cyan-400 font-medium mb-3">
                {t('ACADEMIC_HUB.makeover.after_subtitle', 'National Higher School of Hydraulics • Research Thesis')}
              </p>

              {/* Clean Lead Paragraph */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify mb-3 line-clamp-3 sm:line-clamp-4">
                {t('ACADEMIC_HUB.makeover.after_lead', 'Experimental analysis of biological kinetics and kinetic mass transfer in decentralized wastewater stabilization ponds under arid climate conditions.')}
              </p>

              {/* Formatted Citation Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-[11px] font-mono text-slate-700 dark:text-slate-300 w-fit">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{t('ACADEMIC_HUB.makeover.after_citation', '[Baatas et al., 2026 • IEEE / APA 7th Compliant]')}</span>
              </div>
            </div>

            {/* Tricolor Calibrated Footer Strip */}
            <div className="pt-3 border-t border-slate-200 dark:border-blue-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="text-[10px] tracking-wider uppercase font-semibold">FLUIDEV ACADEMIC CADRE</span>
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-300">TOC • FIG • APA 7TH</span>
            </div>
          </div>
        </div>

        {/* Layer 2: BEFORE (Revealed on the Left/Right based on split clip-path) */}
        <div
          className="absolute inset-0 w-full h-full p-4 sm:p-8 flex items-center justify-center bg-slate-950/90 overflow-hidden pointer-events-none transition-all duration-75"
          style={{
            clipPath: isRTL
              ? `inset(0 0 0 ${100 - effectiveSplit}%)`
              : `inset(0 ${100 - effectiveSplit}% 0 0)`
          }}
        >
          {/* Distressed Raw Draft Sheet */}
          <div className="relative w-full max-w-2xl h-full bg-[#f4efe6] dark:bg-[#1a1f2c] text-slate-800 dark:text-slate-300 rounded-lg shadow-xl p-6 sm:p-9 border border-amber-900/20 dark:border-red-900/30 overflow-hidden flex flex-col justify-between transform rotate-[-0.3deg]">
            {/* Header Telemetry */}
            <div className="flex items-center justify-between border-b border-dashed border-red-300 dark:border-red-900/50 pb-3 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-400 font-bold tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-red-500" />
                {t('ACADEMIC_HUB.makeover.before_badge', 'BEFORE // RAW DRAFT')}
              </span>
              <span className="text-red-700 dark:text-red-400 font-semibold text-[10px] bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded border border-red-200 dark:border-red-800">
                {t('ACADEMIC_HUB.makeover.before_penalty', 'Formatting penalty & missing citations')}
              </span>
            </div>

            {/* Messy Draft Content */}
            <div className="py-3 flex-1 flex flex-col justify-center opacity-90">
              <div className="mb-2">
                <span className="text-[10px] font-mono text-red-600 dark:text-red-400 line-through">
                  chapitre 1: aeratn lagoon ??
                </span>
              </div>

              {/* Crooked unformatted title */}
              <h4 className="text-base sm:text-lg font-mono font-bold text-slate-800 dark:text-slate-200 leading-snug mb-2 underline decoration-wavy decoration-red-400">
                {t('ACADEMIC_HUB.makeover.before_title', 'Study of WWTP facultative lagoon aeration')}
              </h4>

              {/* Distressed Bullet Points */}
              <div className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 mb-3">
                <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400">
                  <span className="text-red-500">❌</span>
                  <span>{t('ACADEMIC_HUB.makeover.before_note_1', 'Inconsistent margins & uncalibrated fonts')}</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                  <span className="text-amber-500">❌</span>
                  <span>{t('ACADEMIC_HUB.makeover.before_note_2', 'Broken heading numbering & missing styles')}</span>
                </div>
                <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400">
                  <span className="text-red-500">❌</span>
                  <span>{t('ACADEMIC_HUB.makeover.before_note_3', 'Disorganized manual bibliography')}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <span className="text-red-500">❌</span>
                  <span>{t('ACADEMIC_HUB.makeover.before_note_4', 'Typographical errors & informal phrasing')}</span>
                </div>
              </div>

              {/* Rough unformatted text block representation */}
              <div className="space-y-1.5 opacity-60">
                <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded w-11/12" />
                <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded w-4/5" />
                <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded w-5/6" />
              </div>
            </div>

            {/* Broken Footer */}
            <div className="pt-2 border-t border-dashed border-red-300 dark:border-red-900/50 flex items-center justify-between text-[10px] font-mono text-red-500">
              <span>UNFORMATTED DRAFT // RAW_FILE_V3_FINAL_REVISED.DOCX</span>
              <span>NO TOC / NO INDEX</span>
            </div>
          </div>
        </div>

        {/* 4 Hotspot Annotation Nodes Overlay (Interactive on the After view) */}
        {viewMode !== 'before' && (
          <div className="absolute inset-0 pointer-events-none">
            {hotspots.map((h) => {
              const isActive = activeHotspot === h.id;
              return (
                <div
                  key={h.id}
                  className="absolute pointer-events-auto group z-20"
                  style={h.position}
                >
                  {/* Pulsing Hotspot Trigger Dot */}
                  <button
                    type="button"
                    onClick={() => setActiveHotspot(isActive ? null : h.id)}
                    onMouseEnter={() => setActiveHotspot(h.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                    aria-label={h.title}
                    className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-fluid-navy/90 text-white border-2 border-fluid-yellow shadow-lg shadow-fluid-yellow/20 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-fluid-yellow"
                  >
                    <span className="absolute -inset-1 rounded-full bg-fluid-yellow/30 animate-ping pointer-events-none" />
                    <span className="font-condensed font-black text-xs text-fluid-yellow">{h.number}</span>
                  </button>

                  {/* Tooltip Card */}
                  <div
                    className={`absolute z-30 w-56 sm:w-64 p-3 rounded-xl bg-slate-900/95 text-slate-100 border border-slate-700 shadow-2xl backdrop-blur-md transition-all duration-200 text-right pointer-events-none ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } ${
                      h.position.right ? 'right-0 top-10' : 'left-0 top-10'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-slate-800">
                      <span className="p-1 rounded bg-slate-800">{h.icon}</span>
                      <strong className="text-xs font-title font-bold text-white">{h.title}</strong>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Split Slider Divider Handle (Only visible in 'split' mode) */}
        {viewMode === 'split' && (
          <div
            onPointerDown={handlePointerDown}
            className="absolute top-0 bottom-0 z-30 cursor-ew-resize flex items-center justify-center transition-none"
            style={{
              [isRTL ? 'right' : 'left']: `${effectiveSplit}%`,
              transform: 'translateX(-50%)'
            }}
          >
            {/* Glowing Vertical Line */}
            <div className="w-[3px] h-full bg-gradient-to-b from-cyan-400 via-fluid-yellow to-blue-600 shadow-[0_0_12px_rgba(0,229,255,0.8)]" />

            {/* Center Circular Thumb Handle */}
            <div className="absolute w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900 text-white border-2 border-cyan-400 shadow-xl flex items-center justify-center text-xs font-bold hover:scale-110 active:scale-95 transition-transform">
              <span className="text-cyan-400 text-sm tracking-tight font-mono select-none">
                {isRTL ? '▶◀' : '◀▶'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Accessible native range input for keyboard / screen-reader accessibility */}
      {viewMode === 'split' && (
        <div className="mt-3 px-2 flex items-center gap-3">
          <label htmlFor="thesis-compare-slider" className="text-xs font-mono text-slate-400 sr-only">
            {t('ACADEMIC_HUB.makeover.slider_instruction', 'Compare Slider')}
          </label>
          <input
            id="thesis-compare-slider"
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>
      )}

      {/* 4 Makeover Feature Badges Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-6">
        {hotspots.map((h) => (
          <div
            key={h.id}
            onMouseEnter={() => setActiveHotspot(h.id)}
            onMouseLeave={() => setActiveHotspot(null)}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              activeHotspot === h.id
                ? 'bg-blue-950/60 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-condensed font-black px-1.5 py-0.5 rounded bg-slate-800 text-fluid-yellow">
                {h.number}
              </span>
              <span className="p-1 rounded bg-slate-800/80">{h.icon}</span>
            </div>
            <h5 className="text-xs font-bold font-title text-slate-200 line-clamp-1">{h.title}</h5>
            <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-tight">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThesisMakeoverCompare;
