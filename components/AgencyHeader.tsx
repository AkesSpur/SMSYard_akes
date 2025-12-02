import React, { useState } from 'react';
import { AgencyLogoMark } from './AgencyLogoMark';
import { AGENCY_NAV_ITEMS } from '../agency-constants';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenuToggle } from './MobileMenuToggle';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onDownload: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const AgencyHeader: React.FC<HeaderProps> = ({ onDownload, theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-light-border dark:border-dark-border z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <div className="flex items-center gap-3 z-50">
          <AgencyLogoMark className="text-agency-600 dark:text-agency-500 transition-colors" />
          <span className="font-agency font-bold text-lg tracking-wide text-primary-900 dark:text-white uppercase">
            Agency<span className="text-agency-600 dark:text-agency-500 transition-colors">Spur</span>
          </span>
          <span className="ml-3 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-semibold uppercase tracking-wide hidden sm:inline-block">
            Design System
          </span>
        </div>
        
        {/* Desktop Navigation & Actions */}
        <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-8 text-sm font-medium text-light-text dark:text-dark-muted">
            {AGENCY_NAV_ITEMS.map((item) => (
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
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                <Link to="/" className="text-xs font-medium text-slate-500 hover:text-primary-900 dark:text-slate-400 dark:hover:text-white px-3">
                    Switch Brand
                </Link>
                <button 
                onClick={onDownload}
                className="bg-agency-600 dark:bg-agency-500 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-agency-700 dark:hover:bg-agency-400 hover:shadow-lg hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0 active:shadow-sm"
                >
                Download Kit
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
                {AGENCY_NAV_ITEMS.map((item, idx) => (
                    <a 
                        key={item.label} 
                        href={item.href} 
                        onClick={closeMobileMenu}
                        className={`text-primary-900 dark:text-white hover:text-agency-600 dark:hover:text-agency-500 transition-all transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
                        style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                        {item.label}
                    </a>
                ))}
                <div 
                    className={`mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 w-full flex justify-center flex-col gap-4 transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    style={{ transitionDelay: '300ms' }}
                >
                    <Link to="/" className="text-sm font-medium text-slate-500">Switch Brand</Link>
                    <button 
                        onClick={() => { onDownload(); closeMobileMenu(); }}
                        className="w-full bg-agency-600 dark:bg-agency-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                    >
                        Download Kit
                    </button>
                </div>
            </nav>
        </div>
      </div>
    </header>
  );
};