import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LogoSystem } from './components/LogoSystem';
import { Typography } from './components/Typography';
import { Colors } from './components/Colors';
import { BrandAssets } from './components/BrandAssets';
import { Illustrations } from './components/Illustrations';
import { Icons } from './components/Icons';
import { Favicons } from './components/Favicons';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { COLORS, THEME_TOKENS } from './constants';
import JSZip from 'jszip';

const App: React.FC = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const svgToPng = (svgString: string, width: number, height: number): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
  
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (blob) resolve(blob);
            else reject(new Error('Canvas to Blob failed'));
            URL.revokeObjectURL(url);
          }, 'image/png');
        } else {
          reject(new Error('Could not get canvas context'));
        }
      };
      img.onerror = (e) => {
          URL.revokeObjectURL(url);
          reject(e);
      }
      img.src = url;
    });
  };

  const handleDownload = async () => {
    setIsToastVisible(true);
    
    const zip = new JSZip();

    // 1. Generate Brand Assets File Content
    const date = new Date().toLocaleDateString();
    let content = `SMSYard Brand System v2.0\n`;
    content += `Generated: ${date}\n`;
    content += `==================================================\n\n`;
    
    content += `COLOR PALETTE (GLOBAL)\n`;
    content += `----------------------\n`;
    COLORS.forEach(color => {
      content += `${color.name.padEnd(12)} | ${color.hex.padEnd(8)} | ${color.tailwindClass.replace('bg-', '')} ${color.sub}\n`;
    });
    content += `\n`;

    content += `THEME TOKENS (SEMANTIC)\n`;
    content += `-----------------------\n`;
    THEME_TOKENS.forEach(item => {
        content += `${item.token.padEnd(16)} | Light: ${item.light.hex.padEnd(8)} (${item.light.label}) | Dark: ${item.dark.hex.padEnd(8)} (${item.dark.label})\n`;
    });
    content += `\n`;

    content += `TYPOGRAPHY SUMMARY\n`;
    content += `------------------\n`;
    content += `Headlines    | Manrope (Google Fonts)\n`;
    content += `Body/UI      | Inter (Google Fonts)\n`;
    content += `(See typography.txt for full details)\n\n`;

    content += `ICONOGRAPHY\n`;
    content += `-----------\n`;
    content += `Library      | Lucide React\n`;
    content += `Stroke Width | 1.5px\n\n`;

    content += `LOGO PATH (SVG)\n`;
    content += `---------------\n`;
    content += `d="M12 2L22 19L12 15L2 19L12 2Z"\n`;

    zip.file("smsyard-brand-data.txt", content);

    // 2. Generate Detailed Typography File
    const typographyContent = `SMSYard Typography System
=========================

1. Primary Font: Manrope
------------------------
Usage:       Headlines, Branding, Display
Source:      Google Fonts
URL:         https://fonts.google.com/specimen/Manrope
Weights:     
  - Semibold (600): Display text, Hero sections
  - Medium (500):   Section headers, Card titles

CSS Class:   font-display
Stack:       'Manrope', sans-serif


2. Secondary Font: Inter
------------------------
Usage:       Interface, Body Copy, Data Tables
Source:      Google Fonts
URL:         https://fonts.google.com/specimen/Inter
Weights:     
  - Medium (500):   Navigation, Buttons, Data points
  - Regular (400):  Body paragraphs, Supporting text

CSS Class:   font-sans
Stack:       'Inter', sans-serif
`;
    zip.file("typography.txt", typographyContent);

    // 3. Generate Icons Folder
    const iconsFolder = zip.folder("icons");
    const logosFolder = zip.folder("logos");
    const svgFolder = logosFolder?.folder("svg");
    const pngFolder = logosFolder?.folder("png");

    const createSvg = (innerContent: string, color = "currentColor") => `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
${innerContent}
</svg>`.trim();

    const logoPath = "M12 2L22 19L12 15L2 19L12 2Z";
    
    // Create Mark Only SVG helper
    const createMarkSvg = (color: string, scale = 1) => {
        const size = 24 * scale;
        return {
            svg: `
<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${logoPath}" fill="${color}" stroke="${color}" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`.trim(),
            width: size,
            height: size
        };
    };

    // Create Full Logo Lockup SVG helper
    const createLockupSvg = (textColor: string, accentColor: string, safetyMargin = false, scale = 1) => {
      const contentWidth = 170;
      const contentHeight = 32;
      
      const margin = safetyMargin ? 32 : 0;
      const baseWidth = contentWidth + (margin * 2);
      const baseHeight = contentHeight + (margin * 2);
      
      const width = baseWidth * scale;
      const height = baseHeight * scale;
      
      const transX = margin;
      const transY = margin;
      
      // We wrap the content in a group scaled by 'scale'
      // Note: Google Fonts might not render in Canvas/PNG export due to security/CORS.
      return {
        svg: `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${baseWidth} ${baseHeight}" fill="none">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700&amp;display=swap');
    .text { font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 28px; }
  </style>
  <g transform="translate(${transX}, ${transY})">
    <g transform="scale(1.333)">
      <path d="${logoPath}" fill="${accentColor}" stroke="${accentColor}" stroke-width="1.5" stroke-linejoin="round"/>
    </g>
    <text x="44" y="25" class="text" fill="${textColor}">SMS<tspan fill="${accentColor}">Yard</tspan></text>
  </g>
</svg>`.trim(),
        width,
        height
      };
    };

    // -- Generate SVGs --
    // Marks
    svgFolder?.file("mark-blue.svg", createMarkSvg("#2563EB").svg);
    svgFolder?.file("mark-white.svg", createMarkSvg("#FFFFFF").svg);
    svgFolder?.file("mark-black.svg", createMarkSvg("#000000").svg);
    // Lockups
    // Use Blue 600 (#2563EB) for Light Mode and Blue 500 (#3B82F6) for Dark Mode
    const blue600 = "#2563EB";
    const blue500 = "#3B82F6";

    svgFolder?.file("logo-light-full.svg", createLockupSvg("#020617", blue600, false).svg);
    svgFolder?.file("logo-dark-full.svg", createLockupSvg("#FFFFFF", blue500, false).svg);
    svgFolder?.file("logo-light-safe.svg", createLockupSvg("#020617", blue600, true).svg);
    svgFolder?.file("logo-dark-safe.svg", createLockupSvg("#FFFFFF", blue500, true).svg);

    // -- Generate PNGs (High Res - 10x scale for marks, 4x for full) --
    // We use a promise array to handle async blob generation
    const pngPromises: Promise<void>[] = [];
    
    const addPng = (filename: string, svgObj: {svg: string, width: number, height: number}) => {
        const p = svgToPng(svgObj.svg, svgObj.width, svgObj.height).then(blob => {
            pngFolder?.file(filename, blob);
        });
        pngPromises.push(p);
    };

    // Marks (Scale 20 -> 480px)
    addPng("mark-blue.png", createMarkSvg("#2563EB", 20));
    addPng("mark-white.png", createMarkSvg("#FFFFFF", 20));
    addPng("mark-black.png", createMarkSvg("#000000", 20));

    // Lockups (Scale 5 -> ~1000px width)
    addPng("logo-light-full.png", createLockupSvg("#020617", blue600, false, 5));
    addPng("logo-dark-full.png", createLockupSvg("#FFFFFF", blue500, false, 5));
    addPng("logo-light-safe.png", createLockupSvg("#020617", blue600, true, 5));
    addPng("logo-dark-safe.png", createLockupSvg("#FFFFFF", blue500, true, 5));


    // Add Lucide Icons (Hardcoded paths)
    const icons = [
      { name: 'message', content: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' },
      { name: 'signal', content: '<path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 20V4"/>' },
      { name: 'activity', content: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>' },
      { name: 'secure', content: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>' }, 
      { name: 'audience', content: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' }, 
      { name: 'instant', content: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>' }, 
    ];

    icons.forEach(icon => {
      iconsFolder?.file(`icon-${icon.name}.svg`, createSvg(icon.content));
    });

    // 4. Generate Zip and Download (Wait for PNGs)
    try {
        await Promise.all(pngPromises);
        const blob = await zip.generateAsync({ type: 'blob' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'smsyard-brand-kit-v2.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (e) {
        console.error("Download failed:", e);
        setIsToastVisible(false); // Hide toast on error if needed, but it auto-hides
    }
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isToastVisible) {
      timeout = setTimeout(() => {
        setIsToastVisible(false);
      }, 3500);
    }
    return () => clearTimeout(timeout);
  }, [isToastVisible]);

  return (
    <div className="min-h-screen bg-light-bgalt dark:bg-dark-bg text-primary-800 dark:text-dark-text transition-colors duration-300">
      <Header onDownload={handleDownload} theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-24">
        {/* Hero Section */}
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
            Our brand reflects precision, connectivity, and speed.
          </p>
        </section>

        <LogoSystem />
        <Typography />
        <Colors />
        <BrandAssets />
        <Illustrations />
        <Icons />
        <Favicons />
      </main>

      <Footer />
      <Toast visible={isToastVisible} />
    </div>
  );
};

export default App;