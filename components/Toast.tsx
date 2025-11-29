import React from 'react';
import { Download } from 'lucide-react';

interface ToastProps {
  visible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ visible }) => {
  return (
    <div 
      className={`fixed bottom-6 right-6 bg-primary-900 text-white pl-3 pr-4 py-3 rounded-lg shadow-xl shadow-slate-900/10 text-sm font-medium transform transition-all duration-500 flex items-center gap-3 z-50 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <div className="bg-white/10 p-1 rounded-full">
        <Download className="w-3.5 h-3.5 text-white" />
      </div>
      <div>
        <p className="font-semibold text-white">Downloading Assets</p>
        <p className="text-xs text-slate-400">smsyard-brand-kit-v2.zip</p>
      </div>
    </div>
  );
};