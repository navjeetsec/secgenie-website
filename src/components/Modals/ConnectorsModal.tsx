import React, { useState } from "react";
import { X, Search, Check, ExternalLink } from "lucide-react";

interface ConnectorsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Connector {
  name: string;
  category:
    | "SIEM"
    | "EDR / XDR"
    | "Cloud"
    | "Identity"
    | "Vulnerability"
    | "ITSM / SOAR";
  description: string;
  type: string;
  iconBg: string;
  certified: boolean;
}

const ALL_CONNECTORS: Connector[] = [
  {
    name: "Splunk Enterprise & Cloud",
    category: "SIEM",
    description:
      "Telemetry syncing in both directions and search queries through REST API and HEC.",
    type: "API / HEC",
    iconBg: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    certified: true,
  },
  {
    name: "Microsoft Sentinel",
    category: "SIEM",
    description:
      "Native Microsoft Graph and Azure Monitor ingestion for SOC teams managing multiple workspaces.",
    type: "Graph API",
    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    certified: true,
  },
  {
    name: "CrowdStrike Falcon",
    category: "EDR / XDR",
    description:
      "Real time host isolation, containment, and sensor telemetry ingestion.",
    type: "OAuth2 API",
    iconBg: "bg-red-500/10 text-red-400 border-red-500/20",
    certified: true,
  },
  {
    name: "SentinelOne Singularity",
    category: "EDR / XDR",
    description:
      "Automated remediation, process kill, network quarantine, and rollback.",
    type: "REST API",
    iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    certified: true,
  },
  {
    name: "Amazon Web Services (AWS)",
    category: "Cloud",
    description:
      "AWS Security Hub, GuardDuty, CloudTrail, IAM Access Analyzer, and VPC Flow.",
    type: "IAM AssumeRole",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    certified: true,
  },
  {
    name: "Microsoft Azure",
    category: "Cloud",
    description:
      "Defender for Cloud, Azure Activity logs, Entra ID identity risk signals.",
    type: "Managed Identity",
    iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    certified: true,
  },
  {
    name: "Google Cloud Platform (GCP)",
    category: "Cloud",
    description:
      "Security Command Center (SCC), Chronicle SIEM, and Cloud Audit logging.",
    type: "Workload Identity",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    certified: true,
  },
  {
    name: "Palo Alto Networks Cortex",
    category: "EDR / XDR",
    description: "XDR analytics and XSOAR playbook automation triggers.",
    type: "API Key",
    iconBg: "bg-orange-600/10 text-orange-500 border-orange-600/20",
    certified: true,
  },
  {
    name: "Qualys VMDR",
    category: "Vulnerability",
    description:
      "Continuous host vulnerability posture and compliance assessment telemetry.",
    type: "REST API",
    iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    certified: true,
  },
  {
    name: "Tenable.io / Nessus",
    category: "Vulnerability",
    description:
      "CVE exposure feeds, asset discovery, and credentialed scan aggregation.",
    type: "REST API",
    iconBg: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    certified: true,
  },
  {
    name: "Okta Identity Cloud",
    category: "Identity",
    description:
      "User session revocation, compromised credential suspension, and MFA enforcement.",
    type: "OAuth / Webhook",
    iconBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    certified: true,
  },
  {
    name: "ServiceNow SecOps",
    category: "ITSM / SOAR",
    description:
      "Automated SIR ticket creation, assignee routing, and SLA milestone tracking.",
    type: "REST / Table API",
    iconBg: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    certified: true,
  },
  {
    name: "Jira Service Management",
    category: "ITSM / SOAR",
    description:
      "Incident response ticketing, automated sprint triage, and remediation tasks.",
    type: "Atlassian API",
    iconBg: "bg-blue-600/10 text-blue-400 border-blue-600/20",
    certified: true,
  },
  {
    name: "Slack Enterprise Grid",
    category: "ITSM / SOAR",
    description:
      "Interactive War Room creation, approval workflows, and triage notifications.",
    type: "Bot API / Webhook",
    iconBg: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
    certified: true,
  },
  {
    name: "AlienVault USM",
    category: "SIEM",
    description:
      "Threat detection, asset inventory, and compliance management synchronization.",
    type: "API / Syslog",
    iconBg: "bg-green-500/10 text-green-400 border-green-500/20",
    certified: true,
  },
  {
    name: "Fortinet FortiGate & FortiSIEM",
    category: "SIEM",
    description:
      "Firewall IP blocking, perimeter isolation, and security fabric event streams.",
    type: "Fabric Connector",
    iconBg: "bg-red-600/10 text-red-500 border-red-600/20",
    certified: true,
  },
];

export const ConnectorsModal: React.FC<ConnectorsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("All");

  if (!isOpen) return null;

  const categories = [
    "All",
    "SIEM",
    "EDR / XDR",
    "Cloud",
    "Identity",
    "Vulnerability",
    "ITSM / SOAR",
  ];

  const filtered = ALL_CONNECTORS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === "All" || item.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
                Native API Integrations
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Connect With Your Existing Security Stack
            </h3>
            <p className="text-xs text-slate-400">
              Zero sensor reinstalls. Connect via native API in under 5 minutes.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search and Category Filters */}
        <div className="p-6 border-b border-slate-800/80 bg-slate-950/40 space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search connectors (e.g. Splunk, CrowdStrike, AWS, Okta, Jira)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
                  selectedCat === cat
                    ? "bg-cyan-500 text-slate-950 font-bold"
                    : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* List Grid */}
        <div className="p-6 overflow-y-auto space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.map((connector) => (
              <div
                key={connector.name}
                className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">
                      {connector.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {connector.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {connector.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Check className="w-3.5 h-3.5" /> Bi-Directional API
                  </span>
                  <span className="text-slate-400">
                    Protocol: {connector.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No connectors match your search query.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>
            Need a proprietary tool or connector for your internal systems?
            Custom webhook SDK support is available.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
