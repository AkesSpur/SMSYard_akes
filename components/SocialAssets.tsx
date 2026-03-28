import React from 'react';
import { SectionHeader } from './SectionHeader';
import { LogoMark } from './LogoMark';
import { LifeBuoy } from 'lucide-react';

export const SocialAssets: React.FC = () => {
  return (
    <section className="space-y-8">
      <SectionHeader title="Social & Support" subtitle="Profile Assets" id="social" />
      
      <p className="text-sm text-light-text dark:text-dark-muted max-w-2xl">
        Optimized avatars for Telegram customer support and social media profiles. 
        Designed to maintain legibility when cropped to a circle.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Support Avatar: Standard (White) */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 transition-colors">
            <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-white mb-4">Support (Standard)</h3>
            <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* Source Square */}
                <div className="w-32 h-32 bg-white border border-light-border shadow-sm flex flex-col items-center justify-center relative flex-shrink-0">
                    <div className="relative">
                        <LogoMark size={56} className="text-accent-600 mb-2" />
                        <div className="absolute -bottom-1 -right-3 bg-accent-600 text-white p-1 rounded-full border-2 border-white">
                            <LifeBuoy size={14} strokeWidth={2.5} />
                        </div>
                    </div>
                    <span className="absolute bottom-3 text-[10px] font-bold text-accent-600 tracking-wide">smsyard.com</span>
                </div>
                {/* Preview Circle */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg ring-4 ring-slate-100 dark:ring-slate-800 border border-slate-100 relative overflow-hidden">
                        <div className="relative translate-y-[-2px]">
                            <LogoMark size={42} className="text-accent-600" />
                            <div className="absolute -bottom-1 -right-2 bg-accent-600 text-white p-1 rounded-full border-2 border-white">
                                <LifeBuoy size={10} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Telegram Crop</span>
                </div>
            </div>
            <p className="text-xs text-light-text dark:text-dark-muted mt-6">
                <strong>Clean & Professional:</strong> White background with brand blue mark and support badge. Includes website URL in the full square frame.
            </p>
        </div>

        {/* Support Avatar: Dark Mode */}
        <div className="bg-white dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl p-8 transition-colors">
            <h3 className="font-display font-semibold text-lg text-primary-900 dark:text-white mb-4">Support (Dark/System)</h3>
            <div className="flex flex-col sm:flex-row items-center gap-8">
                {/* Source Square */}
                <div className="w-32 h-32 bg-primary-900 rounded-none shadow-sm flex items-center justify-center relative flex-shrink-0">
                    <div className="relative">
                        <LogoMark size={64} className="text-accent-500" />
                        <div className="absolute -bottom-1 -right-3 bg-accent-500 text-primary-900 p-1.5 rounded-full border-4 border-primary-900">
                            <LifeBuoy size={16} strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
                {/* Preview Circle */}
                <div className="flex flex-col items-center gap-2">
                    <div className="w-24 h-24 rounded-full bg-primary-900 flex items-center justify-center shadow-lg ring-4 ring-slate-100 dark:ring-slate-800 border border-slate-800">
                        <div className="relative">
                            <LogoMark size={48} className="text-accent-500" />
                            <div className="absolute -bottom-1 -right-2 bg-accent-500 text-primary-900 p-1 rounded-full border-2 border-primary-900">
                                <LifeBuoy size={12} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">Telegram Crop</span>
                </div>
            </div>
             <p className="text-xs text-light-text dark:text-dark-muted mt-6">
                <strong>Technical:</strong> Uses Dark Slate background with Blue accent and badge. High contrast for dark mode interfaces.
            </p>
        </div>

      </div>
    </section>
  );
};