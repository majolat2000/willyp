import React, { useEffect, useRef } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Building,
  GraduationCap,
  TrendingUp,
  MapPin,
  Mail,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  CORE_SKILLS,
  COMPETENCIES,
  PROJECTS,
  ACADEMIC_SUBJECTS,
  VALUES,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlainTextResume = () => {
    const text = `
${PERSONAL_INFO.fullName.toUpperCase()}
Aspiring Investment & Policy Analyst
Lagos, Nigeria | ${PERSONAL_INFO.email}
Education: Crawford University (Oct 2024 - Jun 2028)
Degree: B.Sc. Political Science & International Relations (In Progress)

ABOUT ME:
${PERSONAL_INFO.bioParagraph1}
${PERSONAL_INFO.bioParagraph2}

PHILOSOPHY:
"${PERSONAL_INFO.aboutQuote}"

CORE SKILLS:
${CORE_SKILLS.map((s) => `- ${s.title}: ${s.description}`).join('\n')}

WHAT I'M GOOD AT:
${COMPETENCIES.map((c) => `- ${c.title}: ${c.detail}`).join('\n')}

PROJECTS & EXPERIENCE:
${PROJECTS.map((p) => `${p.title} (${p.period})\n${p.bulletPoints.map((b) => `  * ${b}`).join('\n')}`).join('\n\n')}

ACADEMIC FOCUS:
${ACADEMIC_SUBJECTS.map((a) => `- ${a.name}: ${a.description}`).join('\n')}

CAREER VISION:
${PERSONAL_INFO.careerGoal}

CORE VALUES:
${VALUES.map((v) => `- ${v.title}: ${v.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/75 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white">
      {/* Modal Dialog Card */}
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              CURRICULUM VITAE
            </span>
            <span className="text-xs text-slate-400">• Executive Format</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPlainTextResume}
              className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 flex items-center gap-1.5 transition-colors"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 flex items-center gap-1.5 shadow-sm transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors ml-2"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div
          ref={resumeRef}
          className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-800 text-sm print:p-0 print:overflow-visible"
        >
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-['Space_Grotesk'] tracking-tight">
                  {PERSONAL_INFO.fullName.toUpperCase()}
                </h1>
                <p className="text-base font-bold text-indigo-700 uppercase tracking-wide mt-1">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {PERSONAL_INFO.tagline}
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 font-medium">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="text-indigo-600 font-bold">
                  Crawford University (Expected 2028)
                </div>
              </div>
            </div>
          </div>

          {/* About / Executive Summary */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Professional Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {PERSONAL_INFO.bioParagraph1} {PERSONAL_INFO.bioParagraph2}
            </p>
            <div className="mt-2 text-xs italic text-indigo-700 font-medium">
              &ldquo;{PERSONAL_INFO.aboutQuote}&rdquo;
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm font-bold text-slate-900">
                  {PERSONAL_INFO.degree}
                </div>
                <div className="text-xs font-semibold text-indigo-700">
                  {PERSONAL_INFO.university}
                </div>
              </div>
              <div className="text-xs text-slate-500 font-medium text-right">
                {PERSONAL_INFO.period}
              </div>
            </div>
          </div>

          {/* Core Skills & Competencies */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Core Skills &amp; Applied Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CORE_SKILLS.map((skill) => (
                <div key={skill.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="font-bold text-slate-900">{skill.title}</div>
                  <div className="text-slate-600 mt-0.5">{skill.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects & Experience */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-3">
              Projects &amp; Analytical Experience
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">{proj.title}</h3>
                    <span className="text-xs text-slate-500">{proj.period}</span>
                  </div>
                  <p className="text-xs text-slate-600">{proj.summary}</p>
                  <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1">
                    {proj.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Focus */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Academic Curriculum Focus
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {ACADEMIC_SUBJECTS.map((sub) => (
                <span key={sub.name} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded font-medium">
                  {sub.name}
                </span>
              ))}
            </div>
          </div>

          {/* Career Vision & Values */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-2.5">
              Career Trajectory &amp; Values
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed mb-2">
              <strong>Long-term Goal:</strong> {PERSONAL_INFO.careerGoal}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
              {VALUES.map((v) => (
                <div key={v.title} className="p-2 bg-slate-50 border border-slate-100 rounded text-slate-700 font-medium">
                  {v.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
