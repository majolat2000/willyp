import React from 'react';
import { VOLUNTEER_WAYS } from '../data/portfolioData';
import {
  Briefcase,
  Search,
  FileCheck2,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

export const VolunteerSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-indigo-600" />;
      case 'Search':
        return <Search className="w-5 h-5 text-emerald-600" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-5 h-5 text-blue-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-purple-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="volunteer" className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            Gaining Experience &amp; Lending a Hand
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            How I Can Help You (Volunteer &amp; Support)
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Rather than claiming fictitious past clients, I am actively offering my time and developing skills to assist individuals, small businesses, student groups, and community projects.
          </p>
        </motion.div>

        {/* 4 Practical Ways William Can Help */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {VOLUNTEER_WAYS.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  {getIcon(way.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {way.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {way.howICanHelp}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-200/80">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Practical tasks I can take off your plate:
                </div>
                {way.examples.map((example) => (
                  <div key={example} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real & Human Commitment Callout */}
        <div className="p-7 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-indigo-300 text-xs font-semibold">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>No Exaggeration • Real Dedication</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Have a task or project you need help with?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
              Whether you need someone to clean up a spreadsheet, format a document, or do web research legwork, I would love to hear from you. I take instructions carefully, ask questions when unsure, and respect your time.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs shrink-0 cursor-pointer"
          >
            Message Me
          </a>
        </div>

      </div>
    </section>
  );
};
