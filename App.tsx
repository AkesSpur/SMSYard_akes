import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SMSYard } from './pages/SMSYard';
import { AgencySpur } from './pages/AgencySpur';
import { Landing } from './pages/Landing';

// Export helper for use in pages
export const svgToPng = (svgString: string, width: number, height: number): Promise<Blob> => {
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

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/smsyard" element={<SMSYard />} />
        <Route path="/agencyspur" element={<AgencySpur />} />
        {/* Redirect unknown routes to Landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;