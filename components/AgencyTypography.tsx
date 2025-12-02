import React from 'react';
import { SectionHeader } from './SectionHeader';

export const AgencyTypography: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Typography" subtitle="Font Stack" id="typography" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg flex items-center justify-center text-xl font-agency font-bold shadow-sm text-primary-900 dark:text-white transition-colors">Aa</div>
            <div>
              <h3 className="font-agency font-bold text-lg text-primary-900 dark:text-white">Outfit</h3>
              <p className="text-sm text-light-text dark:text-dark-muted">Brand Headers, Display</p>
            </div>
          </div>
          <div className="space-y-6 border-l border-light-border dark:border-dark-border pl-6 transition-colors">
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">Bold / 700</p>
              <p className="font-agency font-bold text-4xl tracking-tight text-primary-900 dark:text-white">AGENCY ENTERPRISE</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">Medium / 500</p>
              <p className="font-agency font-medium text-2xl tracking-tight text-primary-900 dark:text-white">Building the future of software.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-lg flex items-center justify-center text-xl font-sans font-medium shadow-sm text-primary-900 dark:text-white transition-colors">Aa</div>
            <div>
              <h3 className="font-sans font-medium text-lg text-primary-900 dark:text-white">Inter</h3>
              <p className="text-sm text-light-text dark:text-dark-muted">Interface, Body</p>
            </div>
          </div>
          <div className="space-y-6 border-l border-light-border dark:border-dark-border pl-6 transition-colors">
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-slate-400 mb-1 uppercase tracking-wider">Regular / 400</p>
              <p className="font-sans text-base text-light-text dark:text-dark-muted leading-relaxed">
                We specialize in scalable architecture and modern web applications. Our team delivers clean, maintainable code for enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};