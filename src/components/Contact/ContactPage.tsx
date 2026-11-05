import React, { useState } from 'react';
import { ArrowRight, Check, Mail, MessageSquare } from 'lucide-react';
import { getImageAsset } from '../../assets/imageAssets';

interface ContactPageProps {
  onBackToHome?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');
  const [emailPrepared, setEmailPrepared] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `SecGenie AI enquiry from ${fullName.trim()}`;
    const body = [
      `Name: ${fullName.trim()}`,
      `Work email: ${workEmail.trim()}`,
      `Company: ${companyName.trim() || 'Not provided'}`,
      '',
      message.trim(),
    ].join('\n');

    window.location.href = `mailto:info@secgenie.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setEmailPrepared(true);
  };

  return (
    <main className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={getImageAsset('cyber_threat_mesh_hero_1793428361251.jpg')}
          alt=""
          className="h-full w-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/95 to-[#0b1a32]" />
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="mb-8 max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s talk about
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              your security operations
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Tell us about your team and what you want to improve. We&apos;ll help you explore how SecGenie AI fits your security stack.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[28px] border border-slate-700/80 bg-slate-900/70 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="relative flex min-h-[340px] flex-col justify-between overflow-hidden p-7 sm:p-10 lg:min-h-[620px]">
            <img
              src={getImageAsset('contact_phone_lock_1793441628323.jpg')}
              alt="Cybersecurity shield and connected devices"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/55 to-slate-950" />
            <div className="relative">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h2 className="max-w-sm text-2xl font-bold leading-snug text-white sm:text-3xl">
                A clearer path to stronger cyber defense.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
                Connect with our team to discuss exposure management, SOC workflows, and integration with your existing tools.
              </p>
            </div>

            <a
              href="mailto:info@secgenie.ai"
              className="relative mt-10 inline-flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <Mail className="h-4 w-4 text-cyan-300" />
              info@secgenie.ai
              <ArrowRight className="ml-1 h-4 w-4 text-slate-400" />
            </a>
          </aside>

          <div className="p-6 sm:p-10 lg:p-12">
            {emailPrepared ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-300">
                  <Check className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">Your enquiry is ready</h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300">
                  Your email app should open with your message addressed to SecGenie AI. Review and send the email to complete your enquiry. If it did not open, contact us at{' '}
                  <a className="font-semibold text-cyan-300 hover:text-cyan-200" href="mailto:info@secgenie.ai">
                    info@secgenie.ai
                  </a>.
                </p>
                <button
                  type="button"
                  onClick={() => setEmailPrepared(false)}
                  className="mt-8 rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-300/50 hover:text-cyan-200"
                >
                  Edit message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Get in touch</p>
                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Send our team a message</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    Share a few details and we&apos;ll prepare an email for you to send.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-200">
                        Full name <span className="text-cyan-300">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-200">
                        Work email <span className="text-cyan-300">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={workEmail}
                        onChange={(event) => setWorkEmail(event.target.value)}
                        placeholder="you@company.com"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="mb-2 block text-sm font-semibold text-slate-200">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      autoComplete="organization"
                      value={companyName}
                      onChange={(event) => setCompanyName(event.target.value)}
                      placeholder="Your organization"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-200">
                      How can we help? <span className="text-cyan-300">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Tell us what you would like to discuss."
                      className="w-full resize-y rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_8px_28px_rgba(34,211,238,0.18)] transition-all hover:from-cyan-300 hover:to-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto"
                  >
                    Prepare email
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
