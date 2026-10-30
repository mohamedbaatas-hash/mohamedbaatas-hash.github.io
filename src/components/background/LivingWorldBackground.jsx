import React from 'react';

/**
 * LivingWorldBackground:
 * Recreates all 5 distinct illustrated worlds from the Figma "Space themed portfolio" template,
 * with smooth Smart-Animate parallax transitions as the user scrolls or switches sections:
 *
 * - SCENE 0 (Hero — Frames 1 & 5 in Figma):
 *   Deep Violet-Indigo Cosmos, Top-Left Planet with a long Comet Beam, layered Dark-Purple
 *   Horizon Mountains on Left & Right, Glowing Crimson-Magenta Sun rising in the Right Canyon,
 *   and the Giant Rotating Blue Earth at the bottom.
 *
 * - SCENE 1 (Hydraulic Studies — Frame 3 in Figma):
 *   Teal-to-Twilight Nebula Sky, Giant Glowing Cyan Planet on Top-Right, Warm Amber Moon on Left,
 *   and Giant Bioluminescent Mushroom / Coral Trees with glowing orange-gold ribs & spores on Left & Right!
 *
 * - SCENE 2 (Software & Tools — Frames 2 & 6 in Figma):
 *   Deep Abyssal Midnight-Teal Sky, Giant Misty Turquoise Planet on Left, Purple Orb on Right,
 *   and Towering Levitating Monolith Pillars / Tilted Sci-Fi Obelisks floating on Left & Right!
 *
 * - SCENE 3 (Trajectory & Skills — Frames 4 & 7 in Figma):
 *   Vibrant Violet-Pink Nebula Cloud, Giant Cratered Planet on Top-Left, Stepped Purple Canyon Cliffs,
 *   and an Orbiting Diagonal Asteroid Belt on Top-Right!
 *
 * - SCENE 4 (Contact & CV — Frame 8 in Figma):
 *   Midnight Crystalline Valley, Giant Hovering Sci-Fi Orbital Ship at Top Center casting a wide
 *   Volumetric Cyan-Violet Light Beam over the Contact Card, framed by sharp Blue Mountain Spires!
 */

const SCENE_CONFIGS = [
  {
    // Scene 0: Cosmic Violet Horizon (Figma Frame 1 & 5)
    skyGradient: 'from-[#140732] via-[#210D4A] to-[#121D52]',
    nebulaGlow: 'rgba(139, 92, 246, 0.32)',
    horizonGlow: 'rgba(0, 229, 255, 0.45)',
    planetRotation: 0,
    planetScale: 1,
    planetTranslateY: 20,
    planetOpacity: 1,
  },
  {
    // Scene 1: Bioluminescent Mushroom / Coral World (Figma Frame 3)
    skyGradient: 'from-[#1E3B4B] via-[#262A52] to-[#171838]',
    nebulaGlow: 'rgba(45, 212, 191, 0.28)',
    horizonGlow: 'rgba(245, 158, 11, 0.32)',
    planetRotation: 58,
    planetScale: 1.03,
    planetTranslateY: 95,
    planetOpacity: 1,
  },
  {
    // Scene 2: Floating Monolith Pillars & Turquoise Moon (Figma Frame 2 & 6)
    skyGradient: 'from-[#051224] via-[#0A233E] to-[#083554]',
    nebulaGlow: 'rgba(6, 182, 212, 0.30)',
    horizonGlow: 'rgba(56, 189, 248, 0.45)',
    planetRotation: 116,
    planetScale: 1.04,
    planetTranslateY: 105,
    planetOpacity: 1,
  },
  {
    // Scene 3: Royal Violet Nebula & Asteroid Belt (Figma Frame 4 & 7)
    skyGradient: 'from-[#1C0B3B] via-[#341463] to-[#1D0B3D]',
    nebulaGlow: 'rgba(217, 70, 239, 0.30)',
    horizonGlow: 'rgba(56, 189, 248, 0.42)',
    planetRotation: 174,
    planetScale: 1.05,
    planetTranslateY: 95,
    planetOpacity: 1,
  },
  {
    // Scene 4: Orbital Ship Tractor Beam & Crystal Valley (Figma Frame 8)
    skyGradient: 'from-[#04071A] via-[#0B153A] to-[#102352]',
    nebulaGlow: 'rgba(99, 102, 241, 0.30)',
    horizonGlow: 'rgba(56, 189, 248, 0.35)',
    planetRotation: 230,
    planetScale: 0.92,
    planetTranslateY: 220,
    planetOpacity: 0.55,
  },
];

const STARS = Array.from({ length: 55 }).map((_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 98}%`,
  top: `${(i * 23 + 7) % 88}%`,
  size: (i % 3) + 1.2,
  delay: `${(i % 7) * 0.6}s`,
}));

export function LivingWorldBackground({ activeScene = 0, scrollProgress = 0 }) {
  const safeIndex = Math.min(Math.max(activeScene, 0), SCENE_CONFIGS.length - 1);
  const cfg = SCENE_CONFIGS[safeIndex];
  const totalPlanetRotation = cfg.planetRotation + scrollProgress * 40;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b ${cfg.skyGradient} transition-colors duration-1000`}
      aria-hidden="true"
    >
      {/* Subtle Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      {/* Ambient Sky & Horizon Glows */}
      <div
        className="absolute -top-24 left-1/3 w-[650px] h-[650px] rounded-full blur-[140px] transition-all duration-1000"
        style={{ background: cfg.nebulaGlow }}
      />
      <div
        className="absolute bottom-[-160px] left-1/2 -translate-x-1/2 w-[920px] h-[480px] rounded-full blur-[130px] transition-all duration-1000"
        style={{ background: cfg.horizonGlow }}
      />

      {/* Twinkling Starfield */}
      <div className="absolute inset-0">
        {STARS.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              boxShadow: star.size > 2 ? '0 0 8px rgba(125, 211, 252, 0.9)' : 'none',
            }}
          />
        ))}
      </div>

      {/* =====================================================================
       * SCENE 0 ARTWORK: Deep Violet Cosmos, Comet Beam & Red Sun Canyon (Figma 1 & 5)
       * ===================================================================== */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          safeIndex === 0
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 -translate-y-16 scale-105'
        }`}
      >
        <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="s0CometBeam" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="s0PurplePlanet" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="60%" stopColor="#4c1d95" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </radialGradient>
            <radialGradient id="s0CrimsonSun" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fda4af" />
              <stop offset="45%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#881337" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Top-Left Purple Planet & Diagonal Comet Trail (Exactly like Figma Frame 1) */}
          <circle cx="240" cy="145" r="46" fill="url(#s0PurplePlanet)" />
          <polygon points="240,145 248,155 30,310 15,290" fill="url(#s0CometBeam)" />
          <circle cx="240" cy="145" r="8" fill="#f5d0fe" className="blur-[2px]" />

          {/* Left Horizon Cosmic Mountain Silhouette */}
          <path
            d="M-40,900 L-40,560 L65,490 L135,590 L220,520 L315,660 L420,760 L-40,900 Z"
            fill="#12072B"
            stroke="rgba(168, 85, 247, 0.25)"
            strokeWidth="1.5"
          />
          <path
            d="M-20,900 L-20,630 L95,575 L180,670 L280,615 L370,780 Z"
            fill="#0A041A"
          />

          {/* Right Horizon Canyon + Glowing Crimson/Magenta Rising Sun */}
          <circle cx="1310" cy="485" r="75" fill="url(#s0CrimsonSun)" />
          <circle cx="1310" cy="485" r="32" fill="#fb7185" opacity="0.85" />
          <path
            d="M1480,900 L1480,340 L1350,470 L1275,540 L1185,480 L1090,650 L980,780 L1480,900 Z"
            fill="#140830"
            stroke="rgba(244, 63, 94, 0.3)"
            strokeWidth="1.5"
          />
          <path
            d="M1480,900 L1480,520 L1320,575 L1215,680 L1110,630 L1020,820 Z"
            fill="#090318"
          />
        </svg>
      </div>

      {/* =====================================================================
       * SCENE 1 ARTWORK: Bioluminescent Giant Mushrooms / Coral Trees (Figma Frame 3)
       * ===================================================================== */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          safeIndex === 1
            ? 'opacity-100 translate-y-0 scale-100'
            : safeIndex < 1
            ? 'opacity-0 translate-y-24 scale-95'
            : 'opacity-0 -translate-y-24 scale-105'
        }`}
      >
        <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="s1TealPlanet" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#99f6e4" />
              <stop offset="55%" stopColor="#0d9488" />
              <stop offset="100%" stopColor="#111827" />
            </radialGradient>
            <radialGradient id="s1WarmMoon" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fde68a" />
              <stop offset="55%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#31102F" />
            </radialGradient>
            <linearGradient id="s1CapGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>
          </defs>

          {/* Top-Right Giant Glowing Teal Planet & Left Amber Moon */}
          <circle cx="1310" cy="130" r="155" fill="url(#s1TealPlanet)" opacity="0.65" />
          <circle cx="230" cy="180" r="48" fill="url(#s1WarmMoon)" opacity="0.8" />

          {/* LEFT GIANT BIOLUMINESCENT MUSHROOM / CORAL CANOPY */}
          <g className="animate-float-slow">
            {/* Curved Stalks */}
            <path d="M110,900 Q150,650 220,460 L255,470 Q195,660 175,900 Z" fill="#1e1b4b" />
            <path d="M35,900 Q65,720 115,590 L140,598 Q95,730 80,900 Z" fill="#1e1b4b" />
            {/* Main Giant Cap */}
            <path
              d="M70,490 C90,355 370,340 400,475 C310,495 160,505 70,490 Z"
              fill="url(#s1CapGrad)"
              stroke="#fbbf24"
              strokeWidth="2"
            />
            {/* Glowing Bioluminescent Stripes on Cap */}
            <path d="M135,478 Q235,380 238,378" fill="none" stroke="#fde047" strokeWidth="3" opacity="0.75" />
            <path d="M190,482 Q240,390 250,378" fill="none" stroke="#38bdf8" strokeWidth="2.5" opacity="0.8" />
            <path d="M295,480 Q265,390 255,380" fill="none" stroke="#fde047" strokeWidth="3" opacity="0.75" />
            {/* Secondary Smaller Mushroom Cap */}
            <path
              d="M10,605 C25,525 215,520 235,595 C165,610 75,615 10,605 Z"
              fill="url(#s1CapGrad)"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            {/* Glowing Spores */}
            <circle cx="280" cy="540" r="4" fill="#fde047" />
            <circle cx="330" cy="515" r="3" fill="#38bdf8" />
            <circle cx="195" cy="560" r="3.5" fill="#fde047" />
          </g>

          {/* RIGHT GIANT BIOLUMINESCENT MUSHROOM / CORAL CANOPY */}
          <g className="animate-float-reverse">
            <path d="M1310,900 Q1270,660 1205,490 L1175,500 Q1230,670 1255,900 Z" fill="#1e1b4b" />
            <path
              d="M1045,505 C1070,380 1335,375 1370,495 C1270,515 1135,520 1045,505 Z"
              fill="url(#s1CapGrad)"
              stroke="#fbbf24"
              strokeWidth="2"
            />
            <path d="M1130,495 Q1205,405 1210,398" fill="none" stroke="#fde047" strokeWidth="3" opacity="0.75" />
            <path d="M1215,500 Q1215,405 1215,398" fill="none" stroke="#38bdf8" strokeWidth="2.5" opacity="0.8" />
            <path d="M1290,495 Q1230,405 1220,398" fill="none" stroke="#fde047" strokeWidth="3" opacity="0.75" />
            <circle cx="1120" cy="555" r="4" fill="#38bdf8" />
            <circle cx="1080" cy="530" r="3" fill="#fde047" />
          </g>
        </svg>
      </div>

      {/* =====================================================================
       * SCENE 2 ARTWORK: Floating Monolith Pillars & Turquoise Planet (Figma 2 & 6)
       * ===================================================================== */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          safeIndex === 2
            ? 'opacity-100 translate-y-0 scale-100'
            : safeIndex < 2
            ? 'opacity-0 translate-y-24 scale-95'
            : 'opacity-0 -translate-y-24 scale-105'
        }`}
      >
        <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="s2TurquoisePlanet" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="55%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#082f49" />
            </radialGradient>
            <linearGradient id="s2PillarGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#090d16" />
            </linearGradient>
          </defs>

          {/* Giant Misty Turquoise Planet on Left & Purple Moon on Right */}
          <circle cx="220" cy="250" r="135" fill="url(#s2TurquoisePlanet)" opacity="0.55" />
          <circle cx="1220" cy="190" r="55" fill="#4f46e5" opacity="0.45" />

          {/* LEFT LEVITATING MONOLITH PILLARS (Like Figma Frame 2) */}
          <g className="animate-float-slow">
            {/* Tall Tilted Obelisk 1 */}
            <polygon
              points="75,260 135,245 110,640 45,650"
              fill="url(#s2PillarGrad)"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            {/* Glowing Cyan Vein on Obelisk */}
            <line x1="105" y1="280" x2="82" y2="610" stroke="#00e5ff" strokeWidth="2" strokeDasharray="18 10" opacity="0.7" />

            {/* Mid Floating Pillar 2 */}
            <polygon
              points="170,390 220,380 200,680 150,690"
              fill="url(#s2PillarGrad)"
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth="1.2"
            />
            {/* Small Levitating Monolith Cubes */}
            <rect x="135" y="190" width="22" height="32" transform="rotate(-14 135 190)" fill="#0f172a" stroke="#38bdf8" />
            <rect x="235" y="320" width="18" height="26" transform="rotate(18 235 320)" fill="#0f172a" stroke="#38bdf8" />
          </g>

          {/* RIGHT LEVITATING MONOLITH PILLARS */}
          <g className="animate-float-reverse">
            <polygon
              points="1305,250 1370,270 1395,660 1330,645"
              fill="url(#s2PillarGrad)"
              stroke="#38bdf8"
              strokeWidth="1.5"
            />
            <line x1="1338" y1="285" x2="1360" y2="615" stroke="#00e5ff" strokeWidth="2" strokeDasharray="18 10" opacity="0.7" />

            <polygon
              points="1210,380 1260,395 1280,690 1230,680"
              fill="url(#s2PillarGrad)"
              stroke="rgba(56, 189, 248, 0.45)"
              strokeWidth="1.2"
            />
            <rect x="1265" y="195" width="24" height="34" transform="rotate(15 1265 195)" fill="#0f172a" stroke="#38bdf8" />
            <rect x="1175" y="310" width="16" height="24" transform="rotate(-12 1175 310)" fill="#0f172a" stroke="#38bdf8" />
          </g>
        </svg>
      </div>

      {/* =====================================================================
       * SCENE 3 ARTWORK: Violet Nebula, Cratered Planet & Asteroid Belt (Figma 4 & 7)
       * ===================================================================== */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          safeIndex === 3
            ? 'opacity-100 translate-y-0 scale-100'
            : safeIndex < 3
            ? 'opacity-0 translate-y-24 scale-95'
            : 'opacity-0 -translate-y-24 scale-105'
        }`}
      >
        <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="s3VioletPlanet" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="50%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#1e1b4b" />
            </radialGradient>
            <radialGradient id="s3PinkNebula" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.4" />
              <stop offset="55%" stopColor="#a855f7" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#3b0764" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center Glowing Lavender-Pink Nebula Cloud */}
          <ellipse cx="720" cy="360" rx="520" ry="220" fill="url(#s3PinkNebula)" />

          {/* Top-Left Giant Cratered Planet */}
          <circle cx="150" cy="160" r="145" fill="url(#s3VioletPlanet)" opacity="0.75" />
          <ellipse cx="185" cy="130" rx="22" ry="14" fill="rgba(30,27,75,0.45)" transform="rotate(-20 185 130)" />
          <ellipse cx="120" cy="210" rx="30" ry="18" fill="rgba(30,27,75,0.45)" transform="rotate(15 120 210)" />

          {/* Top-Right Orbiting Asteroid Belt Stream (Rounded Craggy Space Boulders) */}
          <g className="animate-float-slow">
            {[
              { cx: 1050, cy: 130, rx: 38, ry: 26, rot: -18 },
              { cx: 1160, cy: 185, rx: 48, ry: 32, rot: 12 },
              { cx: 1275, cy: 240, rx: 34, ry: 22, rot: -25 },
              { cx: 960, cy: 95, rx: 24, ry: 16, rot: 8 },
              { cx: 1350, cy: 160, rx: 28, ry: 20, rot: 20 },
            ].map((ast, i) => (
              <g key={i} transform={`rotate(${ast.rot} ${ast.cx} ${ast.cy})`}>
                <ellipse
                  cx={ast.cx}
                  cy={ast.cy}
                  rx={ast.rx}
                  ry={ast.ry}
                  fill="#2e1065"
                  stroke="#a855f7"
                  strokeWidth="1.5"
                />
                <circle cx={ast.cx - ast.rx * 0.3} cy={ast.cy - 4} r={ast.ry * 0.25} fill="#1e1b4b" />
                <circle cx={ast.cx + ast.rx * 0.25} cy={ast.cy + 5} r={ast.ry * 0.18} fill="#1e1b4b" />
              </g>
            ))}
          </g>

          {/* Left & Right Stepped Violet Canyon Cliffs */}
          <path
            d="M-20,900 L-20,470 L95,495 L145,585 L240,605 L310,740 L-20,900 Z"
            fill="#190836"
            stroke="rgba(192, 132, 252, 0.3)"
            strokeWidth="1.5"
          />
          <path
            d="M1460,900 L1460,450 L1335,480 L1280,575 L1185,600 L1110,740 L1460,900 Z"
            fill="#190836"
            stroke="rgba(192, 132, 252, 0.3)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* =====================================================================
       * SCENE 4 ARTWORK: Orbital Ship Tractor Beam & Crystal Valley (Figma Frame 8)
       * ===================================================================== */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          safeIndex === 4
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-24 scale-95'
        }`}
      >
        <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="s4TractorBeam" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.40" />
              <stop offset="45%" stopColor="#818cf8" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="s4ShipHull" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="50%" stopColor="#312e81" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Volumetric Tractor Light Beam Cast Down from Top Center */}
          <polygon points="560,115 880,115 1180,880 260,880" fill="url(#s4TractorBeam)" />

          {/* Hovering Sci-Fi Orbital Ship / Saucer at Top Center (Like Figma Frame 8) */}
          <g className="animate-float-slow">
            <ellipse
              cx="720"
              cy="105"
              rx="220"
              ry="34"
              fill="url(#s4ShipHull)"
              stroke="#38bdf8"
              strokeWidth="2"
            />
            <ellipse
              cx="720"
              cy="92"
              rx="110"
              ry="24"
              fill="#1e293b"
              stroke="#818cf8"
              strokeWidth="1.5"
            />
            {/* Glowing Portal Lights Under the Ship */}
            {[-140, -70, 0, 70, 140].map((dx, i) => (
              <circle
                key={i}
                cx={720 + dx}
                cy="110"
                r={dx === 0 ? '9' : '5'}
                fill="#00e5ff"
              />
            ))}
          </g>

          {/* Towering Dark-Blue Crystalline Peaks & Stalagmite Mountains on Left & Right */}
          <path
            d="M-30,900 L-30,420 L55,580 L115,390 L215,690 L285,560 L370,900 Z"
            fill="#07102D"
            stroke="rgba(56, 189, 248, 0.35)"
            strokeWidth="1.5"
          />
          <path
            d="M1470,900 L1470,400 L1380,590 L1315,375 L1210,680 L1145,550 L1060,900 Z"
            fill="#07102D"
            stroke="rgba(56, 189, 248, 0.35)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* =====================================================================
       * GIANT ROTATING BLUE HYDRO-PLANET AT THE BOTTOM
       * ===================================================================== */}
      <div
        className="absolute left-1/2 -bottom-[440px] sm:-bottom-[540px] -translate-x-1/2 w-[760px] h-[760px] sm:w-[980px] sm:h-[980px] transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          transform: `translate3d(-50%, ${cfg.planetTranslateY}px, 0) scale(${cfg.planetScale})`,
          opacity: cfg.planetOpacity,
        }}
      >
        {/* Outer Atmospheric Cyan Halo */}
        <div
          className="absolute -inset-6 rounded-full blur-2xl opacity-75"
          style={{
            background:
              'radial-gradient(circle, rgba(0, 229, 255, 0.5) 0%, rgba(2, 132, 199, 0.22) 58%, transparent 72%)',
          }}
        />

        {/* Rotating Planet SVG */}
        <div
          className="w-full h-full transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `rotate(${totalPlanetRotation}deg)`,
          }}
        >
          <svg viewBox="0 0 800 800" className="w-full h-full overflow-visible">
            <defs>
              <radialGradient id="hydroPlanetSphere" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="35%" stopColor="#0284c7" />
                <stop offset="72%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#082f49" />
              </radialGradient>
              <clipPath id="planetClip">
                <circle cx="400" cy="400" r="360" />
              </clipPath>
            </defs>

            <circle
              cx="400"
              cy="400"
              r="360"
              fill="url(#hydroPlanetSphere)"
              stroke="#7dd3fc"
              strokeWidth="3.5"
            />

            <g clipPath="url(#planetClip)">
              <circle cx="400" cy="400" r="280" fill="none" stroke="rgba(255,255,255,0.14)" strokeDasharray="6 6" strokeWidth="1.5" />
              <circle cx="400" cy="400" r="190" fill="none" stroke="rgba(255,255,255,0.14)" strokeDasharray="6 6" strokeWidth="1.5" />
              <line x1="40" y1="400" x2="760" y2="400" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="400" y1="40" x2="400" y2="760" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

              <path
                d="M240,110 C310,85 390,115 430,165 C470,215 420,270 355,280 C290,290 215,250 195,195 C175,140 190,125 240,110 Z"
                fill="rgba(56, 189, 248, 0.32)"
                stroke="rgba(186, 230, 253, 0.55)"
                strokeWidth="2"
              />
              <path
                d="M520,175 C595,160 665,220 680,300 C695,380 630,435 565,415 C500,395 475,320 485,255 C495,190 480,185 520,175 Z"
                fill="rgba(56, 189, 248, 0.28)"
                stroke="rgba(186, 230, 253, 0.45)"
                strokeWidth="2"
              />
              <path
                d="M160,390 C235,365 315,415 335,495 C355,575 290,645 215,630 C140,615 105,530 120,455 C135,380 120,405 160,390 Z"
                fill="rgba(56, 189, 248, 0.30)"
                stroke="rgba(186, 230, 253, 0.5)"
                strokeWidth="2"
              />
              <path
                d="M445,495 C525,475 605,535 595,610 C585,685 495,715 425,685 C355,655 375,565 405,525 Z"
                fill="rgba(56, 189, 248, 0.28)"
                stroke="rgba(186, 230, 253, 0.45)"
                strokeWidth="2"
              />

              <path
                d="M150,230 Q380,140 620,240"
                fill="none"
                stroke="rgba(255, 255, 255, 0.5)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M190,340 Q420,440 650,330"
                fill="none"
                stroke="rgba(186, 230, 253, 0.4)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </g>

            <circle
              cx="400"
              cy="400"
              r="378"
              fill="none"
              stroke="rgba(125, 211, 252, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="12 8"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LivingWorldBackground;
