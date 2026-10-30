import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle({
  className = '',
  showLabel = true,
  ...props
}) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`inline-flex items-center gap-2 px-3 py-1.5 border text-[11px] font-mono font-medium transition-colors duration-150 ${
        isDark
          ? 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-sky-400/50 hover:text-white'
          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-600/50 hover:text-slate-950'
      } ${className}`}
      aria-label={isDark ? 'Switch to Daylight Mode' : 'Switch to Night CAD Mode'}
      title={isDark ? 'Night CAD Mode (Active) — Switch to Daylight' : 'Daylight Mode (Active) — Switch to Night CAD'}
      data-testid="theme-toggle"
      data-theme-current={theme}
      {...props}
    >
      {isDark ? (
        <Moon className="w-3.5 h-3.5 text-sky-400" />
      ) : (
        <Sun className="w-3.5 h-3.5 text-blue-600" />
      )}
      {showLabel && (
        <span className="uppercase tracking-wider hidden sm:inline">
          {isDark ? 'Night CAD' : 'Daylight'}
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;
