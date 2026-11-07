import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, ArrowRight, Mail, Sparkles, BookOpen, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white"
    >
      {/* Subtle background ambient accents */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-slate-100/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authentic Content & Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status / Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Political Science Student • Aspiring VA &amp; Researcher</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 tracking-tight leading-[1.15]">
              {PERSONAL_INFO.headline}
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed">
              {PERSONAL_INFO.subheading}
            </p>

            {/* Supporting Text */}
            <div className="space-y-3 text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
              <p>
                I’m interested in understanding how institutions, policies, businesses and financial markets shape the world around us. Alongside my academic interests, I’m building skills in administrative support, online research, organisation and data management.
              </p>
              <p>
                I’m currently developing my experience through independent projects, research and practical learning. I’m always open to opportunities to learn, contribute and collaborate.
              </p>
            </div>

            {/* Location & Focus Highlights */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/90 rounded-lg shadow-2xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/90 rounded-lg shadow-2xs font-medium">
                <BookOpen className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Crawford University • BSc Political Science (Oct 2024 – Sep 2028)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/90 rounded-lg shadow-2xs font-medium">
                <Layers className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Virtual Assistance &amp; Research</span>
              </div>
            </div>

            {/* Action Buttons requested: "Explore My Work" & "Let’s Connect" */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollTo('portfolio')}
                className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 hover:text-indigo-600 border border-slate-300 hover:border-indigo-400 font-semibold text-sm rounded-xl shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Let’s Connect</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Prominent Portrait of William Okafor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative background framing */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-indigo-100 to-transparent -z-10 rotate-1 blur-xs" />
              <div className="absolute -inset-0.5 rounded-2xl border border-slate-200/80 -z-10" />

              {/* Real Portrait Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-slate-100">
                  <img
                    src={PERSONAL_INFO.imagePath}
                    alt={PERSONAL_INFO.fullName}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Photo Caption Card */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                        {PERSONAL_INFO.fullName}
                      </h3>
                      <p className="text-xs font-semibold text-indigo-600">
                        {PERSONAL_INFO.university}
                      </p>
                      <p className="text-xs text-slate-500">
                        {PERSONAL_INFO.degree} • {PERSONAL_INFO.period}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Available
                    </span>
                  </div>
                  <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Virtual Assistance • Research</span>
                    <span className="font-medium text-slate-600">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Subtle floating quote chip */}
              <div className="hidden sm:block absolute -bottom-5 -left-4 bg-white/95 backdrop-blur-sm p-3.5 rounded-xl border border-slate-200 shadow-md max-w-xs text-xs text-slate-700">
                <div className="flex items-center gap-1.5 text-indigo-600 font-semibold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curiosity &amp; Discipline</span>
                </div>
                <p className="italic text-slate-600">
                  &ldquo;Focused on learning, building useful skills, and gaining hands-on experience.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
