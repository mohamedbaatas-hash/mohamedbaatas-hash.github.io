import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { SelectedWorksSection } from './components/sections/SelectedWorksSection';
import { InteractiveLabSection } from './components/sections/InteractiveLabSection';
import { EngineeringPillarsSection } from './components/sections/EngineeringPillarsSection';
import { AcademicHubSection } from './components/sections/AcademicHubSection';
import { TrajectorySection } from './components/sections/TrajectorySection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-[var(--text-primary)] font-sans selection:bg-fluid-blue selection:text-white flex flex-col transition-colors duration-200">
      {/* Navigation Header */}
      <Header />

      {/* Main Narrative Flow */}
      <main className="flex-1 w-full">
        <HeroSection />
        <SelectedWorksSection />
        <InteractiveLabSection />
        <EngineeringPillarsSection />
        <AcademicHubSection />
        <TrajectorySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
