import React, { useState } from "react";
import {
  ArrowRight,
  Volume2,
  Zap,
  Network,
  BarChart3,
  ChevronRight,
  Activity,
  Shield,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { getImageAsset } from "../assets/imageAssets";
import { RevealItem } from "./Common/ScrollReveal";

interface HeroSectionProps {
  onBookDemo: () => void;
  onExplorePlatform: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBookDemo,
  onExplorePlatform,
}) => {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);

  const metricHighlights = [
    {
      id: 0,
      icon: Volume2,
      color: "bg-blue-600/20 text-blue-400 border-blue-500/30",
      title: "Reduced Alert Noise",
      desc: "Automatic deduplication and suppression using exposure context",
    },
    {
      id: 1,
      icon: Zap,
      color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      title: "Accelerated MTTR",
      desc: "Autonomous enrichment and playbooks you can launch with one click",
    },
    {
      id: 2,
      icon: Network,
      color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      title: "Attack Path Clarity",
      desc: "Graph analysis that finds the shortest route to critical assets",
    },
    {
      id: 3,
      icon: BarChart3,
      color: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      title: "SOC Efficiency Gain",

      desc: "Tier 1 triage handled by explainable AI agents",
    },
  ];

  return (
    <section className="relative min-h-[80vh] lg:min-h-[85vh] bg-slate-950 text-white flex flex-col justify-between overflow-hidden">
      {/* High-Tech Background Asset and Ambient Glow Mesh */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <img
          src={getImageAsset("cyber_threat_mesh_hero_1793428361251.jpg")}
          alt="Cyber Defense Network Mesh"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

      {/* Cybernetic Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 md:pt-12 pb-8 md:pb-10 text-center flex-1 flex flex-col items-center justify-center">
        {/* Live Status Pill Badge */}
        <RevealItem>
          <div
            aria-label="Enterprise cyber defense architecture"
            className="w-10 h-10 rounded-xl bg-slate-900/90 border border-cyan-400/30 text-cyan-300 flex items-center justify-center mb-4 sm:mb-5 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md"
          >
            <ShieldCheck className="w-5 h-5" />
          </div>
        </RevealItem>

        {/* Main Headline */}
        <RevealItem className="w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-5 leading-[1.15] max-w-4xl mx-auto">
            Risk Intelligence That Knows What Attackers Can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              Exploit
            </span>
          </h1>
        </RevealItem>

        <RevealItem className="w-full">
          <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-slate-100 max-w-2xl mx-auto mb-4 tracking-tight">
            Prioritise threats. Eliminate exposures. Reduce risk.
          </h2>
        </RevealItem>

        <RevealItem className="w-full">
          <div className="max-w-3xl mx-auto mb-6 sm:mb-8 space-y-2">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Unifies threat intelligence, security telemetry and exposure data
              to identify attack paths and prioritise risks by exploitability
              and business impact.
            </p>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              Streamlines investigation, remediation and response for measurable
              risk reduction.
            </p>
          </div>
        </RevealItem>

        {/* CTA Buttons */}
        <RevealItem className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
            <button
              onClick={onBookDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-cyan-400/40 hover:scale-102 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Book a Technical Demo</span>
              <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={onExplorePlatform}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/80 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 group backdrop-blur-sm cursor-pointer hover:scale-102"
            >
              <span>Explore Platform</span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </RevealItem>
      </div>

      {/* Bottom Value Props Banner with interactive tooltips on hover */}
      <div className="relative z-10 border-t border-slate-800/80 bg-slate-950/70 backdrop-blur-md py-4 sm:py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {metricHighlights.map((m) => {
              const Icon = m.icon;
              return (
                <RevealItem key={m.id}>
                  <div
                    onMouseEnter={() => setActiveMetric(m.id)}
                    onMouseLeave={() => setActiveMetric(null)}
                    className="flex items-center justify-center sm:justify-start gap-3 py-2 px-3 rounded-2xl hover:bg-slate-900/80 transition-all cursor-pointer group relative border border-transparent hover:border-slate-800"
                  >
                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${m.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors block">
                        {m.title}
                      </span>
                    </div>

                    {/* Micro Tooltip */}
                    {activeMetric === m.id && (
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-slate-300 text-[10px] px-3 py-1.5 rounded-lg border border-slate-700 shadow-xl whitespace-nowrap z-30 pointer-events-none animate-in fade-in slide-in-from-bottom-2">
                        {m.desc}
                      </div>
                    )}
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
