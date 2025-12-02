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
import { svgToPng } from '../App';

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

  const createAgencyLockupSvg = (textColor: string, accentColor: string, safetyMargin = false, scale = 1) => {
    // The "Stack" Logo Path
    const logoGroup = `
      <g fill="${accentColor}">
        <rect x="4" y="12" width="4" height="10" rx="1" />
        <rect x="10" y="7" width="4" height="15" rx="1" />
        <rect x="16" y="2" width="4" height="20" rx="1" />
      </g>
    `;

    // Google Font import for reliable rendering in some viewers, though outlines are better for production
    const fontStyle = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700&amp;display=swap');
        text { font-family: 'Outfit', sans-serif; font-weight: 700; letter-spacing: 0.05em; }
      </style>
    `;

    const margin = safetyMargin ? 32 : 0;
    // Dimensions
    const baseWidth = 260; 
    const baseHeight = 32;
    const width = (baseWidth + margin * 2) * scale;
    const height = (baseHeight + margin * 2) * scale;
    
    // ViewBox
    const viewBox = `0 0 ${width/scale} ${height/scale}`;

    return {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}" fill="none">
                ${fontStyle}
                <g transform="translate(${margin},${margin})">
                    <g transform="translate(0, 4) scale(1)">${logoGroup}</g>
                    <text x="32" y="24" font-size="24" fill="${textColor}">AGENCY<tspan fill="${accentColor}">SPUR</tspan></text>
                </g>
              </svg>`,
        width,
        height
    };
  };

  const handleDownload = async () => {
    setIsToastVisible(true);
    const zip = new JSZip();
    
    // 1. Generate text file
    let content = `AGENCYSPUR Brand System\nGenerated: ${new Date().toLocaleDateString()}\n\n`;
    content += `COLORS:\n`;
    AGENCY_COLORS.forEach(c => content += `${c.name}: ${c.hex}\n`);
    zip.file("agency-brand-data.txt", content);

    // 2. Generate Logos
    const logosFolder = zip.folder("logos");
    const svgFolder = logosFolder?.folder("svg");
    const pngFolder = logosFolder?.folder("png");

    const variants = [
        { name: 'agency-light-full', text: '#09090B', accent: '#7C3AED', safe: false },
        { name: 'agency-dark-full', text: '#FFFFFF', accent: '#8B5CF6', safe: false },
        { name: 'agency-light-safe', text: '#09090B', accent: '#7C3AED', safe: true },
        { name: 'agency-dark-safe', text: '#FFFFFF', accent: '#8B5CF6', safe: true },
    ];

    try {
        for (const v of variants) {
            // SVG
            const svgData = createAgencyLockupSvg(v.text, v.accent, v.safe, 1);
            svgFolder?.file(`${v.name}.svg`, svgData.svg);

            // PNG (High Res 4x)
            const pngData = createAgencyLockupSvg(v.text, v.accent, v.safe, 4);
            const pngBlob = await svgToPng(pngData.svg, pngData.width, pngData.height);
            pngFolder?.file(`${v.name}.png`, pngBlob);
        }

        // Mark Only (Stack Icon)
        const markSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g fill="#7C3AED">
                <rect x="4" y="12" width="4" height="10" rx="1" />
                <rect x="10" y="7" width="4" height="15" rx="1" />
                <rect x="16" y="2" width="4" height="20" rx="1" />
            </g>
        </svg>`;
        const markWhiteSvg = markSvg.replace('#7C3AED', '#FFFFFF');
        const markBlackSvg = markSvg.replace('#7C3AED', '#000000');

        svgFolder?.file('mark-violet.svg', markSvg);
        svgFolder?.file('mark-white.svg', markWhiteSvg);
        svgFolder?.file('mark-black.svg', markBlackSvg);
        
        // PNG Marks (Scale 10x for icon)
        const markPngBlob = await svgToPng(markSvg.replace('width="24" height="24"', 'width="240" height="240"'), 240, 240);
        pngFolder?.file('mark-violet.png', markPngBlob);

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