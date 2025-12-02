import React from 'react';
import { SectionHeader } from './SectionHeader';

export const AgencyIllustrations: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Patterns" subtitle="Visual Language" id="illustrations" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Code Blocks */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden flex flex-col transition-colors">
            <div className="h-48 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                <div className="font-mono text-xs text-agency-400 opacity-60 leading-relaxed p-4">
                    import &#123; Future &#125; from 'agency';<br/>
                    const build = async () =&gt; &#123;<br/>
                    &nbsp;&nbsp;await launch();<br/>
                    &#125;
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-agency-600 blur-[50px] opacity-30"></div>
            </div>
            <div className="p-6 border-t border-light-border dark:border-dark-border">
                <h3 className="font-agency font-bold text-primary-900 dark:text-white">Code Syntax</h3>
                <p className="text-xs text-light-text dark:text-dark-muted mt-2">Abstracted code snippets representing technical expertise.</p>
            </div>
        </div>

        {/* Isometric Grid */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden flex flex-col transition-colors">
            <div className="h-48 bg-white dark:bg-black relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#7c3aed 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.2 }}></div>
                <div className="w-16 h-16 border-2 border-agency-500 rotate-45 flex items-center justify-center">
                    <div className="w-8 h-8 bg-agency-600"></div>
                </div>
            </div>
            <div className="p-6 border-t border-light-border dark:border-dark-border">
                <h3 className="font-agency font-bold text-primary-900 dark:text-white">Structured Grid</h3>
                <p className="text-xs text-light-text dark:text-dark-muted mt-2">Geometric layouts representing stability and structure.</p>
            </div>
        </div>

        {/* Gradient Mesh */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl overflow-hidden flex flex-col transition-colors">
            <div className="h-48 bg-gradient-to-tr from-agency-700 via-agency-600 to-teal-500 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            </div>
            <div className="p-6 border-t border-light-border dark:border-dark-border">
                <h3 className="font-agency font-bold text-primary-900 dark:text-white">Aurora Gradient</h3>
                <p className="text-xs text-light-text dark:text-dark-muted mt-2">Fluid gradients blending Violet and Teal for modern appeal.</p>
            </div>
        </div>

      </div>
    </section>
  );
};