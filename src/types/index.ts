export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Full-Stack' | 'AI Integration' | 'Systems & Algorithms';
  year: string;
  repoUrl: string;
  liveUrl?: string;
  role: string;
  description: string;
  summary: string;
  tags: string[];
  accentColor: string;
  previewId: 'collabrix' | 'resume-analyzer' | 'job-portal' | 'algorithms';
  caseStudy: {
    problem: string;
    targetAudience: string;
    solution: string;
    architecture: string[];
    technicalDecisions: { decision: string; rationale: string }[];
    currentStatus: string;
    challengesAndTradeoffs: string;
    whatILearned: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    context: string;
    level: 'Core' | 'Practiced' | 'Exploring';
  }[];
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'Internship' | 'Competition' | 'Certification' | 'Simulation';
  description: string;
  highlights: string[];
  skills: string[];
  verifiedBadge?: string;
}
