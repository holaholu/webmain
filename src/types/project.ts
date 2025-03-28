export type TechStack = 
  | 'JavaScript'
  | 'TypeScript'
  | 'Python'
  | 'HTML'
  | 'CSS'
  | 'React'
  | 'Angular'
  | 'Node.js'
  | 'Django'
  | 'Flask'
  | 'Redux'
  | 'Next.js'
  | 'SQL'
  | 'NoSQL'
  | 'AWS'
  | 'Docker'
  | 'Kubernetes'
  | 'Git'
  | 'Microservices'
  | 'CI/CD'
  | 'Serverless';

export type ProjectCategory =
  | 'Frontend'
  | 'Backend'
  | 'Full Stack'
  | 'DevOps'
  | 'Cloud'
  | 'Mobile';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  techStack: TechStack[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  startDate: string;
  endDate?: string;
  highlighted: boolean;
  inProgress?: boolean;
}
