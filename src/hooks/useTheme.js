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
