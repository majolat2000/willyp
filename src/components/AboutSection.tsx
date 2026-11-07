import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  GraduationCap,
  MapPin,
  CheckCircle2,
  FileSpreadsheet,
  Globe,
  Compass,
  FileText,
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative (Exact text as requested) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Curiosity, Humility &amp; A Commitment to Learning
              </h2>
            </div>

            {/* Narrative text requested in Section 3 */}
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              {PERSONAL_INFO.aboutMeText.map((paragraph, index) => (
                <p key={index} className={index === 4 ? 'font-medium text-slate-800' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values / Work Philosophy */}
            <div className="pt-2">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Foundational Principles
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Curiosity', desc: 'Asking the right questions' },
                  { label: 'Attention to Detail', desc: 'Accuracy in every task' },
                  { label: 'Consistency', desc: 'Reliable follow-through' },
                  { label: 'Willingness to Learn', desc: 'Embracing feedback' },
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
                  <span>View Full Curriculum Vitae &amp; Background &rarr;</span>
                </button>
              </div>
            )}
          </motion.div>

          {/* Right Column: Profile Summary Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Card 1: Academic Background */}
            <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-indigo-100/80 text-indigo-700 rounded-xl shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    Academic Background
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    B.Sc. Political Science &amp; International Relations
                  </h3>
                  <p className="text-xs text-slate-600">
                    {PERSONAL_INFO.university} • Undergraduate Student
                  </p>
                  <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                    Coursework covers comparative politics, political economy, public administration, international diplomacy, and institutional governance.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Virtual Assistance Capabilities */}
            <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-emerald-100/80 text-emerald-700 rounded-xl shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    Virtual Assistance Focus
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Administrative &amp; Research Support
                  </h3>
                  <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                    Building proficiency in spreadsheet management, data entry, report preparation, web research synthesis, and inbox/calendar coordination for busy individuals.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Research & Market Curiosity */}
            <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-2xs">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 bg-purple-100/80 text-purple-700 rounded-xl shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                    Analytical Exploration
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Public Policy &amp; Equity Fundamentals
                  </h3>
                  <p className="text-xs text-slate-500 pt-1 leading-relaxed">
                    Independent tracking of Nigerian Exchange (NGX) equities, corporate annual reports, public policy reforms, and macroeconomic policy shifts.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Location & Availability */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Based in {PERSONAL_INFO.location}</span>
              </div>
              <span className="font-semibold text-indigo-600">
                Remote &amp; Hybrid Collaborations
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
