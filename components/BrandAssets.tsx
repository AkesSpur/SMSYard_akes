
import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ArrowRight, Check, AlertCircle, ChevronDown, MoreHorizontal } from 'lucide-react';

export const BrandAssets: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Brand Assets" subtitle="UI Components" id="assets" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Buttons */}
        <div className="space-y-6 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 transition-colors">
            <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-white">Buttons</h3>
            <div className="flex flex-wrap gap-4">
                <button className="px-4 py-2 bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-700 transition-colors shadow-sm shadow-accent-500/20">
                    Primary Action
                </button>
                <button className="px-4 py-2 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border text-primary-900 dark:text-white rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Secondary
                </button>
                <button className="px-4 py-2 text-accent-600 dark:text-accent-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors inline-flex items-center gap-2">
                    Text Link <ArrowRight size={16} />
                </button>
            </div>
        </div>

        {/* Badges & Status */}
        <div className="space-y-6 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 transition-colors">
            <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-white">Status Badges</h3>
            <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-500/20">
                    <Check size={12} /> Success
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 text-xs font-semibold border border-rose-200 dark:border-rose-500/20">
                    <AlertCircle size={12} /> Error
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold border border-amber-200 dark:border-amber-500/20">
                    Warning
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold border border-slate-200 dark:border-slate-700">
                    Neutral
                </span>
            </div>
        </div>

        {/* Form Inputs */}
        <div className="md:col-span-2 space-y-6 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 transition-colors">
            <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-white">Input Fields</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-light-text dark:text-dark-muted">Email Address</label>
                    <input type="text" placeholder="name@smsyard.com" className="w-full px-3 py-2 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-sm text-primary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all placeholder:text-slate-400" />
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-medium text-light-text dark:text-dark-muted">Region</label>
                    <div className="relative">
                        <select className="w-full px-3 py-2 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-lg text-sm text-primary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-all appearance-none">
                            <option>US East (N. Virginia)</option>
                            <option>EU West (Ireland)</option>
                            <option>Asia Pacific (Tokyo)</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-500">
                            <ChevronDown size={16} />
                        </div>
                    </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-light-text dark:text-dark-muted">API Key</label>
                    <div className="relative">
                        <input type="text" value="sk_live_51M..." readOnly className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800/50 border border-light-border dark:border-dark-border rounded-lg text-sm text-slate-500 dark:text-slate-400 font-mono" />
                        <div className="absolute inset-y-0 right-3 flex items-center">
                           <span className="text-[10px] uppercase font-bold text-slate-400">Read Only</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Data Table */}
        <div className="md:col-span-2 space-y-6 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 transition-colors">
            <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-white">Data Tables</h3>
            <div className="overflow-x-auto rounded-lg border border-light-border dark:border-dark-border">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 font-medium border-b border-light-border dark:border-dark-border">
                        <tr>
                            <th className="px-4 py-3">Message ID</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Recipient</th>
                            <th className="px-4 py-3 text-right">Cost</th>
                            <th className="px-4 py-3 text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-light-border dark:divide-dark-border bg-white dark:bg-dark-card text-primary-900 dark:text-white">
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-4 py-3 font-mono text-xs text-slate-500 dark:text-slate-400">msg_01H8X2...</td>
                            <td className="px-4 py-3">
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                                    Delivered
                                </span>
                            </td>
                            <td className="px-4 py-3">+1 (555) 123-4567</td>
                            <td className="px-4 py-3 text-right text-slate-500 dark:text-slate-400">$0.0075</td>
                            <td className="px-4 py-3 text-right">
                                <button className="text-slate-400 hover:text-primary-900 dark:hover:text-white transition-colors"><MoreHorizontal size={16} /></button>
                            </td>
                        </tr>
                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-4 py-3 font-mono text-xs text-slate-500 dark:text-slate-400">msg_01H8X3...</td>
                            <td className="px-4 py-3">
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-500/20">
                                    Failed
                                </span>
                            </td>
                            <td className="px-4 py-3">+1 (555) 987-6543</td>
                            <td className="px-4 py-3 text-right text-slate-500 dark:text-slate-400">$0.0000</td>
                            <td className="px-4 py-3 text-right">
                                <button className="text-slate-400 hover:text-primary-900 dark:hover:text-white transition-colors"><MoreHorizontal size={16} /></button>
                            </td>
                        </tr>
                         <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                            <td className="px-4 py-3 font-mono text-xs text-slate-500 dark:text-slate-400">msg_01H8X4...</td>
                             <td className="px-4 py-3">
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
                                    Queued
                                </span>
                            </td>
                            <td className="px-4 py-3">+44 7700 900077</td>
                            <td className="px-4 py-3 text-right text-slate-500 dark:text-slate-400">$0.0450</td>
                            <td className="px-4 py-3 text-right">
                                <button className="text-slate-400 hover:text-primary-900 dark:hover:text-white transition-colors"><MoreHorizontal size={16} /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

      </div>
    </section>
  );
};
