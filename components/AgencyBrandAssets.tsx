import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ArrowRight, Check, AlertTriangle, Info, ChevronDown } from 'lucide-react';

export const AgencyBrandAssets: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Brand Assets" subtitle="UI Components" id="assets" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Buttons */}
        <div className="space-y-6 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 transition-colors">
            <h3 className="font-agency font-bold text-lg text-primary-900 dark:text-white">Buttons</h3>
            <div className="flex flex-wrap gap-4">
                <button className="px-5 py-2.5 bg-agency-600 text-white rounded-md font-semibold hover:bg-agency-700 transition-colors shadow-sm shadow-agency-500/20">
                    Get Started
                </button>
                <button className="px-5 py-2.5 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border text-primary-900 dark:text-white rounded-md font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Documentation
                </button>
                <button className="px-5 py-2.5 text-agency-600 dark:text-agency-400 font-semibold hover:bg-agency-50 dark:hover:bg-agency-900/20 rounded-md transition-colors inline-flex items-center gap-2">
                    Learn More <ArrowRight size={16} />
                </button>
            </div>
        </div>

        {/* Badges */}
        <div className="space-y-6 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 transition-colors">
            <h3 className="font-agency font-bold text-lg text-primary-900 dark:text-white">Alerts & Status</h3>
            <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-500/10 text-teal-700 dark:text-teal-400 text-xs font-semibold border border-teal-200 dark:border-teal-500/20">
                    <Check size={12} /> Operational
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 text-xs font-semibold border border-rose-200 dark:border-rose-500/20">
                    <AlertTriangle size={12} /> Downtime
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-semibold border border-cyan-200 dark:border-cyan-500/20">
                    <Info size={12} /> Beta Feature
                </span>
            </div>
        </div>

        {/* Inputs */}
        <div className="md:col-span-2 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 transition-colors">
             <h3 className="font-agency font-bold text-lg text-primary-900 dark:text-white mb-6">Form Elements</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-light-text dark:text-dark-muted">Project Name</label>
                    <input type="text" placeholder="e.g. Acme Corp Redesign" className="w-full px-4 py-2.5 bg-slate-50 dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md text-sm text-primary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-agency-500/20 focus:border-agency-500 transition-all placeholder:text-slate-400" />
                </div>
                 <div className="space-y-2">
                    <label className="text-sm font-semibold text-light-text dark:text-dark-muted">Service Type</label>
                    <div className="relative">
                        <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md text-sm text-primary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-agency-500/20 focus:border-agency-500 transition-all appearance-none">
                            <option>Web Development</option>
                            <option>Mobile App</option>
                            <option>Cloud Infrastructure</option>
                        </select>
                         <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-500">
                            <ChevronDown size={16} />
                        </div>
                    </div>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};