import React from 'react';
import { AgencyLogoMark } from './AgencyLogoMark';
import { Link } from 'react-router-dom';

export const AgencyFooter: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-card border-t border-light-border dark:border-dark-border mt-24 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
                 <AgencyLogoMark size={20} className="text-agency-600 dark:text-agency-500" />
                <span className="font-agency font-bold text-primary-900 dark:text-white uppercase tracking-wide">Agency<span className="text-agency-600 dark:text-agency-500">Spur</span></span>
                <span className="text-light-text dark:text-dark-muted text-xs ml-2">© 2026</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-light-text dark:text-dark-muted uppercase tracking-wider">
                <Link to="/agencyspur" className="hover:text-agency-600 dark:hover:text-agency-500 transition-colors">Brand System</Link>
                <Link to="/agencyspur/policy" className="hover:text-agency-600 dark:hover:text-agency-500 transition-colors">Agency Policies</Link>
                <a href="#" className="hover:text-agency-600 dark:hover:text-agency-500 transition-colors">Client Portal</a>
                <a href="#" className="hover:text-agency-600 dark:hover:text-agency-500 transition-colors">Contact Support</a>
            </div>

            <div className="flex items-center gap-4">
                <span className="px-2 py-1 rounded border border-light-border dark:border-dark-border text-[10px] text-light-text dark:text-dark-muted font-bold uppercase tracking-widest">
                    Confidential
                </span>
            </div>
        </div>
    </footer>
  );
};
