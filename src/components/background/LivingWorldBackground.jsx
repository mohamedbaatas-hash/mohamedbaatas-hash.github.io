import React from 'react';

/**
 * LivingWorldBackground — Authentic Figma MCP Native Renders + Vector Earth
 * Directly renders the 5 full-resolution (1728x1117) scenes and rotating Planet Earth
 * extracted via Figma MCP from file `fMk9MoRMFZHoRvDmZaXczr` ("Space themed portfolio"):
 *
 * - Scene 0 (`/assets/figma/scene-0-hero.png` — Node 9:4155):
 *   Cosmic Violet-Blue Horizon, Shooting Comets & Glowing Craters + Rotating Earth.
 * - Scene 1 (`/assets/figma/scene-1-mushrooms.png` — Node 116:4):
 *   Bioluminescent Giant Mushroom Trees, Hover-Pods & Spore Trails.
 * - Scene 2 (`/assets/figma/scene-2-pillars.png` — Node 116:2):
 *   Levitating Monolith Pillars, Twin Crescent Moons & Space Rover with Headlights.
 * - Scene 3 (`/assets/figma/scene-3-asteroids.png` — Node 116:3):
 *   Royal Violet Nebula, Cratered Planet, Stepped Cliffs & Orbiting Asteroid Belt.
 * - Scene 4 (`/assets/figma/scene-4-ufo.png` — Node 21:4059):
 *   Abyssal Space-Ocean Valley & Giant Bioluminescent Cosmic Whale under Light Rays.
 * - Rotating Earth (`/assets/figma/earth.svg` — Node 21:7330):
 *   Authentic Figma rotating blue/gold planet at the bottom horizon (without the robot icon).
 */

export const SCENE_CONFIGS = [
  {
    id: 0,
    name: 'Cosmic Horizon',
    src: '/assets/figma/scene-0-hero.jpg',
    skyFallback: '#080720',
    planetRotation: 0,
    planetScale: 1.0,
    planetTranslateY: 65,
    planetOpacity: 1,
  },
  {
    id: 1,
    name: 'Bioluminescent Mushrooms',
    src: '/assets/figma/scene-1-mushrooms.jpg',
    skyFallback: '#182631',
    planetRotation: -65,
    planetScale: 0.96,
    planetTranslateY: 84,
    planetOpacity: 0.92,
  },
  {
    id: 2,
    name: 'Monoliths & Space Rover',
    src: '/assets/figma/scene-2-pillars.jpg',
    skyFallback: '#071426',
    planetRotation: -130,
    planetScale: 0.95,
    planetTranslateY: 86,
    planetOpacity: 0.88,
  },
  {
    id: 3,
    name: 'Nebula & Asteroid Belt',
    src: '/assets/figma/scene-3-asteroids.jpg',
    skyFallback: '#160930',
    planetRotation: -195,
    planetScale: 0.96,
    planetTranslateY: 84,
    planetOpacity: 0.92,
  },
  {
    id: 4,
    name: 'Cosmic Bioluminescent Whale',
    src: '/assets/figma/scene-4-ufo.jpg',
    skyFallback: '#05091E',
    planetRotation: -260,
    planetScale: 0.9,
    planetTranslateY: 105,
    planetOpacity: 0,
  },
];

const TWINKLE_STARS = Array.from({ length: 36 }).map((_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 98}%`,
  top: `${(i * 23 + 7) % 85}%`,
  size: (i % 3) + 1.2,
  delay: `${(i % 7) * 0.65}s`,
}));

export function LivingWorldBackground({ activeScene = 0, scrollProgress = 0 }) {
  const safeIndex = Math.min(Math.max(activeScene, 0), SCENE_CONFIGS.length - 1);
  const cfg = SCENE_CONFIGS[safeIndex];
  const totalPlanetRotation = cfg.planetRotation - scrollProgress * 55;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none transition-colors duration-1000"
      style={{ backgroundColor: cfg.skyFallback }}
      aria-hidden="true"
    >
      {/* ===================================================================
          1. FULL-BLEED AUTHENTIC FIGMA SCENE LAYERS (0..4)
          Smart-Animate crossfade + subtle depth zoom on section change
          =================================================================== */}
      {SCENE_CONFIGS.map((scene, idx) => {
        const isActive = idx === safeIndex;
        const offset = idx - safeIndex;
        return (
          <div
            key={scene.id}
            className="absolute inset-0 transition-all duration-1000 ease-out will-change-transform"
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive
                ? 'scale(1) translateY(0px)'
                : `scale(${offset > 0 ? 1.05 : 0.96}) translateY(${offset * 24}px)`,
              zIndex: isActive ? 2 : 1,
            }}
          >
            <img
              src={scene.src}
              alt=""
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </div>
        );
      })}

      {/* ===================================================================
          2. DYNAMIC TWINKLING STARS & SHOOTING COMETS
          =================================================================== */}
      <div className="absolute inset-0 z-[3]">
        {TWINKLE_STARS.map((star) => (
          <span
            key={star.id}
            className="star-particle"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
            }}
          />
        ))}
        <div
          className="shooting-star"
          style={{ top: '14%', left: '78%', animationDelay: '1.2s' }}
        />
        <div
          className="shooting-star"
          style={{ top: '28%', left: '44%', animationDelay: '6.4s' }}
        />
      </div>

      {/* ===================================================================
          3. AUTHENTIC FIGMA ROTATING PLANET EARTH (`/assets/figma/earth.svg`)
          Node 21:7330 (1327x1333) — Exported directly from Figma without the
          robot/astronaut icon and without the grey background circle.
          Prominent in Scene 0 (Hero), lowered in Scenes 1-3 so the Space Rover
          and Giant Mushrooms remain fully visible, and hidden in Scene 4 (Whale).
          =================================================================== */}
      <div
        className="absolute left-1/2 bottom-0 z-[4] w-[114vw] sm:w-[92vw] md:w-[78vw] max-w-[1220px] aspect-[1327/1333] transition-all duration-1000 ease-out will-change-transform"
        style={{
          opacity: cfg.planetOpacity,
          transform: `translate(-50%, ${cfg.planetTranslateY}%) scale(${cfg.planetScale})`,
        }}
      >
        {/* Atmospheric Outer Halo behind Earth */}
        <div
          className="absolute inset-[6%] rounded-full blur-3xl opacity-40 transition-all duration-1000"
          style={{
            background:
              'radial-gradient(circle, rgba(56, 189, 248, 0.52) 0%, rgba(14, 165, 233, 0.16) 55%, transparent 75%)',
          }}
        />

        {/* Rotating Figma Earth Vector */}
        <img
          src="/assets/figma/earth.svg"
          alt=""
          className="w-full h-full object-contain transition-transform duration-1000 ease-out will-change-transform drop-shadow-[0_-16px_42px_rgba(14,165,233,0.28)]"
          style={{
            transform: `rotate(${totalPlanetRotation}deg)`,
          }}
          draggable={false}
        />
      </div>

      {/* ===================================================================
          4. WHISPER-LIGHT READABILITY VIGNETTE
          Keeps the Figma artwork vivid while ensuring foreground glass cards
          remain legible.
          =================================================================== */}
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 45%, rgba(4, 8, 22, 0.05) 0%, rgba(4, 8, 22, 0.18) 100%)',
        }}
      />
    </div>
  );
}
export default LivingWorldBackground;
