import React from 'react';
import { Cloud, HeartPulse, Landmark, ShieldCheck } from 'lucide-react';

export const TrustedLeadersSection: React.FC = () => {
  const industries = [
    {
      id: 1,
      sector: 'FINANCIAL SERVICES',
      icon: Landmark,
      focus: 'Prioritize exposures affecting critical services and sensitive systems.',
    },
    {
      id: 2,
      sector: 'ENTERPRISE SAAS & CLOUD',
      icon: Cloud,
      focus: 'Connect cloud, identity, and application context to security findings.',
    },
    {
      id: 3,
      sector: 'MANAGED SECURITY PROVIDER',
      icon: ShieldCheck,
      focus: 'Support repeatable triage and exposure review across customer environments.',
    },
    {
      id: 4,
      sector: 'HEALTHCARE & LIFE SCIENCES',
      icon: HeartPulse,
      focus: 'Assess exposure paths to sensitive services and critical workloads.',
    }
  ];

  return (
    <section id="trusted-leaders" className="relative py-24 bg-white text-slate-900 overflow-hidden">
      {/* Delicate Globe Watermark Line SVGs on Left & Right matching Screenshot 7 */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-blue-600 fill-none">
          <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="3 3" />
          <ellipse cx="100" cy="100" rx="90" ry="35" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="35" ry="90" strokeWidth="1" />
          <circle cx="100" cy="100" r="50" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-cyan-600 fill-none">
          <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="3 3" />
          <ellipse cx="100" cy="100" rx="90" ry="35" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="35" ry="90" strokeWidth="1" />
          <circle cx="100" cy="100" r="50" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-cyan-600" />
            TRUSTED ALLIANCES
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-blue-600">Built</span> for Security Teams Across Industries
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            SecGenie is designed for security teams managing complex environments, varied security tools, and continuous exposure priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl mx-auto">
            {industries.map((item) => {
              const IndustryIcon = item.icon;
              return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_40px_rgba(8,145,178,0.14)]"
              >
                <div aria-hidden="true" className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-gradient-to-bl from-cyan-50 to-transparent transition-colors group-hover:from-cyan-100/80" />
                <div>
                  <div className="relative mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 text-cyan-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <IndustryIcon className="h-6 w-6" />
                    </div>
                  </div>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-4">
                      {item.sector}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.focus}
                    </p>
                </div>
              </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
