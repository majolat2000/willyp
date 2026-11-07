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
            {/* Card 1: Education Details */}
            <div className="p-6 bg-indigo-50/40 rounded-2xl border-2 border-indigo-200/90 shadow-2xs space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-600 text-white rounded-xl shrink-0 shadow-2xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider">
                      Education Details
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      Crawford University
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200 shrink-0">
                  Oct 2024 – Sep 2028
                </span>
              </div>

              <div className="pt-1 border-t border-indigo-100/80 space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-slate-800 font-semibold text-sm">
                  <span>Degree: BSc Political Science</span>
                  <span className="text-[11px] font-normal text-slate-500">Undergraduate</span>
                </div>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Currently pursuing a Bachelor of Science (BSc) in Political Science at Crawford University (October 2024 – September 2028). Coursework covers governance, public policy, political economy, and institutional systems.
                </p>
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
