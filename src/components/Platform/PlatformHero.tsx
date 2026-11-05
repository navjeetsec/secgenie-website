import React from "react";
import { ArrowRight } from "lucide-react";

interface PlatformHeroProps {
  onBookDemo: () => void;
}

export const PlatformHero: React.FC<PlatformHeroProps> = ({ onBookDemo }) => {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-slate-950 text-white lg:min-h-[90vh]">
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <img
          src="/assets/platform-cyber-shield.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center rounded-full border border-cyan-400/20 bg-slate-900/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-200 shadow-sm backdrop-blur-sm sm:text-xs">
          <span>AUTONOMOUS CYBER DEFENSE ARCHITECTURE</span>
        </div>

        <h1 className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          AI Autonomous Cyber Defense
          <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Platform
          </span>
        </h1>
        <p className="mb-8 max-w-3xl text-base font-normal leading-relaxed text-slate-200 sm:text-xl">
          A CTEM platform for threat exposure management and attack path
          analysis, paired with AI SOC automation to connect security context,
          support triage, and guide more focused response.
        </p>
        <button
          type="button"
          onClick={onBookDemo}
          className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Book a Technical Demo
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
