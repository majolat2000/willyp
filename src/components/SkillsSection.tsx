import React from 'react';
import { VA_SKILLS, INTEREST_AREAS } from '../data/portfolioData';
import {
  Search,
  Table,
  FileSpreadsheet,
  FileText,
  MailCheck,
  ClipboardList,
  Landmark,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsSection: React.FC = () => {
  const getVASkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-indigo-600" />;
      case 'Table':
        return <Table className="w-5 h-5 text-emerald-600" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-blue-600" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-amber-600" />;
      case 'MailCheck':
        return <MailCheck className="w-5 h-5 text-purple-600" />;
      case 'ClipboardList':
        return <ClipboardList className="w-5 h-5 text-rose-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-24 bg-slate-50/70 border-t border-slate-200/80">
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
            Practical Capabilities &amp; Study Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Skills I’m Building &amp; Practicing
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Instead of presenting exaggerated claims or simulated projects, here is an honest overview of what I know how to do, the tools I use, and the subjects I actively study.
          </p>
        </motion.div>

        {/* =========================================================================
            PART 1: VIRTUAL ASSISTANCE & ADMINISTRATIVE SKILLS
           ========================================================================= */}
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700">
              Administrative &amp; Support Skills
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Virtual Assistance &amp; Organization
            </h3>
            <p className="text-sm text-slate-600">
              Practical support services I am developing and available to undertake at an entry-level scope for individuals, small business owners, or community organizations.
            </p>
          </div>

          {/* 6 Clean Skill Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VA_SKILLS.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getVASkillIcon(skill.iconName)}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {skill.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            PART 2: ACADEMIC & MARKET INTERESTS
           ========================================================================= */}
        <div className="space-y-6 pt-8 border-t border-slate-200">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700">
              Academic Interests &amp; Self-Study
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Political Analysis &amp; Equity Curiosity
            </h3>
            <p className="text-sm text-slate-600">
              Topics I explore as part of my university degree and independent reading. Not presented as professional advisory work, but as genuine intellectual curiosity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INTEREST_AREAS.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs space-y-5"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 flex items-center justify-center shrink-0">
                    {interest.iconName === 'Landmark' ? (
                      <Landmark className="w-5 h-5 text-indigo-600" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {interest.category}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900">
                      {interest.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {interest.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    What I actively read &amp; learn:
                  </div>
                  {interest.whatILearn.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Honest Transparency Note */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-800 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Honest Note:</strong> I am a student building knowledge and practical experience. I do not provide licensed investment advice or professional research consultations. Any notes I make about markets or politics are for self-study and learning purposes only.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
