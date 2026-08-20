import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function SectionHeading({ tag, title, description, align = "left", onClick, isCollapsible, isExpanded }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const interactableClass = onClick ? "cursor-pointer group hover:bg-slate-800/30 p-4 -ml-4 rounded-lg transition-colors" : "";

  return (
    <div 
      className={`flex flex-col mb-10 ${alignClass} ${interactableClass}`}
      onClick={onClick}
    >
      <div className="flex w-full justify-between items-start gap-4">
        <div className="flex flex-col items-start">
          {tag && (
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cobalt-600/10 border border-cobalt-500/30 text-cobalt-400 font-mono text-xs font-semibold tracking-wider uppercase mb-3 group-hover:bg-cobalt-600/20 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500 animate-pulse" />
              {tag}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-cobalt-300 transition-colors">
            {title}
          </h2>
        </div>
        
        {isCollapsible && (
          <div className="flex-shrink-0 mt-2 p-2 rounded-full bg-elevated-slate border border-border-slate group-hover:border-cobalt-500/50 transition-colors text-slate-400 group-hover:text-white">
            {isExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </div>
        )}
      </div>

      {description && (!isCollapsible || isExpanded) && (
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
