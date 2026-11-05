import React, { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Shield,
  Cpu,
  Network,
  Layers,
  Building2,
  BookOpen,
} from "lucide-react";
import Logo from "../assets/logo.png";

export type NavPage =
  | "home"
  | "platform"
  | "exposure-intelligence"
  | "ai-soc-automation"
  | "ctem-platform"
  | "solutions"
  | "integration"
  | "company"
  | "research"
  | "contact";

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onSelectSolutionTab: (tab: "alert-fatigue" | "attack-surface") => void;
  onBookDemo: () => void;
  onExplorePlatform: () => void;
  onOpenLeadership: () => void;
  onOpenConnectors: () => void;
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onSelectSolutionTab,
  onBookDemo,
  onExplorePlatform: _onExplorePlatform,
  onOpenLeadership: _onOpenLeadership,
  onOpenConnectors: _onOpenConnectors,
  onContactClick: _onContactClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isAboutActive = currentPage === "company" || currentPage === "research";

  return (
    <header className="sticky top-0 z-40 w-full bg-white text-slate-900 border-b border-slate-200/80 shadow-xs backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <button
          onClick={() => {
            onNavigate("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="shrink-0 focus:outline-none cursor-pointer"
        >
          <img src={Logo} alt="SecGenie AI Logo" className="h-10 w-auto" />
        </button>

        {/* Desktop Nav Zone */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-700">
          {/* Platform Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("platform")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => {
                onNavigate("platform");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-current={currentPage === "platform" ? "page" : undefined}
              className={`relative flex items-center gap-1 rounded-lg border px-3 py-2 whitespace-nowrap transition-all focus:outline-none cursor-pointer after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 after:transition-transform ${
                currentPage === "platform"
                  ? "border-transparent bg-cyan-50/60 font-bold text-blue-700 after:scale-x-100"
                  : "border-transparent text-slate-700 after:scale-x-0 hover:bg-slate-50 hover:text-cyan-700 hover:after:scale-x-100"
              }`}
            >
              <span>Platform</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  currentPage === "platform"
                    ? "text-blue-600"
                    : "text-slate-400"
                } ${activeDropdown === "platform" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "platform" && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-3 py-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => {
                    onNavigate("platform");
                    setTimeout(() => {
                      const el = document.getElementById("exposure-engine");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 50);
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group cursor-pointer"
                >
                  <Network className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-cyan-600">
                      Exposure Intelligence Engine
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Real time asset discovery and CVE mapping
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => {
                    onNavigate("platform");
                    setTimeout(() => {
                      const el = document.getElementById("aisoc-engine");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 50);
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group cursor-pointer"
                >
                  <Cpu className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">
                      AI SOC Automation Engine
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Autonomous triage and explainable trails
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => {
                    onNavigate("platform");
                    setTimeout(() => {
                      const el = document.getElementById("ctem-cycle");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 50);
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group cursor-pointer"
                >
                  <Layers className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">
                      The CTEM Cycle
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Scoping, discovery, and prioritized validation
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => {
                    onNavigate("platform");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-cyan-50/50 transition-colors flex items-start gap-3 group border-t border-slate-100 pt-2 cursor-pointer"
                >
                  <Shield className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-cyan-600">
                      View Full Platform Overview
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Explore full cyber architecture
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => {
                onNavigate("solutions");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-current={currentPage === "solutions" ? "page" : undefined}
              className={`relative flex items-center gap-1 rounded-lg border px-3 py-2 whitespace-nowrap transition-all focus:outline-none cursor-pointer after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 after:transition-transform ${
                currentPage === "solutions"
                  ? "border-transparent bg-cyan-50/60 font-bold text-blue-700 after:scale-x-100"
                  : "border-transparent text-slate-700 after:scale-x-0 hover:bg-slate-50 hover:text-cyan-700 hover:after:scale-x-100"
              }`}
            >
              <span>Solutions</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  currentPage === "solutions"
                    ? "text-blue-600"
                    : "text-slate-400"
                } ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "solutions" && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-3 py-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => {
                    onSelectSolutionTab("alert-fatigue");
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group cursor-pointer"
                >
                  <Layers className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-cyan-600">
                      Alert Fatigue Suppression
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Eliminate duplicate SIEM alerts with context from AI
                    </div>
                  </div>
                </button>
                <button
                  onClick={() => {
                    onSelectSolutionTab("attack-surface");
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group cursor-pointer"
                >
                  <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">
                      Attack Surface Exposure
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Dynamic continuous exposure &amp; CTEM
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Integrations (Simple Link - No Dropdown, No Arrow) */}
          <button
            onClick={() => {
              onNavigate("integration");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-current={currentPage === "integration" ? "page" : undefined}
            className={`relative rounded-lg border px-3 py-2 whitespace-nowrap transition-all focus:outline-none cursor-pointer after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 after:transition-transform ${
              currentPage === "integration"
                ? "border-transparent bg-cyan-50/60 font-bold text-blue-700 after:scale-x-100"
                : "border-transparent text-slate-700 after:scale-x-0 hover:bg-slate-50 hover:text-cyan-700 hover:after:scale-x-100"
            }`}
          >
            Integrations
          </button>

          {/* About Us Dropdown (Containing Company and Research) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => {
                onNavigate("company");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-current={isAboutActive ? "page" : undefined}
              className={`relative flex items-center gap-1 rounded-lg border px-3 py-2 whitespace-nowrap transition-all focus:outline-none cursor-pointer after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 after:transition-transform ${
                isAboutActive
                  ? "border-transparent bg-cyan-50/60 font-bold text-blue-700 after:scale-x-100"
                  : "border-transparent text-slate-700 after:scale-x-0 hover:bg-slate-50 hover:text-cyan-700 hover:after:scale-x-100"
              }`}
            >
              <span>About Us</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isAboutActive ? "text-blue-600" : "text-slate-400"
                } ${activeDropdown === "about" ? "rotate-180" : ""}`}
              />
            </button>

            {activeDropdown === "about" && (
              <div className="absolute top-full -left-4 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-3 py-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150">
                <button
                  onClick={() => {
                    onNavigate("company");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setActiveDropdown(null);
                  }}
                  className={`w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group cursor-pointer ${
                    currentPage === "company" ? "bg-blue-50/60" : ""
                  }`}
                >
                  <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600">
                      Company &amp; Founders
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Our vision, leadership, and engineering principles
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onNavigate("research");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setActiveDropdown(null);
                  }}
                  className={`w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start gap-3 group cursor-pointer ${
                    currentPage === "research" ? "bg-blue-50/60" : ""
                  }`}
                >
                  <BookOpen className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-cyan-600">
                      Research &amp; Insights
                    </div>
                    <div className="text-[11px] text-slate-500 font-normal">
                      Technical insights, CTEM guides, and attack graph modeling
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Contact (Simple Link - No Dropdown, No Arrow) */}
          <button
            onClick={() => {
              onNavigate("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-current={currentPage === "contact" ? "page" : undefined}
            className={`relative rounded-lg border px-3 py-2 whitespace-nowrap transition-all focus:outline-none cursor-pointer after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 after:transition-transform ${
              currentPage === "contact"
                ? "border-transparent bg-cyan-50/60 font-bold text-blue-700 after:scale-x-100"
                : "border-transparent text-slate-700 after:scale-x-0 hover:bg-slate-50 hover:text-cyan-700 hover:after:scale-x-100"
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Primary Action Button - Clean, no unnecessary arrows */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            onClick={onBookDemo}
            className="px-6 py-2.5 rounded-full text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
          >
            Book a Technical Demo
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-4 shadow-lg animate-in fade-in duration-150">
          <div className="space-y-2 text-sm font-bold text-slate-800">
            <button
              onClick={() => {
                onNavigate("home");
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-current={currentPage === "home" ? "page" : undefined}
              className={`block w-full rounded-lg border-l-2 px-3 py-2.5 text-left transition-colors ${currentPage === "home" ? "border-cyan-500 bg-gradient-to-r from-blue-50 to-cyan-50 font-bold text-blue-700" : "border-transparent text-slate-700 hover:bg-slate-50 hover:text-cyan-700"}`}
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate("platform");
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-current={currentPage === "platform" ? "page" : undefined}
              className={`block w-full rounded-lg border-l-2 px-3 py-2.5 text-left transition-colors ${currentPage === "platform" ? "border-cyan-500 bg-gradient-to-r from-blue-50 to-cyan-50 font-bold text-blue-700" : "border-transparent text-slate-700 hover:bg-slate-50 hover:text-cyan-700"}`}
            >
              Platform
            </button>
            <button
              onClick={() => {
                onNavigate("solutions");
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-current={currentPage === "solutions" ? "page" : undefined}
              className={`block w-full rounded-lg border-l-2 px-3 py-2.5 text-left transition-colors ${currentPage === "solutions" ? "border-cyan-500 bg-gradient-to-r from-blue-50 to-cyan-50 font-bold text-blue-700" : "border-transparent text-slate-700 hover:bg-slate-50 hover:text-cyan-700"}`}
            >
              Solutions
            </button>
            <div className="pl-3 space-y-1">
              <button
                onClick={() => {
                  onSelectSolutionTab("alert-fatigue");
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block w-full text-left py-1.5 px-2 rounded-lg text-xs text-slate-600 hover:text-cyan-600"
              >
                Enterprise Security Operations
              </button>
              <button
                onClick={() => {
                  onSelectSolutionTab("attack-surface");
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="block w-full text-left py-1.5 px-2 rounded-lg text-xs text-slate-600 hover:text-cyan-600"
              >
                Attack Surface Exposure
              </button>
            </div>
            <button
              onClick={() => {
                onNavigate("integration");
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-current={currentPage === "integration" ? "page" : undefined}
              className={`block w-full rounded-lg border-l-2 px-3 py-2.5 text-left transition-colors ${currentPage === "integration" ? "border-cyan-500 bg-gradient-to-r from-blue-50 to-cyan-50 font-bold text-blue-700" : "border-transparent text-slate-700 hover:bg-slate-50 hover:text-cyan-700"}`}
            >
              Integrations
            </button>
            <div className="py-2 border-y border-slate-100 space-y-1">
              <span className="text-xs uppercase font-bold text-slate-400 block px-1">
                About Us
              </span>
              <button
                onClick={() => {
                  onNavigate("company");
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`block w-full text-left py-1.5 px-2 rounded-lg ${currentPage === "company" ? "text-blue-600 font-bold bg-blue-50" : "text-slate-700 hover:text-cyan-600"}`}
              >
                Company &amp; Founders
              </button>
              <button
                onClick={() => {
                  onNavigate("research");
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`block w-full text-left py-1.5 px-2 rounded-lg ${currentPage === "research" ? "text-blue-600 font-bold bg-blue-50" : "text-slate-700 hover:text-cyan-600"}`}
              >
                Research &amp; Insights
              </button>
            </div>
            <button
              onClick={() => {
                onNavigate("contact");
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-current={currentPage === "contact" ? "page" : undefined}
              className={`block w-full rounded-lg border-l-2 px-3 py-2.5 text-left transition-colors ${currentPage === "contact" ? "border-cyan-500 bg-gradient-to-r from-blue-50 to-cyan-50 font-bold text-blue-700" : "border-transparent text-slate-700 hover:bg-slate-50 hover:text-cyan-700"}`}
            >
              Contact
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookDemo();
              }}
              className="w-full py-2.5 px-4 rounded-full text-center font-bold text-white bg-slate-950 hover:bg-slate-800 text-sm cursor-pointer"
            >
              Book a Technical Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
