import React from 'react';
import { ArrowRight } from 'lucide-react';

interface DeployCtaBannerProps {
  onOpenDemo?: () => void;
  onOpenContact?: () => void;
}

export const DeployCtaBanner: React.FC<DeployCtaBannerProps> = ({
  onOpenDemo,
  onOpenContact,
}) => {
  return (
    <section className="py-16 bg-[#eef7fc] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[36px] p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] border border-slate-200/60 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-slate-700 bg-sky-100/80 border border-sky-200/80 uppercase mb-6">
                ENTERPRISE CYBER DEFENSE ARCHITECTURE
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0066f5] tracking-tight leading-tight mb-6">
                Deploy Continuous Exposure Management &amp; AI SOC Automation
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Connect your existing SIEM, EDR, and cloud platforms via native REST APIs in under 15 minutes.
                Experience autonomous threat triage and attack path suppression.
              </p>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-900 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
              >
                Book a Technical Demo
                <ArrowRight className="w-4 h-4 text-slate-700" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#0b192e] hover:bg-[#0f233f] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Contact US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
