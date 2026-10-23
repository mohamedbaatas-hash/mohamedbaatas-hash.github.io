import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BlueprintCadre } from '../src/components/common/BlueprintCadre';
import { HeroSection } from '../src/components/sections/HeroSection';
import { SelectedWorksSection } from '../src/components/sections/SelectedWorksSection';
import { EngineeringPillarsSection } from '../src/components/sections/EngineeringPillarsSection';
import { InteractiveLabSection } from '../src/components/sections/InteractiveLabSection';
import { ContactSection } from '../src/components/sections/ContactSection';

describe('BlueprintCadre Component & Section Integration Unit Tests', () => {
  describe('BlueprintCadre Component Features', () => {
    it('renders 4 corner reticles with "+" symbol and pointer-events-none', () => {
      const { container } = render(
        <BlueprintCadre id="test-unit-cadre">
          <div>Cadre Child Content</div>
        </BlueprintCadre>
      );

      const reticles = container.querySelectorAll('.cadre-reticle');
      expect(reticles.length).toBe(4);
      reticles.forEach((reticle) => {
        expect(reticle.textContent?.trim()).toBe('+');
        expect(reticle.className).toContain('pointer-events-none');
        expect(reticle).toHaveAttribute('data-reticle', 'true');
      });
    });

    it('renders top and bottom measurement ruler ticks and telemetry labels', () => {
      const { container } = render(
        <BlueprintCadre
          id="cadre-ticks"
          cadreTag="UNIT_TEST_TAG"
          coordinates="LAT:36.75 / LON:3.05"
        >
          <div>Scale ticks test</div>
        </BlueprintCadre>
      );

      expect(container.querySelector('.cadre-scale-top')).toBeInTheDocument();
      expect(container.querySelector('.cadre-scale-bottom')).toBeInTheDocument();
      expect(screen.getByText('UNIT_TEST_TAG')).toBeInTheDocument();
      expect(screen.getByText('LAT:36.75 / LON:3.05')).toBeInTheDocument();
      expect(screen.getByText(/FLOW CONDUIT \/\/ PN16/i)).toBeInTheDocument();
    });

    it('renders optional header metadata with badgeNumber, title, and subtitle', () => {
      render(
        <BlueprintCadre
          badgeNumber="01"
          title="Hydroinformatics Architecture"
          subtitle="Precision Telemetry"
        >
          <div>Header content</div>
        </BlueprintCadre>
      );

      expect(screen.getByText('01')).toBeInTheDocument();
      expect(screen.getByText('Hydroinformatics Architecture')).toBeInTheDocument();
      expect(screen.getByText('Precision Telemetry')).toBeInTheDocument();
    });

    it('renders fluid pipeline SVG conduit with yellow junction valve nodes when showConduit is true', () => {
      const { container } = render(
        <BlueprintCadre showConduit={true} conduitPosition="left">
          <div>Conduit Content</div>
        </BlueprintCadre>
      );

      const channel = container.querySelector('.cadre-pipe-channel');
      expect(channel).toBeInTheDocument();
      expect(channel?.className).toContain('left-1');

      const svg = channel?.querySelector('svg');
      expect(svg).toBeInTheDocument();

      // Yellow junction valve nodes
      const circles = svg?.querySelectorAll('circle[fill="#f7b500"]');
      expect(circles?.length).toBeGreaterThanOrEqual(2);
    });

    it('supports right-aligned pipeline conduit position', () => {
      const { container } = render(
        <BlueprintCadre showConduit={true} conduitPosition="right">
          <div>Right Conduit Content</div>
        </BlueprintCadre>
      );

      const channel = container.querySelector('.cadre-pipe-channel');
      expect(channel).toBeInTheDocument();
      expect(channel?.className).toContain('right-1');
    });
  });

  describe('Section Integration with BlueprintCadre Framing', () => {
    it('verifies HeroSection is framed with BlueprintCadre', () => {
      const { container } = render(<HeroSection />);
      const hero = container.querySelector('#hero');
      expect(hero).toBeInTheDocument();
      expect(hero?.querySelectorAll('.cadre-reticle').length).toBe(4);
    });

    it('verifies SelectedWorksSection is framed with BlueprintCadre and numbered indicators', () => {
      const { container } = render(<SelectedWorksSection />);
      const works = container.querySelector('#selected-works');
      expect(works).toBeInTheDocument();
      expect(works?.querySelectorAll('.cadre-reticle').length).toBe(4);
      // Project numbered badges 01, 02, 03, 04
      expect(screen.getByText('01')).toBeInTheDocument();
      expect(screen.getByText('02')).toBeInTheDocument();
      expect(screen.getByText('03')).toBeInTheDocument();
      expect(screen.getByText('04')).toBeInTheDocument();
    });

    it('verifies EngineeringPillarsSection is framed with BlueprintCadre and pillar badges', () => {
      const { container } = render(<EngineeringPillarsSection />);
      const pillars = container.querySelector('#engineering-pillars');
      expect(pillars).toBeInTheDocument();
      expect(pillars?.querySelectorAll('.cadre-reticle').length).toBe(4);
    });

    it('verifies InteractiveLabSection is framed with BlueprintCadre and dark CAD testbed', () => {
      const { container } = render(<InteractiveLabSection />);
      const lab = container.querySelector('#interactive-lab');
      expect(lab).toBeInTheDocument();
      expect(lab?.querySelectorAll('.cadre-reticle').length).toBe(4);
    });

    it('verifies ContactSection is framed with BlueprintCadre and contains BottomFlowSystem', () => {
      const { container } = render(<ContactSection />);
      const contact = container.querySelector('#contact');
      expect(contact).toBeInTheDocument();
      expect(contact?.querySelectorAll('.cadre-reticle').length).toBe(4);
      // Contains bottom flow system SVG
      const waveSvg = contact?.querySelector('svg[viewBox="0 0 1200 60"]');
      expect(waveSvg).toBeInTheDocument();
    });
  });
});
