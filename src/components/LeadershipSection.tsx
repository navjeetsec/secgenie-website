import React from 'react';
import { ArrowRight, UserCog, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface LeadershipSectionProps {
  onOpenLeadership: () => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onOpenLeadership }) => {
  return (
    <section className="relative py-20 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Blue Gradient Card matching Screenshot 8 */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#061C38] via-[#05172E] to-[#030E1F] border border-blue-900/50 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Top-Left Gold Line Accent matching Screenshot 8 */}
          <div className="absolute top-10 left-12 w-28 h-0.5 bg-amber-400/90 shadow-sm" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-6 pt-4">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-700/50 text-[11px] sm:text-xs font-semibold tracking-wider text-cyan-300 uppercase">
                FOUNDED 2025 • DURHAM, NC & BENGALURU
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Built by Experienced Security Practitioners & AI Researchers
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Founded by <strong className="text-white font-bold">Dr. Om Prakash Mishra (CEO)</strong> and{' '}
                <strong className="text-white font-bold">Jaicind Santhibhavan (CTO)</strong>, SecGenie AI was built to solve the real operational bottlenecks of modern security operations: signal overload, fragmented tools, and alert fatigue.
              </p>

              <div>
                <button
                  onClick={onOpenLeadership}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors group focus:outline-none"
                >
                  <span>Read Founding Story & Leadership</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column: Two White Elevated Feature Cards matching Screenshot 8 */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              {/* Card 1: Core Engineers */}
              <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center w-full min-h-[140px] border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                  <UserCog className="w-7 h-7" />
                </div>
                <div className="text-sm font-extrabold tracking-wider uppercase text-slate-900">
                  CORE ENGINEERS
                </div>
              </div>

              {/* Security engineering focus */}
              <div className="bg-white text-slate-900 rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center w-full min-h-[140px] border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div className="text-sm font-extrabold tracking-wider uppercase text-slate-900">
                  SECURITY-FOCUSED ENGINEERING
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Pill Banner matching Screenshot 8 */}
          <div className="mt-12 pt-6 border-t border-blue-900/40">
            <div className="inline-block px-5 py-2.5 rounded-full bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 font-medium">
              SecGenie AI can integrate with your existing security stack, leveraging the tools you already have in place
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
