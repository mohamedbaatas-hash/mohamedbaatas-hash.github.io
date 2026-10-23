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
