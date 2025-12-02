import React from 'react';

interface LogoMarkProps {
  className?: string;
  size?: number;
}

export const AgencyLogoMark: React.FC<LogoMarkProps> = ({ className = "text-agency-600", size = 24 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <rect x="4" y="12" width="4" height="10" rx="1" fill="currentColor" />
      <rect x="10" y="7" width="4" height="15" rx="1" fill="currentColor" />
      <rect x="16" y="2" width="4" height="20" rx="1" fill="currentColor" />
    </svg>
  );
};