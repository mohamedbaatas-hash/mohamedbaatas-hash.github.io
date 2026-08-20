import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', href: '#case-studies' },
    { label: 'Simulators', href: '#scada-plant' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-obsidian/90 backdrop-blur-md border-b border-border-slate/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded bg-cobalt-600/20 border border-cobalt-500/40 flex items-center justify-center text-cobalt-400 font-mono font-bold text-base group-hover:bg-cobalt-600 group-hover:text-white transition-colors">
            MB
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tight text-sm sm:text-base leading-none">
              Mohamed Baatas
            </span>
            <span className="font-mono text-[11px] text-slate-400 tracking-wider uppercase mt-1">
              Hydroinformatics
            </span>
          </div>
        </a>

        {/* Desktop Navigation & Actions */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="w-px h-6 bg-border-slate/60"></div>
          
          <a
            href="/Mohamed_Baatas_CV.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-cobalt-600 hover:bg-cobalt-500 text-sm font-semibold text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-slate-400 hover:text-white hover:bg-elevated-slate"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-slate bg-surface-sunken px-4 pt-2 pb-6 space-y-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded text-sm font-medium text-slate-300 hover:text-white hover:bg-elevated-slate"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-border-slate">
            <a
              href="/Mohamed_Baatas_CV.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded bg-cobalt-600 hover:bg-cobalt-500 text-sm font-semibold text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
