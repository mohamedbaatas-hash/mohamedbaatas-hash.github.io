# E2E Test Infra: Mohamed Baatas Hydroinformatics Portfolio

## Test Philosophy
- Opaque-box, requirement-driven, and invariant-verified.
- Strictly adheres to the 4-Tier verification methodology.

## Feature Inventory & Test Coverage
| # | Feature | Source | Tier 1 (Unit) | Tier 2 (Boundary) | Tier 3 (Integration) | Tier 4 (E2E / Scenarios) |
|---|---------|--------|:-------------:|:-----------------:|:--------------------:|:------------------------:|
| 1 | App Scaffold & Build | REQ-01 | ✓ | ✓ | ✓ | ✓ |
| 2 | Industrial Design & Anti-Patterns | REQ-02, NEG-01..05 | ✓ | ✓ | ✓ | ✓ |
| 3 | Domain Content & No Placeholder | REQ-04..08, NEG-06 | ✓ | ✓ | ✓ | ✓ |
| 4 | Modular Component Sizing | Follow-up 13:56 | ✓ | ✓ | ✓ | ✓ |
| 5 | SCADA Water Plant Simulator | REQ-09 | ✓ | ✓ | ✓ | ✓ |
| 6 | EPANET Network Simulator | REQ-09 | ✓ | ✓ | ✓ | ✓ |

## Test Architecture
- **Runner**: Vitest + jsdom + `@testing-library/react`
- **Invocation**: `npx vitest run` or `npm test`
- **Build Invariant**: `npm run build` generates clean production assets in `dist/` with 0 exit code.
- **Negative Invariant Scanner**:
  - Validates zero `cursor: none` in CSS/JSX.
  - Validates zero `setTimeout` artificial splash screen loaders.
  - Validates zero Three.js / WebGL 3D canvases.
  - Validates zero skill progress bars (`<progress>`, `progress-bar`, `role="progressbar"`).
  - Validates zero "Lorem Ipsum", "lorem ipsum", "dolor sit amet", "TODO", "TBD".

## Real-World Application Scenarios (Tier 4)
1. Complete visitor workflow: User lands on portfolio, inspects hero telemetry, scrolls through technical case studies, reviews domain skill chips, interacts with Maktabi POS case card, triggers SCADA simulation pump controls, inspects EPANET network nodes, and accesses contact/resume export.
2. SCADA Telemetry & Fault Scenario: User activates intake booster pump, modulates coagulant dosing, injects high turbidity shock, observes emergency automated shutoff / alarm banner trigger, and resets system.
3. EPANET Hydraulic Scenario: User selects Junction Node J4, views real-time head and pressure metrics, adjusts valve throttling to 50%, triggers pipe burst leak scenario, and observes pressure gradient drop across the loop.
