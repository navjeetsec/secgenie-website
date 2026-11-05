import React from 'react';

interface SectionDividerProps {
  variant?: 'cyan' | 'blue' | 'light' | 'dark' | 'glow';
  className?: string;
  withDot?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'cyan',
  className = '',
  withDot = true,
}) => {
  const getGradientClasses = () => {
    switch (variant) {
      case 'cyan':
        return 'from-transparent via-cyan-500/35 to-transparent';
      case 'blue':
        return 'from-transparent via-blue-500/30 to-transparent';
      case 'light':
        return 'from-transparent via-slate-300/60 to-transparent';
      case 'dark':
        return 'from-transparent via-slate-700/60 to-transparent';
      case 'glow':
        return 'from-transparent via-cyan-400/50 to-transparent';
      default:
        return 'from-transparent via-cyan-500/35 to-transparent';
    }
  };

  const getDotClasses = () => {
    switch (variant) {
      case 'cyan':
      case 'glow':
        return 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]';
      case 'blue':
        return 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]';
      case 'light':
        return 'bg-slate-300';
      case 'dark':
        return 'bg-slate-600';
      default:
        return 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]';
    }
  };

  return (
    <div className={`relative w-full flex items-center justify-center py-1 overflow-hidden pointer-events-none ${className}`}>
      {/* 1px Gradient Line */}
      <div className={`h-px w-full bg-gradient-to-r ${getGradientClasses()}`} />

      {/* Subtle center anchor dot */}
      {withDot && (
        <div className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full flex items-center justify-center">
          <div className={`w-1.5 h-1.5 rounded-full ${getDotClasses()}`} />
        </div>
      )}
    </div>
  );
};
