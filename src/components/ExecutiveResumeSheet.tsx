import React from 'react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { Mail, MapPin, Globe, GraduationCap, CheckCircle2 } from 'lucide-react';

interface ExecutiveResumeSheetProps {
  isPreview?: boolean;
}

export const ExecutiveResumeSheet: React.FC<ExecutiveResumeSheetProps> = ({ isPreview = false }) => {
  return (
    <div
      className={`bg-white text-slate-800 p-8 sm:p-10 font-['Plus_Jakarta_Sans',sans-serif] ${
        isPreview
          ? 'max-w-3xl mx-auto shadow-md rounded-2xl border border-slate-200'
          : 'executive-resume-sheet'
      }`}
    >
      {/* Resume Header */}
      <div className="border-b-2 border-slate-900 pb-5 mb-5 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {PERSONAL_INFO.fullName.toUpperCase()}
          </h1>
          <div className="text-xs font-semibold text-indigo-700">
            {PERSONAL_INFO.website}
          </div>
        </div>

        <div className="text-xs sm:text-sm font-bold text-slate-700 tracking-wide">
          {PERSONAL_INFO.roleTitle}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 pt-1">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {PERSONAL_INFO.location}
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-slate-400" />
            {PERSONAL_INFO.email}
          </span>
          <span className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            https://{PERSONAL_INFO.website}
          </span>
        </div>
      </div>

      {/* Summary Profile */}
      <div className="mb-5 space-y-1.5">
        <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
          Personal Profile &amp; Objective
        </h2>
        <p className="text-xs text-slate-700 leading-relaxed">
          Political Science student with a strong curiosity about public policy, institutional governance, and financial markets, alongside developing capabilities in virtual assistance and administrative support. Committed to honest, high-detail work, continuous learning, and seeking opportunities to contribute meaningfully to internships, entry-level administrative tasks, and research projects.
        </p>
      </div>

      {/* Education */}
      <div className="mb-5 space-y-2">
        <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
          Education Details
        </h2>
        <div className="flex justify-between items-baseline text-xs">
          <div>
            <span className="font-bold text-slate-900">Crawford University</span>
            <div className="text-slate-700 font-semibold">BSc Political Science</div>
          </div>
          <span className="text-indigo-700 font-bold text-[11px]">October 2024 – September 2028</span>
        </div>
        <div className="text-[11px] text-slate-600">
          Undergraduate Degree. Core Study Areas: Governance, Public Policy Analysis, Political Economy, Institutional Frameworks, and Administrative Systems.
        </div>
      </div>

      {/* Core Skills & Tools */}
      <div className="mb-5 space-y-2">
        <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
          Developing Skills &amp; Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div>
            <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1">
              Virtual Assistance &amp; Administration
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-0.5 text-[11px]">
              <li>Online research, fact-checking &amp; source verification</li>
              <li>Data entry, spreadsheet formatting &amp; deduplication</li>
              <li>Document formatting &amp; executive layout (Word, Google Docs)</li>
              <li>Inbox organisation, scheduling &amp; calendar management</li>
              <li>Standard operating procedures &amp; cloud filing systems</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1">
              Analytical &amp; Software Proficiency
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-0.5 text-[11px]">
              <li>Microsoft Excel (developing: SUMIFS, XLOOKUP, validation)</li>
              <li>Google Workspace (Sheets, Docs, Slides, Drive)</li>
              <li>Basic financial statement analysis (Balance Sheet, P&amp;L)</li>
              <li>Nigerian Exchange (NGX) equities tracking &amp; annual reports</li>
              <li>Policy impact assessment &amp; structured briefing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Practical Projects & Demonstrations */}
      <div className="mb-5 space-y-2.5">
        <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
          Selected Projects &amp; Demonstrations
        </h2>
        
        <div className="space-y-2.5 text-xs">
          {PROJECTS.slice(0, 4).map((project) => (
            <div key={project.id} className="space-y-0.5">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-slate-900 text-[11px]">
                  {project.title}
                </span>
                <span className="text-[10px] text-slate-500">{project.dateCompleted}</span>
              </div>
              <div className="text-[10px] font-semibold text-indigo-700">
                {project.category} • {project.projectType}
              </div>
              <p className="text-[11px] text-slate-600 leading-normal">
                {project.shortDescription}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Values & Disclaimer */}
      <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
        <span>Work Philosophy: Curiosity • Attention to Detail • Consistency • Willingness to Learn</span>
        <span className="italic">All financial research is for educational demonstration only.</span>
      </div>
    </div>
  );
};
