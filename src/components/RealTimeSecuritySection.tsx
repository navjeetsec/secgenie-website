import React from 'react';
import { Lock } from 'lucide-react';
import { getImageAsset } from '../assets/imageAssets';

export const RealTimeSecuritySection: React.FC = () => {
  // 7 Partner Logos matching Screenshot 100 in exact sequence
  const logos = [
    {
      id: 'fortinet',
      render: (
        <div className="flex items-center px-6 shrink-0">
          <span className="text-xl sm:text-2xl font-black tracking-widest text-[#da291c] font-sans">
            FORTINET.
          </span>
        </div>
      ),
    },
    {
      id: 'alienvault',
      render: (
        <div className="flex items-center gap-2 px-6 shrink-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#53902f] flex items-center justify-center text-white shadow-xs p-1">
            <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 13c-.83 0-1.5-.67-1.5-1.5S9.17 12 10 12s1.5.67 1.5 1.5S10.83 15 10 15zm4 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          </div>
          <span className="font-black text-[#53902f] tracking-wider text-xs sm:text-sm font-sans uppercase">
            ALIEN VAULT
          </span>
        </div>
      ),
    },
    {
      id: 'microsoft',
      render: (
        <div className="flex items-center gap-2.5 px-6 shrink-0">
          <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
            <div className="bg-[#f25022] w-2 h-2" />
            <div className="bg-[#7fba00] w-2 h-2" />
            <div className="bg-[#00a4ef] w-2 h-2" />
            <div className="bg-[#ffb900] w-2 h-2" />
          </div>
          <span className="font-semibold text-slate-700 text-lg sm:text-xl tracking-tight font-sans">
            Microsoft
          </span>
        </div>
      ),
    },
    {
      id: 'google',
      render: (
        <div className="flex items-center text-xl sm:text-2xl font-bold tracking-tight px-6 font-sans shrink-0">
          <span className="text-[#4285F4]">G</span>
          <span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>
          <span className="text-[#4285F4]">g</span>
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </div>
      ),
    },
    {
      id: 'azure',
      render: (
        <div className="flex items-center gap-2 px-6 shrink-0">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#0078D4] fill-current" viewBox="0 0 24 24">
            <path d="M12.9 2.5L5.7 15h4.6l5.3-9.5-2.7-3zm-2.1 13.7l-2.6 4.8h11.6l-5.6-4.8h-3.4z" />
          </svg>
          <span className="font-bold text-[#0078D4] text-xl sm:text-2xl tracking-tight font-sans">
            Azure
          </span>
        </div>
      ),
    },
    {
      id: 'manageengine',
      render: (
        <div className="flex items-center gap-0.5 px-6 font-sans shrink-0">
          <span className="font-bold text-slate-900 text-lg sm:text-xl">Manage</span>
          <span className="font-normal text-slate-900 text-lg sm:text-xl">Engine</span>
        </div>
      ),
    },
    {
      id: 'aws',
      render: (
        <div className="flex flex-col items-center px-6 shrink-0">
          <span className="text-xl sm:text-2xl font-black text-slate-900 leading-none">aws</span>
          <svg className="w-9 h-2 sm:w-10 sm:h-2.5 mt-0.5" viewBox="0 0 40 8" fill="none">
            <path d="M 4,2 Q 20,8 36,2" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 32,2 L 38,2 L 35,6.5" fill="#FF9900" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-10 mb-16 lg:mb-20">
          
          <div className="flex w-full justify-center">
            <div className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-950 aspect-[4/3] shadow-2xl transition-shadow duration-300 hover:shadow-cyan-500/10">
              <img
                src={getImageAsset('cyber_shield_hologram_1793428361136.jpg')}
                alt="Cyber Shield Hologram Interface"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="px-2 text-center sm:px-4">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f1f5f9] border border-slate-200/80 text-slate-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
              MULTIPLE LAYERS OF SECURITY INTELLIGENCE
            </div>

            {/* Main Headline - Bright Blue matching Screenshot 100 */}
            <h5 className="text-4xl sm:text-3xl lg:text-5xl xl:text-[34px] font-black tracking-tight leading-[1.12] mb-3 font-sans">
              Built for enterprise<br />
              security.
            </h5>

            {/* Descriptive Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
              SecGenie AI integrates with SIEM, EDR, XDR, Cloud platforms, Identity layers, Vulnerability scanners, Threat Intelligence feeds, Ticketing systems, Messaging tools, and DevSecOps environments. This allows security teams to preserve existing investments while gaining a more unified and actionable operating model.
            </p>
          </div>

          <div className="relative flex w-full justify-center">
            
            

            <div className="relative w-full max-w-[420px] overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-950 aspect-[4/3] shadow-2xl transition-shadow duration-300 hover:shadow-cyan-500/10">
              <img
                src={getImageAsset('soc_analyst_command_center_1793428361794.jpg')}
                alt="SOC Operations Analyst Command Room"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Continuous left-to-right partner logo strip */}
        <div className="relative overflow-hidden border-t border-slate-100/90 pt-10">
          <div role="group" aria-label="Integrated security platforms" className="w-full overflow-hidden">
            <div className="animate-marquee-right flex w-max items-center py-2">
              <div className="flex w-max shrink-0 items-center">
                {logos.map((logo) => (
                  <div key={logo.id}>{logo.render}</div>
                ))}
              </div>
              <div aria-hidden="true" className="flex w-max shrink-0 items-center">
                {logos.map((logo) => (
                  <div key={logo.id}>{logo.render}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
