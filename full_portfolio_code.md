# Mohamed Baatas — FluiDev v3.0 Codebase

> Generated for AI analysis and pair-programming.
> Contains project structure and complete source code of all core architectural, hydraulic, and UI components.

## 1. Project Directory Structure

`	ext
mohamed-baatas-hydroinformatics-portfolio/
├── assets/
│   ├── index-ioDA8u_Q.js
│   └── index-UkEL2E65.css
├── public/
│   ├── assets/
│   │   ├── fluiddev-academic-cover-1080x1350.png
│   │   ├── fluiddev-academic-presentation-1080x1350.png
│   │   ├── fluiddev-academic-thesis-1080x1350.png
│   │   ├── mohamed-portrait-cutout.png
│   │   └── mohamed-portrait.png
│   ├── extracted/
│   │   ├── asset_100_988x1128.png
│   │   ├── asset_58_1917x2556.png
│   │   ├── canva_poster_bg.png
│   │   ├── mohamed_suit_cutout.png
│   │   ├── notebook_paper.png
│   │   └── speaker_cutout.png
│   ├── banner-studio.html
│   ├── canva_template.pdf
│   ├── card.html
│   ├── figma-studio.html
│   ├── Mohamed_Baatas_CV.html
│   └── render_canva.html
├── src/
│   ├── components/
│   │   ├── banner/
│   │   │   └── FluiDevBanner.jsx
│   │   ├── common/
│   │   │   ├── BlueprintCadre.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── CircuitBackground.jsx
│   │   │   ├── CollageBackground.jsx
│   │   │   ├── FluiDevLogo.jsx
│   │   │   ├── MetricBadge.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   ├── sections/
│   │   │   ├── academic/
│   │   │   │   ├── AcademicCtaBanner.jsx
│   │   │   │   ├── AcademicEthicsBanner.jsx
│   │   │   │   ├── AcademicServicesGrid.jsx
│   │   │   │   ├── SoutenanceLaptopMockup.jsx
│   │   │   │   └── ThesisMakeoverCompare.jsx
│   │   │   ├── AcademicHubSection.jsx
│   │   │   ├── CaseStudiesSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── EngineeringPillarsSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── FreelanceSection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── InteractiveLabSection.jsx
│   │   │   ├── SelectedWorksSection.jsx
│   │   │   ├── SkillsSection.jsx
│   │   │   └── TrajectorySection.jsx
│   │   └── simulator/
│   │       ├── epanet/
│   │       │   ├── EpanetControls.jsx
│   │       │   ├── EpanetNetworkCanvas.jsx
│   │       │   ├── EpanetNodeInspector.jsx
│   │       │   └── EpanetSimulator.jsx
│   │       └── scada/
│   │           ├── ScadaAlarmBanner.jsx
│   │           ├── ScadaControlDesk.jsx
│   │           ├── ScadaFlowDiagram.jsx
│   │           ├── ScadaPlantSimulator.jsx
│   │           └── ScadaTelemetryPanel.jsx
│   ├── data/
│   │   ├── epanetData.js
│   │   ├── portfolioData.js
│   │   └── scadaData.js
│   ├── figma/
│   │   ├── AcademicPostStudio.tsx
│   │   ├── App.tsx
│   │   ├── ConnectedCarouselStudio.tsx
│   │   ├── ExportPanel.tsx
│   │   ├── HighlightsStudio.tsx
│   │   ├── index.css
│   │   ├── LogoStudio.tsx
│   │   ├── main.tsx
│   │   └── SingleServicePostStudio.tsx
│   ├── hooks/
│   │   ├── useEpanetEngine.js
│   │   ├── useScadaEngine.js
│   │   └── useTheme.js
│   ├── locales/
│   │   ├── ar.json
│   │   ├── en.json
│   │   └── fr.json
│   ├── utils/
│   │   ├── hydraulicEngine.js
│   │   └── scadaPhysics.js
│   ├── App.jsx
│   ├── i18n.js
│   ├── index.css
│   └── main.jsx
├── test/
│   ├── academicComponentsUnit.test.jsx
│   ├── academicHub.test.jsx
│   ├── adversarialStress.test.jsx
│   ├── brandingAndLogo.test.jsx
│   ├── cadreFraming.test.jsx
│   ├── cadreUnit.test.jsx
│   ├── hydraulicEngine.test.js
│   ├── scadaPhysics.test.js
│   ├── setup.js
│   └── themeEngine.test.js
├── .gitignore
├── FLUIDEV_INSTAGRAM_BANNER_MASTER_DOSSIER.md
├── index.html
├── package.json
├── PORTFOLIO_DOSSIER.md
├── postcss.config.js
├── PROJECT.md
├── tailwind.config.js
├── TEST_INFRA.md
├── TEST_READY.md
└── vite.config.js
`

## 2. Core Source Files

### File: package.json

`json
{
  "name": "mohamed-baatas-hydroinformatics-portfolio",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "html-to-image": "^1.11.13",
    "i18next": "^26.4.0",
    "i18next-browser-languagedetector": "^8.2.1",
    "jspdf": "^4.2.1",
    "lucide-react": "^0.475.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-i18next": "^17.0.11",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.2.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "jsdom": "^26.0.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "vite": "^6.1.0",
    "vitest": "^3.0.5"
  }
}
`

### File: vite.config.js

`jsx
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.js'
  }
});
`

### File: tailwind.config.js

`jsx
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fluid: {
          navy: '#07133F',
          'navy-deep': '#020B27',
          'navy-surface': '#0A1B54',
          'navy-card': '#0E246E',
          blue: '#001DB5',
          'blue-bright': '#005BFF',
          cyan: '#00E5FF',
          'cyan-dark': '#00AEEA',
          yellow: '#F7B500',
          'yellow-hover': '#FFC72C',
          crimson: '#D62828',
          'paper-bg': '#F8F9FA',
          'paper-grid': 'rgba(0, 50, 160, 0.08)',
          'paper-border': 'rgba(0, 29, 181, 0.15)',
          'ink-dark': '#07133F',
          'ink-muted': '#4D5774',
          'ink-subtle': '#68718A',
        },
        // Direct aliases for flexible token access
        'fluid-navy': '#07133F',
        'fluid-navy-surface': '#0A1B54',
        'fluid-navy-card': '#0E246E',
        'fluid-blue': '#001DB5',
        'fluid-blue-bright': '#005BFF',
        'fluid-cyan': '#00E5FF',
        'fluid-yellow': '#F7B500',
        'fluid-crimson': '#D62828',
        'fluid-paper': '#F8F9FA',
        // Backward-compatible slate and cobalt palette
        obsidian: '#020617',
        'deep-slate': '#0F172A',
        'elevated-slate': '#1E293B',
        'border-slate': '#334155',
        'surface-sunken': '#0B1120',
        cobalt: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        telemetry: {
          cyan: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
          red: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        title: ['Alexandria', 'system-ui', 'sans-serif'],
        alexandria: ['Alexandria', 'system-ui', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Roboto Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'graph-grid': 'linear-gradient(rgba(0, 50, 160, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 50, 160, 0.08) 1px, transparent 1px)',
        'blueprint-grid': 'linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
`

### File: postcss.config.js

`jsx
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`

### File: index.html

`html
<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300E5FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z'/%3E%3C/svg%3E" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mohamed Baatas (FluiDev) | Hydroinformatics & Software Systems Engineer</title>
    <meta name="description" content="Executive engineering portfolio of Mohamed Baatas (FluiDev) — State Hydraulics Engineer (ENSH) & Full-Stack Software Developer specializing in EPANET modeling, SCADA digital twins, offline-first desktop ERPs, and academic thesis consulting." />
    
    <!-- OpenGraph / LinkedIn / WhatsApp Preview Metadata -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://mohamedbaatas-hash.github.io/" />
    <meta property="og:title" content="Mohamed Baatas (FluiDev) | Hydroinformatics & Software Engineer" />
    <meta property="og:description" content="Bridging fluid mechanics & municipal water networks with offline-first desktop ERPs, in-browser EPANET/SCADA simulators, and academic excellence." />
    <meta property="og:image" content="https://mohamedbaatas-hash.github.io/assets/mohamed-portrait-cutout.png" />
    <meta name="twitter:card" content="summary_large_image" />

    <!-- Fonts: Alexandria, Barlow Condensed, Inter, JetBrains Mono -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Zero-FOUC Theme Hydration -->
    <script>
      (function() {
        try {
          var stored = localStorage.getItem('fluiddev-theme');
          var theme = stored;
          if (!theme || (theme !== 'dark' && theme !== 'light')) {
            theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark';
          }
          if (theme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
            document.documentElement.setAttribute('data-theme', 'light');
          } else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            document.documentElement.setAttribute('data-theme', 'dark');
          }
        } catch (e) {
          document.documentElement.classList.add('dark');
          document.documentElement.setAttribute('data-theme', 'dark');
        }
      })();
    </script>
  </head>
  <body class="bg-[var(--bg-app)] text-[var(--text-primary)] font-sans antialiased min-h-screen selection:bg-fluid-blue selection:text-white transition-colors duration-200">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`

### File: src/main.jsx

`jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`

### File: src/App.jsx

`jsx
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
`

### File: src/index.css

`css
@import './figma/index.css';
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    color-scheme: dark;
    --bg-app: #07133f;
    --bg-surface: #0a1b54;
    --bg-elevated: #0e246e;
    --text-primary: #f8fafc;
    --text-secondary: #a9b9e7;
    --text-muted: #8292c2;
    --border-cadre: rgba(0, 229, 255, 0.18);
    --border-accent: #00e5ff;
    --color-accent-blue: #001db5;
    --color-accent-cyan: #00e5ff;
    --color-accent-yellow: #f7b500;
    --accent-yellow: #f7b500;
    --accent-cyan: #00e5ff;
  }

  html.light,
  .light {
    color-scheme: light;
    --bg-app: #f8f9fa;
    --bg-surface: #ffffff;
    --bg-elevated: #f1f4f9;
    --text-primary: #07133f;
    --text-secondary: #4d5774;
    --text-muted: #68718a;
    --border-cadre: rgba(0, 29, 181, 0.15);
    --border-accent: #001db5;
    --color-accent-blue: #001db5;
    --color-accent-cyan: #00aeea;
    --color-accent-yellow: #f7b500;
    --accent-yellow: #f7b500;
    --accent-cyan: #00aeea;

    background-color: #f8f9fa;
    background-image:
      linear-gradient(rgba(0, 50, 160, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 50, 160, 0.08) 1px, transparent 1px);
    background-size: 18px 18px;
    color: #07133f;
  }

  html.dark,
  .dark {
    color-scheme: dark;
    --bg-app: #07133f;
    --bg-surface: #0a1b54;
    --bg-elevated: #0e246e;
    --text-primary: #f8fafc;
    --text-secondary: #a9b9e7;
    --text-muted: #8292c2;
    --border-cadre: rgba(0, 229, 255, 0.18);
    --border-accent: #00e5ff;
    --color-accent-blue: #001db5;
    --color-accent-cyan: #00e5ff;
    --color-accent-yellow: #f7b500;
    --accent-yellow: #f7b500;
    --accent-cyan: #00e5ff;

    background-color: #07133f;
    background-image:
      linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px);
    background-size: 20px 20px;
    color: #f8fafc;
  }

  body {
    background-color: var(--bg-app);
    color: var(--text-primary);
    min-height: 100vh;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  html.light body,
  body.light {
    background-color: #f8f9fa;
    background-image:
      linear-gradient(rgba(0, 50, 160, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 50, 160, 0.08) 1px, transparent 1px);
    background-size: 18px 18px;
    color: #07133f;
  }

  html.dark body,
  body.dark {
    background-color: #07133f;
    background-image:
      linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px);
    background-size: 20px 20px;
    color: #f8fafc;
  }
}

/* Engineering Graph Paper Backgrounds */
.bg-graph-paper {
  background-color: #f8f9fa;
  background-image:
    linear-gradient(rgba(0, 50, 160, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 50, 160, 0.08) 1px, transparent 1px);
  background-size: 18px 18px;
}

.dark .bg-graph-paper {
  background-color: #07133f;
  background-image:
    linear-gradient(rgba(0, 229, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 229, 255, 0.04) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Monospace Telemetry Font Features */
.tabular-nums {
  font-variant-numeric: tabular-nums;
}

/* Responsive Technical Scrollbars */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #040b26;
}

.light ::-webkit-scrollbar-track {
  background: #f1f4f9;
}

::-webkit-scrollbar-thumb {
  background: #0e246e;
  border-radius: 4px;
  border: 1px solid rgba(0, 229, 255, 0.25);
}

.light ::-webkit-scrollbar-thumb {
  background: #a9b9e7;
  border: 1px solid rgba(0, 29, 181, 0.15);
}

::-webkit-scrollbar-thumb:hover {
  background: #1a3a99;
}

.light ::-webkit-scrollbar-thumb:hover {
  background: #001db5;
}

/* Strict Zero Custom Cursor / Pure Native Pointer */
* {
  cursor: auto;
}

button, a, select, input[type="button"], input[type="submit"], [role="button"] {
  cursor: pointer;
}


/* Blueprint Animations */
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes spinReverseSlow {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.05); }
}

.animate-spin-slow {
  animation: spinSlow 50s linear infinite;
}

.animate-spin-reverse-slow {
  animation: spinReverseSlow 35s linear infinite;
}

.animate-pulse-glow {
  animation: pulseGlow 4s ease-in-out infinite;
}
`

### File: src/i18n.js

`jsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
  fr: { translation: fr }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

// Set direction and lang immediately on load
if (typeof document !== 'undefined') {
  document.documentElement.dir = i18n.dir();
  document.documentElement.lang = i18n.language || 'en';
}

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = lng;
  }
});

export default i18n;
`

### File: src/hooks/useTheme.js

`jsx
import { useState, useEffect, useCallback } from 'react';

const THEME_STORAGE_KEY = 'fluiddev-theme';

/**
 * useTheme - React hook for dual-theme management (Blueprint Navy Dark / Graph Paper Light)
 * Persists theme preference in localStorage under 'fluiddev-theme' and synchronizes
 * document.documentElement classes ('dark' / 'light') and 'data-theme' attribute.
 *
 * @returns {{
 *   theme: 'dark' | 'light',
 *   isDark: boolean,
 *   toggleTheme: () => void,
 *   setTheme: (t: 'dark' | 'light') => void
 * }}
 */
export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') {
          return stored;
        }
        if (document.documentElement.classList.contains('light')) {
          return 'light';
        }
        if (document.documentElement.classList.contains('dark')) {
          return 'dark';
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
          return 'light';
        }
      } catch (e) {
        // Fallback to default
      }
    }
    return 'dark';
  });

  const applyTheme = useCallback((targetTheme) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (targetTheme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      try {
        localStorage.setItem(THEME_STORAGE_KEY, 'light');
      } catch (e) {}
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      try {
        localStorage.setItem(THEME_STORAGE_KEY, 'dark');
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Sync across tabs
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleStorageChange = (e) => {
      if (e.key === THEME_STORAGE_KEY && (e.newValue === 'light' || e.newValue === 'dark')) {
        setThemeState(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const setTheme = useCallback((newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setThemeState(newTheme);
    }
  }, []);

  return {
    theme,
    isDark: theme === 'dark',
    toggleTheme,
    setTheme,
  };
}

export default useTheme;
`

### File: src/locales/ar.json

`json
{
  "HERO_DATA": {
    "fullName": "Mohamed Baatas",
    "title": "مهندس هيدروإعلاميات",
    "subtitle": "نمذجة الأنظمة الهيدروليكية • قياس عن بعد لـ IoT المدمج • برمجيات تقنية",
    "badge": "حالة النظام: تشغيل",
    "bio": "مهندس هيدروإعلاميات يسد الفجوة بين ميكانيكا الموائع الكلاسيكية، شبكات توزيع المياه المضغوطة، والقياس عن بعد السيبراني-الفيزيائي الحديث لـ IoT. ذو خبرة في أنظمة SCADA لمعالجة مياه الشرب البلدية، النمذجة الهيدروليكية باستخدام EPANET، وبنية البرمجيات الشاملة.",
    "location": "الجزائر، الجزائر / متاح للعمل عن بعد",
    "availability": "متاح للنمذجة الهيدروليكية، استشارات القياس عن بعد لـ IoT، والأدوار الهندسية بدوام كامل",
    "kpis": [
      {
        "label": "محاكاة الشبكة",
        "value": "+45 كم",
        "detail": "نموذج EPANET 2.2 EPS"
      },
      {
        "label": "كمون القياس عن بعد",
        "value": "<120 مللي ثانية",
        "detail": "من مستشعر الحافة إلى السحابة"
      },
      {
        "label": "برمجيات تجارية",
        "value": "3 تم نشرها",
        "detail": "أنظمة POS و ERP للإنتاج"
      },
      {
        "label": "أساس أكاديمي",
        "value": "بكالوريوس + ماجستير",
        "detail": "الهيدروليكا والصرف الصحي"
      }
    ]
  },
  "CASE_STUDIES": [
    {
      "id": "waterfit-telemetry",
      "title": "WaterFit — قياس عن بعد متصل بالسحابة للترطيب والمقاييس الحيوية",
      "category": "خدمات السحابة المصغرة // بنية غير متزامنة // قياس عن بعد",
      "summary": "منصة تسجيل ترطيب غير متزامنة وعالية السلاسة تدمج واجهة برمجة تطبيقات Telegram Bot، وخلفية Python FastAPI، وقاعدة بيانات Firebase Realtime.",
      "problem": "يحتاج المهندسون الميدانيون، الرياضيون، والعمال الصناعيون في البيئات عالية الحرارة إلى تتبع دقيق للترطيب يُعاير حسب درجة الحرارة المحيطة والجهد الفسيولوجي. تعاني تطبيقات الهاتف المحمول التقليدية متعددة الشاشات من كثرة الخطوات وضعف الامتثال.",
      "methodology": [
        "بناء واجهة إدخال حوارية باستخدام واجهة برمجة تطبيقات Telegram Bot، مما يتيح التسجيل السريع بنقرة واحدة وصوتياً (تفاعل < 2 ثانية).",
        "تطوير خلفية Python غير متزامنة باستخدام FastAPI ومستمعي webhook لـ Asyncio لمعالجة البيانات القائمة على الأحداث.",
        "دمج قاعدة بيانات Firebase Realtime و Firestore للمزامنة الفورية عبر الأجهزة.",
        "تنفيذ خوارزميات ترطيب استقلابية ديناميكية تحسب أهداف السوائل الشخصية بناءً على درجة الحرارة المحيطة (واجهة برمجة تطبيقات OpenWeather)، وزن الجسم، ومدة التمرين.",
        "جدولة عمال تذكير استباقيين عبر cron يتم تشغيلهم عندما يتجاوز نقص السوائل هوامش الحد الآمن."
      ],
      "stack": [
        "Python 3.11",
        "واجهة برمجة تطبيقات Telegram Bot",
        "FastAPI",
        "قاعدة بيانات Firebase Realtime",
        "Webhooks لـ Asyncio",
        "واجهة برمجة تطبيقات OpenWeather",
        "Cloud Functions"
      ],
      "metrics": [
        {
          "label": "كمون Webhook",
          "value": "<180 مللي ثانية"
        },
        {
          "label": "امتثال المستخدم",
          "value": "+340%"
        },
        {
          "label": "ذروة التزامن",
          "value": ">500 طلب/ثانية"
        },
        {
          "label": "كمون المزامنة",
          "value": "<50 مللي ثانية"
        }
      ]
    },
    {
      "id": "constracker-suite",
      "title": "Constracker Suite — تطبيق سطح مكتب لإدارة المشاريع والبناء",
      "category": "هندسة مدنية // برمجيات سطح المكتب // إدارة المشاريع",
      "summary": "تطبيق سطح مكتب شامل تم بناؤه خلال MS1 لتبسيط إدارة البناء. يوفر منصة موحدة لتتبع وإدارة المشاريع، العمال، النفقات، المخزون، المهام، والقياسات.",
      "problem": "تتضمن إدارة البناء تتبع موارد متفرقة — من الحضور اليومي للعمال إلى مخزون المواد ونفقات الميزانية. يؤدي التتبع اليدوي التقليدي إلى تجزئة البيانات وعدم كفاءة التحكم في التكاليف.",
      "methodology": [
        "تطوير تطبيق سطح مكتب يعمل دون اتصال أولاً باستخدام Electron لضمان التشغيل المستمر في مواقع البناء ذات الإنترنت الضعيف.",
        "هندسة واجهة أمامية باستخدام React 18 مع Vite و TypeScript لتقديم واجهة مستخدم آمنة وعالية الأداء، مصممة باستخدام Tailwind CSS و shadcn/ui.",
        "تنفيذ قاعدة بيانات علائقية محلية SQLite3 يتم الوصول إليها عبر استراتيجيات قوية لجلب البيانات مع TanStack Query.",
        "بناء 7 وحدات أساسية: لوحة القيادة (مؤشرات الأداء الرئيسية)، المشاريع، العمال (المهام)، النفقات (الميزانية)، المخزون، المهام، والقياسات.",
        "تعبئة وتجميع الثنائيات التنفيذية لسطح المكتب باستخدام Electron Builder للنشر السلس عبر الأنظمة الأساسية."
      ],
      "stack": [
        "Electron",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "SQLite3",
        "TanStack Query",
        "shadcn/ui",
        "React Router"
      ],
      "metrics": [
        {
          "label": "البنية",
          "value": "Electron + React"
        },
        {
          "label": "قاعدة البيانات",
          "value": "SQLite3 محلي"
        },
        {
          "label": "نظام واجهة المستخدم",
          "value": "shadcn/ui"
        },
        {
          "label": "النطاق",
          "value": "7 وحدات أساسية"
        }
      ]
    },
    {
      "id": "scada-wwtp",
      "title": "محاكي SCADA الذكي لمحطات معالجة مياه الصرف الصحي — زريبة الوادي",
      "category": "أتمتة صناعية // برمجيات سطح المكتب // ذكاء اصطناعي",
      "summary": "محاكاة حية ومستمرة للعملية السيبرانية-الفيزيائية مبنية على نموذج محطة معالجة مياه الصرف الصحي لبلدية زريبة الوادي، تم إنشاؤها كتطبيق سطح مكتب PyQt6.",
      "problem": "تدريب المشغلين على محطات معالجة مياه الصرف الصحي (WWTP) ذات البحيرات الطبيعية أمر صعب دون المخاطرة بفشل الامتثال. كانت المنشأة بحاجة إلى توأم رقمي عالي الدقة لمحاكاة العمليات البيولوجية والتنبؤ بجودة التدفق ديناميكياً.",
      "methodology": [
        "بناء محاكي سطح مكتب باستخدام Python 3 و PyQt6، يوفر بيئة SCADA حديثة بـ 12 واجهة بما في ذلك الخرائط الإجمالية، لوحة القيادة، وسجلات الإنذار.",
        "نمذجة محطة زريبة الوادي بسعة 24,000 متر مكعب/يوم، تشمل المعالجة الأولية، الهضم اللاهوائي، البحيرات الاختيارية، وأسرة تجفيف الحمأة.",
        "تنفيذ خيوط متعددة باستخدام QThread لفصل منطق المحاكاة الفيزيائية المعقد عن واجهة المستخدم، مما يضمن مراقبة سلسة خالية من التجمد.",
        "دمج نماذج التنبؤ المدفوعة بالذكاء الاصطناعي لتوقع جودة مياه التدفق (BOD5، COD، TSS) والتنبؤ بفشل المضخات الكهروميكانيكية بناءً على ساعات التشغيل.",
        "هندسة قاعدة بيانات SQLite قوية لأرشفة قراءات مصفوفة القياس عن بعد المستمرة، تعثرات التعشيق، وأحداث الإنذار الحرجة."
      ],
      "stack": [
        "Python 3",
        "PyQt6",
        "SQLite",
        "QThread (خيوط متعددة)",
        "إشارات/فتحات Qt",
        "نماذج تنبؤ الذكاء الاصطناعي"
      ],
      "metrics": [
        {
          "label": "سعة المحطة",
          "value": "24,000 م³/يوم"
        },
        {
          "label": "تعقيد واجهة المستخدم",
          "value": "12 واجهة"
        },
        {
          "label": "المحاكاة",
          "value": "خيوط متعددة"
        },
        {
          "label": "دمج الذكاء الاصطناعي",
          "value": "نماذج تنبؤ"
        }
      ]
    }
  ],
  "SKILLS_CATEGORIES": [
    {
      "domain": "الهندسة الهيدروليكية والمدنية",
      "description": "ميكانيكا الموائع، نمذجة خطوط الأنابيب المضغوطة، الصرف الصحي البلدي، وتحسين شبكات المياه.",
      "skills": [
        {
          "name": "محاكاة EPANET 2.2",
          "level": "خبير",
          "detail": "محاكاة لفترة ممتدة، انخفاض جودة المياه، تحليل تدفق الحرائق"
        },
        {
          "name": "ArcGIS Pro / ArcMap",
          "level": "متقدم",
          "detail": "التحليل المكاني للتضاريس، استخراج DEM، رسم خرائط الشبكة المتجهة"
        },
        {
          "name": "AutoCAD Civil 3D",
          "level": "متقدم",
          "detail": "صياغة البنية التحتية الهيدروليكية، محاذاة الملف الشخصي، تصنيف الأنابيب"
        },
        {
          "name": "Hazen-Williams & Darcy-Weisbach",
          "level": "خبير",
          "detail": "فقدان الرأس الاحتكاكي، رقم رينولدز، الخسائر الطفيفة"
        },
        {
          "name": "تصميم محطات الضخ",
          "level": "متقدم",
          "detail": "منحنيات رأس النظام، حساب NPSH، تسلسل الضخ المتوازي"
        },
        {
          "name": "معالجة المياه ومياه الصرف الصحي",
          "level": "متقدم",
          "detail": "حركية التخثر، الاستقرار الصفيحي، مرشحات الرمل السريعة، كلورة CT"
        },
        {
          "name": "المياه غير المدرة للدخل (NRW)",
          "level": "متقدم",
          "detail": "مناطق القياس المركزية (DMA)، اكتشاف التسرب الصوتي، إدارة الضغط"
        }
      ]
    },
    {
      "domain": "تطوير وهندسة البرمجيات",
      "description": "تطبيقات الويب الحديثة القائمة على المكونات، الخدمات المصغرة غير المتزامنة، المخططات العلائقية، وخطوط بيانات ETL.",
      "skills": [
        {
          "name": "Python 3.x",
          "level": "خبير",
          "detail": "FastAPI، Asyncio، Pandas، NumPy، الحوسبة العلمية"
        },
        {
          "name": "React 18+ & Vite",
          "level": "متقدم",
          "detail": "نمطية المكونات، خطافات مخصصة، آلات الحالة، تصوير SVG"
        },
        {
          "name": "Tailwind CSS",
          "level": "خبير",
          "detail": "أنظمة تصميم صناعية دقيقة، بيئة الوضع المظلم، شبكات سريعة الاستجابة"
        },
        {
          "name": "SQLite & PostgreSQL",
          "level": "متقدم",
          "detail": "نمذجة قواعد البيانات العلائقية، الفهرسة، معاملات ACID، التخزين المؤقت دون اتصال أولاً"
        },
        {
          "name": "REST APIs & Webhooks",
          "level": "خبير",
          "detail": "بنية مدفوعة بالأحداث، التحقق من صحة الحمولة، نقاط نهاية منخفضة الكمون"
        },
        {
          "name": "Firebase & خدمات السحابة",
          "level": "متقدم",
          "detail": "قاعدة بيانات Realtime، Firestore، Cloud Functions، المصادقة"
        },
        {
          "name": "Git & أدوات CI/CD",
          "level": "متقدم",
          "detail": "التحكم في الإصدار، اختبار آلي مع Vitest/Jest، GitHub Actions"
        }
      ]
    },
    {
      "domain": "الأنظمة المدمجة، SCADA و IoT",
      "description": "البرامج الثابتة للمتحكمات الدقيقة، حلقات المستشعرات الصناعية، أتمتة الحافة، واتصالات SCADA.",
      "skills": [
        {
          "name": "ESP32 & Arduino C++",
          "level": "متقدم",
          "detail": "بنية البرامج الثابتة، مهام FreeRTOS، إجراءات المقاطعة، معايرة ADC"
        },
        {
          "name": "سحابة Blynk لـ IoT و MQTT",
          "level": "متقدم",
          "detail": "وسيط قياس عن بعد ثنائي الاتجاه، النشر/الاشتراك للحافة، أدوات لوحة القيادة"
        },
        {
          "name": "ربط المستشعرات الصناعية",
          "level": "متقدم",
          "detail": "مستوى الموجات فوق الصوتية، العكارة البصرية، أجهزة إرسال الأس الهيدروجيني، مقاييس تدفق تأثير هول"
        },
        {
          "name": "تحكم PID ذو حلقة مغلقة",
          "level": "متقدم",
          "detail": "تحكم متناسب-تكاملي-تفاضلي في سرعة المضخة والجرعات الكيميائية"
        },
        {
          "name": "اكتشاف أخطاء الحافة",
          "level": "متقدم",
          "detail": "تشابكات الأجهزة الآمنة من الفشل، حماية التشغيل الجاف، رحلات الضغط الزائد"
        },
        {
          "name": "المشغلات العتادية والمرحلات",
          "level": "متقدم",
          "detail": "مرحلات الحالة الصلبة، صمامات الملف اللولبي 12V/24V، مضخات تعزيز DC"
        }
      ]
    }
  ],
  "FREELANCE_SOLUTIONS": [
    {
      "id": "maktabi-pos",
      "name": "Maktabi POS — نظام إدارة البيع بالتجزئة والقرطاسية",
      "type": "تطبيق سطح مكتب تجاري // دون اتصال أولاً",
      "client": "مكتبات البيع بالتجزئة ومتاجر القرطاسية",
      "description": "نظام نقاط البيع ودفتر مخزون عالي الأداء يعمل دون اتصال أولاً، مُصمم للعمل باستمرار في المناطق ذات الاتصال المتقطع بالإنترنت.",
      "features": [
        "مسح الباركود في أقل من ثانية والبحث الفوري عبر كتالوج مخزون يضم +10,000 وحدة.",
        "تخزين مؤقت محلي لـ SQLite دون اتصال أولاً يضمن عدم وجود وقت توقف أثناء انقطاع الإنترنت.",
        "تكامل الأجهزة مع طابعات الإيصالات الحرارية ببروتوكول ESC/POS وأدراج النقد الآلية.",
        "محاسبة شاملة: دفاتر ائتمان العملاء، مستويات الجملة/التجزئة، فواتير الموردين، وتدقيقات الأرباح والخسائر اليومية."
      ],
      "stack": [
        "Python",
        "PyQt / واجهة مستخدم حديثة",
        "SQLite",
        "بروتوكول ESC/POS",
        "محرك ReportLab PDF"
      ],
      "impact": "تم نشره بنشاط في المتاجر التجارية؛ قلل وقت تدقيق المخزون السنوي بنسبة 65% دون أي حوادث توقف."
    },
    {
      "id": "alquds-gym",
      "name": "Al-Quds Gym Manager — نظام إدارة العضويات والوصول",
      "type": "إدارة مرافق المؤسسة // وصول بيومتري",
      "client": "مراكز اللياقة البدنية والمجمعات الرياضية",
      "description": "منصة متكاملة لإدارة دورة حياة الأعضاء والتحكم في الوصول مصممة للقضاء على الدخول غير المصرح به وأتمتة تجديد الاشتراكات.",
      "features": [
        "تحكم في الوصول في الوقت الفعلي يربط بين الباركود وقارئات بطاقات RFID للإبلاغ عن العضويات منتهية الصلاحية على الفور.",
        "تتبع آلي لاشتراكات الأعضاء مع تدفق نقدي مالي يومي وسجلات عمولات المدربين.",
        "إشعارات SMS/Telegram آلية تنبه الأعضاء قبل انتهاء صلاحية العضوية.",
        "تحليلات حضور شاملة وخرائط حرارية لاستخدام المرافق في ساعات الذروة."
      ],
      "stack": [
        "Python",
        "SQLite / PostgreSQL",
        "لوحة قيادة React",
        "أجهزة الباركود/RFID",
        "واجهة برمجة تطبيقات Telegram"
      ],
      "impact": "قضى على الدخول غير المصرح به؛ زاد معدل تجديد الأعضاء بنسبة 28%؛ قام برقمنة أكثر من 1,000 ملف تعريف نشط للأعضاء."
    },
    {
      "id": "custom-consulting",
      "name": "استشارات تقنية وتصوير البيانات",
      "type": "هندسة البيانات // استشارات هيدروليكية",
      "client": "الاستشارات الهندسية ومقاولو البلديات",
      "description": "خطوط بيانات علمية مخصصة، لوحات قياس عن بعد تفاعلية على الويب، وتحليل متخصص للشبكات الهيدروليكية لمشاريع الهندسة البلدية.",
      "features": [
        "خطوط أنابيب ETL آلية باستخدام Python تحول سجلات SCADA المتباينة ومخرجات محاكاة EPANET إلى تقارير تشغيلية نظيفة.",
        "أدوات تصور تفاعلية للقياس عن بعد على الويب لمراقبة توازن المياه وخطوط الانحدار الهيدروليكي.",
        "تقديم المشورة بشأن اختيار المستشعرات، هندسة بوابة IoT (MQTT/Modbus)، وتحسين منطقة ضغط الشبكة."
      ],
      "stack": [
        "Python (Pandas, NumPy)",
        "FastAPI",
        "Tailwind CSS",
        "Recharts / SVG",
        "برمجة نصية لـ EPANET"
      ],
      "impact": "تبسيط دورات إعداد التقارير الهندسية من أيام إلى ثوانٍ مع ملخصات آلية بتنسيق PDF/Excel."
    }
  ],
  "EXPERIENCE_TIMELINE": [
    {
      "role": "رئيس",
      "organization": "نادي برنولي العلمي للهيدروليكا",
      "period": "2023 - 2025",
      "location": "الحرم الجامعي",
      "type": "القيادة والإرشاد التقني",
      "highlights": [
        "اُنتخبت كرئيس لقيادة لجنة تتكون من +15 طالب هندسة ومجتمع يضم +100 عضو.",
        "تنظيم وتقديم دورات تدريبية فنية متقدمة في النمذجة الهيدروليكية باستخدام EPANET 2.2 ورسم الخرائط المكانية باستخدام ArcGIS Pro.",
        "إجراء ورش عمل عملية في هندسة IoT: ربط متحكمات Arduino الدقيقة بمستشعرات التدفق، الضغط، والعكارة.",
        "تنظيم زيارات ميدانية تقنية للسدود الإقليمية لتنقية مياه الشرب ومحطات معالجة مياه الصرف الصحي البلدية."
      ]
    },
    {
      "role": "متدرب في اتصالات المؤسسات",
      "organization": "أكاديمية هواوي لتكنولوجيا المعلومات والاتصالات",
      "period": "2024",
      "location": "الجزائر",
      "type": "تدريب في شبكات المؤسسات",
      "highlights": [
        "إتقان بروتوكولات توجيه وتحويل IP الخاصة بالمؤسسات (OSPF، BGP، علامات VLAN، QoS) عبر معدات شبكة المؤسسة.",
        "تحليل طبولوجيا تكرار شبكة مركز البيانات وبنيات نقل الحزم منخفضة الكمون.",
        "تطبيق مبادئ موثوقية شبكات المؤسسات وتجاوز الفشل مباشرة على شبكات SCADA الصناعية ومستشعرات IoT."
      ]
    }
  ],
  "EDUCATION_DATA": [
    {
      "degree": "ماجستير العلوم (M.S.) — إدارة خدمات المياه والصرف الصحي",
      "institution": "المدرسة الوطنية العليا للري",
      "period": "قيد الدراسة (2024 - الحاضر)",
      "focus": "دورة المياه الحضرية، تحسين محطات معالجة مياه الصرف الصحي، تقليل المياه غير المدرة للدخل، معالجة الحمأة، تحسين طاقة الضخ، الهيدروإعلاميات."
    },
    {
      "degree": "بكالوريوس العلوم (B.S.) — هندسة الهيدروليكا",
      "institution": "كلية الهندسة المدنية والهيدروليكية",
      "period": "تخرج بامتياز",
      "focus": "ميكانيكا الموائع، هيدروليكا الأنابيب المضغوطة، تدفق القنوات المفتوحة، الهيدرولوجيا، هندسة السدود، الخرسانة المسلحة للمنشآت الهيدروليكية، ميكانيكا التربة."
    }
  ],
  "NAV": {
    "works": "الأعمال والمشاريع",
    "lab": "المعمل الهندسي التفاعلي",
    "pillars": "الركائز الهندسية",
    "academic": "المركز الأكاديمي",
    "trajectory": "المسار والخبرة",
    "contact": "تواصل"
  },
  "HEADER": {
    "name": "محمد بعتاس",
    "role": "المعلوماتية المائية وهندسة البرمجيات",
    "role_short": "المعلوماتية المائية والبرمجيات",
    "download_cv": "السيرة الذاتية (CV)"
  },
  "HERO": {
    "role_tag": "مهندس هيدروإعلاميات وبرمجيات",
    "location": "الجزائر العاصمة / متاح للعمل عن بُعد",
    "headline_main": "هندسة دقيقة في تقاطع",
    "headline_accent": "الأنظمة المائية والفيزيائية",
    "headline_end": "مع هندسة البرمجيات الحديثة.",
    "bio_refined": "مهندس ماستر يربط بين ميكانيكا الموائع وشبكات المياه البلدية، وتطبيقات سطح المكتب الإنتاجية، وحلول EPANET الهيدروليكية، والقياس عن بعد لـ IoT.",
    "cta_works": "استعراض المشاريع المختارة",
    "cta_lab": "المعمل التفاعلي",
    "cta_cv": "تحميل السيرة الذاتية",
    "stat_edu_lbl": "المؤهل الأكاديمي",
    "stat_edu_val": "ماستر + ليسانس",
    "stat_edu_det": "الهيدروليك وإدارة خدمات المياه",
    "stat_prod_lbl": "برمجيات في الإنتاج",
    "stat_prod_val": "3 أنظمة منشورة",
    "stat_prod_det": "تطبيقات POS و ERP تجارية حقيقية",
    "stat_sim_lbl": "محاكاة رياضية",
    "stat_sim_val": "EPANET و SCADA",
    "stat_sim_det": "محركات فيزيائية حية في المتصفح",
    "stat_lead_lbl": "القيادة العلمية",
    "stat_lead_val": "نادي برنولي",
    "stat_lead_det": "رئيس النادي ومدرب دورات متقدمة"
  },
  "CASE_STUDIES_SECTION": {
    "tag": "مشاريع_هندسية",
    "title": "دراسات الحالة والأنظمة التطبيقية",
    "desc": "تحليل متعمق لنمذجة توزيع المياه البلدية، وأنظمة SCADA السيبرانية الفيزيائية، وأنظمة القياس السحابية.",
    "collapse": "طي الهيكلة",
    "expand": "توسيع المنهجية الكاملة",
    "problem": "بيان المشكلة ونقاط الضعف الميدانية",
    "methodology": "المنهجية الهندسية والتنفيذ الفني",
    "stack": "مجموعة الأجهزة والبرمجيات",
    "view_study": "استعراض دراسة الحالة بالكامل",
    "expand_all_prompt": "انقر لتوسيع جميع المنهجيات الهندسية، والمشاكل الميدانية، ومجموعات التقنيات.",
    "expand_all_btn": "عرض المنهجيات الهندسية الكاملة للمشاريع",
    "collapse_all_btn": "طي دراسات الحالة"
  },
  "EXPERIENCE_SECTION": {
    "tag": "مسار_مهني_وأكاديمي",
    "title": "الخبرة الهندسية والأساس الأكاديمي",
    "desc": "القيادة في الجمعيات العلمية، والتدريب على شبكات المؤسسات، والاعتمادات الأكاديمية الصارمة في هيدروليكا البلديات وإدارة خدمات المياه.",
    "col1": "القيادة والخبرة الصناعية",
    "col2": "التعليم الأكاديمي والشهادات",
    "accredited": "درجة معتمدة",
    "focus": "التركيز والمناهج الأساسية",
    "credentials_count": "ماستر + ليسانس في الري والصرف الصحي • برنامج هواوي Seeds For Future • قيادة نوادي علمية",
    "expand_btn": "عرض المسار الزمني والشهادات الأكاديمية بالكامل",
    "collapse_btn": "طي المسار الزمني",
    "specialization": "التخصص:",
    "thesis": "موضوع الأطروحة:"
  },
  "SCADA": {
    "tag": "محاكي_تفاعلي_01",
    "title": "محاكي SCADA الذكي لمحطة المعالجة",
    "desc": "محاكاة حية ومستمرة للعمليات السيبرانية الفيزيائية مبنية على محطة معالجة مياه الصرف الصحي في زريبة الوادي. تتميز بنمذجة التدفق اليومي في الوقت الفعلي، والهضم اللاهوائي، والتمثيل الضوئي للطحالب.",
    "status_ready": "التوأم السيبراني-الفيزيائي جاهز",
    "launch_desc": "شغّل المخطط التفاعلي الكامل، تحكم بالمضخات، واختبر سيناريوهات تدفق العواصف والتنبؤات.",
    "launch_btn": "تشغيل محاكي SCADA التفاعلي لمحطة المياه",
    "collapse_btn": "إغلاق المحاكي"
  },
  "EPANET": {
    "tag": "محاكي_تفاعلي_02",
    "title": "محاكي EPANET للشبكات الهيدروليكية",
    "desc": "حلّال في الوقت الفعلي لشبكة توزيع مياه مضغوطة. يتميز بحسابات فقدان الضغط (Hazen-Williams)، وحل ضغط العقد المدفوع بالطلب، وإدارة الشروط الحدية للخزانات.",
    "status_ready": "المحرك الهيدروليكي جاهز",
    "launch_desc": "افتح لوحة الشبكة التفاعلية، افحص الضغوط عند العقد، اضبط الصمامات، وجرب السيناريوهات الحية.",
    "launch_btn": "تشغيل محلل شبكة EPANET التفاعلي",
    "collapse_btn": "إغلاق المحاكي"
  },
  "FOOTER": {
    "desc": "محفظة هندسية متخصصة تجمع بين هيدروليكا المياه البلدية، والقياس عن بعد لأنظمة SCADA، والمحاكاة العددية EPANET، والبرمجيات الحديثة.",
    "navigation": "التنقل السريع",
    "channels": "قنوات التواصل",
    "rights": "صُممت بدقة هندسية وهدوء معماري راقٍ.",
    "back_to_top": "إلى الأعلى",
    "github": "حساب GitHub",
    "linkedin": "حساب LinkedIn"
  },
  "SKILLS_SECTION": {
    "tag": "مصفوفة_الكفاءات",
    "title": "الكفاءات التقنية والمجموعات الهندسية",
    "desc": "تصنيف دقيق للمجالات يشمل النمذجة الهيدروليكية، بنية البرمجيات الشاملة، والقياس عن بعد السيبراني-الفيزيائي لـ IoT.",
    "core_domains": "المجالات الهندسية الأساسية:",
    "domain_hydro": "الهندسة الهيدروليكية والصرف",
    "domain_soft": "تطوير وهندسة البرمجيات",
    "domain_iot": "أنظمة SCADA و IoT المدمجة",
    "skills_count": "21 مهارة تقنية موثقة للإنتاج",
    "featured_preview": "معاينة أبرز المهارات التخصصية (12 مهارة):",
    "expand_prompt": "انقر لتوسيع المصفوفة الكاملة مع المعايير والمستويات والتفاصيل الهندسية.",
    "expand_btn": "عرض مصفوفة المهارات والجداول الكاملة",
    "collapse_btn": "طي مصفوفة المهارات"
  },
  "FREELANCE_SECTION": {
    "tag": "برمجيات_تجارية",
    "title": "الهندسة الحرة والبرمجيات المخصصة",
    "desc": "حلول سطح مكتب عالية الموثوقية، وأنظمة ERP للتحكم في الوصول، وتصورات مخصصة للبيانات العلمية تم نشرها لعملاء تجاريين.",
    "capabilities": "القدرات الهندسية",
    "view_features": "عرض كافة الميزات والقدرات",
    "expand_prompt": "انقر لتوسيع كافة القدرات البرمجية، وتكاملات الأجهزة، وتفاصيل نشر الأنظمة.",
    "expand_btn": "عرض كافة الأنظمة والحلول التجارية",
    "collapse_btn": "طي تفاصيل الأنظمة"
  },
  "WORKS": {
    "section_tag": "أعمال مختارة",
    "section_title": "الأنظمة والبرمجيات الهندسية المختارة",
    "section_desc": "مجموعة مختارة بعناية من تطبيقات سطح المكتب المنشورة، خطوط القياس عن بعد لـ IoT، والنماذج الهيدروليكية الحسابية المصممة لأثر واقعي.",
    "constracker_title": "Constracker Suite",
    "constracker_sub": "نظام إدارة المشاريع والإنشاءات لسطح المكتب (Civil ERP)",
    "constracker_tag": "تطبيق سطح مكتب • إدارة الإنشاءات",
    "constracker_desc": "برنامج سطح مكتب يعمل دون اتصال بالإنترنت (Offline-First) لتوحيد تتبع المشاريع، العمال، المصاريف، المخزون، والقياسات الحسابية المتخصصة في مواقع البناء.",
    "constracker_h1": "بنية محلية عبر SQLite تعمل دون انقطاع حتى مع انعدام الإنترنت في المواقع النائية.",
    "constracker_h2": "7 وحدات متكاملة: لوحة المؤشرات، المشاريع، العمال، التكاليف، المخزون، المهام، ودفتر القياسات.",
    "constracker_h3": "حزم تنفيذية أصلية لسطح المكتب مجمعة بواسطة Electron Builder.",
    "waterfit_title": "WaterFit Telemetry",
    "waterfit_sub": "منصة قياس استهلاك المياه وكشف التسريبات عبر إنترنت الأشياء",
    "waterfit_tag": "قياس عن بعد لـ IoT • خدمات سحابية",
    "waterfit_desc": "منصة تليمتري تربط عدادات المياه الذكية مع واجهة محادثة ذكية (Telegram Bot) وخلفية Python غير متزامنة (FastAPI) لمعايرة استهلاك المياه والتنبؤ بالتسريبات الدقيقة.",
    "waterfit_h1": "واجهة إدخال وتفاعل عبر Telegram Bot تسجل البيانات في أقل من ثانيتين.",
    "waterfit_h2": "معالجة غير متزامنة للأحداث عبر FastAPI و Webhooks.",
    "waterfit_h3": "مزامنة فورية مع Firebase مع تنبيهات استباقية وكشف شذوذ التدفق.",
    "maktabi_title": "Maktabi POS وأنظمة ERP التجارية",
    "maktabi_sub": "أنظمة إدارة نقاط البيع ومراقبة الدخول الحيوية في الإنتاج التجاري",
    "maktabi_tag": "برمجيات تجارية • قيد التشغيل الميداني",
    "maktabi_desc": "حزمة تطبيقات تجارية تعمل في المتاجر ومراكز اللياقة. تشمل Maktabi POS لإدارة المخازن والمبيعات مع طابعات الإيصالات الحرارية، و Al-Quds Gym لإدارة الاشتراكات والتحكم بالبوابات عبر البصمة و RFID.",
    "maktabi_h1": "مسح فوري للباركود وفهرسة أكثر من 10,000 صنف بسرعة فائقة.",
    "maktabi_h2": "تكامل مباشر مع طابعات الإيصالات ESC/POS وأدراج النقدية الآلية.",
    "maktabi_h3": "ربط بوابات البصمة الحيوية وزيادة تجديد الاشتراكات بنسبة +28% عبر تنبيهات Telegram الآلية.",
    "epanet_title": "EPANET 2.2 Network Solver",
    "epanet_sub": "محلل الشبكات الهيدروليكية الحلقية والمحرك الرياضي الفيزيائي",
    "epanet_tag": "نمذجة هيدروليكية • محاكاة عددية",
    "epanet_desc": "محرك هيدروليكي في المتصفح يحسب تدفق وضغوط شبكات توزيع المياه البلدية المضغوطة وفق معادلات Hazen-Williams وتكرار Newton-Raphson اللاخطي لحل توازن الكتل العقدية.",
    "epanet_h1": "حساب دقيق لفقدان الطاقة الاحتكاكي بناءً على أقطار ومعاملات خشونة الأنابيب.",
    "epanet_h2": "خوارزمية Newton-Raphson لحل ضغوط العقد وسرعات التدفق في الوقت الفعلي.",
    "epanet_h3": "تجربة حية لسيناريوهات: ذروة الاستهلاك الصباحي، إطفاء الحرائق، وخنق الصمامات وكسر الأنابيب.",
    "metric_arch": "البنية",
    "metric_modules": "الوحدات",
    "metric_db": "قاعدة البيانات",
    "metric_latency": "زمن الاستجابة",
    "metric_compliance": "الامتثال",
    "metric_concurrency": "الإنتاجية",
    "metric_deployment": "التشغيل",
    "metric_audit": "توفير وقت الجرد",
    "metric_uptime": "الموثوقية",
    "metric_topology": "الطبولوجيا",
    "metric_physics": "معادلة الفاقد",
    "metric_interactivity": "التحكم"
  },
  "LAB": {
    "section_tag": "معمل التجارب",
    "section_title": "المعمل الهندسي التفاعلي",
    "section_desc": "استكشف محاكيات فيزيائية وسيبرانية حقيقية تعمل مباشرة في متصفحك. تنقل بين محاكي محطة معالجة مياه الصرف الصحي (SCADA) ومحلل شبكات المياه الحلقية (EPANET 2.2).",
    "tab_scada": "محاكي SCADA لمحطة المياه",
    "tab_epanet": "محلل شبكة EPANET",
    "lab_status": "بنية المعمل الرياضية",
    "lab_headline": "الدقة الرياضية تلتقي مع التفاعل البرمجي في المتصفح",
    "lab_narrative": "هذه ليست مجرد رسومات توضيحية؛ بل هي خوارزميات حقيقية تحسب توازن الكتل، وتدفق السوائل، والتحكم بالمضخات خطوة بخطوة عبر JavaScript في جهازك.",
    "btn_launch_scada": "تشغيل محاكي SCADA",
    "btn_launch_epanet": "تشغيل محلل EPANET",
    "scada_live_title": "محطة معالجة المياه زريبة الوادي (24,000 م³/يوم) — لوحة SCADA",
    "epanet_live_title": "محلل EPANET للشبكات الحلقية — شبكة بلدية حية",
    "switch_to_epanet": "التبديل إلى EPANET",
    "switch_to_scada": "التبديل إلى SCADA",
    "close_lab": "طي لوحة المعمل"
  },
  "PILLARS": {
    "section_tag": "الكفاءات الجوهرية",
    "section_title": "ثلاث ركائز هندسية متكاملة",
    "section_desc": "الربط الحقيقي بين العالم الفيزيائي للموائع والبنية التحتية، وبين البرمجيات الحديثة وأجهزة القياس عن بعد.",
    "hydro_title": "الأنظمة الهيدروليكية والبنية التحتية",
    "hydro_tag": "ميكانيكا الموائع والنمذجة الصحية",
    "hydro_desc": "نمذجة رياضية دقيقة لشبكات الأنابيب المضغوطة، معالجة مياه الشرب، ومحطات معالجة الصرف الصحي مع التكامل المكاني عبر نظم المعلومات الجغرافية (GIS).",
    "software_title": "هندسة البرمجيات وتطبيقات سطح المكتب",
    "software_tag": "برمجيات حديثة وقواعد بيانات علائقية",
    "software_desc": "تطبيقات سطح مكتب عالية الموثوقية، خدمات سحابية مصغرة غير متزامنة، واجهات مستخدم دقيقة، وقواعد بيانات محلية وسحابية قوية.",
    "iot_title": "الأنظمة السيبرانية والقياس عن بعد (IoT)",
    "iot_tag": "الأنظمة المدمجة والمستشعرات الصناعية",
    "iot_desc": "برمجة المتحكمات الدقيقة، الأتمتة الميدانية، تهيئة إشارات المستشعرات الصناعية، وشبكات نقل التليمتري السحابية ثنائية الاتجاه."
  },
  "TRAJECTORY": {
    "section_tag": "المسار والقيادة",
    "section_title": "الخبرة الميدانية والجذور الأكاديمية",
    "section_desc": "قيادة الجمعيات العلمية، والتدريب على شبكات المؤسسات الكبرى، مع شهادات أكاديمية معتمدة في هندسة الري وخدمات المياه.",
    "col_leadership": "القيادة والتدريب الصناعي",
    "col_education": "الشهادات والمؤهلات الأكاديمية",
    "bernoulli_role": "رئيس النادي",
    "bernoulli_org": "نادي برنولي العلمي للهيدروليكا",
    "bernoulli_type": "القيادة والإرشاد التقني",
    "bernoulli_b1": "قيادة لجنة تنفيذية من 15+ مهندساً ومجتمع طلابي يضم أكثر من 100 عضو نشط.",
    "bernoulli_b2": "تصميم وتقديم دورات تدريبية متقدمة في النمذجة الهيدروليكية (EPANET 2.2) والتحليل المكاني (ArcGIS Pro).",
    "bernoulli_b3": "تنظيم ورش عمل تطبيقية في إنترنت الأشياء: ربط متحكمات Arduino بمستشعرات التدفق والضغط والعكارة.",
    "bernoulli_b4": "تنسيق زيارات ميدانية علمية لسدود المياه ومحطات المعالجة والتنقية الإقليمية.",
    "huawei_role": "متدرب في اتصالات المؤسسات",
    "huawei_org": "أكاديمية هواوي لتكنولوجيا المعلومات والاتصالات، الجزائر",
    "huawei_type": "هندسة شبكات المؤسسات",
    "huawei_b1": "إتقان بروتوكولات توجيه وتبديل IP للمؤسسات (OSPF، BGP، VLANs، QoS) على أجهزة حقيقية.",
    "huawei_b2": "تحليل بنيات تكرار مراكز البيانات وشبكات نقل الحزم فائقة السرعة ومنخفضة الكمون.",
    "huawei_b3": "نقل مبادئ موثوقية شبكات الاتصالات وتطبيقها على شبكات SCADA وأجهزة استشعار IoT الصناعية.",
    "ms_degree": "ماجستير العلوم (M.S.) — إدارة خدمات المياه والصرف الصحي",
    "ms_inst": "المدرسة الوطنية العليا للري",
    "ms_status": "قيد الدراسة",
    "ms_detail": "اقتصاديات دورة المياه الحضرية، تحسين محطات معالجة مياه الصرف الصحي، تقليل المياه غير المدرة للدخل (NRW)، معالجة الحمأة، وطرق الهيدروإعلاميات الحسابية.",
    "bs_degree": "بكالوريوس العلوم (B.S.) — هندسة الهيدروليكا",
    "bs_inst": "كلية الهندسة المدنية والهيدروليكية",
    "bs_status": "تخرج بامتياز",
    "bs_detail": "ميكانيكا الموائع، هيدروليكا الأنابيب المضغوطة، تدفق القنوات المفتوحة، الهيدرولوجيا، هندسة السدود، الخرسانة المسلحة للمنشآت المائية، وميكانيكا التربة."
  },
  "ACADEMIC_HUB": {
    "section_badge": "التحول الأكاديمي // FLUIDEV",
    "section_title": "مرافقة المذكرات والتحول الأكاديمي",
    "section_subtitle": "نحول الملفات الخام ومسودات البحوث الهندسية إلى مذكرات أنيقة جاهزة للتسليم، وعروض مناقشة (Soutenance) مقنعة للجان التحكيم وفق أدلة الجامعات المعتمدة.",
    "stats": {
      "theses_transformed": "+50 مذكرة",
      "theses_detail": "تم تسليمها لمناقشات الماستر والدكتوراه",
      "defense_ready": "100%",
      "defense_detail": "مطابقة لمعايير دليل الجامعة وتوقيت المناقشة",
      "turnaround": "أقل من 5 أيام",
      "turnaround_detail": "تسليم سريع للمواعيد النهائية الحرجة",
      "satisfaction": "3 لغات",
      "satisfaction_detail": "إتقان تام بالعربية، الفرنسية والإنجليزية"
    },
    "tabs": {
      "thesis_makeover": "تحول المذكرة",
      "presentation_mockup": "عرض المناقشة",
      "services": "الخدمات الأكاديمية"
    },
    "makeover": {
      "kicker": "قبل وبعد // تحول تفاعلي مباشر",
      "title": "مذكرتك تستحق إخراجًا يليق بمجهودك.",
      "description": "نحوّل الملف الخام، التنسيق المبعثر والمراجع غير الموحدة إلى مذكرة أكاديمية أنيقة، واضحة وجاهزة للتسليم والمناقشة.",
      "toggle_split": "مقارنة مقسومة",
      "toggle_before": "مسودة خام (قبل)",
      "toggle_after": "مذكرة FluiDev (بعد)",
      "slider_instruction": "اسحب شريط المقارنة أو استخدم الأزرار لمعاينة التحول الهيكلي",
      "before_badge": "قبل // مسودة خام",
      "before_status": "غير منظمة وعشوائية",
      "before_title": "دراسة تهوية أحواض التثبيت بمحطة التصفية",
      "before_penalty": "خصم التنسيق وغياب المراجع الموحدة",
      "before_note_1": "هوامش غير متطابقة وخطوط متباينة",
      "before_note_2": "ترقيم عناوين مكسور بدون أنماط Word",
      "before_note_3": "فهرس يدوي غير منظم وبدون روابط",
      "before_note_4": "أخطاء مطبعية وصياغة غير علمية",
      "after_badge": "بعد // جاهزة للمناقشة",
      "after_status": "معايير دليل الجامعة المعتمد",
      "after_chapter": "الفصل الأول // الهيدروديناميكا",
      "after_title": "النمذجة الهيدروديناميكية وتحسين الأكسجين المذاب في أحواض التثبيت",
      "after_subtitle": "المدرسة الوطنية العليا للري • مذكرة بحث التخرج",
      "after_lead": "تحليل تجريبي للحركية البيولوجية ونقل الكتلة الحركية في محطات معالجة مياه الصرف الصحي اللامركزية تحت ظروف المناخ الجاف.",
      "after_citation": "[بعتاس وآخرون، 2026 • معايير IEEE / APA 7th]",
      "hotspots": {
        "h1_title": "تنسيق العناوين الهيكلية",
        "h1_desc": "تطبيق أنماط العناوين الهرمية المعتمدة (H1 / H2 / H3) مع ضبط التباعد والترقيم الآلي للفصول.",
        "h2_title": "فهرسة آلية وترقيم الجداول",
        "h2_desc": "فهرس محتويات تفاعلي، فهرس الأشكال والجداول، وترقيم الصفحات المزدوج (روماني للمقدمات وعربي للفصول).",
        "h3_title": "توحيد مراجع APA / IEEE",
        "h3_desc": "توحيد صياغة المراجع داخل المتن وقائمة الببليوغرافيا مع فحص معرفات DOI والربط ببرامج Zotero وMendeley.",
        "h4_title": "مراجعة لغوية وتدقيق أكاديمي",
        "h4_desc": "تدقيق لغوي وصياغة علمية رصينة بالعربية، الفرنسية والإنجليزية، وتوحيد المصطلحات الهندسية."
      }
    },
    "presentation": {
      "kicker": "عرض المناقشة // شرائح الـ SOUTENANCE",
      "title": "ومن المذكرة إلى عرض واضح ومقنع أمام لجنة التحكيم",
      "subtitle": "تصميم عروض تقديمية مخصصة للجان المناقشة تجمع بين الإيجاز، الرسوم البيانية التوضيحية والإخراج البصري الراقي الذي يبرز نتائج بحثك.",
      "screen_kicker": "مناقشة التخرج // SOUTENANCE 2026",
      "slide_title": "نتائج دراسة تحسين محطة التصفية",
      "slide_subtitle": "نمذجة هيدرو-معلوماتية وموازنة الكتل",
      "presenter": "المهندس محمد بعتاس — مهندس هيدرو-معلوماتية",
      "institution": "المدرسة الوطنية العليا للري",
      "metrics": {
        "cod_label": "كفاءة إزالة COD",
        "cod_value": "92.4%",
        "cod_target": "المعيار المطلوب > 85.0%",
        "bod_label": "مطابقة معايير BOD5",
        "bod_value": "89.1%",
        "bod_target": "مطابقة المعايير البيئية",
        "energy_label": "توفير طاقة التهوية",
        "energy_value": "+28.5%",
        "energy_target": "تحكم آلي في الأكسجين المذاب",
        "do_label": "استقرار الأكسجين المذاب",
        "do_value": "4.8 مغ/ل",
        "do_target": "النطاق البيولوجي المثالي"
      },
      "takeaways": [
        "محتوى منظم ومختصر يبرز المنهجية المتبعة والنتائج الرئيسية",
        "مخططات بيانية ورسوم توضيحية عالية الدقة تجذب اهتمام اللجنة",
        "إخراج بصري مدروس يضمن تقديم كافة المحاور ضمن الوقت المحدد"
      ]
    },
    "services": {
      "kicker": "مرافقة شاملة ومتكاملة",
      "title": "أربع خدمات أكاديمية هندسية رئيسية",
      "subtitle": "مرافقة تحريرية، فنية وتصميمية متكاملة للباحثين وطلبة الهندسة والماستر والدكتوراه.",
      "items": {
        "format": {
          "number": "01",
          "title": "تنسيق أكاديمي احترافي",
          "desc": "تنسيق شامل وفق دليل الجامعة المعتمد، توحيد الهوامش، الخطوط، الجداول، وترقيم الفصول والصفحات.",
          "deliverables": ["وفق دليل الجامعة المعتمد", "فهرس آلي شامل للأشكال والجداول", "ترقيم هرمي منظم للفصول", "تصميم صفحات البداية والملاحق"]
        },
        "language": {
          "number": "02",
          "title": "مراجعة وتدقيق لغوي علمي",
          "desc": "تدقيق لغوي وصياغة علمية رصينة بالعربية، الفرنسية والإنجليزية، تصحيح الأخطاء ورفع مستوى التعبير الأكاديمي.",
          "deliverables": ["صياغة علمية رصينة ومحكمة", "تدقيق إملائي ونحوي دقيق", "مراجعة ثلاثية اللغات (عربي / فرنسي / إنجليزي)", "توحيد المصطلحات التخصصية"]
        },
        "references": {
          "number": "03",
          "title": "تنظيم المراجع والفهرسة (APA / IEEE)",
          "desc": "ضبط وتوحيد الإحالات والمراجع وفق معايير APA 7th أو IEEE، فحص الروابط ومعرفات DOI، وبناء الفهارس.",
          "deliverables": ["توحيد معايير APA 7th / IEEE / Vancouver", "التحقق من روابط ومعرفات DOI", "التكامل مع Mendeley / Zotero / BibTeX", "ربط الإحالات التلقائي بالجداول"]
        },
        "presentation": {
          "number": "04",
          "title": "تصميم عروض المناقشة (PowerPoint)",
          "desc": "تصميم عروض تقديمية مخصصة للجان المناقشة تجمع بين الإيجاز، الرسوم البيانية التوضيحية والإخراج البصري الراقي.",
          "deliverables": ["عرض PowerPoint / PDF جاهز للإلقاء", "إنفوجرافيك ورسوم بيانية مخصصة", "تسلسل بصري زمني مقنع", "ملاحظات إرشادية للملقي"]
        }
      }
    },
    "ethics": {
      "badge": "ميثاق الأمانة والنزاهة العلمية",
      "title": "مرافقة أكاديمية مسؤولة ومطابقة للأخلاقيات",
      "description": "نقدم خدمات التنسيق، التدقيق اللغوي، تنظيم المراجع، والتصميم البصري للشرائح. تظل جميع الحسابات والنتائج والأفكار العلمية جهداً وأصالة ملكاً للطالب والباحث بنسبة 100% وفق أصول الأمانة الأكاديمية."
    },
    "cta": {
      "ready_kicker": "جاهز للمناقشة؟",
      "title": "اطلب مرافقة مذكرتك أو عرض المناقشة الآن",
      "subtitle": "أرسل تخصصك، مسودة العمل والموعد المحدد للحصول على تقييم فوري وعرض زمني مخصص.",
      "btn_whatsapp": "تواصل عبر واتساب",
      "btn_telegram": "تواصل عبر تيليغرام",
      "btn_inquire": "طلب مرافقة أكاديمية",
      "guarantees": [
        "تسليم سريع وفق الموعد النهائي المحدد للمناقشة",
        "سرية تامة وأصالة علمية 100% بدون أي انتحال علمي",
        "تعديلات ومتابعة مستمرة حتى يوم مناقشة المذكرة"
      ]
    }
  }
}
`

### File: src/locales/en.json

`json
{
  "HERO_DATA": {
    "fullName": "Mohamed Baatas",
    "title": "Hydroinformatics Engineer",
    "subtitle": "Hydraulic Systems Modeling • Embedded IoT Telemetry • Technical Software",
    "badge": "SYSTEM STATUS: OPERATIONAL",
    "bio": "Hydroinformatics Engineer bridging the gap between classical fluid mechanics, pressurized water distribution networks, and modern cyber-physical IoT telemetry. Experienced in municipal water potabilization SCADA systems, EPANET hydraulic modeling, and full-stack software architecture.",
    "location": "Algiers, Algeria / Remote Available",
    "availability": "Available for Hydraulic Modeling, IoT Telemetry Consulting & Full-Time Engineering Roles",
    "kpis": [
      {
        "label": "Network Simulation",
        "value": "45+ km",
        "detail": "EPANET 2.2 Model EPS"
      },
      {
        "label": "Telemetry Latency",
        "value": "<120 ms",
        "detail": "Edge Sensor-to-Cloud"
      },
      {
        "label": "Commercial Software",
        "value": "3 Deployed",
        "detail": "Production POS & ERP"
      },
      {
        "label": "Academic Foundation",
        "value": "B.S. + M.S.",
        "detail": "Hydraulics & Sanitation"
      }
    ]
  },
  "CASE_STUDIES": [
    {
      "id": "waterfit-telemetry",
      "title": "WaterFit — Cloud-Connected Hydration & Biometric Telemetry",
      "category": "Cloud Microservices // Asynchronous Architecture // Telemetry",
      "summary": "Asynchronous, low-friction hydration logging platform integrating the Telegram Bot API, Python FastAPI backend, and Firebase Realtime Database.",
      "problem": "Field engineers, athletes, and industrial workers in high-heat environments require precise hydration tracking calibrated to ambient temperature and physiological exertion. Traditional multi-screen mobile apps suffer from high friction and poor compliance.",
      "methodology": [
        "Built a conversational ingestion interface using the Telegram Bot API, enabling rapid one-tap and voice logging (<2 seconds interaction).",
        "Developed an asynchronous Python backend using FastAPI and asyncio webhook listeners for event-driven payload processing.",
        "Integrated Firebase Realtime Database and Firestore for instantaneous cross-device synchronization.",
        "Implemented dynamic metabolic hydration algorithms calculating personalized fluid targets based on ambient temperature (OpenWeather API), body weight, and workout duration.",
        "Scheduled proactive cron reminder workers triggered when fluid deficit exceeds safe threshold margins."
      ],
      "stack": [
        "Python 3.11",
        "Telegram Bot API",
        "FastAPI",
        "Firebase Realtime DB",
        "Asyncio Webhooks",
        "OpenWeather API",
        "Cloud Functions"
      ],
      "metrics": [
        {
          "label": "Webhook Latency",
          "value": "<180 ms"
        },
        {
          "label": "User Compliance",
          "value": "+340%"
        },
        {
          "label": "Concurrent Peak",
          "value": ">500 req/s"
        },
        {
          "label": "Sync Latency",
          "value": "<50 ms"
        }
      ]
    },
    {
      "id": "constracker-suite",
      "title": "Constracker Suite — Construction Management Desktop Application",
      "category": "Civil Engineering // Desktop Software // Project Management",
      "summary": "Comprehensive desktop application built during MS1 to streamline construction management. Provides a unified platform to track and manage projects, workers, expenses, inventory, tasks, and measurements.",
      "problem": "Construction management involves tracking dispersed resources—from daily worker attendance to material inventory and budget expenses. Traditional manual tracking leads to data fragmentation and inefficient cost control.",
      "methodology": [
        "Developed an offline-first desktop application using Electron to ensure uninterrupted operation on construction sites with poor internet.",
        "Engineered a React 18 frontend with Vite and TypeScript for type-safe, high-performance UI rendering, styled with Tailwind CSS and shadcn/ui.",
        "Implemented a local SQLite3 relational database accessed via robust data fetching strategies with TanStack Query.",
        "Built 7 core modules: Dashboard (KPIs), Projects, Workers (assignments), Expenses (budgeting), Inventory, Tasks, and Metre (specialized construction measurements).",
        "Packaged and compiled executable desktop binaries using Electron Builder for seamless cross-platform deployment."
      ],
      "stack": [
        "Electron",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "SQLite3",
        "TanStack Query",
        "shadcn/ui",
        "React Router"
      ],
      "metrics": [
        {
          "label": "Architecture",
          "value": "Electron + React"
        },
        {
          "label": "Database",
          "value": "SQLite3 Local"
        },
        {
          "label": "UI System",
          "value": "shadcn/ui"
        },
        {
          "label": "Scope",
          "value": "7 Core Modules"
        }
      ]
    },
    {
      "id": "scada-wwtp",
      "title": "SCADA Smart WWTP Simulator — Zeriba El Oued",
      "category": "Industrial Automation // Desktop Software // Artificial Intelligence",
      "summary": "Live continuous cyber-physical process simulation modeled on the Zeriba El Oued municipal wastewater treatment plant, built as a PyQt6 desktop application.",
      "problem": "Training operators on Natural Lagoon Wastewater Treatment Plants (WWTP) is difficult without risking compliance failures. The facility needed a high-fidelity digital twin to simulate biological processes and predict effluent quality dynamically.",
      "methodology": [
        "Built a desktop simulator using Python 3 and PyQt6, providing a modern 12-interface SCADA environment including Synoptic Maps, Dashboard, and Alarm Logs.",
        "Modeled the 24,000 m³/day Zeriba El Oued plant, encompassing pretreatment, anaerobic digestion, facultative lagoons, and sludge drying beds.",
        "Implemented multithreading using QThread to separate complex physical simulation logic from the UI, ensuring smooth, freeze-free monitoring.",
        "Integrated AI-driven prediction models to forecast effluent water quality (BOD5, COD, TSS) and predict electro-mechanical pump failures based on operation hours.",
        "Engineered a robust SQLite historian database to archive continuous telemetry matrix readings, interlock trips, and critical alarm events."
      ],
      "stack": [
        "Python 3",
        "PyQt6",
        "SQLite",
        "QThread (Multithreading)",
        "Qt Signals/Slots",
        "AI Prediction Models"
      ],
      "metrics": [
        {
          "label": "Plant Capacity",
          "value": "24,000 m³/d"
        },
        {
          "label": "UI Complexity",
          "value": "12 Interfaces"
        },
        {
          "label": "Simulation",
          "value": "Multithreaded"
        },
        {
          "label": "AI Integration",
          "value": "Prediction Models"
        }
      ]
    }
  ],
  "SKILLS_CATEGORIES": [
    {
      "domain": "Hydraulic & Civil Engineering",
      "description": "Fluid mechanics, pressurized pipeline modeling, municipal sanitation, and water network optimization.",
      "skills": [
        {
          "name": "EPANET 2.2 Simulation",
          "level": "Expert",
          "detail": "Extended-period simulation, water quality decay, fire-flow analysis"
        },
        {
          "name": "ArcGIS Pro / ArcMap",
          "level": "Advanced",
          "detail": "Spatial terrain analysis, DEM extraction, network vector mapping"
        },
        {
          "name": "AutoCAD Civil 3D",
          "level": "Advanced",
          "detail": "Hydraulic infrastructure drafting, profile alignment, pipe grading"
        },
        {
          "name": "Hazen-Williams & Darcy-Weisbach",
          "level": "Expert",
          "detail": "Friction head loss, Reynolds number, minor losses"
        },
        {
          "name": "Pumping Station Design",
          "level": "Advanced",
          "detail": "System head curves, NPSH calculation, pump parallel sequencing"
        },
        {
          "name": "Water & Wastewater Treatment",
          "level": "Advanced",
          "detail": "Coagulation kinetics, lamella settling, rapid sand filters, CT chlorination"
        },
        {
          "name": "Non-Revenue Water (NRW)",
          "level": "Advanced",
          "detail": "District Metered Areas (DMA), acoustic leak detection, pressure management"
        }
      ]
    },
    {
      "domain": "Software Development & Architecture",
      "description": "Modern component-based web applications, asynchronous microservices, relational schemas, and ETL data pipelines.",
      "skills": [
        {
          "name": "Python 3.x",
          "level": "Expert",
          "detail": "FastAPI, Asyncio, Pandas, NumPy, Scientific Computing"
        },
        {
          "name": "React 18+ & Vite",
          "level": "Advanced",
          "detail": "Component modularity, custom hooks, state machines, SVG visualization"
        },
        {
          "name": "Tailwind CSS",
          "level": "Expert",
          "detail": "Industrial precision design systems, dark-mode ergonomics, responsive grids"
        },
        {
          "name": "SQLite & PostgreSQL",
          "level": "Advanced",
          "detail": "Relational database modeling, indexing, ACID transactions, offline-first caching"
        },
        {
          "name": "REST APIs & Webhooks",
          "level": "Expert",
          "detail": "Event-driven architecture, payload validation, low-latency endpoints"
        },
        {
          "name": "Firebase & Cloud Services",
          "level": "Advanced",
          "detail": "Realtime Database, Firestore, Cloud Functions, Authentication"
        },
        {
          "name": "Git & CI/CD Tooling",
          "level": "Advanced",
          "detail": "Version control, automated testing with Vitest/Jest, GitHub Actions"
        }
      ]
    },
    {
      "domain": "Embedded Systems, SCADA & IoT",
      "description": "Microcontroller firmware, industrial sensor loops, edge automation, and SCADA communications.",
      "skills": [
        {
          "name": "ESP32 & Arduino C++",
          "level": "Advanced",
          "detail": "Firmware architecture, FreeRTOS tasks, interrupt routines, ADC calibration"
        },
        {
          "name": "Blynk IoT Cloud & MQTT",
          "level": "Advanced",
          "detail": "Bidirectional telemetry broker, edge pub/sub, dashboard widgets"
        },
        {
          "name": "Industrial Sensor Interfacing",
          "level": "Advanced",
          "detail": "Ultrasonic level, optical turbidity, pH transmitters, Hall-effect flow meters"
        },
        {
          "name": "Closed-Loop PID Control",
          "level": "Advanced",
          "detail": "Proportional-Integral-Derivative pump speed and chemical dosing control"
        },
        {
          "name": "Edge Fault Detection",
          "level": "Advanced",
          "detail": "Fail-safe hardware interlocks, dry-run protection, overpressure trips"
        },
        {
          "name": "Hardware Actuators & Relays",
          "level": "Advanced",
          "detail": "Solid-state relays, 12V/24V solenoid valves, DC booster pumps"
        }
      ]
    }
  ],
  "FREELANCE_SOLUTIONS": [
    {
      "id": "maktabi-pos",
      "name": "Maktabi POS — Retail & Stationery Management System",
      "type": "Commercial Desktop Application // Offline-First",
      "client": "Retail Bookstores & Stationery Outlets",
      "description": "High-performance, offline-first Point of Sale and inventory ledger built to operate continuously in regions with intermittent internet connectivity.",
      "features": [
        "Sub-second barcode scanning and instant lookup across 10,000+ SKU inventory catalog.",
        "Offline-first local SQLite caching ensuring zero downtime during internet outages.",
        "Hardware integration with ESC/POS thermal receipt printers and automated cash drawers.",
        "Comprehensive accounting: customer credit ledgers, wholesale/retail tiers, supplier invoices, daily P&L audits."
      ],
      "stack": [
        "Python",
        "PyQt / Modern UI",
        "SQLite",
        "ESC/POS Protocol",
        "ReportLab PDF Engine"
      ],
      "impact": "Actively deployed in commercial stores; reduced annual inventory audit time by 65% with zero downtime incidents."
    },
    {
      "id": "alquds-gym",
      "name": "Al-Quds Gym Manager — Membership & Access Control ERP",
      "type": "Enterprise Facility Management // Biometric Access",
      "client": "Fitness Centers & Sports Complexes",
      "description": "Turnkey member lifecycle management and access control platform designed to eliminate unauthorized admissions and automate subscription renewals.",
      "features": [
        "Real-time front desk access control interfacing barcode and RFID card readers to flag expired memberships instantly.",
        "Automated member subscription tracking with daily financial cash flow and trainer commission ledgers.",
        "Automated SMS/Telegram notifications alerting members prior to membership expiration.",
        "Comprehensive attendance analytics and peak-hour facility utilization heatmaps."
      ],
      "stack": [
        "Python",
        "SQLite / PostgreSQL",
        "React Dashboard",
        "Barcode/RFID Hardware",
        "Telegram API"
      ],
      "impact": "Eliminated unauthorized admissions; boosted member renewal rate by 28%; digitized over 1,000 active member profiles."
    },
    {
      "id": "custom-consulting",
      "name": "Technical Consulting & Data Visualization",
      "type": "Data Engineering // Hydraulic Consulting",
      "client": "Engineering Consultancies & Municipal Contractors",
      "description": "Custom scientific data pipelines, interactive web telemetry dashboards, and specialist hydraulic network analysis for municipal engineering projects.",
      "features": [
        "Automated Python ETL pipelines converting disparate SCADA logs and EPANET simulation outputs into clean operational reports.",
        "Interactive web-based telemetry visualizers for monitoring water balance and hydraulic grade lines.",
        "Advisory on sensor selection, IoT gateway architecture (MQTT/Modbus), and network pressure zone optimization."
      ],
      "stack": [
        "Python (Pandas, NumPy)",
        "FastAPI",
        "Tailwind CSS",
        "Recharts / SVG",
        "EPANET Scripting"
      ],
      "impact": "Streamlined engineering reporting cycles from days to seconds with automated PDF/Excel summaries."
    }
  ],
  "EXPERIENCE_TIMELINE": [
    {
      "role": "President",
      "organization": "Bernoulli Hydraulics Scientific Club",
      "period": "2023 - 2025",
      "location": "University Campus",
      "type": "Leadership & Technical Mentorship",
      "highlights": [
        "Elected President to lead a committee of 15+ student engineers and a community of 100+ members.",
        "Organized and delivered technical training masterclasses in EPANET 2.2 hydraulic modeling and ArcGIS Pro spatial mapping.",
        "Conducted hands-on IoT engineering workshops: interfacing Arduino microcontrollers with flow, pressure, and turbidity sensors.",
        "Organized technical field visits to regional drinking water potabilization dams and municipal wastewater treatment plants."
      ]
    },
    {
      "role": "Enterprise Telecommunications Intern",
      "organization": "Huawei ICT Academy",
      "period": "2024",
      "location": "Algiers",
      "type": "Enterprise Networking Internship",
      "highlights": [
        "Mastered enterprise IP routing and switching protocols (OSPF, BGP, VLAN tagging, QoS) across enterprise network equipment.",
        "Analyzed data center network redundancy topologies and low-latency packet transmission architectures.",
        "Applied enterprise networking reliability and failover principles directly to industrial SCADA and IoT sensor networks."
      ]
    }
  ],
  "EDUCATION_DATA": [
    {
      "degree": "Master of Science (M.S.) — Water & Sanitation Services Management",
      "institution": "National Higher Education Institution",
      "period": "In Progress (2024 - Present)",
      "focus": "Urban Water Cycle, Wastewater Treatment Plant Optimization, Non-Revenue Water Reduction, Sludge Treatment, Pumping Energy Optimization, Hydroinformatics."
    },
    {
      "degree": "Bachelor of Science (B.S.) — Hydraulics Engineering",
      "institution": "Faculty of Civil & Hydraulic Engineering",
      "period": "Graduated with Distinction",
      "focus": "Fluid Mechanics, Pressurized Pipe Hydraulics, Open Channel Flow, Hydrology, Dam Engineering, Reinforced Concrete for Hydraulic Structures, Soil Mechanics."
    }
  ],
  "NAV": {
    "works": "Selected Works",
    "lab": "Engineering Lab",
    "pillars": "Capabilities",
    "academic": "Academic Hub",
    "trajectory": "Experience",
    "contact": "Contact"
  },
  "HEADER": {
    "name": "Mohamed Baatas",
    "role": "Hydroinformatics & Software Engineer",
    "role_short": "Hydroinformatics & Software",
    "download_cv": "Resume / CV"
  },
  "HERO": {
    "role_tag": "Hydroinformatics & Software Engineer",
    "location": "Algiers, Algeria / Remote Available",
    "headline_main": "Engineering at the Intersection of",
    "headline_accent": "Water Infrastructure",
    "headline_end": "& Modern Software.",
    "bio_refined": "Master's-level engineer bridging municipal fluid mechanics with production desktop applications, real-time EPANET hydraulic solvers, and embedded IoT telemetry pipelines.",
    "cta_works": "View Selected Works",
    "cta_lab": "Interactive Engineering Lab",
    "cta_cv": "Resume / CV",
    "stat_edu_lbl": "Academic Foundation",
    "stat_edu_val": "M.S. + B.S. Degree",
    "stat_edu_det": "Hydraulics & Water Sanitation",
    "stat_prod_lbl": "Production Software",
    "stat_prod_val": "3 Systems Deployed",
    "stat_prod_det": "Commercial Retail POS & ERP Solutions",
    "stat_sim_lbl": "Simulation Engines",
    "stat_sim_val": "EPANET & SCADA",
    "stat_sim_det": "Deterministic In-Browser Physical Solvers",
    "stat_lead_lbl": "Scientific Leadership",
    "stat_lead_val": "Bernoulli Club",
    "stat_lead_det": "President & Masterclass Instructor"
  },
  "CASE_STUDIES_SECTION": {
    "tag": "ENGINEERING_PROJECTS",
    "title": "Flagship Case Studies & Applied Systems",
    "desc": "In-depth breakdown of municipal water distribution modeling, cyber-physical SCADA telemetry testbeds, and high-concurrency cloud telemetry pipelines.",
    "collapse": "Collapse Architecture",
    "expand": "Expand Full Methodology",
    "problem": "Problem Statement & Field Vulnerability",
    "methodology": "Engineered Methodology & Technical Implementation",
    "stack": "Hardware & Software Technology Stack",
    "view_study": "View Full Case Study",
    "expand_all_prompt": "Click to expand all engineering methodologies, field problems, and architectural stacks.",
    "expand_all_btn": "Expand Complete Project Architectures",
    "collapse_all_btn": "Collapse Case Studies"
  },
  "EXPERIENCE_SECTION": {
    "tag": "CAREER_AND_ACADEMICS",
    "title": "Engineering Experience & Academic Foundation",
    "desc": "Leadership in scientific associations, enterprise networking training, and rigorous academic credentials in municipal hydraulics and water services management.",
    "col1": "Leadership & Industry Experience",
    "col2": "Academic Education & Degrees",
    "accredited": "Accredited Degree",
    "focus": "Curriculum Focus & Core Subjects",
    "credentials_count": "M.S. + B.S. in Hydraulics & Sanitation • Huawei Seeds For Future • Scientific Club Leadership",
    "expand_btn": "Expand Full Timeline & Credentials",
    "collapse_btn": "Collapse Timeline",
    "specialization": "Specialization:",
    "thesis": "Focus / Thesis:"
  },
  "SCADA": {
    "tag": "INTERACTIVE_SIMULATOR_01",
    "title": "SCADA Smart Natural Lagoon WWTP Simulator",
    "desc": "Live continuous cyber-physical process simulation modeled on the Zeriba El Oued municipal wastewater treatment plant. Features real-time diurnal flow modeling, anaerobic digestion, and facultative algal photosynthesis.",
    "status_ready": "CYBER-PHYSICAL TWIN READY",
    "launch_desc": "Launch the full interactive SVG diagram, adjust live pumps, trigger surges, and monitor telemetry.",
    "launch_btn": "Launch Interactive SCADA Simulator",
    "collapse_btn": "Collapse Simulator"
  },
  "EPANET": {
    "tag": "INTERACTIVE_SIMULATOR_02",
    "title": "EPANET Hydraulic Network Solver",
    "desc": "Real-time solver for a pressurized water distribution network. Features Hazen-Williams headloss calculations, demand-driven node pressure resolution, and tank boundary condition management.",
    "status_ready": "HYDRAULIC ENGINE COMPILED",
    "launch_desc": "Launch the interactive network canvas, inspect nodal pressures, throttle valves, and run real-time scenarios.",
    "launch_btn": "Launch Interactive EPANET Solver",
    "collapse_btn": "Collapse Simulator"
  },
  "FOOTER": {
    "desc": "Specialized engineering portfolio bridging municipal water hydraulics, cyber-physical SCADA telemetry, EPANET numerical simulations, and modern software.",
    "navigation": "Quick Navigation",
    "channels": "Channels",
    "rights": "Engineered with Precision & Minimalist Clarity.",
    "back_to_top": "Back to top",
    "github": "GitHub Profile",
    "linkedin": "LinkedIn Network"
  },
  "SKILLS_SECTION": {
    "tag": "COMPETENCIES_MATRIX",
    "title": "Technical Competencies & Engineering Stacks",
    "desc": "Rigorous domain categorization across hydraulic modeling, modern full-stack software architecture, and cyber-physical IoT telemetry.",
    "core_domains": "Core Engineering Domains:",
    "domain_hydro": "Hydraulics & Sanitation",
    "domain_soft": "Software & Web Stacks",
    "domain_iot": "SCADA & IoT Hardware",
    "skills_count": "21 Verified Production Skills",
    "featured_preview": "Featured Competencies Preview (12 Skills):",
    "expand_prompt": "Click to expand complete capability matrix with detailed engineering descriptions, standards, and levels.",
    "expand_btn": "Expand Full Competency Matrix & Tables",
    "collapse_btn": "Collapse Matrix"
  },
  "FREELANCE_SECTION": {
    "tag": "COMMERCIAL_SOFTWARE",
    "title": "Freelance Engineering & Bespoke Software",
    "desc": "High-reliability desktop solutions, access control ERPs, and custom scientific data visualizers designed and deployed for commercial business clients.",
    "capabilities": "Engineered Capabilities",
    "view_features": "View Full Capabilities",
    "expand_prompt": "Click to expand all engineering capabilities, hardware integrations, and client deployment details.",
    "expand_btn": "Expand All Commercial Systems",
    "collapse_btn": "Collapse Systems"
  },
  "WORKS": {
    "section_tag": "Signature Works",
    "section_title": "Selected Engineering & Software Systems",
    "section_desc": "A curated portfolio of production desktop applications, IoT telemetry pipelines, and computational hydraulic models built for real-world impact.",
    "constracker_title": "Constracker Suite",
    "constracker_sub": "Civil Engineering & Construction Management Desktop ERP",
    "constracker_tag": "Desktop Application • Civil ERP",
    "constracker_desc": "Offline-first desktop software engineered to eliminate data fragmentation on construction sites. Built with Electron, React 18, and SQLite3 to unify worker assignments, expense budgeting, material inventory, and specialized measurements without requiring active internet.",
    "constracker_h1": "Offline-first local SQLite architecture with zero-latency data querying in remote locations.",
    "constracker_h2": "7 integrated core modules: Projects, Workers, Expenses, Inventory, Tasks, Metre, and KPIs.",
    "constracker_h3": "Cross-platform native executable packaging via Electron Builder.",
    "waterfit_title": "WaterFit Telemetry",
    "waterfit_sub": "Cloud-Connected Water Consumption & IoT Microservice",
    "waterfit_tag": "IoT Telemetry • Cloud Microservice",
    "waterfit_desc": "Asynchronous telemetry platform connecting domestic water sensors and conversational interfaces. Combines Telegram Bot API with an asynchronous Python FastAPI backend and Firebase Firestore to log hydration, calibrate fluid deficits to ambient temperatures, and spot abnormal micro-leaks.",
    "waterfit_h1": "Conversational sub-2s ingestion interface via Telegram Bot API.",
    "waterfit_h2": "Asynchronous FastAPI webhook listeners with event-driven background tasks.",
    "waterfit_h3": "Real-time sync to Firebase with proactive deficit alerts and leak anomaly flags.",
    "maktabi_title": "Maktabi POS & Commercial Systems",
    "maktabi_sub": "Production Retail Inventory Ledger & Biometric Access ERPs",
    "maktabi_tag": "Commercial Software • Retail Production",
    "maktabi_desc": "Suite of high-reliability commercial desktop applications deployed for business clients in retail and fitness. Maktabi POS manages 10,000+ item catalogs with hardware thermal receipt printing, while Al-Quds Gym Manager controls member RFID/biometric turnstiles with automated SMS/Telegram renewal alerts.",
    "maktabi_h1": "Sub-second barcode lookup across 10,000+ SKU inventory databases.",
    "maktabi_h2": "Direct ESC/POS thermal printer and automated cash drawer serial protocol control.",
    "maktabi_h3": "Hardware biometric integration with +28% member renewal increase via automated Telegram alerts.",
    "epanet_title": "EPANET 2.2 Looped Network Solver",
    "epanet_sub": "Interactive Municipal Hydraulic Graph & Numerical Engine",
    "epanet_tag": "Hydraulic Modeling • Numerical Simulation",
    "epanet_desc": "Deterministic in-browser hydraulic solver modeling pressurized municipal drinking water distribution. Implements Hazen-Williams friction equations and Newton-Raphson nonlinear matrix iterations to compute nodal pressures, pipe velocities, valve throttling, and rupture scenarios.",
    "epanet_h1": "Deterministic head loss computation calibrated to roughness C-factors and pipe diameters.",
    "epanet_h2": "Newton-Raphson nodal gradient iterations computing dynamic pressure balances in real-time.",
    "epanet_h3": "Interactive scenario testing: diurnal morning peak, fire flow suppression, and pipe rupture.",
    "metric_arch": "Architecture",
    "metric_modules": "Modules",
    "metric_db": "Database",
    "metric_latency": "Webhook Latency",
    "metric_compliance": "Compliance Rate",
    "metric_concurrency": "Throughput",
    "metric_deployment": "Deployment",
    "metric_audit": "Audit Time Saved",
    "metric_uptime": "System Uptime",
    "metric_topology": "Topology",
    "metric_physics": "Head Loss",
    "metric_interactivity": "Interactivity"
  },
  "LAB": {
    "section_tag": "Experimental Testbed",
    "section_title": "The Interactive Engineering Lab",
    "section_desc": "Explore live, deterministic cyber-physical simulations executed directly in your browser. Toggle between the natural lagoon WWTP process train and the pressurized looped EPANET hydraulic solver.",
    "tab_scada": "SCADA Water Plant",
    "tab_epanet": "EPANET Solver",
    "lab_status": "Laboratory Architecture",
    "lab_headline": "Mathematical Rigor Meets In-Browser Interaction",
    "lab_narrative": "These engines aren't mockups. They run continuous time-step mass balance, diurnal flow algorithms, and non-linear hydraulic matrix equations entirely on client-side JavaScript.",
    "btn_launch_scada": "Launch SCADA Simulation",
    "btn_launch_epanet": "Launch EPANET Solver",
    "scada_live_title": "SCADA Process Train — Zeriba El Oued WWTP (24,000 m³/day)",
    "epanet_live_title": "EPANET 2.2 Network Solver — Looped Municipal Grid",
    "switch_to_epanet": "Switch to EPANET",
    "switch_to_scada": "Switch to SCADA",
    "close_lab": "Minimize Lab Console"
  },
  "PILLARS": {
    "section_tag": "Core Capabilities",
    "section_title": "Three Engineering Pillars",
    "section_desc": "Bridging the physical domain of fluids and infrastructure with modern computational software and edge hardware.",
    "hydro_title": "Hydraulic Systems & Infrastructure",
    "hydro_tag": "Fluid Mechanics & Sanitary Modeling",
    "hydro_desc": "Rigorous mathematical modeling of pressurized pipe grids, municipal potabilization, and wastewater treatment processes with spatial geospatial integration.",
    "software_title": "Full-Stack & Desktop Architecture",
    "software_tag": "Modern Software & Relational Systems",
    "software_desc": "High-reliability desktop applications, asynchronous microservices, type-safe frontend interfaces, and resilient local-first offline databases.",
    "iot_title": "Cyber-Physical IoT & Edge Telemetry",
    "iot_tag": "Embedded Systems & Industrial Telemetry",
    "iot_desc": "Microcontroller firmware, edge automation, industrial sensor signal conditioning, and bidirectional cloud telemetry pipelines."
  },
  "TRAJECTORY": {
    "section_tag": "Background & Leadership",
    "section_title": "Engineering Experience & Academic Roots",
    "section_desc": "Scientific club governance, enterprise telecommunication training, and accredited academic degrees in municipal water services and hydraulics.",
    "col_leadership": "Leadership & Industry Training",
    "col_education": "Academic Credentials",
    "bernoulli_role": "President",
    "bernoulli_org": "Bernoulli Hydraulics Scientific Club",
    "bernoulli_type": "Leadership & Technical Mentorship",
    "bernoulli_b1": "Elected to lead an executive committee of 15+ student engineers and a community of 100+ active members.",
    "bernoulli_b2": "Designed and delivered technical masterclasses in EPANET 2.2 hydraulic modeling and ArcGIS Pro spatial analysis.",
    "bernoulli_b3": "Conducted hands-on IoT hardware workshops interfacing Arduino microcontrollers with flow, pressure, and turbidity sensors.",
    "bernoulli_b4": "Coordinated technical field delegations to regional municipal water treatment plants and dam reservoirs.",
    "huawei_role": "Enterprise Telecommunications Intern",
    "huawei_org": "Huawei ICT Academy, Algiers",
    "huawei_type": "Enterprise Network Engineering",
    "huawei_b1": "Mastered enterprise IP routing and switching protocols (OSPF, BGP, VLAN tagging, QoS) across production equipment.",
    "huawei_b2": "Analyzed data center network redundancy topologies and low-latency packet transmission architectures.",
    "huawei_b3": "Transferred enterprise network reliability principles directly to industrial SCADA and edge IoT sensor networks.",
    "ms_degree": "Master of Science (M.S.) — Water & Sanitation Services Management",
    "ms_inst": "National Higher Education Institution",
    "ms_status": "Enrolled",
    "ms_detail": "Urban water cycle economics, wastewater treatment plant optimization, non-revenue water (NRW) reduction, sludge digestor treatment, and hydroinformatics computational methods.",
    "bs_degree": "Bachelor of Science (B.S.) — Hydraulics Engineering",
    "bs_inst": "Faculty of Civil & Hydraulic Engineering",
    "bs_status": "Graduated with Distinction",
    "bs_detail": "Fluid mechanics, pressurized pipeline hydraulics, open-channel flow, hydrology, dam engineering, reinforced concrete for hydraulic structures, and soil mechanics."
  },
  "ACADEMIC_HUB": {
    "section_badge": "ACADEMIC TRANSFORMATION // FLUIDEV",
    "section_title": "Academic Transformation & Thesis Hub",
    "section_subtitle": "Transforming raw scientific research and engineering drafts into defense-ready theses, high-impact Soutenance presentation decks, and university-compliant publications.",
    "stats": {
      "theses_transformed": "50+ Theses",
      "theses_detail": "Delivered for Master & PhD defenses",
      "defense_ready": "100%",
      "defense_detail": "Jury-compliant formatting & timing",
      "turnaround": "< 5 Days",
      "turnaround_detail": "Rapid turnaround for critical deadlines",
      "satisfaction": "3 Languages",
      "satisfaction_detail": "Arabic, French & English proficiency"
    },
    "tabs": {
      "thesis_makeover": "Thesis Makeover",
      "presentation_mockup": "Defense Presentation",
      "services": "Academic Services"
    },
    "makeover": {
      "kicker": "BEFORE & AFTER // INTERACTIVE MAKEOVER",
      "title": "Your research deserves presentation that matches your effort.",
      "description": "We take raw unformatted drafts, disorganized citations, and broken headings, turning them into a clean, university-compliant, defense-ready manuscript.",
      "toggle_split": "Split Compare",
      "toggle_before": "Raw Draft (Before)",
      "toggle_after": "FluiDev Thesis (After)",
      "slider_instruction": "Drag the slider or click buttons to reveal the structural transformation",
      "before_badge": "BEFORE // RAW DRAFT",
      "before_status": "Unstructured & Disorganized",
      "before_title": "Study of WWTP facultative lagoon aeration",
      "before_penalty": "Formatting penalty & missing citations",
      "before_note_1": "Inconsistent margins & uncalibrated fonts",
      "before_note_2": "Broken heading numbering & missing styles",
      "before_note_3": "Disorganized manual bibliography",
      "before_note_4": "Typographical errors & informal phrasing",
      "after_badge": "AFTER // DEFENSE READY",
      "after_status": "Accredited University Standard",
      "after_chapter": "CHAPTER 01 // HYDRODYNAMICS",
      "after_title": "Hydrodynamic Modeling and Dissolved Oxygen Optimization in Facultative Lagoons",
      "after_subtitle": "National Higher School of Hydraulics • Research Thesis",
      "after_lead": "Experimental analysis of biological kinetics and kinetic mass transfer in decentralized wastewater stabilization ponds under arid climate conditions.",
      "after_citation": "[Baatas et al., 2026 • IEEE / APA 7th Compliant]",
      "hotspots": {
        "h1_title": "Structural Heading Hierarchy",
        "h1_desc": "University-approved H1/H2/H3 styles with calibrated leading and automated section numbering.",
        "h2_title": "Automated Indexing & Figures",
        "h2_desc": "Dynamic Table of Contents, List of Figures and Tables, and separate Roman/Arabic pagination.",
        "h3_title": "Unified APA / IEEE References",
        "h3_desc": "Standardized citations with DOI verification and Mendeley/Zotero reference manager sync.",
        "h4_title": "Academic Proofreading & Terminology",
        "h4_desc": "Rigorous scientific terminology polish and grammatical correction in Arabic, French, and English."
      }
    },
    "presentation": {
      "kicker": "SOUTENANCE DEFENSE SLIDE // PRESENTATION DECK",
      "title": "From dense thesis chapters to an impactful, persuasive defense.",
      "subtitle": "Juries evaluate clarity and confidence. We craft executive presentation decks tailored for Master and PhD defenses with custom vector charts, data infographics, and clean storytelling.",
      "screen_kicker": "THESIS DEFENSE // SOUTENANCE 2026",
      "slide_title": "RESEARCH FINDINGS: WWTP OPTIMIZATION",
      "slide_subtitle": "Hydroinformatics telemetry & mass balance analysis",
      "presenter": "Eng. Mohamed Baatas — Hydroinformatics Engineer",
      "institution": "National Higher School of Hydraulics",
      "metrics": {
        "cod_label": "COD Removal Efficiency",
        "cod_value": "92.4%",
        "cod_target": "Target > 85.0%",
        "bod_label": "BOD5 Compliance Rate",
        "bod_value": "89.1%",
        "bod_target": "Regulatory Norms Met",
        "energy_label": "Aeration Energy Savings",
        "energy_value": "+28.5%",
        "energy_target": "Closed-loop DO Control",
        "do_label": "Dissolved Oxygen Stability",
        "do_value": "4.8 mg/L",
        "do_target": "Optimal Biological Range"
      },
      "takeaways": [
        "Structured & concise narrative highlighting experimental methodology",
        "High-definition vector charts that impress defense committee members",
        "Visual pacing engineered to keep jury attention within strict time limits"
      ]
    },
    "services": {
      "kicker": "COMPREHENSIVE ACCOMPANIMENT",
      "title": "Four Core Academic Engineering Services",
      "subtitle": "End-to-end editorial, technical, and presentation assistance for researchers and engineering students.",
      "items": {
        "format": {
          "number": "01",
          "title": "Academic Formatting & University Standards",
          "desc": "Complete formatting aligned with official university guidelines, margin standards, font hierarchy, and automated pagination.",
          "deliverables": ["Official University Guidelines", "Automated Table of Contents & Figures", "Hierarchical Section Numbering", "Front Matter & Appendices Layout"]
        },
        "language": {
          "number": "02",
          "title": "Scientific Linguistic Proofreading",
          "desc": "Rigorous linguistic proofreading in Arabic, French, and English, eliminating grammatical flaws and elevating academic phrasing.",
          "deliverables": ["Academic Phrasing & Syntax Polish", "Precise Scientific Terminology", "Trilingual Review (AR / FR / EN)", "Zero Grammar or Typographical Flaws"]
        },
        "references": {
          "number": "03",
          "title": "Reference Management & Indexing",
          "desc": "Standardized citation styling (APA 7th, IEEE), DOI verification, bibliography consolidation, and table/figure indexing.",
          "deliverables": ["APA 7th / IEEE / Vancouver Standards", "DOI & Link Verification", "Mendeley / Zotero / BibTeX Integration", "Figure & Table Cross-Referencing"]
        },
        "presentation": {
          "number": "04",
          "title": "Soutenance Defense Slide Decks",
          "desc": "High-impact presentation decks engineered for defense juries, combining executive conciseness with custom scientific charts.",
          "deliverables": ["Defense-Ready PowerPoint / PDF", "Custom Vector Infographics & Charts", "Structured Slide Flow & Timing", "Speaker Notes & Presentation Coaching"]
        }
      }
    },
    "ethics": {
      "badge": "ACADEMIC INTEGRITY GUARANTEE",
      "title": "Responsible Academic Accompaniment & Scientific Ethics",
      "description": "We provide editorial, formatting, linguistic, and presentation structuring support. All core scientific research, calculations, data collection, and intellectual conclusions remain 100% the student's original work in strict adherence to academic honesty and ethics."
    },
    "cta": {
      "ready_kicker": "READY FOR YOUR DEFENSE?",
      "title": "Book Your Academic Thesis & Presentation Makeover",
      "subtitle": "Send your field of study, draft document, and target defense deadline for an immediate technical evaluation and timeline quote.",
      "btn_whatsapp": "Inquire via WhatsApp",
      "btn_telegram": "Contact on Telegram",
      "btn_inquire": "Order Academic Support",
      "guarantees": [
        "Rapid turnaround respecting tight defense deadlines",
        "Strict confidentiality & 100% scientific originality preservation",
        "Continuous adjustments and revisions up to defense day"
      ]
    }
  }
}
`

### File: src/locales/fr.json

`json
{
  "HERO_DATA": {
    "fullName": "Mohamed Baatas",
    "title": "Ingénieur en Hydroinformatique",
    "subtitle": "Modélisation de Systèmes Hydrauliques • Télémétrie IoT Embarquée • Logiciels Techniques",
    "badge": "ÉTAT DU SYSTÈME : OPÉRATIONNEL",
    "bio": "Ingénieur en Hydroinformatique faisant le pont entre la mécanique des fluides classique, les réseaux de distribution d'eau sous pression, et la télémétrie IoT cyber-physique moderne. Expérimenté dans les systèmes SCADA de potabilisation d'eau municipale, la modélisation hydraulique EPANET, et l'architecture logicielle full-stack.",
    "location": "Alger, Algérie / Disponible en Remote",
    "availability": "Disponible pour des rôles en Modélisation Hydraulique, Conseil en Télémétrie IoT & Ingénierie à Temps Plein",
    "kpis": [
      {
        "label": "Simulation de Réseau",
        "value": "+45 km",
        "detail": "Modèle EPANET 2.2 EPS"
      },
      {
        "label": "Latence Télémétrie",
        "value": "<120 ms",
        "detail": "Edge Capteur-vers-Cloud"
      },
      {
        "label": "Logiciels Commerciaux",
        "value": "3 Déployés",
        "detail": "POS & ERP en Production"
      },
      {
        "label": "Fondation Académique",
        "value": "Licence + Master",
        "detail": "Hydraulique & Assainissement"
      }
    ]
  },
  "CASE_STUDIES": [
    {
      "id": "waterfit-telemetry",
      "title": "WaterFit — Télémétrie d'Hydratation & Biométrique Connectée au Cloud",
      "category": "Microservices Cloud // Architecture Asynchrone // Télémétrie",
      "summary": "Plateforme asynchrone à faible friction pour le suivi de l'hydratation, intégrant l'API Telegram Bot, un backend Python FastAPI, et Firebase Realtime Database.",
      "problem": "Les ingénieurs sur le terrain, les athlètes et les travailleurs industriels dans des environnements à forte chaleur ont besoin d'un suivi précis de l'hydratation, calibré selon la température ambiante et l'effort physiologique. Les applications mobiles traditionnelles à écrans multiples souffrent d'une forte friction et d'une faible observance.",
      "methodology": [
        "Construction d'une interface d'ingestion conversationnelle utilisant l'API Telegram Bot, permettant un enregistrement rapide en un clic et par la voix (interaction < 2 secondes).",
        "Développement d'un backend Python asynchrone utilisant FastAPI et des écouteurs de webhook asyncio pour le traitement de la charge utile basé sur les événements.",
        "Intégration de Firebase Realtime Database et Firestore pour une synchronisation instantanée inter-appareils.",
        "Implémentation d'algorithmes dynamiques d'hydratation métabolique calculant les objectifs hydriques personnalisés en fonction de la température ambiante (API OpenWeather), du poids corporel et de la durée de l'exercice.",
        "Programmation de workers cron proactifs déclenchés lorsque le déficit hydrique dépasse les marges de sécurité."
      ],
      "stack": [
        "Python 3.11",
        "API Telegram Bot",
        "FastAPI",
        "Firebase Realtime DB",
        "Webhooks Asyncio",
        "API OpenWeather",
        "Cloud Functions"
      ],
      "metrics": [
        {
          "label": "Latence Webhook",
          "value": "<180 ms"
        },
        {
          "label": "Observance Utilisateur",
          "value": "+340%"
        },
        {
          "label": "Pic Concurrent",
          "value": ">500 req/s"
        },
        {
          "label": "Latence Synchro",
          "value": "<50 ms"
        }
      ]
    },
    {
      "id": "constracker-suite",
      "title": "Constracker Suite — Application de Bureau pour la Gestion de Construction",
      "category": "Génie Civil // Logiciel de Bureau // Gestion de Projet",
      "summary": "Application de bureau complète construite pendant le M1 pour rationaliser la gestion de la construction. Fournit une plateforme unifiée pour suivre et gérer les projets, les travailleurs, les dépenses, les stocks, les tâches et les métrés.",
      "problem": "La gestion de la construction implique le suivi de ressources dispersées—de la présence quotidienne des travailleurs à l'inventaire des matériaux et aux dépenses budgétaires. Le suivi manuel traditionnel entraîne une fragmentation des données et un contrôle inefficace des coûts.",
      "methodology": [
        "Développement d'une application de bureau offline-first utilisant Electron pour assurer un fonctionnement ininterrompu sur les chantiers de construction avec un accès Internet limité.",
        "Conception d'un frontend React 18 avec Vite et TypeScript pour un rendu d'interface utilisateur performant et typé, stylisé avec Tailwind CSS et shadcn/ui.",
        "Implémentation d'une base de données relationnelle locale SQLite3 accédée via des stratégies de récupération de données robustes avec TanStack Query.",
        "Construction de 7 modules principaux : Tableau de bord (KPIs), Projets, Travailleurs (affectations), Dépenses (budgétisation), Inventaire, Tâches, et Métré (mesures de construction spécialisées).",
        "Empaquetage et compilation de binaires de bureau exécutables à l'aide d'Electron Builder pour un déploiement multiplateforme transparent."
      ],
      "stack": [
        "Electron",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "SQLite3",
        "TanStack Query",
        "shadcn/ui",
        "React Router"
      ],
      "metrics": [
        {
          "label": "Architecture",
          "value": "Electron + React"
        },
        {
          "label": "Base de Données",
          "value": "SQLite3 Local"
        },
        {
          "label": "Système UI",
          "value": "shadcn/ui"
        },
        {
          "label": "Portée",
          "value": "7 Modules Principaux"
        }
      ]
    },
    {
      "id": "scada-wwtp",
      "title": "Simulateur SCADA Intelligent de STEP — Zeriba El Oued",
      "category": "Automatisation Industrielle // Logiciel de Bureau // Intelligence Artificielle",
      "summary": "Simulation continue de processus cyber-physique modélisée sur la station d'épuration municipale de Zeriba El Oued, construite comme une application de bureau PyQt6.",
      "problem": "La formation des opérateurs sur les Stations d'Épuration des Eaux Usées (STEP) à lagunage naturel est difficile sans risquer des manquements à la conformité. L'installation nécessitait un jumeau numérique haute fidélité pour simuler les processus biologiques et prédire dynamiquement la qualité de l'effluent.",
      "methodology": [
        "Construction d'un simulateur de bureau utilisant Python 3 et PyQt6, offrant un environnement SCADA moderne à 12 interfaces, incluant des Cartes Synoptiques, un Tableau de bord et des Journaux d'Alarmes.",
        "Modélisation de l'usine de Zeriba El Oued (24 000 m³/jour), englobant le prétraitement, la digestion anaérobie, les lagunes facultatives et les lits de séchage des boues.",
        "Implémentation du multithreading à l'aide de QThread pour séparer la logique de simulation physique complexe de l'interface utilisateur, assurant une surveillance fluide et sans blocage.",
        "Intégration de modèles de prédiction basés sur l'IA pour prévoir la qualité de l'eau effluente (DBO5, DCO, MES) et prédire les défaillances des pompes électromécaniques en fonction des heures de fonctionnement.",
        "Conception d'une base de données d'historisation SQLite robuste pour archiver les lectures matricielles continues de la télémétrie, les déclenchements de verrouillage et les événements d'alarme critiques."
      ],
      "stack": [
        "Python 3",
        "PyQt6",
        "SQLite",
        "QThread (Multithreading)",
        "Signaux/Slots Qt",
        "Modèles de Prédiction IA"
      ],
      "metrics": [
        {
          "label": "Capacité de l'Usine",
          "value": "24 000 m³/j"
        },
        {
          "label": "Complexité UI",
          "value": "12 Interfaces"
        },
        {
          "label": "Simulation",
          "value": "Multithreadée"
        },
        {
          "label": "Intégration IA",
          "value": "Modèles de Prédiction"
        }
      ]
    }
  ],
  "SKILLS_CATEGORIES": [
    {
      "domain": "Ingénierie Hydraulique & Civile",
      "description": "Mécanique des fluides, modélisation des conduites sous pression, assainissement municipal et optimisation des réseaux d'eau.",
      "skills": [
        {
          "name": "Simulation EPANET 2.2",
          "level": "Expert",
          "detail": "Simulation en période prolongée, dégradation de la qualité de l'eau, analyse du débit d'incendie"
        },
        {
          "name": "ArcGIS Pro / ArcMap",
          "level": "Avancé",
          "detail": "Analyse spatiale de terrain, extraction MNT, cartographie vectorielle de réseaux"
        },
        {
          "name": "AutoCAD Civil 3D",
          "level": "Avancé",
          "detail": "Dessin d'infrastructures hydrauliques, alignement de profils, nivellement de conduites"
        },
        {
          "name": "Hazen-Williams & Darcy-Weisbach",
          "level": "Expert",
          "detail": "Perte de charge par friction, nombre de Reynolds, pertes singulières"
        },
        {
          "name": "Conception de Stations de Pompage",
          "level": "Avancé",
          "detail": "Courbes caractéristiques, calcul NPSH, séquençage de pompes en parallèle"
        },
        {
          "name": "Traitement de l'Eau & des Eaux Usées",
          "level": "Avancé",
          "detail": "Cinétique de coagulation, décantation lamellaire, filtres à sable rapides, chloration CT"
        },
        {
          "name": "Eau Non Facturée (NRW)",
          "level": "Avancé",
          "detail": "Secteurs de Comptage (DMA), détection acoustique de fuites, gestion de la pression"
        }
      ]
    },
    {
      "domain": "Développement & Architecture Logicielle",
      "description": "Applications web modernes basées sur les composants, microservices asynchrones, schémas relationnels et pipelines de données ETL.",
      "skills": [
        {
          "name": "Python 3.x",
          "level": "Expert",
          "detail": "FastAPI, Asyncio, Pandas, NumPy, Calcul Scientifique"
        },
        {
          "name": "React 18+ & Vite",
          "level": "Avancé",
          "detail": "Modularité des composants, hooks personnalisés, machines à états, visualisation SVG"
        },
        {
          "name": "Tailwind CSS",
          "level": "Expert",
          "detail": "Systèmes de conception de précision industrielle, ergonomie en mode sombre, grilles responsives"
        },
        {
          "name": "SQLite & PostgreSQL",
          "level": "Avancé",
          "detail": "Modélisation de bases de données relationnelles, indexation, transactions ACID, mise en cache offline-first"
        },
        {
          "name": "API REST & Webhooks",
          "level": "Expert",
          "detail": "Architecture événementielle, validation de payload, endpoints à faible latence"
        },
        {
          "name": "Firebase & Services Cloud",
          "level": "Avancé",
          "detail": "Realtime Database, Firestore, Cloud Functions, Authentification"
        },
        {
          "name": "Git & Outils CI/CD",
          "level": "Avancé",
          "detail": "Contrôle de version, tests automatisés avec Vitest/Jest, GitHub Actions"
        }
      ]
    },
    {
      "domain": "Systèmes Embarqués, SCADA & IoT",
      "description": "Firmware de microcontrôleurs, boucles de capteurs industriels, automatisation en périphérie (edge), et communications SCADA.",
      "skills": [
        {
          "name": "ESP32 & Arduino C++",
          "level": "Avancé",
          "detail": "Architecture de firmware, tâches FreeRTOS, routines d'interruption, calibration ADC"
        },
        {
          "name": "Blynk IoT Cloud & MQTT",
          "level": "Avancé",
          "detail": "Broker de télémétrie bidirectionnelle, publication/abonnement edge, widgets de tableau de bord"
        },
        {
          "name": "Interfaçage de Capteurs Industriels",
          "level": "Avancé",
          "detail": "Niveau à ultrasons, turbidité optique, transmetteurs de pH, débitmètres à effet Hall"
        },
        {
          "name": "Contrôle PID en Boucle Fermée",
          "level": "Avancé",
          "detail": "Contrôle proportionnel-intégral-dérivé de la vitesse des pompes et du dosage chimique"
        },
        {
          "name": "Détection de Défaillances Edge",
          "level": "Avancé",
          "detail": "Verrouillages matériels à sécurité intégrée, protection contre la marche à sec, déclenchements en cas de surpression"
        },
        {
          "name": "Actionneurs Matériels & Relais",
          "level": "Avancé",
          "detail": "Relais statiques, électrovannes 12V/24V, pompes de surpression DC"
        }
      ]
    }
  ],
  "FREELANCE_SOLUTIONS": [
    {
      "id": "maktabi-pos",
      "name": "Maktabi POS — Système de Gestion pour Vente au Détail & Papeterie",
      "type": "Application de Bureau Commerciale // Offline-First",
      "client": "Librairies de Détail & Boutiques de Papeterie",
      "description": "Système de point de vente et registre d'inventaire haute performance, conçu pour fonctionner en continu dans les régions où la connectivité Internet est intermittente.",
      "features": [
        "Numérisation de codes-barres en moins d'une seconde et recherche instantanée dans un catalogue de plus de 10 000 SKU.",
        "Mise en cache locale SQLite offline-first garantissant aucun temps d'arrêt pendant les coupures d'Internet.",
        "Intégration matérielle avec les imprimantes thermiques de reçus protocole ESC/POS et les tiroirs-caisses automatisés.",
        "Comptabilité complète : registres de crédit client, niveaux de gros/détail, factures fournisseurs, audits quotidiens P&L."
      ],
      "stack": [
        "Python",
        "PyQt / Interface Moderne",
        "SQLite",
        "Protocole ESC/POS",
        "Moteur PDF ReportLab"
      ],
      "impact": "Déployé activement dans les magasins commerciaux ; a réduit le temps d'audit annuel des stocks de 65 % sans aucun incident d'arrêt."
    },
    {
      "id": "alquds-gym",
      "name": "Al-Quds Gym Manager — ERP de Gestion des Adhésions & Contrôle d'Accès",
      "type": "Gestion d'Installations d'Entreprise // Accès Biométrique",
      "client": "Centres de Remise en Forme & Complexes Sportifs",
      "description": "Plateforme clé en main de gestion du cycle de vie des membres et de contrôle d'accès conçue pour éliminer les admissions non autorisées et automatiser les renouvellements d'abonnement.",
      "features": [
        "Contrôle d'accès à la réception en temps réel reliant les lecteurs de codes-barres et de cartes RFID pour signaler instantanément les adhésions expirées.",
        "Suivi automatisé des abonnements des membres avec journal quotidien des flux de trésorerie et registre des commissions des entraîneurs.",
        "Notifications SMS/Telegram automatisées alertant les membres avant l'expiration de leur adhésion.",
        "Analyses complètes des présences et cartes thermiques d'utilisation des installations aux heures de pointe."
      ],
      "stack": [
        "Python",
        "SQLite / PostgreSQL",
        "Tableau de bord React",
        "Matériel Code-barres/RFID",
        "API Telegram"
      ],
      "impact": "A éliminé les admissions non autorisées ; a augmenté le taux de renouvellement des membres de 28 % ; a numérisé plus de 1 000 profils de membres actifs."
    },
    {
      "id": "custom-consulting",
      "name": "Consulting Technique & Visualisation de Données",
      "type": "Ingénierie de Données // Consulting Hydraulique",
      "client": "Bureaux d'Études en Ingénierie & Entrepreneurs Municipaux",
      "description": "Pipelines de données scientifiques personnalisés, tableaux de bord interactifs de télémétrie web, et analyse experte de réseaux hydrauliques pour des projets d'ingénierie municipale.",
      "features": [
        "Pipelines ETL Python automatisés convertissant les journaux SCADA disparates et les résultats de simulation EPANET en rapports opérationnels propres.",
        "Visualiseurs interactifs de télémétrie sur le web pour surveiller le bilan hydrique et les lignes de charge hydraulique.",
        "Conseil sur le choix des capteurs, l'architecture des passerelles IoT (MQTT/Modbus), et l'optimisation des zones de pression du réseau."
      ],
      "stack": [
        "Python (Pandas, NumPy)",
        "FastAPI",
        "Tailwind CSS",
        "Recharts / SVG",
        "Scripting EPANET"
      ],
      "impact": "A rationalisé les cycles de reporting d'ingénierie de plusieurs jours à quelques secondes avec des résumés PDF/Excel automatisés."
    }
  ],
  "EXPERIENCE_TIMELINE": [
    {
      "role": "Président",
      "organization": "Club Scientifique d'Hydraulique Bernoulli",
      "period": "2023 - 2025",
      "location": "Campus Universitaire",
      "type": "Leadership & Mentorat Technique",
      "highlights": [
        "Élu Président pour diriger un comité de +15 élèves-ingénieurs et une communauté de +100 membres.",
        "Organisation et animation de masterclasses de formation technique en modélisation hydraulique EPANET 2.2 et en cartographie spatiale ArcGIS Pro.",
        "Animation d'ateliers pratiques d'ingénierie IoT : interfaçage de microcontrôleurs Arduino avec des capteurs de débit, de pression et de turbidité.",
        "Organisation de visites techniques sur le terrain de barrages régionaux de potabilisation de l'eau potable et de stations municipales d'épuration des eaux usées."
      ]
    },
    {
      "role": "Stagiaire en Télécommunications d'Entreprise",
      "organization": "Huawei ICT Academy",
      "period": "2024",
      "location": "Alger",
      "type": "Stage en Réseaux d'Entreprise",
      "highlights": [
        "Maîtrise des protocoles de routage et de commutation IP d'entreprise (OSPF, BGP, balisage VLAN, QoS) à travers les équipements de réseau d'entreprise.",
        "Analyse des topologies de redondance de réseau de centre de données et des architectures de transmission de paquets à faible latence.",
        "Application des principes de fiabilité et de basculement des réseaux d'entreprise directement aux réseaux industriels SCADA et de capteurs IoT."
      ]
    }
  ],
  "EDUCATION_DATA": [
    {
      "degree": "Master en Sciences (M.S.) — Gestion des Services d'Eau et d'Assainissement",
      "institution": "École Nationale Supérieure d'Hydraulique",
      "period": "En Cours (2024 - Présent)",
      "focus": "Cycle Urbain de l'Eau, Optimisation des Stations d'Épuration des Eaux Usées, Réduction de l'Eau Non Facturée, Traitement des Boues, Optimisation Énergétique du Pompage, Hydroinformatique."
    },
    {
      "degree": "Licence en Sciences (B.S.) — Ingénierie Hydraulique",
      "institution": "Faculté de Génie Civil & d'Hydraulique",
      "period": "Diplômé avec Distinction",
      "focus": "Mécanique des Fluides, Hydraulique des Conduites sous Pression, Écoulement à Surface Libre, Hydrologie, Ingénierie des Barrages, Béton Armé pour Ouvrages Hydrauliques, Mécanique des Sols."
    }
  ],
  "NAV": {
    "works": "Projets Choisis",
    "lab": "Laboratoire Interactif",
    "pillars": "Compétences",
    "academic": "Pôle Académique",
    "trajectory": "Parcours",
    "contact": "Contact"
  },
  "HEADER": {
    "name": "Mohamed Baatas",
    "role": "Hydroinformatique & Ingénierie Logicielle",
    "role_short": "Hydroinformatique & Logiciels",
    "download_cv": "CV / Résumé"
  },
  "HERO": {
    "role_tag": "Ingénieur en Hydroinformatique & Logiciels",
    "location": "Alger, Algérie / Disponible à distance",
    "headline_main": "L'Ingénierie à l'Intersection des",
    "headline_accent": "Infrastructures de l'Eau",
    "headline_end": "& du Logiciel Moderne.",
    "bio_refined": "Ingénieur de niveau Master reliant la mécanique des fluides municipale aux applications de bureau de production, aux solveurs EPANET en temps réel et à la télémétrie IoT.",
    "cta_works": "Voir les Projets Choisis",
    "cta_lab": "Laboratoire Interactif",
    "cta_cv": "Télécharger le CV",
    "stat_edu_lbl": "Formation Académique",
    "stat_edu_val": "Master + Licence",
    "stat_edu_det": "Hydraulique et Assainissement",
    "stat_prod_lbl": "Logiciels en Production",
    "stat_prod_val": "3 Systèmes Déployés",
    "stat_prod_det": "Solutions ERP et POS Commerciales",
    "stat_sim_lbl": "Moteurs de Simulation",
    "stat_sim_val": "EPANET & SCADA",
    "stat_sim_det": "Solveurs Physiques Directement dans le Navigateur",
    "stat_lead_lbl": "Leadership Scientifique",
    "stat_lead_val": "Club Bernoulli",
    "stat_lead_det": "Président et Formateur Technique"
  },
  "CASE_STUDIES_SECTION": {
    "tag": "PROJETS_INGÉNIERIE",
    "title": "Études de Cas & Systèmes Appliqués",
    "desc": "Analyse approfondie de la modélisation de distribution d'eau, des systèmes SCADA, et des pipelines de télémétrie cloud.",
    "collapse": "Réduire l'Architecture",
    "expand": "Développer la Méthodologie",
    "problem": "Énoncé du Problème & Vulnérabilité",
    "methodology": "Méthodologie d'Ingénierie & Implémentation",
    "stack": "Technologies Matérielles & Logicielles",
    "view_study": "Voir l'étude de cas complète",
    "expand_all_prompt": "Cliquez pour développer toutes les méthodologies d'ingénierie et architectures.",
    "expand_all_btn": "Développer toutes les architectures de projets",
    "collapse_all_btn": "Réduire les études de cas"
  },
  "EXPERIENCE_SECTION": {
    "tag": "PARCOURS_PRO_ACADÉMIQUE",
    "title": "Expérience en Ingénierie & Base Académique",
    "desc": "Leadership dans des associations scientifiques, formation en réseaux d'entreprise et qualifications académiques rigoureuses en hydraulique municipale et gestion de l'eau.",
    "col1": "Leadership & Expérience Industrielle",
    "col2": "Éducation Académique & Diplômes",
    "accredited": "Diplôme Accrédité",
    "focus": "Programme & Sujets Principaux",
    "credentials_count": "Master + Licence en Hydraulique • Huawei Seeds For Future • Leadership associatif",
    "expand_btn": "Afficher la chronologie complète et les diplômes",
    "collapse_btn": "Réduire la chronologie",
    "specialization": "Spécialisation :",
    "thesis": "Mémoire / Thèse :"
  },
  "SCADA": {
    "tag": "SIMULATEUR_INTERACTIF_01",
    "title": "Simulateur SCADA de Station d'Épuration",
    "desc": "Simulation cyber-physique continue en temps réel modélisée sur la station d'épuration de Zeriba El Oued. Comprend la modélisation du flux diurne, la digestion anaérobie et la photosynthèse algale facultative.",
    "status_ready": "JUMEAU CYBER-PHYSIQUE PRÊT",
    "launch_desc": "Lancez le schéma SVG interactif complet, réglez les pompes et surveillez la télémétrie.",
    "launch_btn": "Lancer le simulateur SCADA interactif",
    "collapse_btn": "Réduire le simulateur"
  },
  "EPANET": {
    "tag": "SIMULATEUR_INTERACTIF_02",
    "title": "Solveur de Réseau Hydraulique EPANET",
    "desc": "Solveur en temps réel pour un réseau de distribution d'eau sous pression. Comprend les calculs de perte de charge Hazen-Williams, la résolution de la pression des nœuds et la gestion des conditions aux limites des réservoirs.",
    "status_ready": "MOTEUR HYDRAULIQUE COMPILÉ",
    "launch_desc": "Lancez la vue du réseau interactif, inspectez les pressions nodales et testez les scénarios.",
    "launch_btn": "Lancer le solveur hydraulique EPANET",
    "collapse_btn": "Réduire le simulateur"
  },
  "FOOTER": {
    "desc": "Portfolio d'ingénierie spécialisé reliant l'hydraulique municipale, la télémétrie SCADA, la simulation EPANET et le logiciel moderne.",
    "navigation": "Navigation Rapide",
    "channels": "Canaux de Contact",
    "rights": "Conçu avec précision d'ingénierie et clarté architecturale.",
    "back_to_top": "Haut de page",
    "github": "Profil GitHub",
    "linkedin": "Réseau LinkedIn"
  },
  "SKILLS_SECTION": {
    "tag": "MATRICE_DE_COMPETENCES",
    "title": "Compétences Techniques & Piles d'Ingénierie",
    "desc": "Catégorisation rigoureuse couvrant la modélisation hydraulique, l'architecture logicielle moderne et la télémétrie IoT.",
    "core_domains": "Domaines clés de l'ingénierie :",
    "domain_hydro": "Hydraulique et Assainissement",
    "domain_soft": "Logiciels et Piles Web",
    "domain_iot": "Matériel SCADA et IoT",
    "skills_count": "21 compétences vérifiées en production",
    "featured_preview": "Aperçu des compétences clés (12 compétences) :",
    "expand_prompt": "Cliquez pour développer la matrice complète avec descriptions détaillées et niveaux.",
    "expand_btn": "Afficher la matrice complète et les tableaux",
    "collapse_btn": "Réduire la matrice"
  },
  "FREELANCE_SECTION": {
    "tag": "LOGICIELS_COMMERCIAUX",
    "title": "Ingénierie Freelance & Logiciels Sur Mesure",
    "desc": "Solutions de bureau haute fiabilité, ERP de contrôle d'accès et visualiseurs de données scientifiques déployés pour des clients commerciaux.",
    "capabilities": "Capacités d'Ingénierie",
    "view_features": "Voir toutes les capacités",
    "expand_prompt": "Cliquez pour développer toutes les fonctionnalités et intégrations matérielles.",
    "expand_btn": "Développer tous les systèmes commerciaux",
    "collapse_btn": "Réduire les systèmes"
  },
  "WORKS": {
    "section_tag": "Travaux Choisis",
    "section_title": "Systèmes d'Ingénierie & Logiciels Sélectionnés",
    "section_desc": "Une sélection rigoureuse d'applications de bureau de production, de pipelines de télémétrie IoT et de modèles hydrauliques computationnels.",
    "constracker_title": "Constracker Suite",
    "constracker_sub": "ERP de Bureau pour l'Ingénierie Civile & Gestion de Chantier",
    "constracker_tag": "Application de Bureau • ERP Chantier",
    "constracker_desc": "Logiciel de bureau conçu pour fonctionner sans connexion internet sur les chantiers. Conçu avec Electron, React 18 et SQLite3 pour unifier le suivi des ouvriers, les dépenses, l'inventaire et les métrés spécialisés.",
    "constracker_h1": "Architecture SQLite locale offline-first avec zéro latence.",
    "constracker_h2": "7 modules intégrés : Projets, Ouvriers, Dépenses, Inventaire, Tâches, Métré et KPIs.",
    "constracker_h3": "Génération d'exécutables natifs multiplateformes via Electron Builder.",
    "waterfit_title": "WaterFit Telemetry",
    "waterfit_sub": "Suivi de Consommation d'Eau Connecté au Cloud & Microservice IoT",
    "waterfit_tag": "Télémétrie IoT • Microservice Cloud",
    "waterfit_desc": "Plateforme de télémétrie asynchrone reliant des capteurs d'eau domestiques à une interface conversationnelle Telegram Bot, un backend Python FastAPI et Firebase pour détecter les micro-fuites.",
    "waterfit_h1": "Interface d'ingestion via Telegram Bot en moins de 2 secondes.",
    "waterfit_h2": "Écouteurs webhook asynchrones FastAPI avec tâches d'arrière-plan.",
    "waterfit_h3": "Synchronisation temps réel avec alertes de déficit et drapeaux d'anomalie de fuite.",
    "maktabi_title": "Maktabi POS & Systèmes Commerciaux",
    "maktabi_sub": "Gestion de Caisse & ERP de Contrôle d'Accès Biométrique",
    "maktabi_tag": "Logiciels Commerciaux • Déployés en Production",
    "maktabi_desc": "Suite d'applications de bureau déployées pour des entreprises commerciales. Maktabi POS gère des catalogues de plus de 10 000 articles avec imprimantes thermiques, et Al-Quds Gym contrôle les tourniquets biométriques avec alertes Telegram.",
    "maktabi_h1": "Scan et recherche de code-barres en moins d'une seconde sur 10 000+ références.",
    "maktabi_h2": "Contrôle direct par protocole série des imprimantes thermiques ESC/POS et tiroirs-caisses.",
    "maktabi_h3": "Intégration matérielle biométrique avec augmentation de 28% des renouvellements via alertes automatiques.",
    "epanet_title": "EPANET 2.2 Solveur de Réseau Bouclé",
    "epanet_sub": "Graphe Hydraulique Municipal & Moteur Numérique Temps Réel",
    "epanet_tag": "Modélisation Hydraulique • Simulation Numérique",
    "epanet_desc": "Solveur hydraulique dans le navigateur modélisant la distribution d'eau sous pression. Implémente les équations de Hazen-Williams et les itérations non linéaires de Newton-Raphson pour calculer les pressions nodales et vitesses.",
    "epanet_h1": "Calcul déterministe des pertes de charge calibré aux diamètres et coefficients de rugosité C.",
    "epanet_h2": "Itérations de gradient de Newton-Raphson calculant les équilibres de pression en temps réel.",
    "epanet_h3": "Scénarios interactifs : pointe matinale, débit d'incendie, laminage de vannes et rupture de conduite.",
    "metric_arch": "Architecture",
    "metric_modules": "Modules",
    "metric_db": "Base de données",
    "metric_latency": "Latence Webhook",
    "metric_compliance": "Taux d'Adhésion",
    "metric_concurrency": "Débit",
    "metric_deployment": "Déploiement",
    "metric_audit": "Temps d'Audit",
    "metric_uptime": "Disponibilité",
    "metric_topology": "Topologie",
    "metric_physics": "Pertes de Charge",
    "metric_interactivity": "Interactivité"
  },
  "LAB": {
    "section_tag": "Banc d'Essai Expérimental",
    "section_title": "Le Laboratoire d'Ingénierie Interactif",
    "section_desc": "Explorez des simulations cyber-physiques déterministes exécutées directement dans votre navigateur. Basculez entre la station d'épuration lagunaire (SCADA) et le solveur de réseau EPANET 2.2.",
    "tab_scada": "Station SCADA WWTP",
    "tab_epanet": "Solveur EPANET",
    "lab_status": "Architecture du Laboratoire",
    "lab_headline": "Rigueur Mathématique et Interaction Web Directe",
    "lab_narrative": "Ces moteurs ne sont pas de simples maquettes. Ils exécutent des bilans massiques continus et des équations matricielles hydrauliques entièrement en JavaScript côté client.",
    "btn_launch_scada": "Lancer la Simulation SCADA",
    "btn_launch_epanet": "Lancer le Solveur EPANET",
    "scada_live_title": "Chaîne de Traitement SCADA — STEP Zeriba El Oued (24 000 m³/j)",
    "epanet_live_title": "Solveur EPANET 2.2 — Réseau Municipal Bouclé",
    "switch_to_epanet": "Basculer vers EPANET",
    "switch_to_scada": "Basculer vers SCADA",
    "close_lab": "Réduire la Console du Laboratoire"
  },
  "PILLARS": {
    "section_tag": "Compétences Clés",
    "section_title": "Trois Piliers d'Ingénierie",
    "section_desc": "Relier le domaine physique des fluides et des infrastructures aux logiciels computationnels et au matériel IoT.",
    "hydro_title": "Systèmes Hydrauliques & Infrastructures",
    "hydro_tag": "Mécanique des Fluides & Modélisation Sanitaire",
    "hydro_desc": "Modélisation mathématique rigoureuse des réseaux sous pression, potabilisation municipale et traitement des eaux usées avec SIG spatial.",
    "software_title": "Architecture Logicielle & Bureau",
    "software_tag": "Logiciels Modernes & Systèmes Relationnels",
    "software_desc": "Applications de bureau haute fiabilité, microservices asynchrones, interfaces web sécurisées et bases de données locales robustes.",
    "iot_title": "IoT Cyber-Physique & Télémétrie Edge",
    "iot_tag": "Systèmes Embarqués & Capteurs Industriels",
    "iot_desc": "Firmware pour microcontrôleurs, automatisation locale, conditionnement de signaux industriels et télémétrie bidirectionnelle cloud."
  },
  "TRAJECTORY": {
    "section_tag": "Parcours & Leadership",
    "section_title": "Expérience d'Ingénierie & Racines Académiques",
    "section_desc": "Gouvernance de club scientifique, formation aux réseaux d'entreprise et diplômes universitaires en hydraulique et services de l'eau.",
    "col_leadership": "Leadership & Expérience Industrielle",
    "col_education": "Titres & Diplômes Académiques",
    "bernoulli_role": "Président",
    "bernoulli_org": "Club Scientifique d'Hydraulique Bernoulli",
    "bernoulli_type": "Leadership & Mentorat Technique",
    "bernoulli_b1": "Élu pour diriger un comité exécutif de 15+ ingénieurs et une communauté de plus de 100 membres.",
    "bernoulli_b2": "Conception et animation de masterclasses en modélisation EPANET 2.2 et analyse spatiale ArcGIS Pro.",
    "bernoulli_b3": "Animation d'ateliers pratiques IoT reliant des microcontrôleurs Arduino à des capteurs de débit, pression et turbidité.",
    "bernoulli_b4": "Organisation de délégations techniques vers les stations d'épuration et barrages régionaux.",
    "huawei_role": "Stagiaire en Télécommunications d'Entreprise",
    "huawei_org": "Huawei ICT Academy, Alger",
    "huawei_type": "Ingénierie Réseaux d'Entreprise",
    "huawei_b1": "Maîtrise des protocoles de routage et commutation IP (OSPF, BGP, VLANs, QoS) sur matériel réel.",
    "huawei_b2": "Analyse des topologies de redondance de centres de données et transmissions à faible latence.",
    "huawei_b3": "Application directe des principes de fiabilité des télécoms aux réseaux SCADA et capteurs IoT.",
    "ms_degree": "Master of Science (M.S.) — Gestion des Services d'Eau & Assainissement",
    "ms_inst": "École Nationale Supérieure d'Hydraulique",
    "ms_status": "En cours",
    "ms_detail": "Économie du cycle urbain de l'eau, optimisation des stations d'épuration, réduction des eaux non facturées (NRW), traitement des boues et hydroinformatique.",
    "bs_degree": "Licence en Sciences (B.S.) — Ingénierie Hydraulique",
    "bs_inst": "Faculté de Génie Civil & Hydraulique",
    "bs_status": "Diplômé avec Distinction",
    "bs_detail": "Mécanique des fluides, hydraulique en charge, écoulement à surface libre, hydrologie, barrages, béton armé hydraulique et mécanique des sols."
  },
  "ACADEMIC_HUB": {
    "section_badge": "TRANSFORMATION ACADÉMIQUE // FLUIDEV",
    "section_title": "Accompagnement Académique & Pôle Thèses",
    "section_subtitle": "Transformation de brouillons et recherches d'ingénierie bruts en mémoires prêts pour soutenance, présentations percutantes et publications conformes aux normes universitaires.",
    "stats": {
      "theses_transformed": "+50 Thèses",
      "theses_detail": "Livrées pour soutenances de Master & Doctorat",
      "defense_ready": "100%",
      "defense_detail": "Conformes aux exigences et au timing du jury",
      "turnaround": "< 5 Jours",
      "turnaround_detail": "Délai rapide pour les échéances critiques",
      "satisfaction": "3 Langues",
      "satisfaction_detail": "Maîtrise en Arabe, Français & Anglais"
    },
    "tabs": {
      "thesis_makeover": "Refonte du Mémoire",
      "presentation_mockup": "Présentation Soutenance",
      "services": "Services Académiques"
    },
    "makeover": {
      "kicker": "AVANT & APRÈS // TRANSFORMATION INTERACTIVE",
      "title": "Votre recherche mérite une présentation à la hauteur de vos efforts.",
      "description": "Nous transformons les brouillons bruts, les citations désordonnées et les titres disparates en un manuscrit académique soigné, rigoureux et prêt pour le jury.",
      "toggle_split": "Comparaison Séparée",
      "toggle_before": "Brouillon Brut (Avant)",
      "toggle_after": "Mémoire FluiDev (Après)",
      "slider_instruction": "Faites glisser le curseur ou cliquez sur les boutons pour révéler la métamorphose",
      "before_badge": "AVANT // BROUILLON BRUT",
      "before_status": "Non structuré & Désorganisé",
      "before_title": "Étude aération lagunage facultatif STEP",
      "before_penalty": "Pénalités de mise en page & citations manquantes",
      "before_note_1": "Marges irrégulières & polices disparates",
      "before_note_2": "Hiérarchie de titres rompue sans styles Word",
      "before_note_3": "Bibliographie manuelle désordonnée",
      "before_note_4": "Fautes de frappe & style non académique",
      "after_badge": "APRÈS // PRÊT POUR SOUTENANCE",
      "after_status": "Normes Universitaires Accréditées",
      "after_chapter": "CHAPITRE 01 // HYDRODYNAMIQUE",
      "after_title": "Modélisation Hydrodynamique et Optimisation de l'Oxygène Dissous en Lagunage Facultatif",
      "after_subtitle": "École Nationale Supérieure d'Hydraulique • Mémoire de Recherche",
      "after_lead": "Analyse expérimentale des cinétiques biologiques et du transfert de masse dans les stations d'épuration décentralisées sous climat aride.",
      "after_citation": "[Baatas et al., 2026 • Normes IEEE / APA 7th]",
      "hotspots": {
        "h1_title": "Hiérarchie Structurée des Titres",
        "h1_desc": "Styles H1/H2/H3 conformes aux normes universitaires avec interligne calibré et numérotation automatique des chapitres.",
        "h2_title": "Indexation Automatique & Figures",
        "h2_desc": "Sommaire dynamique, tables des figures et tableaux, avec pagination distincte (romaine pour les préliminaires, arabe pour le corps).",
        "h3_title": "Harmonisation APA / IEEE",
        "h3_desc": "Normalisation des citations dans le texte et de la bibliographie avec vérification des DOI et synchronisation Zotero/Mendeley.",
        "h4_title": "Relecture Scientifique & Terminologie",
        "h4_desc": "Correction orthographique rigoureuse, fluidité syntaxique et harmonisation de la terminologie technique en arabe, français et anglais."
      }
    },
    "presentation": {
      "kicker": "DIAPOSITIVE DE SOUTENANCE // SUPPORT VISUEL",
      "title": "Du mémoire technique à une soutenance fluide et percutante devant le jury.",
      "subtitle": "Les jurys évaluent la clarté et la maîtrise. Nous créons des supports de présentation conçus sur mesure pour les soutenances de Master et Doctorat avec infographies vectorielles et storytelling soigné.",
      "screen_kicker": "SOUTENANCE DE THÈSE // 2026",
      "slide_title": "RÉSULTATS DE RECHERCHE : OPTIMISATION STEP",
      "slide_subtitle": "Télémétrie hydroinformatique & bilan de masse",
      "presenter": "Ing. Mohamed Baatas — Ingénieur Hydroinformatique",
      "institution": "École Nationale Supérieure d'Hydraulique",
      "metrics": {
        "cod_label": "Rendement Élimination DCO",
        "cod_value": "92.4%",
        "cod_target": "Objectif requis > 85.0%",
        "bod_label": "Conformité DBO5",
        "bod_value": "89.1%",
        "bod_target": "Normes Réglementaires Respectées",
        "energy_label": "Économie d'Énergie Aération",
        "energy_value": "+28.5%",
        "energy_target": "Régulation en Boucle Fermée",
        "do_label": "Stabilité Oxygène Dissous",
        "do_value": "4.8 mg/L",
        "do_target": "Plage Biologique Optimale"
      },
      "takeaways": [
        "Narration concise et structurée mettant en valeur la rigueur méthodologique",
        "Graphiques vectoriels haute définition captant l'attention du jury",
        "Rythme visuel calibré pour respecter scrupuleusement le temps imparti"
      ]
    },
    "services": {
      "kicker": "ACCOMPAGNEMENT INTÉGRAL",
      "title": "Quatre Services Clés d'Ingénierie Académique",
      "subtitle": "Assistance éditoriale, technique et visuelle complète pour chercheurs et étudiants en ingénierie.",
      "items": {
        "format": {
          "number": "01",
          "title": "Mise en Page Académique Professionnelle",
          "desc": "Mise en page rigoureuse selon le canevas officiel de l'université, marges, hiérarchie typographique et pagination automatique.",
          "deliverables": ["Respect du Guide de l'Université", "Sommaire & Tables des Figures Automatiques", "Numérotation Hiérarchique des Titres", "Pages de Garde & Annexes Structurées"]
        },
        "language": {
          "number": "02",
          "title": "Relecture & Correction Linguistique",
          "desc": "Relecture scientifique approfondie en arabe, français et anglais, élimination des coquilles et raffinement du style académique.",
          "deliverables": ["Syntaxe Scientifique Soignée", "Orthographe & Grammaire Impeccables", "Relecture Trilingue (AR / FR / EN)", "Terminologie Technique Unifiée"]
        },
        "references": {
          "number": "03",
          "title": "Gestion des Références & Indexation (APA / IEEE)",
          "desc": "Normalisation des citations (APA 7e, IEEE), vérification des identifiants DOI, consolidation bibliographique et indexation.",
          "deliverables": ["Conformité APA 7e / IEEE / Vancouver", "Vérification des Liens & DOI", "Intégration Mendeley / Zotero / BibTeX", "Renvois Automatisés aux Figures"]
        },
        "presentation": {
          "number": "04",
          "title": "Conception de Présentations de Soutenance",
          "desc": "Diaporamas percutants conçus pour les jurys de soutenance, alliant concision rédactionnelle et visualisations scientifiques.",
          "deliverables": ["Fichier PowerPoint / PDF Clé en Main", "Infographies Vectorielles Sur Mesure", "Structure Chronologique Efficace", "Fiches Mémo pour l'Exposé Oral"]
        }
      }
    },
    "ethics": {
      "badge": "CHARTE D'INTÉGRITÉ SCIENTIFIQUE",
      "title": "Accompagnement Académique Responsable & Éthique",
      "description": "Nous intervenons sur la mise en page, la révision linguistique, la normalisation des citations et le design visuel des diapositives. L'ensemble des calculs, expérimentations et déductions scientifiques demeure à 100% l'œuvre originale et exclusive de l'étudiant, dans le respect absolu de l'éthique de la recherche."
    },
    "cta": {
      "ready_kicker": "PRÊT POUR VOTRE SOUTENANCE ?",
      "title": "Réservez Votre Refonte de Mémoire ou de Diaporama",
      "subtitle": "Transmettez votre spécialité, votre document préliminaire et votre date butoir pour une évaluation technique immédiate et un devis de planning.",
      "btn_whatsapp": "Contacter sur WhatsApp",
      "btn_telegram": "Contacter sur Telegram",
      "btn_inquire": "Commander un Accompagnement",
      "guarantees": [
        "Livraison rapide adaptée aux délais stricts de soutenance",
        "Confidentialité absolue & 100% de préservation de l'originalité",
        "Ajustements et révisions continus jusqu'au jour de la soutenance"
      ]
    }
  }
}
`

### File: src/components/layout/Header.jsx

`jsx
import React, { useState } from 'react';
import { Menu, X, Download, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FluiDevLogo } from '../common/FluiDevLogo';
import { ThemeToggle } from '../common/ThemeToggle';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navLinks = [
    { label: t('NAV.works', 'Works'), href: '#selected-works' },
    { label: t('NAV.lab', 'Engineering Lab'), href: '#interactive-lab' },
    { label: t('NAV.pillars', 'Capabilities'), href: '#engineering-pillars' },
    { label: t('NAV.academic', 'Academic Hub'), href: '#academic-hub' },
    { label: t('NAV.trajectory', 'Trajectory'), href: '#trajectory' },
    { label: t('NAV.contact', 'Contact'), href: '#contact' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMobileMenuOpen(false);
  };

  const LanguageDropdown = () => (
    <div className="relative group/lang flex items-center">
      <button
        className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:text-fluid-blue dark:hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
        aria-label="Select language"
      >
        <Globe className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400" />
        <span className="uppercase">{i18n.language || 'en'}</span>
      </button>
      <div className="absolute right-0 top-full mt-2 w-32 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-200 py-1.5 z-50">
        <button
          onClick={() => changeLanguage('en')}
          className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
            i18n.language === 'en' ? 'text-fluid-blue dark:text-cyan-400 font-bold' : 'text-slate-700 dark:text-slate-300'
          }`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('ar')}
          className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
            i18n.language === 'ar' ? 'text-fluid-blue dark:text-cyan-400 font-bold' : 'text-slate-700 dark:text-slate-300'
          }`}
        >
          العربية
        </button>
        <button
          onClick={() => changeLanguage('fr')}
          className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${
            i18n.language === 'fr' ? 'text-fluid-blue dark:text-cyan-400 font-bold' : 'text-slate-700 dark:text-slate-300'
          }`}
        >
          Français
        </button>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-[#07133F]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a href="#" className="flex items-center gap-3 group">
          <FluiDevLogo size={36} className="transition-transform duration-200 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="font-title font-bold text-fluid-ink-dark dark:text-white tracking-tight text-sm sm:text-base leading-none">
              {t('HEADER.name', 'Mohamed Baatas')}
            </span>
            <span className="text-xs font-mono tracking-wider text-slate-500 dark:text-fluid-cyan uppercase mt-1">
              {t('HEADER.role_subtitle', 'Hydroinformatics & Software Solutions')}
            </span>
          </div>
        </a>

        {/* Desktop Navigation & Actions */}
        <div className="hidden md:flex items-center gap-5">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-fluid-blue dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="w-px h-5 bg-slate-200 dark:bg-slate-800" />
          
          <LanguageDropdown />

          <ThemeToggle />

          <a
            href="/Mohamed_Baatas_CV.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-semibold font-condensed tracking-wide px-4 py-2 rounded-md shadow-sm transition-all duration-150"
          >
            <Download className="w-3.5 h-3.5 text-[#07133F]" />
            <span>{t('HEADER.download_cv', 'Resume / CV')}</span>
          </a>
        </div>

        {/* Mobile Hamburger & Quick Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle showLabel={false} />
          <LanguageDropdown />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#07133F]/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-fluid-blue dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Theme Mode
              </span>
              <ThemeToggle />
            </div>

            <a
              href="/Mohamed_Baatas_CV.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-semibold font-condensed tracking-wide px-4 py-2.5 rounded-md shadow-sm transition-all duration-150"
            >
              <Download className="w-3.5 h-3.5 text-[#07133F]" />
              <span>{t('HEADER.download_cv', 'Resume / CV')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
`

### File: src/components/layout/Footer.jsx

`jsx
import React from 'react';
import { Github, Linkedin, Send, Phone, Mail, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../../data/portfolioData';
import { FluiDevLogo } from '../common/FluiDevLogo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-sans text-xs sm:text-sm transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Identity & FluiDev Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <FluiDevLogo size={28} />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-title font-bold text-fluid-ink-dark dark:text-white tracking-tight text-base">
                  {t('HEADER.name', 'Mohamed Baatas')}
                </span>
                <span className="hidden sm:inline text-slate-400 dark:text-slate-600">·</span>
                <span className="font-mono text-[11px] text-fluid-blue dark:text-fluid-cyan bg-blue-100 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-500/30">
                  {t('HEADER.role_subtitle', 'Hydroinformatics & Software Solutions')}
                </span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t(
                'FOOTER.desc',
                'Specialized engineering portfolio bridging municipal water hydraulics, cyber-physical SCADA telemetry, EPANET numerical simulations, and academic digital excellence.'
              )}
            </p>
          </div>

          {/* Navigation Links (including Academic Hub) */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
              {t('FOOTER.navigation', 'Quick Navigation')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#selected-works" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.works', 'Selected Works')}
                </a>
              </li>
              <li>
                <a href="#interactive-lab" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.lab', 'Interactive Engineering Lab')}
                </a>
              </li>
              <li>
                <a href="#engineering-pillars" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.pillars', 'Core Capabilities')}
                </a>
              </li>
              <li>
                <a href="#academic-hub" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.academic', 'Academic Hub')}
                </a>
              </li>
              <li>
                <a href="#trajectory" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.trajectory', 'Experience & Education')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors">
                  {t('NAV.contact', 'Direct Contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Channels */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
              {t('FOOTER.channels', 'Channels')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={CONTACT_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  {t('FOOTER.github', 'GitHub')}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  {t('FOOTER.linkedin', 'LinkedIn')}
                </a>
              </li>
              {CONTACT_INFO.socials.telegram && (
                <li>
                  <a
                    href={CONTACT_INFO.socials.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    Telegram (@Fluidev)
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              {CONTACT_INFO.phone1 && (
                <li>
                  <a
                    href={`tel:${CONTACT_INFO.phone1}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                    +213 655 74 85 13
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Energy Yellow Node Accent */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F7B500] inline-block animate-pulse" />
            <span>
              © {currentYear} {t('HEADER.name', 'Mohamed Baatas')} (FluiDev). {t('FOOTER.rights', 'Engineered with Precision & Minimalist Clarity.')}
            </span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-fluid-blue dark:hover:text-white transition-colors text-xs"
          >
            <span>{t('FOOTER.back_to_top', 'Back to top')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
`

### File: src/components/common/BlueprintCadre.jsx

`jsx
import React from 'react';

/**
 * BlueprintCadre: A precision engineering drafting frame component.
 * Features:
 * - 4 Corner Reticles with '+' crosshairs and cyan/cobalt drop shadows
 * - Measurement scale ruler markings with millimeter ticks and metric annotations
 * - Fluid pipeline conduits with Energy Yellow (#F7B500) junction valve nodes
 * - Strict pointer-events-none on all decorative overlays to ensure unhindered interaction
 */
export function BlueprintCadre({
  children,
  id,
  sectionId,
  className = '',
  title,
  subtitle,
  badgeNumber,
  cadreTag,
  coordinates = 'LAT:36.75 / LON:3.05',
  showConduit = false,
  conduitPosition = 'left',
  flowActive = true,
  ...rest
}) {
  const containerId = id || sectionId;

  return (
    <div
      id={containerId}
      className={`relative border border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200 ${className}`}
      {...rest}
    >
      {/* 4 Corner Reticles (+) */}
      <span
        data-reticle="true"
        aria-hidden="true"
        className="cadre-reticle cadre-reticle-tl absolute -top-2.5 -left-2.5 w-5 h-5 flex items-center justify-center font-mono font-bold text-sm select-none pointer-events-none text-fluid-blue dark:text-fluid-cyan drop-shadow-[0_0_6px_rgba(0,229,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(0,229,255,0.7)] z-20"
      >
        +
      </span>
      <span
        data-reticle="true"
        aria-hidden="true"
        className="cadre-reticle cadre-reticle-tr absolute -top-2.5 -right-2.5 w-5 h-5 flex items-center justify-center font-mono font-bold text-sm select-none pointer-events-none text-fluid-blue dark:text-fluid-cyan drop-shadow-[0_0_6px_rgba(0,229,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(0,229,255,0.7)] z-20"
      >
        +
      </span>
      <span
        data-reticle="true"
        aria-hidden="true"
        className="cadre-reticle cadre-reticle-bl absolute -bottom-2.5 -left-2.5 w-5 h-5 flex items-center justify-center font-mono font-bold text-sm select-none pointer-events-none text-fluid-blue dark:text-fluid-cyan drop-shadow-[0_0_6px_rgba(0,229,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(0,229,255,0.7)] z-20"
      >
        +
      </span>
      <span
        data-reticle="true"
        aria-hidden="true"
        className="cadre-reticle cadre-reticle-br absolute -bottom-2.5 -right-2.5 w-5 h-5 flex items-center justify-center font-mono font-bold text-sm select-none pointer-events-none text-fluid-blue dark:text-fluid-cyan drop-shadow-[0_0_6px_rgba(0,229,255,0.4)] dark:drop-shadow-[0_0_8px_rgba(0,229,255,0.7)] z-20"
      >
        +
      </span>

      {/* Top Measurement Scale Ticks */}
      <div
        className="cadre-scale cadre-scale-top absolute top-0 left-6 right-6 h-3 flex items-center justify-between pointer-events-none overflow-hidden select-none opacity-40 dark:opacity-30 z-20"
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={`top-tick-${i}`}
              className={`block w-[1px] bg-slate-700 dark:bg-cyan-400 ${
                i % 4 === 0 ? 'h-2.5' : 'h-1'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          {cadreTag && (
            <span className="cadre-tag font-condensed text-[9px] uppercase tracking-wider text-slate-600 dark:text-cyan-400">
              {cadreTag}
            </span>
          )}
          {coordinates && (
            <span className="cadre-coords font-mono text-[9px] text-slate-500 dark:text-slate-400">
              {coordinates}
            </span>
          )}
        </div>
      </div>

      {/* Optional Cadre Header Metadata Bar */}
      {(badgeNumber || title) && (
        <div className="relative z-10 px-6 pt-4 pb-2 flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 text-xs font-mono">
          <div className="flex items-center gap-2">
            {badgeNumber && (
              <span className="px-2 py-0.5 rounded bg-fluid-blue/10 dark:bg-fluid-cyan/10 border border-fluid-blue/30 dark:border-fluid-cyan/30 text-fluid-blue dark:text-fluid-cyan font-condensed font-bold">
                {badgeNumber}
              </span>
            )}
            {title && (
              <span className="font-title font-bold text-slate-800 dark:text-white uppercase tracking-tight">
                {title}
              </span>
            )}
          </div>
          {subtitle && (
            <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px] hidden sm:inline">
              {subtitle}
            </span>
          )}
        </div>
      )}

      {/* Fluid Pipeline Conduit Connector */}
      {showConduit && (
        <div
          className={`cadre-pipe-channel absolute top-0 bottom-0 pointer-events-none z-20 ${
            conduitPosition === 'right' ? 'right-1 sm:right-3' : 'left-1 sm:left-3'
          }`}
          aria-hidden="true"
        >
          <svg
            className="h-full w-7 overflow-visible pointer-events-none"
            viewBox="0 0 28 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Outer Pipe Shell */}
            <line
              x1="14"
              y1="0"
              x2="14"
              y2="600"
              stroke="rgba(0, 29, 181, 0.18)"
              strokeWidth="8"
              className="dark:stroke-cyan-950/40"
            />
            {/* Fluid Core Conduit */}
            <line
              x1="14"
              y1="0"
              x2="14"
              y2="600"
              stroke="#00e5ff"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              className="dark:stroke-[#00e5ff] stroke-[#005bff]"
            />
            {/* Top Valve Junction Node */}
            <circle
              cx="14"
              cy="60"
              r="5.5"
              fill="#f7b500"
              stroke="#001db5"
              strokeWidth="2"
              className="dark:stroke-[#07133f]"
            />
            {/* Mid Valve Junction Node with Crosshairs */}
            <g transform="translate(14, 300)">
              <circle
                r="7"
                fill="#f7b500"
                stroke="#001db5"
                strokeWidth="2"
                className="dark:stroke-[#07133f]"
              />
              <circle r="3" fill="#00e5ff" />
              <path
                d="M-9 0H9M0-9V9"
                stroke="#07133f"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
            {/* Bottom Valve Junction Node */}
            <circle
              cx="14"
              cy="540"
              r="5.5"
              fill="#f7b500"
              stroke="#001db5"
              strokeWidth="2"
              className="dark:stroke-[#07133f]"
            />
          </svg>
        </div>
      )}

      {/* Main Section Content Wrapper */}
      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* Bottom Measurement Scale Ticks */}
      <div
        className="cadre-scale cadre-scale-bottom absolute bottom-0 left-6 right-6 h-3 flex items-center justify-between pointer-events-none overflow-hidden select-none opacity-40 dark:opacity-30 z-20"
        aria-hidden="true"
      >
        <span className="cadre-scale-lbl font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          FLOW CONDUIT // PN16
        </span>
        <div className="flex items-center gap-1.5 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={`bottom-tick-${i}`}
              className={`block w-[1px] bg-slate-700 dark:bg-cyan-400 ${
                i % 4 === 0 ? 'h-2.5' : 'h-1'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlueprintCadre;
`

### File: src/components/common/CollageBackground.jsx

`jsx
import React from 'react';

export function CollageBackground({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* 1. CUT PAPER SHEET #1 (Top-Right Massive Torn Graph Paper with Red Margin Line) */}
      <div
        className="absolute -top-16 -right-12 w-[340px] sm:w-[520px] lg:w-[680px] h-[450px] sm:h-[620px] lg:h-[780px] opacity-25 dark:opacity-20 transform rotate-2 origin-top-right shadow-2xl"
        style={{
          backgroundColor: '#f8f9fa',
          backgroundImage: `
            linear-gradient(rgba(0, 50, 160, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 50, 160, 0.14) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          clipPath: `polygon(
            0 0,
            93% 0,
            98% 6%,
            92% 14%,
            99% 22%,
            93% 31%,
            100% 40%,
            92% 51%,
            99% 62%,
            91% 72%,
            98% 83%,
            90% 91%,
            99% 100%,
            0 100%
          )`,
        }}
      >
        {/* Red Margin Line on the torn paper */}
        <div className="absolute top-0 bottom-0 right-14 w-0.5 bg-red-600/70" />
        {/* Pinned Yellow Tape on the paper */}
        <div className="absolute top-8 left-14 px-4 py-1.5 bg-[#F7B500] text-[#07133F] text-xs font-mono font-bold uppercase tracking-widest transform -rotate-6 shadow-md">
          FLUIDEV // SPEC.SHEET.01
        </div>
      </div>

      {/* 2. CUT PAPER SHEET #2 (Bottom-Left Massive Torn Paper Sheet) */}
      <div
        className="absolute -bottom-20 -left-12 w-[300px] sm:w-[480px] lg:w-[620px] h-[380px] sm:h-[540px] lg:h-[680px] opacity-20 dark:opacity-15 transform -rotate-4 origin-bottom-left shadow-2xl"
        style={{
          backgroundColor: '#f8f9fa',
          backgroundImage: `
            linear-gradient(rgba(0, 50, 160, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 50, 160, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '18px 18px',
          clipPath: `polygon(
            0 0,
            100% 0,
            92% 10%,
            99% 22%,
            91% 34%,
            100% 46%,
            92% 58%,
            100% 70%,
            91% 82%,
            98% 92%,
            93% 100%,
            0 100%
          )`,
        }}
      >
        {/* Red Margin Line */}
        <div className="absolute top-0 bottom-0 left-12 w-0.5 bg-red-600/60" />
        {/* Pinned Tape */}
        <div className="absolute bottom-10 right-10 px-4 py-1.5 bg-[#F7B500] text-[#07133F] text-xs font-mono font-bold uppercase tracking-widest transform rotate-3 shadow-md">
          0101 / FLOW.DATA
        </div>
      </div>

      {/* 3. DIAGONAL BLUE CUT STRIPED CROSSOVER (Top-Center) */}
      <div
        className="absolute top-0 left-1/4 sm:left-1/3 w-80 sm:w-[500px] lg:w-[680px] h-32 sm:h-44 opacity-25 dark:opacity-35"
        style={{
          backgroundColor: '#001db5',
          backgroundImage: `repeating-linear-gradient(
            135deg,
            rgba(0, 91, 255, 0.8) 0 2px,
            transparent 2px 10px
          )`,
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 60%)',
          filter: 'drop-shadow(-5px 5px 0 rgba(0, 229, 255, 0.25))',
        }}
      />

      {/* 4. SECONDARY REVOLVING CONCENTRIC CIRCLE (Top-Left Background) */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] lg:w-[560px] lg:h-[560px] opacity-20 dark:opacity-25 pointer-events-none">
        <svg
          className="w-full h-full animate-spin-slow origin-center"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="175" stroke="#00e5ff" strokeWidth="1" strokeDasharray="5 7" />
          <circle cx="200" cy="200" r="115" stroke="#001db5" className="dark:stroke-[#005bff]" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="55" stroke="#00e5ff" strokeWidth="0.8" strokeDasharray="2 4" />
          <circle cx="375" cy="200" r="6" fill="#f7b500" stroke="#ffffff" strokeWidth="1.5" />
          <circle cx="200" cy="85" r="5" fill="#00e5ff" stroke="#07133f" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 5. ELECTRONIC CIRCUIT TRACES & GOLDEN SOLDER NODES */}
      <svg
        className="absolute top-16 left-1/3 w-[500px] h-[320px] opacity-25 dark:opacity-35"
        viewBox="0 0 420 300"
        fill="none"
      >
        <path
          d="M0 60 H140 L180 100 H280 L320 60 H420"
          stroke="#00e5ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40 0 V40 L80 80 V180 L120 220 H340 L380 260 V300"
          stroke="#001db5"
          className="dark:stroke-[#005bff]"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M180 100 V160 L220 200 H300"
          stroke="#00e5ff"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />

        {/* Golden Solder Nodes */}
        <circle cx="140" cy="60" r="5.5" fill="#f7b500" stroke="#001db5" strokeWidth="2" />
        <circle cx="280" cy="100" r="5.5" fill="#f7b500" stroke="#00e5ff" strokeWidth="2" />
        <circle cx="80" cy="80" r="4.5" fill="#f7b500" stroke="#001db5" strokeWidth="1.5" />
        <circle cx="340" cy="220" r="4.5" fill="#f7b500" stroke="#00e5ff" strokeWidth="1.5" />

        {/* Binary Stamps */}
        <text
          x="150"
          y="48"
          fill="#00e5ff"
          fontFamily="Barlow Condensed, monospace"
          fontSize="12"
          fontWeight="800"
          letterSpacing="0.12em"
        >
          01 001 1010
        </text>
        <text
          x="130"
          y="212"
          fill="#001db5"
          className="dark:fill-[#00e5ff]"
          fontFamily="Barlow Condensed, monospace"
          fontSize="11"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          0101 / FLOW.DATA
        </text>
      </svg>

      {/* 6. GIANT TRANSLUCENT NUMBER "01" STAMP */}
      <div
        className="absolute top-16 right-12 sm:right-32 lg:right-48 text-transparent font-black font-condensed text-[160px] sm:text-[260px] lg:text-[340px] leading-none opacity-20 dark:opacity-25 pointer-events-none select-none"
        style={{
          WebkitTextStroke: '2.5px rgba(0, 229, 255, 0.45)',
        }}
      >
        01
      </div>

      {/* 7. HYDRAULIC STREAM FLOW (Clean bottom line) */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full h-12 opacity-30 dark:opacity-40"
        preserveAspectRatio="none"
        viewBox="0 0 1200 40"
        fill="none"
      >
        <path
          d="M0 20 C200 35 400 5 600 20 S1000 35 1200 20"
          stroke="#001db5"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0 20 C200 35 400 5 600 20 S1000 35 1200 20"
          stroke="#00e5ff"
          strokeWidth="1.2"
          strokeDasharray="12 8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default CollageBackground;
`

### File: src/components/common/CircuitBackground.jsx

`jsx
import React from 'react';

export function CircuitBackground({ className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
    >
      {/* Circuit Trace SVG Layer - Top Right */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 opacity-20 dark:opacity-30"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M400 60 H280 L230 110 H120 L80 150 H0"
          stroke="#00e5ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M400 120 H310 L270 160 H180 L140 200 H50"
          stroke="#001db5"
          className="dark:stroke-[#005bff]"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M360 0 V70 L320 110 V220 L280 260 H200"
          stroke="#00e5ff"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        {/* Golden Solder Nodes */}
        <circle cx="280" cy="60" r="4.5" fill="#f7b500" stroke="#001db5" strokeWidth="2" />
        <circle cx="120" cy="110" r="4.5" fill="#f7b500" stroke="#00e5ff" strokeWidth="2" />
        <circle cx="270" cy="160" r="4" fill="#f7b500" stroke="#001db5" strokeWidth="1.5" />
        <circle cx="320" cy="110" r="4" fill="#f7b500" stroke="#00e5ff" strokeWidth="1.5" />

        {/* Binary Floating Stamp */}
        <text
          x="190"
          y="102"
          fill="#00e5ff"
          fontFamily="Barlow Condensed, monospace"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.1em"
        >
          01 001 1010
        </text>
        <text
          x="210"
          y="252"
          fill="#001db5"
          className="dark:fill-[#00e5ff]"
          fontFamily="Barlow Condensed, monospace"
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          0101 / FLOW.DATA
        </text>
      </svg>

      {/* Circuit Trace SVG Layer - Bottom Left */}
      <svg
        className="absolute bottom-0 left-0 w-96 h-96 opacity-15 dark:opacity-25"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M0 340 H120 L170 290 H280 L320 250 H400"
          stroke="#00e5ff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M40 400 V330 L80 290 V180 L120 140 H200"
          stroke="#001db5"
          className="dark:stroke-[#005bff]"
          strokeWidth="1.5"
          strokeDasharray="8 6"
        />
        {/* Golden Solder Nodes */}
        <circle cx="120" cy="340" r="4.5" fill="#f7b500" stroke="#001db5" strokeWidth="2" />
        <circle cx="280" cy="290" r="4.5" fill="#f7b500" stroke="#00e5ff" strokeWidth="2" />
        <circle cx="80" cy="290" r="4" fill="#f7b500" stroke="#00e5ff" strokeWidth="1.5" />

        {/* Binary Floating Stamp */}
        <text
          x="130"
          y="332"
          fill="#00e5ff"
          fontFamily="Barlow Condensed, monospace"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.1em"
        >
          01 · 10 · 11
        </text>
        <text
          x="90"
          y="172"
          fill="#001db5"
          className="dark:fill-[#00e5ff]"
          fontFamily="Barlow Condensed, monospace"
          fontSize="10"
          fontWeight="700"
          letterSpacing="0.08em"
        >
          1100 1010 // HYDR.SYS
        </text>
      </svg>
    </div>
  );
}
`

### File: src/components/common/FluiDevLogo.jsx

`jsx
import React from 'react';

/**
 * FluiDevLogo - Official FluiDev SVG vector mark and brand lockup.
 * Derived from authentic Figma master specifications (all_figma_components/LogoStudio_007.tsx).
 *
 * Geometric Rationale:
 * - Structural 'F' Block: Software logic, structured programming, civil hydraulics layout.
 * - Fluid 'D' Conduit: Continuous curvature representing hydraulic streamlines and pipeline telemetry.
 * - Cyber-Physical Node: Energy Yellow (Amber) sensor junction where hydraulics meets data.
 *
 * @param {object} props
 * @param {'icon' | 'dark' | 'light' | 'mono'} [props.variant='icon']
 * @param {number | string} [props.size=36]
 * @param {string} [props.className='']
 * @param {boolean} [props.iconOnly]
 * @param {boolean} [props.withContainer]
 * @param {number | string} [props.width]
 * @param {number | string} [props.height]
 * @param {string} [props.title]
 */
export function FluiDevLogo({
  variant = 'icon',
  size = 36,
  className = '',
  iconOnly,
  withContainer,
  width,
  height,
  title = 'FluiDev Logo',
  ...props
}) {
  const isIcon = iconOnly !== undefined ? Boolean(iconOnly) : variant === 'icon';
  const isDark = variant === 'dark' || isIcon;
  const isMono = variant === 'mono';

  // Authentic FluiDev color tokens
  const primary = isDark ? '#ffffff' : '#07133f';
  const flow = isMono ? '#07133f' : (isDark ? '#00e5ff' : '#00aeea');
  const developer = isMono ? '#07133f' : (isDark ? '#00e5ff' : '#005bff');
  const accent = isMono ? '#07133f' : '#f7b500';
  const nodeStroke = isDark ? '#001db5' : '#ffffff';

  // Responsive dimensions
  const hasContainer = withContainer !== undefined ? Boolean(withContainer) : isIcon;
  const computedWidth = width || (isIcon ? size : (typeof size === 'number' ? size * 3.6 : size));
  const computedHeight = height || size;

  return (
    <svg
      aria-label={title}
      data-logo={variant}
      role="img"
      viewBox={isIcon ? '0 0 200 200' : '0 0 720 200'}
      width={computedWidth}
      height={computedHeight}
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 ${className}`}
      {...props}
    >
      {hasContainer && (
        <rect
          width="200"
          height="200"
          rx="38"
          fill="#001db5"
        />
      )}

      {/* FluiDev Glyph Geometry */}
      <g>
        {/* Structural F */}
        <path
          d="M48 34h78v22H72v33h45v22H72v57H48Z"
          fill={primary}
        />
        {/* Fluid Conduit D */}
        <path
          d="M93 34h19c39 0 63 25 63 66s-24 66-63 66H93"
          fill="none"
          stroke={flow}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="17"
        />
        {/* Cyber-Physical Node */}
        <circle
          cx="119"
          cy="100"
          r="10"
          fill={accent}
          stroke={nodeStroke}
          strokeWidth="4"
        />
      </g>

      {/* Wordmark Typography (renders in full lockup mode) */}
      {!isIcon && (
        <>
          <text
            x="215"
            y="111"
            fill={primary}
            fontFamily="Alexandria, system-ui, sans-serif"
            fontSize="72"
            fontWeight="900"
          >
            Flui
          </text>
          <text
            x="354"
            y="111"
            fill={developer}
            fontFamily="Alexandria, system-ui, sans-serif"
            fontSize="72"
            fontWeight="900"
          >
            Dev
          </text>
          <path
            d="M218 135h43"
            fill="none"
            stroke={accent}
            strokeLinecap="round"
            strokeWidth="6"
          />
          <text
            x="278"
            y="142"
            fill={isDark ? '#a9b9e7' : '#596682'}
            fontFamily="Barlow Condensed, system-ui, sans-serif"
            fontSize="17"
            fontWeight="700"
            letterSpacing="4"
          >
            HYDROINFORMATICS + SOFTWARE
          </text>
        </>
      )}
    </svg>
  );
}

export default FluiDevLogo;
`

### File: src/components/common/ThemeToggle.jsx

`jsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

/**
 * ThemeToggle - Dual theme switch button between Blueprint Dark and Graph Paper Light.
 * Includes accessible aria attributes, smooth transitions, and visual icon indicators.
 *
 * @param {object} props
 * @param {string} [props.className]
 * @param {'sm' | 'md' | 'lg'} [props.size='md']
 * @param {boolean} [props.showLabel=true]
 */
export function ThemeToggle({
  className = '',
  size = 'md',
  showLabel = true,
  ...props
}) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-fluid-cyan/50 ${
        isDark
          ? 'bg-fluid-navy-surface border-cyan-400/30 text-cyan-300 hover:border-cyan-400 hover:text-white shadow-sm shadow-cyan-950/40'
          : 'bg-white border-fluid-blue/20 text-fluid-navy hover:border-fluid-blue hover:text-fluid-blue shadow-sm shadow-slate-300/40'
      } ${className}`}
      aria-label={isDark ? 'Switch to Graph Paper Light Mode' : 'Switch to Blueprint Dark Mode'}
      title={isDark ? 'Blueprint Dark Mode (Active) — Click for Graph Paper' : 'Graph Paper Light Mode (Active) — Click for Blueprint'}
      data-testid="theme-toggle"
      data-theme-current={theme}
      {...props}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-cyan-400 transition-transform duration-200 rotate-0" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-fluid-yellow transition-transform duration-200 rotate-0" />
        )}
      </div>

      {showLabel && (
        <span className="font-condensed text-[11px] font-bold uppercase tracking-wider hidden sm:inline">
          {isDark ? 'Blueprint' : 'Graph Paper'}
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;
`

### File: src/components/common/SectionHeading.jsx

`jsx
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function SectionHeading({ tag, title, description, align = "left", onClick, isCollapsible, isExpanded }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const interactableClass = onClick ? "cursor-pointer group hover:bg-slate-800/30 p-4 -ml-4 rounded-xl transition-all" : "";

  return (
    <div 
      className={`flex flex-col mb-6 ${alignClass} ${interactableClass}`}
      onClick={onClick}
    >
      <div className="flex w-full justify-between items-start gap-4">
        <div className="flex flex-col items-start">
          {tag && (
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cobalt-600/10 border border-cobalt-500/30 text-cobalt-400 font-mono text-xs font-semibold tracking-wider uppercase mb-3 group-hover:bg-cobalt-600/20 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500 animate-pulse" />
              {tag}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-cobalt-300 transition-colors">
            {title}
          </h2>
        </div>
        
        {isCollapsible && (
          <div 
            className={`flex-shrink-0 mt-2 p-2 rounded-full border transition-all ${
              isExpanded 
                ? 'bg-cobalt-600/20 border-cobalt-500/50 text-cobalt-300' 
                : 'bg-elevated-slate border-border-slate text-slate-400 group-hover:border-cobalt-500/50 group-hover:text-white'
            }`}
          >
            {isExpanded ? <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" /> : <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />}
          </div>
        )}
      </div>

      {description && (
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
`

### File: src/components/common/Card.jsx

`jsx
import React from 'react';

export function Card({ children, className = "", hover = false, onClick }) {
  const hoverClass = hover ? "hover:border-cobalt-500/50 hover:bg-elevated-slate/80 transition-colors" : "";
  const clickableClass = onClick ? "cursor-pointer" : "";

  return (
    <div
      onClick={onClick}
      className={`bg-surface-sunken border border-border-slate/80 rounded-lg p-5 sm:p-6 text-slate-200 shadow-sm ${hoverClass} ${clickableClass} ${className}`}
    >
      {children}
    </div>
  );
}
`

### File: src/components/common/MetricBadge.jsx

`jsx
import React from 'react';

export function MetricBadge({ label, value, unit, status = "nominal", detail }) {
  const statusColors = {
    nominal: "border-slate-700 bg-elevated-slate/60 text-slate-200",
    emerald: "border-emerald-500/30 bg-emerald-950/20 text-emerald-400",
    cyan: "border-cyan-500/30 bg-cyan-950/20 text-cyan-400",
    amber: "border-amber-500/30 bg-amber-950/20 text-amber-400",
    red: "border-red-500/30 bg-red-950/20 text-red-400",
    cobalt: "border-cobalt-500/30 bg-cobalt-950/20 text-cobalt-400"
  };

  return (
    <div className={`flex flex-col p-3 rounded border font-mono tabular-nums ${statusColors[status] || statusColors.nominal}`}>
      <span className="text-[11px] text-slate-400 uppercase tracking-wider font-sans font-medium">
        {label}
      </span>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="text-xl sm:text-2xl font-bold tracking-tight font-mono text-white">
          {value}
        </span>
        {unit && <span className="text-xs text-slate-400 font-mono">{unit}</span>}
      </div>
      {detail && (
        <span className="text-[11px] text-slate-400 font-sans mt-0.5">
          {detail}
        </span>
      )}
    </div>
  );
}
`

### File: src/components/sections/HeroSection.jsx

`jsx
import React from 'react';
import {
  Download,
  Mail,
  Phone,
  Github,
  Code2,
  Activity,
  GraduationCap,
  Droplet,
  Play
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CollageBackground } from '../common/CollageBackground';

const DOSSIER_I18N = {
  ar: {
    tape: 'ENGINEERING IDENTITY // هوية المهندس',
    kicker: 'FLUIDEV / IDENTITY & CREDENTIALS',
    name: 'محمد بعتاس',
    roleHighlight: 'مهندس مياه وبرمجيات',
    bio: 'مهندس دولة خريج المدرسة الوطنية العليا للري (ENSH)، وباحث ماستر في تسيير منظومات مياه الشرب والتطهير، ومطوّر نظم برمجية متقدم. أكرّس خبرتي لدمج الفهم الفيزيائي الدقيق لشبكات المياه ومحطات المعالجة، مع هندسة البرمجيات الحديثة، النظم المستقلة (Offline-First)، وتقنيات الأتمتة والبحث العلمي.',
    sloganSub: 'نحوّل الأفكار الهندسية إلى حلول رقمية تعمل.',
    pillars: [
      {
        num: '01',
        title: 'الهندسة المائية والري (Hydraulics & Sanitation)',
        desc: 'مهندس دولة خريج المدرسة الوطنية العليا للري + ماستر تسيير منشآت مياه الشرب ومحطات التطهير (WWTP) ونمذجة الشبكات المعقدة بـ EPANET و GIS.'
      },
      {
        num: '02',
        title: 'تطوير النظم والبرمجيات (Full-Stack & Desktop Systems)',
        desc: 'هندسة برمجيات سطح المكتب المستقلة (Offline-First بـ Electron و Python)، محاكيات تفاعلية، ولوحات تحكم صناعية (SCADA).'
      },
      {
        num: '03',
        title: 'الخدمات الأكاديمية والبحثية (Academic Hub & Mentorship)',
        desc: 'مرافقة الباحثين والطلبة، تدقيق وصياغة مذكرات التخرج ورسائل الماجستير (APA / IEEE)، وتصميم عروض المناقشة الاحترافية.'
      }
    ],
    btnCv: 'تحميل السيرة الذاتية (CV)',
    btnContact: 'تواصل معي مباشرة',
    btnLab: 'تشغيل المختبر التفاعلي',
    avail: 'متاح للمشاريع والتعاقد التقني (Algiers / Remote)',
    ch1: '01 // أعمال وبرمجيات',
    ch2: '02 // المختبر الهيدروليكي',
    ch3: '03 // المركز الأكاديمي',
    ch4: '04 // الركائز والقدرات'
  },
  fr: {
    tape: 'ENGINEERING IDENTITY // DOSSIER INGÉNIEUR',
    kicker: 'FLUIDEV / IDENTITÉ & COMPÉTENCES',
    name: 'Mohamed Baatas',
    roleHighlight: 'Ingénieur en Hydroinformatique & Logiciels',
    bio: "Ingénieur d'État diplômé de l'École Nationale Supérieure d'Hydraulique (ENSH), chercheur en Master (Gestion des Services d'Eau et d'Assainissement) et architecte logiciel Full-Stack. Je fusionne la mécanique des fluides et la modélisation hydraulique avec des logiciels de bureau Offline-First, des jumeaux numériques SCADA et l'accompagnement académique.",
    sloganSub: 'Transformer les concepts d’ingénierie en systèmes numériques fiables.',
    pillars: [
      {
        num: '01',
        title: 'Génie Hydraulique & Assainissement (ENSH)',
        desc: 'Modélisation sous pression EPANET 2.2, stations d’épuration (STEP), réduction des eaux non facturées (NRW) et SIG spatial (ArcGIS Pro).'
      },
      {
        num: '02',
        title: 'Architecture Logicielle & ERP Desktop (Offline-First)',
        desc: 'Applications de bureau haute fiabilité (Electron, React 18, Python PyQt6, SQLite), systèmes POS commerciaux et télémétrie IoT.'
      },
      {
        num: '03',
        title: 'Pôle Académique & Soutenance (Academic Hub)',
        desc: 'Mise en page normée de mémoires (APA 7e / IEEE), révision linguistique trilingue et conception de présentations de soutenance.'
      }
    ],
    btnCv: 'Télécharger le CV',
    btnContact: 'Contact Direct',
    btnLab: 'Lancer le Labo Interactif',
    avail: 'Disponible pour Projets & Consulting (Alger / Remote)',
    ch1: '01 // Projets & Logiciels',
    ch2: '02 // Laboratoire Hydraulique',
    ch3: '03 // Pôle Académique',
    ch4: '04 // Compétences Clés'
  },
  en: {
    tape: 'ENGINEERING IDENTITY // EXECUTIVE DOSSIER',
    kicker: 'FLUIDEV / IDENTITY & CREDENTIALS',
    name: 'Mohamed Baatas',
    roleHighlight: 'Hydroinformatics & Software Engineer',
    bio: 'State Hydraulics Engineer (ENSH Algiers), M.S. researcher in Water & Sanitation Services Management, and Full-Stack Software Architect. Dedicated to bridging pressurized water network physics and WWTP process engineering with offline-first desktop ERPs, real-time SCADA digital twins, and academic research excellence.',
    sloganSub: 'Turning complex engineering physics into production software.',
    pillars: [
      {
        num: '01',
        title: 'Hydraulics & Water Infrastructure (ENSH)',
        desc: 'Pressurized pipe network modeling (EPANET 2.2), wastewater treatment plant (WWTP) optimization, NRW reduction, and ArcGIS Pro.'
      },
      {
        num: '02',
        title: 'Full-Stack & Offline-First Desktop Systems',
        desc: 'Production desktop ERPs & POS suites (Electron, React 18, Python PyQt6, SQLite3), browser-based physical solvers, and IoT telemetry.'
      },
      {
        num: '03',
        title: 'Academic Transformation & Thesis Hub',
        desc: 'University-compliant thesis formatting (APA 7th / IEEE), trilingual scientific proofreading, and executive defense presentation decks.'
      }
    ],
    btnCv: 'Download Resume (CV)',
    btnContact: 'Direct Inquiry',
    btnLab: 'Launch Interactive Lab',
    avail: 'Available for Consulting & Engineering Roles (Algiers / Remote)',
    ch1: '01 // Selected Works',
    ch2: '02 // Hydraulic Lab',
    ch3: '03 // Academic Hub',
    ch4: '04 // Core Pillars'
  }
};

export function HeroSection() {
  const { i18n } = useTranslation();
  const langKey = i18n.language?.startsWith('ar')
    ? 'ar'
    : i18n.language?.startsWith('fr')
    ? 'fr'
    : 'en';
  const copy = DOSSIER_I18N[langKey];
  const isRTL = langKey === 'ar';

  const handleOpenLab = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('fluiddev:launch-lab', { detail: { tab: 'epanet' } }));
    const labEl = document.getElementById('interactive-lab');
    if (labEl) labEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <BlueprintCadre
      id="hero"
      cadreTag="FLUIDEV // IDENTITY_BLUEPRINT"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={false}
      className="relative pt-4 pb-10 sm:pt-6 sm:pb-14 bg-slate-100/80 dark:bg-[#07133F] overflow-hidden min-h-[90vh] flex flex-col justify-between transition-colors duration-300"
    >
      <CollageBackground />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto py-4">
          
          {/* Portrait & Radar Column */}
          <div className={`lg:col-span-5 ${isRTL ? 'order-1 lg:order-2 lg:items-end lg:text-right' : 'order-1 lg:order-2 lg:items-end lg:text-right'} flex flex-col items-center text-center`}>
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-[330px] sm:h-[390px] lg:h-[430px] flex items-end justify-center lg:justify-end mb-4">
              <div className="absolute top-1/4 inset-x-8 h-64 bg-gradient-to-tr from-blue-600/30 via-cyan-400/25 to-transparent rounded-full filter blur-3xl pointer-events-none" />

              {/* Animated Rotating Radar Rings */}
              <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:right-6 pointer-events-none select-none">
                <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full border border-dashed border-fluid-blue/40 dark:border-cyan-400/50 animate-spin-slow flex items-center justify-center relative">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F7B500] border-2 border-white shadow-[0_0_12px_#F7B500]" />
                  <span className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-[#00E5FF] border border-[#07133F] shadow-[0_0_8px_#00E5FF]" />
                  <span className="absolute top-16 left-6 w-3 h-3 rounded-full bg-[#D62828] border border-white shadow-[0_0_6px_#D62828]" />
                  <span className="absolute top-2 right-1/4 text-[9px] font-mono font-bold text-fluid-blue dark:text-cyan-300/80">000° // N</span>
                  <span className="absolute bottom-3 left-1/4 text-[9px] font-mono font-bold text-fluid-blue dark:text-cyan-300/80">180° // S</span>
                </div>

                <div className="absolute w-[250px] h-[250px] sm:w-[310px] sm:h-[310px] lg:w-[350px] lg:h-[350px] rounded-full border border-fluid-blue/30 dark:border-cyan-400/40 animate-spin-reverse-slow flex items-center justify-center">
                  <div className="w-full h-full rounded-full border border-dashed border-blue-500/60 scale-95" />
                  <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#F7B500] border border-white" />
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#00E5FF] border border-[#07133F]" />
                </div>

                <div className="absolute w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] rounded-full border border-blue-400/30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                </div>

                <div
                  className="absolute right-0 bottom-4 text-transparent font-black font-condensed text-[120px] sm:text-[150px] lg:text-[180px] leading-none opacity-20 pointer-events-none select-none"
                  style={{ WebkitTextStroke: '1.5px rgba(0, 229, 255, 0.4)' }}
                >
                  01
                </div>
              </div>

              <img
                src="/assets/mohamed-portrait-cutout.png"
                alt="Mohamed Baatas"
                className="relative z-10 max-h-full max-w-full object-contain pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  filter: `
                    drop-shadow(2px 0 0 white)
                    drop-shadow(-2px 0 0 white)
                    drop-shadow(0 -2px 0 white)
                    drop-shadow(0 3px 0 white)
                    drop-shadow(-10px 18px 24px rgba(0, 0, 0, 0.5))
                  `
                }}
              />
            </div>

            {/* Persona Identity Badge Block */}
            <div className="space-y-2 relative z-10 w-full max-w-md lg:max-w-lg">
              <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded bg-white text-[#07133F] shadow-lg border-l-4 border-[#F7B500]">
                <span className="w-6 h-6 rounded bg-[#00E5FF] text-[#07133F] font-black font-condensed text-sm flex items-center justify-center transform -skew-x-12">
                  F
                </span>
                <span className="font-title font-bold text-sm tracking-tight text-[#07133F]">FluiDev</span>
                <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider">• FLUID DEVELOPER</span>
              </div>

              <div className="space-y-0.5">
                <div className="text-xs font-mono font-bold tracking-widest text-[#d62828] uppercase" dir="ltr">
                  ENGINEERING
                </div>
                <div className="text-2xl sm:text-3xl font-black font-condensed tracking-tight text-slate-900 dark:text-white leading-none">
                  SMART SOLUTIONS.
                </div>
                <div className="text-xs sm:text-sm text-fluid-blue dark:text-cyan-300 font-medium pt-0.5 border-t border-[#F7B500]/60 inline-block">
                  {copy.sloganSub}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-1.5 pt-1">
                <span className="px-2.5 py-0.5 rounded bg-[#001db5] border-l-2 border-[#F7B500] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
                  HYDROINFORMATICS
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#001db5] border-l-2 border-[#F7B500] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
                  SOFTWARE SYSTEMS
                </span>
                <span className="px-2.5 py-0.5 rounded bg-[#001db5] border-l-2 border-[#F7B500] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-sm">
                  DATA &amp; AUTOMATION
                </span>
              </div>
            </div>
          </div>

          {/* Tactile Cut Paper Engineering Dossier Column */}
          <div className="lg:col-span-7 order-2 lg:order-1" dir={isRTL ? 'rtl' : 'ltr'}>
            <div
              className="relative p-6 sm:p-9 lg:p-10 rounded-2xl shadow-2xl text-slate-900 overflow-hidden transition-transform duration-300"
              style={{
                backgroundColor: '#FAFBFD',
                backgroundImage: `
                  linear-gradient(rgba(0, 50, 160, 0.08) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 50, 160, 0.08) 1px, transparent 1px)
                `,
                backgroundSize: '18px 18px',
                border: '1px solid rgba(0, 29, 181, 0.18)',
                boxShadow: '0 25px 65px -15px rgba(2, 11, 39, 0.45), 0 0 0 1px rgba(0, 29, 181, 0.12)'
              }}
            >
              {/* Metallic Paperclip */}
              <div
                className="absolute -top-3 left-10 w-5 h-12 pointer-events-none"
                style={{
                  border: '3px solid #9ea4ad',
                  borderBottom: 'none',
                  borderRadius: '99px 99px 0 0',
                  boxShadow: 'inset 0 2px 2px rgba(255,255,255,0.7), 2px 4px 6px rgba(7, 19, 63, 0.25)'
                }}
              />

              {/* Traffic Dots */}
              <div className="absolute top-5 left-16 flex items-center gap-1.5 pointer-events-none" dir="ltr">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f7b500] border border-[#001db5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fa8c16] border border-[#001db5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#d62828] border border-[#001db5]" />
              </div>

              {/* Notebook Red Margin Line */}
              <div
                className={`absolute top-0 bottom-0 ${
                  isRTL ? 'right-6 sm:right-10' : 'left-6 sm:left-10'
                } w-0.5 bg-red-500/60 pointer-events-none`}
              />

              <div className={isRTL ? 'pr-5 sm:pr-8 text-right' : 'pl-5 sm:pl-8 text-left'}>
                {/* Yellow Masking Tape Header */}
                <div className="inline-block mb-3">
                  <span className="inline-block px-3.5 py-1 bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs sm:text-sm uppercase shadow-sm">
                    {copy.tape}
                  </span>
                </div>

                {/* Identity Headline */}
                <div className="mb-5">
                  <div className="text-[11px] font-mono font-bold tracking-widest text-[#001db5] uppercase mb-0.5" dir="ltr">
                    {copy.kicker}
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-title tracking-tight text-[#07133F] leading-tight">
                    {copy.name} <br />
                    <span className="text-[#001db5]">{copy.roleHighlight}</span>
                  </h1>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans max-w-2xl">
                    {copy.bio}
                  </p>
                </div>

                {/* 3 Core Identity Credentials */}
                <div className="space-y-2.5 mb-5 border-t border-slate-200/90 pt-4">
                  {copy.pillars.map((item) => (
                    <div
                      key={item.num}
                      className="group flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50/80 transition-colors"
                    >
                      <span className="w-8 h-8 rounded-lg bg-[#001db5] text-white font-black font-condensed text-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                        {item.num}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-bold text-[#07133F] group-hover:text-[#001db5] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Quick Action Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-slate-200/90">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href="/Mohamed_Baatas_CV.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-bold font-condensed tracking-wide text-xs sm:text-sm shadow-md transition-all"
                    >
                      <Download className="w-4 h-4 text-[#07133F]" />
                      <span>{copy.btnCv}</span>
                    </a>

                    <a
                      href="#interactive-lab"
                      onClick={handleOpenLab}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#001db5] hover:bg-[#0027ea] text-white font-bold font-condensed tracking-wide text-xs sm:text-sm shadow-md transition-all"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>{copy.btnLab}</span>
                    </a>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold font-condensed tracking-wide text-xs sm:text-sm shadow-sm transition-all"
                    >
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{copy.btnContact}</span>
                    </a>
                  </div>

                  <span className="text-[11px] sm:text-xs font-mono text-slate-600 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {copy.avail}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Technical Chapters & Contact Bar Strip */}
        <div className="pt-4 mt-2 border-t border-slate-300 dark:border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#selected-works"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-blue-950/80 hover:bg-blue-50 dark:hover:bg-blue-900 border border-slate-300 dark:border-blue-500/30 text-slate-800 dark:text-white font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <Code2 className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-300" />
              <span>{copy.ch1}</span>
            </a>

            <a
              href="#interactive-lab"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-blue-950/80 hover:bg-blue-50 dark:hover:bg-blue-900 border border-slate-300 dark:border-blue-500/30 text-slate-800 dark:text-slate-200 font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <Activity className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{copy.ch2}</span>
            </a>

            <a
              href="#academic-hub"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-blue-950/80 hover:bg-blue-50 dark:hover:bg-blue-900 border border-slate-300 dark:border-blue-500/30 text-fluid-blue dark:text-cyan-300 font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <GraduationCap className="w-3.5 h-3.5 text-amber-500 dark:text-fluid-yellow" />
              <span>{copy.ch3}</span>
            </a>

            <a
              href="#engineering-pillars"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-blue-950/80 hover:bg-blue-50 dark:hover:bg-blue-900 border border-slate-300 dark:border-blue-500/30 text-slate-800 dark:text-slate-200 font-semibold font-condensed tracking-wide text-xs transition-all shadow-sm"
            >
              <Droplet className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>{copy.ch4}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-700 dark:text-cyan-300" dir="ltr">
            <a href="tel:+213655748513" className="flex items-center gap-1.5 hover:text-fluid-blue dark:hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F7B500]" />
              <span>+213 655 74 85 13</span>
            </a>
            <span className="text-blue-500">•</span>
            <a href="mailto:mohamedbaatas@gmail.com" className="flex items-center gap-1.5 hover:text-fluid-blue dark:hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400" />
              <span>mohamedbaatas@gmail.com</span>
            </a>
            <span className="text-blue-500">•</span>
            <a href="https://github.com/mohamedbaatas-hash" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-fluid-blue dark:hover:text-white transition-colors">
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </BlueprintCadre>
  );
}

export default HeroSection;
`

### File: src/components/sections/SelectedWorksSection.jsx

`jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CheckCircle2,
  Laptop,
  Droplets,
  Store,
  Activity,
  Layers,
  Play,
  X,
  ShieldAlert,
  Cpu
} from 'lucide-react';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CircuitBackground } from '../common/CircuitBackground';

export function SelectedWorksSection() {
  const { t } = useTranslation();
  const [selectedModalWork, setSelectedModalWork] = useState(null);

  const caseStudies = t('CASE_STUDIES', { returnObjects: true }) || [];
  const freelanceSolutions = t('FREELANCE_SOLUTIONS', { returnObjects: true }) || [];

  const findCaseStudy = (id) =>
    Array.isArray(caseStudies) ? caseStudies.find((c) => c.id === id) : null;
  const findFreelance = (id) =>
    Array.isArray(freelanceSolutions) ? freelanceSolutions.find((f) => f.id === id) : null;

  const works = [
    {
      id: 'constracker-suite',
      num: '01',
      tapeTag: '01 // CIVIL DESKTOP ERP',
      title: t('WORKS.constracker_title', 'Constracker Suite'),
      tag: t('WORKS.constracker_tag', 'Desktop Application • Civil ERP'),
      icon: <Laptop className="w-5 h-5 text-fluid-blue dark:text-cyan-400" />,
      punchline: t(
        'WORKS.constracker_desc',
        'Offline-first desktop software engineered with Electron, React 18, and SQLite3 to unify site worker assignments, budgeting, and materials without active internet.'
      ),
      bullets: [
        t('WORKS.constracker_h1', 'Offline-first local SQLite3 database with zero-latency querying.'),
        t('WORKS.constracker_h2', '7 integrated core project management & measurement modules.'),
        t('WORKS.constracker_h3', 'Cross-platform native executable packaging via Electron Builder.')
      ],
      stack: ['Electron', 'React 18', 'TypeScript', 'SQLite3', 'Tailwind CSS', 'shadcn/ui'],
      metrics: [
        { label: t('WORKS.metric_arch', 'Architecture'), value: 'Offline-First' },
        { label: t('WORKS.metric_modules', 'Modules'), value: '7 Core Tools' },
        { label: t('WORKS.metric_db', 'Database'), value: 'SQLite Local' }
      ],
      deepDive: findCaseStudy('constracker-suite')
    },
    {
      id: 'waterfit-telemetry',
      num: '02',
      tapeTag: '02 // IOT TELEMETRY & CLOUD',
      title: t('WORKS.waterfit_title', 'WaterFit Telemetry'),
      tag: t('WORKS.waterfit_tag', 'IoT Telemetry • Cloud Microservice'),
      icon: <Droplets className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      punchline: t(
        'WORKS.waterfit_desc',
        'Asynchronous telemetry platform connecting water sensors with an async Python FastAPI backend and Telegram Bot API to log consumption and flag micro-leaks.'
      ),
      bullets: [
        t('WORKS.waterfit_h1', 'Sub-2s conversational ingestion via Telegram Bot API.'),
        t('WORKS.waterfit_h2', 'Asynchronous FastAPI webhook listeners & background tasks.'),
        t('WORKS.waterfit_h3', 'Real-time Firebase sync with proactive deficit & leak alerts.')
      ],
      stack: ['Python 3.11', 'FastAPI', 'Telegram Bot API', 'Firebase', 'Asyncio Webhooks'],
      metrics: [
        { label: t('WORKS.metric_latency', 'Latency'), value: '<180 ms' },
        { label: t('WORKS.metric_compliance', 'Compliance'), value: '+340%' },
        { label: t('WORKS.metric_concurrency', 'Throughput'), value: '500+ req/s' }
      ],
      deepDive: findCaseStudy('waterfit-telemetry')
    },
    {
      id: 'maktabi-pos',
      num: '03',
      tapeTag: '03 // COMMERCIAL DESKTOP POS',
      title: t('WORKS.maktabi_title', 'Maktabi POS & Commercial Systems'),
      tag: t('WORKS.maktabi_tag', 'Commercial Software • Retail Production'),
      icon: <Store className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      punchline: t(
        'WORKS.maktabi_desc',
        'Production commercial desktop suites deployed for business clients in retail and fitness, handling 10,000+ item catalogs and hardware biometric turnstiles.'
      ),
      bullets: [
        t('WORKS.maktabi_h1', 'Sub-second barcode lookup across 10,000+ SKU catalogs.'),
        t('WORKS.maktabi_h2', 'Direct ESC/POS thermal printer and serial cash drawer control.'),
        t('WORKS.maktabi_h3', 'Biometric/RFID turnstile control with +28% renewal increase.')
      ],
      stack: ['Python', 'PyQt6 / Qt', 'SQLite', 'ESC/POS Protocol', 'RFID / Biometrics'],
      metrics: [
        { label: t('WORKS.metric_deployment', 'Deployment'), value: '3 Stores / Gyms' },
        { label: t('WORKS.metric_audit', 'Audit Saved'), value: '-65% Time' },
        { label: t('WORKS.metric_uptime', 'Uptime'), value: '100% Offline' }
      ],
      deepDive: findFreelance('maktabi-pos')
    },
    {
      id: 'epanet-solver',
      num: '04',
      tapeTag: '04 // HYDRAULIC & SCADA ENGINES',
      title: t('WORKS.epanet_title', 'EPANET 2.2 & SCADA Digital Twins'),
      tag: t('WORKS.epanet_tag', 'Hydraulic Modeling • Numerical Simulation'),
      icon: <Activity className="w-5 h-5 text-fluid-blue dark:text-blue-400" />,
      punchline: t(
        'WORKS.epanet_desc',
        'Deterministic hydraulic solver and Zeriba El Oued WWTP SCADA digital twin implementing Hazen-Williams friction equations and Newton-Raphson matrix iterations.'
      ),
      bullets: [
        t('WORKS.epanet_h1', 'Deterministic head loss calibrated to pipe roughness C-factors.'),
        t('WORKS.epanet_h2', 'Newton-Raphson nodal gradient iterations solving pressures live.'),
        t('WORKS.epanet_h3', 'Interactive scenarios: morning peak, fire flow & pipe rupture.')
      ],
      stack: ['EPANET 2.2 Math', 'Newton-Raphson', 'Hazen-Williams', 'PyQt6 / React SVG'],
      metrics: [
        { label: t('WORKS.metric_topology', 'Topology'), value: '8 Nodes • 11 Links' },
        { label: t('WORKS.metric_physics', 'Physics'), value: 'Hazen-Williams' },
        { label: t('WORKS.metric_interactivity', 'Solver'), value: 'Newton-Raphson' }
      ],
      deepDive: findCaseStudy('scada-wwtp'),
      hasLiveLab: true
    }
  ];

  const handleLaunchLab = (tabName) => {
    window.dispatchEvent(new CustomEvent('fluiddev:launch-lab', { detail: { tab: tabName } }));
    const labSection = document.getElementById('interactive-lab');
    if (labSection) {
      labSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BlueprintCadre
      id="selected-works"
      cadreTag="CADRE_CATALOG: PRODUCTION_SOFTWARE // 04_NODES"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={true}
      conduitPosition="left"
      className="py-16 sm:py-24 bg-slate-50/40 dark:bg-[#07133f]/70 relative"
    >
      <CircuitBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-fluid-blue dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/30">
              01 // {t('WORKS.section_tag', 'SIGNATURE WORKS')}
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              0101 / FLOW.DATA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white">
            {t('WORKS.section_title', 'Selected Engineering & Software Systems')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t(
              'WORKS.section_desc',
              'Production desktop applications, IoT telemetry pipelines, and computational hydraulic solvers built for real-world reliability.'
            )}
          </p>
        </div>

        {/* Selected Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {works.map((work) => (
            <div
              key={work.id}
              className="group rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-[#0A1B54]/80 hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 p-6 flex flex-col justify-between shadow-lg relative overflow-hidden backdrop-blur-sm"
            >
              <span className="absolute top-2.5 right-2.5 text-[11px] font-mono text-slate-300 dark:text-cyan-400/50 select-none pointer-events-none">
                +
              </span>

              <div>
                <div className="inline-block mb-3.5">
                  <span className="px-3 py-1 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs uppercase shadow-sm">
                    {work.tapeTag}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30">
                      {work.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-title text-slate-900 dark:text-white tracking-tight group-hover:text-fluid-blue dark:group-hover:text-cyan-300 transition-colors">
                        {work.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {work.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-2xl font-black font-condensed text-slate-200 dark:text-blue-950 group-hover:text-fluid-blue/40 dark:group-hover:text-cyan-400/40 transition-colors select-none">
                    {work.num}
                  </span>
                </div>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                  {work.punchline}
                </p>

                <ul className="mt-4 space-y-1.5 pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
                  {work.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {work.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-2 rounded-lg bg-slate-50 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/20 text-center"
                    >
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block truncate">
                        {m.label}
                      </span>
                      <span className="text-xs font-bold font-condensed text-slate-900 dark:text-cyan-300 mt-0.5 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {work.stack.map((stk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-blue-950/60 border border-slate-200 dark:border-blue-500/30 text-[10px] font-mono text-slate-700 dark:text-blue-300"
                    >
                      {stk}
                    </span>
                  ))}
                </div>

                {/* Interactive Deep-Dive & Live Simulator Action Row */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/60">
                  {work.deepDive && (
                    <button
                      type="button"
                      onClick={() => setSelectedModalWork(work)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-fluid-blue dark:text-cyan-400 hover:underline"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>{t('CASE_STUDIES_SECTION.view_study', 'View Full Case Study')}</span>
                    </button>
                  )}

                  {work.hasLiveLab && (
                    <button
                      type="button"
                      onClick={() => handleLaunchLab('epanet')}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-fluid-blue hover:bg-fluid-blue-bright text-white text-xs font-condensed font-bold tracking-wide shadow-sm transition-all"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>{t('LAB.btn_launch_epanet', 'Launch EPANET Solver')}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Architecture Modal */}
      {selectedModalWork && selectedModalWork.deepDive && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedModalWork(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#07133F] border border-slate-200 dark:border-cyan-500/40 p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed text-xs uppercase">
                  {selectedModalWork.tapeTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-title mt-2">
                  {selectedModalWork.deepDive.title || selectedModalWork.deepDive.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedModalWork(null)}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-5 text-xs sm:text-sm">
              {selectedModalWork.deepDive.problem && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-500/30">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-600 dark:text-red-400 uppercase mb-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    <span>{t('CASE_STUDIES_SECTION.problem', 'Problem Statement & Field Vulnerability')}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    {selectedModalWork.deepDive.problem}
                  </p>
                </div>
              )}

              <div>
                <h4 className="font-mono text-xs font-bold text-fluid-blue dark:text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  <span>{t('CASE_STUDIES_SECTION.methodology', 'Engineered Methodology & Implementation')}</span>
                </h4>
                <ul className="space-y-2">
                  {(selectedModalWork.deepDive.methodology || selectedModalWork.deepDive.features || []).map(
                    (step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </BlueprintCadre>
  );
}

export default SelectedWorksSection;
`

### File: src/components/sections/InteractiveLabSection.jsx

`jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Network, Droplets, X, ChevronUp, Activity } from 'lucide-react';
import { useScadaEngine } from '../../hooks/useScadaEngine';
import { useEpanetEngine } from '../../hooks/useEpanetEngine';
import { ScadaFlowDiagram } from '../simulator/scada/ScadaFlowDiagram';
import { ScadaControlDesk } from '../simulator/scada/ScadaControlDesk';
import { ScadaTelemetryPanel } from '../simulator/scada/ScadaTelemetryPanel';
import { ScadaAlarmBanner } from '../simulator/scada/ScadaAlarmBanner';
import { EpanetNetworkCanvas } from '../simulator/epanet/EpanetNetworkCanvas';
import { EpanetNodeInspector } from '../simulator/epanet/EpanetNodeInspector';
import { EpanetControls } from '../simulator/epanet/EpanetControls';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CollageBackground } from '../common/CollageBackground';

export function InteractiveLabSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('scada');
  const [isOpen, setIsOpen] = useState(false);

  const scada = useScadaEngine();
  const epanet = useEpanetEngine();

  useEffect(() => {
    const handleExternalLaunch = (e) => {
      const requestedTab = e.detail?.tab;
      if (requestedTab === 'scada' || requestedTab === 'epanet') {
        setActiveTab(requestedTab);
      }
      setIsOpen(true);
    };
    window.addEventListener('fluiddev:launch-lab', handleExternalLaunch);
    return () => window.removeEventListener('fluiddev:launch-lab', handleExternalLaunch);
  }, []);

  return (
    <BlueprintCadre
      id="interactive-lab"
      cadreTag="TESTBED_TERMINAL // RUNNING"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={true}
      conduitPosition="right"
      className="py-16 sm:py-24 bg-slate-50/40 dark:bg-[#07133f]/70 relative overflow-hidden"
    >
      <CollageBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-200 dark:border-cyan-500/30">
              02 // {t('LAB.section_tag', 'Experimental Testbed')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white mt-4">
              {t('LAB.section_title', 'The Interactive Engineering Lab')}
            </h2>
            <p className="mt-3 text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {t(
                'LAB.section_desc',
                'Explore live, deterministic cyber-physical simulations executed directly in your browser. Toggle between the natural lagoon WWTP process train and the pressurized looped EPANET hydraulic solver.'
              )}
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            <button
              onClick={() => {
                setActiveTab('scada');
                setIsOpen(true);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'scada' && isOpen
                  ? 'bg-fluid-blue text-white font-semibold shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900'
              }`}
            >
              <Droplets className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
              <span>{t('LAB.tab_scada', 'SCADA Water Plant')}</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('epanet');
                setIsOpen(true);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'epanet' && isOpen
                  ? 'bg-cyan-600 text-white font-semibold shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900'
              }`}
            >
              <Network className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
              <span>{t('LAB.tab_epanet', 'EPANET Solver')}</span>
            </button>
          </div>
        </div>

        {/* Compact Showcase Card (When minimized) */}
        {!isOpen && (
          <div className="rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white/90 dark:bg-[#0A1B54]/80 p-8 sm:p-10 shadow-xl backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono text-fluid-blue dark:text-cyan-400 uppercase tracking-wider font-bold flex items-center gap-1.5 mb-2">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  {t('LAB.lab_status', 'Laboratory Architecture')}
                </span>
                <h3 className="text-2xl font-bold font-title text-slate-900 dark:text-white tracking-tight">
                  {t('LAB.lab_headline', 'Mathematical Rigor Meets In-Browser Interaction')}
                </h3>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {t(
                    'LAB.lab_narrative',
                    "These engines aren't mockups. They run continuous time-step mass balance, diurnal flow algorithms, and non-linear hydraulic matrix equations entirely on client-side JavaScript."
                  )}
                </p>

                {/* Live Background Telemetry Readout Strip */}
                <div className="mt-6 grid grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block">WWTP INFLOW</span>
                    <span className="font-bold text-slate-900 dark:text-emerald-400">
                      {Math.round(scada.state.flowM3d).toLocaleString()} m³/d
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block">EFFLUENT BOD5</span>
                    <span className="font-bold text-slate-900 dark:text-cyan-400">
                      {scada.state.bodOut.toFixed(1)} mg/L
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30">
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block">EPANET GRID</span>
                    <span className="font-bold text-slate-900 dark:text-[#F7B500]">
                      {epanet.solvedNetwork.nodes.length} Nodes Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-end">
                <button
                  onClick={() => {
                    setActiveTab('scada');
                    setIsOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-fluid-blue hover:bg-fluid-blue-bright text-white font-semibold font-condensed tracking-wide text-sm transition-all shadow-lg hover:shadow-blue-500/20"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{t('LAB.btn_launch_scada', 'Launch SCADA Simulation')}</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('epanet');
                    setIsOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold font-condensed tracking-wide text-sm transition-all shadow-lg hover:shadow-cyan-500/20"
                >
                  <Network className="w-4 h-4 text-white" />
                  <span>{t('LAB.btn_launch_epanet', 'Launch EPANET Solver')}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Live Opened Simulator Workstation */}
        {isOpen && (
          <div className="rounded-2xl border border-cyan-500/40 bg-[#07133F] text-slate-100 p-6 sm:p-8 shadow-2xl space-y-6 animate-in fade-in duration-300 relative CAD-workstation-terminal">
            <div className="flex items-center justify-between pb-4 border-b border-cyan-950/60">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-semibold text-slate-200 uppercase tracking-wider">
                  {activeTab === 'scada'
                    ? t('LAB.scada_live_title', 'SCADA Process Train — Zeriba El Oued WWTP')
                    : t('LAB.epanet_live_title', 'EPANET 2.2 Network Solver — Looped Municipal Grid')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab(activeTab === 'scada' ? 'epanet' : 'scada')}
                  className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 border border-slate-700 transition-colors"
                >
                  {activeTab === 'scada'
                    ? t('LAB.switch_to_epanet', 'Switch to EPANET')
                    : t('LAB.switch_to_scada', 'Switch to SCADA')}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close Lab"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {activeTab === 'scada' && (
              <div className="space-y-6">
                <div className="bg-[#0B1120] rounded-xl p-4 border border-cyan-500/20 overflow-x-auto">
                  <ScadaFlowDiagram state={scada.state} />
                </div>
                <ScadaControlDesk
                  state={scada.state}
                  toggleSimulation={scada.toggleSimulation}
                  setControlMode={scada.setControlMode}
                  togglePumpIn={scada.togglePumpIn}
                  togglePumpOut={scada.togglePumpOut}
                  setScreenAuto={scada.setScreenAuto}
                  triggerStormSurge={scada.triggerStormSurge}
                  triggerPollutionSpike={scada.triggerPollutionSpike}
                  simulatePumpFailure={scada.simulatePumpFailure}
                  emergencyStop={scada.emergencyStop}
                  resetSimulation={scada.resetSimulation}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <ScadaTelemetryPanel state={scada.state} />
                  <ScadaAlarmBanner activeAlarms={scada.state.activeAlarms} eventLog={scada.state.eventLog} />
                </div>
              </div>
            )}

            {activeTab === 'epanet' && (
              <div className="space-y-6">
                <EpanetControls
                  scenarios={epanet.scenarios}
                  currentScenario={epanet.currentScenario}
                  onSelectScenario={epanet.setScenario}
                  pumpActive={epanet.pumpActive}
                  onTogglePump={epanet.toggleBoosterPump}
                  onResetNetwork={epanet.resetNetwork}
                />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 bg-[#0B1120] rounded-xl p-4 border border-cyan-500/20 overflow-x-auto min-w-0">
                    <EpanetNetworkCanvas
                      solvedNetwork={epanet.solvedNetwork}
                      selectedElementId={epanet.selectedElementId}
                      onSelectElement={epanet.selectElement}
                    />
                  </div>
                  <div className="lg:col-span-1">
                    <EpanetNodeInspector
                      selectedNode={epanet.selectedNode}
                      selectedLink={epanet.selectedLink}
                      onSetThrottle={epanet.setPipeThrottle}
                      onToggleBurst={epanet.togglePipeBurst}
                      burstPipes={epanet.burstPipes}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
              >
                <span>{t('LAB.close_lab', 'Minimize Lab Console')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </BlueprintCadre>
  );
}

export default InteractiveLabSection;
`

### File: src/components/sections/EngineeringPillarsSection.jsx

`jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Droplet, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CircuitBackground } from '../common/CircuitBackground';

export function EngineeringPillarsSection() {
  const { t } = useTranslation();
  const translatedCategories = t('SKILLS_CATEGORIES', { returnObjects: true }) || [];

  const pillars = [
    {
      num: '01',
      tapeTag: '01 // FLUID MECHANICS',
      domain: t('PILLARS.hydro_title', 'Hydraulic Systems & Infrastructure'),
      tag: t('PILLARS.hydro_tag', 'Fluid Mechanics & Sanitary Modeling'),
      icon: <Droplet className="w-5 h-5 text-fluid-blue dark:text-cyan-400" />,
      punchline: t(
        'PILLARS.hydro_desc',
        'Rigorous computational modeling of pressurized drinking networks, treatment plants, and urban water cycles.'
      ),
      skills: translatedCategories[0]?.skills || []
    },
    {
      num: '02',
      tapeTag: '02 // SOFTWARE & DATA',
      domain: t('PILLARS.software_title', 'Full-Stack & Desktop Architecture'),
      tag: t('PILLARS.software_tag', 'Modern Software & Relational Systems'),
      icon: <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      punchline: t(
        'PILLARS.software_desc',
        'High-reliability desktop software, asynchronous Python backends, and resilient offline-first databases.'
      ),
      skills: translatedCategories[1]?.skills || []
    },
    {
      num: '03',
      tapeTag: '03 // EDGE TELEMETRY',
      domain: t('PILLARS.iot_title', 'Cyber-Physical IoT & Edge Telemetry'),
      tag: t('PILLARS.iot_tag', 'Embedded Systems & Industrial Telemetry'),
      icon: <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      punchline: t(
        'PILLARS.iot_desc',
        'Microcontroller firmware, edge sensor loops, and real-time cloud telemetry for automated fluid infrastructure.'
      ),
      skills: translatedCategories[2]?.skills || []
    }
  ];

  return (
    <BlueprintCadre
      id="engineering-pillars"
      cadreTag="SYSTEM_DISCIPLINES: 03_PILLARS // BALANCED"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={true}
      conduitPosition="left"
      className="py-16 sm:py-24 bg-slate-50/50 dark:bg-[#07133f]/70 relative"
    >
      <CircuitBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/30">
              04 // {t('PILLARS.section_tag', 'CORE CAPABILITIES')}
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              01 · 10 · 11 // TELEMETRY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white">
            {t('PILLARS.section_title', 'Three Engineering Pillars')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t(
              'PILLARS.section_desc',
              'Bridging fluid physics, modern software architectures, and embedded edge electronics.'
            )}
          </p>
        </div>

        {/* 3 Pillars Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="group rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-[#0A1B54]/80 p-6 flex flex-col justify-between hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-lg relative overflow-hidden backdrop-blur-sm"
            >
              <span className="absolute top-2.5 right-2.5 text-[11px] font-mono text-slate-300 dark:text-cyan-400/50 select-none pointer-events-none">
                +
              </span>

              <div>
                <div className="inline-block mb-3.5">
                  <span className="px-3 py-1 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs uppercase shadow-sm">
                    {pillar.tapeTag}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-title text-slate-900 dark:text-white tracking-tight">
                        {pillar.domain}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {pillar.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-2xl font-black font-condensed text-slate-200 dark:text-blue-950 group-hover:text-emerald-500/50 dark:group-hover:text-emerald-400/50 transition-colors select-none">
                    {pillar.num}
                  </span>
                </div>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-sans">
                  {pillar.punchline}
                </p>

                <div className="mt-5 space-y-2 pt-3.5 border-t border-slate-100 dark:border-slate-800">
                  {pillar.skills.slice(0, 6).map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-lg bg-slate-50 dark:bg-[#07133F] border border-slate-200/80 dark:border-blue-500/20 flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400 shrink-0" />
                        <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200 truncate">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-cyan-300/80 bg-slate-100 dark:bg-blue-950/60 px-2 py-0.5 rounded shrink-0">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BlueprintCadre>
  );
}

export default EngineeringPillarsSection;
`

### File: src/components/sections/AcademicHubSection.jsx

`jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThesisMakeoverCompare } from './academic/ThesisMakeoverCompare';
import { SoutenanceLaptopMockup } from './academic/SoutenanceLaptopMockup';
import { AcademicServicesGrid } from './academic/AcademicServicesGrid';
import { AcademicEthicsBanner } from './academic/AcademicEthicsBanner';
import { AcademicCtaBanner } from './academic/AcademicCtaBanner';
import { CircuitBackground } from '../common/CircuitBackground';
import { GraduationCap, FileCheck, Clock, Globe, Laptop, Split, Sparkles } from 'lucide-react';

export function AcademicHubSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('makeover');

  const stats = [
    {
      value: t('ACADEMIC_HUB.stats.theses_transformed', '50+ Theses'),
      detail: t('ACADEMIC_HUB.stats.theses_detail', 'Delivered for Master & PhD defenses'),
      icon: <GraduationCap className="w-4 h-4 text-cyan-400" />
    },
    {
      value: t('ACADEMIC_HUB.stats.defense_ready', '100%'),
      detail: t('ACADEMIC_HUB.stats.defense_detail', 'Jury-compliant formatting & timing'),
      icon: <FileCheck className="w-4 h-4 text-emerald-400" />
    },
    {
      value: t('ACADEMIC_HUB.stats.turnaround', '< 5 Days'),
      detail: t('ACADEMIC_HUB.stats.turnaround_detail', 'Rapid turnaround for critical deadlines'),
      icon: <Clock className="w-4 h-4 text-fluid-yellow" />
    },
    {
      value: t('ACADEMIC_HUB.stats.satisfaction', '3 Languages'),
      detail: t('ACADEMIC_HUB.stats.satisfaction_detail', 'Arabic, French & English proficiency'),
      icon: <Globe className="w-4 h-4 text-blue-400" />
    }
  ];

  return (
    <section
      id="academic-hub"
      className="relative py-16 sm:py-24 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/60 dark:bg-[#07133f]/70 overflow-hidden"
    >
      <CircuitBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-fluid-yellow" />
              03 // {t('ACADEMIC_HUB.section_badge', 'ACADEMIC TRANSFORMATION // FLUIDEV')}
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              01 001 1010
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-title text-slate-900 dark:text-white tracking-tight leading-tight">
            {t('ACADEMIC_HUB.section_title', 'Academic Transformation & Thesis Hub')}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {t(
              'ACADEMIC_HUB.section_subtitle',
              'Transforming raw scientific research and engineering drafts into defense-ready theses, high-impact Soutenance presentation decks, and university-compliant publications.'
            )}
          </p>
        </div>

        {/* 4 Stats Cards Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/90 dark:bg-[#0A1B54]/90 border border-slate-200 dark:border-blue-500/30 backdrop-blur-sm flex flex-col justify-between shadow-sm"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-2xl font-black font-condensed text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </span>
                <div className="p-1.5 rounded-lg bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30">
                  {stat.icon}
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-tight">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Showcase Tabs Switcher */}
        <div className="mb-8 flex items-center justify-center">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-blue-500/30 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('makeover')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'makeover'
                  ? 'bg-fluid-blue text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Split className="w-4 h-4" />
              <span>{t('ACADEMIC_HUB.tabs.thesis_makeover', 'Thesis Makeover')}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('presentation')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'presentation'
                  ? 'bg-fluid-blue text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>{t('ACADEMIC_HUB.tabs.presentation_mockup', 'Defense Presentation')}</span>
            </button>
          </div>
        </div>

        {/* Interactive Showcase Container */}
        <div className="mb-14">
          {activeTab === 'makeover' ? (
            <div className="transition-opacity duration-300">
              <ThesisMakeoverCompare />
            </div>
          ) : (
            <div className="transition-opacity duration-300">
              <SoutenanceLaptopMockup />
            </div>
          )}
        </div>

        {/* 4 Core Academic Services Grid */}
        <div className="mb-14">
          <AcademicServicesGrid />
        </div>

        {/* Academic Ethics & Integrity Guarantee Banner */}
        <div className="mb-10">
          <AcademicEthicsBanner />
        </div>

        {/* Direct Call-to-Action Banner */}
        <div>
          <AcademicCtaBanner />
        </div>
      </div>
    </section>
  );
}

export default AcademicHubSection;
`

### File: src/components/sections/academic/ThesisMakeoverCompare.jsx

`jsx
import React, { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Sparkles, AlertTriangle, CheckCircle, Split, Eye, Layers, BookOpen, BookmarkCheck, FileText, Languages } from 'lucide-react';

export function ThesisMakeoverCompare() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  // Modes: 'split' | 'before' | 'after'
  const [viewMode, setViewMode] = useState('split');
  // Slider position from 0 to 100%
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const containerRef = useRef(null);

  // Drag interaction handler
  const handlePointerMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
    if (clientX === undefined) return;

    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (isRTL) {
      pos = 100 - pos;
    }
    pos = Math.max(5, Math.min(95, pos));
    setSliderPos(pos);
  }, [isRTL]);

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Hotspots definitions
  const hotspots = [
    {
      id: 'h1',
      number: '01',
      icon: <Layers className="w-3.5 h-3.5 text-amber-400" />,
      title: t('ACADEMIC_HUB.makeover.hotspots.h1_title', 'Structural Heading Hierarchy'),
      desc: t('ACADEMIC_HUB.makeover.hotspots.h1_desc', 'University-approved H1/H2/H3 styles with calibrated leading and automated section numbering.'),
      position: { top: '14%', right: '8%' }
    },
    {
      id: 'h2',
      number: '02',
      icon: <FileText className="w-3.5 h-3.5 text-cyan-400" />,
      title: t('ACADEMIC_HUB.makeover.hotspots.h2_title', 'Automated Indexing & Figures'),
      desc: t('ACADEMIC_HUB.makeover.hotspots.h2_desc', 'Dynamic Table of Contents, List of Figures and Tables, and separate Roman/Arabic pagination.'),
      position: { top: '34%', left: '8%' }
    },
    {
      id: 'h3',
      number: '03',
      icon: <BookmarkCheck className="w-3.5 h-3.5 text-blue-400" />,
      title: t('ACADEMIC_HUB.makeover.hotspots.h3_title', 'Unified APA / IEEE References'),
      desc: t('ACADEMIC_HUB.makeover.hotspots.h3_desc', 'Standardized citations with DOI verification and Mendeley/Zotero reference manager sync.'),
      position: { top: '62%', right: '8%' }
    },
    {
      id: 'h4',
      number: '04',
      icon: <Languages className="w-3.5 h-3.5 text-emerald-400" />,
      title: t('ACADEMIC_HUB.makeover.hotspots.h4_title', 'Academic Proofreading & Terminology'),
      desc: t('ACADEMIC_HUB.makeover.hotspots.h4_desc', 'Rigorous scientific terminology polish and grammatical correction in Arabic, French, and English.'),
      position: { bottom: '12%', left: '8%' }
    }
  ];

  // Effective split percentage based on current viewMode
  const effectiveSplit = viewMode === 'before' ? 100 : viewMode === 'after' ? 0 : sliderPos;

  return (
    <div className="w-full">
      {/* Interactive Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-slate-900/80 dark:bg-slate-900/90 border border-slate-800 p-2.5 sm:p-3 rounded-xl backdrop-blur-md">
        {/* Toggle Mode Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-lg border border-slate-800/80 text-xs sm:text-sm font-medium">
          <button
            type="button"
            onClick={() => setViewMode('split')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              viewMode === 'split'
                ? 'bg-fluid-blue text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Split className="w-3.5 h-3.5" />
            <span>{t('ACADEMIC_HUB.makeover.toggle_split', 'Split Compare')}</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('before')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              viewMode === 'before'
                ? 'bg-red-500/20 text-red-300 border border-red-500/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>{t('ACADEMIC_HUB.makeover.toggle_before', 'Raw Draft (Before)')}</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('after')}
            className={`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${
              viewMode === 'after'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t('ACADEMIC_HUB.makeover.toggle_after', 'FluiDev Thesis (After)')}</span>
          </button>
        </div>

        {/* Guidance Instruction & Slider Quick Percentage Indicator */}
        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
            <Sparkles className="w-3 h-3 text-fluid-yellow animate-pulse" />
            {t('ACADEMIC_HUB.makeover.slider_instruction', 'Drag slider or click buttons to reveal transformation')}
          </span>
          {viewMode === 'split' && (
            <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-semibold border border-slate-700">
              {Math.round(sliderPos)}% / {Math.round(100 - sliderPos)}%
            </span>
          )}
        </div>
      </div>

      {/* Main Makeover Stage Area */}
      <div
        ref={containerRef}
        onPointerMove={isDragging ? handlePointerMove : undefined}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[580px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl select-none touch-none bg-slate-950"
      >
        {/* Layer 1: AFTER (Full Canvas Underneath) - The FluiDev Clean Thesis */}
        <div className="absolute inset-0 w-full h-full p-4 sm:p-8 flex items-center justify-center bg-slate-900/95 dark:bg-[#07133F]">
          {/* Calibrated Thesis Sheet */}
          <div className="relative w-full max-w-2xl h-full bg-white dark:bg-[#0B1B4F] text-slate-900 dark:text-slate-100 rounded-lg shadow-xl p-6 sm:p-9 border border-slate-200 dark:border-blue-900/60 overflow-hidden flex flex-col justify-between">
            {/* Top Binding & Header Strip */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-700 via-cyan-500 to-amber-400" />
            
            {/* Header Telemetry */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-blue-800/40 pb-3 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-bold tracking-wider">
                {t('ACADEMIC_HUB.makeover.after_badge', 'AFTER // DEFENSE READY')}
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {t('ACADEMIC_HUB.makeover.after_status', 'Accredited University Standard')}
              </span>
            </div>

            {/* Structured Thesis Body */}
            <div className="py-3 flex-1 flex flex-col justify-center">
              {/* Chapter Badge */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-condensed tracking-widest uppercase font-bold bg-amber-400/20 text-amber-800 dark:text-amber-300 border border-amber-400/30">
                  {t('ACADEMIC_HUB.makeover.after_chapter', 'CHAPTER 01 // HYDRODYNAMICS')}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">P. 14 / 120</span>
              </div>

              {/* Title with Alexandria Typography */}
              <h4 className="text-base sm:text-xl font-bold font-title text-slate-900 dark:text-white leading-snug mb-1">
                {t('ACADEMIC_HUB.makeover.after_title', 'Hydrodynamic Modeling and Dissolved Oxygen Optimization in Facultative Lagoons')}
              </h4>
              <p className="text-xs text-blue-600 dark:text-cyan-400 font-medium mb-3">
                {t('ACADEMIC_HUB.makeover.after_subtitle', 'National Higher School of Hydraulics • Research Thesis')}
              </p>

              {/* Clean Lead Paragraph */}
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify mb-3 line-clamp-3 sm:line-clamp-4">
                {t('ACADEMIC_HUB.makeover.after_lead', 'Experimental analysis of biological kinetics and kinetic mass transfer in decentralized wastewater stabilization ponds under arid climate conditions.')}
              </p>

              {/* Formatted Citation Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-[11px] font-mono text-slate-700 dark:text-slate-300 w-fit">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{t('ACADEMIC_HUB.makeover.after_citation', '[Baatas et al., 2026 • IEEE / APA 7th Compliant]')}</span>
              </div>
            </div>

            {/* Tricolor Calibrated Footer Strip */}
            <div className="pt-3 border-t border-slate-200 dark:border-blue-800/40 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                <span className="text-[10px] tracking-wider uppercase font-semibold">FLUIDEV ACADEMIC CADRE</span>
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-300">TOC • FIG • APA 7TH</span>
            </div>
          </div>
        </div>

        {/* Layer 2: BEFORE (Revealed on the Left/Right based on split clip-path) */}
        <div
          className="absolute inset-0 w-full h-full p-4 sm:p-8 flex items-center justify-center bg-slate-950/90 overflow-hidden pointer-events-none transition-all duration-75"
          style={{
            clipPath: isRTL
              ? `inset(0 0 0 ${100 - effectiveSplit}%)`
              : `inset(0 ${100 - effectiveSplit}% 0 0)`
          }}
        >
          {/* Distressed Raw Draft Sheet */}
          <div className="relative w-full max-w-2xl h-full bg-[#f4efe6] dark:bg-[#1a1f2c] text-slate-800 dark:text-slate-300 rounded-lg shadow-xl p-6 sm:p-9 border border-amber-900/20 dark:border-red-900/30 overflow-hidden flex flex-col justify-between transform rotate-[-0.3deg]">
            {/* Header Telemetry */}
            <div className="flex items-center justify-between border-b border-dashed border-red-300 dark:border-red-900/50 pb-3 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-400 font-bold tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-3 h-3 text-red-500" />
                {t('ACADEMIC_HUB.makeover.before_badge', 'BEFORE // RAW DRAFT')}
              </span>
              <span className="text-red-700 dark:text-red-400 font-semibold text-[10px] bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded border border-red-200 dark:border-red-800">
                {t('ACADEMIC_HUB.makeover.before_penalty', 'Formatting penalty & missing citations')}
              </span>
            </div>

            {/* Messy Draft Content */}
            <div className="py-3 flex-1 flex flex-col justify-center opacity-90">
              <div className="mb-2">
                <span className="text-[10px] font-mono text-red-600 dark:text-red-400 line-through">
                  chapitre 1: aeratn lagoon ??
                </span>
              </div>

              {/* Crooked unformatted title */}
              <h4 className="text-base sm:text-lg font-mono font-bold text-slate-800 dark:text-slate-200 leading-snug mb-2 underline decoration-wavy decoration-red-400">
                {t('ACADEMIC_HUB.makeover.before_title', 'Study of WWTP facultative lagoon aeration')}
              </h4>

              {/* Distressed Bullet Points */}
              <div className="space-y-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 mb-3">
                <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400">
                  <span className="text-red-500">❌</span>
                  <span>{t('ACADEMIC_HUB.makeover.before_note_1', 'Inconsistent margins & uncalibrated fonts')}</span>
                </div>
                <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400">
                  <span className="text-amber-500">❌</span>
                  <span>{t('ACADEMIC_HUB.makeover.before_note_2', 'Broken heading numbering & missing styles')}</span>
                </div>
                <div className="flex items-center gap-1.5 text-red-600 dark:text-red-400">
                  <span className="text-red-500">❌</span>
                  <span>{t('ACADEMIC_HUB.makeover.before_note_3', 'Disorganized manual bibliography')}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500">
                  <span className="text-red-500">❌</span>
                  <span>{t('ACADEMIC_HUB.makeover.before_note_4', 'Typographical errors & informal phrasing')}</span>
                </div>
              </div>

              {/* Rough unformatted text block representation */}
              <div className="space-y-1.5 opacity-60">
                <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded w-11/12" />
                <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded w-4/5" />
                <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded w-5/6" />
              </div>
            </div>

            {/* Broken Footer */}
            <div className="pt-2 border-t border-dashed border-red-300 dark:border-red-900/50 flex items-center justify-between text-[10px] font-mono text-red-500">
              <span>UNFORMATTED DRAFT // RAW_FILE_V3_FINAL_REVISED.DOCX</span>
              <span>NO TOC / NO INDEX</span>
            </div>
          </div>
        </div>

        {/* 4 Hotspot Annotation Nodes Overlay (Interactive on the After view) */}
        {viewMode !== 'before' && (
          <div className="absolute inset-0 pointer-events-none">
            {hotspots.map((h) => {
              const isActive = activeHotspot === h.id;
              return (
                <div
                  key={h.id}
                  className="absolute pointer-events-auto group z-20"
                  style={h.position}
                >
                  {/* Pulsing Hotspot Trigger Dot */}
                  <button
                    type="button"
                    onClick={() => setActiveHotspot(isActive ? null : h.id)}
                    onMouseEnter={() => setActiveHotspot(h.id)}
                    onMouseLeave={() => setActiveHotspot(null)}
                    aria-label={h.title}
                    className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-fluid-navy/90 text-white border-2 border-fluid-yellow shadow-lg shadow-fluid-yellow/20 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-fluid-yellow"
                  >
                    <span className="absolute -inset-1 rounded-full bg-fluid-yellow/30 animate-ping pointer-events-none" />
                    <span className="font-condensed font-black text-xs text-fluid-yellow">{h.number}</span>
                  </button>

                  {/* Tooltip Card */}
                  <div
                    className={`absolute z-30 w-56 sm:w-64 p-3 rounded-xl bg-slate-900/95 text-slate-100 border border-slate-700 shadow-2xl backdrop-blur-md transition-all duration-200 text-right pointer-events-none ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    } ${
                      h.position.right ? 'right-0 top-10' : 'left-0 top-10'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-slate-800">
                      <span className="p-1 rounded bg-slate-800">{h.icon}</span>
                      <strong className="text-xs font-title font-bold text-white">{h.title}</strong>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Split Slider Divider Handle (Only visible in 'split' mode) */}
        {viewMode === 'split' && (
          <div
            onPointerDown={handlePointerDown}
            className="absolute top-0 bottom-0 z-30 cursor-ew-resize flex items-center justify-center transition-none"
            style={{
              [isRTL ? 'right' : 'left']: `${effectiveSplit}%`,
              transform: 'translateX(-50%)'
            }}
          >
            {/* Glowing Vertical Line */}
            <div className="w-[3px] h-full bg-gradient-to-b from-cyan-400 via-fluid-yellow to-blue-600 shadow-[0_0_12px_rgba(0,229,255,0.8)]" />

            {/* Center Circular Thumb Handle */}
            <div className="absolute w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900 text-white border-2 border-cyan-400 shadow-xl flex items-center justify-center text-xs font-bold hover:scale-110 active:scale-95 transition-transform">
              <span className="text-cyan-400 text-sm tracking-tight font-mono select-none">
                {isRTL ? '▶◀' : '◀▶'}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Accessible native range input for keyboard / screen-reader accessibility */}
      {viewMode === 'split' && (
        <div className="mt-3 px-2 flex items-center gap-3">
          <label htmlFor="thesis-compare-slider" className="text-xs font-mono text-slate-400 sr-only">
            {t('ACADEMIC_HUB.makeover.slider_instruction', 'Compare Slider')}
          </label>
          <input
            id="thesis-compare-slider"
            type="range"
            min="5"
            max="95"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>
      )}

      {/* 4 Makeover Feature Badges Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mt-6">
        {hotspots.map((h) => (
          <div
            key={h.id}
            onMouseEnter={() => setActiveHotspot(h.id)}
            onMouseLeave={() => setActiveHotspot(null)}
            className={`p-3 rounded-xl border transition-all cursor-pointer ${
              activeHotspot === h.id
                ? 'bg-blue-950/60 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]'
                : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-condensed font-black px-1.5 py-0.5 rounded bg-slate-800 text-fluid-yellow">
                {h.number}
              </span>
              <span className="p-1 rounded bg-slate-800/80">{h.icon}</span>
            </div>
            <h5 className="text-xs font-bold font-title text-slate-200 line-clamp-1">{h.title}</h5>
            <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5 leading-tight">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThesisMakeoverCompare;
`

### File: src/components/sections/academic/SoutenanceLaptopMockup.jsx

`jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Monitor, TrendingUp, Award, Activity, BarChart2, CheckCircle2, ChevronRight, Presentation } from 'lucide-react';

export function SoutenanceLaptopMockup() {
  const { t } = useTranslation();
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      id: 'cod',
      label: t('ACADEMIC_HUB.presentation.metrics.cod_label', 'COD Removal Efficiency'),
      value: '92.4%',
      target: t('ACADEMIC_HUB.presentation.metrics.cod_target', 'Target > 85.0%'),
      percent: 92.4,
      color: 'bg-cyan-400',
      textColor: 'text-cyan-400',
      borderColor: 'border-cyan-400/40',
      glow: 'shadow-[0_0_12px_rgba(0,229,255,0.4)]'
    },
    {
      id: 'bod',
      label: t('ACADEMIC_HUB.presentation.metrics.bod_label', 'BOD5 Compliance Rate'),
      value: '89.1%',
      target: t('ACADEMIC_HUB.presentation.metrics.bod_target', 'Regulatory Norms Met'),
      percent: 89.1,
      color: 'bg-blue-500',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/40',
      glow: 'shadow-[0_0_12px_rgba(59,130,246,0.4)]'
    },
    {
      id: 'energy',
      label: t('ACADEMIC_HUB.presentation.metrics.energy_label', 'Aeration Energy Savings'),
      value: '+28.5%',
      target: t('ACADEMIC_HUB.presentation.metrics.energy_target', 'Closed-loop DO Control'),
      percent: 78.5,
      color: 'bg-fluid-yellow',
      textColor: 'text-fluid-yellow',
      borderColor: 'border-fluid-yellow/40',
      glow: 'shadow-[0_0_12px_rgba(247,181,0,0.4)]'
    },
    {
      id: 'do',
      label: t('ACADEMIC_HUB.presentation.metrics.do_label', 'Dissolved Oxygen Stability'),
      value: '4.8 mg/L',
      target: t('ACADEMIC_HUB.presentation.metrics.do_target', 'Optimal Biological Range'),
      percent: 84.0,
      color: 'bg-emerald-400',
      textColor: 'text-emerald-400',
      borderColor: 'border-emerald-400/40',
      glow: 'shadow-[0_0_12px_rgba(16,185,129,0.4)]'
    }
  ];

  const takeaways = [
    t('ACADEMIC_HUB.presentation.takeaways.0', 'Structured & concise narrative highlighting experimental methodology'),
    t('ACADEMIC_HUB.presentation.takeaways.1', 'High-definition vector charts that impress defense committee members'),
    t('ACADEMIC_HUB.presentation.takeaways.2', 'Visual pacing engineered to keep jury attention within strict time limits')
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Slide Meta Tag */}
      <div className="w-full flex items-center justify-between gap-3 mb-4 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <Presentation className="w-4 h-4 text-fluid-yellow" />
          <span className="font-semibold text-slate-200 uppercase tracking-wider">
            {t('ACADEMIC_HUB.presentation.kicker', 'SOUTENANCE DEFENSE SLIDE // PRESENTATION DECK')}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-cyan-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>16:10 4K UHD DECK</span>
        </div>
      </div>

      {/* Realistic Laptop Chassis Wrapper */}
      <div className="w-full max-w-4xl relative">
        {/* Laptop Screen Bezel */}
        <div className="relative mx-auto w-[92%] sm:w-[88%] bg-[#1a2336] rounded-t-2xl sm:rounded-t-3xl p-2.5 sm:p-4 border-t-2 border-x-2 border-slate-700 shadow-2xl">
          {/* Top Webcam Notch & Status Light */}
          <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0a0f18] ring-1 ring-slate-600" />
            <span className="w-1 h-1 rounded-full bg-emerald-400/80 animate-ping" />
          </div>

          {/* Laptop Screen Display Area (16:10 Aspect Ratio) */}
          <div className="relative w-full aspect-[16/10] bg-[#07133F] rounded-lg sm:rounded-xl overflow-hidden border border-blue-900/40 p-4 sm:p-7 flex flex-col justify-between text-white shadow-inner">
            {/* Slide Blueprint Background Accents */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-slate-950/80 to-[#07133F] pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
            
            {/* Slide Header */}
            <div className="relative z-10 flex items-start justify-between border-b border-blue-800/40 pb-3">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-condensed font-bold tracking-widest uppercase bg-fluid-yellow/20 text-fluid-yellow border border-fluid-yellow/30">
                  {t('ACADEMIC_HUB.presentation.screen_kicker', 'THESIS DEFENSE // SOUTENANCE 2026')}
                </span>
                <h4 className="text-sm sm:text-xl font-bold font-title text-white tracking-tight mt-1">
                  {t('ACADEMIC_HUB.presentation.slide_title', 'RESEARCH FINDINGS: WWTP OPTIMIZATION')}
                </h4>
                <p className="text-[10px] sm:text-xs text-cyan-300 font-mono">
                  {t('ACADEMIC_HUB.presentation.slide_subtitle', 'Hydroinformatics telemetry & mass balance analysis')}
                </p>
              </div>

              {/* Presenter Watermark */}
              <div className="text-right hidden sm:block text-[11px] font-mono text-slate-400">
                <span className="text-slate-200 font-semibold block">
                  {t('ACADEMIC_HUB.presentation.presenter', 'Eng. Mohamed Baatas')}
                </span>
                <span className="text-[10px] text-slate-400">
                  {t('ACADEMIC_HUB.presentation.institution', 'National Higher School of Hydraulics')}
                </span>
              </div>
            </div>

            {/* Slide Center: Animated Research Charts & Telemetry Grid */}
            <div className="relative z-10 py-2 sm:py-3 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 flex-1 items-end">
              {metrics.map((m, idx) => {
                const isSelected = activeMetric === idx;
                return (
                  <div
                    key={m.id}
                    onClick={() => setActiveMetric(idx)}
                    className={`relative p-2 sm:p-3 rounded-lg border transition-all cursor-pointer flex flex-col justify-between h-full max-h-[160px] ${
                      isSelected
                        ? `bg-blue-950/80 ${m.borderColor} ${m.glow} scale-[1.03]`
                        : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-400 mb-1">
                        <span className="truncate">{m.label}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-base sm:text-2xl font-black font-condensed ${m.textColor}`}>
                          {m.value}
                        </span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 block mt-0.5 truncate">
                        {m.target}
                      </span>
                    </div>

                    {/* Animated Vertical Bar Indicator */}
                    <div className="w-full bg-slate-950/80 h-2 sm:h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-800 mt-2">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${m.color}`}
                        style={{ width: `${m.percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Slide Footer Information Bar */}
            <div className="relative z-10 pt-2 border-t border-blue-800/40 flex items-center justify-between text-[9px] sm:text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                <span className="text-cyan-300 font-semibold">SLIDE 18 / 32 • STATISTICAL VALIDATION</span>
              </div>
              <span className="text-fluid-yellow font-bold">R² = 0.984 • p &lt; 0.001</span>
            </div>
          </div>
        </div>

        {/* Realistic Laptop Base & Keyboard Chassis */}
        <div className="relative mx-auto w-full h-4 sm:h-6 bg-gradient-to-b from-[#8f9ba8] via-[#546073] to-[#2c3645] rounded-b-xl shadow-2xl flex items-start justify-center">
          {/* Center Trackpad Notch */}
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#1e2633] rounded-b-md mx-auto" />
        </div>
      </div>

      {/* 3 Presentation Takeaway Badges */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
        {takeaways.map((takeaway, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 text-xs text-slate-300"
          >
            <div className="p-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <span className="font-medium">{takeaway}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoutenanceLaptopMockup;
`

### File: src/components/sections/academic/AcademicServicesGrid.jsx

`jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Languages, BookmarkCheck, MonitorPlay, Check } from 'lucide-react';

export function AcademicServicesGrid() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'format',
      number: '01',
      tapeTag: '01 // FORMATTING',
      icon: <FileText className="w-5 h-5 text-cyan-400" />,
      title: t('ACADEMIC_HUB.services.items.format.title', 'Academic Formatting & University Standards'),
      desc: t('ACADEMIC_HUB.services.items.format.desc', 'Formatting aligned with university guidelines, margin standards, font hierarchy, and automated pagination.'),
      deliverables: [
        'Official university guidelines compliance',
        'Automated TOC, figures and tables indexing',
        'Clean high-resolution Word & PDF export'
      ],
      tag: 'WORD / LATEX / PDF'
    },
    {
      id: 'language',
      number: '02',
      tapeTag: '02 // PROOFREADING',
      icon: <Languages className="w-5 h-5 text-emerald-400" />,
      title: t('ACADEMIC_HUB.services.items.language.title', 'Scientific Linguistic Proofreading'),
      desc: t('ACADEMIC_HUB.services.items.language.desc', 'Linguistic proofreading in Arabic, French, and English, eliminating grammatical flaws and elevating academic syntax.'),
      deliverables: [
        'Academic phrasing & syntax polish',
        'Precise scientific & engineering terminology',
        'Trilingual review (Arabic / French / English)'
      ],
      tag: 'ARABIC / FRENCH / ENGLISH'
    },
    {
      id: 'references',
      number: '03',
      tapeTag: '03 // CITATIONS',
      icon: <BookmarkCheck className="w-5 h-5 text-blue-400" />,
      title: t('ACADEMIC_HUB.services.items.references.title', 'Reference Management & Indexing'),
      desc: t('ACADEMIC_HUB.services.items.references.desc', 'Standardized citation styling (APA 7th, IEEE), DOI verification, bibliography consolidation, and Zotero integration.'),
      deliverables: [
        'APA 7th, IEEE & Vancouver citation compliance',
        'Verified DOI links and primary sources',
        'BibTeX, RIS & Zotero library export'
      ],
      tag: 'APA 7TH / IEEE / ZOTERO'
    },
    {
      id: 'presentation',
      number: '04',
      tapeTag: '04 // SOUTENANCE',
      icon: <MonitorPlay className="w-5 h-5 text-fluid-yellow" />,
      title: t('ACADEMIC_HUB.services.items.presentation.title', 'Soutenance Defense Slide Decks'),
      desc: t('ACADEMIC_HUB.services.items.presentation.desc', 'Presentation slide decks engineered for defense juries, combining executive conciseness with custom scientific charts.'),
      deliverables: [
        'Defense-ready PowerPoint & Keynote decks',
        'Custom vector scientific infographics & charts',
        'Structured slide timing & visual hierarchy'
      ],
      tag: 'POWERPOINT / INFOGRAPHICS'
    }
  ];

  return (
    <div className="w-full">
      {/* Services Grid Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
            04 CORE ACADEMIC MODULES
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-title text-slate-900 dark:text-white">
          {t('ACADEMIC_HUB.services.title', 'Core Academic Services')}
        </h3>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="group rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white/80 dark:bg-[#0A1B54]/80 p-5 flex flex-col justify-between hover:border-blue-400 dark:hover:border-cyan-400 transition-all duration-300 shadow-md relative overflow-hidden backdrop-blur-sm"
          >
            <div>
              {/* Yellow Tape Badge with separate number element for test detection */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-[11px] uppercase">
                  {svc.tapeTag}
                </span>
                <span className="font-mono font-bold text-xs text-slate-400 dark:text-cyan-400/80">
                  {svc.number}
                </span>
              </div>

              {/* Header with Icon and Title */}
              <div className="flex items-start gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-xl bg-slate-100 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/30 shrink-0">
                  {svc.icon}
                </div>
                <h4 className="text-sm font-bold font-title text-slate-900 dark:text-white leading-snug">
                  {svc.title}
                </h4>
              </div>

              {/* Punchline */}
              <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {svc.desc}
              </p>

              {/* 3 Micro-Deliverables */}
              <ul className="mt-3.5 space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                {svc.deliverables.map((d, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                    <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tag */}
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-mono text-cyan-400 font-semibold tracking-wider">
                {svc.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademicServicesGrid;
`

### File: src/components/sections/academic/AcademicEthicsBanner.jsx

`jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, Scale, Award, Lock } from 'lucide-react';

export function AcademicEthicsBanner() {
  const { t } = useTranslation();

  return (
    <div className="w-full relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900/90 to-blue-950/60 border border-blue-900/40 p-6 sm:p-8 backdrop-blur-md shadow-xl">
      {/* Background Subtle Watermark */}
      <div className="absolute right-4 -bottom-6 opacity-5 pointer-events-none">
        <ShieldCheck className="w-56 h-56 text-white" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-cyan-400 shrink-0 mt-1">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded text-[10px] sm:text-xs font-condensed font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <Lock className="w-3 h-3" />
                {t('ACADEMIC_HUB.ethics.badge', 'ACADEMIC INTEGRITY GUARANTEE')}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold font-title text-white">
              {t('ACADEMIC_HUB.ethics.title', 'Responsible Academic Accompaniment & Scientific Ethics')}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl mt-1.5">
              {t('ACADEMIC_HUB.ethics.description', "We provide editorial, formatting, linguistic, and presentation structuring support. All core scientific research, calculations, data collection, and intellectual conclusions remain 100% the student's original work in strict adherence to academic honesty and ethics.")}
            </p>
          </div>
        </div>

        {/* 3 Integrity Micro-Pills */}
        <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-cyan-300">
            <Scale className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Zero Plagiarism Policy</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-emerald-300">
            <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>100% Originality Preserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicEthicsBanner;
`

### File: src/components/sections/academic/AcademicCtaBanner.jsx

`jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Send, Mail, Zap, Shield, RefreshCw, ArrowRight } from 'lucide-react';

export function AcademicCtaBanner() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  // Customized prefilled message based on active language
  const prefilledMessage = encodeURIComponent(
    isRTL
      ? 'مرحباً مهندس محمد، أود الاستفسار عن خدمات المرافقة وتنسيق المذكرات وعروض المناقشة (Academic Hub).'
      : i18n.language === 'fr'
      ? 'Bonjour Ing. Mohamed Baatas, je souhaite me renseigner sur vos services de mise en page de mémoire et présentation de soutenance.'
      : 'Hello Eng. Mohamed Baatas, I would like to inquire about your Academic Thesis Makeover & Defense Presentation services.'
  );

  const whatsappUrl = `https://wa.me/213655748513?text=${prefilledMessage}`;
  const telegramUrl = 'https://t.me/mohamed_baatas';

  const guarantees = [
    {
      icon: <Zap className="w-4 h-4 text-fluid-yellow shrink-0" />,
      text: t('ACADEMIC_HUB.cta.guarantees.0', 'Rapid turnaround respecting tight defense deadlines')
    },
    {
      icon: <Shield className="w-4 h-4 text-cyan-400 shrink-0" />,
      text: t('ACADEMIC_HUB.cta.guarantees.1', 'Strict confidentiality & 100% scientific originality preservation')
    },
    {
      icon: <RefreshCw className="w-4 h-4 text-emerald-400 shrink-0" />,
      text: t('ACADEMIC_HUB.cta.guarantees.2', 'Continuous adjustments and revisions up to defense day')
    }
  ];

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      // Pre-select service in inquiry form if dropdown exists
      const domainSelect = document.querySelector('select[name="domain"]');
      if (domainSelect) {
        domainSelect.value = 'academic';
      }
    }
  };

  return (
    <div className="w-full relative overflow-hidden rounded-3xl bg-slate-900/90 dark:bg-[#07133F] border border-blue-900/50 p-6 sm:p-10 shadow-2xl">
      {/* Blueprint Conduit Glow Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-fluid-yellow" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Left Column: Heading & Subtitle */}
        <div className="max-w-2xl">
          <span className="px-3 py-1 rounded-full text-xs font-condensed font-bold uppercase tracking-widest bg-fluid-yellow/20 text-fluid-yellow border border-fluid-yellow/30 inline-block mb-3">
            {t('ACADEMIC_HUB.cta.ready_kicker', 'READY FOR YOUR DEFENSE?')}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-title text-white tracking-tight leading-tight">
            {t('ACADEMIC_HUB.cta.title', 'Book Your Academic Thesis & Presentation Makeover')}
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            {t('ACADEMIC_HUB.cta.subtitle', 'Send your field of study, draft document, and target defense deadline for an immediate technical evaluation and timeline quote.')}
          </p>
        </div>

        {/* Right Column: Multi-Channel CTAs */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
          {/* WhatsApp Direct Primary Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-fluid-yellow text-slate-950 hover:bg-fluid-yellow-hover transition-all duration-200 shadow-lg shadow-fluid-yellow/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>{t('ACADEMIC_HUB.cta.btn_whatsapp', 'Inquire via WhatsApp')}</span>
            <span className="text-xs font-mono font-normal opacity-75">(+213 655 74 85 13)</span>
          </a>

          {/* Secondary Action Row: Telegram & Direct Order Form */}
          <div className="flex items-center gap-3">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm bg-blue-600/20 text-cyan-300 border border-cyan-500/30 hover:bg-blue-600/30 transition-all hover:scale-[1.02]"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>{t('ACADEMIC_HUB.cta.btn_telegram', 'Telegram')}</span>
            </a>

            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all hover:scale-[1.02]"
            >
              <Mail className="w-4 h-4 text-slate-300" />
              <span>{t('ACADEMIC_HUB.cta.btn_inquire', 'Order Support')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Turnaround & Guarantee Strip */}
      <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4">
        {guarantees.map((g, idx) => (
          <div key={idx} className="flex items-center gap-3 text-xs text-slate-300">
            <div className="p-1 rounded-full bg-slate-800/80 border border-slate-700">
              {g.icon}
            </div>
            <span>{g.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AcademicCtaBanner;
`

### File: src/components/sections/TrajectorySection.jsx

`jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, GraduationCap, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { CollageBackground } from '../common/CollageBackground';

export function TrajectorySection() {
  const { t } = useTranslation();

  const leadership = [
    {
      num: '01',
      tapeTag: '01 // SCIENTIFIC GOVERNANCE',
      role: t('TRAJECTORY.bernoulli_role', 'President'),
      org: t('TRAJECTORY.bernoulli_org', 'Bernoulli Hydraulics Scientific Club'),
      period: '2023 – 2025',
      type: t('TRAJECTORY.bernoulli_type', 'Leadership & Technical Mentorship'),
      bullets: [
        t('TRAJECTORY.bernoulli_b1', 'Elected to lead an executive committee of 15+ student engineers and 100+ active members.'),
        t('TRAJECTORY.bernoulli_b2', 'Designed and delivered technical masterclasses in EPANET 2.2 hydraulic modeling and ArcGIS Pro.'),
        t('TRAJECTORY.bernoulli_b3', 'Conducted hands-on IoT workshops interfacing Arduino microcontrollers with flow and pressure sensors.'),
        t('TRAJECTORY.bernoulli_b4', 'Coordinated technical field delegations to regional municipal water treatment plants and dam reservoirs.')
      ]
    },
    {
      num: '02',
      tapeTag: '02 // ENTERPRISE TELECOM',
      role: t('TRAJECTORY.huawei_role', 'Enterprise Telecommunications Intern'),
      org: t('TRAJECTORY.huawei_org', 'Huawei ICT Academy, Algiers'),
      period: '2024',
      type: t('TRAJECTORY.huawei_type', 'Enterprise Network Engineering'),
      bullets: [
        t('TRAJECTORY.huawei_b1', 'Mastered enterprise IP routing and switching protocols (OSPF, BGP, VLAN tagging, QoS).'),
        t('TRAJECTORY.huawei_b2', 'Analyzed data center network redundancy topologies and low-latency packet transmission architectures.'),
        t('TRAJECTORY.huawei_b3', 'Transferred enterprise network reliability principles directly to industrial SCADA and edge IoT sensor networks.')
      ]
    }
  ];

  const education = [
    {
      num: '03',
      tapeTag: '03 // MASTER OF SCIENCE (ENSH)',
      degree: t('TRAJECTORY.ms_degree', 'Master of Science (M.S.) — Water & Sanitation Services Management'),
      institution: t('TRAJECTORY.ms_inst', 'National Higher School of Hydraulics (ENSH)'),
      period: '2024 – Present',
      status: t('TRAJECTORY.ms_status', 'Enrolled'),
      detail: t(
        'TRAJECTORY.ms_detail',
        'Urban water cycle economics, wastewater treatment plant optimization, non-revenue water (NRW) reduction, sludge digestor treatment, and hydroinformatics computational methods.'
      )
    },
    {
      num: '04',
      tapeTag: '04 // BACHELOR OF SCIENCE',
      degree: t('TRAJECTORY.bs_degree', 'Bachelor of Science (B.S.) — Hydraulics Engineering'),
      institution: t('TRAJECTORY.bs_inst', 'Faculty of Civil & Hydraulic Engineering'),
      period: 'Graduated with Distinction',
      status: t('TRAJECTORY.bs_status', 'Graduated with Distinction'),
      detail: t(
        'TRAJECTORY.bs_detail',
        'Fluid mechanics, pressurized pipeline hydraulics, open-channel flow, hydrology, dam engineering, reinforced concrete for hydraulic structures, and soil mechanics.'
      )
    }
  ];

  return (
    <section
      id="trajectory"
      className="py-16 sm:py-24 border-b border-slate-200 dark:border-blue-500/20 bg-slate-50/50 dark:bg-[#07133f]/70 relative overflow-hidden"
    >
      <CollageBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-600 dark:text-cyan-400 bg-purple-50 dark:bg-blue-950/60 px-3 py-1 rounded-full border border-purple-200 dark:border-blue-500/30">
              05 // {t('TRAJECTORY.section_tag', 'TRAJECTORY & ROOTS')}
            </span>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
              0101 / FLOW.DATA
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white">
            {t('TRAJECTORY.section_title', 'Engineering Experience & Academic Roots')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t(
              'TRAJECTORY.section_desc',
              'Scientific club governance, enterprise telecommunication training, and accredited degrees in municipal water services and hydraulics.'
            )}
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Leadership */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-blue-500/30">
              <Briefcase className="w-5 h-5 text-fluid-blue dark:text-cyan-400" />
              <h3 className="text-lg font-bold font-title text-slate-900 dark:text-white tracking-tight">
                {t('TRAJECTORY.col_leadership', 'Leadership & Industry Training')}
              </h3>
            </div>

            <div className="space-y-5">
              {leadership.map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white/90 dark:bg-[#0A1B54]/80 p-6 shadow-md relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="inline-block mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-[11px] uppercase">
                      {item.tapeTag}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-500/30 text-fluid-blue dark:text-cyan-300 font-semibold">
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-title text-slate-900 dark:text-white tracking-tight mt-1">
                    {item.role}
                  </h4>
                  <p className="text-xs text-fluid-blue dark:text-cyan-400 font-medium">
                    {item.org}
                  </p>

                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {item.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Academic Degrees */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-blue-500/30">
              <GraduationCap className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
              <h3 className="text-lg font-bold font-title text-slate-900 dark:text-white tracking-tight">
                {t('TRAJECTORY.col_education', 'Academic Credentials')}
              </h3>
            </div>

            <div className="space-y-5">
              {education.map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white/90 dark:bg-[#0A1B54]/80 p-6 shadow-md relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="inline-block mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-[11px] uppercase">
                      {item.tapeTag}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-1.5">
                      <Award className="w-3 h-3 text-emerald-500" />
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-title text-slate-900 dark:text-white tracking-tight mt-1">
                    {item.degree}
                  </h4>
                  <p className="text-xs text-emerald-600 dark:text-emerald-300 font-medium">
                    {item.institution}
                  </p>

                  <p className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrajectorySection;
`

### File: src/components/sections/ContactSection.jsx

`jsx
import React, { useState } from 'react';
import {
  Mail,
  Send,
  ExternalLink,
  Check,
  FileText,
  Globe,
  Clock,
  Github,
  Linkedin,
  MessageSquare,
  ShieldCheck,
  Phone,
  Copy
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../../data/portfolioData';
import { BlueprintCadre } from '../common/BlueprintCadre';
import { CollageBackground } from '../common/CollageBackground';

const CONTACT_COPY = {
  ar: {
    title: 'تواصل مباشر وبدء المشاريع',
    subtitle: 'ناقش تفاصيل مذكرتك الأكاديمية، مشروعك البرمجي، أو استشر مهندس مياه وبرمجيات عن بُعد.',
    tape: 'READY TO START? // ابدأ مشروعك',
    channelsHeader: 'قنوات التواصل المعتمدة',
    channelsDesc: 'متاح لكل الولايات وعن بُعد، مع استشارة أولية مجانية لمناقشة أهداف المشروع.',
    cvBtn: 'تحميل السيرة الذاتية (CV)',
    formTitle: 'نموذج طلب خدمة أو استشارة تقنية',
    formDesc: 'أرسل تفاصيل مشروعك أو مذكرتك، ويمكنك إرسالها فوراً عبر واتساب أو البريد الإلكتروني.',
    lblName: 'الاسم / الجهة *',
    phName: 'محمد / باحث / شركة',
    lblEmail: 'البريد الإلكتروني أو رقم الهاتف *',
    phEmail: 'example@gmail.com / +213...',
    lblDomain: 'نوع الخدمة أو المشروع',
    lblMsg: 'تفاصيل المشروع *',
    phMsg: 'صف أهداف المشروع، الموعد النهائي، أو أي متطلبات خاصة...',
    submitBtn: 'تجهيز وإرسال الطلب الآن',
    sentTitle: 'تم تجهيز طلبك للإرسال الفوري!',
    sentSub: 'اختر وسيلة الإرسال المفضلة لديك أدناه ليصلني طلبك مباشرة:',
    whatsappBtn: 'إرسال فوري عبر واتساب',
    emailBtn: 'إرسال عبر البريد الإلكتروني',
    resetBtn: 'إرسال استفسار آخر',
    options: [
      'تنسيق مذكرات وبحوث أكاديمية (Word / LaTeX)',
      'عروض تقديمية للمناقشة Soutenance (PowerPoint)',
      'تطوير تطبيقات سطح المكتب والويب (Desktop ERP)',
      'نمذجة هيدروليكية وحسابات شبكات (EPANET)',
      'أنظمة أتمتة وإنترنت الأشياء (IoT & Telemetry)'
    ]
  },
  fr: {
    title: 'Contact Direct & Lancement de Projet',
    subtitle: 'Discutez de votre mémoire académique, de votre logiciel sur mesure ou réservez une consultation en hydroinformatique.',
    tape: 'READY TO START? // DÉMARRER',
    channelsHeader: 'Canaux de Contact Vérifiés',
    channelsDesc: 'Disponible en Algérie et à distance (Remote), avec consultation initiale gratuite.',
    cvBtn: 'Télécharger le CV Complet',
    formTitle: 'Formulaire de Demande Technique',
    formDesc: 'Décrivez votre besoin et expédiez-le directement via WhatsApp ou Email en un clic.',
    lblName: 'Nom / Organisation *',
    phName: 'Nom complet ou Entreprise',
    lblEmail: 'Email ou Téléphone *',
    phEmail: 'nom@domaine.com / +213...',
    lblDomain: 'Domaine du Projet',
    lblMsg: 'Détails & Échéance du Projet *',
    phMsg: 'Précisez vos objectifs, délais de soutenance ou spécifications techniques...',
    submitBtn: 'Préparer & Envoyer la Demande',
    sentTitle: 'Brief Technique Prêt à l’Envoi !',
    sentSub: 'Choisissez votre canal préféré ci-dessous pour me transmettre votre message instantanément :',
    whatsappBtn: 'Envoyer via WhatsApp Direct',
    emailBtn: 'Envoyer via Client Email',
    resetBtn: 'Nouvelle Demande',
    options: [
      'Mise en Page de Mémoire & Thèse (Word / LaTeX)',
      'Présentation de Soutenance (PowerPoint / Infographies)',
      'Développement Logiciel Desktop & ERP (Offline-First)',
      'Modélisation Hydraulique EPANET 2.2 & SIG',
      'Automatisation SCADA & Télémétrie IoT'
    ]
  },
  en: {
    title: 'Direct Contact & Project Dispatch',
    subtitle: 'Discuss your engineering software, hydraulic network model, or academic thesis makeover directly.',
    tape: 'READY TO START? // DISPATCH',
    channelsHeader: 'Verified Contact Channels',
    channelsDesc: 'Available across Algeria and remotely worldwide, with a complimentary initial technical consultation.',
    cvBtn: 'Download Resume (CV)',
    formTitle: 'Technical Inquiry & Project Brief',
    formDesc: 'Fill out your project specifications below for immediate dispatch via WhatsApp or Email.',
    lblName: 'Full Name / Organization *',
    phName: 'Engineer / Researcher / Company',
    lblEmail: 'Email Address or Phone *',
    phEmail: 'name@company.com / +213...',
    lblDomain: 'Service or Engineering Domain',
    lblMsg: 'Project Specifications & Timeline *',
    phMsg: 'Describe your project scope, target defense deadline, or technical requirements...',
    submitBtn: 'Prepare & Dispatch Inquiry',
    sentTitle: 'Project Brief Ready for Dispatch!',
    sentSub: 'Select your preferred channel below to send your formatted inquiry directly to Mohamed Baatas:',
    whatsappBtn: 'Send Instantly via WhatsApp',
    emailBtn: 'Send via Email Client',
    resetBtn: 'Create Another Inquiry',
    options: [
      'Academic Thesis Formatting & Proofreading (Word / LaTeX)',
      'Soutenance Defense Presentation Deck (PowerPoint)',
      'Custom Desktop ERP & Offline-First Software',
      'Hydraulic Network Modeling (EPANET 2.2 & GIS)',
      'SCADA Digital Twin & IoT Telemetry Systems'
    ]
  }
};

function BottomFlowSystem() {
  const wavePath = 'M0 14C65 0 135 28 200 14S335 0 400 14S535 28 600 14S735 0 800 14S935 28 1000 14S1135 0 1200 14';

  return (
    <div className="w-full mt-16 pt-8 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <svg className="w-full h-12 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 60" aria-hidden="true">
        <path d={`${wavePath}V60H0Z`} fill="#f7b500" fillOpacity="0.12" />
        <path d={wavePath} fill="none" stroke="#001db5" strokeLinecap="round" strokeWidth="6" className="dark:stroke-[#0A1B54]" />
        <path d={wavePath} fill="none" stroke="#00e5ff" strokeDasharray="16 10" strokeLinecap="round" strokeWidth="2.5" className="dark:stroke-[#00e5ff] stroke-[#005bff]" />
        <g transform="translate(400, 14)">
          <circle fill="#f7b500" r="11" stroke="#001db5" strokeWidth="3" className="dark:stroke-[#07133f]" />
          <circle fill="#00e5ff" r="5" stroke="white" strokeWidth="1.5" />
          <path d="M-15 0H15M0-15V15" stroke="#07133f" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g transform="translate(800, 14)">
          <circle fill="#f7b500" r="11" stroke="#001db5" strokeWidth="3" className="dark:stroke-[#07133f]" />
          <circle fill="#00e5ff" r="5" stroke="white" strokeWidth="1.5" />
          <path d="M-15 0H15M0-15V15" stroke="#07133f" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

export function ContactSection() {
  const { i18n } = useTranslation();
  const langKey = i18n.language?.startsWith('ar')
    ? 'ar'
    : i18n.language?.startsWith('fr')
    ? 'fr'
    : 'en';
  const copy = CONTACT_COPY[langKey];

  const [copiedKey, setCopiedKey] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    domain: copy.options[0],
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (key, val) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(val);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setFormSubmitted(true);
  };

  const formattedBrief = `Hello Eng. Mohamed Baatas (FluiDev),\n\n• Name: ${formState.name}\n• Contact: ${formState.email}\n• Domain: ${formState.domain}\n• Project Brief:\n${formState.message}`;
  const whatsappDispatchUrl = `https://wa.me/213655748513?text=${encodeURIComponent(formattedBrief)}`;
  const mailtoDispatchUrl = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(
    `[FluiDev Inquiry] ${formState.domain} — ${formState.name}`
  )}&body=${encodeURIComponent(formattedBrief)}`;

  const channels = [
    { key: 'phone', label: 'Direct Phone / WhatsApp', value: '+213 655 74 85 13', link: 'tel:+213655748513', icon: <Phone className="w-4 h-4 text-[#F7B500]" /> },
    { key: 'email', label: 'Direct Email', value: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}`, icon: <Mail className="w-4 h-4 text-cyan-400" /> },
    { key: 'telegram', label: 'Telegram Direct', value: '@Fluidev', link: CONTACT_INFO.socials.telegram, icon: <Send className="w-4 h-4 text-cyan-400" /> },
    { key: 'github', label: 'GitHub Repository', value: 'mohamedbaatas-hash', link: CONTACT_INFO.socials.github, icon: <Github className="w-4 h-4 text-slate-300" /> },
    { key: 'linkedin', label: 'LinkedIn Network', value: 'in/mohamedbaatas', link: CONTACT_INFO.socials.linkedin, icon: <Linkedin className="w-4 h-4 text-blue-400" /> }
  ];

  return (
    <BlueprintCadre
      id="contact"
      cadreTag="TELEMETRY_DISPATCH // TERMINAL_OUTPUT"
      coordinates="LAT:36.75 / LON:3.05"
      showConduit={true}
      conduitPosition="right"
      className="py-16 sm:py-24 bg-slate-100/90 dark:bg-[#07133F] relative overflow-hidden transition-colors duration-300"
    >
      <CollageBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-fluid-blue dark:text-cyan-400 bg-blue-100 dark:bg-blue-950/80 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/30">
              06 // DISPATCH &amp; CONTACT
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              0101 / FLOW.DATA
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-title tracking-tight text-slate-900 dark:text-white">
            {copy.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-[#0A1B54]/90 shadow-xl space-y-4 backdrop-blur-sm relative">
              <div className="inline-block mb-1">
                <span className="px-3 py-1 rounded bg-[#F7B500] text-[#07133F] font-black font-condensed tracking-wider text-xs uppercase shadow-sm">
                  {copy.tape}
                </span>
              </div>

              <h3 className="text-base font-bold font-title text-slate-900 dark:text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                {copy.channelsHeader}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans">
                {copy.channelsDesc}
              </p>

              <div className="space-y-2.5 pt-2">
                {channels.map((ch) => (
                  <div
                    key={ch.key}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-[#07133F] border border-slate-200 dark:border-blue-500/20 flex items-center justify-between gap-3 shadow-sm hover:border-fluid-blue dark:hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-slate-900 dark:bg-blue-950 border border-blue-500/30">
                        {ch.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {ch.label}
                        </span>
                        <span className="block text-xs font-mono text-slate-900 dark:text-slate-200 truncate" dir="ltr">
                          {ch.value}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopy(ch.key, ch.value)}
                        className="p-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                        title="Copy"
                      >
                        {copiedKey === ch.key ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      <a
                        href={ch.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-fluid-blue/10 dark:bg-blue-900/60 hover:bg-fluid-blue/20 dark:hover:bg-blue-800 text-fluid-blue dark:text-cyan-300 border border-fluid-blue/20 dark:border-blue-500/30 transition-colors inline-flex items-center justify-center"
                        title={`Open ${ch.label}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-blue-500/20 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-fluid-blue dark:text-cyan-400" /> {CONTACT_INFO.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> {CONTACT_INFO.timezone}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href="/Mohamed_Baatas_CV.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-condensed font-bold text-sm tracking-wide shadow-md transition-all"
                >
                  <FileText className="w-4 h-4 text-[#07133F]" />
                  <span>{copy.cvBtn}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-[#0A1B54]/90 shadow-xl relative backdrop-blur-sm">
              <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-cyan-400/50 select-none pointer-events-none" aria-hidden="true">
                +
              </span>

              <h3 className="text-base font-bold font-title text-slate-900 dark:text-white font-mono uppercase tracking-wider flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-fluid-blue dark:text-cyan-400" />
                {copy.formTitle}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 font-sans">
                {copy.formDesc}
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-center space-y-4">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white font-mono text-sm">
                    {copy.sentTitle}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    {copy.sentSub}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsappDispatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#F7B500] hover:bg-[#FFC72C] text-[#07133F] font-bold text-xs shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{copy.whatsappBtn}</span>
                    </a>
                    <a
                      href={mailtoDispatchUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-fluid-blue hover:bg-fluid-blue-bright text-white font-bold text-xs shadow-md transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{copy.emailBtn}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({ name: '', email: '', domain: copy.options[0], message: '' });
                    }}
                    className="mt-2 inline-block px-4 py-1.5 rounded-lg bg-slate-200 dark:bg-blue-900 hover:bg-slate-300 dark:hover:bg-blue-800 text-xs font-mono text-slate-800 dark:text-cyan-300"
                  >
                    {copy.resetBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                        {copy.lblName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={copy.phName}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07133F] border border-slate-300 dark:border-blue-500/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-fluid-blue dark:focus:border-cyan-400 text-xs font-mono transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                        {copy.lblEmail}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={copy.phEmail}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07133F] border border-slate-300 dark:border-blue-500/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-fluid-blue dark:focus:border-cyan-400 text-xs font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                      {copy.lblDomain}
                    </label>
                    <select
                      name="domain"
                      value={formState.domain}
                      onChange={(e) => setFormState({ ...formState, domain: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07133F] border border-slate-300 dark:border-blue-500/30 text-slate-900 dark:text-white focus:outline-none focus:border-fluid-blue dark:focus:border-cyan-400 text-xs font-mono transition-colors"
                    >
                      {copy.options.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 dark:text-slate-300 font-mono text-[11px] uppercase tracking-wider mb-1.5">
                      {copy.lblMsg}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={copy.phMsg}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-[#07133F] border border-slate-300 dark:border-blue-500/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-fluid-blue dark:focus:border-cyan-400 text-xs font-sans transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#001db5] hover:bg-[#0027ea] text-white font-bold font-condensed text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{copy.submitBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <BottomFlowSystem />
      </div>
    </BlueprintCadre>
  );
}

export default ContactSection;
`

### File: src/components/sections/CaseStudiesSection.jsx

`jsx
import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, Cpu, CheckCircle2, ShieldAlert, ExternalLink, ArrowRight, Activity, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { MetricBadge } from '../common/MetricBadge';

export function CaseStudiesSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const { t } = useTranslation();
  const caseStudies = t('CASE_STUDIES', { returnObjects: true });

  const toggleExpand = (id) => {
    if (!isExpanded) setIsExpanded(true);
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="case-studies" className="transition-all duration-300 border-b border-border-slate/80 bg-obsidian py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('CASE_STUDIES_SECTION.tag', 'ENGINEERING_PROJECTS')}
          title={t('CASE_STUDIES_SECTION.title', 'Flagship Case Studies & Applied Systems')}
          description={t('CASE_STUDIES_SECTION.desc', 'In-depth breakdown of municipal water distribution modeling, cyber-physical SCADA telemetry testbeds, and high-concurrency cloud telemetry pipelines.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies && caseStudies.map((study, idx) => (
                <div
                  key={study.id}
                  onClick={() => {
                    setIsExpanded(true);
                    setExpandedId(study.id);
                  }}
                  className="group cursor-pointer rounded-xl border border-border-slate/80 bg-surface-sunken/90 p-6 flex flex-col justify-between hover:border-cobalt-500/50 hover:bg-elevated-slate/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Category Pill */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[11px] font-semibold text-cobalt-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5" />
                        {study.id === 'waterfit-telemetry' ? 'Cloud & Telemetry' : (study.id === 'constracker-suite' ? 'Civil & Desktop ERP' : 'SCADA & Simulation')}
                      </span>
                      <span className="text-xs font-mono text-slate-500 group-hover:text-cobalt-300 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cobalt-300 transition-colors line-clamp-2">
                      {study.title.split('—')[0]}
                    </h3>

                    {/* Subtitle / category detail */}
                    <p className="text-xs text-slate-400 font-mono mt-1 mb-3 line-clamp-1">
                      {study.category}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {study.summary}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border-slate/60 space-y-3">
                    {/* Key Metrics Chips */}
                    <div className="grid grid-cols-2 gap-2">
                      {study.metrics && study.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="p-2 rounded bg-elevated-slate/60 border border-border-slate/60 text-center">
                          <span className="text-[10px] text-slate-400 block font-mono">{m.label}</span>
                          <span className="text-xs font-bold text-white font-mono">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stack tags preview */}
                    <div className="flex flex-wrap gap-1.5">
                      {study.stack && study.stack.slice(0, 3).map((stk, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded bg-black/40 border border-border-slate text-[10px] font-mono text-slate-300">
                          {stk}
                        </span>
                      ))}
                      {study.stack && study.stack.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                          +{study.stack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Expand CTA */}
                    <div className="flex items-center justify-between text-xs font-mono text-cobalt-400 group-hover:text-cobalt-300 pt-2">
                      <span>{t('CASE_STUDIES_SECTION.view_study', 'View Full Case Study')}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General Expand Banner */}
            <div className="rounded-xl border border-border-slate/80 bg-obsidian/70 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-slate-400">
                {t('CASE_STUDIES_SECTION.expand_all_prompt', 'Click to expand all engineering methodologies, field problems, and full architectural stacks.')}
              </span>
              <button
                onClick={() => {
                  setIsExpanded(true);
                  setExpandedId(null);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md group"
              >
                <span>{t('CASE_STUDIES_SECTION.expand_all_btn', 'Expand Complete Project Architectures')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED FULL ARCHITECTURES VIEW */}
        {isExpanded && (
          <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500 mt-6">
            {/* Top Collapse Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('CASE_STUDIES_SECTION.collapse_all_btn', 'Collapse Case Studies')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            {caseStudies && caseStudies.map((study) => {
              const isCardExpanded = expandedId === study.id || expandedId === null;

              return (
                <Card key={study.id} className="transition-all duration-200 border-border-slate/90 shadow-xl bg-surface-sunken">
                  {/* Header Strip */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border-slate/60">
                    <div>
                      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cobalt-400 font-semibold uppercase tracking-wider">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>{study.category}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {study.title}
                      </h3>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(study.id);
                      }}
                      className="self-start md:self-auto inline-flex items-center gap-2 px-3 py-1.5 rounded bg-elevated-slate hover:bg-slate-700 text-xs font-mono text-slate-300 border border-border-slate transition-colors"
                    >
                      <span>{isCardExpanded ? t('CASE_STUDIES_SECTION.collapse', 'Collapse Details') : t('CASE_STUDIES_SECTION.expand', 'Expand Full Methodology')}</span>
                      {isCardExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Summary & Metrics */}
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {study.metrics && study.metrics.map((m, idx) => (
                      <MetricBadge
                        key={idx}
                        label={m.label}
                        value={m.value}
                        status={idx === 0 ? "cobalt" : (idx === 1 ? "amber" : "nominal")}
                      />
                    ))}
                  </div>

                  {/* Expanded Deep Dive */}
                  {isCardExpanded && (
                    <div className="mt-6 pt-6 border-t border-border-slate/60 space-y-6">
                      {/* Problem Statement */}
                      <div className="p-4 rounded-lg bg-red-950/20 border border-red-500/30">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-1.5">
                          <ShieldAlert className="w-4 h-4" />
                          <span>{t('CASE_STUDIES_SECTION.problem', 'Problem Statement & Field Vulnerability')}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {study.problem}
                        </p>
                      </div>

                      {/* Methodology Steps */}
                      <div>
                        <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                          {t('CASE_STUDIES_SECTION.methodology', 'Engineered Methodology & Technical Implementation')}
                        </h4>
                        <ul className="space-y-2.5">
                          {study.methodology && study.methodology.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Hardware & Software Stack Badges */}
                      <div>
                        <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-3">
                          {t('CASE_STUDIES_SECTION.stack', 'Hardware & Software Technology Stack')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {study.stack && study.stack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded bg-elevated-slate border border-border-slate text-xs font-mono text-cobalt-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('CASE_STUDIES_SECTION.collapse_all_btn', 'Collapse Case Studies')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
`

### File: src/components/sections/ExperienceSection.jsx

`jsx
import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award, ChevronDown, ChevronUp, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const experienceTimeline = t('EXPERIENCE_TIMELINE', { returnObjects: true });
  const educationData = t('EDUCATION_DATA', { returnObjects: true });

  return (
    <section id="experience" className="transition-all duration-300 border-b border-border-slate/80 bg-surface-sunken py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('EXPERIENCE_SECTION.tag', 'CAREER_AND_ACADEMICS')}
          title={t('EXPERIENCE_SECTION.title', 'Engineering Experience & Academic Foundation')}
          description={t('EXPERIENCE_SECTION.desc', 'Leadership in scientific associations, enterprise networking training, and rigorous academic credentials in municipal hydraulics and water services management.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 rounded-xl border border-border-slate/80 bg-obsidian/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl hover:border-cobalt-500/40 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-border-slate/60">
              
              {/* Preview Col 1: Leadership & Industry */}
              <div 
                onClick={() => setIsExpanded(true)}
                className="group cursor-pointer p-5 rounded-lg bg-surface-sunken/80 border border-border-slate/60 hover:border-cobalt-500/40 hover:bg-elevated-slate/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cobalt-400" />
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {t('EXPERIENCE_SECTION.col1', 'Leadership & Industry Experience')}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-cobalt-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
                
                <div className="space-y-3 mt-4">
                  {experienceTimeline && experienceTimeline.slice(0, 2).map((exp, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-200 block">{exp.role}</span>
                        <span className="text-slate-400 text-[11px]">{exp.organization}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-black/40 border border-border-slate font-mono text-[10px] text-slate-400 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview Col 2: Academic Degrees */}
              <div 
                onClick={() => setIsExpanded(true)}
                className="group cursor-pointer p-5 rounded-lg bg-surface-sunken/80 border border-border-slate/60 hover:border-emerald-500/40 hover:bg-elevated-slate/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {t('EXPERIENCE_SECTION.col2', 'Academic Education & Degrees')}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>

                <div className="space-y-3 mt-4">
                  {educationData && educationData.slice(0, 2).map((edu, idx) => (
                    <div key={idx} className="flex items-start justify-between gap-2 text-xs">
                      <div>
                        <span className="font-semibold text-slate-200 block">{edu.degree}</span>
                        <span className="text-slate-400 text-[11px]">{edu.institution}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-black/40 border border-border-slate font-mono text-[10px] text-slate-400 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Expand Call To Action */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('EXPERIENCE_SECTION.credentials_count', 'Master of Science (M.S.) + Bachelor of Science (B.S.) • Huawei Seeds For Future • Club Leadership')}</span>
              </div>
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md group"
              >
                <span>{t('EXPERIENCE_SECTION.expand_btn', 'Expand Full Timeline & Credentials')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED FULL TIMELINE VIEW */}
        {isExpanded && (
          <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500 mt-6">
            {/* Top Collapse Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('EXPERIENCE_SECTION.collapse_btn', 'Collapse Timeline')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Column 1: Leadership & Industry Experience */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-border-slate/60">
                  <Briefcase className="w-5 h-5 text-cobalt-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {t('EXPERIENCE_SECTION.col1', 'Leadership & Industry Experience')}
                  </h3>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-border-slate/60">
                  {experienceTimeline && experienceTimeline.map((exp, idx) => (
                    <div key={idx} className="relative pl-9">
                      {/* Timeline node marker */}
                      <div className="absolute left-1.5 top-1.5 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-cobalt-500 bg-obsidian flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-cobalt-400" />
                      </div>

                      <Card className="hover:border-cobalt-500/40 transition-colors border-border-slate/90 shadow-xl bg-surface-sunken">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cobalt-950/60 border border-cobalt-500/30 font-mono text-xs text-cobalt-400 font-semibold">
                            {exp.type}
                          </span>
                          <div className="flex items-center gap-1 font-mono text-xs text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                          <span className="text-cobalt-300">{exp.organization}</span>
                          {exp.location && (
                            <>
                              <span className="text-slate-600">•</span>
                              <span className="flex items-center gap-1 text-slate-400">
                                <MapPin className="w-3 h-3" />
                                {exp.location}
                              </span>
                            </>
                          )}
                        </div>

                        <ul className="mt-4 space-y-2 border-t border-border-slate/60 pt-3">
                          {exp.highlights && exp.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Academic Education */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 pb-2 border-b border-border-slate/60">
                  <GraduationCap className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {t('EXPERIENCE_SECTION.col2', 'Academic Education & Degrees')}
                  </h3>
                </div>

                <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-border-slate/60">
                  {educationData && educationData.map((edu, idx) => (
                    <div key={idx} className="relative pl-9">
                      {/* Timeline node marker */}
                      <div className="absolute left-1.5 top-1.5 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-emerald-500 bg-obsidian flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      </div>

                      <Card className="hover:border-emerald-500/40 transition-colors border-border-slate/90 shadow-xl bg-surface-sunken">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 font-mono text-xs text-emerald-400 font-semibold">
                            <Award className="w-3 h-3" />
                            {t('EXPERIENCE_SECTION.accredited', 'Accredited Degree')}
                          </span>
                          <div className="flex items-center gap-1 font-mono text-xs text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                            <span>{edu.period}</span>
                          </div>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                          {edu.institution}
                        </p>

                        <div className="mt-4 border-t border-border-slate/60 pt-3 space-y-2">
                          <div className="text-xs text-slate-300">
                            <span className="font-mono text-slate-400">{t('EXPERIENCE_SECTION.specialization', 'Specialization:')} </span>
                            {edu.specialization}
                          </div>
                          {edu.focus && (
                            <div className="text-xs text-slate-400">
                              <span className="font-mono text-slate-500">{t('EXPERIENCE_SECTION.thesis', 'Focus / Thesis:')} </span>
                              {edu.focus}
                            </div>
                          )}
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('EXPERIENCE_SECTION.collapse_btn', 'Collapse Timeline')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
`

### File: src/components/sections/FreelanceSection.jsx

`jsx
import React, { useState } from 'react';
import { ShoppingBag, Users, BarChart3, CheckCircle, Award, ChevronDown, ChevronUp, ArrowRight, Store, Dumbbell, Database } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function FreelanceSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const freelanceSolutions = t('FREELANCE_SOLUTIONS', { returnObjects: true });

  const icons = {
    "maktabi-pos": <Store className="w-5 h-5 text-cobalt-400" />,
    "alquds-gym": <Dumbbell className="w-5 h-5 text-emerald-400" />,
    "custom-consulting": <Database className="w-5 h-5 text-cyan-400" />
  };

  return (
    <section id="freelance" className="transition-all duration-300 border-b border-border-slate/80 bg-obsidian py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('FREELANCE_SECTION.tag', 'COMMERCIAL_SOFTWARE')}
          title={t('FREELANCE_SECTION.title', 'Freelance Engineering & Bespoke Software')}
          description={t('FREELANCE_SECTION.desc', 'High-reliability desktop solutions, access control ERPs, and custom scientific data visualizers designed and deployed for commercial business clients.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {freelanceSolutions && freelanceSolutions.map((sol) => (
                <div
                  key={sol.id}
                  onClick={() => setIsExpanded(true)}
                  className="group cursor-pointer rounded-xl border border-border-slate/80 bg-surface-sunken/90 p-6 flex flex-col justify-between hover:border-emerald-500/50 hover:bg-elevated-slate/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-3 border-b border-border-slate/60">
                      <div className="p-2 rounded-lg bg-elevated-slate border border-border-slate/70">
                        {icons[sol.id] || <ShoppingBag className="w-5 h-5 text-cobalt-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base tracking-tight group-hover:text-emerald-300 transition-colors">
                          {sol.name.split('—')[0]}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400 block">
                          {sol.client}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {sol.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border-slate/60 space-y-3">
                    {/* Impact preview pill */}
                    <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="line-clamp-1 text-[11px] font-medium">{sol.impact}</span>
                    </div>

                    {/* Stack preview tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {sol.stack && sol.stack.slice(0, 3).map((stk, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded bg-black/40 border border-border-slate text-[10px] font-mono text-slate-300">
                          {stk}
                        </span>
                      ))}
                      {sol.stack && sol.stack.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                          +{sol.stack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-400 group-hover:text-emerald-300 pt-1">
                      <span>{t('FREELANCE_SECTION.view_features', 'View Full Capabilities')}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* General Expand Banner */}
            <div className="rounded-xl border border-border-slate/80 bg-obsidian/70 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-slate-400">
                {t('FREELANCE_SECTION.expand_prompt', 'Click to expand all engineering capabilities, hardware integrations, and client deployment details.')}
              </span>
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md group"
              >
                <span>{t('FREELANCE_SECTION.expand_btn', 'Expand All Commercial Systems')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED FULL VIEW */}
        {isExpanded && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500 mt-6">
            {/* Top Collapse Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('FREELANCE_SECTION.collapse_btn', 'Collapse Systems')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {freelanceSolutions && freelanceSolutions.map((sol) => (
                <Card key={sol.id} className="flex flex-col justify-between h-full border-border-slate/90 shadow-xl bg-surface-sunken">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 pb-3 border-b border-border-slate/60">
                      <div className="p-2 rounded-lg bg-elevated-slate border border-border-slate/70">
                        {icons[sol.id] || <ShoppingBag className="w-5 h-5 text-cobalt-400" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base sm:text-lg tracking-tight">
                          {sol.name}
                        </h3>
                        <span className="text-[11px] font-mono text-cobalt-400 uppercase tracking-wider block mt-0.5">
                          {sol.type}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {sol.description}
                    </p>

                    {/* Features */}
                    <div className="mt-5 space-y-2">
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                        {t('FREELANCE_SECTION.capabilities', 'Engineered Capabilities')}
                      </h4>
                      <ul className="space-y-2">
                        {sol.features && sol.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-border-slate/60 space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5">
                      {sol.stack && sol.stack.map((stk, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded bg-elevated-slate border border-border-slate text-[11px] font-mono text-slate-300"
                        >
                          {stk}
                        </span>
                      ))}
                    </div>

                    {/* Commercial Impact */}
                    <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex items-start gap-2 text-emerald-300 text-xs font-sans">
                      <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{sol.impact}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('FREELANCE_SECTION.collapse_btn', 'Collapse Systems')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
`

### File: src/components/sections/SkillsSection.jsx

`jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Droplet, Code, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';

export function SkillsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const skillsCategories = t('SKILLS_CATEGORIES', { returnObjects: true });

  const domainIcons = {
    0: <Droplet className="w-4 h-4 text-cobalt-400" />,
    1: <Code className="w-4 h-4 text-emerald-400" />,
    2: <Cpu className="w-4 h-4 text-cyan-400" />
  };

  // Top 10-12 curated skills for the rich compact preview
  const topPreviewSkills = [
    { name: "EPANET 2.2", domain: "hydraulics", level: "Expert", color: "border-blue-500/40 text-blue-300 bg-blue-950/30" },
    { name: "Python 3 / FastAPI", domain: "software", level: "Expert", color: "border-emerald-500/40 text-emerald-300 bg-emerald-950/30" },
    { name: "React 18 & Vite", domain: "software", level: "Advanced", color: "border-cyan-500/40 text-cyan-300 bg-cyan-950/30" },
    { name: "Hazen-Williams / Hydraulics", domain: "hydraulics", level: "Expert", color: "border-blue-500/40 text-blue-300 bg-blue-950/30" },
    { name: "SCADA & Telemetry", domain: "iot", level: "Advanced", color: "border-purple-500/40 text-purple-300 bg-purple-950/30" },
    { name: "ArcGIS Pro / ArcMap", domain: "hydraulics", level: "Advanced", color: "border-blue-500/40 text-blue-300 bg-blue-950/30" },
    { name: "AutoCAD Civil 3D", domain: "hydraulics", level: "Advanced", color: "border-blue-500/40 text-blue-300 bg-blue-950/30" },
    { name: "SQLite & PostgreSQL", domain: "software", level: "Advanced", color: "border-emerald-500/40 text-emerald-300 bg-emerald-950/30" },
    { name: "ESP32 & Arduino C++", domain: "iot", level: "Advanced", color: "border-purple-500/40 text-purple-300 bg-purple-950/30" },
    { name: "Tailwind CSS", domain: "software", level: "Expert", color: "border-cyan-500/40 text-cyan-300 bg-cyan-950/30" },
    { name: "Blynk IoT / MQTT", domain: "iot", level: "Advanced", color: "border-purple-500/40 text-purple-300 bg-purple-950/30" },
    { name: "Water Treatment (WWTP)", domain: "hydraulics", level: "Advanced", color: "border-blue-500/40 text-blue-300 bg-blue-950/30" },
  ];

  return (
    <section id="skills" className="transition-all duration-300 border-b border-border-slate/80 bg-surface-sunken py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('SKILLS_SECTION.tag', 'COMPETENCIES_MATRIX')}
          title={t('SKILLS_SECTION.title', 'Technical Competencies & Engineering Stacks')}
          description={t('SKILLS_SECTION.desc', 'Rigorous domain categorization across hydraulic modeling, modern full-stack software architecture, and cyber-physical IoT telemetry.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 rounded-xl border border-border-slate/80 bg-obsidian/70 backdrop-blur-sm p-6 sm:p-8 shadow-lg hover:border-cobalt-500/40 transition-all duration-300">
            {/* Pillars Overview Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-slate/60">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  {t('SKILLS_SECTION.core_domains', 'Core Engineering Domains:')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-950/50 text-blue-300 border border-blue-500/30">
                  <Droplet className="w-3.5 h-3.5 text-blue-400" />
                  {t('SKILLS_SECTION.domain_hydro', 'Hydraulics & Sanitation')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-950/50 text-emerald-300 border border-emerald-500/30">
                  <Code className="w-3.5 h-3.5 text-emerald-400" />
                  {t('SKILLS_SECTION.domain_soft', 'Software & Web Stacks')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-950/50 text-purple-300 border border-purple-500/30">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  {t('SKILLS_SECTION.domain_iot', 'SCADA & IoT Hardware')}
                </span>
              </div>

              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('SKILLS_SECTION.skills_count', '21 Verified Production Skills')}</span>
              </div>
            </div>

            {/* Curated Preview Skills Pills */}
            <div className="mt-6">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                {t('SKILLS_SECTION.featured_preview', 'Featured Competencies Preview (12 Skills):')}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {topPreviewSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 hover:scale-105 ${skill.color}`}
                  >
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-[10px] opacity-75 font-sans px-1.5 py-0.2 rounded bg-black/30">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expand Action Button */}
            <div className="mt-8 pt-5 border-t border-border-slate/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-400">
                {t('SKILLS_SECTION.expand_prompt', 'Click to expand complete capability matrix with detailed engineering descriptions, standards, and levels.')}
              </p>
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md hover:shadow-cobalt-500/20 group"
              >
                <span>{t('SKILLS_SECTION.expand_btn', 'Expand Full Competency Matrix & Tables')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED FULL TABLES VIEW */}
        {isExpanded && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
            {/* Collapse Bar */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('SKILLS_SECTION.collapse_btn', 'Collapse Matrix')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            {/* 3 Full Domain Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {skillsCategories && skillsCategories.map((cat, idx) => (
                <Card key={idx} className="flex flex-col h-full border-border-slate/90 shadow-xl bg-obsidian/90">
                  {/* Card Header */}
                  <div className="flex items-center gap-2.5 pb-3 border-b border-border-slate/60">
                    {domainIcons[idx]}
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {cat.domain}
                    </h3>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Skills Detailed Table/Cards */}
                  <div className="space-y-3 mt-auto">
                    {cat.skills && cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-lg bg-elevated-slate/60 border border-border-slate/70 hover:border-slate-500 transition-all hover:bg-elevated-slate"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-xs font-bold text-slate-100 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-obsidian text-cobalt-300 border border-border-slate">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal font-sans pl-5">
                          {skill.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('SKILLS_SECTION.collapse_btn', 'Collapse Matrix')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
`

### File: src/components/banner/FluiDevBanner.jsx

`jsx
import React, { useState, useEffect } from 'react';

function Icon({ name, size = 20 }) {
  const paths = {
    check: <path d="m5 12 4 4L19 6" />,
    chart: (
      <>
        <path d="M4 19V9m6 10V5m6 14v-7m4 7H2" />
        <path d="m3 7 6-4 6 5 6-4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-13-4 16" />,
    github: (
      <path
        d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z"
        fill="currentColor"
        stroke="none"
      />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2c-3.6-1.5-5.5-3.4-7-7l2-2-2-5Z" />
    ),
    research: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m14.5 14.5 6 6M8 8h4M8 11h3" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

function WaveMark() {
  return (
    <svg aria-hidden="true" className="wave-mark" fill="none" viewBox="0 0 95 38">
      <path d="M2 11c8-10 15 10 23 0s15 10 23 0 15 10 23 0 14 9 22 0" />
      <path d="M2 26c8-10 15 10 23 0s15 10 23 0 15 10 23 0 14 9 22 0" />
    </svg>
  );
}

function ContactBar({ icon, text, href }) {
  const content = (
    <div className="contact-bar hover:opacity-90 transition-opacity">
      <span className="contact-icon">
        <Icon name={icon} size={15} />
      </span>
      <span>{text}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="no-underline text-inherit block">
        {content}
      </a>
    );
  }
  return content;
}

function BottomFlowSystem() {
  const wavePath =
    'M0 14C65 0 135 28 200 14S335 0 400 14S535 28 600 14S735 0 800 14S935 28 1000 14S1135 0 1200 14';

  return (
    <svg
      aria-hidden="true"
      className="bottom-flow-system"
      preserveAspectRatio="none"
      viewBox="0 0 1200 60"
    >
      <path d={`${wavePath}V60H0Z`} fill="#f7b500" />
      <path
        d={wavePath}
        fill="none"
        stroke="#001db5"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path
        d={wavePath}
        fill="none"
        stroke="#00e5ff"
        strokeDasharray="18 12"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <g transform="translate(400 14)">
        <circle fill="#f7b500" r="13" stroke="#001db5" strokeWidth="4" />
        <circle fill="#00e5ff" r="6" stroke="white" strokeWidth="2" />
        <path d="M-19 0H19M0-19V19" fill="none" stroke="#001db5" strokeWidth="3" />
        <circle cx="-9" cy="-9" fill="white" r="1.7" />
        <circle cx="9" cy="-9" fill="white" r="1.7" />
        <circle cx="-9" cy="9" fill="white" r="1.7" />
        <circle cx="9" cy="9" fill="white" r="1.7" />
      </g>

      <g transform="translate(800 14)">
        <circle fill="#f7b500" r="13" stroke="#001db5" strokeWidth="4" />
        <circle fill="#00e5ff" r="6" stroke="white" strokeWidth="2" />
        <path d="M-19 0H19M0-19V19" fill="none" stroke="#001db5" strokeWidth="3" />
        <circle cx="-9" cy="-9" fill="white" r="1.7" />
        <circle cx="9" cy="-9" fill="white" r="1.7" />
        <circle cx="-9" cy="9" fill="white" r="1.7" />
        <circle cx="9" cy="9" fill="white" r="1.7" />
      </g>

      <g fill="#001db5" stroke="white" strokeWidth="1.5">
        <circle cx="200" cy="14" r="4" />
        <circle cx="600" cy="14" r="4" />
        <circle cx="1000" cy="14" r="4" />
      </g>
    </svg>
  );
}

function LeftPanel() {
  const promises = [
    {
      icon: 'research',
      title: 'دقة أكاديمية وضبط المراجع',
      body: 'تنسيق صارم وفق دليل الجامعة ومعايير APA / IEEE',
    },
    {
      icon: 'chart',
      title: 'إخراج بصري يبرز مجهودك',
      body: 'عروض احترافية ومخططات دقيقة تبهر لجنة المناقشة',
    },
    {
      icon: 'clock',
      title: 'التزام ومتابعة مستمرة',
      body: 'تسليم في الموعد مع تعديلات حتى يوم المناقشة',
    },
  ];

  return (
    <section className="panel left-panel" aria-label="الضمانات والتواصل">
      <div className="binder" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="left-content">
        <div className="section-kicker">WHAT TO EXPECT</div>
        <div className="arabic-heading">معايير عمل تضمن الجودة</div>
        <p className="section-intro">
          دقة في التنفيذ، إخراج احترافي، ومتابعة مستمرة من الفكرة إلى التسليم.
        </p>
        <div className="promise-list">
          {promises.map((promise, index) => (
            <div className="promise" key={promise.title}>
              <div className="promise-icon">
                <Icon name={promise.icon} size={21} />
              </div>
              <div>
                <strong>{promise.title}</strong>
                <p>{promise.body}</p>
              </div>
              <span className="promise-number">0{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="availability">
          <div>
            <span>AVAILABILITY &amp; ORDERS</span>
            <strong>متاح لكل الولايات وعن بُعد</strong>
          </div>
          <span className="mini-rule" />
          <div>
            <span>FREE CONSULTATION</span>
            <strong>ناقش تفاصيل مشروعك عبر الخاص</strong>
          </div>
        </div>
        <a href="#contact" className="start-cta no-underline block hover:scale-[1.02] transition-transform">
          <span>READY TO START?</span>
          <strong>ابدأ مشروعك اليوم</strong>
          <span className="arrow">←</span>
        </a>
      </div>
      <ContactBar icon="phone" text="+213 655 74 85 13" href="tel:+213655748513" />
    </section>
  );
}

function MiddlePanel() {
  const services = [
    ['01', 'المذكرات والبحوث', 'صياغة، تنسيق، تدقيق وضبط المراجع', '#academic-hub'],
    ['02', 'عروض المناقشة', 'PowerPoint، Infographics ومخططات', '#academic-hub'],
    ['03', 'تطوير البرامج والتطبيقات', 'تطبيقات سطح المكتب والويب • أنظمة وأتمتة مخصصة', '#selected-works'],
  ];

  return (
    <section className="panel middle-panel" aria-label="الخدمات الأساسية">
      <div className="paperclip" aria-hidden="true" />
      <div className="traffic-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="middle-content">
        <span
          className="brand-eyebrow"
          style={{ background: '#001db5', color: '#ffffff' }}
        >
          FLUIDEV / ACADEMIC &amp; DIGITAL
        </span>
        <div className="hero-title">
          خدمات برمجية
          <br />
          <span>وأكاديمية</span>
        </div>
        <div className="english-title">TURNING IDEAS INTO REALITY</div>
        <a href="#academic-hub" className="tape no-underline block hover:brightness-105 transition-all cursor-pointer">
          مذكرات تخرج • عروض احترافية • حلول برمجية ذكية
        </a>
        <div className="service-list">
          {services.map(([number, title, body, href]) => (
            <a href={href} className="service no-underline block group hover:bg-blue-50/50 p-1.5 rounded transition-colors" key={number}>
              <span className="service-number group-hover:scale-105 transition-transform">{number}</span>
              <div>
                <strong className="group-hover:text-fluid-blue transition-colors">{title}</strong>
                <p>{body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <ContactBar icon="github" text="mohamedbaatas-hash.github.io" href="https://github.com/mohamedbaatas-hash" />
    </section>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="portrait-placeholder" aria-label="موضع الصورة الشخصية">
      <div className="placeholder-head" />
      <div className="placeholder-body" />
      <span>MB</span>
    </div>
  );
}

function RightPanel({ portrait }) {
  const isDefaultPortrait = portrait === '/assets/mohamed-portrait.png';

  return (
    <section className="panel right-panel" aria-label="الهوية والشخصية">
      <div className="blueprint-lines" aria-hidden="true" />
      <div className="identity-grid" aria-hidden="true" />
      <div className="identity-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="identity-number" aria-hidden="true">
        01
      </div>
      <WaveMark />
      <div className="brand-pill">
        <span className="brand-symbol">F</span>
        <span>
          <strong>FluiDev</strong>
          <small>FLUID DEVELOPER</small>
        </span>
      </div>
      <div className="persona-copy">
        <span>ENGINEERING</span>
        <strong>
          SMART
          <br />
          SOLUTIONS.
        </strong>
        <small>نحوّل الأفكار إلى حلول رقمية تعمل</small>
      </div>
      <div className="identity-services">
        <span>APP DEVELOPMENT</span>
        <span>ACADEMIC SUPPORT</span>
        <span>DATA &amp; AUTOMATION</span>
      </div>
      <div className="portrait-wrap">
        {portrait ? (
          <img
            alt="محمد بعتاس"
            className={isDefaultPortrait ? 'default-portrait' : undefined}
            src={portrait}
          />
        ) : (
          <PortraitPlaceholder />
        )}
      </div>
      <div className="name-stack">
        <div>Mohamed | FluiDev</div>
        <span>مهندس مياه وبرمجيات</span>
        <span>خدمات أكاديمية ورقمية</span>
      </div>
      <div className="vertical-label">HYDROINFORMATICS / SOFTWARE</div>
      <ContactBar icon="mail" text="mohamedbaatas@gmail.com" href="mailto:mohamedbaatas@gmail.com" />
    </section>
  );
}

export function FluiDevBanner() {
  const [portrait, setPortrait] = useState('/assets/mohamed-portrait.png');

  useEffect(() => {
    // Process image to remove light background and crop cleanly
    const image = new Image();
    image.src = '/assets/mohamed-portrait.png';
    image.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context) return;

        context.drawImage(image, 0, 0);
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const { data } = imageData;
        const width = canvas.width;
        const height = canvas.height;
        const visited = new Uint8Array(width * height);
        const queue = new Int32Array(width * height);
        let head = 0;
        let tail = 0;

        const isBackground = (pixel) => {
          const offset = pixel * 4;
          return (
            data[offset] > 215 &&
            data[offset + 1] > 215 &&
            data[offset + 2] > 215
          );
        };

        const enqueue = (pixel) => {
          if (visited[pixel] || !isBackground(pixel)) return;
          visited[pixel] = 1;
          queue[tail++] = pixel;
        };

        for (let x = 0; x < width; x += 1) {
          enqueue(x);
          enqueue((height - 1) * width + x);
        }
        for (let y = 0; y < height; y += 1) {
          enqueue(y * width);
          enqueue(y * width + width - 1);
        }

        while (head < tail) {
          const pixel = queue[head++];
          const x = pixel % width;
          const y = Math.floor(pixel / width);
          data[pixel * 4 + 3] = 0;
          if (x > 0) enqueue(pixel - 1);
          if (x + 1 < width) enqueue(pixel + 1);
          if (y > 0) enqueue(pixel - width);
          if (y + 1 < height) enqueue(pixel + width);
        }

        context.putImageData(imageData, 0, 0);
        let minX = width;
        let minY = height;
        let maxX = 0;
        let maxY = 0;
        for (let pixel = 0; pixel < width * height; pixel += 1) {
          if (data[pixel * 4 + 3] === 0) continue;
          const x = pixel % width;
          const y = Math.floor(pixel / width);
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }

        const padding = 10;
        const cropX = Math.max(0, minX - padding);
        const cropY = Math.max(0, minY - padding);
        const cropWidth = Math.min(width - cropX, maxX - minX + padding * 2);
        const cropHeight = Math.min(height - cropY, maxY - minY + padding * 2);
        const croppedCanvas = document.createElement('canvas');
        croppedCanvas.width = cropWidth;
        croppedCanvas.height = cropHeight;
        croppedCanvas
          .getContext('2d')
          ?.drawImage(
            canvas,
            cropX,
            cropY,
            cropWidth,
            cropHeight,
            0,
            0,
            cropWidth,
            cropHeight
          );

        croppedCanvas.toBlob((blob) => {
          if (blob) {
            setPortrait(URL.createObjectURL(blob));
          }
        }, 'image/png');
      } catch (err) {
        // Fallback to raw path if canvas operations fail
        setPortrait('/assets/mohamed-portrait.png');
      }
    };
  }, []);

  return (
    <div className="preview-frame rounded-2xl shadow-2xl border border-blue-500/30 overflow-hidden relative">
      <div className="banner">
        <LeftPanel />
        <MiddlePanel />
        <RightPanel portrait={portrait} />

        <div className="blue-crossover" aria-hidden="true" />
        <div className="paper-crossover" aria-hidden="true" />
        <div className="shared-wordmark" aria-hidden="true">
          <span>FLUI</span>
          <strong>DEV</strong>
        </div>

        <svg
          aria-hidden="true"
          className="hydraulic-network"
          preserveAspectRatio="none"
          viewBox="0 0 1200 500"
        >
          <defs>
            <linearGradient
              id="banner-pipe-gradient"
              x1="40"
              x2="1160"
              y1="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#001db5" />
              <stop offset="0.62" stopColor="#005bff" />
              <stop offset="1" stopColor="#00e5ff" />
            </linearGradient>
          </defs>
          <path
            className="pipe-shadow"
            d="M48 410H168V370H274V414H389V350H504V402H622V328H744V392H846V333H947V270H1055V334H1160"
            fill="none"
            opacity="1"
            stroke="rgba(7, 19, 63, 0.12)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="14"
          />
          <path
            className="pipe-main"
            d="M48 410H168V370H274V414H389V350H504V402H622V328H744V392H846V333H947V270H1055V334H1160"
            fill="none"
            opacity="0.34"
            stroke="url(#banner-pipe-gradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="9"
          />
          <path
            className="pipe-highlight"
            d="M48 407H168V367H274M389 347H504V399H622M744 389H846V330H947M1055 331H1160"
            fill="none"
            opacity="0.7"
            stroke="rgba(255, 255, 255, 0.78)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            className="pipe-branch"
            d="M274 414V318H340V285M504 402V445M622 328V252H691M846 333V245H790V204M1055 334V215H1114V174"
            fill="none"
            opacity="0.2"
            stroke="#005bff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <g className="pipe-fitting" fill="#f8f9fa" opacity="0.6" stroke="#001db5" strokeWidth="3" transform="translate(168 370)">
            <circle r="12" />
            <circle r="5" />
            <path d="M-17 0H17M0-17V17" fill="none" />
          </g>
          <g className="pipe-fitting" fill="#f8f9fa" opacity="0.6" stroke="#001db5" strokeWidth="3" transform="translate(389 350)">
            <circle r="12" />
            <circle r="5" />
            <path d="M-17 0H17M0-17V17" fill="none" />
          </g>
          <g className="pipe-fitting" fill="#f8f9fa" opacity="0.6" stroke="#001db5" strokeWidth="3" transform="translate(622 328)">
            <circle r="12" />
            <circle r="5" />
            <path d="M-17 0H17M0-17V17" fill="none" />
          </g>
          <g className="pipe-fitting cyan" fill="#001db5" opacity="0.6" stroke="#00e5ff" strokeWidth="3" transform="translate(846 333)">
            <circle r="12" />
            <circle r="5" />
            <path d="M-17 0H17M0-17V17" fill="none" />
          </g>
          <g className="pipe-fitting cyan" fill="#001db5" opacity="0.6" stroke="#00e5ff" strokeWidth="3" transform="translate(1055 334)">
            <circle r="12" />
            <circle r="5" />
            <path d="M-17 0H17M0-17V17" fill="none" />
          </g>
          <g className="valve" fill="#f8f9fa" opacity="0.7" stroke="#001db5" strokeLinejoin="round" strokeWidth="3" transform="translate(744 392)">
            <path d="M-14-10 0 0l-14 10Zm28 0L0 0l14 10Z" />
            <path d="M0-18V0M-8-18H8" fill="none" />
          </g>
          <g className="valve cyan" fill="#001db5" opacity="0.7" stroke="#00e5ff" strokeLinejoin="round" strokeWidth="3" transform="translate(947 270)">
            <path d="M-14-10 0 0l-14 10Zm28 0L0 0l14 10Z" />
            <path d="M0-18V0M-8-18H8" fill="none" />
          </g>
          <path className="circuit-trace" d="M76 80h82l22 22h91l19-19h84m-298 34h54l18 18h68" fill="none" opacity="0.2" stroke="#001db5" strokeWidth="2" />
          <path className="circuit-trace right" d="M822 82h74l18 18h73l23-23h107m-295 55h48l22 22h83" fill="none" opacity="0.42" stroke="#00e5ff" strokeWidth="2" />
          <g className="circuit-nodes" fill="#f7b500" opacity="0.88" stroke="#001db5" strokeWidth="2">
            <circle cx="76" cy="80" r="5" />
            <circle cx="271" cy="102" r="5" />
            <circle cx="374" cy="83" r="5" />
            <circle cx="822" cy="82" r="5" />
            <circle cx="987" cy="100" r="5" />
            <circle cx="1117" cy="77" r="5" />
          </g>
          <text className="binary-code" fill="#001db5" fontFamily="Barlow Condensed" fontSize="11" fontWeight="800" opacity="0.28" x="83" y="105">01 001 1010</text>
          <text className="binary-code" fill="#001db5" fontFamily="Barlow Condensed" fontSize="11" fontWeight="800" opacity="0.28" x="515" y="443">0101 / FLOW.DATA</text>
          <text className="binary-code light" fill="#00e5ff" fontFamily="Barlow Condensed" fontSize="11" fontWeight="800" opacity="0.65" x="870" y="184">01 · 10 · 11</text>
        </svg>

        <svg
          aria-hidden="true"
          className="fluid-connector"
          preserveAspectRatio="none"
          viewBox="0 0 1200 500"
        >
          <defs>
            <filter id="banner-connector-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur result="blur" stdDeviation="3" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            className="connector-shadow"
            d="M1165 106C1050 84 984 149 901 155C795 163 757 104 671 129C568 159 608 260 492 274C376 288 303 234 218 276C153 308 113 333 42 314"
            fill="none"
            stroke="rgba(0, 29, 181, 0.2)"
            strokeWidth="8"
          />
          <path
            className="connector-main"
            d="M1165 106C1050 84 984 149 901 155C795 163 757 104 671 129C568 159 608 260 492 274C376 288 303 234 218 276C153 308 113 333 42 314"
            fill="none"
            stroke="#00e5ff"
            strokeWidth="3"
          />
          <path
            className="connector-dash"
            d="M1145 122C1037 104 978 165 896 171C782 179 747 124 669 149C581 177 614 277 493 291C369 306 301 252 219 294C158 325 115 350 57 333"
            fill="none"
            stroke="rgba(255, 255, 255, 0.82)"
            strokeDasharray="8 11"
            strokeWidth="1.5"
          />
          <circle cx="904" cy="155" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
          <circle cx="671" cy="129" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
          <circle cx="492" cy="274" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
          <circle cx="218" cy="276" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
        </svg>

        <div className="seam-stitch seam-stitch-center" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <BottomFlowSystem />
        <div className="cut-line cut-one" aria-hidden="true" />
        <div className="cut-line cut-two" aria-hidden="true" />
      </div>
    </div>
  );
}
`

### File: src/utils/hydraulicEngine.js

`jsx
/**
 * EPANET 2.2 Pressurized Water Distribution Network Solver
 * Pure mathematical engine implementing Hazen-Williams friction head loss,
 * centrifugal pump characteristics, and Global Gradient Newton-Raphson network solver.
 */

/**
 * Computes pipe hydraulic resistance coefficient R in SI units.
 * @param {number} lengthM - Pipe length in meters
 * @param {number} diameterMm - Pipe diameter in millimeters
 * @param {number} roughnessC - Hazen-Williams roughness coefficient
 * @param {number} [minorLossKm=0] - Minor loss coefficient
 * @returns {number} Resistance coefficient R
 */
export function computePipeResistance(lengthM, diameterMm, roughnessC, minorLossKm = 0) {
  const dM = diameterMm / 1000.0;
  const frictionR = (10.67 * lengthM) / (Math.pow(roughnessC, 1.852) * Math.pow(dM, 4.8704));
  const minorR = (8.0 * minorLossKm) / (Math.PI * Math.PI * 9.81 * Math.pow(dM, 4));
  return frictionR + minorR;
}

/**
 * Computes Hazen-Williams friction head loss hf given flow in m3/s.
 * @param {number} flowM3s - Flow rate in m3/s (signed)
 * @param {number} R - Resistance coefficient
 * @returns {number} Frictional head loss in meters (signed)
 */
export function computeHazenWilliamsHeadLoss(flowM3s, R) {
  const absQ = Math.abs(flowM3s);
  // Linearize for very small flows (< 1e-5 m3/s) to prevent gradient singularity
  if (absQ < 1e-5) {
    const linR = R * Math.pow(1e-5, 0.852);
    return linR * flowM3s;
  }
  return R * Math.sign(flowM3s) * Math.pow(absQ, 1.852);
}

/**
 * Computes derivative dhf/dQ for Newton-Raphson Jacobian.
 * @param {number} flowM3s - Flow rate in m3/s
 * @param {number} R - Resistance coefficient
 * @returns {number} dhf/dQ
 */
export function computeHeadLossDerivative(flowM3s, R) {
  const absQ = Math.abs(flowM3s);
  if (absQ < 1e-5) {
    return R * Math.pow(1e-5, 0.852);
  }
  return 1.852 * R * Math.pow(absQ, 0.852);
}

/**
 * Solves the 6-node looped hydraulic network using Newton-Raphson iteration.
 * @param {Object} topology - Network topology containing nodes and links
 * @param {number} [demandMultiplier=1.0] - Diurnal demand scaling factor
 * @param {Object} [demandOverrides={}] - Specific node demand overrides (L/s)
 * @param {Object} [pipeThrottles={}] - Map of pipeId -> throttle percentage (0-100)
 * @param {boolean} [pumpActive=true] - Booster pump station status
 * @param {Array<string>} [burstPipes=[]] - List of burst/ruptured pipe IDs
 * @returns {Object} Solved network state with nodal heads/pressures and pipe flows/velocities
 */
export function solveHydraulicNetwork(
  topology,
  demandMultiplier = 1.0,
  demandOverrides = {},
  pipeThrottles = {},
  pumpActive = true,
  burstPipes = []
) {
  const junctions = topology.nodes.filter(n => n.type === 'junction');
  const junctionIds = junctions.map(n => n.id);
  const N = junctionIds.length;

  // Boundary fixed head nodes
  const reservoir = topology.nodes.find(n => n.type === 'reservoir');
  const tank = topology.nodes.find(n => n.type === 'tank');
  const H_res = reservoir ? reservoir.fixedHeadM : 85.0;
  const H_tank = tank ? (tank.elevationM + (tank.initialLevelM || 7.5)) : 69.5;

  // Build nodal demands vector q (in m3/s)
  const qDem = {};
  junctions.forEach(j => {
    let baseLps = j.baseDemandLps * demandMultiplier;
    if (demandOverrides[j.id] !== undefined) {
      baseLps = demandOverrides[j.id];
    }
    // If adjacent pipe is burst, add emitter leak flow
    burstPipes.forEach(bId => {
      const p = topology.links.find(l => l.id === bId);
      if (p && (p.fromNode === j.id || p.toNode === j.id)) {
        baseLps += 22.5; // leak demand component
      }
    });
    qDem[j.id] = baseLps / 1000.0; // convert L/s to m3/s
  });

  // Initial head estimate at junctions
  const heads = {
    "J-1": pumpActive ? 82.0 : 65.0,
    "J-2": 76.0,
    "J-3": 71.0,
    "J-4": 72.0,
    "J-5": 74.0
  };

  // Helper to get head at any node
  const getHead = (id) => {
    if (id === 'RES-1') return H_res;
    if (id === 'TK-1') return H_tank;
    return heads[id] !== undefined ? heads[id] : 50.0;
  };

  // Compute link properties
  const linkProps = {};
  topology.links.forEach(link => {
    const throttle = pipeThrottles[link.id] !== undefined ? pipeThrottles[link.id] : (link.throttlePct || 100);
    const isBurst = burstPipes.includes(link.id) || link.isBurst;
    
    if (link.type === 'pump') {
      linkProps[link.id] = {
        type: 'pump',
        from: link.fromNode,
        to: link.toNode,
        active: pumpActive && throttle > 0
      };
    } else {
      let R = computePipeResistance(link.lengthM, link.diameterMm, link.roughnessC, link.minorLossKm);
      if (throttle < 100) {
        // High resistance for throttled valve
        const factor = Math.pow((100.0 - throttle) / Math.max(1.0, throttle), 2) * 50.0;
        R += factor;
      }
      if (throttle === 0) {
        R = 1e12; // isolated
      }
      linkProps[link.id] = {
        type: 'pipe',
        from: link.fromNode,
        to: link.toNode,
        R,
        diameterMm: link.diameterMm,
        lengthM: link.lengthM,
        throttle,
        isBurst
      };
    }
  });

  // Calculate flow on a link given node heads
  const calculateLinkFlow = (linkId, curHeads) => {
    const prop = linkProps[linkId];
    const hFrom = prop.from === 'RES-1' ? H_res : (prop.from === 'TK-1' ? H_tank : curHeads[prop.from]);
    const hTo = prop.to === 'RES-1' ? H_res : (prop.to === 'TK-1' ? H_tank : curHeads[prop.to]);
    
    if (prop.type === 'pump') {
      if (!prop.active) return 0.0;
      // Centrifugal pump: Head gain = H_pump -> H_to - H_from = 55 - 0.003 * Q^1.9
      const headDiff = hTo - hFrom;
      const nominalH = 50.0;
      if (headDiff >= 65.0) return 0.0;
      const estimatedQ = Math.max(0.0, Math.pow(Math.max(0.1, (65.0 - headDiff) / 0.0035), 1 / 1.9) / 1000.0);
      return Math.min(0.18, estimatedQ);
    }

    const deltaH = hFrom - hTo;
    const absDH = Math.abs(deltaH);
    const sign = Math.sign(deltaH);
    if (absDH < 1e-6) return 0.0;
    
    const flowM3s = sign * Math.pow(absDH / prop.R, 1 / 1.852);
    return flowM3s;
  };

  // Newton-Raphson solver for junction heads
  const maxIterations = 20;
  for (let iter = 0; iter < maxIterations; iter++) {
    // Evaluate mass balance residuals F(H) at each junction
    const residuals = {};
    const derivatives = {}; // diagonal Jacobian approximation
    
    junctionIds.forEach(jId => {
      residuals[jId] = -qDem[jId];
      derivatives[jId] = 0.0;
    });

    topology.links.forEach(link => {
      const q = calculateLinkFlow(link.id, heads);
      const prop = linkProps[link.id];
      
      if (junctionIds.includes(prop.from)) {
        residuals[prop.from] -= q;
        const dQdH = prop.type === 'pump' ? 0.005 : (Math.abs(q) > 1e-6 ? (1 / 1.852) * Math.abs(q) / Math.max(0.1, Math.abs(getHead(prop.from) - getHead(prop.to))) : 0.001);
        derivatives[prop.from] += dQdH;
      }
      if (junctionIds.includes(prop.to)) {
        residuals[prop.to] += q;
        const dQdH = prop.type === 'pump' ? 0.005 : (Math.abs(q) > 1e-6 ? (1 / 1.852) * Math.abs(q) / Math.max(0.1, Math.abs(getHead(prop.from) - getHead(prop.to))) : 0.001);
        derivatives[prop.to] += dQdH;
      }
    });

    // Convergence check
    let maxResidual = 0;
    junctionIds.forEach(jId => {
      maxResidual = Math.max(maxResidual, Math.abs(residuals[jId]));
    });

    if (maxResidual < 1e-5) break;

    // Apply damped Newton update
    junctionIds.forEach(jId => {
      const dH = residuals[jId] / Math.max(1e-4, derivatives[jId]);
      heads[jId] += Math.max(-5.0, Math.min(5.0, dH * 0.75));
    });
  }

  // Format final solved node results
  const solvedNodes = topology.nodes.map(node => {
    const hglM = node.type === 'reservoir' ? H_res : (node.type === 'tank' ? H_tank : heads[node.id]);
    const pressureM = Math.max(0.0, hglM - node.elevationM);
    const pressureBar = Number(((pressureM * 9810) / 100000).toFixed(2));
    
    let actualDemandLps = (qDem[node.id] || 0) * 1000.0;
    if (node.type === 'tank') {
      const tankFlow = calculateLinkFlow('P-106', heads) * 1000.0;
      actualDemandLps = Number((-tankFlow).toFixed(1)); // negative means filling
    }

    let pressureStatus = 'nominal';
    if (pressureM < 18.0) pressureStatus = 'critical';
    else if (pressureM < 25.0) pressureStatus = 'warning';
    else if (pressureM > 55.0) pressureStatus = 'high';

    return {
      ...node,
      computedHglM: Number(hglM.toFixed(2)),
      computedPressureM: Number(pressureM.toFixed(2)),
      computedPressureBar: pressureBar,
      actualDemandLps: Number(actualDemandLps.toFixed(1)),
      pressureStatus
    };
  });

  // Format final solved link results
  const solvedLinks = topology.links.map(link => {
    const flowM3s = calculateLinkFlow(link.id, heads);
    const flowLps = Number((flowM3s * 1000.0).toFixed(1));
    const hFrom = getHead(link.fromNode);
    const hTo = getHead(link.toNode);
    const headLossM = Number(Math.abs(hFrom - hTo).toFixed(2));

    let velocityMs = 0.0;
    if (link.diameterMm) {
      const areaM2 = Math.PI * Math.pow((link.diameterMm / 1000.0) / 2.0, 2);
      velocityMs = Number((Math.abs(flowM3s) / areaM2).toFixed(2));
    }

    let flowDirection = 'forward';
    if (flowM3s < -1e-4) flowDirection = 'reverse';
    else if (Math.abs(flowM3s) <= 1e-4) flowDirection = 'zero';

    return {
      ...link,
      computedFlowLps: flowLps,
      computedVelocityMs: velocityMs,
      computedHeadLossM: headLossM,
      flowDirection
    };
  });

  return {
    nodes: solvedNodes,
    links: solvedLinks,
    timestamp: new Date().toISOString()
  };
}
`

### File: src/utils/scadaPhysics.js

`jsx
/**
 * SCADA WWTP (Zeriba El Oued) Numerical Physics Engine
 */

export function evaluateScadaAlarms(state) {
  const alarms = [];

  // Pump tripped
  if (!state.pumpIn1) {
    alarms.push({ id: 'ALM_TRIP_INLET', tag: 'P-101', severity: 'CRITICAL', msg: 'Inlet Pump P-101 Tripped: Thermal Overload' });
  }

  // Flow alarms
  if (state.flowM3d >= 35000) {
    alarms.push({ id: 'ALM_HH_FLOW', tag: 'FIT-101', severity: 'CRITICAL', msg: 'Storm Surge Influx: Flow Exceeds Design Capacity' });
  }

  // Pollution Spikes
  if (state.codIn >= 900) {
    alarms.push({ id: 'ALM_HH_COD', tag: 'AIT-102', severity: 'CRITICAL', msg: 'Industrial Pollution Spike Detected: High COD' });
  }

  // Anaerobic Lagoon
  if (state.tempC < 10) {
    alarms.push({ id: 'ALM_L_TEMP', tag: 'TIT-201', severity: 'WARNING', msg: 'Anaerobic Digestion Slowdown: Low Temperature' });
  }
  if (state.methaneLel > 15) {
    alarms.push({ id: 'ALM_H_CH4', tag: 'AIT-201', severity: 'WARNING', msg: 'High Methane Concentration (LEL)' });
  }

  // Facultative
  if (state.doMgL < 2.0) {
    alarms.push({ id: 'ALM_L_DO', tag: 'AIT-301', severity: 'WARNING', msg: 'Low Dissolved Oxygen: Risk of Septicity' });
  }

  // Effluent Quality
  if (state.bodOut >= 30) {
    alarms.push({ id: 'ALM_H_BOD_OUT', tag: 'AIT-401', severity: 'WARNING', msg: 'Effluent BOD5 Limit Exceeded' });
  }

  // Tank Level
  if (state.tankLevel >= 92) {
    alarms.push({ id: 'ALM_H_LEVEL', tag: 'LIT-501', severity: 'WARNING', msg: 'Treated Water Tank High Level' });
  } else if (state.tankLevel <= 25) {
    alarms.push({ id: 'ALM_L_LEVEL', tag: 'LIT-501', severity: 'WARNING', msg: 'Treated Water Tank Low Level' });
  }

  return alarms;
}

export function stepScadaPhysics(state, dtSeconds = 1.0) {
  let {
    flowM3d,
    bodIn,
    codIn,
    tssIn,
    tempC,
    methaneLel,
    doMgL,
    ph,
    bodOut,
    turbidityOut,
    tankLevel,
    pumpIn1,
    pumpIn2,
    pumpOut1,
    pumpOut2,
    pumpOut3,
    generatorFuel
  } = state;

  // Relax towards nominal if not actively spiked
  const diurnalTargetFlow = 24000 + Math.sin(Date.now() / 10000) * 3000;
  flowM3d += (diurnalTargetFlow - flowM3d) * 0.05 * dtSeconds;
  
  if (bodIn > 250) bodIn -= 2.0 * dtSeconds;
  if (codIn > 500) codIn -= 4.0 * dtSeconds;
  if (tssIn > 300) tssIn -= 2.0 * dtSeconds;

  // Biology simulation
  const removalEfficiency = tempC > 15 && doMgL > 3.0 ? 0.95 : 0.85;
  bodOut = bodIn * (1 - removalEfficiency);
  
  // Fuel usage if grid disconnected
  if (!state.gridPower && generatorFuel > 0) {
    generatorFuel -= 0.1 * dtSeconds;
  }

  const nextState = {
    ...state,
    flowM3d,
    bodIn,
    codIn,
    tssIn,
    tempC,
    methaneLel,
    doMgL,
    ph,
    bodOut,
    turbidityOut,
    tankLevel,
    generatorFuel: Math.max(0, generatorFuel)
  };

  nextState.activeAlarms = evaluateScadaAlarms(nextState);

  return nextState;
}
`

### File: src/components/simulator/epanet/EpanetSimulator.jsx

`jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, Play, ChevronDown, ChevronUp, Network, GitFork, Gauge, Zap } from 'lucide-react';
import { useEpanetEngine } from '../../../hooks/useEpanetEngine';
import { SectionHeading } from '../../common/SectionHeading';
import { EpanetNetworkCanvas } from './EpanetNetworkCanvas';
import { EpanetNodeInspector } from './EpanetNodeInspector';
import { EpanetControls } from './EpanetControls';

export function EpanetSimulator() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    scenarios,
    currentScenario,
    solvedNetwork,
    selectedNode,
    selectedLink,
    selectedElementId,
    pumpActive,
    burstPipes,
    setScenario,
    selectElement,
    setPipeThrottle,
    toggleBoosterPump,
    togglePipeBurst,
    resetNetwork
  } = useEpanetEngine();

  return (
    <section id="epanet-sim" className="transition-all duration-300 border-b border-border-slate/80 bg-obsidian py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('EPANET.tag', 'INTERACTIVE_SIMULATOR_02')}
          title={t('EPANET.title', 'EPANET 2.2 Looped Hydraulic Network Solver')}
          description={t('EPANET.desc', 'Interactive municipal water distribution network executing real-time Hazen-Williams head loss, nodal mass balance, and Newton-Raphson gradient iterations. Test operational scenarios, throttle valve positions, and inject pipe bursts.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 rounded-xl border border-border-slate/80 bg-surface-sunken/90 backdrop-blur-sm p-6 sm:p-8 shadow-xl hover:border-cyan-500/40 transition-all duration-300">
            {/* Top specs & badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-slate/60">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-500/40 font-mono">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {t('EPANET.status_ready', 'HYDRAULIC ENGINE COMPILED')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-500/30">
                  <Network className="w-3.5 h-3.5 text-blue-400" />
                  Looped Municipal Grid (8 Nodes • 11 Links)
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                  Newton-Raphson Solver
                </span>
                <span className="flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-blue-400" />
                  Hazen-Williams Head Loss
                </span>
              </div>
            </div>

            {/* 3 Capabilities Preview Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-obsidian border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 mb-1">
                  <Gauge className="w-4 h-4" />
                  <span>01. Nodal Pressure Gradients</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Real-time mass balance calculation with color-coded hydraulic pressure heads from elevated storage tanks down to consumer taps.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-obsidian border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 mb-1">
                  <Zap className="w-4 h-4" />
                  <span>02. Valve & Burst Injections</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interactive node inspector allowing real-time pipe throttling, valve closure, pressure relief, and pipe rupture simulations.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-obsidian border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>03. Operational Scenarios</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  One-click scenario testing: Base Demand, Morning Peak, Booster Pump Activation, and High-Flow Fire Suppression.
                </p>
              </div>
            </div>

            {/* Launch Call To Action */}
            <div className="mt-8 pt-6 border-t border-border-slate/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-400">
                {t('EPANET.launch_desc', 'Launch the interactive network canvas, inspect nodal pressures, throttle valves, and run real-time scenarios.')}
              </p>
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-cobalt-600 hover:bg-cobalt-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-cobalt-950/40 hover:shadow-cobalt-500/20 group"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{t('EPANET.launch_btn', 'Launch Interactive EPANET Solver')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED SIMULATOR VIEW */}
        {isExpanded && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500 mt-6">
            {/* Top Collapse Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('EPANET.collapse_btn', 'Collapse Simulator')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            {/* Controls Strip */}
            <EpanetControls
              scenarios={scenarios}
              currentScenario={currentScenario}
              onSelectScenario={setScenario}
              pumpActive={pumpActive}
              onTogglePump={toggleBoosterPump}
              onResetNetwork={resetNetwork}
            />

            {/* Main Network Canvas + Inspector Split */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <EpanetNetworkCanvas
                  solvedNetwork={solvedNetwork}
                  selectedElementId={selectedElementId}
                  onSelectElement={selectElement}
                />
              </div>
              <div className="lg:col-span-1">
                <EpanetNodeInspector
                  selectedNode={selectedNode}
                  selectedLink={selectedLink}
                  onSetThrottle={setPipeThrottle}
                  onToggleBurst={togglePipeBurst}
                  burstPipes={burstPipes}
                />
              </div>
            </div>

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('EPANET.collapse_btn', 'Collapse Simulator')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
`

### File: src/components/simulator/epanet/EpanetNetworkCanvas.jsx

`jsx
import React from 'react';

export function EpanetNetworkCanvas({ solvedNetwork, selectedElementId, onSelectElement }) {
  const { nodes, links } = solvedNetwork;

  const nodeMap = {};
  nodes.forEach(n => { nodeMap[n.id] = n; });

  const getPressureColor = (pressureM) => {
    if (pressureM < 18.0) return '#EF4444'; // Red (Danger / Low)
    if (pressureM < 25.0) return '#F59E0B'; // Amber (Warning)
    if (pressureM > 52.0) return '#3B82F6'; // Blue (High)
    return '#10B981'; // Emerald (Nominal 25-52m)
  };

  const getVelocityColor = (velocityMs, isBurst) => {
    if (isBurst) return '#EF4444';
    if (velocityMs > 2.0) return '#F59E0B';
    if (velocityMs < 0.3) return '#64748B';
    return '#06B6D4'; // Cyan (Ideal 0.3 - 2.0 m/s)
  };

  return (
    <div className="w-full bg-surface-sunken border border-border-slate rounded-lg p-4 overflow-x-auto">
      <div className="min-w-[720px] relative">
        <svg viewBox="0 0 740 500" className="w-full h-auto select-none">
          {/* Background Grid */}
          <pattern id="epanetGrid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#1E293B" strokeWidth="0.5" />
          </pattern>
          <rect width="740" height="500" fill="url(#epanetGrid)" />

          {/* PIPE LINKS */}
          {links.map((link) => {
            const from = nodeMap[link.fromNode];
            const to = nodeMap[link.toNode];
            if (!from || !to) return null;

            const isSelected = selectedElementId === link.id;
            const strokeColor = getVelocityColor(link.computedVelocityMs, link.isBurst);
            const isPump = link.type === 'pump';

            return (
              <g
                key={link.id}
                onClick={() => onSelectElement(link.id)}
                className="cursor-pointer group"
              >
                {/* Hit area */}
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="transparent"
                  strokeWidth="20"
                />

                {/* Base Pipe Line */}
                <line
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={isSelected ? '#FFFFFF' : strokeColor}
                  strokeWidth={isSelected ? 6 : (isPump ? 5 : 4)}
                  strokeLinecap="round"
                  strokeDasharray={isPump ? '6 4' : (link.isBurst ? '4 4' : 'none')}
                  className="transition-all duration-200"
                />

                {/* Animated Flow Dashes */}
                {Math.abs(link.computedFlowLps) > 1.0 && !link.isBurst && (
                  <line
                    x1={link.flowDirection === 'reverse' ? to.x : from.x}
                    y1={link.flowDirection === 'reverse' ? to.y : from.y}
                    x2={link.flowDirection === 'reverse' ? from.x : to.x}
                    y2={link.flowDirection === 'reverse' ? from.y : to.y}
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeDasharray="4 8"
                    className="animate-[dash_2s_linear_infinite]"
                  />
                )}

                {/* Pipe Flow & Label Tag */}
                <g transform={`translate(${(from.x + to.x) / 2}, ${(from.y + to.y) / 2})`}>
                  <rect
                    x="-32"
                    y="-11"
                    width="64"
                    height="20"
                    rx="3"
                    fill="#0F172A"
                    stroke={isSelected ? '#38BDF8' : '#334155'}
                    strokeWidth="1"
                  />
                  <text
                    x="0"
                    y="3"
                    fill={isSelected ? '#38BDF8' : '#94A3B8'}
                    fontSize="9"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    {link.computedFlowLps} L/s
                  </text>
                </g>
              </g>
            );
          })}

          {/* NODES */}
          {nodes.map((node) => {
            const isSelected = selectedElementId === node.id;
            const isReservoir = node.type === 'reservoir';
            const isTank = node.type === 'tank';
            const pressureColor = isReservoir ? '#2563EB' : (isTank ? '#06B6D4' : getPressureColor(node.computedPressureM));

            return (
              <g
                key={node.id}
                transform={`translate(${node.x}, ${node.y})`}
                onClick={() => onSelectElement(node.id)}
                className="cursor-pointer group"
              >
                {/* Selection ring */}
                {isSelected && (
                  <circle r="24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 3" />
                )}

                {/* Node Shape */}
                {isReservoir ? (
                  <g>
                    <rect x="-18" y="-14" width="36" height="28" rx="4" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" />
                    <text x="0" y="4" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      RES
                    </text>
                  </g>
                ) : isTank ? (
                  <g>
                    <polygon points="-16,-12 16,-12 12,14 -12,14" fill="#0E7490" stroke="#06B6D4" strokeWidth="2" />
                    <text x="0" y="3" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      TANK
                    </text>
                  </g>
                ) : (
                  <g>
                    <circle r="14" fill="#0F172A" stroke={pressureColor} strokeWidth="2.5" />
                    <circle r="6" fill={pressureColor} />
                  </g>
                )}

                {/* Node Label & Pressure */}
                <text
                  x="0"
                  y="-20"
                  fill="#F8FAFC"
                  fontSize="11"
                  fontWeight="bold"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {node.id}
                </text>

                {!isReservoir && !isTank && (
                  <text
                    x="0"
                    y="27"
                    fill={pressureColor}
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    {node.computedPressureBar} bar
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
`

### File: src/components/simulator/epanet/EpanetControls.jsx

`jsx
import React from 'react';
import { Play, RotateCcw, Activity, ShieldAlert, Cpu } from 'lucide-react';

export function EpanetControls({
  scenarios,
  currentScenario,
  onSelectScenario,
  pumpActive,
  onTogglePump,
  onResetNetwork
}) {
  return (
    <div className="bg-surface-sunken border border-border-slate rounded-lg p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border-slate">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            Hydraulic Operational Scenarios
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePump}
            className={`px-3 py-1.5 rounded font-mono text-xs font-bold border transition-colors ${
              pumpActive
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40 hover:bg-emerald-900/40'
                : 'bg-red-950/40 text-red-400 border-red-500/40 hover:bg-red-900/40'
            }`}
          >
            PMP-1: {pumpActive ? 'ONLINE' : 'STOPPED'}
          </button>

          <button
            onClick={onResetNetwork}
            className="p-1.5 rounded bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate transition-colors"
            title="Reset Network"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scenario Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {scenarios.map((sc) => {
          const isActive = currentScenario.id === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => onSelectScenario(sc.id)}
              className={`p-3 rounded text-left border transition-all ${
                isActive
                  ? 'bg-cobalt-600/20 border-cobalt-500 text-white shadow-sm'
                  : 'bg-elevated-slate/40 border-border-slate/70 text-slate-300 hover:bg-elevated-slate hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono text-xs font-bold">{sc.name}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-cobalt-400 animate-pulse" />}
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                {sc.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
`

### File: src/components/simulator/epanet/EpanetNodeInspector.jsx

`jsx
import React from 'react';
import { Sliders, AlertTriangle, Droplet, Activity, Info } from 'lucide-react';

export function EpanetNodeInspector({
  selectedNode,
  selectedLink,
  onSetThrottle,
  onToggleBurst,
  burstPipes = []
}) {
  if (selectedNode) {
    const isCritical = selectedNode.pressureStatus === 'critical';
    const isWarning = selectedNode.pressureStatus === 'warning';

    return (
      <div className="bg-surface-sunken border border-border-slate rounded-lg p-5">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-slate">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cobalt-500" />
            <h4 className="font-mono text-sm font-bold text-white uppercase">
              Node Inspector: {selectedNode.id}
            </h4>
          </div>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-elevated-slate text-cobalt-300 uppercase">
            {selectedNode.type}
          </span>
        </div>

        <p className="text-xs text-slate-300 mb-4">{selectedNode.description}</p>

        <div className="grid grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-2.5 rounded bg-elevated-slate/60 border border-border-slate">
            <span className="text-[10px] text-slate-400 uppercase">Elevation (Z)</span>
            <div className="text-sm font-bold text-white mt-0.5">{selectedNode.elevationM} m</div>
          </div>
          <div className="p-2.5 rounded bg-elevated-slate/60 border border-border-slate">
            <span className="text-[10px] text-slate-400 uppercase">Actual Demand</span>
            <div className="text-sm font-bold text-white mt-0.5">{selectedNode.actualDemandLps} L/s</div>
          </div>
          <div className="p-2.5 rounded bg-elevated-slate/60 border border-border-slate">
            <span className="text-[10px] text-slate-400 uppercase">Total Head (HGL)</span>
            <div className="text-sm font-bold text-cyan-400 mt-0.5">{selectedNode.computedHglM} m</div>
          </div>
          <div
            className={`p-2.5 rounded border ${
              isCritical
                ? 'bg-red-950/40 border-red-500 text-red-300'
                : isWarning
                ? 'bg-amber-950/40 border-amber-500 text-amber-300'
                : 'bg-emerald-950/20 border-emerald-500/40 text-emerald-400'
            }`}
          >
            <span className="text-[10px] uppercase font-semibold">Residual Pressure</span>
            <div className="text-sm font-bold mt-0.5">
              {selectedNode.computedPressureBar} bar ({selectedNode.computedPressureM} mH₂O)
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedLink) {
    const isBurst = burstPipes.includes(selectedLink.id);

    return (
      <div className="bg-surface-sunken border border-border-slate rounded-lg p-5">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-slate">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
            <h4 className="font-mono text-sm font-bold text-white uppercase">
              Link Inspector: {selectedLink.id}
            </h4>
          </div>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-elevated-slate text-cyan-300 uppercase">
            {selectedLink.type}
          </span>
        </div>

        <p className="text-xs text-slate-300 mb-4">{selectedLink.description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs mb-5">
          <div className="p-2 rounded bg-elevated-slate/60 border border-border-slate">
            <span className="text-[10px] text-slate-400 uppercase">Flow Rate</span>
            <div className="text-sm font-bold text-white mt-0.5">{selectedLink.computedFlowLps} L/s</div>
          </div>
          <div className="p-2 rounded bg-elevated-slate/60 border border-border-slate">
            <span className="text-[10px] text-slate-400 uppercase">Velocity</span>
            <div className="text-sm font-bold text-cyan-400 mt-0.5">{selectedLink.computedVelocityMs} m/s</div>
          </div>
          <div className="p-2 rounded bg-elevated-slate/60 border border-border-slate">
            <span className="text-[10px] text-slate-400 uppercase">Head Loss (hf)</span>
            <div className="text-sm font-bold text-amber-400 mt-0.5">{selectedLink.computedHeadLossM} m</div>
          </div>
          {selectedLink.diameterMm && (
            <div className="p-2 rounded bg-elevated-slate/60 border border-border-slate">
              <span className="text-[10px] text-slate-400 uppercase">Diameter</span>
              <div className="text-xs font-bold text-white mt-0.5">Ø {selectedLink.diameterMm} mm</div>
            </div>
          )}
          {selectedLink.lengthM && (
            <div className="p-2 rounded bg-elevated-slate/60 border border-border-slate">
              <span className="text-[10px] text-slate-400 uppercase">Length</span>
              <div className="text-xs font-bold text-white mt-0.5">{selectedLink.lengthM} m</div>
            </div>
          )}
          {selectedLink.roughnessC && (
            <div className="p-2 rounded bg-elevated-slate/60 border border-border-slate">
              <span className="text-[10px] text-slate-400 uppercase">Roughness (C)</span>
              <div className="text-xs font-bold text-white mt-0.5">{selectedLink.roughnessC}</div>
            </div>
          )}
        </div>

        {/* Interactive Link Controls */}
        {selectedLink.type === 'pipe' && (
          <div className="pt-4 border-t border-border-slate space-y-4">
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                <span>Valve Throttling (TCV)</span>
                <span className="text-cobalt-400 font-bold">{selectedLink.throttlePct || 100}% Open</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={selectedLink.throttlePct !== undefined ? selectedLink.throttlePct : 100}
                onChange={(e) => onSetThrottle(selectedLink.id, e.target.value)}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cobalt-500"
              />
            </div>

            <button
              onClick={() => onToggleBurst(selectedLink.id)}
              className={`w-full py-2 px-3 rounded font-mono text-xs font-bold flex items-center justify-center gap-2 border transition-colors ${
                isBurst
                  ? 'bg-red-950 text-red-300 border-red-500 hover:bg-red-900'
                  : 'bg-elevated-slate text-slate-300 border-border-slate hover:bg-slate-700'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{isBurst ? 'Repair Burst Rupture' : 'Simulate Rupture / Leak on Pipe'}</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-surface-sunken border border-border-slate rounded-lg p-5 flex flex-col items-center justify-center text-slate-400 text-center py-12">
      <Info className="w-8 h-8 text-slate-500 mb-2" />
      <span className="font-mono text-xs">Click any Node or Pipe in the network to inspect live hydraulics.</span>
    </div>
  );
}
`

### File: src/components/simulator/scada/ScadaPlantSimulator.jsx

`jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Activity, Play, ChevronDown, ChevronUp, Droplets, Sliders, ShieldCheck, Gauge } from 'lucide-react';
import { useScadaEngine } from '../../../hooks/useScadaEngine';
import { SectionHeading } from '../../common/SectionHeading';
import { ScadaFlowDiagram } from './ScadaFlowDiagram';
import { ScadaControlDesk } from './ScadaControlDesk';
import { ScadaTelemetryPanel } from './ScadaTelemetryPanel';
import { ScadaAlarmBanner } from './ScadaAlarmBanner';

export function ScadaPlantSimulator() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    state,
    toggleSimulation,
    setControlMode,
    togglePumpIn,
    togglePumpOut,
    setScreenAuto,
    triggerStormSurge,
    triggerPollutionSpike,
    simulatePumpFailure,
    emergencyStop,
    resetSimulation
  } = useScadaEngine();

  return (
    <section id="scada-plant" className="transition-all duration-300 border-b border-border-slate/80 bg-gradient-to-b from-obsidian via-surface-sunken to-obsidian py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          tag={t('SCADA.tag', 'INTERACTIVE_SIMULATOR_01')}
          title={t('SCADA.title', 'SCADA Smart Natural Lagoon WWTP Simulator')}
          description={t('SCADA.desc', 'Live continuous cyber-physical process simulation modeled on the Zeriba El Oued municipal wastewater treatment plant. Features real-time diurnal flow modeling, anaerobic digestion, and facultative algal photosynthesis.')}
          isCollapsible={true}
          isExpanded={isExpanded}
          onClick={() => setIsExpanded(!isExpanded)}
        />

        {/* COMPACT RICH PREVIEW (Visible when not expanded) */}
        {!isExpanded && (
          <div className="mt-6 rounded-xl border border-border-slate/80 bg-obsidian/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl hover:border-emerald-500/40 transition-all duration-300">
            {/* Top specs & badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-slate/60">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {t('SCADA.status_ready', 'CYBER-PHYSICAL TWIN READY')}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-500/30">
                  <Droplets className="w-3.5 h-3.5 text-blue-400" />
                  Zeriba El Oued Lagoon WWTP (24,000 m³/day)
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  PID & Manual Modes
                </span>
                <span className="flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                  Real-time Telemetry
                </span>
              </div>
            </div>

            {/* 3 Capabilities Preview Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-surface-sunken border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 mb-1">
                  <Activity className="w-4 h-4" />
                  <span>01. Biological Treatment Train</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interactive multi-stage process from grit removal and anaerobic decomposition to facultative lagoons and chlorination.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-surface-sunken border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 mb-1">
                  <Sliders className="w-4 h-4" />
                  <span>02. Dynamic Process Controls</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Real-time pump speed throttling, storm surge triggers, simulated pollution spikes, and emergency stop interlocks.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-surface-sunken border border-border-slate/60">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>03. Live SCADA Alarms</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Threshold monitoring with automated visual telemetry, alarm banner logs, and biochemical oxygen demand (BOD) tracking.
                </p>
              </div>
            </div>

            {/* Launch Call To Action */}
            <div className="mt-8 pt-6 border-t border-border-slate/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-400">
                {t('SCADA.launch_desc', 'Launch the full interactive SVG diagram, adjust live pumps, trigger surges, and monitor telemetry.')}
              </p>
              <button
                onClick={() => setIsExpanded(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 group"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{t('SCADA.launch_btn', 'Launch Interactive SCADA Simulator')}</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </div>
          </div>
        )}

        {/* EXPANDED SIMULATOR VIEW */}
        {isExpanded && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500 mt-6">
            {/* Top Collapse Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-200 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('SCADA.collapse_btn', 'Collapse Simulator')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            {/* SVG Process Train */}
            <ScadaFlowDiagram state={state} />

            {/* Control Desk */}
            <ScadaControlDesk
              state={state}
              toggleSimulation={toggleSimulation}
              setControlMode={setControlMode}
              togglePumpIn={togglePumpIn}
              togglePumpOut={togglePumpOut}
              setScreenAuto={setScreenAuto}
              triggerStormSurge={triggerStormSurge}
              triggerPollutionSpike={triggerPollutionSpike}
              simulatePumpFailure={simulatePumpFailure}
              emergencyStop={emergencyStop}
              resetSimulation={resetSimulation}
            />

            {/* Bottom Grid: Telemetry & Alarms */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ScadaTelemetryPanel state={state} />
              <ScadaAlarmBanner activeAlarms={state.activeAlarms} eventLog={state.eventLog} />
            </div>

            {/* Bottom Collapse Button */}
            <div className="pt-4 flex justify-center">
              <button
                onClick={() => setIsExpanded(false)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate text-xs font-mono transition-colors"
              >
                <span>{t('SCADA.collapse_btn', 'Collapse Simulator')}</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
`

### File: src/components/simulator/scada/ScadaFlowDiagram.jsx

`jsx
import React from 'react';

export function ScadaFlowDiagram({ state }) {
  const {
    flowM3d,
    bodIn,
    codIn,
    bodOut,
    tempC,
    tankLevel,
    pumpIn1,
    pumpIn2,
    pumpOut1,
    pumpOut2
  } = state;

  const tankWaterHeight = (tankLevel / 100.0) * 80;
  const tankWaterY = 170 - tankWaterHeight;

  return (
    <div className="w-full bg-surface-sunken border border-border-slate rounded-lg p-4 overflow-x-auto">
      <div className="min-w-[760px] relative">
        <svg viewBox="0 0 800 230" className="w-full h-auto select-none">
          <defs>
            <linearGradient id="waterLevelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="sludgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#92400E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#451A03" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Background grid */}
          <pattern id="scadaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="0.5" />
          </pattern>
          <rect width="800" height="230" fill="url(#scadaGrid)" />

          {/* MAIN PIPELINES */}
          <path
            d="M 20 120 L 120 120 L 140 120 L 250 120 L 270 120 L 380 120 L 400 120 L 510 120 L 530 120 L 640 120"
            fill="none"
            stroke="#334155"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {state.isRunning && flowM3d > 5 && (
            <path
              d="M 20 120 L 120 120 L 140 120 L 250 120 L 270 120 L 380 120 L 400 120 L 510 120 L 530 120 L 640 120"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="4"
              strokeDasharray="6 6"
              className="animate-[dash_1.5s_linear_infinite]"
            />
          )}

          {/* ================= STAGE 1: INTAKE & LIFT ================= */}
          <g transform="translate(20, 70)">
            <rect x="0" y="20" width="80" height="70" rx="4" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <text x="40" y="38" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              INTAKE PUMP
            </text>
            <text x="40" y="58" fill="#F8FAFC" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              {Number(flowM3d).toFixed(0)} m³/d
            </text>
            <circle cx="25" cy="74" r="6" fill={pumpIn1 ? '#059669' : '#334155'} />
            <circle cx="55" cy="74" r="6" fill={pumpIn2 ? '#059669' : '#334155'} />
          </g>

          {/* ================= STAGE 2: PRETREATMENT ================= */}
          <g transform="translate(130, 60)">
            <rect x="0" y="10" width="90" height="90" rx="4" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <text x="45" y="28" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              PRETREAT
            </text>
            <line x1="30" y1="35" x2="30" y2="70" stroke="#64748B" strokeWidth="4" />
            <line x1="45" y1="35" x2="45" y2="70" stroke="#64748B" strokeWidth="4" />
            <line x1="60" y1="35" x2="60" y2="70" stroke="#64748B" strokeWidth="4" />
            <text x="45" y="90" fill="#F8FAFC" fontSize="9" textAnchor="middle" fontFamily="monospace">
              COD: {Number(codIn).toFixed(0)}
            </text>
          </g>

          {/* ================= STAGE 3: ANAEROBIC LAGOON ================= */}
          <g transform="translate(250, 60)">
            <rect x="0" y="10" width="90" height="90" rx="10" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <rect x="0" y="60" width="90" height="40" rx="10" fill="url(#sludgeGrad)" />
            <text x="45" y="28" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              ANAEROBIC
            </text>
            <text x="45" y="92" fill="#E2E8F0" fontSize="9" textAnchor="middle" fontFamily="monospace">
              Temp: {Number(tempC).toFixed(1)}°C
            </text>
          </g>

          {/* ================= STAGE 4: FACULTATIVE LAGOON ================= */}
          <g transform="translate(370, 60)">
            <rect x="0" y="10" width="90" height="90" rx="10" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <circle cx="45" cy="50" r="15" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="2 2" />
            <text x="45" y="28" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              FACULTATIVE
            </text>
            <text x="45" y="90" fill="#F8FAFC" fontSize="9" textAnchor="middle" fontFamily="monospace">
              DO: {state.doMgL.toFixed(1)} mg/L
            </text>
          </g>

          {/* ================= STAGE 5: MATURATION LAGOON ================= */}
          <g transform="translate(490, 60)">
            <rect x="0" y="10" width="90" height="90" rx="10" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <text x="45" y="28" fill="#93C5FD" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              MATURATION
            </text>
            <text x="45" y="92" fill="#F8FAFC" fontSize="9" textAnchor="middle" fontFamily="monospace">
              UV STERILE
            </text>
          </g>

          {/* ================= STAGE 6: FINISHED & DISTRIBUTION ================= */}
          <g transform="translate(610, 45)">
            <rect x="0" y="15" width="100" height="110" rx="4" fill="#0F172A" stroke="#3882F6" strokeWidth="1.5" />
            <rect
              x="2"
              y={tankWaterY}
              width="96"
              height={tankWaterHeight}
              rx="2"
              fill="url(#waterLevelGrad)"
              className="transition-all duration-300"
            />
            <text x="50" y="32" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              TREATED EFF.
            </text>
            <text x="50" y="70" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              {Number(tankLevel).toFixed(1)}%
            </text>

            <g transform="translate(110, 20)">
              <circle cx="20" cy="20" r="14" fill={pumpOut1 ? '#059669' : '#334155'} stroke="#10B981" strokeWidth="1.5" />
              <text x="20" y="24" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">P-501</text>
              <circle cx="20" cy="60" r="14" fill={pumpOut2 ? '#059669' : '#334155'} stroke="#10B981" strokeWidth="1.5" />
              <text x="20" y="64" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">P-502</text>
            </g>
          </g>

          {/* Compliance Tag */}
          <g transform="translate(630, 195)">
            <rect x="0" y="0" width="150" height="24" rx="3" fill="#020617" stroke="#334155" />
            <text x="75" y="16" fill={bodOut > 25 ? "#EF4444" : "#10B981"} fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
              EFF BOD5: {Number(bodOut).toFixed(1)} mg/L
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
`

### File: src/components/simulator/scada/ScadaControlDesk.jsx

`jsx
import React from 'react';
import { Play, Pause, AlertOctagon, RotateCcw, Zap, Droplets, Sliders, Settings } from 'lucide-react';

export function ScadaControlDesk({
  state,
  toggleSimulation,
  setControlMode,
  togglePumpIn,
  togglePumpOut,
  setScreenAuto,
  triggerStormSurge,
  triggerPollutionSpike,
  simulatePumpFailure,
  emergencyStop,
  resetSimulation
}) {
  const isAuto = state.controlMode === 'AUTO';

  return (
    <div className="bg-surface-sunken border border-border-slate rounded-lg p-5 space-y-6">
      {/* Top Header & Master Mode Switch */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-slate">
        <div className="flex items-center gap-2">
          <Sliders className="w-4 h-4 text-cobalt-400" />
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            SCADA PLC Operator Interface
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Master Run/Pause */}
          <button
            onClick={toggleSimulation}
            className={`px-3 py-1.5 rounded font-mono text-xs font-bold flex items-center gap-1.5 border transition-colors ${
              state.isRunning
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40 hover:bg-emerald-900/40'
                : 'bg-amber-950/40 text-amber-400 border-amber-500/40 hover:bg-amber-900/40'
            }`}
          >
            {state.isRunning ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            <span>{state.isRunning ? 'PLC ACTIVE' : 'PAUSED'}</span>
          </button>

          {/* Mode Switch */}
          <div className="flex rounded border border-border-slate bg-obsidian p-0.5">
            <button
              onClick={() => setControlMode('AUTO')}
              className={`px-3 py-1 rounded font-mono text-xs font-semibold transition-colors ${
                isAuto ? 'bg-cobalt-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              NORMAL (Diurnal Flow)
            </button>
            <button
              onClick={() => setControlMode('MANUAL')}
              className={`px-3 py-1 rounded font-mono text-xs font-semibold transition-colors ${
                !isAuto ? 'bg-cobalt-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              MANUAL OVERRIDE
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Screen Cleaning Mechanism */}
        <div className="p-3 rounded bg-elevated-slate/60 border border-border-slate/80 flex flex-col justify-between">
          <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-2">
            <span>Screen Cleaning (SC-201)</span>
          </div>
          <button
            disabled={isAuto}
            onClick={() => setScreenAuto(!state.screenAuto)}
            className={`w-full py-1.5 rounded font-mono text-xs font-bold transition-colors border ${
              state.screenAuto
                ? 'bg-emerald-950/30 text-emerald-400 border-emerald-500/30'
                : 'bg-slate-800 text-slate-300 border-slate-600'
            } disabled:opacity-50`}
          >
            {state.screenAuto ? 'AUTO (15cm ΔH Threshold)' : 'MANUAL'}
          </button>
        </div>

        {/* Grid Power Status */}
        <div className="p-3 rounded bg-elevated-slate/60 border border-border-slate/80">
          <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-2">
            <span>Grid Power Status</span>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${state.gridPower ? 'bg-emerald-400' : 'bg-red-500'}`} />
            <span className="font-mono text-xs text-white">
              {state.gridPower ? 'CONNECTED (380V)' : 'DISCONNECTED'}
            </span>
          </div>
        </div>

        {/* Generator Fuel Reserve */}
        <div className="p-3 rounded bg-elevated-slate/60 border border-border-slate/80">
          <div className="flex justify-between text-[11px] font-mono text-slate-300 mb-1">
            <span>Generator Fuel Reserve</span>
            <span className="text-amber-400 font-bold tabular-nums">{state.generatorFuel}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-700 rounded-lg overflow-hidden mt-3">
             <div className="h-full bg-amber-500" style={{ width: `${state.generatorFuel}%` }}></div>
          </div>
        </div>
      </div>

      {/* Pumps Toggle Strip & Fault Injection Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <div className="flex flex-col gap-2">
            {/* Inlet Lift Pumps */}
            <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase w-24">Inlet Lift:</span>
            {[1, 2].map((num) => {
                const active = state[`pumpIn${num}`];
                return (
                <button
                    key={num}
                    disabled={isAuto}
                    onClick={() => togglePumpIn(num)}
                    className={`px-3 py-1 rounded font-mono text-xs font-bold border transition-colors ${
                    active
                        ? 'bg-emerald-900/40 text-emerald-400 border-emerald-500/50'
                        : 'bg-elevated-slate text-slate-400 border-border-slate'
                    } disabled:opacity-60`}
                >
                    P-10{num}: {active ? 'ON' : 'OFF'}
                </button>
                );
            })}
            </div>

            {/* Effluent Distribution Pumps */}
            <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400 uppercase w-24">Dist. Pumps:</span>
            {[1, 2, 3].map((num) => {
                const active = state[`pumpOut${num}`];
                return (
                <button
                    key={num}
                    disabled={isAuto}
                    onClick={() => togglePumpOut(num)}
                    className={`px-3 py-1 rounded font-mono text-xs font-bold border transition-colors ${
                    active
                        ? 'bg-emerald-900/40 text-emerald-400 border-emerald-500/50'
                        : 'bg-elevated-slate text-slate-400 border-border-slate'
                    } disabled:opacity-60`}
                >
                    P-50{num}: {active ? 'ON' : 'OFF'}
                </button>
                );
            })}
            </div>
        </div>

        {/* Action Triggers */}
        <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
          <button
            onClick={triggerStormSurge}
            className="px-3 py-1.5 rounded bg-blue-950/40 hover:bg-blue-900/60 text-blue-300 border border-blue-500/40 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Droplets className="w-3.5 h-3.5" />
            <span>Inject Storm Surge</span>
          </button>

          <button
            onClick={triggerPollutionSpike}
            className="px-3 py-1.5 rounded bg-amber-950/40 hover:bg-amber-900/60 text-amber-300 border border-amber-500/40 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Inject Ind. Pollution</span>
          </button>

          <button
            onClick={simulatePumpFailure}
            className="px-3 py-1.5 rounded bg-orange-950/40 hover:bg-orange-900/60 text-orange-400 border border-orange-500/40 text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Simulate Pump Failure</span>
          </button>

          <button
            onClick={emergencyStop}
            className="px-3 py-1.5 rounded bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-500 font-mono text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>E-STOP</span>
          </button>

          <button
            onClick={resetSimulation}
            className="p-1.5 rounded bg-elevated-slate hover:bg-slate-700 text-slate-300 border border-border-slate transition-colors"
            title="Reset Simulator"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
`

### File: src/components/simulator/scada/ScadaTelemetryPanel.jsx

`jsx
import React from 'react';
import { SENSOR_TAGS } from '../../../data/scadaData';
import { Gauge } from 'lucide-react';

export function ScadaTelemetryPanel({ state }) {
  const sensorMap = [
    { tag: 'FIT-101', val: state.flowM3d },
    { tag: 'AIT-101', val: state.bodIn },
    { tag: 'AIT-102', val: state.codIn },
    { tag: 'AIT-103', val: state.tssIn },
    { tag: 'TIT-201', val: state.tempC },
    { tag: 'AIT-201', val: state.methaneLel },
    { tag: 'AIT-301', val: state.doMgL },
    { tag: 'AIT-302', val: state.ph },
    { tag: 'AIT-401', val: state.bodOut },
    { tag: 'AIT-402', val: state.turbidityOut },
    { tag: 'LIT-501', val: state.tankLevel }
  ];

  return (
    <div className="bg-surface-sunken border border-border-slate rounded-lg p-5">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-slate">
        <div className="flex items-center gap-2">
          <Gauge className="w-4 h-4 text-cyan-400" />
          <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            ISA-5.1 Sensor Telemetry Matrix
          </h4>
        </div>
        <span className="font-mono text-[11px] text-slate-400">11 Channels Active</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        {sensorMap.map(({ tag, val }) => {
          const config = SENSOR_TAGS[tag];
          if (!config) return null;

          let statusColor = "text-emerald-400 border-emerald-500/30 bg-emerald-950/20";
          let statusText = "NOMINAL";

          if (config.critHigh && val >= config.critHigh) {
            statusColor = "text-red-400 border-red-500/40 bg-red-950/30";
            statusText = "CRIT HIGH";
          } else if (config.critLow && val <= config.critLow) {
            statusColor = "text-red-400 border-red-500/40 bg-red-950/30";
            statusText = "CRIT LOW";
          } else if (config.warnHigh && val >= config.warnHigh) {
            statusColor = "text-amber-400 border-amber-500/30 bg-amber-950/20";
            statusText = "WARN HIGH";
          } else if (config.warnLow && val <= config.warnLow) {
            statusColor = "text-amber-400 border-amber-500/30 bg-amber-950/20";
            statusText = "WARN LOW";
          }

          return (
            <div
              key={tag}
              className={`p-3 rounded border font-mono ${statusColor} transition-colors`}
            >
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-bold text-slate-300">{tag}</span>
                <span className="text-[10px] font-semibold">{statusText}</span>
              </div>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-lg font-bold text-white tabular-nums">{Number(val).toFixed(1)}</span>
                <span className="text-xs text-slate-400 font-sans">{config.unit}</span>
              </div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5 font-sans">
                {config.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`

### File: src/components/simulator/scada/ScadaAlarmBanner.jsx

`jsx
import React from 'react';
import { AlertTriangle, ShieldCheck, Terminal, Clock } from 'lucide-react';

export function ScadaAlarmBanner({ activeAlarms = [], eventLog = [] }) {
  const hasAlarms = activeAlarms.length > 0;

  return (
    <div className="space-y-4">
      {/* Active Alarm Banner */}
      {hasAlarms ? (
        <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/60 text-red-200">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-red-400 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-red-400 animate-bounce" />
            <span>ACTIVE ISA-18.2 PROCESS ALARMS ({activeAlarms.length})</span>
          </div>
          <div className="space-y-1.5 font-mono text-xs">
            {activeAlarms.map((alm) => (
              <div key={alm.id} className="flex items-center justify-between bg-red-900/30 px-2.5 py-1 rounded border border-red-500/30">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-red-600 text-white font-bold text-[10px]">
                    {alm.severity}
                  </span>
                  <span className="font-bold text-red-300">[{alm.tag}]</span>
                  <span>{alm.msg}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 font-mono text-xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold">ALL PROCESS LOOPS NOMINAL • ZERO ACTIVE TRIPS</span>
          </div>
          <span className="text-[11px] text-emerald-500 font-semibold">INTERLOCKS READY</span>
        </div>
      )}

      {/* Rolling Historian Log */}
      <div className="bg-surface-sunken border border-border-slate rounded-lg p-4">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-border-slate">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-300 uppercase">
            <Terminal className="w-3.5 h-3.5 text-cobalt-400" />
            <span>SCADA Event Historian Log</span>
          </div>
          <span className="font-mono text-[10px] text-slate-500">Auto-rolling Stream</span>
        </div>

        <div className="max-h-36 overflow-y-auto space-y-1 font-mono text-xs pr-1">
          {eventLog.map((log) => (
            <div key={log.id} className="flex items-start gap-2 text-slate-300 py-0.5 border-b border-slate-800/40 text-[11px]">
              <span className="text-slate-500 shrink-0">{log.time}</span>
              <span
                className={`px-1 rounded text-[9px] font-bold shrink-0 ${
                  log.severity === 'CRITICAL'
                    ? 'bg-red-600 text-white'
                    : log.severity === 'WARNING'
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-700 text-slate-200'
                }`}
              >
                {log.severity}
              </span>
              <span className="text-slate-300 leading-tight">{log.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`

### File: src/data/portfolioData.js

`jsx
/**
 * Mohamed Baatas - Hydroinformatics Portfolio Authentic Domain Data
 * 100% Genuine Domain Content
 */

export const HERO_DATA = {
  fullName: "Mohamed Baatas",
  title: "Hydroinformatics Engineer",
  subtitle: "Hydraulic Systems Modeling • Embedded IoT Telemetry • Technical Software",
  badge: "SYSTEM STATUS: OPERATIONAL",
  bio: "Hydroinformatics Engineer bridging the gap between classical fluid mechanics, pressurized water distribution networks, and modern cyber-physical IoT telemetry. Experienced in municipal water potabilization SCADA systems, EPANET hydraulic modeling, and full-stack software architecture.",
  location: "Algiers, Algeria / Remote Available",
  availability: "Available for Hydraulic Modeling, IoT Telemetry Consulting & Full-Time Engineering Roles",
  kpis: [
    { label: "Network Simulation", value: "45+ km", detail: "EPANET 2.2 Model EPS" },
    { label: "Telemetry Latency", value: "<120 ms", detail: "Edge Sensor-to-Cloud" },
    { label: "Commercial Software", value: "3 Deployed", detail: "Production POS & ERP" },
    { label: "Academic Foundation", value: "B.S. + M.S.", detail: "Hydraulics & Sanitation" }
  ]
};

export const CASE_STUDIES = [
  {
    id: "waterfit-telemetry",
    title: "WaterFit — Cloud-Connected Hydration & Biometric Telemetry",
    category: "Cloud Microservices // Asynchronous Architecture // Telemetry",
    summary: "Asynchronous, low-friction hydration logging platform integrating the Telegram Bot API, Python FastAPI backend, and Firebase Realtime Database.",
    problem: "Field engineers, athletes, and industrial workers in high-heat environments require precise hydration tracking calibrated to ambient temperature and physiological exertion. Traditional multi-screen mobile apps suffer from high friction and poor compliance.",
    methodology: [
      "Built a conversational ingestion interface using the Telegram Bot API, enabling rapid one-tap and voice logging (<2 seconds interaction).",
      "Developed an asynchronous Python backend using FastAPI and asyncio webhook listeners for event-driven payload processing.",
      "Integrated Firebase Realtime Database and Firestore for instantaneous cross-device synchronization.",
      "Implemented dynamic metabolic hydration algorithms calculating personalized fluid targets based on ambient temperature (OpenWeather API), body weight, and workout duration.",
      "Scheduled proactive cron reminder workers triggered when fluid deficit exceeds safe threshold margins."
    ],
    stack: ["Python 3.11", "Telegram Bot API", "FastAPI", "Firebase Realtime DB", "Asyncio Webhooks", "OpenWeather API", "Cloud Functions"],
    metrics: [
      { label: "Webhook Latency", value: "<180 ms" },
      { label: "User Compliance", value: "+340%" },
      { label: "Concurrent Peak", value: ">500 req/s" },
      { label: "Sync Latency", value: "<50 ms" }
    ]
  },
  {
    id: "constracker-suite",
    title: "Constracker Suite — Construction Management Desktop Application",
    category: "Civil Engineering // Desktop Software // Project Management",
    summary: "Comprehensive desktop application built during MS1 to streamline construction management. Provides a unified platform to track and manage projects, workers, expenses, inventory, tasks, and measurements.",
    problem: "Construction management involves tracking dispersed resources—from daily worker attendance to material inventory and budget expenses. Traditional manual tracking leads to data fragmentation and inefficient cost control.",
    methodology: [
      "Developed an offline-first desktop application using Electron to ensure uninterrupted operation on construction sites with poor internet.",
      "Engineered a React 18 frontend with Vite and TypeScript for type-safe, high-performance UI rendering, styled with Tailwind CSS and shadcn/ui.",
      "Implemented a local SQLite3 relational database accessed via robust data fetching strategies with TanStack Query.",
      "Built 7 core modules: Dashboard (KPIs), Projects, Workers (assignments), Expenses (budgeting), Inventory, Tasks, and Metre (specialized construction measurements).",
      "Packaged and compiled executable desktop binaries using Electron Builder for seamless cross-platform deployment."
    ],
    stack: ["Electron", "React 18", "TypeScript", "Tailwind CSS", "SQLite3", "TanStack Query", "shadcn/ui", "React Router"],
    metrics: [
      { label: "Architecture", value: "Electron + React" },
      { label: "Database", value: "SQLite3 Local" },
      { label: "UI System", value: "shadcn/ui" },
      { label: "Scope", value: "7 Core Modules" }
    ]
  },
  {
    id: "scada-wwtp",
    title: "SCADA Smart WWTP Simulator — Zeriba El Oued",
    category: "Industrial Automation // Desktop Software // Artificial Intelligence",
    summary: "Live continuous cyber-physical process simulation modeled on the Zeriba El Oued municipal wastewater treatment plant, built as a PyQt6 desktop application.",
    problem: "Training operators on Natural Lagoon Wastewater Treatment Plants (WWTP) is difficult without risking compliance failures. The facility needed a high-fidelity digital twin to simulate biological processes and predict effluent quality dynamically.",
    methodology: [
      "Built a desktop simulator using Python 3 and PyQt6, providing a modern 12-interface SCADA environment including Synoptic Maps, Dashboard, and Alarm Logs.",
      "Modeled the 24,000 m³/day Zeriba El Oued plant, encompassing pretreatment, anaerobic digestion, facultative lagoons, and sludge drying beds.",
      "Implemented multithreading using QThread to separate complex physical simulation logic from the UI, ensuring smooth, freeze-free monitoring.",
      "Integrated AI-driven prediction models to forecast effluent water quality (BOD5, COD, TSS) and predict electro-mechanical pump failures based on operation hours.",
      "Engineered a robust SQLite historian database to archive continuous telemetry matrix readings, interlock trips, and critical alarm events."
    ],
    stack: ["Python 3", "PyQt6", "SQLite", "QThread (Multithreading)", "Qt Signals/Slots", "AI Prediction Models"],
    metrics: [
      { label: "Plant Capacity", value: "24,000 m³/d" },
      { label: "UI Complexity", value: "12 Interfaces" },
      { label: "Simulation", value: "Multithreaded" },
      { label: "AI Integration", value: "Prediction Models" }
    ]
  }
];

export const SKILLS_CATEGORIES = [
  {
    domain: "Hydraulic & Civil Engineering",
    description: "Fluid mechanics, pressurized pipeline modeling, municipal sanitation, and water network optimization.",
    skills: [
      { name: "EPANET 2.2 Simulation", level: "Expert", detail: "Extended-period simulation, water quality decay, fire-flow analysis" },
      { name: "ArcGIS Pro / ArcMap", level: "Advanced", detail: "Spatial terrain analysis, DEM extraction, network vector mapping" },
      { name: "AutoCAD Civil 3D", level: "Advanced", detail: "Hydraulic infrastructure drafting, profile alignment, pipe grading" },
      { name: "Hazen-Williams & Darcy-Weisbach", level: "Expert", detail: "Friction head loss, Reynolds number, minor losses" },
      { name: "Pumping Station Design", level: "Advanced", detail: "System head curves, NPSH calculation, pump parallel sequencing" },
      { name: "Water & Wastewater Treatment", level: "Advanced", detail: "Coagulation kinetics, lamella settling, rapid sand filters, CT chlorination" },
      { name: "Non-Revenue Water (NRW)", level: "Advanced", detail: "District Metered Areas (DMA), acoustic leak detection, pressure management" }
    ]
  },
  {
    domain: "Software Development & Architecture",
    description: "Modern component-based web applications, asynchronous microservices, relational schemas, and ETL data pipelines.",
    skills: [
      { name: "Python 3.x", level: "Expert", detail: "FastAPI, Asyncio, Pandas, NumPy, Scientific Computing" },
      { name: "React 18+ & Vite", level: "Advanced", detail: "Component modularity, custom hooks, state machines, SVG visualization" },
      { name: "Tailwind CSS", level: "Expert", detail: "Industrial precision design systems, dark-mode ergonomics, responsive grids" },
      { name: "SQLite & PostgreSQL", level: "Advanced", detail: "Relational database modeling, indexing, ACID transactions, offline-first caching" },
      { name: "REST APIs & Webhooks", level: "Expert", detail: "Event-driven architecture, payload validation, low-latency endpoints" },
      { name: "Firebase & Cloud Services", level: "Advanced", detail: "Realtime Database, Firestore, Cloud Functions, Authentication" },
      { name: "Git & CI/CD Tooling", level: "Advanced", detail: "Version control, automated testing with Vitest/Jest, GitHub Actions" }
    ]
  },
  {
    domain: "Embedded Systems, SCADA & IoT",
    description: "Microcontroller firmware, industrial sensor loops, edge automation, and SCADA communications.",
    skills: [
      { name: "ESP32 & Arduino C++", level: "Advanced", detail: "Firmware architecture, FreeRTOS tasks, interrupt routines, ADC calibration" },
      { name: "Blynk IoT Cloud & MQTT", level: "Advanced", detail: "Bidirectional telemetry broker, edge pub/sub, dashboard widgets" },
      { name: "Industrial Sensor Interfacing", level: "Advanced", detail: "Ultrasonic level, optical turbidity, pH transmitters, Hall-effect flow meters" },
      { name: "Closed-Loop PID Control", level: "Advanced", detail: "Proportional-Integral-Derivative pump speed and chemical dosing control" },
      { name: "Edge Fault Detection", level: "Advanced", detail: "Fail-safe hardware interlocks, dry-run protection, overpressure trips" },
      { name: "Hardware Actuators & Relays", level: "Advanced", detail: "Solid-state relays, 12V/24V solenoid valves, DC booster pumps" }
    ]
  }
];

export const FREELANCE_SOLUTIONS = [
  {
    id: "maktabi-pos",
    name: "Maktabi POS — Retail & Stationery Management System",
    type: "Commercial Desktop Application // Offline-First",
    client: "Retail Bookstores & Stationery Outlets",
    description: "High-performance, offline-first Point of Sale and inventory ledger built to operate continuously in regions with intermittent internet connectivity.",
    features: [
      "Sub-second barcode scanning and instant lookup across 10,000+ SKU inventory catalog.",
      "Offline-first local SQLite caching ensuring zero downtime during internet outages.",
      "Hardware integration with ESC/POS thermal receipt printers and automated cash drawers.",
      "Comprehensive accounting: customer credit ledgers, wholesale/retail tiers, supplier invoices, daily P&L audits."
    ],
    stack: ["Python", "PyQt / Modern UI", "SQLite", "ESC/POS Protocol", "ReportLab PDF Engine"],
    impact: "Actively deployed in commercial stores; reduced annual inventory audit time by 65% with zero downtime incidents."
  },
  {
    id: "alquds-gym",
    name: "Al-Quds Gym Manager — Membership & Access Control ERP",
    type: "Enterprise Facility Management // Biometric Access",
    client: "Fitness Centers & Sports Complexes",
    description: "Turnkey member lifecycle management and access control platform designed to eliminate unauthorized admissions and automate subscription renewals.",
    features: [
      "Real-time front desk access control interfacing barcode and RFID card readers to flag expired memberships instantly.",
      "Automated member subscription tracking with daily financial cash flow and trainer commission ledgers.",
      "Automated SMS/Telegram notifications alerting members prior to membership expiration.",
      "Comprehensive attendance analytics and peak-hour facility utilization heatmaps."
    ],
    stack: ["Python", "SQLite / PostgreSQL", "React Dashboard", "Barcode/RFID Hardware", "Telegram API"],
    impact: "Eliminated unauthorized admissions; boosted member renewal rate by 28%; digitized over 1,000 active member profiles."
  },
  {
    id: "custom-consulting",
    name: "Technical Consulting & Data Visualization",
    type: "Data Engineering // Hydraulic Consulting",
    client: "Engineering Consultancies & Municipal Contractors",
    description: "Custom scientific data pipelines, interactive web telemetry dashboards, and specialist hydraulic network analysis for municipal engineering projects.",
    features: [
      "Automated Python ETL pipelines converting disparate SCADA logs and EPANET simulation outputs into clean operational reports.",
      "Interactive web-based telemetry visualizers for monitoring water balance and hydraulic grade lines.",
      "Advisory on sensor selection, IoT gateway architecture (MQTT/Modbus), and network pressure zone optimization."
    ],
    stack: ["Python (Pandas, NumPy)", "FastAPI", "Tailwind CSS", "Recharts / SVG", "EPANET Scripting"],
    impact: "Streamlined engineering reporting cycles from days to seconds with automated PDF/Excel summaries."
  }
];

export const EXPERIENCE_TIMELINE = [
  {
    role: "President",
    organization: "Bernoulli Hydraulics Scientific Club",
    period: "2023 - 2025",
    location: "University Campus",
    type: "Leadership & Technical Mentorship",
    highlights: [
      "Elected President to lead a committee of 15+ student engineers and a community of 100+ members.",
      "Organized and delivered technical training masterclasses in EPANET 2.2 hydraulic modeling and ArcGIS Pro spatial mapping.",
      "Conducted hands-on IoT engineering workshops: interfacing Arduino microcontrollers with flow, pressure, and turbidity sensors.",
      "Organized technical field visits to regional drinking water potabilization dams and municipal wastewater treatment plants."
    ]
  },
  {
    role: "Enterprise Telecommunications Intern",
    organization: "Huawei ICT Academy",
    period: "2024",
    location: "Algiers",
    type: "Enterprise Networking Internship",
    highlights: [
      "Mastered enterprise IP routing and switching protocols (OSPF, BGP, VLAN tagging, QoS) across enterprise network equipment.",
      "Analyzed data center network redundancy topologies and low-latency packet transmission architectures.",
      "Applied enterprise networking reliability and failover principles directly to industrial SCADA and IoT sensor networks."
    ]
  }
];

export const EDUCATION_DATA = [
  {
    degree: "Master of Science (M.S.) — Water & Sanitation Services Management",
    institution: "National Higher Education Institution",
    period: "In Progress (2024 - Present)",
    focus: "Urban Water Cycle, Wastewater Treatment Plant Optimization, Non-Revenue Water Reduction, Sludge Treatment, Pumping Energy Optimization, Hydroinformatics."
  },
  {
    degree: "Bachelor of Science (B.S.) — Hydraulics Engineering",
    institution: "Faculty of Civil & Hydraulic Engineering",
    period: "Graduated with Distinction",
    focus: "Fluid Mechanics, Pressurized Pipe Hydraulics, Open Channel Flow, Hydrology, Dam Engineering, Reinforced Concrete for Hydraulic Structures, Soil Mechanics."
  }
];

export const CONTACT_INFO = {
  email: "mohamedbaatas@gmail.com",
  phone1: "+213655748513",
  phone2: "+213555395934",
  location: "Algiers, Algeria",
  timezone: "UTC+1 (CET)",
  socials: {
    github: "https://github.com/mohamedbaatas-hash",
    linkedin: "https://linkedin.com/in/mohamedbaatas",
    telegram: "https://t.me/Fluidev"
  }
};
`

### File: src/data/epanetData.js

`jsx
/**
 * EPANET 2.2 Looped Hydraulic Network Topology & Scenario Configurations
 */

export const EPANET_NETWORK_CONFIG = {
  nodes: [
    {
      id: "RES-1",
      label: "Water Source Reservoir",
      type: "reservoir",
      x: 90,
      y: 80,
      elevationM: 45.0,
      fixedHeadM: 85.0,
      baseDemandLps: 0.0,
      description: "Primary municipal impoundment reservoir providing constant boundary head."
    },
    {
      id: "J-1",
      label: "Transmission Intake Hub",
      type: "junction",
      x: 180,
      y: 160,
      elevationM: 46.0,
      baseDemandLps: 0.0,
      description: "Primary transmission manifold connecting low-lift pump discharge to arterial loop."
    },
    {
      id: "J-2",
      label: "Commercial District Junction",
      type: "junction",
      x: 450,
      y: 160,
      elevationM: 52.0,
      baseDemandLps: 18.0,
      description: "Commercial center with offices, shopping complexes, and steady daytime demand."
    },
    {
      id: "J-3",
      label: "North Residential Sector",
      type: "junction",
      x: 580,
      y: 280,
      elevationM: 58.0,
      baseDemandLps: 24.0,
      description: "High-elevation residential zone sensitive to peak hour pressure drops."
    },
    {
      id: "J-4",
      label: "Industrial Park Hub",
      type: "junction",
      x: 400,
      y: 380,
      elevationM: 49.0,
      baseDemandLps: 32.0,
      description: "Heavy commercial & light industrial zone with high base consumption and fire hydrants."
    },
    {
      id: "J-5",
      label: "South Residential Sector",
      type: "junction",
      x: 200,
      y: 340,
      elevationM: 54.0,
      baseDemandLps: 20.0,
      description: "Dense residential neighborhood served by western arterial return pipe P-107."
    },
    {
      id: "TK-1",
      label: "Elevated Balancing Tank",
      type: "tank",
      x: 640,
      y: 440,
      elevationM: 62.0,
      initialLevelM: 7.5,
      minLevelM: 2.0,
      maxLevelM: 12.0,
      diameterM: 15.0,
      baseDemandLps: 0.0,
      description: "Elevated storage tank providing peak shaving and gravity pressure stabilization."
    }
  ],
  links: [
    {
      id: "PMP-1",
      label: "Booster Pump Station 01",
      type: "pump",
      fromNode: "RES-1",
      toNode: "J-1",
      nominalHeadM: 55.0,
      shutoffHeadM: 65.0,
      isActive: true,
      throttlePct: 100,
      description: "Variable-frequency centrifugal booster pump station delivering water into arterial loop."
    },
    {
      id: "P-101",
      label: "Main Arterial Trunk P-101",
      type: "pipe",
      fromNode: "J-1",
      toNode: "J-2",
      lengthM: 1200,
      diameterMm: 350,
      roughnessC: 130,
      minorLossKm: 0.5,
      throttlePct: 100,
      isBurst: false,
      description: "Primary ductile iron transmission main connecting intake to commercial zone."
    },
    {
      id: "P-102",
      label: "North Distribution Line P-102",
      type: "pipe",
      fromNode: "J-2",
      toNode: "J-3",
      lengthM: 950,
      diameterMm: 250,
      roughnessC: 120,
      minorLossKm: 1.2,
      throttlePct: 100,
      isBurst: false,
      description: "Feeder pipeline conveying flow northward to residential sector."
    },
    {
      id: "P-103",
      label: "Industrial Central Feeder P-103",
      type: "pipe",
      fromNode: "J-2",
      toNode: "J-4",
      lengthM: 800,
      diameterMm: 300,
      roughnessC: 130,
      minorLossKm: 0.8,
      throttlePct: 100,
      isBurst: false,
      description: "High-capacity line branching south to industrial park."
    },
    {
      id: "P-104",
      label: "Inter-Sector Loop Tie P-104",
      type: "pipe",
      fromNode: "J-3",
      toNode: "J-4",
      lengthM: 600,
      diameterMm: 200,
      roughnessC: 110,
      minorLossKm: 1.5,
      throttlePct: 100,
      isBurst: false,
      description: "Loop tie-in providing network redundancy between North and Industrial sectors."
    },
    {
      id: "P-105",
      label: "South Industrial Connector P-105",
      type: "pipe",
      fromNode: "J-4",
      toNode: "J-5",
      lengthM: 1100,
      diameterMm: 250,
      roughnessC: 120,
      minorLossKm: 1.0,
      throttlePct: 100,
      isBurst: false,
      description: "Secondary loop arterial conveying flow toward South residential zone."
    },
    {
      id: "P-106",
      label: "Tank Balancing Line P-106",
      type: "pipe",
      fromNode: "J-3",
      toNode: "TK-1",
      lengthM: 450,
      diameterMm: 250,
      roughnessC: 130,
      minorLossKm: 2.0,
      throttlePct: 100,
      isBurst: false,
      description: "Bidirectional filling and draining pipeline connecting elevated tank to North hub."
    },
    {
      id: "P-107",
      label: "Western Return Arterial P-107",
      type: "pipe",
      fromNode: "J-5",
      toNode: "J-1",
      lengthM: 1400,
      diameterMm: 300,
      roughnessC: 125,
      minorLossKm: 0.5,
      throttlePct: 100,
      isBurst: false,
      description: "Western loop closure pipe returning excess head to primary manifold."
    }
  ]
};

export const HYDRAULIC_SCENARIOS = [
  {
    id: "SCENARIO_BASE",
    name: "Nominal Base Flow",
    description: "Standard daytime average demand profile (100% baseline consumption).",
    demandMultiplier: 1.0,
    demandOverrides: {},
    burstPipes: []
  },
  {
    id: "SCENARIO_MORNING_PEAK",
    name: "Morning Peak Demand (1.85x)",
    description: "High residential and commercial consumption surge across all sectors.",
    demandMultiplier: 1.85,
    demandOverrides: {},
    burstPipes: []
  },
  {
    id: "SCENARIO_MIN_NIGHT",
    name: "Minimum Night Flow (0.40x)",
    description: "Low midnight demand causing elevated static pressures and tank replenishment.",
    demandMultiplier: 0.40,
    demandOverrides: {},
    burstPipes: []
  },
  {
    id: "SCENARIO_FIRE_FLOW",
    name: "Emergency Fire Flow at J-4",
    description: "Sudden industrial fire hydrant activation (+70 L/s at Industrial Hub J-4).",
    demandMultiplier: 1.2,
    demandOverrides: { "J-4": 102.0 },
    burstPipes: []
  },
  {
    id: "SCENARIO_PIPE_BURST",
    name: "Main Arterial Burst (P-101)",
    description: "Simulated catastrophic rupture on main trunk P-101 with 45 L/s emitter leak.",
    demandMultiplier: 1.0,
    demandOverrides: {},
    burstPipes: ["P-101"]
  }
];
`

### File: src/data/scadaData.js

`jsx
/**
 * SCADA WWTP Configuration & ISA-5.1 Instrumentation Data (Zeriba El Oued)
 */

export const SENSOR_TAGS = {
  "FIT-101": {
    tag: "FIT-101",
    name: "Raw Sewage Inlet Flow",
    unit: "m³/d",
    nominalLow: 15000,
    nominalHigh: 28000,
    warnHigh: 35000,
    critHigh: 40000
  },
  "AIT-101": {
    tag: "AIT-101",
    name: "Raw Influent BOD5",
    unit: "mg/L",
    nominalLow: 150,
    nominalHigh: 350,
    warnHigh: 450,
    critHigh: 600
  },
  "AIT-102": {
    tag: "AIT-102",
    name: "Raw Influent COD",
    unit: "mg/L",
    nominalLow: 300,
    nominalHigh: 700,
    warnHigh: 900,
    critHigh: 1200
  },
  "AIT-103": {
    tag: "AIT-103",
    name: "Raw Influent TSS (MES)",
    unit: "mg/L",
    nominalLow: 150,
    nominalHigh: 400,
    warnHigh: 550,
    critHigh: 800
  },
  "TIT-201": {
    tag: "TIT-201",
    name: "Anaerobic Lagoon Temp",
    unit: "°C",
    nominalLow: 15,
    nominalHigh: 30,
    warnLow: 10,
    warnHigh: 35,
    critLow: 5,
    critHigh: 40
  },
  "AIT-201": {
    tag: "AIT-201",
    name: "Anaerobic Methane",
    unit: "% LEL",
    nominalLow: 4,
    nominalHigh: 12,
    warnHigh: 15,
    critHigh: 20
  },
  "AIT-301": {
    tag: "AIT-301",
    name: "Facultative Lagoon DO",
    unit: "mg/L",
    nominalLow: 4.0,
    nominalHigh: 8.0,
    warnLow: 2.0,
    critLow: 1.0
  },
  "AIT-302": {
    tag: "AIT-302",
    name: "Facultative Lagoon pH",
    unit: "pH",
    nominalLow: 6.5,
    nominalHigh: 8.5,
    warnLow: 6.0,
    warnHigh: 9.0,
    critLow: 5.0,
    critHigh: 10.0
  },
  "AIT-401": {
    tag: "AIT-401",
    name: "Final Effluent BOD5",
    unit: "mg/L",
    nominalLow: 5,
    nominalHigh: 25,
    warnHigh: 30,
    critHigh: 50
  },
  "AIT-402": {
    tag: "AIT-402",
    name: "Final Effluent Turbidity",
    unit: "NTU",
    nominalLow: 1.0,
    nominalHigh: 10.0,
    warnHigh: 15.0,
    critHigh: 25.0
  },
  "LIT-501": {
    tag: "LIT-501",
    name: "Treated Water Tank Level",
    unit: "%",
    nominalLow: 40.0,
    nominalHigh: 85.0,
    warnLow: 25.0,
    warnHigh: 92.0,
    critLow: 12.0,
    critHigh: 98.0
  }
};

export const INITIAL_SCADA_STATE = {
  isRunning: true,
  controlMode: "AUTO",
  flowM3d: 24000.0,
  bodIn: 250.0,
  codIn: 500.0,
  tssIn: 300.0,
  tempC: 22.0,
  methaneLel: 8.0,
  doMgL: 5.5,
  ph: 7.8,
  bodOut: 12.0,
  turbidityOut: 3.5,
  tankLevel: 65.0,
  
  pumpIn1: true,
  pumpIn2: true,
  pumpOut1: true,
  pumpOut2: true,
  pumpOut3: false,
  
  gridPower: true,
  generatorFuel: 85.0,
  screenAuto: true,
  
  activeAlarms: [],
  eventLog: [
    { id: 1, time: "00:00:01", severity: "INFO", message: "SCADA PLC Controller Online - Normal Diurnal Flow Active" },
    { id: 2, time: "00:00:02", severity: "INFO", message: "Zeriba El Oued Process Train Initialized - Nominal Steady State" }
  ]
};
`

### File: src/figma/App.tsx

`tsx
import React from "react"
import ExportPanel from "./ExportPanel"
import HighlightsStudio from "./HighlightsStudio"
import LogoStudio from "./LogoStudio"
import AcademicPostStudio from "./AcademicPostStudio"
import ConnectedCarouselStudio from "./ConnectedCarouselStudio"
import SingleServicePostStudio from "./SingleServicePostStudio"


type IconName = "check" | "chart" | "clock" | "code" | "github" | "mail" | "pin" | "phone" | "research"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    check: <path d="m5 12 4 4L19 6" />,
    chart: (
      <>
        <path d="M4 19V9m6 10V5m6 14v-7m4 7H2" />
        <path d="m3 7 6-4 6 5 6-4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-13-4 16" />,
    github: (
      <path
        d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z"
        fill="currentColor"
        stroke="none"
      />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: (
      <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2c-3.6-1.5-5.5-3.4-7-7l2-2-2-5Z" />
    ),
    research: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m14.5 14.5 6 6M8 8h4M8 11h3" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  )
}

function WaveMark() {
  return (
    <svg
      aria-hidden="true"
      className="wave-mark"
      fill="none"
      viewBox="0 0 95 38"
    >
      <path d="M2 11c8-10 15 10 23 0s15 10 23 0 15 10 23 0 14 9 22 0" />
      <path d="M2 26c8-10 15 10 23 0s15 10 23 0 15 10 23 0 14 9 22 0" />
    </svg>
  )
}

function ContactBar({ icon, text }: { icon: IconName; text: string }) {
  return (
    <div className="contact-bar">
      <span className="contact-icon">
        <Icon name={icon} size={15} />
      </span>
      <span>{text}</span>
    </div>
  )
}

function BottomFlowSystem() {
  const wavePath =
    "M0 14C65 0 135 28 200 14S335 0 400 14S535 28 600 14S735 0 800 14S935 28 1000 14S1135 0 1200 14"

  return (
    <svg
      aria-hidden="true"
      className="bottom-flow-system"
      preserveAspectRatio="none"
      viewBox="0 0 1200 60"
    >
      <path d={`${wavePath}V60H0Z`} fill="#f7b500" />
      <path
        d={wavePath}
        fill="none"
        stroke="#001db5"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path
        d={wavePath}
        fill="none"
        stroke="#00e5ff"
        strokeDasharray="18 12"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <g transform="translate(400 14)">
        <circle fill="#f7b500" r="13" stroke="#001db5" strokeWidth="4" />
        <circle fill="#00e5ff" r="6" stroke="white" strokeWidth="2" />
        <path d="M-19 0H19M0-19V19" fill="none" stroke="#001db5" strokeWidth="3" />
        <circle cx="-9" cy="-9" fill="white" r="1.7" />
        <circle cx="9" cy="-9" fill="white" r="1.7" />
        <circle cx="-9" cy="9" fill="white" r="1.7" />
        <circle cx="9" cy="9" fill="white" r="1.7" />
      </g>

      <g transform="translate(800 14)">
        <circle fill="#f7b500" r="13" stroke="#001db5" strokeWidth="4" />
        <circle fill="#00e5ff" r="6" stroke="white" strokeWidth="2" />
        <path d="M-19 0H19M0-19V19" fill="none" stroke="#001db5" strokeWidth="3" />
        <circle cx="-9" cy="-9" fill="white" r="1.7" />
        <circle cx="9" cy="-9" fill="white" r="1.7" />
        <circle cx="-9" cy="9" fill="white" r="1.7" />
        <circle cx="9" cy="9" fill="white" r="1.7" />
      </g>

      <g fill="#001db5" stroke="white" strokeWidth="1.5">
        <circle cx="200" cy="14" r="4" />
        <circle cx="600" cy="14" r="4" />
        <circle cx="1000" cy="14" r="4" />
      </g>
    </svg>
  )
}

function LeftPanel() {
  const promises = [
    {
      icon: "research" as const,
      title: "دقة أكاديمية وضبط المراجع",
      body: "تنسيق صارم وفق دليل الجامعة ومعايير APA / IEEE",
    },
    {
      icon: "chart" as const,
      title: "إخراج بصري يبرز مجهودك",
      body: "عروض احترافية ومخططات دقيقة تبهر لجنة المناقشة",
    },
    {
      icon: "clock" as const,
      title: "التزام ومتابعة مستمرة",
      body: "تسليم في الموعد مع تعديلات حتى يوم المناقشة",
    },
  ]

  return (
    <section className="panel left-panel" aria-label="الضمانات والتواصل">
      <div className="binder" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="left-content">
        <div className="section-kicker">WHAT TO EXPECT</div>
        <div className="arabic-heading">معايير عمل تضمن الجودة</div>
        <p className="section-intro">
          دقة في التنفيذ، إخراج احترافي، ومتابعة مستمرة من الفكرة إلى التسليم.
        </p>
        <div className="promise-list">
          {promises.map((promise, index) => (
            <div className="promise" key={promise.title}>
              <div className="promise-icon">
                <Icon name={promise.icon} size={21} />
              </div>
              <div>
                <strong>{promise.title}</strong>
                <p>{promise.body}</p>
              </div>
              <span className="promise-number">0{index + 1}</span>
            </div>
          ))}
        </div>
        <div className="availability">
          <div>
            <span>AVAILABILITY &amp; ORDERS</span>
            <strong>متاح لكل الولايات وعن بُعد</strong>
          </div>
          <span className="mini-rule" />
          <div>
            <span>FREE CONSULTATION</span>
            <strong>ناقش تفاصيل مشروعك عبر الخاص</strong>
          </div>
        </div>
        <div className="start-cta">
          <span>READY TO START?</span>
          <strong>ابدأ مشروعك اليوم</strong>
          <span className="arrow">←</span>
        </div>
      </div>
      <ContactBar icon="phone" text="+213 655 74 85 13" />
    </section>
  )
}

function MiddlePanel() {
  const services = [
    ["01", "المذكرات والبحوث", "صياغة، تنسيق، تدقيق وضبط المراجع"],
    ["02", "عروض المناقشة", "PowerPoint، Infographics ومخططات"],
    ["03", "تطوير البرامج والتطبيقات", "تطبيقات سطح المكتب والويب • أنظمة وأتمتة مخصصة"],
  ]

  return (
    <section className="panel middle-panel" aria-label="الخدمات الأساسية">
      <div className="paperclip" aria-hidden="true" />
      <div className="traffic-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="middle-content">
        <span
          className="brand-eyebrow"
          style={{ background: "#001db5", color: "#ffffff" }}
        >
          FLUIDEV / ACADEMIC &amp; DIGITAL
        </span>
        <div className="hero-title">
          خدمات برمجية
          <br />
          <span>وأكاديمية</span>
        </div>
        <div className="english-title">TURNING IDEAS INTO REALITY</div>
        <div className="tape">
          مذكرات تخرج • عروض احترافية • حلول برمجية ذكية
        </div>
        <div className="service-list">
          {services.map(([number, title, body]) => (
            <div className="service" key={number}>
              <span className="service-number">{number}</span>
              <div>
                <strong>{title}</strong>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactBar icon="github" text="mohamedbaatas-hash.github.io" />
    </section>
  )
}

function PortraitPlaceholder() {
  return (
    <div className="portrait-placeholder" aria-label="موضع الصورة الشخصية">
      <div className="placeholder-head" />
      <div className="placeholder-body" />
      <span>MB</span>
    </div>
  )
}

function RightPanel({ portrait }: { portrait: string | null }) {
  const isDefaultPortrait = portrait === "/assets/mohamed-portrait.png"

  return (
    <section className="panel right-panel" aria-label="الهوية والشخصية">
      <div className="blueprint-lines" aria-hidden="true" />
      <div className="identity-grid" aria-hidden="true" />
      <div className="identity-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="identity-number" aria-hidden="true">
        01
      </div>
      <WaveMark />
      <div className="brand-pill">
        <span className="brand-symbol">F</span>
        <span>
          <strong>FluiDev</strong>
          <small>FLUID DEVELOPER</small>
        </span>
      </div>
      <div className="persona-copy">
        <span>ENGINEERING</span>
        <strong>
          SMART
          <br />
          SOLUTIONS.
        </strong>
        <small>نحوّل الأفكار إلى حلول رقمية تعمل</small>
      </div>
      <div className="identity-services">
        <span>APP DEVELOPMENT</span>
        <span>ACADEMIC SUPPORT</span>
        <span>DATA &amp; AUTOMATION</span>
      </div>
      <div className="portrait-wrap">
        {portrait ? (
          <img
            alt="محمد بعتاس"
            className={isDefaultPortrait ? "default-portrait" : undefined}
            src={portrait}
          />
        ) : (
          <PortraitPlaceholder />
        )}
      </div>
      <div className="name-stack">
        <div>Mohamed | FluiDev</div>
        <span>مهندس مياه وبرمجيات</span>
        <span>خدمات أكاديمية ورقمية</span>
      </div>
      <div className="vertical-label">HYDROINFORMATICS / SOFTWARE</div>
      <ContactBar icon="mail" text="mohamedbaatas@gmail.com" />
    </section>
  )
}

function Banner({
  portrait,
  compact = false,
}: {
  portrait: string | null
  compact?: boolean
}) {
  return (
    <div className={compact ? "banner compact" : "banner"}>
      <LeftPanel />
      <MiddlePanel />
      <RightPanel portrait={portrait} />
      <div className="blue-crossover" aria-hidden="true" />
      <div className="paper-crossover" aria-hidden="true" />
      <div className="shared-wordmark" aria-hidden="true">
        <span>FLUI</span>
        <strong>DEV</strong>
      </div>
      <svg
        aria-hidden="true"
        className="hydraulic-network"
        preserveAspectRatio="none"
        viewBox="0 0 1200 500"
      >
        <defs>
          <linearGradient
            id="pipe-gradient"
            x1="40"
            x2="1160"
            y1="0"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#001db5" />
            <stop offset="0.62" stopColor="#005bff" />
            <stop offset="1" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        <path
          className="pipe-shadow"
          d="M48 410H168V370H274V414H389V350H504V402H622V328H744V392H846V333H947V270H1055V334H1160"
          fill="none"
          opacity="1"
          stroke="rgba(7, 19, 63, 0.12)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="14"
        />
        <path
          className="pipe-main"
          d="M48 410H168V370H274V414H389V350H504V402H622V328H744V392H846V333H947V270H1055V334H1160"
          fill="none"
          opacity="0.34"
          stroke="url(#pipe-gradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="9"
        />
        <path
          className="pipe-highlight"
          d="M48 407H168V367H274M389 347H504V399H622M744 389H846V330H947M1055 331H1160"
          fill="none"
          opacity="0.7"
          stroke="rgba(255, 255, 255, 0.78)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          className="pipe-branch"
          d="M274 414V318H340V285M504 402V445M622 328V252H691M846 333V245H790V204M1055 334V215H1114V174"
          fill="none"
          opacity="0.2"
          stroke="#005bff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
        />
        <g className="pipe-fitting" fill="#f8f9fa" opacity="0.6" stroke="#001db5" strokeWidth="3" transform="translate(168 370)">
          <circle r="12" />
          <circle r="5" />
          <path d="M-17 0H17M0-17V17" fill="none" />
        </g>
        <g className="pipe-fitting" fill="#f8f9fa" opacity="0.6" stroke="#001db5" strokeWidth="3" transform="translate(389 350)">
          <circle r="12" />
          <circle r="5" />
          <path d="M-17 0H17M0-17V17" fill="none" />
        </g>
        <g className="pipe-fitting" fill="#f8f9fa" opacity="0.6" stroke="#001db5" strokeWidth="3" transform="translate(622 328)">
          <circle r="12" />
          <circle r="5" />
          <path d="M-17 0H17M0-17V17" fill="none" />
        </g>
        <g className="pipe-fitting cyan" fill="#001db5" opacity="0.6" stroke="#00e5ff" strokeWidth="3" transform="translate(846 333)">
          <circle r="12" />
          <circle r="5" />
          <path d="M-17 0H17M0-17V17" fill="none" />
        </g>
        <g className="pipe-fitting cyan" fill="#001db5" opacity="0.6" stroke="#00e5ff" strokeWidth="3" transform="translate(1055 334)">
          <circle r="12" />
          <circle r="5" />
          <path d="M-17 0H17M0-17V17" fill="none" />
        </g>
        <g className="valve" fill="#f8f9fa" opacity="0.7" stroke="#001db5" strokeLinejoin="round" strokeWidth="3" transform="translate(744 392)">
          <path d="M-14-10 0 0l-14 10Zm28 0L0 0l14 10Z" />
          <path d="M0-18V0M-8-18H8" fill="none" />
        </g>
        <g className="valve cyan" fill="#001db5" opacity="0.7" stroke="#00e5ff" strokeLinejoin="round" strokeWidth="3" transform="translate(947 270)">
          <path d="M-14-10 0 0l-14 10Zm28 0L0 0l14 10Z" />
          <path d="M0-18V0M-8-18H8" fill="none" />
        </g>
        <path className="circuit-trace" d="M76 80h82l22 22h91l19-19h84m-298 34h54l18 18h68" fill="none" opacity="0.2" stroke="#001db5" strokeWidth="2" />
        <path className="circuit-trace right" d="M822 82h74l18 18h73l23-23h107m-295 55h48l22 22h83" fill="none" opacity="0.42" stroke="#00e5ff" strokeWidth="2" />
        <g className="circuit-nodes" fill="#f7b500" opacity="0.88" stroke="#001db5" strokeWidth="2">
          <circle cx="76" cy="80" r="5" />
          <circle cx="271" cy="102" r="5" />
          <circle cx="374" cy="83" r="5" />
          <circle cx="822" cy="82" r="5" />
          <circle cx="987" cy="100" r="5" />
          <circle cx="1117" cy="77" r="5" />
        </g>
        <text className="binary-code" fill="#001db5" fontFamily="Barlow Condensed" fontSize="11" fontWeight="800" opacity="0.28" x="83" y="105">01 001 1010</text>
        <text className="binary-code" fill="#001db5" fontFamily="Barlow Condensed" fontSize="11" fontWeight="800" opacity="0.28" x="515" y="443">0101 / FLOW.DATA</text>
        <text className="binary-code light" fill="#00e5ff" fontFamily="Barlow Condensed" fontSize="11" fontWeight="800" opacity="0.65" x="870" y="184">01 · 10 · 11</text>
      </svg>
      <svg
        aria-hidden="true"
        className="fluid-connector"
        preserveAspectRatio="none"
        viewBox="0 0 1200 500"
      >
        <defs>
          <filter id="connector-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur result="blur" stdDeviation="3" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          className="connector-shadow"
          d="M1165 106C1050 84 984 149 901 155C795 163 757 104 671 129C568 159 608 260 492 274C376 288 303 234 218 276C153 308 113 333 42 314"
          fill="none"
          stroke="rgba(0, 29, 181, 0.2)"
          strokeWidth="8"
        />
        <path
          className="connector-main"
          d="M1165 106C1050 84 984 149 901 155C795 163 757 104 671 129C568 159 608 260 492 274C376 288 303 234 218 276C153 308 113 333 42 314"
          fill="none"
          stroke="#00e5ff"
          strokeWidth="3"
        />
        <path
          className="connector-dash"
          d="M1145 122C1037 104 978 165 896 171C782 179 747 124 669 149C581 177 614 277 493 291C369 306 301 252 219 294C158 325 115 350 57 333"
          fill="none"
          stroke="rgba(255, 255, 255, 0.82)"
          strokeDasharray="8 11"
          strokeWidth="1.5"
        />
        <circle cx="904" cy="155" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
        <circle cx="671" cy="129" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
        <circle cx="492" cy="274" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
        <circle cx="218" cy="276" fill="#f7b500" r="7" stroke="white" strokeWidth="2" />
      </svg>
      <div className="seam-stitch seam-stitch-center" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <BottomFlowSystem />
      <div className="cut-line cut-one" aria-hidden="true" />
      <div className="cut-line cut-two" aria-hidden="true" />
    </div>
  )
}

type AppState = {
  portrait: string | null
  showGuides: boolean
}

export default class App extends React.Component<object, AppState> {
  state: AppState = {
    portrait: "/assets/mohamed-portrait.png",
    showGuides: true,
  }

  private inputRef = React.createRef<HTMLInputElement>()

  private prepareDefaultPortrait = () => {
    const image = new Image()
    image.src = "/assets/mohamed-portrait.png"
    image.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight
      const context = canvas.getContext("2d", { willReadFrequently: true })
      if (!context) return

      context.drawImage(image, 0, 0)
      const imageData = context.getImageData(
        0,
        0,
        canvas.width,
        canvas.height,
      )
      const { data } = imageData
      const width = canvas.width
      const height = canvas.height
      const visited = new Uint8Array(width * height)
      const queue = new Int32Array(width * height)
      let head = 0
      let tail = 0

      const isBackground = (pixel: number) => {
        const offset = pixel * 4
        return (
          data[offset] > 215 &&
          data[offset + 1] > 215 &&
          data[offset + 2] > 215
        )
      }

      const enqueue = (pixel: number) => {
        if (visited[pixel] || !isBackground(pixel)) return
        visited[pixel] = 1
        queue[tail++] = pixel
      }

      for (let x = 0; x < width; x += 1) {
        enqueue(x)
        enqueue((height - 1) * width + x)
      }
      for (let y = 0; y < height; y += 1) {
        enqueue(y * width)
        enqueue(y * width + width - 1)
      }

      while (head < tail) {
        const pixel = queue[head++]
        const x = pixel % width
        const y = Math.floor(pixel / width)
        data[pixel * 4 + 3] = 0
        if (x > 0) enqueue(pixel - 1)
        if (x + 1 < width) enqueue(pixel + 1)
        if (y > 0) enqueue(pixel - width)
        if (y + 1 < height) enqueue(pixel + width)
      }

      context.putImageData(imageData, 0, 0)
      let minX = width
      let minY = height
      let maxX = 0
      let maxY = 0
      for (let pixel = 0; pixel < width * height; pixel += 1) {
        if (data[pixel * 4 + 3] === 0) continue
        const x = pixel % width
        const y = Math.floor(pixel / width)
        minX = Math.min(minX, x)
        minY = Math.min(minY, y)
        maxX = Math.max(maxX, x)
        maxY = Math.max(maxY, y)
      }

      const padding = 10
      const cropX = Math.max(0, minX - padding)
      const cropY = Math.max(0, minY - padding)
      const cropWidth = Math.min(width - cropX, maxX - minX + padding * 2)
      const cropHeight = Math.min(height - cropY, maxY - minY + padding * 2)
      const croppedCanvas = document.createElement("canvas")
      croppedCanvas.width = cropWidth
      croppedCanvas.height = cropHeight
      croppedCanvas
        .getContext("2d")
        ?.drawImage(
          canvas,
          cropX,
          cropY,
          cropWidth,
          cropHeight,
          0,
          0,
          cropWidth,
          cropHeight,
        )

      croppedCanvas.toBlob((blob) => {
        if (!blob || this.state.portrait !== "/assets/mohamed-portrait.png") {
          return
        }
        this.setState({ portrait: URL.createObjectURL(blob) })
      }, "image/png")
    }
  }

  private handlePortrait = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    this.setState(({ portrait }) => {
      if (portrait?.startsWith("blob:")) URL.revokeObjectURL(portrait)
      return { portrait: URL.createObjectURL(file) }
    })
  }

  componentWillUnmount() {
    if (this.state.portrait?.startsWith("blob:")) {
      URL.revokeObjectURL(this.state.portrait)
    }
  }

  componentDidMount() {
    this.prepareDefaultPortrait()
  }

  render() {
    const { portrait, showGuides } = this.state

    return (
    <main className="app-shell" dir="rtl">
      <header className="studio-header">
        <div className="studio-brand">
          <span className="studio-mark">F</span>
          <div>
            <strong>FluiDev Banner Studio</strong>
            <span>Instagram pinned grid · 3240 × 1350</span>
          </div>
        </div>
                  <nav className="studio-nav" style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
            <a href="#banner-sec" className="nav-pill" style={{ textDecoration: "none", color: "#00e5ff", background: "rgba(0,229,255,0.1)", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>البانر الثلاثي</a>
            <a href="#academic-makeover-sec" className="nav-pill" style={{ textDecoration: "none", color: "#f7b500", background: "rgba(247,181,0,0.1)", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>كاروسيل التحول الأكاديمي</a>
            <a href="#connected-carousel-sec" className="nav-pill" style={{ textDecoration: "none", color: "#ffffff", background: "rgba(255,255,255,0.1)", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>كاروسيل الخدمات</a>
            <a href="#single-service-sec" className="nav-pill" style={{ textDecoration: "none", color: "#00e5ff", background: "rgba(0,229,255,0.1)", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>منشور المذكرات</a>
            <a href="#highlights-sec" className="nav-pill" style={{ textDecoration: "none", color: "#f7b500", background: "rgba(247,181,0,0.1)", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>أغلفة الهايلايتس</a>
            <a href="#logo-sec" className="nav-pill" style={{ textDecoration: "none", color: "#ffffff", background: "rgba(255,255,255,0.1)", padding: "6px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700" }}>نظام الشعار</a>
          </nav>
        <div className="studio-actions">
          <button
            className={showGuides ? "control active" : "control"}
            onClick={() => this.setState({ showGuides: !showGuides })}
          >
            <Icon name="check" size={16} />
            خطوط القص
          </button>
          <input
            accept="image/png,image/jpeg,image/webp"
            hidden
            onChange={this.handlePortrait}
            ref={this.inputRef}
            type="file"
          />
          <button
            className="upload-button"
            onClick={() => this.inputRef.current?.click()}
          >
            <Icon name="code" size={17} />
            {portrait ? "تغيير الصورة" : "رفع الصورة الشخصية"}
          </button>
        </div>
      </header>

      <section className="workspace">
        <div className="workspace-heading">
          <div>
            <span>MASTER CANVAS</span>
            <h1>البانر الثلاثي المتصل</h1>
          </div>
          <p>يُنشر بالترتيب: اليسار أولًا، ثم الوسط، ثم اليمين.</p>
        </div>

        <div
          className={
            showGuides ? "preview-frame guides-visible" : "preview-frame"
          }
        >
          <Banner portrait={portrait} />
        </div>

        <div className="slice-labels" dir="ltr">
          <span>POST 3 · LEFT</span>
          <span>POST 2 · CENTER</span>
          <span>POST 1 · RIGHT</span>
        </div>

        <div id="banner-sec">
          <ExportPanel versionLabel="fluiddev-collage" />
        </div>

        <div id="academic-makeover-sec" style={{ marginTop: "60px" }}>
          <AcademicPostStudio />
        </div>

        <div id="connected-carousel-sec" style={{ marginTop: "60px" }}>
          <ConnectedCarouselStudio />
        </div>

        <div id="single-service-sec" style={{ marginTop: "60px" }}>
          <SingleServicePostStudio />
        </div>

        <div id="highlights-sec" style={{ marginTop: "60px" }}>
          <HighlightsStudio />
        </div>

        <div id="logo-sec" style={{ marginTop: "60px" }}>
          <LogoStudio />
        </div>


        <aside className="note-card">
          <span className="note-index">01</span>
          <div>
            <strong>الصورة الشخصية المطلوبة</strong>
            <p>
              لأفضل نتيجة، ارفع صورة كاملة أو نصفية بخلفية شفافة، ويفضل أن تكون
              الوقفة موجهة نحو اليسار.
            </p>
          </div>
          <span className="status-chip">
            {portrait ? "تمت الإضافة" : "بانتظار الصورة"}
          </span>
        </aside>
      </section>
    </main>
    )
  }
}
`

