import React, { useState } from 'react';
import { X, Mail, MapPin, Send, CheckCircle2, Shield, Phone } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Enterprise Security Assessment Inquiry',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1 rounded-full">
                  Connect With Security Architecture
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Contact SecGenie AI
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Have questions about deployment, custom SIEM connectors, or SOC evaluation trials? Our enterprise team responds within 2 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jordan Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Corporate Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="Enterprise Security Assessment Inquiry">Enterprise Security Assessment Inquiry</option>
                    <option value="Custom SIEM / EDR Connector Integration">Custom SIEM / EDR Connector Integration</option>
                    <option value="MSSP / SOC Partnership Program">MSSP / SOC Partnership Program</option>
                    <option value="Press / Analyst Inquiries">Press / Analyst Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your security environment, endpoint volume, and current pain points..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950/70 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" /> Send Secure Inquiry
                  </button>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" /> info@secgenie.ai
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Bengaluru & Durham, NC
                  </span>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Inquiry Dispatched</h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
                Thank you, {formData.name}. Our technical defense team has received your message and will follow up shortly at {formData.email}.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
