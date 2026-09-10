import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  Clock,
  Sparkles,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import { motion } from 'motion/react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // Direct delivery endpoint to wp0222137@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(PERSONAL_INFO.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          _subject: formData.subject.trim()
            ? `[Portfolio Inquiry] ${formData.subject.trim()} — ${formData.name.trim()}`
            : `New Portfolio Message from ${formData.name.trim()}`,
          message: formData.message.trim(),
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true || result.message)) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Unable to complete direct delivery.');
      }
    } catch (err: unknown) {
      console.warn('Direct fetch delivery attempt encountered an error:', err);
      // Fallback: If network or ad-blocker blocked the external AJAX POST, provide a 1-click fallback
      setErrorMessage(
        'Direct submission was intercepted by network/browser filters. Click below to launch your email client with your message pre-filled directly to ' +
          PERSONAL_INFO.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-indigo-600 uppercase">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            CONNECT WITH WILLIAM
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mt-2" />
          <p className="text-slate-600 text-base sm:text-lg pt-2">
            Available for investment analyst internships, economic policy research collaborations, and academic discussions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 font-['Space_Grotesk']">
                  Direct Inquiries &amp; Channels
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Feel free to reach out directly via email or send a note via the inquiry form. Messages are routed directly to{' '}
                  <strong className="text-slate-900 font-semibold">{PERSONAL_INFO.email}</strong>.
                </p>
              </div>

              {/* Email Card with Hover Effect */}
              <div className="p-4 bg-indigo-50/70 rounded-xl border border-indigo-100 flex items-start justify-between gap-3 group hover:border-indigo-300 hover:bg-indigo-50/95 hover:shadow-sm transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-indigo-600 text-white rounded-lg shrink-0 group-hover:scale-110 group-hover:bg-indigo-700 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-indigo-700 hover:text-indigo-900 hover:underline break-all transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-white rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-3 hover:border-slate-300 transition-colors">
                <div className="p-2.5 bg-slate-800 text-white rounded-lg shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-bold text-slate-900">{PERSONAL_INFO.location}</div>
                  <div className="text-xs text-slate-500 mt-0.5">West Africa Time (WAT / UTC+1)</div>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-100/80 p-3 rounded-xl border border-slate-200/60 hover:bg-slate-100 transition-colors">
                <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Typical response window: <strong>within 24 hours</strong></span>
              </div>
            </div>

            {/* Quote Callout */}
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl text-white shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 transition-all">
              <div className="flex items-center gap-2 text-indigo-200 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Commitment</span>
              </div>
              <p className="text-sm italic text-indigo-50 leading-relaxed">
                &ldquo;Continuous learning, discipline over hype, long-term thinking, and integrity in decision-making.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Right Column: Direct Live Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-2xl font-bold text-slate-900 font-['Space_Grotesk']">
                  Send a Message
                </h3>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Direct to inbox
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Your message is sent directly to <strong>{PERSONAL_INFO.email}</strong>. Every legitimate opportunity and inquiry receives a reply.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50/80 rounded-2xl border border-emerald-200 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Delivered Successfully!</h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message was transmitted directly to{' '}
                    <strong className="text-slate-800">{PERSONAL_INFO.email}</strong>. William will review your note and respond promptly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-white text-emerald-700 border border-emerald-300 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-emerald-50 hover:shadow-sm transition-all cursor-pointer"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-2">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <p>{errorMessage}</p>
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                          formData.subject || 'Portfolio Inquiry'
                        )}&body=${encodeURIComponent(
                          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
                        )}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors"
                      >
                        <span>Open Direct Email Client</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 text-sm outline-none transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@firm.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 text-sm outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Subject / Inquiry Type
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Investment Analyst Internship / Research Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 text-sm outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, research project, or discussion topic..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/10 text-sm outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] hover:scale-[1.02] text-white font-bold text-xs tracking-wider uppercase rounded-xl shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Delivering to {PERSONAL_INFO.email}...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND INQUIRY DIRECTLY</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        formData.subject || 'Inquiry from Portfolio'
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="text-xs font-semibold text-slate-500 hover:text-indigo-600 hover:underline flex items-center gap-1.5 transition-colors py-1 px-2 rounded-lg hover:bg-slate-50"
                    >
                      <span>Or email directly via client</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

