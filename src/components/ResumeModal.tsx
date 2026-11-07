import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { ExecutiveResumeSheet } from './ExecutiveResumeSheet';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

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
${PERSONAL_INFO.roleTitle}
${PERSONAL_INFO.location} | ${PERSONAL_INFO.email} | https://${PERSONAL_INFO.website}

PROFILE:
${PERSONAL_INFO.subheading}
${PERSONAL_INFO.supportingText}

EDUCATION:
Crawford University, Nigeria
${PERSONAL_INFO.degree}

DEVELOPING CAPABILITIES:
- Virtual Assistance: Internet & Online Research, Data Entry, Document Formatting, Inbox & Calendar Management, Directory Building.
- Software: Microsoft Excel (developing proficiency), Google Workspace (Docs, Sheets, Slides, Drive), Microsoft Office.
- Research & Analysis: Policy briefs, governance analysis, basic financial statement analysis, NGX equities research.

SELECTED DEMONSTRATION PROJECTS:
${PROJECTS.map(
  (p, i) => `${i + 1}. ${p.title} (${p.category} — ${p.projectType}, ${p.dateCompleted})
   - ${p.shortDescription}
   - Skills: ${p.skillsDemonstrated.join(', ')}`
).join('\n\n')}

PHILOSOPHY:
Curiosity, Attention to Detail, Consistency, and a Willingness to Learn.
All financial research is for self-study and educational demonstration.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden my-6 flex flex-col max-h-[92vh]">
        {/* Modal Controls Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-slate-800 text-sm sm:text-base">
              Curriculum Vitae / Resume — {PERSONAL_INFO.fullName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPlainTextResume}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy text format"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-2xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Preview */}
        <div className="p-4 sm:p-6 overflow-y-auto bg-slate-100 flex-1">
          <ExecutiveResumeSheet isPreview={true} />
        </div>
      </div>
    </div>
  );
};
