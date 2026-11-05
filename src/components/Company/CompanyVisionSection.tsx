import React from 'react';
import { getImageAsset } from '../../assets/imageAssets';

export const CompanyVisionSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark Blue Container Card matching Screenshot 182632 */}
        <div className="rounded-3xl bg-[#030914] text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Visual with Frosted "OUR VISION" box */}
            <div className="lg:col-span-6 relative">
              <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl sm:aspect-[4/3] sm:min-h-0">
                <img
                  src={getImageAsset('laptop_hands_security_mesh_1793439823641.jpg')}
                  alt="SecGenie Vision Laptop"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40" />

                {/* Frosted "OUR VISION" Overlay Box matching Screenshot 182632 */}
                <div className="absolute inset-3 flex flex-col justify-center rounded-2xl border border-white/25 bg-slate-900/45 p-4 text-center shadow-[0_8px_32px_rgba(2,8,23,0.28)] backdrop-blur-xl ring-1 ring-white/10 sm:inset-x-6 sm:inset-y-8 sm:p-6">
                  <h3 className="mb-3 text-lg font-black uppercase tracking-wider text-white sm:text-2xl">
                    OUR VISION
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    A world where security teams operate with total visibility, proactive risk reduction, and autonomous response capabilities that consistently outpace adversary speed.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Foundation & Stats */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-[11px] sm:text-xs font-semibold tracking-wider text-slate-300 uppercase">
                ARCHITECTURAL FOUNDATION
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                To eliminate operational friction and alert fatigue in modern security operations by seamlessly unifying Exposure Intelligence and AI SOC Automation.
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Modern cybersecurity operators are overwhelmed. Expanding cloud perimeters, endless CVE backlogs, and thousands of fragmented alerts have created an epidemic of SOC burnout. SecGenie AI was founded in 2025 to solve this through explainable, deterministic AI and connected graph intelligence.
              </p>

              {/* Two White Stat Cards matching Screenshot 182632 */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white text-slate-900 rounded-2xl p-5 text-center shadow-md">
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                    Founded Year
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                    2025
                  </div>
                </div>

                <div className="bg-white text-slate-900 rounded-2xl p-5 text-center shadow-md">
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                    Engineers &amp; Researchers
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                    20+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
