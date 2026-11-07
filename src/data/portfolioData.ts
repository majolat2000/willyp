import { VASkill, InterestArea, VolunteerOpportunity } from '../types';

export const PERSONAL_INFO = {
  name: 'William',
  fullName: 'William Okafor',
  roleTitle: 'Political Science Student | Aspiring Virtual Assistant & Researcher',
  headline: 'Curious Mind. Growing Skills. Real-World Perspective.',
  subheading:
    'I’m William Okafor, a Political Science student at Crawford University exploring the intersection of politics, public policy and financial markets while developing practical skills in virtual assistance and research.',
  supportingText:
    'I’m interested in understanding how institutions, policies, businesses and financial markets shape the world around us. Alongside my academic coursework, I’m practicing administrative support, online research, organization, and data management.\n\nI’m at the beginning of my journey, actively looking for volunteer work, internships, and entry-level tasks where I can be useful, gain hands-on experience, and learn from real feedback.',
  aboutMeText: [
    'I’m William Okafor, a Political Science student with a growing interest in public policy, international relations, financial markets and investment research.',
    'My curiosity about how governments, institutions and economies operate has influenced my interest in political and equity analysis.',
    'Outside my academic interests, I’m developing practical skills in virtual assistance, including online research, administrative organisation, document preparation and spreadsheet management.',
    'I’m still at the beginning of my professional journey. I’m not here to claim years of experience or expertise I haven’t acquired. Instead, I’m focused on learning, building useful skills, documenting my progress and gaining hands-on experience.',
    'I believe good work starts with curiosity, attention to detail, consistency and a willingness to learn.',
  ],
  education: {
    institution: 'Crawford University',
    degree: 'BSc Political Science',
    period: 'October 2024 – September 2028',
    status: 'Undergraduate Student',
    description:
      'Studying core courses in governance, public policy, political economy, comparative politics, and international relations.',
  },
  contactHeadline: 'Have an opportunity or an idea? Let’s talk.',
  contactText:
    'I’m open to volunteer roles, entry-level administrative tasks, student internships, and conversations with professionals in public policy or finance.\n\nIf you have a small project or an administrative chore you need help with, I would be happy to lend a hand and learn in the process.',
  footerTagline: 'Aspiring Virtual Assistant | Political & Equity Research Enthusiast',
  footerNote: 'Learning, researching and building towards meaningful opportunities.',
  copyright: '© 2026 William Okafor. All rights reserved.',
  location: 'Nigeria',
  email: 'wp0222137@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/william-okafor-willyp',
  imagePath: '/willyp.jpeg',
};

// Practical Virtual Assistance Skills
export const VA_SKILLS: VASkill[] = [
  {
    title: 'Internet & Online Research',
    description:
      'Finding accurate information online, cross-referencing sources, gathering company background details, and summarizing findings into easy-to-read notes.',
    tools: ['Google Search', 'Fact-Checking', 'Source Verification', 'Summary Notes'],
    iconName: 'Search',
  },
  {
    title: 'Data Entry & Spreadsheet Organization',
    description:
      'Organizing messy records, sorting contact lists, removing duplicate entries, and keeping tables tidy in Excel or Google Sheets.',
    tools: ['Google Sheets', 'Data Cleaning', 'List Sorting', 'Data Hygiene'],
    iconName: 'Table',
  },
  {
    title: 'Microsoft Excel (Developing Skills)',
    description:
      'Practicing essential formulas like SUM, AVERAGE, IF, VLOOKUP/XLOOKUP, setting up basic budget sheets, and formatting cells for clarity.',
    tools: ['Formulas & Functions', 'Expense Tracking', 'Basic Tables', 'Cell Formatting'],
    iconName: 'FileSpreadsheet',
  },
  {
    title: 'Document Preparation & Formatting',
    description:
      'Taking rough notes or drafts and formatting them into clean, structured Word documents or Google Docs with consistent headings and correct spacing.',
    tools: ['Google Docs', 'Microsoft Word', 'Proofreading', 'Layout Consistency'],
    iconName: 'FileText',
  },
  {
    title: 'Email & Schedule Organization',
    description:
      'Drafting polite, clear emails, sorting incoming messages with labels, setting up reminders, and keeping meeting calendars organized.',
    tools: ['Email Management', 'Calendar Invites', 'Follow-Up Reminders'],
    iconName: 'MailCheck',
  },
  {
    title: 'General Administrative Support',
    description:
      'Helping busy individuals or small teams with day-to-day administrative chores—organizing Google Drive folders, typing notes, and tracking checklists.',
    tools: ['Drive Management', 'Meeting Notes', 'Checklists', 'Task Tracking'],
    iconName: 'ClipboardList',
  },
];

// Academic & Analytical Interests
export const INTEREST_AREAS: InterestArea[] = [
  {
    title: 'Political Affairs & Public Policy',
    category: 'Political Affairs & Policy',
    description:
      'As a Political Science student, I closely follow current affairs, governance reforms, public policy implementation, and diplomatic developments across Nigeria and West Africa.',
    whatILearn: [
      'Reading and discussing policy papers and government gazettes',
      'Following national and regional political developments',
      'Understanding how policies impact everyday citizens and businesses',
      'Examining democratic institutions and accountability',
    ],
    iconName: 'Landmark',
  },
  {
    title: 'Financial Markets & Equity Curiosity',
    category: 'Financial Markets & Business',
    description:
      'I am fascinated by how companies operate and how markets react to economic news. I spend free time learning how to read public company annual reports and understanding the Nigerian Exchange (NGX).',
    whatILearn: [
      'Learning the basics of reading Balance Sheets and Income Statements',
      'Following Nigerian banking and consumer goods companies on the NGX',
      'Understanding how interest rates and inflation affect businesses',
      'Strictly educational study—not investment advice or professional research',
    ],
    iconName: 'TrendingUp',
  },
];

// How William Can Help / Volunteer
export const VOLUNTEER_WAYS: VolunteerOpportunity[] = [
  {
    title: 'Administrative Legwork for Small Businesses',
    howICanHelp:
      'If you run a small business or work as an independent professional and are swamped with administrative backlog, I can help clear it.',
    examples: [
      'Transferring written receipts or notes into a clean Excel/Sheets file',
      'Sorting out your Google Drive or computer folders so things are easy to find',
      'Drafting standard response emails and customer follow-up notes',
    ],
    iconName: 'Briefcase',
  },
  {
    title: 'Research & Information Gathering',
    howICanHelp:
      'Need someone to gather links, find contact details, or summarize background articles for a project? I am diligent with research.',
    examples: [
      'Building a contact list or directory of organizations/suppliers',
      'Summarizing articles or reports into a 1-page digest with source links',
      'Checking and verifying factual claims across credible sources',
    ],
    iconName: 'Search',
  },
  {
    title: 'Document Formatting & Proofreading',
    howICanHelp:
      'I enjoy making documents look neat, structured, and easy to read before they are sent out.',
    examples: [
      'Formatting essays, proposals, or reports with clean typography and headers',
      'Proofreading for grammar, punctuation, and typographical mistakes',
      'Converting messy text into structured outlines with bullet points',
    ],
    iconName: 'FileCheck2',
  },
  {
    title: 'Volunteer Work with Non-Profits & Student Groups',
    howICanHelp:
      'I am glad to volunteer my time to help community initiatives, NGOs, or student organizations with administrative and coordination tasks.',
    examples: [
      'Helping organize event schedules and attendee sign-up sheets',
      'Taking meeting minutes and distributing actionable to-do lists',
      'Supporting general campaign or project coordination tasks',
    ],
    iconName: 'HeartHandshake',
  },
];
