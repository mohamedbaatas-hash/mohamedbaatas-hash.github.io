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
