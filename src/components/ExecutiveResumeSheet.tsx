import React from 'react';
import { PERSONAL_INFO, VOLUNTEER_WAYS } from '../data/portfolioData';
import { Mail, MapPin, Globe, GraduationCap } from 'lucide-react';

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
            Student CV / Volunteer Profile
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
            willyp.com.ng
          </span>
        </div>
      </div>

      {/* Summary Profile */}
      <div className="mb-5 space-y-1.5">
        <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
          Personal Profile &amp; Objective
        </h2>
        <p className="text-xs text-slate-700 leading-relaxed">
          Political Science student at Crawford University with a genuine interest in governance, public policy, and financial markets, actively developing practical skills in virtual assistance and administrative support. Seeking opportunities to volunteer, intern, and assist individuals or small businesses with research, spreadsheets, and administrative tasks to gain real-world experience.
        </p>
      </div>

      {/* Education */}
      <div className="mb-5 space-y-2">
        <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
          Education
        </h2>
        <div className="flex justify-between items-baseline text-xs">
          <div>
            <span className="font-bold text-slate-900">Crawford University</span>
            <div className="text-slate-700 font-semibold">BSc Political Science</div>
          </div>
          <span className="text-indigo-700 font-bold text-[11px]">October 2024 – September 2028</span>
        </div>
        <div className="text-[11px] text-slate-600">
          Undergraduate Degree. Core Study Areas: Public Administration, Governance Systems, Political Economy, Institutional Frameworks, and International Affairs.
        </div>
      </div>

      {/* Core Skills & Practical Tools */}
      <div className="mb-5 space-y-2">
        <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
          Skills &amp; Capabilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1">
              Virtual Assistance &amp; Admin Support
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-0.5 text-[11px]">
              <li>Online research, fact-checking &amp; source gathering</li>
              <li>Data entry, spreadsheet formatting &amp; list cleaning</li>
              <li>Document formatting &amp; proofreading (Word, Google Docs)</li>
              <li>Inbox organization &amp; calendar appointment scheduling</li>
              <li>Google Drive &amp; OneDrive file management</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1">
              Tools &amp; Learning Interests
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-0.5 text-[11px]">
              <li>Microsoft Excel (developing: SUM, AVERAGE, IF, VLOOKUP)</li>
              <li>Google Workspace (Docs, Sheets, Slides, Drive)</li>
              <li>Reading basic financial statements (educational learning)</li>
              <li>Tracking Nigerian Exchange (NGX) company news</li>
              <li>Drafting clean summary notes and meeting minutes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Volunteer Readiness & How I Can Assist */}
      <div className="mb-5 space-y-2.5">
        <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1">
          Ways I Can Help (Volunteer &amp; Entry-Level Support)
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          {VOLUNTEER_WAYS.map((way) => (
            <div key={way.title} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900 text-[11px]">
                {way.title}
              </span>
              <p className="text-[11px] text-slate-600 leading-normal">
                {way.howICanHelp}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Work Values & Note */}
      <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-500 flex flex-col sm:flex-row justify-between gap-2">
        <span>Work Approach: Curiosity • Attention to Detail • Consistency • Willingness to Learn</span>
        <span className="italic">Available for remote volunteering and entry-level support.</span>
      </div>
    </div>
  );
};
