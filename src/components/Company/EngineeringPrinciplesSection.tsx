import React from 'react';
import threatMeshImg from '../../assets/images/cyber_threat_mesh_hero_1793428361251.jpg';

interface Principle {
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    title: 'DESIGNED FOR ANALYSTS',
    description:
      'We build tools that elevate security analysts, giving them superpowers rather than replacing human judgment with opaque algorithms.',
  },
  {
    title: 'EXPLAINABILITY OVER MAGIC',
    description:
      'Zero hallucination tolerance. Every AI triage finding and containment suggestion links directly to concrete telemetry evidence.',
  },
  {
    title: 'EASY ADOPTION',
    description:
      'We respect your existing investments. SecGenie integrates with the tools you already rely on through native APIs, without added friction.',
  },
  {
    title: 'CONTINUOUS DEFENSE',
    description:
      'Security is not a one time check. Our engines continuously monitor attack surface changes and posture drift around the clock.',
  },
];

export const EngineeringPrinciplesSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-32 bg-[#090d16] text-white overflow-hidden">
      {/* Background with network mesh */}
      <div className="absolute inset-0 z-0">
        <img
          src={threatMeshImg}
          alt="Engineering mesh background"
          className="w-full h-full object-cover opacity-25 mix-blend-screen scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16] via-[#090d16]/80 to-[#090d16]" />
        {/* Subtle red/crimson radial glow matching screenshot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider text-slate-300 bg-slate-800/80 border border-slate-700 uppercase mb-5 backdrop-blur-md">
            FOUNDATIONAL TENETS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Guiding Engineering Principles
          </h2>
        </div>

        {/* 4 White Elevated Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 text-center flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/10"
            >
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#0052cc] tracking-wide mb-6 uppercase leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-center">
                <span className="w-8 h-1 rounded-full bg-sky-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
