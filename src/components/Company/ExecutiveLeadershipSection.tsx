import React from 'react';
import executiveImg from '../../assets/images/executive_leader_laptop_1793440971531.jpg';

interface Leader {
  name: string;
  role: string;
  location: string;
  initials: string;
  bio: string;
  tag: string;
}

const leaders: Leader[] = [
  {
    name: 'Dr. Om Prakash Mishra',
    role: 'Co-Founder & Chief Executive Officer (CEO)',
    location: '',
    initials: 'OPM',
    bio: 'Cybersecurity leader and entrepreneur with extensive background in SOC modernization, exposure management, and enterprise threat intelligence.',
    tag: 'SecGenie Core',
  },
  {
    name: 'Jaicind Santhibhavan',
    role: 'Co-Founder & Chief Technology Officer (CTO)',
    location: 'BENGALURU, INDIA',
    initials: 'JS',
    bio: 'Pioneering AI and systems architect specializing in high-throughput security graph engines, deterministic AI reasoning, and cloud-native defense systems.',
    tag: 'SecGenie Core',
  },
  {
    name: 'Abhishek Patel',
    role: 'Head of Security Strategy & Research',
    location: '',
    initials: 'AP',
    bio: 'Former enterprise SOC Director and vulnerability researcher dedicated to bridging practical analyst needs with automated detection engineering.',
    tag: 'SecGenie Core',
  },
];

interface ExecutiveLeadershipSectionProps {
  onOpenContact?: () => void;
}

export const ExecutiveLeadershipSection: React.FC<ExecutiveLeadershipSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 bg-[#f4faff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-wider text-slate-700 bg-sky-100 border border-sky-200 uppercase mb-4 shadow-xs">
            EXECUTIVE LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0070f3] tracking-tight mb-5">
            Experienced Founders & Security Strategists
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            Combining deep domain experience across enterprise SOC operations, attack path theory, and scalable AI infrastructure.
          </p>
        </div>

        {/* 3 Leader Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={executiveImg}
                  alt={leader.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30" />

                {/* Overlaid Location Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide text-white bg-black/60 backdrop-blur-md border border-white/20">
                    {leader.location}
                  </span>
                </div>

                {/* Initials Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/20">
                    {leader.initials}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#0070f3] mb-4">
                    {leader.role}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={onOpenContact}
                    className="text-xs font-semibold text-[#0070f3] hover:text-[#0051b3] transition-colors cursor-pointer"
                  >
                    {leader.tag}
                  </button>
                  <span className="text-slate-400 text-xs">Verified Leader</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
