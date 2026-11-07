export interface VASkill {
  title: string;
  description: string;
  tools: string[];
  iconName: string;
}

export interface InterestArea {
  title: string;
  category: 'Political Affairs & Policy' | 'Financial Markets & Business';
  description: string;
  whatILearn: string[];
  iconName: string;
}

export interface VolunteerOpportunity {
  title: string;
  howICanHelp: string;
  examples: string[];
  iconName: string;
}
