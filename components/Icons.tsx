import React from 'react';
import { SectionHeader } from './SectionHeader';
import { IconItem } from '../types';

interface IconsProps {
  icons: IconItem[];
  colorClass?: string;
}

export const Icons: React.FC<IconsProps> = ({ icons, colorClass = "text-accent-600 dark:text-accent-500" }) => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Iconography" subtitle="Lucide (1.5px)" id="icons" />
      
      <p className="text-sm text-light-text dark:text-dark-muted max-w-2xl">
        Icons should use a 1.5px stroke width for consistency. Active states use brand color.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {icons.map(({ name, icon: Icon }) => (
          <div key={name} className="relative flex flex-col items-center justify-center gap-3 p-6 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl hover:border-accent-500 hover:shadow-sm transition-all group cursor-default overflow-hidden">
            <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:opacity-0 transition-opacity" strokeWidth={1.5} />
            
             {/* Re-rendering icon to apply class correctly */}
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <Icon className={`w-6 h-6 ${colorClass}`} strokeWidth={1.5} />
                <span className="text-[10px] font-mono text-light-text dark:text-dark-muted">{name}</span>
             </div>
             
            <span className="text-[10px] font-mono text-light-text dark:text-dark-muted group-hover:opacity-0 transition-opacity">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};