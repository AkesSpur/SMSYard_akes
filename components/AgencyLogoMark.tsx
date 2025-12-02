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
      <path 
        d="M12 2L4 7V17L12 22L20 17V7L12 2Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M12 22V12" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path 
        d="M12 12L20 7" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path 
        d="M12 12L4 7" 
        stroke="currentColor" 
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};