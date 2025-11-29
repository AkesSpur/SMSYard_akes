import React from 'react';
import { LogoMark } from './LogoMark';
import { SectionHeader } from './SectionHeader';

export const Favicons: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Favicons & Assets" subtitle="Webclip & Favicon" id="favicons" />

      <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-10 transition-colors">
        <div className="flex flex-wrap items-end gap-16">
            
            {/* 192px Android */}
            <div className="flex flex-col items-center gap-4">
                <div className="w-32 h-32 bg-accent-600 rounded-[2rem] shadow-xl shadow-blue-500/20 flex items-center justify-center relative group">
                    <div className="absolute inset-0 bg-white/10 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <LogoMark className="text-white" size={64} />
                </div>
                <div className="text-center">
                    <p className="text-xs font-semibold text-primary-900 dark:text-white">App Icon</p>
                    <span className="text-[10px] font-mono text-light-text dark:text-dark-muted">192x192</span>
                </div>
            </div>

            {/* 32px Favicon */}
            <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-xl border border-light-border dark:border-dark-border flex items-center justify-center shadow-sm transition-colors">
                    <LogoMark size={32} />
                </div>
                <div className="text-center">
                    <p className="text-xs font-semibold text-primary-900 dark:text-white">Favicon</p>
                    <span className="text-[10px] font-mono text-light-text dark:text-dark-muted">32x32</span>
                </div>
            </div>

            {/* 16px Favicon */}
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg border border-light-border dark:border-dark-border flex items-center justify-center shadow-sm transition-colors">
                   <LogoMark size={20} />
                </div>
                <div className="text-center">
                    <p className="text-xs font-semibold text-primary-900 dark:text-white">Small</p>
                    <span className="text-[10px] font-mono text-light-text dark:text-dark-muted">16x16</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};