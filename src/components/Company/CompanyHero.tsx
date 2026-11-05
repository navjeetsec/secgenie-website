import React from 'react';
import { getImageAsset } from '../../assets/imageAssets';

export const CompanyHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[75vh] bg-slate-950 text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Background Tablet Cyber Network Image matching Screenshot 182620 */}
      <div className="absolute inset-0 z-0 opacity-35 mix-blend-screen pointer-events-none">
        <img
          src={getImageAsset('tablet_hands_cyber_network_1793440972108.jpg')}
          alt="SecGenie Team Cyber Defense Tablet"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center">
        {/* Pill Badge matching Screenshot 182620 */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900/85 border border-slate-700/80 text-[11px] sm:text-xs font-semibold tracking-wider text-slate-300 uppercase mb-8 shadow-sm backdrop-blur-sm">
          <span>THE PEOPLE & THE MISSION</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          About SecGenie{' '}
  <span className="ml-3 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
            AI
          </span>
        </h1>

        {/* Description matching Screenshot 182620 */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Pioneering autonomous cyber defense architectures to help modern security teams outpace adversary speed and eliminate alert noise.
        </p>
      </div>
    </section>
  );
};
