import React from 'react';
import { LogoMark } from './LogoMark';
import { NAV_ITEMS } from '../constants';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onDownload: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDownload, theme, toggleTheme }) => {
  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-border dark:border-dark-border z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoMark className="text-accent-600 dark:text-accent-500 transition-colors" />
          <span className="font-display font-semibold text-lg tracking-tight text-primary-900 dark:text-white">
            SMS<span className="text-accent-600 dark:text-accent-500 transition-colors">Yard</span>
          </span>
          <span className="ml-3 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-semibold uppercase tracking-wide hidden sm:inline-block">
            v2.0 System
          </span>
        </div>
        
        <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-8 text-sm font-medium text-light-text dark:text-dark-muted">
            {NAV_ITEMS.map((item) => (
                <a 
                key={item.label} 
                href={item.href} 
                className="hover:text-primary-900 dark:hover:text-white transition-colors"
                >
                {item.label}
                </a>
            ))}
            </nav>
            
            <div className="flex items-center gap-3">
                <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-lg text-light-text dark:text-dark-muted hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-900 dark:hover:text-white transition-colors"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </button>
                
                <button 
                onClick={onDownload}
                className="bg-primary-900 dark:bg-white text-white dark:text-primary-900 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0 active:shadow-sm"
                >
                Download Assets
                </button>
            </div>
        </div>
      </div>
    </header>
  );
};