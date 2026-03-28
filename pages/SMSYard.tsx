import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { Header } from '../components/Header';
import { LogoSystem } from '../components/LogoSystem';
import { Typography } from '../components/Typography';
import { Colors } from '../components/Colors';
import { BrandAssets } from '../components/BrandAssets';
import { SocialAssets } from '../components/SocialAssets';
import { Illustrations } from '../components/Illustrations';
import { Icons } from '../components/Icons';
import { Favicons } from '../components/Favicons';
import { Footer } from '../components/Footer';
import { Toast } from '../components/Toast';
import { COLORS, THEME_TOKENS, BUTTON_TOKENS } from '../constants';
import { MessageSquare, Signal, Activity, Lock, Users, Zap } from 'lucide-react';
import { svgToPng } from '../App';

export const SMSYard: React.FC = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Default to light for SMSYard
      setTheme('light');
      document.documentElement.classList.remove('dark');
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

    // 1. Text Data
    const date = new Date().toLocaleDateString();
    let content = `SMSYard Brand System v2.0\nGenerated: ${date}\n\n`;
    COLORS.forEach(c => content += `${c.name}: ${c.hex}\n`);
    content += `\nTHEME TOKENS:\n`;
    THEME_TOKENS.forEach(t => content += `${t.token}: Light(${t.light.hex}) / Dark(${t.dark.hex})\n`);
    content += `\nBUTTON TOKENS:\n`;
    BUTTON_TOKENS.forEach(b => content += `${b.token}: Light(${b.light.hex}) / Dark(${b.dark.hex})\n`);
    zip.file("smsyard-brand-data.txt", content);

    // 2. Templates
    const templateContent = `
    <!-- Button Primary -->
    <button class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Action</button>
    
    <!-- Input Field -->
    <input type="text" class="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500" />
    
    <!-- Data Table -->
    <table class="w-full text-sm text-left">
      <thead class="bg-slate-50 dark:bg-slate-900 text-slate-500 font-medium">...</thead>
    </table>
    `;
    zip.folder("templates")?.file("ui-components.html", templateContent);

    // 3. Logo Generation
     const createLockupSvg = (textColor: string, accentColor: string, safetyMargin = false, scale = 1) => {
        const logoPath = "M12 2L22 19L12 15L2 19L12 2Z";
        const margin = safetyMargin ? 32 : 0;
        const width = (170 + margin * 2) * scale;
        const height = (32 + margin * 2) * scale;
        // Adjust viewBox to account for scale
        return {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width/scale} ${height/scale}" fill="none"><g transform="translate(${margin},${margin})"><path d="${logoPath}" fill="${accentColor}" transform="scale(1.333)"/><text x="44" y="25" font-family="sans-serif" font-weight="bold" font-size="28" fill="${textColor}">SMS<tspan fill="${accentColor}">Yard</tspan></text></g></svg>`,
            width, height
        };
    };
    
    const logosFolder = zip.folder("logos");
    const svgFolder = logosFolder?.folder("svg");
    const pngFolder = logosFolder?.folder("png");
    
    // Logo Variants
    const variants = [
        { name: 'logo-light-full', text: '#0F172A', accent: '#2563EB', safe: false },
        { name: 'logo-dark-full', text: '#FFFFFF', accent: '#3B82F6', safe: false }, // Dark mode accessible blue
        { name: 'logo-light-safe', text: '#0F172A', accent: '#2563EB', safe: true },
        { name: 'logo-dark-safe', text: '#FFFFFF', accent: '#3B82F6', safe: true },
    ];

    try {
        for (const v of variants) {
            // SVG
            const svgData = createLockupSvg(v.text, v.accent, v.safe, 1);
            svgFolder?.file(`${v.name}.svg`, svgData.svg);

            // PNG (Scale up 4x for quality)
            const pngData = createLockupSvg(v.text, v.accent, v.safe, 4);
            const pngBlob = await svgToPng(pngData.svg, pngData.width, pngData.height);
            pngFolder?.file(`${v.name}.png`, pngBlob);
        }

        // 4. Social / Support Profile Images (800x800)
        const socialFolder = zip.folder("social");
        const logoPath = "M12 2L22 19L12 15L2 19L12 2Z";
        const headsetPath = "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z M21 16v2a3 3 0 0 1-3 3h-5";
        
        // Support Standard (White BG, Blue Logo, URL, Headset Badge)
        const supportStandardSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" fill="none">
            <rect width="800" height="800" fill="#FFFFFF"/>
            <!-- Main Logo -->
            <g transform="translate(144, 100) scale(21.33)">
                <path d="${logoPath}" fill="#2563EB"/>
            </g>
            <!-- Badge Circle -->
            <circle cx="580" cy="520" r="100" fill="#2563EB" stroke="#FFFFFF" stroke-width="20" />
            <!-- Badge Icon (Headset) -->
            <g transform="translate(520, 460) scale(5)">
                 <path d="${headsetPath}" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <text x="400" y="740" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="64" fill="#2563EB">smsyard.com</text>
        </svg>`;
        const supportStandardBlob = await svgToPng(supportStandardSvg, 800, 800);
        socialFolder?.file("telegram-support-standard.png", supportStandardBlob);

        // Support Dark (Dark BG, Blue Logo, Headset Badge)
        const supportDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" fill="none">
            <rect width="800" height="800" fill="#020617"/>
            <g transform="translate(144, 144) scale(21.33)">
                <path d="${logoPath}" fill="#3B82F6"/>
            </g>
             <!-- Badge Circle -->
            <circle cx="580" cy="564" r="110" fill="#3B82F6" stroke="#020617" stroke-width="30" />
            <!-- Badge Icon (Headset) -->
            <g transform="translate(520, 504) scale(5)">
                 <path d="${headsetPath}" fill="none" stroke="#020617" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>`;
        const supportDarkBlob = await svgToPng(supportDarkSvg, 800, 800);
        socialFolder?.file("telegram-support-dark.png", supportDarkBlob);


        const blob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'smsyard-brand-kit-v2.zip';
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

  const smsIcons = [
    { name: 'message', icon: MessageSquare },
    { name: 'signal', icon: Signal },
    { name: 'activity', icon: Activity },
    { name: 'secure', icon: Lock },
    { name: 'audience', icon: Users },
    { name: 'instant', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-light-bgalt dark:bg-dark-bg text-primary-800 dark:text-dark-text transition-colors duration-300 font-sans">
      <Header onDownload={handleDownload} theme={theme} toggleTheme={toggleTheme} />
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-24">
        <section className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-accent-600 dark:text-blue-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-600 dark:bg-blue-400"></span>
            </span>
            New Brand Identity
          </div>
          <h1 className="font-display font-semibold text-5xl tracking-tight text-primary-900 dark:text-white mb-6">Brand Asset System</h1>
          <p className="text-xl text-light-text dark:text-dark-muted leading-relaxed font-normal">
            Visual identity guidelines for <strong className="text-primary-900 dark:text-white font-medium">SMSYard</strong> — the enterprise messaging infrastructure.
          </p>
        </section>

        <LogoSystem />
        <Typography />
        <Colors colors={COLORS} themeTokens={THEME_TOKENS} buttonTokens={BUTTON_TOKENS} />
        <BrandAssets />
        <SocialAssets />
        <Illustrations />
        <Icons icons={smsIcons} />
        <Favicons />
      </main>
      <Footer />
      <Toast visible={isToastVisible} />
    </div>
  );
};