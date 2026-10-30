import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { LivingWorldBackground } from './components/background/LivingWorldBackground';
import { HeroSection } from './components/sections/HeroSection';
import { HydraulicStudiesSection } from './components/sections/HydraulicStudiesSection';
import { SoftwareSolutionsSection } from './components/sections/SoftwareSolutionsSection';
import { TrajectorySection } from './components/sections/TrajectorySection';
import { ContactSection } from './components/sections/ContactSection';

const SCENE_IDS = ['hero', 'hydraulic-studies', 'fluidev-software', 'trajectory', 'contact'];

export default function App() {
  const [activeScene, setActiveScene] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);
      setScrollProgress(progress);

      // Determine which scene is currently in the center of the viewport
      const viewportCenter = scrollY + window.innerHeight * 0.45;
      let detectedScene = 0;
      SCENE_IDS.forEach((id, idx) => {
        const el = document.getElementById(id);
        if (el && viewportCenter >= el.offsetTop) {
          detectedScene = idx;
        }
      });
      setActiveScene(detectedScene);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-sky-400 selection:text-slate-950">
      {/* 1. Fixed Living Space-to-Ocean Background with Smart-Animate Scene Transitions */}
      <LivingWorldBackground activeScene={activeScene} scrollProgress={scrollProgress} />

      {/* 2. Floating Glass Header */}
      <Header activeScene={activeScene} />

      {/* 3. Right-Side Scene Indicator Dots (Quick Scene Jump) */}
      <div className="fixed right-4 rtl:right-auto rtl:left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {SCENE_IDS.map((id, idx) => {
          const active = activeScene === idx;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                active
                  ? 'bg-sky-400 border-white scale-125 shadow-[0_0_12px_rgba(56,189,248,0.9)]'
                  : 'bg-white/20 border-white/40 hover:bg-white/50'
              }`}
              title={`Scene 0${idx + 1}`}
            />
          );
        })}
      </div>

      {/* 4. Five Sequential Living Scenes */}
      <main className="relative z-10 w-full pt-16">
        <HeroSection />
        <HydraulicStudiesSection />
        <SoftwareSolutionsSection />
        <TrajectorySection />
        <ContactSection />
      </main>
    </div>
  );
}
