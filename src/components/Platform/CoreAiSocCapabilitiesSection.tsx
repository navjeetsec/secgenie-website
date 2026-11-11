import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldAlert, Sparkles, Laptop, Repeat } from 'lucide-react';
import { getImageAsset } from '../../assets/imageAssets';

export const CoreAiSocCapabilitiesSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const capabilities = [
    {
      id: 1,
      title: 'Alert Triage',
      titleColor: 'text-slate-900',
      desc: 'Automatically assess and prioritize alerts. Focus only on real threats',
      iconType: 'shield'
    },
    {
      id: 2,
      title: 'Automated Enrichment',
      titleColor: 'text-amber-500 font-bold',
      desc: 'Add context from across your environment. Investigate with clarity and confidence',
      hasBanner: true,
      bannerImg: getImageAsset('soc_analyst_command_center_1793428361794.jpg')
    },
    {
      id: 3,
      title: 'Investigation Support',
      titleColor: 'text-slate-900',
      desc: 'Connect events into a clear storyline. Understand risks and next steps fast',
      iconType: 'laptop'
    },
    {
      id: 4,
      title: 'Response Automation',
      titleColor: 'text-slate-900',
      desc: 'Automate actions with AI workflows. Respond faster while staying in control',
      iconType: 'repeat'
    }
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? capabilities.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === capabilities.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-100">
      {/* Background delicate polygon grid mesh */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block matching Screenshot 6 */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-cyan-100/70 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-5">
            CORE ENGINE 02
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-blue-600">Core</span> AISOC Capabilities
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
            Built for modern SOC environments
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            AISOC capabilities are designed to empower modern SOC environments with speed, intelligence, and precision.
          </p>
        </div>

        {/* 4 Cards Grid matching Screenshot 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {capabilities.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[300px] group"
            >
              <div>
                {item.hasBanner ? (
                  /* Banner Header for Card 2 matching Screenshot 6 */
                  <div className="rounded-2xl overflow-hidden h-24 mb-6 relative border border-slate-100 shadow-inner bg-slate-950">
                    <img
                      src={item.bannerImg}
                      alt="Automated Enrichment"
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
                  </div>
                ) : (
                  /* Dark Blue Rounded Square Icon matching Screenshot 6 */
                  <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-8 shadow-md">
                    {item.iconType === 'shield' && <ShieldAlert className="w-7 h-7" />}
                    {item.iconType === 'laptop' && <Laptop className="w-7 h-7" />}
                    {item.iconType === 'repeat' && <Repeat className="w-7 h-7" />}
                  </div>
                )}

                <h4 className={`text-lg sm:text-xl font-bold mb-3 ${item.titleColor}`}>
                  {item.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Arrow Controls matching Screenshot 6 */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-full border border-slate-700 text-white">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Previous capability"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="w-px h-4 bg-slate-700" />
            <button
              onClick={handleNext}
              className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Next capability"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
