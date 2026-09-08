import React from 'react';
import {
  ACADEMIC_SUBJECTS,
  CAREER_PILLARS,
  VALUES,
  PERSONAL_INFO,
} from '../data/portfolioData';
import {
  GraduationCap,
  Briefcase,
  Sparkles,
  HeartHandshake,
  Calendar,
  Building2,
  LineChart,
  Coins,
  BadgeDollarSign,
  Landmark,
  Globe,
  TrendingUp,
  Scale,
  ShieldCheck,
  BookOpenCheck,
  FlameKindling,
  Hourglass,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const CareerVisionSection: React.FC = () => {
  const getCareerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-indigo-600" />;
      case 'LineChart':
        return <LineChart className="w-5 h-5 text-blue-600" />;
      case 'Coins':
        return <Coins className="w-5 h-5 text-emerald-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-purple-600" />;
      case 'BadgeDollarSign':
        return <BadgeDollarSign className="w-5 h-5 text-amber-600" />;
      default:
        return <Briefcase className="w-5 h-5 text-indigo-600" />;
    }
  };

  const getAcademicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Landmark':
        return <Landmark className="w-5 h-5 text-indigo-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-purple-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      default:
        return <GraduationCap className="w-5 h-5 text-indigo-600" />;
    }
  };

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpenCheck':
        return <BookOpenCheck className="w-5 h-5 text-indigo-600" />;
      case 'FlameKindling':
        return <FlameKindling className="w-5 h-5 text-amber-600" />;
      case 'Hourglass':
        return <Hourglass className="w-5 h-5 text-emerald-600" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-purple-600" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="vision" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-indigo-600 uppercase">
            TRAJECTORY &amp; FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            CAREER VISION &amp; ACADEMIC FOCUS
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mt-2" />
          <p className="text-slate-600 text-base sm:text-lg pt-2">
            Where institutional political foresight converges with modern financial market execution.
          </p>
        </div>

        {/* Career Vision Hero Callout */}
        <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-400/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE HORIZON</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-['Space_Grotesk']">
              &ldquo;Where finance meets policy.&rdquo;
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              {PERSONAL_INFO.careerGoal}
            </p>

            <div className="pt-4 border-t border-slate-800">
              <div className="text-xs font-bold uppercase tracking-widest text-indigo-300 mb-4">
                Primary Target Sectors
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {CAREER_PILLARS.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-3.5 bg-slate-800/80 hover:bg-slate-800 rounded-xl border border-slate-700/70 transition-colors"
                  >
                    <div className="p-2 bg-indigo-950/80 rounded-lg w-fit mb-2">
                      {getCareerIcon(pillar.iconName)}
                    </div>
                    <div className="text-sm font-bold text-white">{pillar.title}</div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Academic Focus (Left) & Education + Values (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Academic Focus at Crawford University */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                  CURRICULUM RIGOR
                </span>
                <h3 className="text-2xl font-bold text-slate-900 font-['Space_Grotesk']">
                  Academic Focus Areas
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-lg border border-indigo-100">
                Crawford University
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Coursework and research deliberately selected to master how state institutions, international treaties, and developmental economics govern market incentives.
            </p>

            <div className="space-y-3.5">
              {ACADEMIC_SUBJECTS.map((subject) => (
                <div
                  key={subject.name}
                  className="p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-indigo-300 transition-all hover:shadow-xs group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 bg-white rounded-xl border border-slate-200/80 group-hover:border-indigo-200 shadow-2xs shrink-0">
                      {getAcademicIcon(subject.iconName)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {subject.name}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        {subject.description}
                      </p>
                      <div className="mt-2 text-xs text-indigo-900/80 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/50 flex items-center gap-1.5">
                        <ArrowRight className="w-3 h-3 text-indigo-600 shrink-0" />
                        <span><strong>Market Application:</strong> {subject.marketRelevance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Card & Core Values */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education Timeline Box */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                CREDENTIALS
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-['Space_Grotesk']">
                Education
              </h3>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-600 text-white rounded-xl shrink-0 shadow-sm shadow-indigo-600/30">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{PERSONAL_INFO.period}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">
                      {PERSONAL_INFO.degree}
                    </h4>
                    <div className="text-sm font-semibold text-slate-700">
                      {PERSONAL_INFO.university}
                    </div>
                    <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                      Current Status: {PERSONAL_INFO.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values Box */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                GUIDING PHILOSOPHY
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-['Space_Grotesk']">
                Values &amp; Principles
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VALUES.map((val) => (
                  <div
                    key={val.title}
                    className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors"
                  >
                    <div className="p-2 bg-slate-100 rounded-lg w-fit mb-2">
                      {getValueIcon(val.iconName)}
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">{val.title}</h5>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
