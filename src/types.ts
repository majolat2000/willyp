export interface SkillItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface CompetencyItem {
  id: string;
  title: string;
  detail: string;
  metricLabel?: string;
  metricValue?: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  bulletPoints: string[];
  keyInsights: string[];
  toolsUsed: string[];
  badge: string;
}

export interface AcademicSubject {
  name: string;
  description: string;
  marketRelevance: string;
  iconName: string;
}

export interface CareerPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}
