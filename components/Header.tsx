import React, { useState } from 'react';
import { LogoMark } from './LogoMark';
import { NAV_ITEMS } from '../constants';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenuToggle } from './MobileMenuToggle';

interface HeaderProps {
  onDownload: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDownload, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-border dark:border-dark-border z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <div className="flex items-center gap-3 z-50">
          <LogoMark className="text-accent-600 dark:text-accent-500 transition-colors" />
          <span className="font-display font-semibold text-lg tracking-tight text-primary-900 dark:text-white">
            SMS<span className="text-accent-600 dark:text-accent-500 transition-colors">Yard</span>
          </span>
          <span className="ml-3 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-semibold uppercase tracking-wide hidden sm:inline-block">
            v2.0 System
          </span>
        </div>
        
        {/* Desktop Navigation & Actions */}
        <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-8 text-sm font-medium text-light-text dark:text-dark-muted">
            {NAV_ITEMS.map((item) => (
                <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="hover:text-primary-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                {item.label}
                </a>
            ))}
            </nav>
            
            <div className="flex items-center gap-3">
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                
                <button 
                onClick={onDownload}
                className="bg-primary-900 dark:bg-white text-white dark:text-primary-900 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0 active:shadow-sm"
                >
                Download Assets
                </button>
            </div>
        </div>

        {/* Mobile Toggle & Theme (Visible on Mobile) */}
        <div className="flex items-center gap-4 md:hidden z-50">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <MobileMenuToggle isOpen={isMobileMenuOpen} toggle={toggleMobileMenu} />
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
            className={`fixed inset-0 bg-white dark:bg-dark-bg pt-24 px-6 md:hidden transition-all duration-300 ease-in-out z-40 ${
                isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
        >
            <nav className="flex flex-col gap-6 text-lg font-medium text-center">
                {NAV_ITEMS.map((item, idx) => (
                    <a 
                        key={item.label} 
                        href={item.href} 
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`text-primary-900 dark:text-white hover:text-accent-600 dark:hover:text-accent-500 transition-all transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                        {item.label}
                    </a>
                ))}
                <div 
                    className={`mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 w-full flex justify-center transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: '300ms' }}
                >
                    <button 
                        onClick={() => { onDownload(); closeMobileMenu(); }}
                        className="w-full max-w-xs bg-primary-900 dark:bg-white text-white dark:text-primary-900 px-6 py-3 rounded-xl font-semibold shadow-lg"
                    >
                        Download Assets
                    </button>
                </div>
            </nav>
        </div>
      </div>
    </header>
  );
};