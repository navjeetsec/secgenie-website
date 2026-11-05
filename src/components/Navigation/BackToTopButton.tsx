import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (~450px threshold)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-[84px] right-6 z-30 w-11 h-11 rounded-full flex items-center justify-center bg-slate-900/90 hover:bg-[#0052cc] text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-300 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-md cursor-pointer transition-all duration-300 ease-out group ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-4 pointer-events-none scale-90'
      }`}
    >
      <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
      {/* Subtle indicator ring */}
      <span className="absolute inset-0 rounded-full border border-cyan-400/20 group-hover:border-cyan-400/60 transition-colors pointer-events-none" />
    </button>
  );
};
