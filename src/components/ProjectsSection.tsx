import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import {
  TrendingUp,
  PieChart,
  CheckCircle,
  ExternalLink,
  Layers,
  ArrowRight,
  ShieldAlert,
  Percent,
  Coins,
  Wallet,
  Building,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProjectsSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS[0].id);

  // Nigerian Equities Mock Simulator Data for William's study
  const nigerianBankingStocks = [
    { ticker: 'GTCO', name: 'Guaranty Trust Holding Co.', pe: '3.8x', divYield: '10.2%', roe: '28.5%', stance: 'Long-term Core' },
    { ticker: 'ZENITHBANK', name: 'Zenith Bank Plc', pe: '3.2x', divYield: '11.8%', roe: '26.1%', stance: 'High Dividend Stability' },
    { ticker: 'ACCESSCORP', name: 'Access Holdings Plc', pe: '2.9x', divYield: '9.4%', roe: '22.0%', stance: 'Pan-African Scale' },
    { ticker: 'UBA', name: 'United Bank for Africa', pe: '2.7x', divYield: '12.4%', roe: '31.2%', stance: 'Compounding Value' },
  ];

  // Budget Simulator State
  const [monthlyIncome, setMonthlyIncome] = useState<number>(350000); // ₦350,000 illustrative monthly base
  const [savingsRate, setSavingsRate] = useState<number>(25); // 25%

  const savingsAmount = Math.round((monthlyIncome * savingsRate) / 100);
  const essentialsAmount = Math.round((monthlyIncome * 55) / 100);
  const discretionaryAmount = monthlyIncome - savingsAmount - essentialsAmount;

  const currentProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-indigo-600 uppercase">
            PORTFOLIO &amp; WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-['Space_Grotesk']">
            PROJECTS &amp; EXPERIENCE
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mt-2" />
          <p className="text-slate-600 text-base sm:text-lg pt-2">
            Hands-on financial research, domestic equities analysis, and empirical personal capital management.
          </p>
        </motion.div>

        {/* Project Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                selectedProjectId === project.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              {project.id === 'nigerian-equities-research' ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <PieChart className="w-4 h-4" />
              )}
              <span>{project.title}</span>
            </button>
          ))}
        </div>

        {/* Main Active Project Card */}
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden mb-12"
        >
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Project Overview & Core Bullet Points */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 font-bold text-xs uppercase tracking-wider rounded-md">
                    {currentProject.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {currentProject.period}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-['Space_Grotesk']">
                  {currentProject.title}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed">
                  {currentProject.summary}
                </p>

                {/* Core Activities from Prompt */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Methodologies &amp; Execution
                  </h4>
                  <ul className="space-y-2.5">
                    {currentProject.bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Insights */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Analytical Insights
                  </h4>
                  <div className="space-y-2">
                    {currentProject.keyInsights.map((insight, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-slate-50 rounded-xl border border-slate-200/60 text-xs sm:text-sm text-slate-700"
                      >
                        {insight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Frameworks */}
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Applied Competencies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-indigo-50/70 text-indigo-700 font-semibold text-xs rounded-lg border border-indigo-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Project Preview / Case Study */}
              <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between">
                {currentProject.id === 'nigerian-equities-research' ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building className="w-5 h-5 text-indigo-600" />
                        <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                          Nigerian Equities Watchlist
                        </span>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-full">
                        NGX Banking
                      </span>
                    </div>

                    <p className="text-xs text-slate-600">
                      Sample evaluation framework tracking Nigerian tier-1 banking institutions, dividend cover, and policy risk tolerance during macroeconomic reforms.
                    </p>

                    <div className="space-y-2.5">
                      {nigerianBankingStocks.map((stock) => (
                        <div
                          key={stock.ticker}
                          className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs hover:border-indigo-300 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                                {stock.ticker}
                              </span>
                              <span className="text-xs font-semibold text-slate-800 truncate max-w-[160px] sm:max-w-none">
                                {stock.name}
                              </span>
                            </div>
                            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                              {stock.stance}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                            <div>
                              <div className="text-[10px] text-slate-400 uppercase font-medium">P/E Ratio</div>
                              <div className="text-xs font-bold text-slate-800">{stock.pe}</div>
                            </div>
                            <div>
                              <div className="text-[10px] text-slate-400 uppercase font-medium">Div. Yield</div>
                              <div className="text-xs font-bold text-indigo-600">{stock.divYield}</div>
                            </div>
                            <div>
                              <div className="text-[10px] text-slate-400 uppercase font-medium">ROE</div>
                              <div className="text-xs font-bold text-slate-800">{stock.roe}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 bg-amber-50/90 rounded-xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
                      <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold">Risk Management Rule:</strong> Capped single-position weighting at 15% and maintained strict liquidity buffers to navigate currency fluctuations.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wallet className="w-5 h-5 text-indigo-600" />
                        <span className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                          Dynamic Budgeting Model
                        </span>
                      </div>
                      <span className="text-xs px-2.5 py-1 bg-indigo-100 text-indigo-800 font-bold rounded-full">
                        Interactive System
                      </span>
                    </div>

                    <p className="text-xs text-slate-600">
                      Adjust the monthly capital pool and savings allocation slider to test William&apos;s personal finance optimization framework.
                    </p>

                    {/* Monthly Income Input / Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-600">Monthly Cash Inflow</span>
                        <span className="text-indigo-600">₦{monthlyIncome.toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="100000"
                        max="1000000"
                        step="25000"
                        value={monthlyIncome}
                        onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                      />
                    </div>

                    {/* Savings Rate Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-600">Target Savings / Investment Rate</span>
                        <span className="text-emerald-600 font-extrabold">{savingsRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="50"
                        step="5"
                        value={savingsRate}
                        onChange={(e) => setSavingsRate(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>

                    {/* Breakdown Visualizer */}
                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Essentials (55%)</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">₦{essentialsAmount.toLocaleString()}</div>
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                        <div className="text-[10px] text-emerald-700 uppercase font-semibold">Invested ({savingsRate}%)</div>
                        <div className="text-xs sm:text-sm font-bold text-emerald-700 mt-1">₦{savingsAmount.toLocaleString()}</div>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <div className="text-[10px] text-slate-400 uppercase font-semibold">Discretionary</div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">₦{Math.max(0, discretionaryAmount).toLocaleString()}</div>
                      </div>
                    </div>

                    <div className="p-3.5 bg-indigo-50 rounded-xl border border-indigo-100 text-xs text-indigo-900">
                      <strong>System Outcome:</strong> Prioritizes capital accumulation into high-yielding instruments before discretionary expenses are deployed.
                    </div>
                  </div>
                )}

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Category: <strong>{currentProject.badge}</strong></span>
                  <span className="font-semibold text-indigo-600 flex items-center gap-1">
                    Documented Case Study <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
