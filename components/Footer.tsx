import React from 'react';
import { LogoMark } from './LogoMark';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-card border-t border-light-border dark:border-dark-border mt-12 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                 <LogoMark size={16} />
                <span className="font-display font-bold text-primary-900 dark:text-white">SMSYard</span>
                <span className="text-light-text dark:text-dark-muted text-sm">© 2024</span>
            </div>
            <div className="flex gap-6 text-sm text-light-text dark:text-dark-muted">
                <a href="#" className="hover:text-primary-900 dark:hover:text-white transition-colors">Internal Wiki</a>
                <a href="#" className="hover:text-primary-900 dark:hover:text-white transition-colors">Figma UI Kit</a>
                <span className="opacity-50">Confidential</span>
            </div>
        </div>
    </footer>
  );
};