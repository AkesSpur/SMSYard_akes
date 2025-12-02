import React from 'react';
import { Link } from 'react-router-dom';
import { LogoMark } from '../components/LogoMark';
import { AgencyLogoMark } from '../components/AgencyLogoMark';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* SMSYard Card */}
        <Link to="/smsyard" className="group bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="h-40 flex items-center justify-center bg-blue-50 dark:bg-blue-900/10 rounded-xl mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors">
            <LogoMark size={64} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">SMSYard</h2>
          <p className="text-slate-500 dark:text-slate-400">Enterprise Messaging Infrastructure branding. Blue & Slate palette.</p>
        </Link>

        {/* AgencySpur Card */}
        <Link to="/agencyspur" className="group bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 hover:border-violet-500 dark:hover:border-violet-500 transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="h-40 flex items-center justify-center bg-violet-50 dark:bg-violet-900/10 rounded-xl mb-6 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/20 transition-colors">
            <AgencyLogoMark size={64} className="text-violet-600" />
          </div>
          <h2 className="text-2xl font-agency font-bold text-slate-900 dark:text-white mb-2">AGENCYSPUR</h2>
          <p className="text-slate-500 dark:text-slate-400">Software Development Agency branding. Violet & Teal palette.</p>
        </Link>

      </div>
    </div>
  );
};