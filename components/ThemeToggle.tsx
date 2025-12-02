import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg text-light-text dark:text-dark-muted hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-900 dark:hover:text-white transition-colors"
      aria-label="Toggle theme"
    >
      <div className={`absolute transition-all duration-500 ease-in-out transform ${theme === 'dark' ? 'rotate-[360deg] scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
        <Sun size={20} />
      </div>
      <div className={`absolute transition-all duration-500 ease-in-out transform ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}>
        <Moon size={20} />
      </div>
    </button>
  );
};