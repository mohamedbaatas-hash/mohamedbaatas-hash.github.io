import React from 'react';

export function CircuitBackground({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* Circuit Trace SVG Layer - Top Right */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 opacity-20 dark:opacity-30"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M400 60 H280 L230 110 H120 L80 150 H0"
          stroke="#00e5ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M400 120 H310 L270 160 H180 L140 200 H50"
          stroke="#001db5"
          className="dark:stroke-[#005bff]"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M360 0 V70 L320 110 V220 L280 260 H200"
          stroke="#00e5ff"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        {/* Golden Solder Nodes */}
        <circle cx="280" cy="60" r="4.5" fill="#f7b500" stroke="#001db5" strokeWidth="2" />
        <circle cx="120" cy="110" r="4.5" fill="#f7b500" stroke="#00e5ff" strokeWidth="2" />
        <circle cx="270" cy="160" r="4" fill="#f7b500" stroke="#001db5" strokeWidth="1.5" />
        <circle cx="320" cy="110" r="4" fill="#f7b500" stroke="#00e5ff" strokeWidth="1.5" />

        {/* Binary Floating Stamp */}
        <text
          x="190"
          y="102"
          fill="#00e5ff"
          fontFamily="Barlow Condensed, monospace"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.1em"
        >
          01 001 1010
        </text>
        <text
          x="210"
          y="252"
          fill="#001db5"
          className="dark:fill-[#00e5ff]"
          fontFamily="Barlow Condensed, monospace"
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          0101 / FLOW.DATA
        </text>
      </svg>

      {/* Circuit Trace SVG Layer - Bottom Left */}
      <svg
        className="absolute bottom-0 left-0 w-96 h-96 opacity-15 dark:opacity-25"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M0 340 H120 L170 290 H280 L320 250 H400"
          stroke="#00e5ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40 400 V330 L80 290 V180 L120 140 H200"
          stroke="#001db5"
          className="dark:stroke-[#005bff]"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
        {/* Golden Solder Nodes */}
        <circle cx="120" cy="340" r="4.5" fill="#f7b500" stroke="#001db5" strokeWidth="2" />
        <circle cx="280" cy="290" r="4.5" fill="#f7b500" stroke="#00e5ff" strokeWidth="2" />
        <circle cx="80" cy="290" r="4" fill="#f7b500" stroke="#00e5ff" strokeWidth="1.5" />

        {/* Binary Floating Stamp */}
        <text
          x="130"
          y="332"
          fill="#00e5ff"
          fontFamily="Barlow Condensed, monospace"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.1em"
        >
          01 · 10 · 11
        </text>
        <text
          x="90"
          y="172"
          fill="#001db5"
          className="dark:fill-[#00e5ff]"
          fontFamily="Barlow Condensed, monospace"
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          1100 1010 // HYDR.SYS
        </text>
      </svg>
    </div>
  );
}
