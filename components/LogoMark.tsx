import React from 'react';

interface LogoMarkProps {
  className?: string;
  size?: number;
}

export const LogoMark: React.FC<LogoMarkProps> = ({ className = "text-accent-600", size = 24 }) => {
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
        d="M12 2L22 19L12 15L2 19L12 2Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinejoin="round"
      />
    </svg>
  );
};