import React from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand & Identity (Exact Section 9 text) */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {PERSONAL_INFO.fullName}
            </h3>
            <p className="text-sm font-medium text-indigo-400">
              {PERSONAL_INFO.footerTagline}
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {PERSONAL_INFO.footerNote}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#what-i-do" className="hover:text-white transition-colors">
                  What I Do (Services &amp; Interests)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio &amp; Projects
                </a>
              </li>
              <li>
                <a href="#learning" className="hover:text-white transition-colors">
                  Learning, Building &amp; Growing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Education & Curriculum Vitae */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-300">
              Education
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1 text-xs">
              <div className="font-bold text-white">Crawford University, Nigeria</div>
              <div className="text-slate-300">B.Sc. Political Science &amp; Int’l Relations</div>
              <div className="text-indigo-400 text-[11px] pt-1">Undergraduate Student</div>
            </div>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="w-full py-2.5 text-xs font-semibold text-center text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors cursor-pointer"
              >
                View Complete Resume / CV
              </button>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {PERSONAL_INFO.copyright}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
