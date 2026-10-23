import React from 'react';

/**
 * BlueprintCadre: A precision engineering drafting frame component.
 * Features:
 * - 4 Corner Reticles with '+' crosshairs and cyan/cobalt drop shadows
 * - Measurement scale ruler markings with millimeter ticks and metric annotations
 * - Fluid pipeline conduits with Energy Yellow (#F7B500) junction valve nodes
 * - Strict pointer-events-none on all decorative overlays to ensure unhindered interaction
 */
export function BlueprintCadre({
  children,
  id,
  sectionId,
  className = '',
  title,
  subtitle,
  badgeNumber,
  cadreTag,
  coordinates = 'LAT:36.75 / LON:3.05',
  showConduit = false,
  conduitPosition = 'left',
  flowActive = true,
  ...rest
}) {
  const containerId = id || sectionId;

  return (
    <div
      id={containerId}
      className={`relative border border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200 ${className}`}
      {...rest}
    >
      {/* 4 Corner Reticles (+) */}
      <span
        data-reticle="true"
        aria-hidden="true"
        className="cadre-reticle cadre-reticle-tl absolute -top-2.5 -left-2.5 w-5 h-5 flex items-center justify-center font-mono font-bold text-sm select-none pointer-events-none text-fluid-blue dark:text-fluid-cyan drop-shadow-[0_0_6px_rgba(0,229,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(0,229,255,0.7)] z-20"
      >
        +
      </span>
      <span
        data-reticle="true"
        aria-hidden="true"
        className="cadre-reticle cadre-reticle-tr absolute -top-2.5 -right-2.5 w-5 h-5 flex items-center justify-center font-mono font-bold text-sm select-none pointer-events-none text-fluid-blue dark:text-fluid-cyan drop-shadow-[0_0_6px_rgba(0,229,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(0,229,255,0.7)] z-20"
      >
        +
      </span>
      <span
        data-reticle="true"
        aria-hidden="true"
        className="cadre-reticle cadre-reticle-bl absolute -bottom-2.5 -left-2.5 w-5 h-5 flex items-center justify-center font-mono font-bold text-sm select-none pointer-events-none text-fluid-blue dark:text-fluid-cyan drop-shadow-[0_0_6px_rgba(0,229,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(0,229,255,0.7)] z-20"
      >
        +
      </span>
      <span
        data-reticle="true"
        aria-hidden="true"
        className="cadre-reticle cadre-reticle-br absolute -bottom-2.5 -right-2.5 w-5 h-5 flex items-center justify-center font-mono font-bold text-sm select-none pointer-events-none text-fluid-blue dark:text-fluid-cyan drop-shadow-[0_0_6px_rgba(0,229,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(0,229,255,0.7)] z-20"
      >
        +
      </span>

      {/* Top Measurement Scale Ticks */}
      <div
        className="cadre-scale cadre-scale-top absolute top-0 left-6 right-6 h-3 flex items-center justify-between pointer-events-none overflow-hidden select-none opacity-40 dark:opacity-30 z-20"
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={`top-tick-${i}`}
              className={`block w-[1px] bg-slate-700 dark:bg-cyan-400 ${
                i % 4 === 0 ? 'h-2.5' : 'h-1'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          {cadreTag && (
            <span className="cadre-tag font-condensed text-[9px] uppercase tracking-wider text-slate-600 dark:text-cyan-400">
              {cadreTag}
            </span>
          )}
          {coordinates && (
            <span className="cadre-coords font-mono text-[9px] text-slate-500 dark:text-slate-400">
              {coordinates}
            </span>
          )}
        </div>
      </div>

      {/* Optional Cadre Header Metadata Bar */}
      {(badgeNumber || title) && (
        <div className="relative z-10 px-6 pt-4 pb-2 flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 text-xs font-mono">
          <div className="flex items-center gap-2">
            {badgeNumber && (
              <span className="px-2 py-0.5 rounded bg-fluid-blue/10 dark:bg-fluid-cyan/10 border border-fluid-blue/30 dark:border-fluid-cyan/30 text-fluid-blue dark:text-fluid-cyan font-condensed font-bold">
                {badgeNumber}
              </span>
            )}
            {title && (
              <span className="font-title font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                {title}
              </span>
            )}
          </div>
          {subtitle && (
            <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] hidden sm:inline">
              {subtitle}
            </span>
          )}
        </div>
      )}

      {/* Fluid Pipeline Conduit Connector */}
      {showConduit && (
        <div
          className={`cadre-pipe-channel absolute top-0 bottom-0 pointer-events-none z-20 ${
            conduitPosition === 'right' ? 'right-1 sm:right-3' : 'left-1 sm:left-3'
          }`}
          aria-hidden="true"
        >
          <svg
            className="h-full w-7 overflow-visible pointer-events-none"
            viewBox="0 0 28 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Outer Pipe Shell */}
            <line
              x1="14"
              y1="0"
              x2="14"
              y2="600"
              stroke="rgba(0, 29, 181, 0.18)"
              strokeWidth="8"
              className="dark:stroke-cyan-950/40"
            />
            {/* Fluid Core Conduit */}
            <line
              x1="14"
              y1="0"
              x2="14"
              y2="600"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              className="dark:stroke-[#00e5ff] stroke-[#005bff]"
            />
            {/* Top Valve Junction Node */}
            <circle
              cx="14"
              cy="60"
              r="5.5"
              fill="#f7b500"
              stroke="#001db5"
              strokeWidth="2"
              className="dark:stroke-[#07133f]"
            />
            {/* Mid Valve Junction Node with Crosshairs */}
            <g transform="translate(14, 300)">
              <circle
                r="7"
                fill="#f7b500"
                stroke="#001db5"
                strokeWidth="2"
                className="dark:stroke-[#07133f]"
              />
              <circle r="3" fill="#00e5ff" />
              <path
                d="M-9 0H9M0-9V9"
                stroke="#07133f"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
            {/* Bottom Valve Junction Node */}
            <circle
              cx="14"
              cy="540"
              r="5.5"
              fill="#f7b500"
              stroke="#001db5"
              strokeWidth="2"
              className="dark:stroke-[#07133f]"
            />
          </svg>
        </div>
      )}

      {/* Main Section Content Wrapper */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* Bottom Measurement Scale Ticks */}
      <div
        className="cadre-scale cadre-scale-bottom absolute bottom-0 left-6 right-6 h-3 flex items-center justify-between pointer-events-none overflow-hidden select-none opacity-40 dark:opacity-30 z-20"
        aria-hidden="true"
      >
        <span className="cadre-scale-lbl font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          FLOW CONDUIT // PN16
        </span>
        <div className="flex items-center gap-1.5 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={`bottom-tick-${i}`}
              className={`block w-[1px] bg-slate-700 dark:bg-cyan-400 ${
                i % 4 === 0 ? 'h-2.5' : 'h-1'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlueprintCadre;
