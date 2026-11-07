import {
  ProjectItem,
  VAServiceItem,
  AnalysisServiceArea,
  LearningPillar,
} from '../types';

export const PERSONAL_INFO = {
  name: 'William',
  fullName: 'William Okafor',
  roleTitle: 'Political Science Student | Aspiring Virtual Assistant & Research Enthusiast',
  headline: 'Curious Mind. Growing Skills. Real-World Perspective.',
  subheading:
    'I’m William Okafor, a Political Science student exploring the intersection of politics, public policy and financial markets while developing practical skills in virtual assistance and research.',
  supportingText:
    'I’m interested in understanding how institutions, policies, businesses and financial markets shape the world around us. Alongside my academic interests, I’m building skills in administrative support, online research, organisation and data management.\n\nI’m currently developing my experience through independent projects, research and practical learning. I’m always open to opportunities to learn, contribute and collaborate.',
  aboutMeText: [
    'I’m William Okafor, a Political Science student with a growing interest in public policy, international relations, financial markets and investment research.',
    'My curiosity about how governments, institutions and economies operate has influenced my interest in political and equity analysis.',
    'Outside my academic interests, I’m developing practical skills in virtual assistance, including online research, administrative organisation, document preparation and spreadsheet management.',
    'I’m still at the beginning of my professional journey. I’m not here to claim years of experience or expertise I haven’t acquired. Instead, I’m focused on learning, building useful skills, documenting my progress and gaining hands-on experience.',
    'I believe good work starts with curiosity, attention to detail, consistency and a willingness to learn.',
  ],
  learningGrowingText:
    'I’m currently focused on developing practical skills and building a body of work that demonstrates my interests and capabilities.\n\nThrough academic learning, independent research and personal projects, I’m working towards gaining the experience needed to contribute meaningfully in administrative support, political research and financial analysis.\n\nI’m particularly interested in internships, entry-level opportunities, mentorship and collaborative projects.',
  contactHeadline: 'Have an opportunity or an idea? Let’s talk.',
  contactText:
    'I’m open to learning opportunities, internships, entry-level projects, research collaborations and conversations with people working in areas I’m interested in.\n\nI’d be happy to connect.',
  footerTagline: 'Aspiring Virtual Assistant | Political & Equity Research Enthusiast',
  footerNote: 'Learning, researching and building towards meaningful opportunities.',
  copyright: '© 2026 William Okafor. All rights reserved.',
  location: 'Nigeria',
  email: 'wp0222137@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/william-okafor-willyp',
  university: 'Crawford University, Nigeria',
  degree: 'B.Sc. Political Science & International Relations (Student)',
  imagePath: '/willyp.jpeg',
  website: 'willyp.com.ng',
};

export const VA_SERVICES_INTRO = {
  headline: 'Virtual Assistance',
  intro:
    'Helping individuals and small businesses stay organised through reliable administrative and research support.',
  scopeNote:
    'These are services I am developing and available to undertake at an appropriate entry-level scope. I approach every task with thorough attention to detail, clear communication, and a dedication to deadlines.',
};

export const VA_SERVICES: VAServiceItem[] = [
  {
    id: 'online-research',
    title: 'Internet & Online Research',
    description:
      'Finding credible information, verifying sources, market information gathering, competitor overviews, and summarizing data into clean, readable briefs.',
    skills: ['Web Research', 'Fact-Checking', 'Source Verification', 'Executive Summaries'],
    iconName: 'Search',
  },
  {
    id: 'data-entry',
    title: 'Data Entry & Spreadsheet Organisation',
    description:
      'Entering, cleaning, deduplicating, and systematically categorizing data into structured Google Sheets or Excel workbooks for error-free tracking.',
    skills: ['Data Cleaning', 'Spreadsheet Structure', 'Deduplication', 'Quality Control'],
    iconName: 'Table',
  },
  {
    id: 'excel-proficiency',
    title: 'Microsoft Excel (Developing Proficiency)',
    description:
      'Building organized workbooks, tracking expense logs, applying core lookup and arithmetic formulas (SUM, AVERAGE, IF, VLOOKUP/XLOOKUP), and basic sorting/filtering.',
    skills: ['Formulas & Functions', 'Expense Tracking', 'Basic Pivot Tables', 'Data Formatting'],
    iconName: 'FileSpreadsheet',
  },
  {
    id: 'document-prep',
    title: 'Document Preparation & Formatting',
    description:
      'Formatting reports, creating structured documents in Google Docs or Microsoft Word, aligning headings, typography, tables of contents, and proofreading.',
    skills: ['Report Formatting', 'Google Docs', 'Word Layouts', 'Proofreading'],
    iconName: 'FileText',
  },
  {
    id: 'email-calendar',
    title: 'Email & Calendar Organisation',
    description:
      'Sorting and tagging inboxes, drafting polite email correspondence, organizing schedules, setting reminders, and managing meeting calendars.',
    skills: ['Inbox Management', 'Schedule Coordination', 'Meeting Invites', 'Follow-Up Tracking'],
    iconName: 'MailCheck',
  },
  {
    id: 'information-gathering',
    title: 'Information Gathering & Organisation',
    description:
      'Compiling contact directories, building curated resource lists, organising cloud drive folders, and preparing reference dossiers for busy professionals.',
    skills: ['Directory Building', 'Cloud Drive Management', 'Resource Curation', 'Filing Systems'],
    iconName: 'FolderTree',
  },
  {
    id: 'general-admin',
    title: 'General Administrative Support',
    description:
      'Handling ad-hoc administrative tasks, transcription, taking structured meeting notes, monitoring checklists, and supporting day-to-day operations.',
    skills: ['Task Management', 'Meeting Notes', 'Checklist Tracking', 'Dependable Support'],
    iconName: 'ClipboardList',
  },
];

export const ANALYSIS_SERVICES_INTRO = {
  headline: 'Political & Equity Analysis',
  intro:
    'An area of academic and professional interest focused on understanding political developments, public policy, businesses and financial markets.',
  disclaimer:
    'IMPORTANT DISCLAIMER: This is an area I am actively studying and developing. I am not a licensed investment adviser, broker-dealer, or certified financial analyst. All market research and analytical notes published on this website are strictly educational and independent research exercises, and should never be construed as financial advice or investment recommendations.',
};

export const ANALYSIS_AREAS: AnalysisServiceArea[] = [
  {
    id: 'political-analysis',
    title: 'Political Research & Analysis',
    subtitle: 'Governance, Policy & Institutions',
    description:
      'Examining how government decisions, political developments, institutional frameworks, and global affairs affect socioeconomic stability and society.',
    items: [
      'Political developments and current affairs',
      'Public policy research',
      'Governance and institutional analysis',
      'International relations',
      'Political commentary and research briefs',
    ],
    iconName: 'Landmark',
    isEquity: false,
  },
  {
    id: 'equity-research',
    title: 'Equity & Financial Research',
    subtitle: 'Company Fundamentals & Market Learning',
    description:
      'Studying business models, corporate financial reports, and macroeconomic drivers with a particular curiosity about Nigerian Exchange (NGX) equities.',
    items: [
      'Company research and business fundamentals',
      'Basic financial statement analysis',
      'Stock market research',
      'NGX-listed company research',
      'Investment industry learning and market commentary',
    ],
    iconName: 'TrendingUp',
    isEquity: true,
  },
];

export const PROJECTS: ProjectItem[] = [
  // Political Research
  {
    id: 'project-pol-1',
    title: 'Contemporary Political Developments & Institutional Governance in Nigeria',
    category: 'Political Research',
    projectType: 'Independent Research',
    dateCompleted: 'January 2026',
    shortDescription:
      'An independent research brief analyzing recent political and institutional dynamics, examining electoral reforms, governance accountability, and regional stability in West Africa.',
    skillsDemonstrated: [
      'Institutional Analysis',
      'Current Affairs Synthesis',
      'Qualitative Research',
      'Policy Writing',
    ],
    overview:
      'This research note evaluates the institutional challenges and governance reforms shaping Nigeria and the broader ECOWAS sub-region. It examines how public trust in democratic institutions is influenced by policy transparency, judicial autonomy, and civic engagement.',
    keyTakeaways: [
      'Identified institutional bottlenecks in public policy implementation across federal and state levels.',
      'Examined regional democratic stability in West Africa and the diplomatic role of regional treaties.',
      'Structured clear, accessible observations comparing institutional theory with practical governance realities.',
    ],
    deliverables: ['12-Page Analytical Brief', 'Executive Summary Memo', 'Literature Review Matrix'],
  },
  {
    id: 'project-pol-2',
    title: 'Policy Brief: Evaluating Economic Policy Reforms on Household & SME Welfare',
    category: 'Political Research',
    projectType: 'Academic Work',
    dateCompleted: 'November 2025',
    shortDescription:
      'A structured policy brief assessing the socioeconomic transmission of fuel subsidy adjustments and foreign exchange policy unification on micro-businesses.',
    skillsDemonstrated: [
      'Policy Impact Assessment',
      'Literature Review',
      'Socioeconomic Analysis',
      'Structured Briefing',
    ],
    overview:
      'Authored as part of academic coursework in Political Economy, this brief investigates how macroeconomic policy directives cascade into purchasing power constraints and operating cost pressures for informal traders and small businesses in urban Nigeria.',
    keyTakeaways: [
      'Traced inflationary transmission through energy and transportation cost escalations.',
      'Highlighted policy gap between macroeconomic fiscal objectives and targeted social safety net rollouts.',
      'Recommended actionable community-level palliative monitoring mechanisms.',
    ],
    deliverables: ['Academic Policy Brief', 'Socioeconomic Flow Diagram', 'Referenced Policy Matrix'],
  },
  {
    id: 'project-pol-3',
    title: 'International Relations & Regional Trade: The AfCFTA Framework in West Africa',
    category: 'Political Research',
    projectType: 'Academic Work',
    dateCompleted: 'October 2025',
    shortDescription:
      'A research paper examining diplomatic cooperation, non-tariff trade barriers, and cross-border commercial opportunities under the African Continental Free Trade Area.',
    skillsDemonstrated: [
      'International Relations',
      'Treaty & Trade Analysis',
      'Diplomatic Research',
      'Academic Writing',
    ],
    overview:
      'This academic study evaluates how multilateral diplomatic relations between West African states influence cross-border trade facilitation. It explores both the opportunities of tariff reduction and the physical/regulatory bottlenecks at border corridors.',
    keyTakeaways: [
      'Explored diplomatic negotiation dynamics between member states regarding rules of origin.',
      'Mapped infrastructure gaps that hinder physical cross-border cargo transit.',
      'Emphasized the necessity of harmonized customs digital documentation.',
    ],
    deliverables: ['Term Research Paper', 'Comparative Country Matrix', 'Bibliography of Primary Sources'],
  },

  // Equity Research
  {
    id: 'project-eq-1',
    title: 'Introductory Company Analysis: Guaranty Trust Holding Company (GTCO Plc)',
    category: 'Equity Research',
    projectType: 'Independent Research',
    dateCompleted: 'February 2026',
    shortDescription:
      'A beginner-friendly equity analysis examining GTCO’s business model, revenue drivers, cost-to-income efficiency, and digital payments transition on the NGX.',
    skillsDemonstrated: [
      'Financial Statement Reading',
      'Business Model Deconstruction',
      'NGX Equities Tracking',
      'Clarity in Writing',
    ],
    overview:
      'An educational independent research project designed to build practical equity research skills. The study breaks down GTCO’s publicly reported annual reports, examining how interest income, net interest margins (NIM), non-interest revenue, and low cost-to-income ratios sustain long-term operational resilience.',
    keyTakeaways: [
      'Retail Deposit Franchise: Deconstructed how low-cost CASA (Current & Savings Account) deposits give the bank an enduring funding cost advantage.',
      'Operational Efficiency: Examined historical cost-to-income metrics compared to domestic peer medians.',
      'Holding Company Evolution: Reviewed expansion into payments (HabariPay/Squad), asset management, and pension fund administration.',
    ],
    deliverables: [
      'Educational Research Dossier (PDF)',
      'Simplified Ratio Sheet',
      'Risk & Governance Review',
    ],
    disclaimer:
      'Educational research exercise only. Not an investment recommendation, solicitation, or financial advice.',
  },
  {
    id: 'project-eq-2',
    title: 'Comparative Fundamental Overview of Selected Nigerian Tier-1 Banks (FUGAZ)',
    category: 'Equity Research',
    projectType: 'Independent Research',
    dateCompleted: 'December 2025',
    shortDescription:
      'A comparative study of key operational metrics across major Nigerian commercial banking groups, focusing on capital adequacy, return on equity, and asset quality.',
    skillsDemonstrated: [
      'Comparative Table Building',
      'Metric Benchmarking',
      'Industry Study',
      'Critical Evaluation',
    ],
    overview:
      'Compiled as part of ongoing personal study into the Nigerian financial sector. This study aggregates public disclosures to compare Capital Adequacy Ratios (CAR), Non-Performing Loan (NPL) ratios, Dividend Yield histories, and Return on Equity (ROE) across selected tier-1 banks.',
    keyTakeaways: [
      'Benchmarked capital buffers against Central Bank regulatory thresholds.',
      'Compared dividend stability track records through varying macroeconomic cycles.',
      'Synthesized complex banking annual reports into an intuitive comparative summary table.',
    ],
    deliverables: ['Comparative Benchmark Sheet', 'Visual Summary Charts', 'Analytical Overview Memo'],
    disclaimer:
      'Conducted purely for personal learning and educational demonstration. Not investment advice.',
  },
  {
    id: 'project-eq-3',
    title: 'A Beginner-Friendly Guide to Demystifying Financial Statements',
    category: 'Equity Research',
    projectType: 'Practice Project',
    dateCompleted: 'November 2025',
    shortDescription:
      'An approachable, structured primer created to help fellow students and non-finance peers understand Balance Sheets, Income Statements, and Cash Flow Statements.',
    skillsDemonstrated: [
      'Educational Synthesis',
      'Financial Literacy',
      'Diagram Design',
      'Plain-English Explanation',
    ],
    overview:
      'Created to reinforce personal foundational knowledge by teaching it simply. This guide explains what financial statements actually represent, how the three primary statements interconnect, and how ordinary readers can spot red flags without getting lost in jargon.',
    keyTakeaways: [
      'Simplified the accounting equation (Assets = Liabilities + Equity) using relatable everyday analogies.',
      'Explained why Cash Flow differs from Net Profit and why cash availability matters.',
      'Provided a 5-step checklist for reading an unfamiliar public company annual report.',
    ],
    deliverables: ['Interactive Learning Guide', 'Illustrated 3-Statement Flowchart', 'Jargon Glossary'],
    disclaimer: 'Educational primer prepared for self-study and learning purposes.',
  },

  // Virtual Assistance
  {
    id: 'project-va-1',
    title: 'Interactive Excel Expense-Tracking & Monthly Budget Spreadsheet System',
    category: 'Virtual Assistance',
    projectType: 'Practice Project',
    dateCompleted: 'January 2026',
    shortDescription:
      'A clean, structured personal & small business expense workbook with automated category tagging, dynamic formulas, and visual summary breakdowns.',
    skillsDemonstrated: [
      'Microsoft Excel',
      'Formula Architecture (SUMIFS, XLOOKUP)',
      'Data Validation',
      'Dashboard Layout',
    ],
    overview:
      'Designed and engineered from scratch to practice intermediate spreadsheet design. The workbook features transaction input tables with dropdown validation, automated monthly rollups, expense distribution charts, and variance tracking against target budgets.',
    keyTakeaways: [
      'Enforced data integrity with input validation, preventing date and spelling inconsistencies.',
      'Built automated summary dashboards showing spend breakdown by category and month.',
      'Designed a clean, minimalist layout optimized for both screen viewing and printing.',
    ],
    deliverables: ['Multi-Tab Excel Workbook (.xlsx)', 'User Instructions Guide', 'Sample Data Template'],
  },
  {
    id: 'project-va-2',
    title: 'Sample Small Business Administrative Organisation & SOP System',
    category: 'Virtual Assistance',
    projectType: 'Practice Project',
    dateCompleted: 'December 2025',
    shortDescription:
      'A practical Standard Operating Procedure (SOP) package featuring standardized file naming conventions, client onboarding workflows, and email templates.',
    skillsDemonstrated: [
      'SOP Documentation',
      'Workflow Optimization',
      'Template Design',
      'System Organization',
    ],
    overview:
      'Developed to demonstrate practical operational support capabilities. Contains standard operating procedures for digital file management across Google Drive, an onboarding email sequence, and an administrative daily checklist.',
    keyTakeaways: [
      'Standardized folder nomenclature (YYYY-MM-Client-Project) eliminating lost files.',
      'Created reusable communication templates for scheduling, follow-ups, and document handoffs.',
      'Constructed a reliable daily task priority checklist for administrative efficiency.',
    ],
    deliverables: ['SOP Documentation Manual', 'Ready-to-Use Email Templates', 'Drive Folder Architecture Map'],
  },
  {
    id: 'project-va-3',
    title: 'Structured Research Dossier & Professional Document Formatting Package',
    category: 'Virtual Assistance',
    projectType: 'Practice Project',
    dateCompleted: 'October 2025',
    shortDescription:
      'A sample executive-ready briefing document demonstrating advanced document formatting, clean typography, hyperlinked citations, and visual table hierarchy.',
    skillsDemonstrated: [
      'Document Formatting (Word & Docs)',
      'Typography & Hierarchy',
      'Citation Management',
      'Executive Layout',
    ],
    overview:
      'Created to showcase meticulous attention to detail in document preparation. Demonstrates clean paragraph styles, standardized heading hierarchies, professional table borders, cross-referenced footnoting, and PDF export perfection.',
    keyTakeaways: [
      'Ensured strict visual alignment, margin consistency, and accessible contrast ratios.',
      'Constructed automated tables of contents and hyperlinked reference indices.',
      'Turned raw research notes into a polished document suitable for busy decision-makers.',
    ],
    deliverables: ['Formatted Sample Research Dossier (PDF)', 'Style Guide Template', 'Typography Spec Sheet'],
  },
];

export const LEARNING_PILLARS: LearningPillar[] = [
  {
    id: 'pillar-academic',
    title: 'Academic Foundation',
    description:
      'Studying Political Science & International Relations at Crawford University, examining political philosophy, public governance, constitutional law, and development economics.',
    focusAreas: [
      'Political Theory & Institutions',
      'Public Policy Analysis',
      'International Diplomacy & Trade',
      'Comparative Political Systems',
    ],
    iconName: 'GraduationCap',
  },
  {
    id: 'pillar-va',
    title: 'Virtual Assistance & Admin Skills',
    description:
      'Practicing real-world administrative workflows, mastering spreadsheet formulas, researching efficiently, and cultivating dependable organizational habits.',
    focusAreas: [
      'Google Workspace & Microsoft 365',
      'Excel Formulas & Data Cleaning',
      'Clear Written Communication',
      'Calendar & Task Prioritisation',
    ],
    iconName: 'Laptop',
  },
  {
    id: 'pillar-market',
    title: 'Market & Economic Curiosity',
    description:
      'Reading annual reports of Nigerian listed corporations, following Central Bank monetary policy directives, and tracking macroeconomic trends to build financial acumen.',
    focusAreas: [
      'Reading 10-K / Annual Reports',
      'NGX Market Fundamentals',
      'Monetary Policy & Inflation Dynamics',
      'Long-Term Value Principles',
    ],
    iconName: 'TrendingUp',
  },
  {
    id: 'pillar-mindset',
    title: 'Core Work Values',
    description:
      'Believing that good work is grounded in intellectual humility, extreme attention to detail, reliability on deadlines, and a continuous appetite to learn.',
    focusAreas: [
      'Attention to Detail',
      'Honesty & Authenticity',
      'Reliability & Consistency',
      'Willingness to Learn from Feedback',
    ],
    iconName: 'CheckCircle2',
  },
];
