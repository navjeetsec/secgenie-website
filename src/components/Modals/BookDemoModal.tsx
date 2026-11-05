import React, { useState } from 'react';
import { X, CheckCircle2, Shield, Calendar, Clock, Building, Mail, User } from 'lucide-react';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    role: '',
    endpoints: '1,000 - 5,000',
    primarySiem: 'Splunk',
    date: '2026-11-05',
    timeSlot: '14:00 EST',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Top highlight bar */}
        <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div className="p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Shield className="w-3.5 h-3.5" /> Technical Architecture Deep Dive
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Book a Technical Demo
            </h3>
            <p className="text-sm text-slate-400 mt-1 mb-6">
              Experience live exposure graph mapping, noise reduction telemetry, and attack path simulation tailored to your environment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" /> Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" /> Company / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="CyberCorp Enterprise"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Primary SIEM / Data Lake
                  </label>
                  <select
                    value={formData.primarySiem}
                    onChange={(e) => setFormData({ ...formData, primarySiem: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700/80 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  >
                    <option value="Splunk">Splunk Enterprise / Cloud</option>
                    <option value="Microsoft Sentinel">Microsoft Sentinel</option>
                    <option value="CrowdStrike">CrowdStrike Falcon Next Generation SIEM</option>
                    <option value="Elastic">Elastic Security</option>
                    <option value="Datadog">Datadog Cloud SIEM</option>
                    <option value="Other">Other / Multiple SIEM tools</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700/80 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" /> Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700/80 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  >
                    <option value="10:00 EST">10:00 AM EST (US & Americas)</option>
                    <option value="14:00 EST">02:00 PM EST (US & Americas)</option>
                    <option value="10:00 GMT">10:00 AM GMT (EMEA / Europe)</option>
                    <option value="14:00 IST">02:00 PM IST (APAC & India)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" /> Your Role
                </label>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700/80 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                >
                  <option value="" disabled>Select your role</option>
                  <option value="CISO / Security Executive">CISO / Security Executive</option>
                  <option value="SOC Leader">SOC Leader</option>
                  <option value="Security Analyst">Security Analyst</option>
                  <option value="Security Engineer">Security Engineer</option>
                  <option value="IT / Risk Leader">IT / Risk Leader</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Questions
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="What would you like us to cover in the demo?"
                  className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  Confirm Technical Demo Booking →
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400 pt-1">
                Zero software installation required. 45-minute live architecture & attack graph simulation.
              </p>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center py-12">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Technical demo request sent</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
              Thank you, <span className="text-cyan-400 font-semibold">{formData.fullName}</span>. An invite has been dispatched to <span className="text-cyan-400 font-semibold">{formData.workEmail}</span> for <span className="text-white font-medium">{formData.date} at {formData.timeSlot}</span>.
            </p>
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 text-left max-w-sm mx-auto mb-6 text-xs text-slate-400 space-y-1.5">
              <div className="text-white font-semibold mb-1">What to expect:</div>
              <div>• Live exposure ingestion from {formData.primarySiem}</div>
              <div>• Demonstration of alert fatigue suppression powered by AI</div>
              <div>• Automated response orchestration with containment guardrails</div>
            </div>
            <button
              onClick={handleReset}
              className="py-2.5 px-6 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
