import React from 'react';
import { SectionHeader } from './SectionHeader';

export const Typography: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Typography" subtitle="Config" id="typography" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg flex items-center justify-center text-xl font-display font-bold shadow-sm text-primary-900 dark:text-white transition-colors">Aa</div>
            <div>
              <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-white">Manrope</h3>
              <p className="text-sm text-light-text dark:text-dark-muted">Headlines, Branding</p>
            </div>
          </div>
          <div className="space-y-6 border-l border-light-border dark:border-dark-border pl-6 transition-colors">
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">Display / Semibold</p>
              <p className="font-display font-semibold text-4xl tracking-tight text-primary-900 dark:text-white">Enterprise Messaging</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">Heading / Medium</p>
              <p className="font-display font-medium text-2xl tracking-tight text-primary-900 dark:text-white">Reliable delivery at scale.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg flex items-center justify-center text-xl font-sans font-medium shadow-sm text-primary-900 dark:text-white transition-colors">Aa</div>
            <div>
              <h3 className="font-sans font-medium text-lg text-primary-900 dark:text-white">Inter</h3>
              <p className="text-sm text-light-text dark:text-dark-muted">Interface, Body, Data</p>
            </div>
          </div>
          <div className="space-y-6 border-l border-light-border dark:border-dark-border pl-6 transition-colors">
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">Body / Regular</p>
              <p className="font-sans text-base text-light-text dark:text-dark-muted leading-relaxed">
                Engineered for high-throughput SMS campaigns. We provide direct carrier connections and real-time analytics for your messaging stack.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">Tabular / Mono-style</p>
              <div className="flex gap-2">
                <span className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border w-9 h-10 rounded shadow-sm flex items-center justify-center font-sans font-medium text-base text-primary-900 dark:text-white transition-colors">1</span>
                <span className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border w-9 h-10 rounded shadow-sm flex items-center justify-center font-sans font-medium text-base text-primary-900 dark:text-white transition-colors">5</span>
                <span className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border w-9 h-10 rounded shadow-sm flex items-center justify-center font-sans font-medium text-base text-primary-900 dark:text-white transition-colors">9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};