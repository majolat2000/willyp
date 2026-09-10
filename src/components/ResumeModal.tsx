import React, { useEffect } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  FileCheck,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  CORE_SKILLS,
  COMPETENCIES,
  PROJECTS,
  ACADEMIC_SUBJECTS,
  VALUES,
} from '../data/portfolioData';
import { ExecutiveResumeSheet } from './ExecutiveResumeSheet';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

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
${PERSONAL_INFO.title}
${PERSONAL_INFO.location} | ${PERSONAL_INFO.email} | Crawford University (Expected 2028)

EXECUTIVE PROFILE:
${PERSONAL_INFO.bioParagraph1} ${PERSONAL_INFO.bioParagraph2}
Philosophy: "${PERSONAL_INFO.aboutQuote}"

EDUCATION:
Crawford University, Nigeria (Oct 2024 – Jun 2028)
Degree: ${PERSONAL_INFO.degree}
Track: First Class Honors Track | Focus: Political Economy & Capital Markets

RESEARCH & ANALYTICAL PROJECTS:
1. Personal Investment Research — Nigerian Equities (NGX) (2024 – Present)
   * Fundamental equity research on Tier-1 banks (CAR, NIM, FX gains).
   * Valuation ratio modeling (P/E, P/B, Dividend Yields) and NGX market tracking.
   * Disciplined portfolio allocation, position sizing, and stop-loss criteria.

2. Budget & Capital Allocation Systems (2024 – Present)
   * Designed cash flow budgeting systems with automated expenditure categorization.
   * Modeled inflation-hedged scenarios and optimized discretionary savings rate.

3. Macro Policy & Geopolitical Risk Analysis (2024 – Present)
   * Analyzed Central Bank of Nigeria (CBN) MPR rate hikes, FX unification, and subsidy removal.
   * Evaluated geopolitical trade dynamics and sovereign policy risks.

CORE COMPETENCIES:
${CORE_SKILLS.map((s) => `• ${s.title}: ${s.description}`).join('\n')}

ACADEMIC FOCUS:
${ACADEMIC_SUBJECTS.map((a) => `• ${a.name}: ${a.description}`).join('\n')}

VALUES & CONDUCT:
${VALUES.map((v) => `• ${v.title}: ${v.description}`).join('\n')}

CAREER TARGET:
${PERSONAL_INFO.careerGoal}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/80 backdrop-blur-sm overflow-y-auto print:hidden">
      {/* Modal Dialog Card */}
      <div className="bg-slate-100 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-300 overflow-hidden my-auto flex flex-col max-h-[94vh]">
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-['Space_Grotesk']">
              CURRICULUM VITAE
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <FileCheck className="w-3 h-3" />
              <span>Standard 1-Page Executive PDF</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPlainTextResume}
              className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              id="modal-print-cv-btn"
              onClick={handlePrint}
              className="px-4 py-1.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg flex items-center gap-1.5 shadow-md shadow-indigo-600/25 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              title="Print or Save as PDF (Guaranteed 1-page)"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors ml-1 cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable Canvas Showing the Realistic 1-Page Document */}
        <div className="p-3 sm:p-6 overflow-y-auto bg-slate-100/90 flex-1 flex flex-col items-center">
          <div className="w-full max-w-[210mm] mb-2 px-2 flex items-center justify-between text-[11px] text-slate-500">
            <span>Executive A4 / Letter format preview</span>
            <span className="text-indigo-600 font-semibold">Fits exactly on 1 page</span>
          </div>

          {/* Render the true 1-page document */}
          <div className="w-full flex justify-center">
            <ExecutiveResumeSheet isPreview={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
