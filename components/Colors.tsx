

import React from 'react';
import { SectionHeader } from './SectionHeader';
import { COLORS, THEME_TOKENS, BUTTON_TOKENS } from '../constants';
import { Sun, Moon } from 'lucide-react';

export const Colors: React.FC = () => {
  return (
    <section className="space-y-12">
      {/* Main Palette */}
      <div className="space-y-8">
        <SectionHeader title="Color Palette" subtitle="Tailwind Palette" id="colors" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {COLORS.map((color) => (
            <div key={color.name} className="space-y-2 group">
              <div 
                className={`h-20 rounded-lg shadow-sm ring-1 ring-inset group-hover:scale-105 transition-transform ${color.tailwindClass} ${color.ring ? color.ring : 'ring-black/5 dark:ring-white/10'}`} 
              />
              <div>
                <p className="text-sm font-semibold text-primary-900 dark:text-white">{color.name}</p>
                <p className="text-[10px] font-mono text-light-text dark:text-dark-muted">
                  {color.hex} {color.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Theme Specific Tokens */}
      <div className="space-y-8">
        <div className="border-b border-light-border dark:border-dark-border pb-4">
            <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-white">Theme Tokens</h3>
            <p className="text-xs text-light-text dark:text-dark-muted mt-1">Semantic mappings for Light and Dark modes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {THEME_TOKENS.map((item) => (
                <div key={item.token} className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden transition-colors">
                    <div className="p-4 border-b border-light-border dark:border-dark-border">
                        <h4 className="font-semibold text-primary-900 dark:text-white text-sm">{item.token}</h4>
                        <p className="text-xs text-light-text dark:text-dark-muted mt-0.5">{item.description}</p>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-light-border dark:divide-dark-border">
                        {/* Light Value */}
                        <div className="p-4 space-y-3 bg-slate-50/50 dark:bg-transparent">
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                <Sun size={12} /> Light
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-md shadow-sm ring-1 ring-black/5" style={{ backgroundColor: item.light.hex }}></div>
                                <div>
                                    <p className="text-xs font-mono font-semibold text-primary-900 dark:text-white">{item.light.hex}</p>
                                    <p className="text-[10px] text-light-text dark:text-dark-muted">{item.light.label}</p>
                                </div>
                            </div>
                        </div>

                        {/* Dark Value */}
                        <div className="p-4 space-y-3 bg-dark-bg/50 dark:bg-transparent">
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <Moon size={12} /> Dark
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-md shadow-sm ring-1 ring-white/10" style={{ backgroundColor: item.dark.hex }}></div>
                                <div>
                                    <p className="text-xs font-mono font-semibold text-primary-900 dark:text-white">{item.dark.hex}</p>
                                    <p className="text-[10px] text-light-text dark:text-dark-muted">{item.dark.label}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Button Tokens */}
      <div className="space-y-8">
        <div className="border-b border-light-border dark:border-dark-border pb-4">
            <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-white">Component Tokens</h3>
            <p className="text-xs text-light-text dark:text-dark-muted mt-1">Colors for Buttons and Interactivity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUTTON_TOKENS.map((item) => (
                <div key={item.token} className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden transition-colors">
                    <div className="p-4 border-b border-light-border dark:border-dark-border">
                        <h4 className="font-semibold text-primary-900 dark:text-white text-sm">{item.token}</h4>
                        <p className="text-xs text-light-text dark:text-dark-muted mt-0.5">{item.description}</p>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-light-border dark:divide-dark-border">
                        {/* Light Value */}
                        <div className="p-4 space-y-3 bg-slate-50/50 dark:bg-transparent">
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                                <Sun size={12} /> Light
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-md shadow-sm ring-1 ring-black/5" style={{ backgroundColor: item.light.hex }}></div>
                                <div>
                                    <p className="text-xs font-mono font-semibold text-primary-900 dark:text-white">{item.light.hex}</p>
                                    <p className="text-[10px] text-light-text dark:text-dark-muted">{item.light.label}</p>
                                </div>
                            </div>
                        </div>

                        {/* Dark Value */}
                        <div className="p-4 space-y-3 bg-dark-bg/50 dark:bg-transparent">
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                <Moon size={12} /> Dark
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-md shadow-sm ring-1 ring-white/10" style={{ backgroundColor: item.dark.hex }}></div>
                                <div>
                                    <p className="text-xs font-mono font-semibold text-primary-900 dark:text-white">{item.dark.hex}</p>
                                    <p className="text-[10px] text-light-text dark:text-dark-muted">{item.dark.label}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};