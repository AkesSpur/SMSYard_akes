import React from 'react';
import { MessageSquare, Signal, Activity, Lock, Users, Zap } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const ICONS = [
  { name: 'message', icon: MessageSquare },
  { name: 'signal', icon: Signal },
  { name: 'activity', icon: Activity },
  { name: 'secure', icon: Lock },
  { name: 'audience', icon: Users },
  { name: 'instant', icon: Zap },
];

export const Icons: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Iconography" subtitle="Lucide (1.5px)" id="icons" />
      
      <p className="text-sm text-light-text dark:text-dark-muted max-w-2xl">
        Icons should use a 1.5px stroke width for consistency. Active states use brand color.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {ICONS.map(({ name, icon: Icon }) => (
          <div key={name} className="flex flex-col items-center justify-center gap-3 p-6 bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl hover:border-accent-500 hover:shadow-sm transition-all group cursor-default">
            <Icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-accent-600 dark:group-hover:text-accent-500 transition-colors" strokeWidth={1.5} />
            <span className="text-[10px] font-mono text-light-text dark:text-dark-muted">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};