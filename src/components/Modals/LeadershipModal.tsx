import React from 'react';
import { X, Award, ShieldCheck, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';

interface LeadershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadershipModal: React.FC<LeadershipModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 overflow-y-auto">
          {/* Top pill */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
              Founded 2025 • Durham, NC & Bengaluru
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            Founding Story & Leadership
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-8">
            SecGenie AI was forged by frontline security engineers and applied AI researchers who experienced firsthand the breaking points of modern SOCs: 10,000+ alerts daily, disjointed dashboards, and critical exposures hidden in noise.
          </p>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Dr. Om Prakash Mishra */}
            <div className="p-6 bg-slate-950/70 border border-slate-800 rounded-xl relative group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg shadow-cyan-500/10">
                OM
              </div>
              <h4 className="text-lg font-bold text-white">Dr. Om Prakash Mishra</h4>
              <p className="text-xs font-semibold text-cyan-400 mb-3">Co founder and Chief Executive Officer (CEO)</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Veteran cybersecurity executive with over 15 years leading enterprise cyber defense, MSSP operations, and risk mitigation across North America and APAC. Former security director building next-generation threat response architectures.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" /> Durham, NC
                </span>
                <span className="flex items-center gap-1 text-cyan-400 hover:underline cursor-pointer">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </span>
              </div>
            </div>

            {/* Jaicind Santhibhavan */}
            <div className="p-6 bg-slate-950/70 border border-slate-800 rounded-xl relative group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg shadow-indigo-500/10">
                JS
              </div>
              <h4 className="text-lg font-bold text-white">Jaicind Santhibhavan</h4>
              <p className="text-xs font-semibold text-cyan-400 mb-3">Co founder and Chief Technology Officer (CTO)</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Applied AI systems researcher and cyber physical security architect. Specializes in graph neural networks, automated attack path modeling, and real time event streaming pipelines at scale.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" /> Bengaluru, India
                </span>
                <span className="flex items-center gap-1 text-cyan-400 hover:underline cursor-pointer">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </span>
              </div>
            </div>
          </div>

          {/* Core Principles */}
          <div className="p-5 bg-gradient-to-r from-blue-950/30 to-cyan-950/30 border border-cyan-900/30 rounded-xl space-y-3">
            <h5 className="text-sm font-semibold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> The SecGenie Mission
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              &quot;Traditional security architectures force SOC analysts to be human glue between twenty disconnected point tools. SecGenie flips this paradigm by constructing a live graph of every exposure and executing verified containment before attackers move laterally.&quot;
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
