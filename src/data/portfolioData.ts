import {
  SkillItem,
  CompetencyItem,
  ProjectItem,
  AcademicSubject,
  CareerPillar,
  ValueItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'William',
  fullName: 'William Okafor',
  title: 'Aspiring Investment & Policy Analyst',
  tagline: 'Political Science & International Relations Student | Financial Markets Enthusiast | Strategic Thinker',
  location: 'Lagos, Nigeria',
  email: 'wp0222137@gmail.com',
  age: 19,
  university: 'Crawford University, Nigeria',
  degree: 'B.Sc. Political Science & International Relations',
  period: 'October 2024 – June 2028 (Expected Graduation)',
  status: 'In Progress',
  heroQuote: 'Bridging macro-political foresight with disciplined market analysis.',
  aboutQuote: 'I believe the best investment decisions are made by understanding both people and policy.',
  bioParagraph1:
    "I'm a 19-year-old Political Science and International Relations student with a growing passion for finance, investments, and long-term wealth strategy.",
  bioParagraph2:
    "My interest goes beyond buying stocks—I enjoy understanding how economics, government policy, and global events influence markets and business decisions. I'm building the skills to combine political analysis with financial strategy, with the goal of working in investment, research, or international economic policy.",
  careerGoal:
    'I am working toward a career where finance meets policy. My long-term goal is to become an investment professional who understands how political decisions, economic reforms, and global affairs shape financial markets.',
};

export const CORE_SKILLS: SkillItem[] = [
  {
    id: 'investment-research',
    title: 'Investment Research',
    subtitle: 'Equities & Long-term Strategy',
    description:
      'Stocks, market trends & long-term investing. Fundamental analysis of corporate earnings, valuation ratios, industry competitive moats, and risk-adjusted capital allocation.',
    iconName: 'TrendingUp',
    tags: ['Equities Valuation', 'Market Trends', 'Risk/Return', 'Nigerian Stocks'],
  },
  {
    id: 'data-interpretation',
    title: 'Data Interpretation',
    subtitle: 'Quantitative & Financial Analysis',
    description:
      'Budgeting, financial planning & analysis. Extracting actionable signals from numerical datasets, expense breakdowns, macroeconomic statistics, and cash flow forecasts.',
    iconName: 'BarChart3',
    tags: ['Budget Modeling', 'Financial Planning', 'Expense Optimization', 'Cash Flow'],
  },
  {
    id: 'political-analysis',
    title: 'Political Analysis',
    subtitle: 'Policy & Geopolitical Risk',
    description:
      'Governance, public policy & international relations. Evaluating policy rollouts, central bank directives, legislative dynamics, and international diplomatic developments.',
    iconName: 'Globe2',
    tags: ['Public Policy', 'Central Bank Actions', 'Geopolitical Risk', 'Governance'],
  },
  {
    id: 'strategic-thinking',
    title: 'Strategic Thinking',
    subtitle: 'Horizon Planning & Execution',
    description:
      'Long-term planning & decision-making. Scenario stress-testing, disciplined execution, anti-hype mindset, and aligning present resource allocation with multi-year outcomes.',
    iconName: 'Compass',
    tags: ['Scenario Planning', 'Disciplined Execution', 'Long-term Horizons', 'Risk Control'],
  },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    id: 'comp-1',
    title: 'Deconstructing Complex Topics',
    detail: 'Breaking down complex political and economic topics into clear, digestible, and understandable insights for strategic stakeholders.',
    metricLabel: 'Clarity Focus',
    metricValue: '100%',
    iconName: 'FileText',
  },
  {
    id: 'comp-2',
    title: 'Budgeting & Financial Planning',
    detail: 'Creating realistic budgets and personal financial plans that weather volatile inflationary environments and build durable capital.',
    metricLabel: 'Systematic Frameworks',
    metricValue: 'Weekly & Monthly',
    iconName: 'Calculator',
  },
  {
    id: 'comp-3',
    title: 'Pre-Investment Company Analysis',
    detail: 'Analyzing companies thoroughly before investing—examining balance sheet resilience, governance strength, and regulatory risks.',
    metricLabel: 'Fundamental Rigor',
    metricValue: 'Due Diligence',
    iconName: 'Search',
  },
  {
    id: 'comp-4',
    title: 'Independent Learning & Adaptation',
    detail: 'Learning independently and adapting quickly to new financial instruments, market cycles, and fast-moving policy shifts.',
    metricLabel: 'Learning Velocity',
    metricValue: 'Continuous',
    iconName: 'BookOpen',
  },
  {
    id: 'comp-5',
    title: 'Clear Written & Verbal Communication',
    detail: 'Communicating ideas clearly through rigorous research notes, reasoned discussion, structured presentations, and persuasive essays.',
    metricLabel: 'Communication',
    metricValue: 'High Precision',
    iconName: 'MessageSquareText',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nigerian-equities-research',
    title: 'Personal Investment Research',
    category: 'Equity Research & Market Tracking',
    period: '2024 – Present',
    badge: 'Equities & Markets',
    summary:
      'Comprehensive study of Nigerian equities with particular emphasis on tier-1 banking institutions, dividend yield sustainability, and risk management strategies under macroeconomic reform.',
    bulletPoints: [
      'Studied Nigerian equities including tier-1 banking stocks (evaluating capital adequacy, net interest margins, and FX gains).',
      'Practiced disciplined portfolio allocation, position sizing, and stop-loss / risk management parameters.',
      'Tracked Nigerian Exchange (NGX) market performance and evaluated long-term multi-year compounding opportunities amidst inflation and currency adjustments.',
    ],
    keyInsights: [
      'Banking Sector Resilience: Analyzed how monetary policy rate (MPR) hikes impact interest income vs credit quality.',
      'Risk Management Discipline: Maintained strict rules against chasing speculative retail momentum in favor of balance sheet fundamentals.',
      'Long-term Horizon: Focused on dividend yields that outperform local fixed-income returns over rolling 3-5 year cycles.',
    ],
    toolsUsed: ['Fundamental Analysis', 'NGX Tracking', 'Financial Ratio Modeling', 'Policy Impact Mapping'],
  },
  {
    id: 'budget-financial-planning',
    title: 'Budget & Financial Planning',
    category: 'Financial Modeling & Optimization',
    period: '2024 – Present',
    badge: 'Capital Management',
    summary:
      'Engineered structured personal finance and cash flow planning systems tailored to volatile economic environments, turning data analysis principles into everyday wealth-building habits.',
    bulletPoints: [
      'Built weekly and monthly budgeting systems with dynamic categorization and recurring obligation tracking.',
      'Analyzed spending habits and optimized expenses to maximize monthly discretionary savings rate.',
      'Applied data analysis principles to personal finance, modeling forward projections and emergency capital reserves.',
    ],
    keyInsights: [
      'Dynamic Envelope Allocation: Categorized expenditures into essential baseline, human capital investments, and opportunistic savings.',
      'Inflation-Adjusted Scenarios: Stress-tested monthly cash outflows against food and energy cost inflation.',
      'Data-Driven Habit Tracking: Leveraged visual metrics to identify non-essential discretionary leakage.',
    ],
    toolsUsed: ['Data Analysis', 'Cashflow Modeling', 'Expense Optimization', 'Scenario Forecasting'],
  },
];

export const ACADEMIC_SUBJECTS: AcademicSubject[] = [
  {
    name: 'Political Economy',
    description: 'The intersection of political institutions, economic systems, and public market interventions.',
    marketRelevance: 'Helps forecast how tax regimes, government spending, and subsidy reforms shift corporate profitability.',
    iconName: 'Landmark',
  },
  {
    name: 'International Relations',
    description: 'Diplomatic relations, trade corridors, geopolitical alliances, and multilateral institutional treaties.',
    marketRelevance: 'Essential for evaluating sovereign risk, cross-border capital mobility, and foreign direct investment (FDI).',
    iconName: 'Globe',
  },
  {
    name: 'Development Studies',
    description: 'Structural transformation of emerging economies, poverty alleviation, and sustainable industrialization.',
    marketRelevance: 'Informs long-term venture opportunities in African infrastructure, fintech, and agricultural modernization.',
    iconName: 'TrendingUp',
  },
  {
    name: 'Public Policy',
    description: 'Policy lifecycle analysis from agenda-setting and legislative drafting to enforcement and economic evaluation.',
    marketRelevance: 'Crucial for anticipating regulatory hurdles and compliance risks across regulated industries.',
    iconName: 'Scale',
  },
  {
    name: 'Governance & Civil Society',
    description: 'Institutional accountability, democratic resilience, anti-corruption frameworks, and civic engagement.',
    marketRelevance: 'Foundational for evaluating corporate governance, institutional trust, and sovereign debt creditworthiness.',
    iconName: 'ShieldCheck',
  },
];

export const CAREER_PILLARS: CareerPillar[] = [
  {
    title: 'Investment Banking',
    description: 'Advising corporations and sovereigns on capital raising, mergers, and strategic financial restructuring.',
    iconName: 'Building2',
  },
  {
    title: 'Equity Research',
    description: 'Conducting in-depth company valuation, industry channel checks, and producing actionable investment theses.',
    iconName: 'LineChart',
  },
  {
    title: 'Asset Management',
    description: 'Curating multi-asset portfolios focused on compounding institutional and private capital with risk discipline.',
    iconName: 'Coins',
  },
  {
    title: 'Economic Policy',
    description: 'Drafting and analyzing macroeconomic policies for central banks, treasuries, or development finance institutions.',
    iconName: 'Briefcase',
  },
  {
    title: 'International Finance',
    description: 'Navigating foreign exchange mechanics, sovereign bond issuances, and multilateral trade finance.',
    iconName: 'BadgeDollarSign',
  },
];

export const VALUES: ValueItem[] = [
  {
    title: 'Continuous Learning',
    description: 'Constantly expanding domain knowledge across financial modeling, political history, and data literacy.',
    iconName: 'BookOpenCheck',
  },
  {
    title: 'Discipline Over Hype',
    description: 'Rejecting speculative noise, fleeting market euphoria, and short-term trends in favor of verified facts.',
    iconName: 'FlameKindling',
  },
  {
    title: 'Long-Term Thinking',
    description: 'Anchoring decisions in 5-to-10 year horizon outcomes rather than day-to-day volatility.',
    iconName: 'Hourglass',
  },
  {
    title: 'Integrity in Decision-Making',
    description: 'Upholding strict ethical standards, transparent analysis, and accountability in every evaluation.',
    iconName: 'CheckCircle2',
  },
];
