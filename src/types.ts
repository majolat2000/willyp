export interface ProjectItem {
  id: string;
  title: string;
  category: 'Political Research' | 'Equity Research' | 'Virtual Assistance';
  projectType: 'Academic Work' | 'Independent Research' | 'Practice Project';
  dateCompleted: string;
  shortDescription: string;
  skillsDemonstrated: string[];
  overview: string;
  keyTakeaways: string[];
  deliverables?: string[];
  disclaimer?: string;
}

export interface VAServiceItem {
  id: string;
  title: string;
  description: string;
  skills: string[];
  iconName: string;
}

export interface AnalysisServiceArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  iconName: string;
  isEquity?: boolean;
}

export interface LearningPillar {
  id: string;
  title: string;
  description: string;
  focusAreas: string[];
  iconName: string;
}
