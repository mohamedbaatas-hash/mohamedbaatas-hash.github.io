import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Maximize2, Minimize2, X, ChevronRight } from 'lucide-react';

/**
 * Custom White/Cyan Blueprint Wireframe Background Art for each card ID
 * so every card in Stage 1 visually communicates its engineering/software subject
 * without looking like an empty box.
 */
function CardBlueprintWatermark({ id }) {
  switch (id) {
    case 'water-supply-network':
      return (
        <svg viewBox="0 0 320 180" className="w-full h-full stroke-sky-300 fill-none" strokeWidth="1.2">
          <rect x="20" y="70" width="28" height="28" strokeWidth="1.5" />
          <line x1="48" y1="84" x2="95" y2="45" />
          <line x1="48" y1="84" x2="95" y2="125" />
          <polygon points="95,45 195,40 275,60 275,130 195,140 95,125" strokeDasharray="4 3" />
          <line x1="195" y1="40" x2="195" y2="140" />
          {[
            [95, 45],
            [195, 40],
            [275, 60],
            [95, 125],
            [195, 140],
            [275, 130],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" className="fill-sky-400/30" />
          ))}
        </svg>
      );

    case 'sewerage-drainage':
      return (
        <svg viewBox="0 0 420 140" className="w-full h-full stroke-sky-300 fill-none" strokeWidth="1.2">
          <polyline points="20,30 130,45 250,62 390,82" strokeDasharray="5 3" />
          <polygon points="20,65 390,115 390,126 20,76" className="fill-sky-400/15" />
          {[40, 140, 250, 360].map((x, i) => (
            <line key={i} x1={x} y1={32 + i * 14} x2={x} y2={78 + i * 12} strokeWidth="2" />
          ))}
        </svg>
      );

    case 'water-reservoir':
      return (
        <svg viewBox="0 0 320 160" className="w-full h-full stroke-sky-300 fill-none" strokeWidth="1.3">
          <rect x="75" y="30" width="170" height="95" strokeWidth="2" />
          <line x1="75" y1="62" x2="245" y2="62" strokeDasharray="4 3" />
          <rect x="77" y="62" width="166" height="61" className="fill-sky-400/15 stroke-none" />
          <polyline points="25,45 95,45 95,62" />
          <polyline points="225,105 225,125 295,125" />
        </svg>
      );

    case 'artesian-well':
      return (
        <svg viewBox="0 0 320 160" className="w-full h-full stroke-sky-300 fill-none" strokeWidth="1.2">
          <line x1="15" y1="45" x2="305" y2="45" strokeDasharray="4 4" />
          <path d="M 15,45 Q 135,45 160,98 Q 185,45 305,45" strokeWidth="1.8" />
          <rect x="148" y="15" width="24" height="130" className="fill-sky-400/15" />
          <line x1="160" y1="15" x2="160" y2="115" strokeWidth="2.5" />
        </svg>
      );

    case 'avant-metre':
      return (
        <svg viewBox="0 0 420 140" className="w-full h-full stroke-sky-300 fill-none" strokeWidth="1.2">
          <line x1="30" y1="28" x2="240" y2="28" />
          <rect x="85" y="28" width="100" height="85" className="fill-sky-400/10" />
          <circle cx="135" cy="84" r="18" className="fill-sky-400/20" strokeWidth="2" />
          <rect x="265" y="30" width="125" height="80" strokeDasharray="3 3" />
          <line x1="275" y1="52" x2="375" y2="52" />
          <line x1="275" y1="72" x2="355" y2="72" />
          <line x1="275" y1="92" x2="365" y2="92" />
        </svg>
      );

    case 'waterfit':
      return (
        <svg viewBox="0 0 300 220" className="w-full h-full stroke-sky-300 fill-none" strokeWidth="1.2">
          <polygon points="150,30 215,68 215,142 150,180 85,142 85,68" className="fill-sky-400/10" strokeWidth="1.6" />
          <circle cx="150" cy="105" r="34" strokeDasharray="4 3" />
          <polyline points="35,195 95,175 145,190 205,160 265,180" strokeWidth="1.5" />
        </svg>
      );

    case 'nfc-business-card':
      return (
        <svg viewBox="0 0 320 150" className="w-full h-full stroke-sky-300 fill-none" strokeWidth="1.3">
          <circle cx="160" cy="75" r="22" className="fill-sky-400/15" />
          <circle cx="160" cy="75" r="42" strokeDasharray="5 4" />
          <circle cx="160" cy="75" r="64" strokeDasharray="2 5" />
          <rect x="144" y="63" width="32" height="24" rx="3" />
        </svg>
      );

    case 'management-erps':
      return (
        <svg viewBox="0 0 320 150" className="w-full h-full stroke-sky-300 fill-none" strokeWidth="1.2">
          <rect x="35" y="30" width="70" height="40" rx="4" className="fill-sky-400/10" />
          <rect x="135" y="55" width="70" height="40" rx="4" className="fill-sky-400/15" />
          <rect x="225" y="25" width="65" height="40" rx="4" className="fill-sky-400/10" />
          <line x1="105" y1="50" x2="135" y2="75" />
          <line x1="205" y1="75" x2="225" y2="45" />
        </svg>
      );

    case 'bernoulli-club-presidency':
      return (
        <svg viewBox="0 0 420 140" className="w-full h-full stroke-sky-300 fill-none" strokeWidth="1.2">
          <circle cx="210" cy="70" r="48" strokeDasharray="4 4" />
          {Array.from({ length: 14 }).map((_, i) => {
            const angle = (i * 2 * Math.PI) / 14;
            const cx = 210 + Math.cos(angle) * 48;
            const cy = 70 + Math.sin(angle) * 48;
            return <circle key={i} cx={cx} cy={cy} r="4" className="fill-sky-300/40" />;
          })}
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 360 150" className="w-full h-full stroke-sky-300 fill-none" strokeWidth="1.1">
          <circle cx="280" cy="75" r="52" strokeDasharray="5 4" />
          <circle cx="280" cy="75" r="28" className="fill-sky-400/10" />
          <line x1="20" y1="115" x2="340" y2="35" strokeDasharray="3 3" />
          <polyline points="30,95 110,65 185,85 280,45" strokeWidth="1.6" />
        </svg>
      );
  }
}

/**
 * Asymmetric Gallery Span + Height Classes (Tall, Wide, Square, Medium, Large, Banner)
 */
const SHAPE_CLASSES = {
  tall: 'sm:col-span-3 lg:col-span-4 sm:row-span-2 min-h-[210px] sm:min-h-[356px]',
  wide: 'sm:col-span-6 lg:col-span-8 sm:row-span-1 min-h-[168px]',
  large: 'sm:col-span-6 lg:col-span-7 sm:row-span-2 min-h-[210px] sm:min-h-[356px]',
  medium: 'sm:col-span-3 lg:col-span-5 sm:row-span-1 min-h-[168px]',
  square: 'sm:col-span-3 lg:col-span-4 sm:row-span-1 min-h-[168px]',
  banner: 'sm:col-span-6 lg:col-span-12 sm:row-span-1 min-h-[168px]',
};

/**
 * Unified Oceanic Sci-Fi Blueprint Theme for all cards
 */
const UNIFIED_BLUEPRINT_THEME = {
  tile: 'from-[#07224D]/88 via-[#0A316B]/78 to-[#051636]/92 border-sky-300/35 hover:border-sky-300/90 shadow-[0_10px_35px_rgba(2,132,199,0.22)] hover:shadow-[0_12px_45px_rgba(56,189,248,0.35)]',
  activeTile:
    'from-[#061D44]/95 via-[#082A5E]/92 to-[#04112B]/96 border-sky-300/75 shadow-[0_0_65px_rgba(56,189,248,0.32)]',
  pill: 'from-[#082454]/85 to-[#051738]/90 border-sky-300/35 text-sky-100 hover:border-sky-300/80',
  badge: 'bg-sky-400/15 text-sky-200 border-sky-300/35',
  button: 'bg-sky-400 hover:bg-sky-300 text-slate-950',
};

export function MosaicStageGrid({ items = [], isAr = false }) {
  const [activeId, setActiveId] = useState(null);
  const [stage, setStage] = useState('mosaic'); // 'mosaic' | 'preview' | 'full'
  // Controls the smooth CSS Grid 0fr <-> 1fr accordion open/close state
  const [drawerPhase, setDrawerPhase] = useState('closed'); // 'closed' | 'preview-open' | 'full-open' | 'closing'

  const cardRefs = useRef({});
  const prevRectsRef = useRef({});
  const closeTimerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /**
   * Capture current bounding boxes of all cards before a layout change
   * so we can smoothly glide (FLIP) every card to its new position.
   */
  const capturePositions = () => {
    const rects = {};
    Object.entries(cardRefs.current).forEach(([id, el]) => {
      if (el) {
        rects[id] = el.getBoundingClientRect();
      }
    });
    prevRectsRef.current = rects;
  };

  /**
   * Play smooth FLIP position glide whenever stage or activeId changes
   */
  useLayoutEffect(() => {
    const prevRects = prevRectsRef.current;
    if (!prevRects || Object.keys(prevRects).length === 0) return;

    Object.entries(cardRefs.current).forEach(([id, el]) => {
      const prev = prevRects[id];
      if (!el || !prev) return;
      const next = el.getBoundingClientRect();
      if (next.width === 0 && next.height === 0) return;

      const dx = prev.left - next.left;
      const dy = prev.top - next.top;

      if (Math.abs(dx) > 1.5 || Math.abs(dy) > 1.5) {
        try {
          el.animate(
            [
              { transform: `translate3d(${dx}px, ${dy}px, 0)` },
              { transform: 'translate3d(0, 0, 0)' },
            ],
            {
              duration: 620,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }
          );
        } catch {
          // Fallback if Web Animations API is unavailable
        }
      }
    });

    prevRectsRef.current = {};
  }, [stage, activeId]);

  /**
   * Open or switch card in Stage 2 (Preview)
   */
  const handleCardClick = (id) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    // Clicking the already-open preview header collapses back to mosaic smoothly
    if (activeId === id && stage === 'preview' && drawerPhase !== 'closing') {
      handleCloseToMosaic();
      return;
    }

    capturePositions();
    setActiveId(id);
    setStage('preview');
    setDrawerPhase('closed');

    // Trigger 0fr -> 1fr expansion on next frame so browser animates the unfolding smoothly
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = requestAnimationFrame(() => {
        setDrawerPhase('preview-open');
      });
    });
  };

  /**
   * Expand from Stage 2 (Preview) -> Stage 3 (Full Expand)
   */
  const handleFullExpand = (e) => {
    e?.stopPropagation();
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    capturePositions();
    setStage('full');
    rafRef.current = requestAnimationFrame(() => {
      setDrawerPhase('full-open');
    });
  };

  /**
   * Step back from Stage 3 (Full Expand) -> Stage 2 (Preview)
   */
  const handleBackToPreview = (e) => {
    e?.stopPropagation();
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    capturePositions();
    setStage('preview');
    rafRef.current = requestAnimationFrame(() => {
      setDrawerPhase('preview-open');
    });
  };

  /**
   * Smoothly close from Stage 2 or Stage 3 -> Stage 1 (Mosaic)
   * Phase 1: Fold the open accordion shut (430ms)
   * Phase 2: Glide all cards back into their asymmetric mosaic spans (620ms)
   */
  const handleCloseToMosaic = (e) => {
    e?.stopPropagation();
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    setDrawerPhase('closing');

    closeTimerRef.current = setTimeout(() => {
      capturePositions();
      setStage('mosaic');
      setActiveId(null);
      setDrawerPhase('closed');
    }, 430);
  };

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        stage === 'full' ? 'gap-0' : 'gap-4'
      }`}
    >
      {items.map((item, idx) => {
        const isActive = item.id === activeId;
        const isMosaic = stage === 'mosaic';
        const isPreview = stage === 'preview';
        const isFull = stage === 'full';

        // Determine layout span & height class for each card in the unified grid
        let layoutClass = SHAPE_CLASSES[item.shape] || SHAPE_CLASSES.medium;

        if (isPreview) {
          if (isActive) {
            layoutClass = 'col-span-1 sm:col-span-6 lg:col-span-12 min-h-[140px]';
          } else {
            layoutClass = 'col-span-1 sm:col-span-3 lg:col-span-4 min-h-[72px] max-h-[82px]';
          }
        } else if (isFull) {
          if (isActive) {
            layoutClass = 'col-span-1 sm:col-span-6 lg:col-span-12 min-h-[280px]';
          } else {
            layoutClass =
              'col-span-1 sm:col-span-3 lg:col-span-4 min-h-0 max-h-0 opacity-0 scale-95 -translate-y-3 pointer-events-none border-0 p-0 m-0 overflow-hidden';
          }
        }

        const isPreviewDrawerOpen = isActive && isPreview && drawerPhase === 'preview-open';
        const isFullDrawerOpen = isActive && isFull && drawerPhase === 'full-open';

        return (
          <div
            key={item.id}
            ref={(el) => {
              cardRefs.current[item.id] = el;
            }}
            onClick={() => {
              if (!isActive || isMosaic) {
                handleCardClick(item.id);
              }
            }}
            role={!isActive || isMosaic ? 'button' : undefined}
            tabIndex={!isActive || isMosaic ? 0 : undefined}
            onKeyDown={(e) => {
              if ((!isActive || isMosaic) && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                handleCardClick(item.id);
              }
            }}
            className={`${layoutClass} card-stage-transition group relative rounded-3xl bg-gradient-to-br backdrop-blur-2xl overflow-hidden text-left rtl:text-right flex flex-col justify-between ${
              isActive
                ? `${UNIFIED_BLUEPRINT_THEME.activeTile} border-2 p-5 sm:p-8 cursor-default`
                : isPreview
                ? `${UNIFIED_BLUEPRINT_THEME.pill} border px-5 py-4 cursor-pointer hover:scale-[1.01]`
                : isFull
                ? 'border-0 p-0'
                : `${UNIFIED_BLUEPRINT_THEME.tile} border p-6 cursor-pointer hover:-translate-y-1`
            }`}
          >
            {/* Subtle Blueprint Grid + Custom Wireframe Schematic Background inside the Card */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                isActive ? 'opacity-10' : 'opacity-15'
              }`}
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />

            {/* Wireframe Watermark (Visible in Stage 1 Mosaic, softly fades out when card opens or compresses) */}
            <div
              className={`absolute inset-0 p-4 pointer-events-none flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isMosaic
                  ? 'opacity-25 group-hover:opacity-50 group-hover:scale-105'
                  : isActive
                  ? 'opacity-5 scale-110'
                  : 'opacity-10 scale-95'
              }`}
            >
              <CardBlueprintWatermark id={item.id} />
            </div>

            {/* =================================================================
             * COMPACT HEADER / MOSAIC COVER (Visible in Stage 1 & Compact Pushed Pills)
             * Smoothly collapses when this card is active in Preview or Full stage
             * ================================================================= */}
            <div
              className={`drawer-accordion ${
                isActive && (isPreview || isFull)
                  ? 'drawer-accordion-closed'
                  : 'drawer-accordion-open'
              }`}
            >
              <div className="overflow-hidden">
                {isPreview && !isActive ? (
                  /* Sleek Horizontal Bar when pushed to Top/Bottom in Stage 2 */
                  <div className="relative z-10 flex items-center justify-between gap-3 w-full">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-sky-400/20 text-sky-200 border border-sky-300/30 font-bold shrink-0">
                        0{idx + 1}
                      </span>
                      <span className="font-title font-bold text-sm text-white truncate group-hover:text-sky-200 transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-sky-300 opacity-75 group-hover:translate-x-0.5 rtl:rotate-180 transition-transform shrink-0" />
                  </div>
                ) : (
                  /* Full Stage 1 Asymmetric Mosaic Tile Content */
                  <div
                    className={`relative z-10 flex flex-col justify-between ${
                      item.shape === 'tall' || item.shape === 'large'
                        ? 'min-h-[170px] sm:min-h-[305px]'
                        : 'min-h-[120px]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 w-full">
                      <span
                        className={`font-mono text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${UNIFIED_BLUEPRINT_THEME.badge}`}
                      >
                        0{idx + 1}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 group-hover:bg-sky-400 group-hover:text-slate-950 border border-white/20 text-[10px] font-mono font-bold text-sky-200 transition-all duration-300">
                        <span>{isAr ? 'فتح المخطط' : 'OPEN BLUEPRINT'}</span>
                        <Maximize2 className="w-3 h-3" />
                      </span>
                    </div>

                    <div className="mt-auto pt-4">
                      <h3 className="text-base sm:text-lg lg:text-xl font-extrabold font-title text-white leading-snug tracking-tight group-hover:text-sky-200 transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* =================================================================
             * STAGE 2: IN-GRID PREVIEW DRAWER (Smooth 0fr <-> 1fr Accordion Unfold)
             * ================================================================= */}
            <div
              className={`drawer-accordion ${
                isPreviewDrawerOpen ? 'drawer-accordion-open' : 'drawer-accordion-closed'
              }`}
            >
              <div className="overflow-hidden">
                {isActive && (
                  <div className="relative z-10 pt-1">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                      {/* Inner Box 1: Title, Category & Concise Explanation */}
                      <div
                        className={`lg:col-span-5 rounded-2xl bg-[#04122C]/85 border border-sky-300/25 p-6 flex flex-col justify-between space-y-4 transition-all duration-500 delay-75 ${
                          isPreviewDrawerOpen
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-3'
                        }`}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${UNIFIED_BLUEPRINT_THEME.badge}`}
                            >
                              {item.badge}
                            </span>
                            <button
                              type="button"
                              onClick={handleCloseToMosaic}
                              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                              title={isAr ? 'تصغير' : 'Collapse'}
                            >
                              <Minimize2 className="w-4 h-4" />
                            </button>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-extrabold font-title text-white leading-snug">
                            {item.title}
                          </h3>

                          {item.subtitle && (
                            <p className="text-xs font-mono text-sky-300">{item.subtitle}</p>
                          )}

                          <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed pt-1">
                            {item.summary}
                          </p>
                        </div>

                        {item.tags && (
                          <div className="pt-4 border-t border-sky-300/15 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                            {item.tags.map((tg, i) => (
                              <span
                                key={i}
                                className="px-2.5 py-0.5 rounded-md bg-sky-400/10 text-sky-200 border border-sky-300/25"
                              >
                                {tg}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Inner Box 2: The Blueprint / Technical Diagram */}
                      <div
                        className={`lg:col-span-7 rounded-2xl bg-[#04122C]/90 border border-sky-300/25 overflow-hidden flex flex-col justify-center transition-all duration-500 delay-150 ${
                          isPreviewDrawerOpen
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-3 scale-[0.98]'
                        }`}
                      >
                        {item.renderDiagram ? (
                          item.renderDiagram()
                        ) : (
                          <div className="p-8 text-center text-slate-400 font-mono text-xs">
                            Blueprint Schematic Preview
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Full Expand Action Bar */}
                    <div
                      className={`mt-6 pt-5 border-t border-sky-300/20 flex flex-wrap items-center justify-between gap-4 transition-all duration-500 delay-150 ${
                        isPreviewDrawerOpen
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <span className="text-xs font-mono text-sky-200/80">
                        {isAr
                          ? 'اضغط على "تمدد كلي" لإخفاء البطاقات الأخرى وعرض كافة الحسابات والتفاصيل'
                          : 'Click "Full Expand" to hide other cards and inspect complete engineering specifications'}
                      </span>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={handleCloseToMosaic}
                          className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold border border-white/20 transition-colors"
                        >
                          {isAr ? 'إغلاق المعاينة' : 'Collapse'}
                        </button>

                        <button
                          type="button"
                          onClick={handleFullExpand}
                          className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-lg transition-transform hover:scale-[1.02] ${UNIFIED_BLUEPRINT_THEME.button}`}
                        >
                          <Maximize2 className="w-4 h-4" />
                          <span>
                            {isAr ? 'تمدد كلي (عرض كل التفاصيل)' : 'Full Expand (Complete View)'}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* =================================================================
             * STAGE 3: FULL EXPAND WORKSPACE (Smooth 0fr <-> 1fr Accordion Unfold)
             * ================================================================= */}
            <div
              className={`drawer-accordion ${
                isFullDrawerOpen ? 'drawer-accordion-open' : 'drawer-accordion-closed'
              }`}
            >
              <div className="overflow-hidden">
                {isActive && (
                  <div className="relative z-10 text-white">
                    {/* Top Bar with Back to Preview & Hide Buttons */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-sky-300/20">
                      <div>
                        <span
                          className={`inline-block font-mono text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-2 ${UNIFIED_BLUEPRINT_THEME.badge}`}
                        >
                          {item.badge}
                        </span>
                        <h3 className="text-2xl sm:text-4xl font-extrabold font-title tracking-tight text-white">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-xs sm:text-sm font-mono text-sky-300 mt-1">
                            {item.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2.5">
                        <button
                          type="button"
                          onClick={handleBackToPreview}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-mono text-xs font-semibold text-slate-200 transition-colors"
                        >
                          <Minimize2 className="w-3.5 h-3.5" />
                          <span>{isAr ? 'عودة للمعاينة' : 'Back to Preview'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCloseToMosaic}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-mono text-xs font-extrabold shadow-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                          <span>
                            {isAr ? 'إخفاء والعودة للبطاقات' : 'Hide & Show All Cards'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Full Content & Interactive Diagram */}
                    <div
                      className={`mt-8 space-y-8 transition-all duration-500 delay-100 ${
                        isFullDrawerOpen
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      }`}
                    >
                      {item.renderFull ? (
                        item.renderFull()
                      ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                          <div className="lg:col-span-6 space-y-6">
                            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                              {item.summary}
                            </p>
                            {item.detailsList && (
                              <div className="space-y-3">
                                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-300">
                                  {isAr
                                    ? 'التفاصيل الكاملة والمنهجية:'
                                    : 'Complete Technical Details:'}
                                </h4>
                                {item.detailsList.map((dt, i) => (
                                  <div
                                    key={i}
                                    className="p-3.5 rounded-xl bg-white/5 border border-sky-300/20 flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                                  >
                                    <span className="w-5 h-5 rounded-full bg-sky-400/20 text-sky-300 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                                      {i + 1}
                                    </span>
                                    <span className="leading-relaxed">{dt}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-sky-300/30 bg-slate-950/90">
                            {item.renderDiagram && item.renderDiagram()}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Hide Button */}
                    <div className="mt-8 pt-6 border-t border-sky-300/20 flex justify-end">
                      <button
                        type="button"
                        onClick={handleCloseToMosaic}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-mono text-xs font-extrabold transition-all"
                      >
                        <X className="w-4 h-4" />
                        <span>
                          {isAr ? 'إخفاء والعودة لشبكة البطاقات' : 'Hide & Return to Card Grid'}
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MosaicStageGrid;
