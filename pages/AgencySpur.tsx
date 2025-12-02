import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { AgencyHeader } from '../components/AgencyHeader';
import { AgencyLogoSystem } from '../components/AgencyLogoSystem';
import { AgencyTypography } from '../components/AgencyTypography';
import { Colors } from '../components/Colors';
import { AgencyBrandAssets } from '../components/AgencyBrandAssets';
import { AgencyIllustrations } from '../components/AgencyIllustrations';
import { Icons } from '../components/Icons';
import { Footer } from '../components/Footer';
import { Toast } from '../components/Toast';
import { AGENCY_COLORS, AGENCY_THEME_TOKENS, AGENCY_BUTTON_TOKENS } from '../agency-constants';
import { Cpu, Code, Database, Globe, Layers, Command } from 'lucide-react';

export const AgencySpur: React.FC = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleDownload = async () => {
    setIsToastVisible(true);
    const zip = new JSZip();
    
    // Generate text file
    let content = `AGENCYSPUR Brand System\nGenerated: ${new Date().toLocaleDateString()}\n\n`;
    AGENCY_COLORS.forEach(c => content += `${c.name}: ${c.hex}\n`);
    zip.file("agency-brand-data.txt", content);
    
    // (Add specific download logic for AgencySpur here if needed)

    try {
        const blob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'agencyspur-kit.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (e) { console.error(e); }
  };

  useEffect(() => {
    if (isToastVisible) {
      const t = setTimeout(() => setIsToastVisible(false), 3000);
      return () => clearTimeout(t);
    }
  }, [isToastVisible]);

  const agencyIcons = [
    { name: 'systems', icon: Cpu },
    { name: 'develop', icon: Code },
    { name: 'data', icon: Database },
    { name: 'global', icon: Globe },
    { name: 'stack', icon: Layers },
    { name: 'command', icon: Command },
  ];

  return (
    <div className="min-h-screen bg-light-bgalt dark:bg-dark-bg text-primary-800 dark:text-dark-text transition-colors duration-300 font-sans">
      <AgencyHeader onDownload={handleDownload} theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-24">
        
        {/* Hero */}
        <section className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agency-50 dark:bg-agency-900/30 border border-agency-100 dark:border-agency-800 text-agency-600 dark:text-agency-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agency-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-agency-600 dark:bg-agency-400"></span>
            </span>
            v1.0 Release
          </div>
          <h1 className="font-agency font-bold text-5xl tracking-wide text-primary-900 dark:text-white mb-6 uppercase">
            AGENCY<span className="text-agency-600 dark:text-agency-500">SPUR</span>
          </h1>
          <p className="text-xl text-light-text dark:text-dark-muted leading-relaxed font-normal max-w-2xl">
            Software Development Agency. We build scalable, modern digital products. The brand system reflects technical precision and future-forward thinking.
          </p>
        </section>

        <AgencyLogoSystem />
        <AgencyTypography />
        <Colors colors={AGENCY_COLORS} themeTokens={AGENCY_THEME_TOKENS} buttonTokens={AGENCY_BUTTON_TOKENS} />
        <AgencyBrandAssets />
        <AgencyIllustrations />
        <Icons icons={agencyIcons} colorClass="text-agency-600 dark:text-agency-500" />
      </main>
      <Footer />
      <Toast visible={isToastVisible} />
    </div>
  );
};