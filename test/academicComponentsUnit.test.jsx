import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '../src/i18n'; // Ensure i18n is initialized
import { AcademicHubSection } from '../src/components/sections/AcademicHubSection';
import { ThesisMakeoverCompare } from '../src/components/sections/academic/ThesisMakeoverCompare';
import { SoutenanceLaptopMockup } from '../src/components/sections/academic/SoutenanceLaptopMockup';
import { AcademicServicesGrid } from '../src/components/sections/academic/AcademicServicesGrid';
import { AcademicEthicsBanner } from '../src/components/sections/academic/AcademicEthicsBanner';
import { AcademicCtaBanner } from '../src/components/sections/academic/AcademicCtaBanner';

describe('Academic Hub Dedicated Unit Tests', () => {
  describe('ThesisMakeoverCompare', () => {
    it('renders mode switch buttons for Split Compare, Raw Draft, and After', () => {
      render(<ThesisMakeoverCompare />);
      expect(screen.getByRole('button', { name: /split compare/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /raw draft/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /after/i })).toBeInTheDocument();
    });

    it('renders 4 hotspot annotations and displays their titles', () => {
      const { container } = render(<ThesisMakeoverCompare />);
      const buttons = container.querySelectorAll('button[aria-label]');
      expect(buttons.length).toBe(4);
      // Verify hotspot texts in the feature grid
      expect(screen.getAllByText(/Structural Heading Hierarchy/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Automated Indexing & Figures/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Unified APA \/ IEEE References/i).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(/Academic Proofreading & Terminology/i).length).toBeGreaterThanOrEqual(1);
    });

    it('toggles to Raw Draft view and After view when buttons clicked', () => {
      render(<ThesisMakeoverCompare />);
      const beforeBtn = screen.getByRole('button', { name: /raw draft/i });
      fireEvent.click(beforeBtn);
      expect(screen.getByText(/Study of WWTP facultative lagoon aeration/i)).toBeInTheDocument();

      const afterBtn = screen.getByRole('button', { name: /after/i });
      fireEvent.click(afterBtn);
      expect(screen.getByText(/Hydrodynamic Modeling and Dissolved Oxygen/i)).toBeInTheDocument();
    });
  });

  describe('SoutenanceLaptopMockup', () => {
    it('renders laptop chassis with presentation findings and research charts', () => {
      const { container } = render(<SoutenanceLaptopMockup />);
      expect(screen.getByText(/RESEARCH FINDINGS: WWTP OPTIMIZATION/i)).toBeInTheDocument();
      expect(screen.getByText('92.4%')).toBeInTheDocument();
      expect(screen.getByText('89.1%')).toBeInTheDocument();
      expect(screen.getByText('+28.5%')).toBeInTheDocument();
      expect(screen.getByText('4.8 mg/L')).toBeInTheDocument();
      expect(screen.getByText(/Eng. Mohamed Baatas/i)).toBeInTheDocument();
    });
  });

  describe('AcademicServicesGrid', () => {
    it('renders all 4 academic services with badges 01 through 04', () => {
      render(<AcademicServicesGrid />);
      expect(screen.getByText('01')).toBeInTheDocument();
      expect(screen.getByText('02')).toBeInTheDocument();
      expect(screen.getByText('03')).toBeInTheDocument();
      expect(screen.getByText('04')).toBeInTheDocument();

      expect(screen.getByText(/Academic Formatting & University Standards/i)).toBeInTheDocument();
      expect(screen.getByText(/Scientific Linguistic Proofreading/i)).toBeInTheDocument();
      expect(screen.getByText(/Reference Management & Indexing/i)).toBeInTheDocument();
      expect(screen.getByText(/Soutenance Defense Slide Decks/i)).toBeInTheDocument();
    });
  });

  describe('AcademicEthicsBanner', () => {
    it('renders academic integrity guarantee statement', () => {
      render(<AcademicEthicsBanner />);
      expect(screen.getByText(/ACADEMIC INTEGRITY GUARANTEE/i)).toBeInTheDocument();
      expect(screen.getByText(/Responsible Academic Accompaniment/i)).toBeInTheDocument();
      expect(screen.getByText(/Zero Plagiarism Policy/i)).toBeInTheDocument();
      expect(screen.getByText(/100% Originality Preserved/i)).toBeInTheDocument();
    });
  });

  describe('AcademicCtaBanner', () => {
    it('renders WhatsApp link with valid phone number and prefilled text', () => {
      render(<AcademicCtaBanner />);
      const whatsappLink = screen.getByRole('link', { name: /whatsapp/i });
      expect(whatsappLink).toHaveAttribute('href', expect.stringContaining('wa.me/213655748513'));

      const telegramLink = screen.getByRole('link', { name: /telegram/i });
      expect(telegramLink).toHaveAttribute('href', expect.stringContaining('t.me/mohamed_baatas'));
    });
  });

  describe('AcademicHubSection Master Section', () => {
    it('renders with id="academic-hub" and tab switcher', () => {
      const { container } = render(<AcademicHubSection />);
      const section = container.querySelector('#academic-hub');
      expect(section).toBeInTheDocument();

      // Tab buttons exist
      const makeoverTab = screen.getByRole('button', { name: /thesis makeover/i });
      const presTab = screen.getByRole('button', { name: /defense presentation/i });
      expect(makeoverTab).toBeInTheDocument();
      expect(presTab).toBeInTheDocument();

      // Switching tab to presentation renders laptop mockup
      fireEvent.click(presTab);
      expect(screen.getByText(/RESEARCH FINDINGS: WWTP OPTIMIZATION/i)).toBeInTheDocument();
    });
  });
});
