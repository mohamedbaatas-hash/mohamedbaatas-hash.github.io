import React from 'react';

/**
 * BlueprintCadre: Swiss Architectural & Precision Grid Container (Geist / Linear style).
 * Uses exposed 1px structural hairlines, corner intersection crosshairs,
 * and a clean technical index bar without noisy cartoon pipes.
 */
export function BlueprintCadre({
  children,
  id,
  sectionId,
  className = '',
  indexNumber,
  cadreTag,
  coordinates = '34.8500° N, 5.7300° E',
  scale = 'SCALE 1:100',
  noTopBorder = false,
  ...rest
}) {
  const containerId = id || sectionId;

  return (
    <section
      id={containerId}
      className={`relative w-full ${noTopBorder ? '' : 'border-t border-slate-200/90 dark:border-slate-800/90'} ${className}`}
      {...rest}
    >
      <div className="max-w-[1320px] mx-auto border-x border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-[#0B101E]/85 backdrop-blur-sm relative">
        
        {/* 4 Precision 1px Corner Crosshairs */}
        <svg
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-[5px] -left-[5px] w-[9px] h-[9px] text-slate-400 dark:text-slate-600 z-20"
          viewBox="0 0 9 9"
        >
          <path d="M4.5 0V9M0 4.5H9" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-[5px] -right-[5px] w-[9px] h-[9px] text-slate-400 dark:text-slate-600 z-20"
          viewBox="0 0 9 9"
        >
          <path d="M4.5 0V9M0 4.5H9" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          aria-hidden="true"
          className="pointer-events-none select-none absolute -bottom-[5px] -left-[5px] w-[9px] h-[9px] text-slate-400 dark:text-slate-600 z-20"
          viewBox="0 0 9 9"
        >
          <path d="M4.5 0V9M0 4.5H9" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          aria-hidden="true"
          className="pointer-events-none select-none absolute -bottom-[5px] -right-[5px] w-[9px] h-[9px] text-slate-400 dark:text-slate-600 z-20"
          viewBox="0 0 9 9"
        >
          <path d="M4.5 0V9M0 4.5H9" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Top Technical Index Ribbon */}
        {cadreTag && (
          <div className="px-4 sm:px-8 py-2.5 border-b border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-[#080C17]/80 flex items-center justify-between gap-4 font-mono text-[11px] tracking-wider uppercase text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-sky-400 inline-block" />
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {cadreTag}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[10px] text-slate-400 dark:text-slate-500 tabular-nums">
              <span>{coordinates}</span>
              <span>/</span>
              <span>{scale}</span>
            </div>
          </div>
        )}

        {/* Section Body */}
        <div className="relative z-10 w-full">
          {children}
        </div>
      </div>
    </section>
  );
}

export default BlueprintCadre;
