import { useState, useEffect, useCallback } from 'react';

const THEME_STORAGE_KEY = 'fluiddev-theme';

/**
 * Determines whether it is daytime (06:00 to 18:00) locally
 */
export function getAutoTimeTheme() {
  const currentHour = new Date().getHours();
  return currentHour >= 6 && currentHour < 18 ? 'light' : 'dark';
}

/**
 * useTheme - Luxury Blueprint Dual-Theme Engine with Intelligent Time-Based Auto Switch
 * Features:
 * - Daytime (06:00 - 18:00): Graph Paper / Architectural Light Mode for optimal daytime readability.
 * - Evening (18:00 - 06:00): Deep Blueprint Navy Dark Mode for eye comfort.
 * - Instant manual toggle override with persistence in localStorage.
 */
export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') {
          return stored;
        }
      } catch (e) {
        // Fallback
      }
    }
    return getAutoTimeTheme();
  });

  const applyTheme = useCallback((targetTheme) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (targetTheme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Listen to storage events across tabs
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
    setThemeState((prev) => {
      const nextTheme = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch (e) {}
      return nextTheme;
    });
  }, []);

  const setTheme = useCallback((newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setThemeState(newTheme);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      } catch (e) {}
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
