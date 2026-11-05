import React from 'react';
import { Building2, Mail, Phone, Lock, ArrowUp } from 'lucide-react';
import footprintBg from '../../assets/images/office_global_footprint_1793440972419.jpg';

interface GlobalFootprintSectionProps {
  onOpenBriefing?: () => void;
}

export const GlobalFootprintSection: React.FC<GlobalFootprintSectionProps> = ({
  onOpenBriefing,
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Outer Frame with Rounded Corners */}
        <div className="relative rounded-[36px] overflow-hidden min-h-[500px] flex items-end justify-center shadow-2xl bg-slate-950">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img
              src={footprintBg}
              alt="Global Footprint Background"
              className="w-full h-full object-cover object-center brightness-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

            {/* Glowing Cyber Lock Hologram Icon */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 backdrop-blur-md flex items-center justify-center text-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.6)] animate-pulse">
                <div className="relative">
                  <Lock className="w-8 h-8 text-cyan-400 stroke-[2.2]" />
                  <ArrowUp className="w-4 h-4 text-white absolute inset-0 m-auto stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>

          {/* Frosted Glass Overlay Card */}
          <div className="relative z-10 w-full mx-4 sm:mx-8 mb-6 sm:mb-8 rounded-[28px] bg-[#0c1a2e]/85 backdrop-blur-2xl border border-cyan-500/20 p-8 sm:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column: Locations & Hubs */}
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                    Locations &amp; Hubs
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    SecGenie Global Footprint
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  {/* <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-white">Corporate Headquarters:</p>
                      <p className="text-sm text-slate-300">Durham, North Carolina, USA</p>
                    </div>
                  </div> */}

                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-white">R&amp;D &amp; Engineering Hub:</p>
                      <p className="text-sm text-slate-300">Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Inquiries */}
              <div className="space-y-6 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-semibold tracking-wider text-cyan-400 uppercase">
                    Direct Inquiries
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    Get in Touch With Our Team
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <a
                      href="mailto:info@secgenie.ai"
                      className="text-sm text-slate-200 hover:text-cyan-300 transition-colors font-medium"
                    >
                      info@secgenie.ai
                    </a>
                  </div>

                 
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenBriefing}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                  >
                    Book a Executive Briefing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
