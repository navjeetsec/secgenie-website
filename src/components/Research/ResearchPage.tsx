import React, { useState } from 'react';
import { Clock, Calendar, ArrowRight, X, ShieldCheck, User } from 'lucide-react';
import { RevealItem, ScrollReveal } from '../Common/ScrollReveal';

import leaderLaptopImg from '../../assets/images/executive_leader_laptop_1793440971531.jpg';
import ctemEngineerImg from '../../assets/images/research_ctem_engineer_1793441628600.jpg';
import attackGraphsImg from '../../assets/images/research_attack_graphs_1793441628308.jpg';

export interface ResearchArticle {
  id: string;
  category: string;
  readTime: string;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  content: string[];
}

export const articles: ResearchArticle[] = [
  {
    id: 'why-security-buyers-read',
    category: 'INDUSTRY INSIGHTS',
    readTime: '6min read',
    image: leaderLaptopImg,
    title: 'Why Security Buyers Read Before Requesting',
    excerpt:
      'Modern CISOs and security leaders have grown skeptical of generic AI buzzwords. Here is why rigorous architecture, explain ability, and proven integrations matter before bookin...',
    author: 'Abhishek Patel',
    authorRole: 'Head of Security Strategy & Research',
    date: 'MARCH 27, 2026',
    content: [
      'The enterprise security tooling landscape is littered with marketing promises that evaporate under real SOC conditions. Today’s CISOs and detection engineering managers no longer take vendor claims at face value.',
      'Deterministic Explainability: When an alert triggers, an autonomous engine cannot merely declare a verdict without showing its mathematical chain of evidence. Security teams demand telemetry links, historical baseline comparisons, and precise ATT&CK tactic mappings.',
      'API Integration Without Disruption: Replacing existing SIEMs or EDR agents is impractical for mature enterprises. Modern solutions must ingest live streams from CrowdStrike, SentinelOne, and Splunk without adding endpoint friction or agent overhead.',
      'The Continuous Exposure Imperative: Periodic penetration tests and weekly vulnerability scans leave blind spots. Organizations require graph modeling in real time to prioritize vulnerabilities by active exploitability, network reachability, and business impact.'
    ],
  },
  {
    id: 'ctem-vs-vulnerability-management',
    category: 'INDUSTRY INSIGHTS',
    readTime: '8min read',
    image: ctemEngineerImg,
    title: 'From Vulnerability Management to Continuous Threat Exposure Management (CTEM)',
    excerpt:
      'Discover why leading organizations are transitioning from quarterly vulnerability scans to continuous, exploitability-driven exposure management.',
    author: 'Dr. Om Prakash Mishra',
    authorRole: 'Co founder and Chief Executive Officer',
    date: 'FEBRUARY 14, 2026',
    content: [
      'Traditional vulnerability management programs produce endless lists of CVEs that overwhelm security teams. With over 25,000 new CVEs published annually, prioritizing by CVSS score alone is unsustainable.',
      'The Five Stage CTEM Cycle: Gartner’s Continuous Threat Exposure Management framework provides a repeatable, continuous operational cycle spanning Scoping, Discovery, Prioritization, Validation, and Mobilization.',
      'Context Is Everything: A CVSS 9.8 vulnerability on an isolated subnet with no inbound internet routes poses significantly lower risk than a CVSS 6.5 vulnerability exposed on a public ingress controller connected to production database secrets.',
      'Bridging Exposure to SOC Response: By tying exposure intelligence directly into AI SOC automation playbooks, SecGenie empowers teams to preemptively address critical remediation priorities before adversaries can weaponize them.'
    ],
  },
  {
    id: 'demystifying-attack-graphs',
    category: 'INDUSTRY INSIGHTS',
    readTime: '7min read',
    image: attackGraphsImg,
    title: 'Demystifying Attack Graphs: Mapping Adversary Lateral Movement',
    excerpt:
      'Modern CISOs and security leaders have grown skeptical of generic AI buzzwords. Here is why rigorous architecture, explain ability, and proven integrations matter before bookin...',
    author: 'Jaicind Santhibhavan',
    authorRole: 'Co founder and Chief Technology Officer',
    date: 'JANUARY 22, 2026',
    content: [
      'Attack graphs transform disconnected security logs into an intuitive, multi-dimensional topological map of organizational risk. Instead of viewing alerts in isolated silos, graph engines trace the path an adversary would traverse.',
      'High Volume Ingestion: Processing millions of telemetry nodes requires specialized graph computing structures that can recalculate lateral movement probabilities in real time as cloud configurations change.',
      'Identifying Critical Remediation Priorities: By computing blast radius and centrality metrics, security architects can identify single remediation steps that sever dozens of attack pathways simultaneously.',
      'Automated Playbook Execution: When an attack path is verified through deterministic emulation, containment actions can be automatically recommended to security analysts with full audit logs.'
    ],
  },
];

export const ResearchPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ResearchArticle | null>(null);

  return (
    <div className="w-full bg-[#f8fbfe] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section matching Screenshot 182823 */}
        <ScrollReveal className="mb-16 sm:mb-20" staggerChildren={0.12}>
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-slate-700 bg-sky-100/80 border border-sky-200/90 uppercase mb-6 shadow-xs">
            EDITORIAL &amp; ENGINEERING INSIGHTS
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0066f5] tracking-tight leading-[1.15] mb-4 sm:mb-5">
            Research &amp; Technical Insights
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
            Thought leadership, architectural deep dives, and practical operational guides for CISOs, SOC managers, and detection engineers.
          </p>
        </div>
        </ScrollReveal>

        {/* 3 Research Cards matching Screenshot 182834 */}
        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.14}>
          {articles.map((article) => (
            <RevealItem key={article.id} className="h-full">
            <article className="h-full bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              {/* Image & Overlaid Badges */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/30" />

                {/* Left Badge: Category */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-white bg-black/60 backdrop-blur-md border border-white/20 uppercase">
                    {article.category}
                  </span>
                </div>

                {/* Right Badge: Read Time */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide text-white bg-black/60 backdrop-blur-md border border-white/20">
                    <Clock className="w-3.5 h-3.5 text-slate-300" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0066f5] transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {article.excerpt}
                  </p>
                </div>

                {/* Card Footer: Author, Date, Read More */}
                <div className="pt-5 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#0066f5]">
                      {article.author}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-semibold tracking-wider mt-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066f5] hover:text-[#004fba] group-hover:translate-x-0.5 transition-all cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
            </RevealItem>
          ))}
        </ScrollReveal>
      </div>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/80 text-white uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black mt-2 leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#0066f5]" />
                  <span className="font-bold text-slate-800">{selectedArticle.author}</span>
                  <span>&bull;</span>
                  <span>{selectedArticle.authorRole}</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{selectedArticle.date}</span>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified SecGenie Research</span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2 rounded-full text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
