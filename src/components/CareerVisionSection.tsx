import React from 'react';
import { PERSONAL_INFO, LEARNING_PILLARS } from '../data/portfolioData';
import {
  GraduationCap,
  Laptop,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Handshake,
} from 'lucide-react';
import { motion } from 'motion/react';

export const CareerVisionSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-indigo-600" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section id="learning" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header with exact requested text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            Experience &amp; Professional Development
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Learning, Building &amp; Growing
          </h2>
          <div className="space-y-3 text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
            <p>
              I’m currently focused on developing practical skills and building a body of work that demonstrates my interests and capabilities.
            </p>
            <p>
              Through academic learning, independent research and personal projects, I’m working towards gaining the experience needed to contribute meaningfully in administrative support, political research and financial analysis.
            </p>
            <p className="font-semibold text-slate-800">
              I’m particularly interested in internships, entry-level opportunities, mentorship and collaborative projects.
            </p>
          </div>
        </motion.div>

        {/* 4 Transparent Development Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEARNING_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {getPillarIcon(pillar.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Daily &amp; Academic Focus
                </div>
                {pillar.focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Opportunity Readiness Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-900 to-slate-900 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-indigo-200 text-xs font-semibold">
              <Handshake className="w-3.5 h-3.5" />
              <span>Open for Collaboration</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Looking for Entry-Level Projects, Internships &amp; Mentorship
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Ready to assist with administrative tasks, data entry, research briefs, or spreadsheet organization while learning from experienced professionals.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:scale-[1.02] shrink-0"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
};
