import React from 'react';
import {
  VA_SERVICES,
  VA_SERVICES_INTRO,
  ANALYSIS_AREAS,
  ANALYSIS_SERVICES_INTRO,
} from '../data/portfolioData';
import {
  Search,
  Table,
  FileSpreadsheet,
  FileText,
  MailCheck,
  FolderTree,
  ClipboardList,
  Landmark,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsSection: React.FC = () => {
  const getVAIcon = (iconName: string) => {
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
      case 'FolderTree':
        return <FolderTree className="w-5 h-5 text-teal-600" />;
      case 'ClipboardList':
        return <ClipboardList className="w-5 h-5 text-rose-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="what-i-do" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            Services &amp; Areas of Interest
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            What I Do &amp; What I’m Building
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Practical administrative support for individuals and small businesses, alongside dedicated academic and independent research.
          </p>
        </motion.div>

        {/* =========================================================================
            CATEGORY A: VIRTUAL ASSISTANCE
           ========================================================================= */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100/70 text-indigo-800 text-xs font-bold uppercase tracking-wider">
              Category A
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {VA_SERVICES_INTRO.headline}
            </h3>
            <p className="text-lg font-medium text-slate-700 leading-relaxed">
              {VA_SERVICES_INTRO.intro}
            </p>
            <p className="text-sm text-slate-500 italic">
              {VA_SERVICES_INTRO.scopeNote}
            </p>
          </div>

          {/* 7 VA Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VA_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getVAIcon(service.iconName)}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            CATEGORY B: POLITICAL & EQUITY ANALYSIS
           ========================================================================= */}
        <div className="space-y-8 pt-6 border-t border-slate-200/90">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-100/70 text-purple-800 text-xs font-bold uppercase tracking-wider">
              Category B
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {ANALYSIS_SERVICES_INTRO.headline}
            </h3>
            <p className="text-lg font-medium text-slate-700 leading-relaxed">
              {ANALYSIS_SERVICES_INTRO.intro}
            </p>
          </div>

          {/* Mandatory Critical Disclaimer Alert Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-900 flex items-start gap-3.5 shadow-2xs">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm leading-relaxed">
              <span className="font-bold uppercase tracking-wider text-amber-800 block text-xs">
                Important Transparency Notice
              </span>
              <p className="text-amber-800/90">
                {ANALYSIS_SERVICES_INTRO.disclaimer}
              </p>
            </div>
          </div>

          {/* 2 Focused Area Columns: Political Research & Equity Research */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ANALYSIS_AREAS.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 space-y-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      area.isEquity
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                    }`}
                  >
                    {area.isEquity ? (
                      <TrendingUp className="w-6 h-6" />
                    ) : (
                      <Landmark className="w-6 h-6" />
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {area.subtitle}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {area.title}
                    </h4>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {area.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Areas of Study &amp; Output
                  </div>
                  {area.items.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          area.isEquity ? 'text-emerald-600' : 'text-indigo-600'
                        }`}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {area.isEquity && (
                  <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100 italic">
                    Focus: Non-commercial educational study of domestic NGX companies, annual reports, and macro policy indicators.
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
