import React from 'react';
import {
  MapPin,
  Mail,
  GraduationCap,
  TrendingUp,
  Building,
  CheckCircle2,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  CORE_SKILLS,
  COMPETENCIES,
  PROJECTS,
  ACADEMIC_SUBJECTS,
  VALUES,
} from '../data/portfolioData';

interface ExecutiveResumeSheetProps {
  isPreview?: boolean;
}

export const ExecutiveResumeSheet: React.FC<ExecutiveResumeSheetProps> = ({ isPreview = false }) => {
  return (
    <div
      id="executive-cv-document"
      className={`executive-resume-sheet bg-white text-slate-900 mx-auto transition-all ${
        isPreview
          ? 'w-full max-w-[210mm] p-6 sm:p-8 md:p-9 shadow-xl border border-slate-200 rounded-xl my-4 text-slate-900'
          : 'w-full max-w-[210mm] p-0 text-slate-900 leading-tight'
      }`}
      style={{
        fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* ===================== HEADER ===================== */}
      <header className="border-b-2 border-slate-900 pb-3 mb-3.5">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <h1 className="text-2xl sm:text-[26px] font-black tracking-tight text-slate-950 font-['Space_Grotesk'] leading-none">
              {PERSONAL_INFO.fullName.toUpperCase()}
            </h1>
            <p className="text-[12px] sm:text-[13px] font-bold text-indigo-700 tracking-wider uppercase mt-1">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Contact Bar - Compact & High-Contrast */}
          <div className="flex flex-wrap items-center sm:justify-end gap-x-3.5 gap-y-1 text-[11px] text-slate-700 pt-1 sm:pt-0">
            <span className="inline-flex items-center gap-1 font-medium">
              <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1 font-semibold text-slate-900 hover:text-indigo-600"
            >
              <Mail className="w-3 h-3 text-slate-500 shrink-0" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1 font-medium text-indigo-800">
              <GraduationCap className="w-3 h-3 text-indigo-600 shrink-0" />
              <span>Crawford University (Exp. 2028)</span>
            </span>
          </div>
        </div>
      </header>

      {/* ===================== EXECUTIVE SUMMARY ===================== */}
      <section className="mb-3">
        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b border-slate-200 pb-0.5 mb-1.5 flex items-center justify-between">
          <span>EXECUTIVE PROFILE &amp; FOCUS</span>
          <span className="text-[9px] font-semibold tracking-normal text-indigo-600 lowercase normal-case italic">
            political foresight • financial analysis • capital discipline
          </span>
        </h2>
        <p className="text-[11px] text-slate-700 leading-relaxed text-justify">
          Driven <strong>Political Science &amp; International Relations</strong> scholar at Crawford University with a disciplined specialization in financial markets, equities analysis, and long-term capital allocation. Combines institutional geopolitical foresight with quantitative financial modeling—evaluating how central bank monetary directives, macroeconomic policy shifts, and corporate earnings translate into durable portfolio performance.
        </p>
      </section>

      {/* ===================== TWO-COLUMN MAIN BODY ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-3">
        {/* LEFT COLUMN: Research, Projects & Analytical Experience (60% width) */}
        <div className="md:col-span-7 space-y-3">
          {/* Section: Analytical & Research Projects */}
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b border-slate-200 pb-0.5 mb-2">
              RESEARCH &amp; ANALYTICAL PROJECTS
            </h2>

            <div className="space-y-2.5">
              {/* Project 1: Equities */}
              <div className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11.5px] font-bold text-slate-950">
                    Personal Investment Research — Nigerian Equities (NGX)
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-500 whitespace-nowrap ml-2">
                    2024 – Present
                  </span>
                </div>
                <div className="text-[10px] font-semibold text-indigo-700">
                  Fundamental Equity Analysis &amp; Risk Management
                </div>
                <ul className="list-disc list-outside ml-3.5 space-y-0.5 text-[10.5px] text-slate-700 leading-snug">
                  <li>
                    Researched Nigerian equities with focus on Tier-1 banks, analyzing Capital Adequacy Ratios (CAR), Net Interest Margins (NIM), and FX revaluation dynamics.
                  </li>
                  <li>
                    Modeled key valuation ratios (P/E, P/B, dividend yields) to isolate compounding opportunities resilient to high-inflation environments.
                  </li>
                  <li>
                    Enforced strict capital protection rules, portfolio position sizing, and stop-loss criteria to mitigate volatility on the Nigerian Exchange (NGX).
                  </li>
                </ul>
              </div>

              {/* Project 2: Budgeting & Capital Systems */}
              <div className="space-y-1 pt-1 border-t border-slate-100">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11.5px] font-bold text-slate-950">
                    Budget &amp; Capital Allocation Systems
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-500 whitespace-nowrap ml-2">
                    2024 – Present
                  </span>
                </div>
                <div className="text-[10px] font-semibold text-indigo-700">
                  Cash Flow Modeling &amp; Liquidity Forecasting
                </div>
                <ul className="list-disc list-outside ml-3.5 space-y-0.5 text-[10.5px] text-slate-700 leading-snug">
                  <li>
                    Engineered dynamic weekly and monthly personal budgeting systems with automated expenditure categorization and variance analysis.
                  </li>
                  <li>
                    Applied data interpretation principles to forecast cash flows and optimize discretionary expenditures, elevating regular savings reserves.
                  </li>
                </ul>
              </div>

              {/* Project 3: Macro Policy & Geopolitical Risk */}
              <div className="space-y-1 pt-1 border-t border-slate-100">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11.5px] font-bold text-slate-950">
                    Macro Policy &amp; Geopolitical Risk Analysis
                  </h3>
                  <span className="text-[10px] font-semibold text-slate-500 whitespace-nowrap ml-2">
                    2024 – Present
                  </span>
                </div>
                <div className="text-[10px] font-semibold text-indigo-700">
                  Monetary Directives &amp; Sovereign Policy Impact
                </div>
                <ul className="list-disc list-outside ml-3.5 space-y-0.5 text-[10.5px] text-slate-700 leading-snug">
                  <li>
                    Evaluated investment transmission mechanisms of Central Bank of Nigeria (CBN) MPR rate hikes, FX unification, and fuel subsidy deregulation.
                  </li>
                  <li>
                    Assessed geopolitical developments, regional trade treaties, and diplomatic alliances to forecast policy risks for domestic enterprises.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Key Analytical Insights */}
          <section className="bg-slate-50/90 rounded-lg p-2.5 border border-slate-200/80">
            <h3 className="text-[9.5px] font-black uppercase tracking-wider text-slate-900 mb-1">
              APPLIED ANALYTICAL METHODOLOGY
            </h3>
            <p className="text-[10px] text-slate-700 leading-relaxed">
              <strong>Core Investment Philosophy:</strong> &ldquo;{PERSONAL_INFO.aboutQuote}&rdquo; Prioritizes verifiable balance sheet resilience, structural competitive moats, and 3–5 year compounding horizons over retail speculation or short-term market sentiment.
            </p>
          </section>
        </div>

        {/* RIGHT COLUMN: Education, Competencies, Curriculum & Values (40% width) */}
        <div className="md:col-span-5 space-y-3">
          {/* Education */}
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b border-slate-200 pb-0.5 mb-2">
              EDUCATION
            </h2>
            <div className="space-y-0.5">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[11.5px] font-bold text-slate-950">
                  Crawford University
                </h3>
                <span className="text-[10px] font-semibold text-indigo-700">
                  Nigeria
                </span>
              </div>
              <div className="text-[10.5px] font-semibold text-slate-800">
                B.Sc. Political Science &amp; International Relations
              </div>
              <div className="text-[10px] text-slate-500">
                October 2024 – June 2028 (Expected) • First Class Track
              </div>
            </div>
          </section>

          {/* Core Competencies */}
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b border-slate-200 pb-0.5 mb-2">
              CORE COMPETENCIES
            </h2>
            <div className="space-y-1.5 text-[10.5px]">
              <div>
                <span className="font-bold text-slate-900">Equity Valuation:</span>
                <span className="text-slate-700"> P/E, P/B, Dividend Yields, Financial Statements, NGX Tracking</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Policy Analysis:</span>
                <span className="text-slate-700"> Central Bank Actions, MPR Hikes, Regulatory Risk Assessment</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Financial Planning:</span>
                <span className="text-slate-700"> Cash Flow Modeling, Budgeting, Capital Allocation</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Risk Management:</span>
                <span className="text-slate-700"> Position Sizing, Stop-Loss Frameworks, Anti-Hype Discipline</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">Strategic Synthesis:</span>
                <span className="text-slate-700"> Deconstructing Complex Geopolitical &amp; Economic Topics</span>
              </div>
            </div>
          </section>

          {/* Academic Curriculum Focus */}
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b border-slate-200 pb-0.5 mb-1.5">
              ACADEMIC CURRICULUM FOCUS
            </h2>
            <div className="flex flex-wrap gap-1 text-[9.5px]">
              {ACADEMIC_SUBJECTS.map((sub) => (
                <span
                  key={sub.name}
                  className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200/70 font-medium"
                >
                  {sub.name}
                </span>
              ))}
            </div>
          </section>

          {/* Professional Values & Ethics */}
          <section>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 border-b border-slate-200 pb-0.5 mb-1.5">
              VALUES &amp; CONDUCT
            </h2>
            <div className="grid grid-cols-2 gap-1.5 text-[9.5px]">
              {VALUES.map((val) => (
                <div
                  key={val.title}
                  className="p-1.5 bg-slate-50 border border-slate-200/70 rounded text-slate-800 font-medium"
                >
                  <span className="font-bold text-indigo-900 block">{val.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Career Trajectory Box */}
          <section className="bg-indigo-50/70 border border-indigo-100 rounded-lg p-2 text-[10px] text-slate-700">
            <span className="font-bold text-indigo-900 uppercase text-[9px] tracking-wider block mb-0.5">
              Career Trajectory
            </span>
            <span>
              Targeting roles in Investment Banking, Equity Research, and Macroeconomic Policy Advisory across African and global capital markets.
            </span>
          </section>
        </div>
      </div>

      {/* ===================== FOOTER ===================== */}
      <footer className="mt-3.5 pt-2 border-t border-slate-200 flex items-center justify-between text-[9px] text-slate-600">
        <span>
          <strong>William Okafor</strong> — Curriculum Vitae • Executive Format
        </span>
        <span className="font-semibold text-indigo-700">
          Standard 1-Page Executive PDF • Crawford University
        </span>
      </footer>
    </div>
  );
};
