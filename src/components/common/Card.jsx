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
