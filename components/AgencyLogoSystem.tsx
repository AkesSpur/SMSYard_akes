import React from 'react';
import { AgencyLogoMark } from './AgencyLogoMark';
import { SectionHeader } from './SectionHeader';

export const AgencyLogoSystem: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Identity System" subtitle="assets/brand/core/*" id="logo" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Light Mode */}
        <div className="bg-white border border-light-border rounded-xl p-12 flex flex-col justify-between h-80 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute inset-0 grid-bg opacity-40"></div>
          <span className="absolute top-5 left-5 text-[10px] font-mono text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded bg-white/50">Primary</span>
          
          <div className="flex-1 flex items-center justify-center relative z-10">
            <div className="flex items-center gap-3 scale-125 transform group-hover:scale-130 transition-transform duration-500">
              <AgencyLogoMark size={32} />
              <span className="font-agency font-bold text-3xl tracking-wide text-primary-900 uppercase">
                Agency<span className="text-agency-600">Spur</span>
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
                <div className="w-2 h-2 rounded-full bg-agency-600"></div>
                <span>Violet 600</span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-slate-400">agency-light.svg</span>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="bg-dark-bg border border-dark-border rounded-xl p-12 flex flex-col justify-between h-80 relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute inset-0 grid-bg-dark opacity-30"></div>
          <span className="absolute top-5 left-5 text-[10px] font-mono text-slate-600 uppercase tracking-widest border border-dark-border px-2 py-1 rounded bg-dark-card/50">Inverted</span>
          
          <div className="flex-1 flex items-center justify-center relative z-10">
            <div className="flex items-center gap-3 scale-125 transform group-hover:scale-130 transition-transform duration-500">
              <AgencyLogoMark size={32} className="text-agency-500" />
              <span className="font-agency font-bold text-3xl tracking-wide text-white uppercase">
                Agency<span className="text-agency-500">Spur</span>
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
                <div className="w-2 h-2 rounded-full bg-agency-500"></div>
                <span>Violet 500</span>
              </div>
            </div>
            <span className="font-mono text-[10px] text-slate-600">agency-dark.svg</span>
          </div>
        </div>
      </div>

      {/* Construction */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden transition-colors">
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 absolute top-4 left-4 uppercase tracking-widest">Mark Construction</span>
          <div className="relative group cursor-crosshair">
            <div className="absolute inset-0 border border-agency-500/0 group-hover:border-agency-500/30 transition-all rounded-full scale-150"></div>
            <AgencyLogoMark size={80} className="text-agency-600 dark:text-agency-500 drop-shadow-xl shadow-agency-500/20 transition-colors" />
          </div>
          <p className="text-xs text-light-text dark:text-dark-muted text-center px-4 leading-relaxed">The "Spur" combines structure (the hexagon) with dimension (the cube).</p>
        </div>
        <div className="md:col-span-2 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 flex flex-col justify-center relative overflow-hidden transition-colors">
          <div className="absolute inset-0 grid-bg opacity-20"></div>
          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 absolute top-4 left-4 uppercase tracking-widest">Clearspace</span>
          <div className="flex items-center justify-center h-full relative z-10">
            <div className="absolute border border-dashed border-agency-500/30 bg-agency-500/5 -inset-8 rounded-lg flex items-start justify-start">
              <span className="text-[10px] font-mono text-agency-600 p-1">x</span>
            </div>
            <div className="flex items-center gap-3">
              <AgencyLogoMark size={32} className="text-agency-600 dark:text-agency-500 transition-colors" />
              <span className="font-agency font-bold text-3xl tracking-wide text-primary-900 dark:text-white uppercase">
                Agency<span className="text-agency-600 dark:text-agency-500 transition-colors">Spur</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};