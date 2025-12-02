import React from 'react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

export const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="p-2 md:hidden text-primary-900 dark:text-white focus:outline-none z-50 relative"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
        <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-out origin-left ${isOpen ? 'rotate-45 translate-x-px translate-y-px' : ''}`} />
        <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-out ${isOpen ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`} />
        <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-out origin-left ${isOpen ? '-rotate-45 translate-x-px -translate-y-px' : ''}`} />
      </div>
    </button>
  );
};