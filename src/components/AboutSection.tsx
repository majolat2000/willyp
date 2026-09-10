import React from 'react';
import { AboutIllustration } from './Illustrations';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Quote, GraduationCap, MapPin, User, Target, ArrowRight, FileDown } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/70 relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Satner Sitting Analyst & Plant Illustration (Matching Screenshot) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
          >
            <div className="w-full max-w-md transition-transform duration-300 hover:scale-[1.02]">
              <AboutIllustration className="w-full max-w-md drop-shadow-sm" />
            </div>
          </motion.div>

          {/* Right Column: Introduce Myself Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 order-1 lg:order-2"
          >
            {/* Header matching screenshot text: LET'S INTRODUCE ABOUT MYSELF */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
                LET&apos;S INTRODUCE ABOUT MYSELF
              </h2>
            </div>

            {/* Core Quote Box */}
            <div className="relative pl-6 py-3 border-l-4 border-indigo-600 bg-white/90 rounded-r-xl shadow-xs hover:bg-white hover:shadow-sm transition-all duration-200">
              <Quote className="w-5 h-5 text-indigo-400 mb-1" />
              <p className="text-base sm:text-lg font-semibold text-slate-900 italic leading-relaxed">
                &ldquo;{PERSONAL_INFO.aboutQuote}&rdquo;
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>{PERSONAL_INFO.bioParagraph1}</p>
              <p>{PERSONAL_INFO.bioParagraph2}</p>
            </div>

            {/* Quick Profile Summary Pills/Grid with Hover Lift */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70 shadow-xs hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="p-2 bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white rounded-lg shrink-0 transition-colors duration-200">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Age &amp; Profile</div>
                  <div className="text-sm font-bold text-slate-800">{PERSONAL_INFO.age} Years Old • Analyst</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70 shadow-xs hover:border-purple-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="p-2 bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white rounded-lg shrink-0 transition-colors duration-200">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Education</div>
                  <div className="text-sm font-bold text-slate-800">Crawford University, Nigeria</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70 shadow-xs hover:border-emerald-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="p-2 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white rounded-lg shrink-0 transition-colors duration-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Base Location</div>
                  <div className="text-sm font-bold text-slate-800">Lagos, Nigeria</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200/70 shadow-xs hover:border-amber-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="p-2 bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white rounded-lg shrink-0 transition-colors duration-200">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Major &amp; Field</div>
                  <div className="text-sm font-bold text-slate-800">Political Science &amp; Int&apos;l Relations</div>
                </div>
              </div>
            </div>

            {/* Action buttons with Hover States */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] hover:scale-[1.02] text-white font-bold text-xs tracking-wider uppercase rounded-lg shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3 border border-slate-300 hover:border-indigo-600 hover:text-indigo-600 active:scale-[0.98] hover:scale-[1.02] text-slate-700 font-bold text-xs tracking-wider uppercase rounded-lg transition-all duration-200 flex items-center gap-2 bg-white hover:shadow-xs cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>DOWNLOAD CV</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
