# Project: Mohamed Baatas Hydroinformatics Portfolio

## Architecture
Modern, high-performance, modular React 18/19 application configured with Vite, Tailwind CSS, Lucide Icons, and Vitest for automated testing.
The UI adheres strictly to the "Industrial Precision" engineering design system:
- **Base Backgrounds**: Deep Slate (`#0F172A`), Obsidian Charcoal (`#020617`), Elevated Slate (`#1E293B`), Border Gray (`#334155`).
- **Primary Accent**: Technical Cobalt Blue (`#2563EB` / `#3B82F6`), Telemetry Cyan (`#06B6D4`), Safety Amber (`#F59E0B`), Emergency Red (`#EF4444`), Clean Emerald (`#10B981`).
- **Typography**: Inter / Plus Jakarta Sans for UI text, JetBrains Mono / Roboto Mono for all sensor telemetry, numerical tables, and code snippets with `tabular-nums`.
- **Strict Anti-Patterns**: Zero neon glows, zero custom trailing cursors, zero artificial preloaders, zero decorative WebGL/Three.js canvases, zero skill progress bars.
- **Modularity**: Strict separation of concerns:
  - `src/data/`: Static data structures and domain copy (`portfolioData.js`, `scadaData.js`, `epanetData.js`).
  - `src/utils/`: Pure deterministic mathematical models (`scadaPhysics.js`, `hydraulicEngine.js`).
  - `src/hooks/`: Reactive simulation lifecycle hooks (`useScadaEngine.js`, `useEpanetEngine.js`).
  - `src/components/`: Modular presentation components (< 240 lines per file; App.jsx 36 lines).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | App Scaffold & Build Tooling | React + Vite + Tailwind CSS + Lucide + PostCSS + Vitest configuration | M1 | REQ-01 |
| 2 | Industrial Precision Design System | Color tokens, monospace typography, grid layout, zero anti-patterns | M1 | REQ-02, NEG-01..04 |
| 3 | Navigation & Telemetry Header | Responsive header with status indicator, system time, navigation links | M2 | REQ-02 |
| 4 | Hero Section | Hydroinformatics headline, domain telemetry cards, resume CTA, status badge | M2 | REQ-04 |
| 5 | Engineering Case Studies | Smart Water Plant, GIS Hydraulic Modeling, WaterFit Mobile App | M2 | REQ-05 |
| 6 | Technical Competencies Matrix | Domain badges (Hydraulics, Software, IoT) - strictly no progress bars | M2 | REQ-06, NEG-05 |
| 7 | Freelance Tech Solutions | Maktabi POS, Al-Quds Gym Manager, custom data visualizers, consulting | M2 | REQ-07 |
| 8 | Experience & Leadership Timeline | Bernoulli Club President, Huawei Intern, B.S. & M.S. Academic Degrees | M2 | REQ-08 |
| 9 | Contact & Resume Export | Clean engineering contact form, copyable telemetry channels, socials | M2 | REQ-10 |
| 10 | Interactive SCADA Simulator | 6-stage potabilization plant, PID/manual pump & valve controls, telemetry, alarms | M3 | REQ-09, Survey 2 |
| 11 | Interactive EPANET Simulator | Looped network topology, Hazen-Williams solver, nodal pressure gradient, valve throttling | M4 | REQ-09, Survey 2 |
| 12 | 4-Tier Automated Test Suite | Unit tests, component tests, invariant checkers, build validation | M5 | TEST_INFRA |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Scaffolding & Design System | Vite, Tailwind, Lucide, Vitest, index.html, theme tokens, layout shell | none | DONE |
| M2 | Core Portfolio Components & Content | Hero, Case Studies, Skills Matrix, Freelance, Experience, Contact, Footer | M1 | DONE |
| M3 | Interactive SCADA Water Plant Simulator | SCADA physics, simulation hook, multi-stage SVG, telemetry console, alarms | M1 | DONE |
| M4 | Interactive EPANET Hydraulic Simulator | EPANET solver, network data, SVG topology, node inspector, scenario bar | M1 | DONE |
| M5 | E2E Integration, Full Test Suite & Verification | 5 test suites (62 tests), npm run build validation, Review, Challenger, Audit | M1, M2, M3, M4 | DONE |

## Verification Summary
- `npm test`: 6 test files, 62/62 tests passing (100% success rate).
- `npm run build`: Exit Code 0, clean bundle in `dist/`.
- Reviewer 1 (Architecture & UI/UX): APPROVE.
- Reviewer 2 (Engineering Simulators): APPROVE.
- Challenger 1 (Adversarial UI/UX): APPROVE.
- Challenger 2 (Numerical Stability): APPROVE.
- Forensic Auditor: CLEAN (Zero integrity violations, zero anti-patterns, zero placeholder copy).
