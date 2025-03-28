import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'dca-trader',
    title: 'DCA Trading Bot',
    description: 'Automated trading bot implementing Dollar Cost Averaging (DCA) strategy with advanced features like market hours awareness, order queueing, and real-time position monitoring.',
    category: 'Full Stack',
    techStack: [
      'Python',
      'Flask',
      'React',
      'TypeScript',
      'AWS',
      'Docker'
    ],
    features: [
      'Alpaca API integration for automated trading',
      'Smart DCA strategy with dynamic unit sizing',
      'Real-time position monitoring',
      'After-hours order queueing',
      'AWS Fargate/ECS deployment',
      'Comprehensive monitoring with CloudWatch',
      'Automated CI/CD pipeline'
    ],
    startDate: '2025-03-01',
    highlighted: true,
    inProgress: false
  }
];

// Helper functions to filter and sort projects
export const filterProjectsByTech = (projects: Project[], tech: string) => 
  projects.filter(project => project.techStack.includes(tech as any));

export const filterProjectsByCategory = (projects: Project[], category: string) =>
  projects.filter(project => project.category === category);

export const getHighlightedProjects = (projects: Project[]) =>
  projects.filter(project => project.highlighted);

export const sortProjectsByDate = (projects: Project[]) =>
  [...projects].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
