import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { NavPage } from './Navbar';
import Logo1 from '../assets/logo1.png';

interface FooterProps {
  onNavigate?: (page: NavPage) => void;
  onSelectSolutionTab: (tab: 'alert-fatigue' | 'attack-surface') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectSolutionTab,
}) => {
  const navigateModule = (event: React.MouseEvent<HTMLAnchorElement>, page: NavPage) => {
    if (onNavigate) {
      event.preventDefault();
      onNavigate(page);
    }
  };

  const navigateToPlatformSection = (sectionId?: string) => {
    onNavigate?.('platform');
    window.setTimeout(() => {
      if (!sectionId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-900 bg-[#020713] pt-14 pb-8 text-white sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 border-b border-slate-900 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand & Info Column */}
          <div className="space-y-5">
            <button 
              onClick={() => {
                if (onNavigate) onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none cursor-pointer text-left"
            >
              <img src={Logo1} alt="SecGenie AI Logo" className="h-10 w-auto" />
            </button>

            <p className="text-sm text-slate-400 leading-relaxed">
              SecGenie AI unifies Exposure Intelligence and AI SOC Automation into a continuous cyber defense architecture. Built for enterprises, growing technology companies, and MSSPs.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <a 
                href="mailto:info@secgenie.ai" 
                className="flex items-center gap-2.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>info@secgenie.ai</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>

          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-xs font-black uppercase tracking-widest text-white">PLATFORM</h4>
              <div className="w-8 h-0.5 bg-cyan-400 rounded-full" />
            </div>
            <ul className="space-y-3 text-sm font-semibold text-slate-400">
              <li>
                <button onClick={() => navigateToPlatformSection()} className="text-left transition-colors hover:text-white">
                  Platform Overview
                </button>
              </li>
              <li>
                <a href="/exposure-intelligence" onClick={(event) => navigateModule(event, 'exposure-intelligence')} className="text-left transition-colors hover:text-white">
                  Exposure Intelligence
                </a>
              </li>
              <li>
                <a href="/ai-soc-automation" onClick={(event) => navigateModule(event, 'ai-soc-automation')} className="text-left transition-colors hover:text-white">
                  AI SOC Automation
                </a>
              </li>
              <li>
                <a href="/ctem-platform" onClick={(event) => navigateModule(event, 'ctem-platform')} className="text-left transition-colors hover:text-white">
                  CTEM Framework
                </a>
              </li>
              <li>
                <button onClick={() => onNavigate?.('integration')} className="text-left transition-colors hover:text-white">
                  Integrations
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-xs font-black tracking-widest uppercase text-white">SOLUTIONS</h4>
              <div className="w-8 h-0.5 bg-blue-500 rounded-full" />
            </div>
            <ul className="space-y-3 text-sm font-semibold text-slate-400">
              <li>
                <button onClick={() => {
                  onSelectSolutionTab('alert-fatigue');
                  onNavigate?.('solutions');
                }} className="text-left transition-colors hover:text-white">
                  Alert Fatigue Suppression
                </button>
              </li>
              <li>
                <button onClick={() => {
                  onSelectSolutionTab('attack-surface');
                  onNavigate?.('solutions');
                }} className="text-left transition-colors hover:text-white">
                  Attack Surface Management
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="text-xs font-black tracking-widest uppercase text-white">COMPANY</h4>
              <div className="w-8 h-0.5 bg-purple-500 rounded-full" />
            </div>
            <ul className="space-y-3 text-sm font-semibold text-slate-400">
              <li>
                <button onClick={() => onNavigate?.('company')} className="text-left transition-colors hover:text-white">
                  About SecGenie AI
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('research')} className="text-left transition-colors hover:text-white">
                  Research &amp; Insights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('contact')} className="text-left transition-colors hover:text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 text-xs text-slate-500">
          &copy; 2026 SecGenie.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
