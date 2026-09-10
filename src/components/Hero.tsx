import React from 'react';
import { HeroIllustration } from './Illustrations';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, FileDown, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-white"
    >
      {/* Ghost Watermark Typography (Signature Satner Aesthetic from screenshot) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.045, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        aria-hidden="true"
        className="absolute top-20 left-4 lg:left-12 select-none pointer-events-none -z-0 font-black text-slate-900 leading-none text-[90px] sm:text-[140px] md:text-[200px] lg:text-[240px] font-['Space_Grotesk'] tracking-widest"
      >
        WILLIAM
      </motion.div>

      {/* Decorative hairline box on left (like screenshot) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-28 left-6 lg:left-14 w-28 h-44 border-2 border-slate-200/60 pointer-events-none -z-0"
      />

      {/* Floating subtle ambient accents (from screenshot) */}
      <div className="absolute top-28 right-1/4 w-3 h-3 rounded-full bg-purple-300/60 pointer-events-none animate-pulse" />
      <div className="absolute top-48 left-1/3 w-2.5 h-2.5 rounded-full bg-indigo-300/50 pointer-events-none" />
      <div className="absolute bottom-20 left-12 w-4 h-4 rounded-full bg-emerald-200/60 pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* "HELLO ──────" signature line from screenshot */}
            <div className="flex items-center gap-4">
              <span className="text-sm md:text-base font-extrabold tracking-[0.25em] text-slate-900 uppercase">
                HELLO
              </span>
              <div className="h-[2px] w-28 sm:w-44 bg-slate-900" />
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] font-['Space_Grotesk']">
              I AM <span className="text-slate-900">{PERSONAL_INFO.name.toUpperCase()}</span>
            </h1>

            {/* Title / Profession Subheader in tracked uppercase */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider text-indigo-600">
                {PERSONAL_INFO.title}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100/80 transition-colors cursor-default">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open for Opportunities
              </span>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Location & University Chips */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-sm text-slate-600">
              <div className="flex items-center gap-1.5 font-medium bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100 px-3.5 py-1.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-2xs">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100 px-3.5 py-1.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-2xs">
                <TrendingUp className="w-4 h-4 text-indigo-600" />
                <span>Nigerian Equities &amp; Macro Policy</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-100 px-3.5 py-1.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>Crawford University</span>
              </div>
            </div>

            {/* Buttons (HIRE ME & GET CV strictly styled to match screenshot!) */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Vibrant Indigo/Purple HIRE ME Button with Drop Shadow & Hover Scale */}
              <a
                id="hero-hire-me-btn"
                href="#contact"
                className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs sm:text-sm tracking-widest uppercase rounded-lg shadow-lg shadow-indigo-600/35 hover:shadow-indigo-600/50 hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>HIRE ME</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Clean White GET CV Outline Button */}
              <button
                id="hero-get-cv-btn"
                onClick={onOpenResume}
                className="px-8 py-3.5 bg-white hover:bg-slate-50 hover:border-indigo-700 text-indigo-600 hover:text-indigo-700 border-2 border-indigo-600 font-bold text-xs sm:text-sm tracking-widest uppercase rounded-lg transition-all duration-200 flex items-center gap-2 shadow-xs hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>GET CV</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Illustration (Vector style matching screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center items-center group"
          >
            <div className="transition-transform duration-500 group-hover:scale-[1.02]">
              <HeroIllustration className="w-full max-w-md lg:max-w-lg drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-md" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
