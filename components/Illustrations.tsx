import React from 'react';
import { SectionHeader } from './SectionHeader';

export const Illustrations: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Illustrations & Patterns" subtitle="Brand Visuals" id="illustrations" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Pattern 1: Network Grid */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden flex flex-col transition-colors">
            <div className="h-48 bg-slate-50 dark:bg-slate-900 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-50 dark:opacity-20"></div>
                <svg width="200" height="100" viewBox="0 0 200 100" className="text-accent-600/20 dark:text-accent-500/20 absolute">
                    <path d="M0 50 Q 50 20 100 50 T 200 50" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 60 Q 50 30 100 60 T 200 60" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0 40 Q 50 10 100 40 T 200 40" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="35" r="3" fill="currentColor" className="text-accent-600 dark:text-accent-500" />
                    <circle cx="150" cy="65" r="3" fill="currentColor" className="text-accent-600 dark:text-accent-500" />
                </svg>
            </div>
            <div className="p-6 border-t border-light-border dark:border-dark-border">
                <h3 className="font-display font-semibold text-primary-900 dark:text-white">Network Grid</h3>
                <p className="text-xs text-light-text dark:text-dark-muted mt-2">Used for backgrounds and abstract representations of connectivity.</p>
            </div>
        </div>

        {/* Pattern 2: Data Flow */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden flex flex-col transition-colors">
            <div className="h-48 bg-primary-900 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                        <pattern id="lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="20" y2="20" stroke="white" strokeWidth="1" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#lines)" />
                    </svg>
                </div>
                <div className="flex gap-2">
                    <div className="w-1 h-12 bg-accent-500 rounded-full animate-pulse"></div>
                    <div className="w-1 h-16 bg-accent-600 rounded-full animate-pulse delay-75"></div>
                    <div className="w-1 h-8 bg-accent-400 rounded-full animate-pulse delay-100"></div>
                    <div className="w-1 h-14 bg-accent-500 rounded-full animate-pulse delay-150"></div>
                    <div className="w-1 h-10 bg-accent-600 rounded-full animate-pulse delay-200"></div>
                </div>
            </div>
            <div className="p-6 border-t border-light-border dark:border-dark-border">
                <h3 className="font-display font-semibold text-primary-900 dark:text-white">Data Flow</h3>
                <p className="text-xs text-light-text dark:text-dark-muted mt-2">Represents speed, throughput, and activity. Often used in dark mode.</p>
            </div>
        </div>

        {/* Pattern 3: Gradient Map */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden flex flex-col transition-colors">
            <div className="h-48 bg-gradient-to-br from-accent-600 to-primary-900 relative flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="text-white/20">
                   <path d="M12 2L22 19L12 15L2 19L12 2Z" fill="currentColor"/>
                </svg>
            </div>
            <div className="p-6 border-t border-light-border dark:border-dark-border">
                <h3 className="font-display font-semibold text-primary-900 dark:text-white">Gradient Map</h3>
                <p className="text-xs text-light-text dark:text-dark-muted mt-2">The core brand gradient. Used for hero areas and primary actions.</p>
            </div>
        </div>

      </div>
    </section>
  );
};