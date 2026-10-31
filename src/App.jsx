import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Layers } from 'lucide-react';
import { Header } from './components/layout/Header';
import { LivingWorldBackground, SCENE_CONFIGS } from './components/background/LivingWorldBackground';
import { HeroSection } from './components/sections/HeroSection';
import { HydraulicStudiesSection } from './components/sections/HydraulicStudiesSection';
import { SoftwareSolutionsSection } from './components/sections/SoftwareSolutionsSection';
import { TrajectorySection } from './components/sections/TrajectorySection';
import { ContactSection } from './components/sections/ContactSection';

const SCENE_IDS = ['hero', 'hydraulic-studies', 'fluidev-software', 'trajectory', 'contact'];

export default function App() {
  const [activeScene, setActiveScene] = useState(0);
  const [manualScene, setManualScene] = useState(null);
  const [hideContent, setHideContent] = useState(false);
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

  const displayedScene = manualScene !== null ? manualScene : activeScene;
  const currentSceneConfig = SCENE_CONFIGS[displayedScene] || SCENE_CONFIGS[0];

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-sky-400 selection:text-slate-950">
      {/* 1. Fixed Living Space-to-Ocean Background with Authentic Figma Scenes */}
      <LivingWorldBackground activeScene={displayedScene} scrollProgress={scrollProgress} />

      {/* 2. Floating Glass Header */}
      <Header activeScene={activeScene} />

      {/* 3. Right-Side Scene Indicator Dots (Quick Section Jump) */}
      <div className="fixed right-4 rtl:right-auto rtl:left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {SCENE_IDS.map((id, idx) => {
          const active = displayedScene === idx;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setManualScene(null)}
              className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                active
                  ? 'bg-sky-400 border-white scale-125 shadow-[0_0_12px_rgba(56,189,248,0.9)]'
                  : 'bg-white/20 border-white/40 hover:bg-white/50'
              }`}
              title={SCENE_CONFIGS[idx]?.name || `Scene 0${idx + 1}`}
            />
          );
        })}
      </div>

      {/* 4. Floating Figma Scene Switcher & Artwork Preview Pill */}
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-xl border border-sky-400/30 shadow-[0_8px_30px_rgba(0,0,0,0.55)]">
        <span className="hidden sm:inline-flex items-center gap-1.5 px-2 text-[11px] font-medium text-sky-300/90 border-r border-white/10">
          <Layers className="w-3.5 h-3.5 text-sky-400" />
          <span>{currentSceneConfig.name}</span>
        </span>

        <div className="flex items-center gap-1">
          {SCENE_CONFIGS.map((scene, idx) => {
            const isSelected = displayedScene === idx;
            return (
              <button
                key={scene.id}
                type="button"
                onClick={() => {
                  setManualScene(idx);
                }}
                className={`w-6 h-6 rounded-full text-[11px] font-bold transition-all duration-300 ${
                  isSelected
                    ? 'bg-sky-400 text-slate-950 shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-105'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
                title={scene.name}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {manualScene !== null && (
          <button
            type="button"
            onClick={() => setManualScene(null)}
            className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 transition-colors"
            title="Auto-sync scene with scroll"
          >
            Auto
          </button>
        )}

        <button
          type="button"
          onClick={() => setHideContent((prev) => !prev)}
          className={`p-1.5 rounded-full transition-colors ${
            hideContent
              ? 'bg-amber-400 text-slate-950 shadow-[0_0_12px_rgba(251,191,36,0.8)]'
              : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
          }`}
          title={hideContent ? 'Show Portfolio Cards' : 'Inspect Full Figma Background'}
        >
          {hideContent ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* 5. Five Sequential Living Sections */}
      <main
        className={`relative z-10 w-full pt-16 transition-opacity duration-500 ${
          hideContent ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <HeroSection />
        <HydraulicStudiesSection />
        <SoftwareSolutionsSection />
        <TrajectorySection />
        <ContactSection />
      </main>
    </div>
  );
}
