import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  GraduationCap,
  MapPin,
  CheckCircle2,
  FileSpreadsheet,
  Globe,
  FileText,
  Calendar,
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Authentic, Curious &amp; Dedicated to Growing
              </h2>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              {PERSONAL_INFO.aboutMeText.map((paragraph, index) => (
                <p key={index} className={index === 4 ? 'font-medium text-slate-800' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                What Guides My Work
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Curiosity', desc: 'Always asking and learning' },
                  { label: 'Attention to Detail', desc: 'Accurate, tidy work' },
                  { label: 'Consistency', desc: 'Meeting commitments' },
                  { label: 'Willingness to Learn', desc: 'Open to real feedback' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>{item.label}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {onOpenResume && (
              <div className="pt-2">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Student Resume &amp; Background &rarr;</span>
                </button>
              </div>
            )}
          </motion.div>

          {/* Right Column: Clear, Prominent Education & Overview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Prominent Education Card */}
            <div className="p-6 bg-indigo-50/50 rounded-2xl border-2 border-indigo-200 shadow-2xs space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-600 text-white rounded-xl shrink-0 shadow-2xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
                      Current Education
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      {PERSONAL_INFO.education.institution}
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 shrink-0">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>

              <div className="pt-2 border-t border-indigo-100 space-y-1.5 text-xs">
                <div className="text-slate-900 font-semibold text-sm">
                  Degree: {PERSONAL_INFO.education.degree}
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Status: {PERSONAL_INFO.education.status}</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-xs pt-1">
                  {PERSONAL_INFO.education.description}
                </p>
              </div>
            </div>

            {/* Practical Skills Card */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                <span>Virtual Assistance &amp; Admin Support</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Developing reliable skills in data entry, Google Sheets &amp; Excel, document formatting, email organization, and online research for small businesses and busy professionals.
              </p>
            </div>

            {/* Academic Interests Card */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700">
                <Globe className="w-4 h-4 text-purple-600" />
                <span>Policy &amp; Financial Markets</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reading public policy papers, studying governance institutions, and exploring the basics of Nigerian Exchange (NGX) equities and company financial statements for personal learning.
              </p>
            </div>

            {/* Location & Volunteer Readiness */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Based in {PERSONAL_INFO.location}</span>
              </div>
              <span className="font-semibold text-indigo-600">
                Available for Remote Volunteering
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
