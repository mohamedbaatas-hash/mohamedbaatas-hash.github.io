import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import { useTheme } from '../src/hooks/useTheme.js';
import { ThemeToggle } from '../src/components/common/ThemeToggle.jsx';
import App from '../src/App.jsx';
import '../src/i18n';

describe('Theme Engine & Dual Theme Switcher', () => {
  const THEME_STORAGE_KEY = 'fluiddev-theme';

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    document.documentElement.removeAttribute('data-theme');
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    document.documentElement.removeAttribute('data-theme');
    vi.restoreAllMocks();
  });

  // =========================================================================
  // TIER 1: FEATURE COVERAGE (Core Hook State & Toggle Rendering)
  // =========================================================================
  describe('Tier 1 - Feature Coverage', () => {
    it('initializes with default dark mode when no stored preference exists', () => {
      const { result } = renderHook(() => useTheme());

      expect(result.current.theme).toBe('dark');
      expect(result.current.isDark).toBe(true);
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });

    it('toggles theme from dark to light via toggleTheme()', () => {
      const { result } = renderHook(() => useTheme());

      expect(result.current.theme).toBe('dark');

      act(() => {
        result.current.toggleTheme();
      });

      expect(result.current.theme).toBe('light');
      expect(result.current.isDark).toBe(false);
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });

    it('allows explicitly setting theme via setTheme()', () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.setTheme('light');
      });
      expect(result.current.theme).toBe('light');
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');

      act(() => {
        result.current.setTheme('dark');
      });
      expect(result.current.theme).toBe('dark');
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    });

    it('renders ThemeToggle button with accessible attributes and label', () => {
      render(React.createElement(ThemeToggle));

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute('data-testid', 'theme-toggle');
      // In default dark mode, aria-label prompts switching to light mode
      expect(button).toHaveAttribute('aria-label', 'Switch to Graph Paper Light Mode');
      expect(screen.getByText('Blueprint')).toBeInTheDocument();
    });
  });

  // =========================================================================
  // TIER 2: BOUNDARY & CORNER CASES (Corrupted Storage, Invalid Inputs, Edge Keys)
  // =========================================================================
  describe('Tier 2 - Boundary & Corner Cases', () => {
    it('gracefully falls back to default dark mode when localStorage contains invalid values', () => {
      localStorage.setItem(THEME_STORAGE_KEY, 'invalid-color-palette');
      const { result } = renderHook(() => useTheme());

      expect(result.current.theme).toBe('dark');
      expect(result.current.isDark).toBe(true);
    });

    it('ignores invalid values passed to setTheme()', () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.setTheme('neon-green');
      });

      // Theme remains dark and does not accept invalid value
      expect(result.current.theme).toBe('dark');
    });

    it('handles multiple rapid consecutive toggles without race conditions', () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current.toggleTheme(); // -> light
        result.current.toggleTheme(); // -> dark
        result.current.toggleTheme(); // -> light
        result.current.toggleTheme(); // -> dark
        result.current.toggleTheme(); // -> light
      });

      expect(result.current.theme).toBe('light');
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
      expect(document.documentElement.classList.contains('light')).toBe(true);
    });

    it('initializes from pre-existing stored light preference', () => {
      localStorage.setItem(THEME_STORAGE_KEY, 'light');
      const { result } = renderHook(() => useTheme());

      expect(result.current.theme).toBe('light');
      expect(result.current.isDark).toBe(false);
      expect(document.documentElement.classList.contains('light')).toBe(true);
    });

    it('handles localStorage exceptions (e.g. QuotaExceededError or security block) gracefully', () => {
      vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('QuotaExceededError');
      });

      const { result } = renderHook(() => useTheme());

      // Should not throw even when localStorage throws
      expect(() => {
        act(() => {
          result.current.toggleTheme();
        });
      }).not.toThrow();

      expect(result.current.theme).toBe('light');
    });
  });

  // =========================================================================
  // TIER 3: CROSS-FEATURE COMBINATIONS (DOM ClassList, Multi-Tab Sync, Media Queries)
  // =========================================================================
  describe('Tier 3 - Cross-Feature Combinations', () => {
    it('enforces mutually exclusive classList: light removes dark and dark removes light', () => {
      const { result } = renderHook(() => useTheme());

      // Initially dark
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('light')).toBe(false);

      // Switch to light
      act(() => {
        result.current.setTheme('light');
      });
      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(document.documentElement.classList.contains('dark')).toBe(false);

      // Switch back to dark
      act(() => {
        result.current.setTheme('dark');
      });
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('light')).toBe(false);
    });

    it('synchronizes theme across browser tabs via storage event listener', () => {
      const { result } = renderHook(() => useTheme());
      expect(result.current.theme).toBe('dark');

      // Simulate a change event triggered by another tab
      act(() => {
        window.dispatchEvent(
          new StorageEvent('storage', {
            key: THEME_STORAGE_KEY,
            newValue: 'light'
          })
        );
      });

      expect(result.current.theme).toBe('light');
      expect(document.documentElement.classList.contains('light')).toBe(true);
    });

    it('respects system prefers-color-scheme when no localStorage key exists', () => {
      // Mock prefers-color-scheme: light
      vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
        matches: query === '(prefers-color-scheme: light)',
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }));

      const { result } = renderHook(() => useTheme());
      expect(result.current.theme).toBe('light');
    });
  });

  // =========================================================================
  // TIER 4: REAL-WORLD APPLICATION SCENARIOS (Interactive User Switching Flow)
  // =========================================================================
  describe('Tier 4 - Real-World Application Scenarios', () => {
    it('executes full interactive user theme toggle cycle through the UI component', () => {
      const { unmount } = render(React.createElement(ThemeToggle, { showLabel: true }));

      const button = screen.getByRole('button');

      // 1. Initial State: Blueprint Dark Mode
      expect(button).toHaveAttribute('data-theme-current', 'dark');
      expect(screen.getByText('Blueprint')).toBeInTheDocument();
      expect(document.documentElement.classList.contains('dark')).toBe(true);

      // 2. User Clicks Toggle Button
      fireEvent.click(button);

      // 3. Verifies Immediate Transition to Graph Paper Light Mode
      expect(button).toHaveAttribute('data-theme-current', 'light');
      expect(button).toHaveAttribute('aria-label', 'Switch to Blueprint Dark Mode');
      expect(screen.getByText('Graph Paper')).toBeInTheDocument();
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
      expect(document.documentElement.classList.contains('light')).toBe(true);
      expect(document.documentElement.classList.contains('dark')).toBe(false);

      // 4. User Clicks Again to Return to Blueprint Dark Mode
      fireEvent.click(button);

      expect(button).toHaveAttribute('data-theme-current', 'dark');
      expect(screen.getByText('Blueprint')).toBeInTheDocument();
      expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
      expect(document.documentElement.classList.contains('dark')).toBe(true);
      expect(document.documentElement.classList.contains('light')).toBe(false);

      unmount();
    });

    it('mounts ThemeToggle with showLabel=false in compact mobile mode', () => {
      render(React.createElement(ThemeToggle, { showLabel: false }));
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(screen.queryByText('Blueprint')).not.toBeInTheDocument();
    });

    it('mounts full <App /> in Light Mode with transparent root container allowing graph paper visibility', () => {
      localStorage.setItem(THEME_STORAGE_KEY, 'light');
      document.documentElement.className = 'light';
      document.documentElement.setAttribute('data-theme', 'light');

      const { container } = render(React.createElement(App));
      const rootDiv = container.firstChild;

      expect(rootDiv).toBeInTheDocument();
      // Verifies root container has bg-transparent and text-[var(--text-primary)]
      expect(rootDiv).toHaveClass('bg-transparent');
      expect(rootDiv).not.toHaveClass('bg-slate-950');

      // Verifies document body / html has light theme
      expect(document.documentElement.classList.contains('light')).toBe(true);

      // Verifies key sections are present and rendered
      expect(container.querySelector('#academic-hub')).toBeInTheDocument();
      expect(container.querySelector('#trajectory')).toBeInTheDocument();
      expect(container.querySelector('#selected-works')).toBeInTheDocument();
    });
  });
});
