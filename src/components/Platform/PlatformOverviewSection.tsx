import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getImageAsset } from '../../assets/imageAssets';

interface PlatformOverviewSectionProps {
  onSelectEngine: (engine: string) => void;
}

export const PlatformOverviewSection: React.FC<PlatformOverviewSectionProps> = ({ onSelectEngine }) => {
  const cards = [
    {
      id: 'exposure',
      title: 'Exposure Intelligence Engine',
      type: 'image',
      image: getImageAsset('cyber_analyst_circular_hud_1793439821973.jpg'),
      label: 'Exposure Intelligence Engine',
      desc: 'Discover and prioritize real risks by connecting vulnerabilities with network reachability, identities, and critical assets.',
      sectionId: 'exposure-engine'
    },
    {
      id: 'aisoc',
      title: 'AI SOC Automation Engine',
      type: 'image',
      image: getImageAsset('ai_chip_security_laptop_1793439823484.jpg'),
      label: 'AI SOC Automation Engine',
      desc: 'Turn raw security alerts into enriched investigations and coordinated response with SOC workflows powered by AI.',
      sectionId: 'aisoc-engine'
    },
    {
      id: 'exposure-prioritization',
      title: 'Exposure Intelligence Engine',
      type: 'image',
      image: getImageAsset('laptop_hands_security_mesh_1793439823641.jpg'),
      desc: 'Connects vulnerabilities with network reachability, identities, and critical assets to identify and prioritize actionable risks.',
      sectionId: 'exposure-engine'
    }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-white text-slate-900 overflow-hidden">
      {/* Subtle top watermark shield decoration matching Screenshot 3 */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-cyan-500 fill-none">
          <circle cx="50" cy="50" r="45" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="50" cy="50" r="30" strokeWidth="1" />
          <path d="M 50,20 L 70,30 L 70,55 Q 50,80 50,80 Q 30,55 30,30 Z" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block matching Screenshot 3 */}
        <div className="text-center max-w-4xl mx-auto mb-12">
         

          <div className="inline-flex items-center px-6 py-2 rounded-full bg-cyan-100/70 border border-cyan-200 text-cyan-950 font-bold text-sm tracking-wide">
            Platform Overview
          </div>
        </div>

        {/* 3-Card Showcase Carousel matching Screenshot 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch max-w-6xl mx-auto">
          {/* Card 1: Exposure Intelligence Engine */}
          <div
            onClick={() => scrollTo('exposure-engine')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[360px] relative"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={getImageAsset('cyber_analyst_circular_hud_1793439821973.jpg')}
                alt="Exposure Intelligence Engine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/75 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="max-w-sm text-center text-sm leading-relaxed text-white">
                  {cards[0].desc}
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-950 text-white flex items-center justify-between border-t border-slate-800">
              <span className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                Exposure Intelligence Engine
              </span>
              <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-white group-hover:border-cyan-400 group-hover:text-cyan-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 2: AI SOC Automation Engine */}
          <div
            onClick={() => scrollTo('aisoc-engine')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[360px] relative"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={getImageAsset('ai_chip_security_laptop_1793439823484.jpg')}
                alt="AI SOC Automation Engine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/75 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="max-w-sm text-center text-sm leading-relaxed text-white">
                  {cards[1].desc}
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-950 text-white flex items-center justify-between border-t border-slate-800">
              <span className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                AI SOC Automation Engine
              </span>
              <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-white group-hover:border-cyan-400 group-hover:text-cyan-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Card 3: Exposure Intelligence Engine */}
          <div
            onClick={() => scrollTo('exposure-engine')}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between min-h-[360px] relative"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={cards[2].image}
                alt="Exposure Intelligence Engine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/75 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="max-w-sm text-center text-sm leading-relaxed text-white">
                  {cards[2].desc}
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-950 text-white flex items-center justify-between border-t border-slate-800">
              <span className="font-bold text-sm text-white group-hover:text-cyan-400 transition-colors">
                Exposure Intelligence Engine
              </span>
              <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-white group-hover:border-cyan-400 group-hover:text-cyan-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
};
