# Test Infrastructure & 4-Tier Architecture Specification

## Overview

The test infrastructure for the FluiDev portfolio and computational engines (`mohamed-baatas-hydroinformatics-portfolio`) is powered by **Vitest 3.0.5** with **jsdom 26.0.0** and **@testing-library/react 16.2.0** / **@testing-library/jest-dom 6.6.3**.

The test harness guarantees deterministic execution, zero network flakiness, and complete functional validation of:
1. Pure mathematical hydraulic network solving (EPANET 2.2 Hazen-Williams and Newton-Raphson global gradient).
2. Numerical SCADA physics and ISA-5.1 industrial telemetry alarm evaluating.
3. FluiDev Dual Theme Engine (Blueprint Navy Dark Mode / Graph Paper Light Mode) and localStorage persistence.
4. Official FluiDev SVG vector branding, geometric paths, color tokens, and header navigation.
5. Interactive Academic Hub (thesis before/after makeover comparison, Soutenance laptop presentation, 4 core services).
6. Blueprint Cadre technical framing (corner reticles `+`, measurement ticks, fluid pipeline conduits, dark CAD workstation containment).

---

## Test Runner Configuration

### `vite.config.js`
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.js'
  }
});
```

### `test/setup.js`
- Imports `@testing-library/jest-dom` matchers for DOM assertions.
- Initializes `i18next` with internationalized resources (`en`, `ar`, `fr`).
- Polyfills JSDOM environment gaps:
  - `window.matchMedia` (supporting `prefers-color-scheme` testing).
  - `global.ResizeObserver` and `global.IntersectionObserver`.
  - `window.scrollTo`.

---

## 4-Tier Testing Methodology

The test suite is structured into 4 distinct verification tiers:

### Tier 1: Feature Coverage (Unit / Pure Math / Isolated Components)
Verifies core modules, numerical formulas, and components in isolation without external coupling.
- **Hydraulics**: Analytical Hazen-Williams friction resistance $R$ calculation in SI units, friction head loss $h_f = R \cdot \text{sign}(Q) \cdot |Q|^{1.852}$, analytical Jacobian derivative $dh_f/dQ$, and nominal 7-node network mass balance.
- **SCADA**: ISA-5.1 sensor alarm evaluation across nominal baseline, pump tripping (`P-101`), storm surge inflow (`FIT-101`), industrial COD spike (`AIT-102`), lagoon cooling (`TIT-201`), methane buildup (`AIT-201`), dissolved oxygen septicity (`AIT-301`), and tank levels (`LIT-501`).
- **Theming**: `useTheme` hook state initialization, toggle function, direct setter, and `ThemeToggle` button rendering.
- **Branding**: FluiDev SVG logo geometry: structural F path (`M48 34...`), fluid conduit D path (`M93 34...`), yellow cyber-physical node circle (`cx=119 cy=100 r=10`), and 200x200 icon container.
- **Academic Hub**: Before/After document comparison, 4 makeover annotations (`تنسيق العناوين`, `فهرسة وترقيم`, `مراجع APA / IEEE`, `مراجعة لغوية`), and Soutenance laptop mockup with dynamic chart bars.
- **Cadre Framing**: BlueprintCadre reticle layout with 4 corner `+` crosshairs and pointer-events-none styling.

### Tier 2: Boundary & Corner Cases (Extreme, Singular, & Edge Conditions)
Verifies robust handling under extreme conditions, singular points, and invalid inputs.
- **Hydraulics**: Zero flow ($Q=0$), ultra-small flow linearization ($|Q| < 10^{-5}$) to prevent gradient singularities, zero demand equilibrium, high peak scaling (2.5x), 0% throttled pipe isolation ($R = 10^{12}$), booster pump deactivation, and ruptured pipe leak injection (+22.5 L/s).
- **SCADA**: Exact numerical threshold boundary comparisons (`flow >= 35000`, `cod >= 900`, `temp < 10`, `methane > 15`, `do < 2.0`, `tankLevel >= 92` and `<= 25`), fuel exhaustion clamping (`Math.max(0, generatorFuel)`), and pollution decay relaxation without undershooting nominal baseline.
- **Theming**: Corrupted/unrecognized `localStorage` strings fall back safely to `'dark'`, invalid `setTheme` arguments are rejected, rapid successive toggles prevent race conditions, and `Storage.prototype.setItem` quota exceptions are handled gracefully.
- **Branding**: Comprehensive token contrast across all 4 variants (`dark`, `light`, `icon`, `mono`).
- **Academic Hub**: Verification of all 4 service features and scientific ethics pledge.
- **Cadre Framing**: Empty children and custom CSS class injection.

### Tier 3: Cross-Feature Combinations (Systemic Integration & Multi-Module Interaction)
Tests interactions between two or more sub-systems.
- **Hydraulics**: Simultaneous pump outage, burst pipe, and peak demand maintaining numerical convergence without divergence; pipe throttling triggering flow loop redistribution.
- **SCADA**: Catastrophic simultaneous multi-hazard events aggregating multiple ISA-5.1 alarms with mixed critical/warning severity; biological lagoon cooling cascading into effluent quality permit violation.
- **Theming**: Mutual exclusion of `document.documentElement.classList` (`dark` strictly removes `light` and vice versa), synchronizing `data-theme` attribute, cross-tab synchronization via `StorageEvent`, and system media query responsiveness.
- **Branding**: Theme switching synchronization with logo contrast palettes; progressive compatibility with standalone `FluiDevLogo.jsx`.
- **Academic Hub**: Progressive integration with top-level `AcademicHubSection.jsx`.
- **Cadre Framing**: Canvas simulator workstation isolation protecting EPANET and SCADA diagram viewports from background light mode bleaching.

### Tier 4: Real-World Application Scenarios (Operational Lifecycles & User Workflows)
End-to-end simulations of actual user and industrial operational lifecycles.
- **Hydraulics**: 24-hour municipal diurnal demand cycle tracking morning and evening peaks, ensuring solver stability and physical pressure conservation across all 24 hours.
- **SCADA**: Dynamic shock load spill event and progressive biological recovery over 60 timesteps with automatic alarm deactivation once effluent drops below thresholds.
- **Theming**: Full user click cycle on `ThemeToggle`: verifies class flip, icon transition from Moon to Sun, accessible aria-label update, and storage persistence.
- **Branding**: Dynamic multi-lingual header switching across English, Arabic, and French, verifying document `dir="rtl"` / `dir="ltr"` and brand lockup translation.
- **Academic Hub**: End-to-end Before-to-After thesis transformation inspection and direct WhatsApp / Telegram consultation flow.
- **Cadre Framing**: Full section wrapping maintaining interactive clickability and visual blueprint framing.

---

## Test Suite Inventory

| Test File | Test Suite Focus | Test Count | Status |
|:---|:---|:---:|:---:|
| `test/hydraulicEngine.test.js` | EPANET 2.2 Hazen-Williams head loss, Newton-Raphson nodal solver | 19 | PASS |
| `test/scadaPhysics.test.js` | ISA-5.1 telemetry alarms, diurnal cycles, biology removal, fuel | 20 | PASS |
| `test/themeEngine.test.js` | Dual Theme Engine (`useTheme`, `ThemeToggle`, localStorage, classList) | 14 | PASS |
| `test/brandingAndLogo.test.jsx` | FluiDev SVG vector geometry, variants, Header branding lockup | 10 | PASS |
| `test/academicHub.test.jsx` | Makeover carousel, Before/After document, laptop mockup, 4 services | 11 | PASS |
| `test/cadreFraming.test.jsx` | Blueprint Cadre reticles, conduit connectors, simulator CAD isolation | 7 | PASS |
| **TOTAL** | **Full 4-Tier Regression & Functional Suite** | **81** | **100% PASS** |

---

## Execution Command

```powershell
npm run test
```
All tests execute headlessly and complete in ~5 seconds with 100% passing results.
