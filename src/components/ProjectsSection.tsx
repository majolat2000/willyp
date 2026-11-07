import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import {
  FileText,
  TrendingUp,
  Landmark,
  FileSpreadsheet,
  Calendar,
  Layers,
  ArrowRight,
  X,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Political Research', 'Equity Research', 'Virtual Assistance'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Political Research':
        return <Landmark className="w-4 h-4 text-indigo-600" />;
      case 'Equity Research':
        return <TrendingUp className="w-4 h-4 text-emerald-600" />;
      case 'Virtual Assistance':
        return <FileSpreadsheet className="w-4 h-4 text-blue-600" />;
      default:
        return <FileText className="w-4 h-4 text-slate-600" />;
    }
  };

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case 'Academic Work':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Independent Research':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Practice Project':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
            Portfolio &amp; Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Actual Projects &amp; Demonstrations
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Practical demonstrations of developing skills across political analysis, equity research, and virtual assistance. Clearly labeled as academic, independent research, or practice projects.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === category
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-7 space-y-4">
                {/* Category & Project Type Chips */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getProjectTypeColor(
                      project.projectType
                    )}`}
                  >
                    {project.projectType}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Skills Demonstrated */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Skills Demonstrated
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skillsDemonstrated.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-50 text-slate-600 border border-slate-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer: Date & View Project Button */}
              <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{project.dateCompleted}</span>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================================================================
            INTERACTIVE PROJECT DETAILS MODAL
           ========================================================================= */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-xl overflow-hidden my-8"
              >
                {/* Modal Header */}
                <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                        {selectedProject.category}
                      </span>
                      <span className="text-xs text-slate-300">•</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getProjectTypeColor(
                          selectedProject.projectType
                        )}`}
                      >
                        {selectedProject.projectType}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Completed: {selectedProject.dateCompleted}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                  {/* Overview */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Project Overview
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>

                  {/* Key Takeaways & Methodology */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Key Takeaways &amp; Methodology
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.keyTakeaways.map((point, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables / Output */}
                  {selectedProject.deliverables && (
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Completed Deliverables
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.deliverables.map((deliv) => (
                          <span
                            key={deliv}
                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium"
                          >
                            {deliv}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills Demonstrated */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.skillsDemonstrated.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Educational Disclaimer for Equity Projects */}
                  {selectedProject.disclaimer && (
                    <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200/80 text-xs text-amber-800 flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{selectedProject.disclaimer}</span>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
