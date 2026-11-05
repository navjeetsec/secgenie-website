import React from 'react';
import { ArrowRight } from 'lucide-react';
import favicon from '../../favicon.ico';

interface ReadyToTurnBannerProps {
  onScheduleDemo?: () => void;
  onExploreArchitecture?: () => void;
}

export const ReadyToTurnBanner: React.FC<ReadyToTurnBannerProps> = ({
  onScheduleDemo,
  onExploreArchitecture,
}) => {
  return (
    <section className="py-20 bg-[#f4f8fc] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white rounded-[40px] p-8 sm:p-14 lg:p-16 border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
          {/* Subtle decorative curved background shapes */}
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-cyan-100/40 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Yellow Accent Bar & Pill matching Screenshot 95 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-0.5 bg-amber-400 rounded-full" />
                <div className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-slate-700 bg-sky-50 border border-sky-200/80 uppercase">
                  TRANSFORM SECURITY OPERATIONS
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Ready to turn fragmented security signals into coordinated{' '}
                <span className="text-[#0066f5]">operational defense?</span>
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Connect your existing SIEM, EDR, and cloud posture tools to SecGenie AI in minutes.
                Experience autonomous Tier 1 triage and continuous exposure validation.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onScheduleDemo}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#0b1a32] hover:bg-[#112445] transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Book a Technical Demo</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>

                <button
                  onClick={onExploreArchitecture}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </div>

            {/* Connected security ecosystem hub */}
            <div className="lg:col-span-6 flex items-center justify-center relative py-6">
              <div className="relative w-full max-w-[500px] aspect-square">
                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 440 440" fill="none" aria-hidden="true">
                  <g stroke="#a5a3e8" strokeWidth="1.5" strokeDasharray="4 5">
                    <line x1="220" y1="220" x2="220" y2="58" />
                    <line x1="220" y1="220" x2="332" y2="108" />
                    <line x1="220" y1="220" x2="382" y2="220" />
                    <line x1="220" y1="220" x2="332" y2="332" />
                    <line x1="220" y1="220" x2="220" y2="382" />
                    <line x1="220" y1="220" x2="108" y2="332" />
                    <line x1="220" y1="220" x2="58" y2="220" />
                    <line x1="220" y1="220" x2="108" y2="108" />
                  </g>
                  <g fill="#7655f5">
                    <circle cx="220" cy="150" r="4" />
                    <circle cx="270" cy="170" r="4" />
                    <circle cx="290" cy="220" r="4" />
                    <circle cx="270" cy="270" r="4" />
                    <circle cx="220" cy="290" r="4" />
                    <circle cx="170" cy="270" r="4" />
                    <circle cx="150" cy="220" r="4" />
                    <circle cx="170" cy="170" r="4" />
                  </g>
                </svg>

                <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-indigo-100 bg-white shadow-[0_12px_30px_rgba(99,102,241,0.18)] sm:h-28 sm:w-28">
                  <img src={favicon} alt="SecGenie AI" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
                </div>

                <div className="absolute left-1/2 top-[13%] z-10 flex h-12 w-[82px] -translate-x-1/2 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)] sm:h-14 sm:w-[94px]">
                  <span className="text-sm font-black tracking-tight text-slate-700 sm:text-base">aws</span>
                  <svg className="absolute bottom-2 h-2 w-8" viewBox="0 0 40 8" fill="none" aria-hidden="true">
                    <path d="M3 2 Q20 9 37 2" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="absolute left-[76%] top-[25%] z-10 flex h-12 w-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 rounded-lg border border-slate-100 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)] sm:h-14 sm:w-[94px]">
                  <span className="text-blue-500">▲</span><span className="text-xs font-semibold text-slate-600">Azure</span>
                </div>
                <div className="absolute left-[87%] top-1/2 z-10 flex h-12 w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)] sm:h-14 sm:w-[78px]">
                  <div className="grid h-5 w-5 grid-cols-2 gap-0.5" aria-label="Microsoft">
                    <span className="bg-[#f25022]" /><span className="bg-[#7fba00]" /><span className="bg-[#00a4ef]" /><span className="bg-[#ffb900]" />
                  </div>
                </div>
                <div className="absolute left-[76%] top-[75%] z-10 flex h-12 w-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)] sm:h-14 sm:w-[94px]">
                  <span className="text-[9px] font-black tracking-tight text-slate-700 sm:text-[10px]">Elastic</span>
                  <span className="ml-1 h-5 w-5 rounded-full border-[3px] border-dashed border-slate-800" />
                </div>
                <div className="absolute left-1/2 top-[87%] z-10 flex h-12 w-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)] sm:h-14 sm:w-[94px]">
                  <span className="rounded bg-[#e6522c] px-1.5 py-1 text-[10px] font-black text-white">//</span>
                  <span className="ml-1 text-[10px] font-bold text-slate-700">Datadog</span>
                </div>
                <div className="absolute left-[24%] top-[75%] z-10 flex h-12 w-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)] sm:h-14 sm:w-[94px]">
                  <span className="mr-1 text-lg font-black text-[#4285f4]">G</span>
                  <span className="text-[9px] font-bold text-slate-600">Cloud</span>
                </div>
                <div className="absolute left-[13%] top-1/2 z-10 flex h-12 w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)] sm:h-14 sm:w-[78px]">
                  <span className="text-[8px] font-black tracking-tight text-red-600 sm:text-[9px]">CROWDSTRIKE</span>
                </div>
                <div className="absolute left-[24%] top-[25%] z-10 flex h-12 w-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-slate-100 bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)] sm:h-14 sm:w-[94px]">
                  <span className="text-xs font-black tracking-tight text-slate-800 sm:text-sm">splunk<span className="text-red-500">&gt;</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
