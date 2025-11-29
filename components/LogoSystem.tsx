import React from 'react';
import { LogoMark } from './LogoMark';
import { SectionHeader } from './SectionHeader';

export const LogoSystem: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Logo System" subtitle="assets/brand/core/*" id="logo" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Light Mode - Always Light */}
        <div className="bg-white border border-light-border rounded-xl p-12 flex flex-col justify-between h-80 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute inset-0 grid-bg opacity-40"></div>
          <span className="absolute top-5 left-5 text-[10px] font-mono text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded bg-white/50">Light Variant</span>
          
          <div className="flex-1 flex items-center justify-center relative z-10">
            <div className="flex items-center gap-2 scale-125 transform group-hover:scale-130 transition-transform duration-500">
              <LogoMark size={32} />
              <span className="font-display font-bold text-3xl tracking-tight text-primary-900">
                SMS<span className="text-accent-600">Yard</span>
              </span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-xs text-light-text border-t border-light-border pt-5 mt-4 relative z-10">
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-black"></div>
                <span>Black</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-600"></div>
                <span>Blue 600</span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-slate-400">logo-light.svg</span>
          </div>
        </div>

        {/* Dark Mode - Always Dark */}
        <div className="bg-dark-bg border border-dark-border rounded-xl p-12 flex flex-col justify-between h-80 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
          <span className="absolute top-5 left-5 text-[10px] font-mono text-slate-600 uppercase tracking-widest border border-dark-border px-2 py-1 rounded bg-dark-card/50">Dark Variant</span>
          
          <div className="flex-1 flex items-center justify-center relative z-10">
            <div className="flex items-center gap-2 scale-125 transform group-hover:scale-130 transition-transform duration-500">
              <LogoMark size={32} className="text-accent-500" />
              <span className="font-display font-bold text-3xl tracking-tight text-white">
                SMS<span className="text-accent-500">Yard</span>
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-dark-muted border-t border-dark-border pt-5 mt-4 relative z-10">
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <span>White</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-500"></div>
                <span>Blue 500</span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-slate-600">logo-dark.svg</span>
          </div>
        </div>
      </div>

      {/* Clearspace & Construction - Adapts to Theme */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden transition-colors">
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 absolute top-4 left-4 uppercase tracking-widest">Mark Only</span>
          <div className="relative group cursor-crosshair">
            {/* Guides (Hover) */}
            <div className="absolute inset-0 border border-accent-500/0 group-hover:border-accent-500/30 transition-all rounded-full scale-150"></div>
            <div className="absolute inset-x-0 top-1/2 h-px bg-accent-500/0 group-hover:bg-accent-500/30 transition-all"></div>
            <div className="absolute inset-y-0 left-1/2 w-px bg-accent-500/0 group-hover:bg-accent-500/30 transition-all"></div>
            
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-accent-600 dark:text-accent-500 drop-shadow-xl shadow-accent-500/20 transition-colors">
              <path d="M12 2L22 19L12 15L2 19L12 2Z" fill="currentColor" stroke="none"/>
            </svg>
          </div>
          <p className="text-xs text-light-text dark:text-dark-muted text-center px-4 leading-relaxed">The "Navigator" represents precision, direction, and speed.</p>
        </div>
        <div className="md:col-span-2 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 flex flex-col justify-center relative overflow-hidden transition-colors">
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 absolute top-4 left-4 uppercase tracking-widest">Safety Margin</span>
          <div className="flex items-center justify-center h-full relative z-10">
            <div className="absolute border border-dashed border-accent-500/30 bg-accent-500/5 -inset-8 rounded-lg flex items-start justify-start">
              <span className="text-[10px] font-mono text-accent-600 p-1">x</span>
            </div>
            <div className="flex items-center gap-3">
              <LogoMark size={32} className="text-accent-600 dark:text-accent-500 transition-colors" />
              <span className="font-display font-bold text-3xl tracking-tight text-primary-900 dark:text-white">
                SMS<span className="text-accent-600 dark:text-accent-500 transition-colors">Yard</span>
              </span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-400 dark:text-slate-500">x = Height of Mark</div>
        </div>
      </div>
    </section>
  );
};