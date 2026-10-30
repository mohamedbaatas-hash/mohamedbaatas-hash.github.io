import React from 'react';

/**
 * LivingWorldBackground — Authentic Figma MCP Assets Integration
 * Directly renders the original vector scenes and rotating Planet Earth exported
 * via Figma MCP from file `fMk9MoRMFZHoRvDmZaXczr` ("Space themed portfolio"):
 *
 * - Scene 0 (`/assets/figma/scene-0-hero.svg` — Node 9:4155):
 *   Cosmic Violet Horizon, Rising Crimson Sun, Crescent Moon, Diagonal Comet & Canyon Cliffs.
 * - Scene 1 (`/assets/figma/scene-1-mushrooms.svg` — Node 11:10965):
 *   Teal-to-Twilight Nebula, Giant Cyan Planet & Bioluminescent Giant Mushroom Trees.
 * - Scene 2 (`/assets/figma/scene-2-pillars.svg` — Node 11:13057):
 *   Deep Abyssal Sky, Giant Misty Turquoise Planet & Levitating Monolith Obelisk Pillars.
 * - Scene 3 (`/assets/figma/scene-3-asteroids.svg` — Node 11:20817):
 *   Royal Violet-Pink Nebula, Cratered Planet, Stepped Cliffs & Orbiting Asteroid Belt.
 * - Scene 4 (`/assets/figma/scene-4-ufo.svg` — Node 21:4059):
 *   Midnight Crystal Valley & Hovering UFO Spaceship casting a Volumetric Tractor Beam.
 * - Rotating Earth (`/assets/figma/earth.svg` — Node 21:7330):
 *   Authentic Figma rotating blue planet at the bottom horizon (without the robot icon).
 */

const SCENE_CONFIGS = [
  {
    id: 0,
    name: 'Cosmic Horizon & Crimson Sun',
    src: '/assets/figma/scene-0-hero.svg',
    skyFallback: '#12082B',
    planetRotation: 0,
    planetScale: 1.0,
    planetTranslateY: 64,
    planetOpacity: 1,
  },
  {
    id: 1,
    name: 'Bioluminescent Mushroom World',
    src: '/assets/figma/scene-1-mushrooms.svg',
    skyFallback: '#1B2D42',
    planetRotation: -65,
    planetScale: 1.02,
    planetTranslateY: 73,
    planetOpacity: 1,
  },
  {
    id: 2,
    name: 'Levitating Monolith Pillars',
    src: '/assets/figma/scene-2-pillars.svg',
    skyFallback: '#071B30',
    planetRotation: -130,
    planetScale: 1.03,
    planetTranslateY: 74,
    planetOpacity: 1,
  },
  {
    id: 3,
    name: 'Violet Nebula & Asteroid Belt',
    src: '/assets/figma/scene-3-asteroids.svg',
    skyFallback: '#1D0B3B',
    planetRotation: -195,
    planetScale: 1.02,
    planetTranslateY: 73,
    planetOpacity: 1,
  },
  {
    id: 4,
    name: 'Orbital UFO Tractor Beam',
    src: '/assets/figma/scene-4-ufo.svg',
    skyFallback: '#060B22',
    planetRotation: -260,
    planetScale: 0.92,
    planetTranslateY: 105,
    planetOpacity: 0,
  },
];

const TWINKLE_STARS = Array.from({ length: 42 }).map((_, i) => ({
  id: i,
  left: `${(i * 37 + 13) % 98}%`,
  top: `${(i * 23 + 7) % 85}%`,
  size: (i % 3) + 1.2,
  delay: `${(i % 7) * 0.65}s`,
}));

export function LivingWorldBackground({ activeScene = 0, scrollProgress = 0 }) {
  const safeIndex = Math.min(Math.max(activeScene, 0), SCENE_CONFIGS.length - 1);
  const cfg = SCENE_CONFIGS[safeIndex];
  const totalPlanetRotation = cfg.planetRotation - scrollProgress * 45;

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
                : `scale(${offset > 0 ? 1.06 : 0.96}) translateY(${offset * 28}px)`,
              zIndex: isActive ? 2 : 1,
            }}
          >
            <img
              src={scene.src}
              alt=""
              loading={idx === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover object-center"
              draggable={false}
            />
          </div>
        );
      })}

      {/* ===================================================================
          2. AUTHENTIC FIGMA STARFIELD OVERLAY (`foreground-rocks.svg` — Node 9:2)
          =================================================================== */}
      <div className="absolute inset-0 z-[3] opacity-75 mix-blend-screen">
        <img
          src="/assets/figma/foreground-rocks.svg"
          alt=""
          className="w-full h-full object-cover object-top"
          draggable={false}
        />
      </div>

      {/* ===================================================================
          3. DYNAMIC TWINKLING STARS & SHOOTING COMETS
          =================================================================== */}
      <div className="absolute inset-0 z-[4]">
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
          4. AUTHENTIC FIGMA ROTATING PLANET EARTH (`/assets/figma/earth.svg`)
          Node 21:7330 (1327x1333) — Exported directly from Figma without the
          robot/astronaut icon. Rotates smoothly across sections and lowers out
          of view in Scene 4 (UFO Contact screen) just like Frame 8 in Figma.
          =================================================================== */}
      <div
        className="absolute left-1/2 bottom-0 z-[5] w-[118vw] sm:w-[96vw] md:w-[82vw] max-w-[1280px] aspect-[1327/1333] transition-all duration-1000 ease-out will-change-transform"
        style={{
          opacity: cfg.planetOpacity,
          transform: `translate(-50%, ${cfg.planetTranslateY}%) scale(${cfg.planetScale})`,
        }}
      >
        {/* Atmospheric Outer Halo behind Earth */}
        <div
          className="absolute inset-[6%] rounded-full blur-3xl opacity-45 transition-all duration-1000"
          style={{
            background:
              'radial-gradient(circle, rgba(56, 189, 248, 0.55) 0%, rgba(14, 165, 233, 0.18) 55%, transparent 75%)',
          }}
        />

        {/* Rotating Figma Earth Vector */}
        <img
          src="/assets/figma/earth.svg"
          alt=""
          className="w-full h-full object-contain transition-transform duration-1000 ease-out will-change-transform drop-shadow-[0_-18px_48px_rgba(14,165,233,0.28)]"
          style={{
            transform: `rotate(${totalPlanetRotation}deg)`,
          }}
          draggable={false}
        />
      </div>

      {/* ===================================================================
          5. SUBTLE READABILITY VIGNETTE
          The Figma SVGs already include their native 0.6 frame opacity over
          #090909, so only a whisper-light edge vignette is applied.
          =================================================================== */}
      <div
        className="absolute inset-0 z-[6]"
        style={{
          background:
            'radial-gradient(ellipse 75% 65% at 50% 46%, rgba(6, 11, 28, 0.08) 0%, rgba(6, 11, 28, 0.04) 65%, rgba(4, 7, 20, 0.22) 100%)',
        }}
      />
    </div>
  );
}
export default LivingWorldBackground;
