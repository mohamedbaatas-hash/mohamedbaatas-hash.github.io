import React from 'react';

export function CollageBackground({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* 1. CUT PAPER SHEET #1 (Top-Right Massive Torn Graph Paper with Red Margin Line) */}
      <div
        className="absolute -top-16 -right-12 w-[340px] sm:w-[520px] lg:w-[680px] h-[450px] sm:h-[620px] lg:h-[780px] opacity-25 dark:opacity-20 transform rotate-2 origin-top-right shadow-2xl"
        style={{
          backgroundColor: '#f8f9fa',
          backgroundImage: `
            linear-gradient(rgba(0, 50, 160, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 50, 160, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          clipPath: `polygon(
            0 0,
            93% 0,
            98% 6%,
            92% 14%,
            99% 22%,
            93% 31%,
            100% 40%,
            92% 51%,
            99% 62%,
            91% 72%,
            98% 83%,
            90% 91%,
            99% 100%,
            0 100%
          )`,
        }}
      >
        {/* Red Margin Line on the torn paper */}
        <div className="absolute top-0 bottom-0 right-14 w-0.5 bg-red-600/70" />
        {/* Pinned Yellow Tape on the paper */}
        <div className="absolute top-8 left-14 px-4 py-1.5 bg-[#F7B500] text-[#07133F] text-xs font-mono font-bold uppercase tracking-widest transform -rotate-6 shadow-md">
          FLUIDEV // SPEC.SHEET.01
        </div>
      </div>

      {/* 2. CUT PAPER SHEET #2 (Bottom-Left Massive Torn Paper Sheet) */}
      <div
        className="absolute -bottom-20 -left-12 w-[300px] sm:w-[480px] lg:w-[620px] h-[380px] sm:h-[540px] lg:h-[680px] opacity-20 dark:opacity-15 transform -rotate-4 origin-bottom-left shadow-2xl"
        style={{
          backgroundColor: '#f8f9fa',
          backgroundImage: `
            linear-gradient(rgba(0, 50, 160, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 50, 160, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '18px 18px',
          clipPath: `polygon(
            0 0,
            100% 0,
            92% 10%,
            99% 22%,
            91% 34%,
            100% 46%,
            92% 58%,
            100% 70%,
            91% 82%,
            98% 92%,
            93% 100%,
            0 100%
          )`,
        }}
      >
        {/* Red Margin Line */}
        <div className="absolute top-0 bottom-0 left-12 w-0.5 bg-red-600/60" />
        {/* Pinned Tape */}
        <div className="absolute bottom-10 right-10 px-4 py-1.5 bg-[#F7B500] text-[#07133F] text-xs font-mono font-bold uppercase tracking-widest transform rotate-3 shadow-md">
          0101 / FLOW.DATA
        </div>
      </div>

      {/* 3. DIAGONAL BLUE CUT STRIPED CROSSOVER (Top-Center) */}
      <div
        className="absolute top-0 left-1/4 sm:left-1/3 w-80 sm:w-[500px] lg:w-[680px] h-32 sm:h-44 opacity-25 dark:opacity-35"
        style={{
          backgroundColor: '#001db5',
          backgroundImage: `repeating-linear-gradient(
            135deg,
            rgba(0, 91, 255, 0.8) 0 2px,
            transparent 2px 10px
          )`,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 60%)',
          filter: 'drop-shadow(-5px 5px 0 rgba(0, 229, 255, 0.25))',
        }}
      />

      {/* 4. SECONDARY REVOLVING CONCENTRIC CIRCLE (Top-Left Background) */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] lg:w-[560px] lg:h-[560px] opacity-20 dark:opacity-25 pointer-events-none">
        <svg
          className="w-full h-full animate-spin-slow origin-center"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="175" stroke="#00e5ff" strokeWidth="1" strokeDasharray="5 7" />
          <circle cx="200" cy="200" r="115" stroke="#001db5" className="dark:stroke-[#005bff]" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="55" stroke="#00e5ff" strokeWidth="0.8" strokeDasharray="2 4" />
          <circle cx="375" cy="200" r="6" fill="#f7b500" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="200" cy="85" r="5" fill="#00e5ff" stroke="#07133f" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 5. ELECTRONIC CIRCUIT TRACES & GOLDEN SOLDER NODES */}
      <svg
        className="absolute top-16 left-1/3 w-[500px] h-[320px] opacity-25 dark:opacity-35"
        viewBox="0 0 420 300"
        fill="none"
      >
        <path
          d="M0 60 H140 L180 100 H280 L320 60 H420"
          stroke="#00e5ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40 0 V40 L80 80 V180 L120 220 H340 L380 260 V300"
          stroke="#001db5"
          className="dark:stroke-[#005bff]"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M180 100 V160 L220 200 H300"
          stroke="#00e5ff"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />

        {/* Golden Solder Nodes */}
        <circle cx="140" cy="60" r="5.5" fill="#f7b500" stroke="#001db5" strokeWidth="2" />
        <circle cx="280" cy="100" r="5.5" fill="#f7b500" stroke="#00e5ff" strokeWidth="2" />
        <circle cx="80" cy="80" r="4.5" fill="#f7b500" stroke="#001db5" strokeWidth="1.5" />
        <circle cx="340" cy="220" r="4.5" fill="#f7b500" stroke="#00e5ff" strokeWidth="1.5" />

        {/* Binary Stamps */}
        <text
          x="150"
          y="48"
          fill="#00e5ff"
          fontFamily="Barlow Condensed, monospace"
          fontSize="12"
          fontWeight="800"
          letterSpacing="0.12em"
        >
          01 001 1010
        </text>
        <text
          x="130"
          y="212"
          fill="#001db5"
          className="dark:fill-[#00e5ff]"
          fontFamily="Barlow Condensed, monospace"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          0101 / FLOW.DATA
        </text>
      </svg>

      {/* 6. GIANT TRANSLUCENT NUMBER "01" STAMP */}
      <div
        className="absolute top-16 right-12 sm:right-32 lg:right-48 text-transparent font-black font-condensed text-[160px] sm:text-[260px] lg:text-[340px] leading-none opacity-20 dark:opacity-25 pointer-events-none select-none"
        style={{
          WebkitTextStroke: '2.5px rgba(0, 229, 255, 0.45)',
        }}
      >
        01
      </div>

      {/* 7. HYDRAULIC STREAM FLOW (Clean bottom line) */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-12 opacity-30 dark:opacity-40"
        preserveAspectRatio="none"
        viewBox="0 0 1200 40"
        fill="none"
      >
        <path
          d="M0 20 C200 35 400 5 600 20 S1000 35 1200 20"
          stroke="#001db5"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0 20 C200 35 400 5 600 20 S1000 35 1200 20"
          stroke="#00e5ff"
          strokeWidth="1.2"
          strokeDasharray="12 8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default CollageBackground;
