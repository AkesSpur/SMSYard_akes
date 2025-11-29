import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  id?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="flex items-end justify-between border-b border-light-border dark:border-dark-border pb-4 scroll-mt-24 transition-colors duration-300">
      <h2 className="font-display font-semibold text-2xl tracking-tight text-primary-900 dark:text-white">{title}</h2>
      <span className="text-xs font-mono text-light-text dark:text-dark-muted">{subtitle}</span>
    </div>
  );
};