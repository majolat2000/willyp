import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  ExternalLink,
  Linkedin,
  MessageSquare,
  Clock,
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
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    try {
      // Direct form submission to wp0222137@gmail.com
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
            ? `[willyp.com.ng] ${formData.subject.trim()} — ${formData.name.trim()}`
            : `New Message on Portfolio from ${formData.name.trim()}`,
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Fallback required');
      }
    } catch {
      // Fallback: create mailto link
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || 'Opportunity / Collaboration'
      )}&body=${encodeURIComponent(
        `Hi William,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
      setSubmitted(true);
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
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Supporting Text & Direct Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                {PERSONAL_INFO.contactHeadline}
              </h2>
            </div>

            <div className="space-y-3 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                I’m open to learning opportunities, internships, entry-level projects, research collaborations and conversations with people working in areas I’m interested in.
              </p>
              <p className="font-medium text-slate-800">
                I’d be happy to connect.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-100/80 text-indigo-700 rounded-lg">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 hover:bg-white rounded-md border border-slate-200 transition-all cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-3 h-3" /> Copy
                    </span>
                  )}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100/80 text-emerald-700 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* LinkedIn Profile Card */}
              <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100/80 text-blue-700 rounded-lg">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Professional Network
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      William Okafor on LinkedIn
                    </div>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold text-blue-700 hover:bg-white rounded-md border border-slate-200 transition-all flex items-center gap-1"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Prompt response typically within 24 hours</span>
            </div>
          </motion.div>

          {/* Right Column: Clean, Authentic Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-slate-50/80 p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Thank you for reaching out!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
                  I appreciate your message and will review it promptly. I will get back to you at your email address as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-white border border-slate-200 rounded-lg shadow-2xs cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Subject / Project Nature
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Virtual Assistance, Internship Opportunity, Research Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me a bit about the project, task, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
