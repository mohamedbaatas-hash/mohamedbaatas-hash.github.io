import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { FreelanceSection } from './components/sections/FreelanceSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';
import { ScadaPlantSimulator } from './components/simulator/scada/ScadaPlantSimulator';
import { EpanetSimulator } from './components/simulator/epanet/EpanetSimulator';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-slate-100 font-sans selection:bg-cobalt-600 selection:text-white flex flex-col">
      {/* Telemetry Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <HeroSection />
        <CaseStudiesSection />
        <ScadaPlantSimulator />
        <EpanetSimulator />
        <SkillsSection />
        <FreelanceSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Engineering Footer */}
      <Footer />
    </div>
  );
}
