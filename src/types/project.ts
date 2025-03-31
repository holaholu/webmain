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
  | 'Serverless'
  | 'Redis'
  | 'Tailwind CSS'
  | 'Express'
  | 'MongoDB'
  | 'D3.js'
  | 'Material UI'
  | 'Redux Toolkit';

export type ProjectCategory =
  | 'Frontend'
  | 'Backend'
  | 'Full Stack'
  | 'Cloud & DevOps';

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
