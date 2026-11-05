import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface PartnerCard {
  id: number;
  name: string;
  sub: string;
  logoType:
    | 'aws'
    | 'splunk'
    | 'crowdstrike'
    | 'sentinelone'
    | 'microsoft'
    | 'jira'
    | 'servicenow';
}

export const AllianceEcosystemSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const partners: PartnerCard[] = [
    {
      id: 0,
      name: 'SentinelOne',
      sub: 'EDR / XDR Integration',
      logoType: 'sentinelone',
    },
    {
      id: 1,
      name: 'Splunk Enterprise',
      sub: 'SIEM & Cloud Certified',
      logoType: 'splunk',
    },
    {
      id: 2,
      name: 'Amazon Web Services',
      sub: 'Advanced Tier Security',
      logoType: 'aws',
    },
    {
      id: 3,
      name: 'CrowdStrike',
      sub: 'Falcon XDR Certified',
      logoType: 'crowdstrike',
    },
    {
      id: 4,
      name: 'Microsoft Security',
      sub: 'Sentinel and Defender partnership',
      logoType: 'microsoft',
    },
    {
      id: 5,
      name: 'Jira',
      sub: 'Bi-directional issue synchronization',
      logoType: 'jira',
    },
    {
      id: 6,
      name: 'ServiceNow',
      sub: 'Bi-directional incident synchronization',
      logoType: 'servicenow',
    },
  ];

  const visiblePartners = Array.from({ length: Math.min(5, partners.length) }, (_, offset) =>
    partners[(activeIndex - 2 + offset + partners.length) % partners.length],
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, [activeIndex, isInView, partners.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? partners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === partners.length - 1 ? 0 : prev + 1));
  };

  const renderLogo = (type: PartnerCard['logoType'], isWhiteCard: boolean) => {
    switch (type) {
      case 'aws':
        return (
          <div className="mb-3 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <span
                  className={`text-2xl font-black tracking-tight ${
                    isWhiteCard ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  aws
                </span>
              </div>
              <svg className="w-12 h-2.5 -mt-0.5" viewBox="0 0 50 10" fill="none">
                <path
                  d="M 5,3 Q 25,10 45,3"
                  stroke={isWhiteCard ? '#FF9900' : '#FFAA00'}
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <path
                  d="M 40,2 L 46,3 L 42,7"
                  fill={isWhiteCard ? '#FF9900' : '#FFAA00'}
                />
              </svg>
            </div>
          </div>
        );
      case 'splunk':
        return (
          <div
            className={`flex items-center justify-center mb-3 ${
              isWhiteCard ? 'text-slate-900' : 'text-white'
            }`}
          >
            <span className="text-xl font-black tracking-tight font-sans">
              splunk<span className="text-red-500 font-extrabold">&gt;</span>
            </span>
          </div>
        );
      case 'crowdstrike':
        return (
          <div className="flex flex-col items-center justify-center mb-3">
            <svg
              className={`w-8 h-8 fill-current mb-1 ${
                isWhiteCard ? 'text-red-600' : 'text-white'
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2L9 9l7-2-5 6 9-2-7 7 10-1-9 5 9 1-13 1 2-5-4 2 2-4-5 1 3-3-5 1 3-3-5 1 2-3z" />
            </svg>
            <span
              className={`text-[10px] font-black tracking-widest uppercase font-sans ${
                isWhiteCard ? 'text-slate-900' : 'text-white'
              }`}
            >
              CROWDSTRIKE
            </span>
          </div>
        );
      case 'sentinelone':
        return (
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <svg
              className={`w-5 h-5 fill-current ${
                isWhiteCard ? 'text-purple-600' : 'text-purple-300'
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5l6 3.8v7.4l-6 3.8-6-3.8V8.3l6-3.8z" />
            </svg>
            <span
              className={`text-sm font-black tracking-tight font-sans ${
                isWhiteCard ? 'text-slate-900' : 'text-white'
              }`}
            >
              SentinelOne<sup className="text-[8px] font-normal">®</sup>
            </span>
          </div>
        );
      case 'microsoft':
        return (
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
              <div className="bg-[#f25022] w-1.5 h-1.5" />
              <div className="bg-[#7fba00] w-1.5 h-1.5" />
              <div className="bg-[#00a4ef] w-1.5 h-1.5" />
              <div className="bg-[#ffb900] w-1.5 h-1.5" />
            </div>
            <span
              className={`text-xs font-bold tracking-tight font-sans ${
                isWhiteCard ? 'text-slate-900' : 'text-white'
              }`}
            >
              Microsoft<br />
              <span
                className={`text-[10px] font-normal -mt-1 block ${
                  isWhiteCard ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                Security
              </span>
            </span>
          </div>
        );
      case 'jira':
        return (
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2684ff] text-lg font-black text-white">
              J
            </span>
            <span
              className={`text-xl font-black tracking-tight ${
                isWhiteCard ? 'text-[#1868db]' : 'text-white'
              }`}
            >
              Jira
            </span>
          </div>
        );
      case 'servicenow':
        return (
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#81b5a1] text-lg font-black text-white">
              S
            </span>
            <span
              className={`text-lg font-black tracking-tight ${
                isWhiteCard ? 'text-[#237a57]' : 'text-white'
              }`}
            >
              servicenow
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="alliance-ecosystem"
      className="relative py-24 bg-[#011419] text-white overflow-hidden"
    >
      {/* Background Cyber Glow & Fingerprint Padlock Watermark matching Screenshot 97 */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-25">
        <div className="w-[850px] h-[550px] bg-gradient-to-r from-teal-500/20 via-cyan-500/30 to-teal-600/20 rounded-full blur-[100px]" />
      </div>

      {/* Cyber Padlock Watermark silhouette in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-15 pointer-events-none z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-cyan-400 fill-none" strokeWidth="1.5">
          <rect x="25" y="45" width="50" height="42" rx="6" />
          <path d="M 35,45 V 30 A 15,15 0 0 1 65,30 V 45" />
          <circle cx="50" cy="62" r="4" fill="#38bdf8" />
          <path d="M 50,66 V 74" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Strategic Alliance
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Proven integrations including bi-directional sync with leading cybersecurity and operational platforms.
          </p>
        </div>

        {/* Five-card carousel keeps the active partner centered as the list grows. */}
        <div className="relative flex items-center justify-center max-w-6xl mx-auto">
          {/* Left Arrow Button matching Screenshot 97: black circle with thin white border */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:left-0 lg:-left-6 z-30 w-12 h-12 rounded-full bg-black/90 hover:bg-black border-2 border-white text-white flex items-center justify-center transition-all duration-200 shadow-2xl hover:scale-105 focus:outline-none cursor-pointer"
            aria-label="Previous partner"
          >
            <ArrowLeft className="w-5 h-5 text-white stroke-[2.5]" />
          </button>

          {/* Cards Row matching Screenshot 97 */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full py-8 px-6 sm:px-12 overflow-visible">
            {visiblePartners.map((item, position) => {
              const isActive = activeIndex === item.id;

              if (isActive) {
                return (
                  /* Center Active White Card matching Screenshot 97 */
                  <motion.div
                    key={item.id}
                    layout
                    transition={{
                      layout: {
                        duration: prefersReducedMotion ? 0 : 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    className="relative z-20 w-64 lg:w-72 p-8 sm:p-10 rounded-3xl bg-white text-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-105 transition-colors duration-200 ease-out flex flex-col items-center justify-center text-center min-h-[300px] border border-white"
                  >
                    {renderLogo(item.logoType, true)}

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-2 mb-1.5">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-slate-500">
                      {item.sub}
                    </p>

                    <div className="mt-4 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Alliance Co-Sell
                    </div>
                  </motion.div>
                );
              }

              return (
                /* Surrounding partner cards */
                <motion.div
                  key={item.id}
                  layout
                  transition={{
                    layout: {
                      duration: prefersReducedMotion ? 0 : 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  onClick={() => setActiveIndex(item.id)}
                  className={`${Math.abs(position - 2) === 2 ? 'hidden lg:flex' : 'hidden md:flex'} flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#032930]/80 hover:bg-[#053742] border border-[#064754] text-white w-40 lg:w-48 min-h-[250px] transition-colors duration-200 cursor-pointer shadow-lg hover:border-cyan-400/60 group`}
                >
                  {renderLogo(item.logoType, false)}

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-2 mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-300">
                    {item.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Arrow Button matching Screenshot 97: black circle with thin white border */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:right-0 lg:-right-6 z-30 w-12 h-12 rounded-full bg-black/90 hover:bg-black border-2 border-white text-white flex items-center justify-center transition-all duration-200 shadow-2xl hover:scale-105 focus:outline-none cursor-pointer"
            aria-label="Next partner"
          >
            <ArrowRight className="w-5 h-5 text-white stroke-[2.5]" />
          </button>
        </div>

        {/* Pagination indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-pressed={activeIndex === i}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i
                  ? 'w-8 bg-cyan-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Jump to partner ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
