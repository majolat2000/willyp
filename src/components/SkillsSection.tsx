import React, { useState } from 'react';
import { CORE_SKILLS, COMPETENCIES } from '../data/portfolioData';
import {
  TrendingUp,
  BarChart3,
  Globe2,
  Compass,
  FileText,
  Calculator,
  Search,
  BookOpen,
  MessageSquareText,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCompetency, setActiveCompetency] = useState<string>(COMPETENCIES[0].id);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-blue-600" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-purple-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-600" />;
      default:
        return <TrendingUp className="w-6 h-6 text-indigo-600" />;
    }
  };

  const getCompetencyIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-indigo-600" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-emerald-600" />;
      case 'Search':
        return <Search className="w-5 h-5 text-blue-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-amber-600" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5 text-purple-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-indigo-600 uppercase">
            SERVICE OFFERS &amp; EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            CORE SKILLS &amp; CAPABILITIES
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mt-2" />
          <p className="text-slate-600 text-base sm:text-lg pt-2">
            Combining rigorous political analysis with quantitative financial models to unlock high-conviction insights.
          </p>
        </div>

        {/* 4 Core Skills Cards (Satner style grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {CORE_SKILLS.map((skill) => (
            <div
              key={skill.id}
              className="bg-white border border-slate-200/80 hover:border-indigo-300 rounded-2xl p-7 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator highlight */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getSkillIcon(skill.iconName)}
                </div>

                <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">
                  {skill.subtitle}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {skill.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* "What I'm Good At" Section (Pillars Showcase) */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WHAT I&apos;M GOOD AT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Space_Grotesk'] leading-tight">
                Practical Competencies In Action
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Applied capabilities developed through independent research, university coursework at Crawford University, and systematic personal financial modeling.
              </p>

              {/* Highlight Card for active competency */}
              {(() => {
                const active = COMPETENCIES.find((c) => c.id === activeCompetency) || COMPETENCIES[0];
                return (
                  <div className="mt-6 p-5 bg-white rounded-2xl border border-indigo-100 shadow-sm space-y-3">
                    <div className="flex items-center gap-2.5 text-indigo-700 font-bold text-sm">
                      {getCompetencyIcon(active.iconName)}
                      <span>{active.title}</span>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {active.detail}
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                      <span>Framework: <strong className="text-slate-700">{active.metricLabel}</strong></span>
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 font-bold rounded-md">{active.metricValue}</span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Right side list of 5 competencies */}
            <div className="lg:col-span-7 space-y-3">
              {COMPETENCIES.map((comp) => {
                const isSelected = activeCompetency === comp.id;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setActiveCompetency(comp.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl transition-all flex items-start gap-4 border ${
                      isSelected
                        ? 'bg-white border-indigo-600 shadow-md ring-2 ring-indigo-500/10'
                        : 'bg-white/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-lg shrink-0 ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {getCompetencyIcon(comp.iconName)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4
                          className={`text-sm sm:text-base font-bold truncate ${
                            isSelected ? 'text-indigo-600' : 'text-slate-900'
                          }`}
                        >
                          {comp.title}
                        </h4>
                        <ChevronRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isSelected ? 'text-indigo-600 translate-x-1' : 'text-slate-400'
                          }`}
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 line-clamp-2">
                        {comp.detail}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
