import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 'business-dashboard',
    title: 'Business Data Dashboard',
    description: 'Interactive data visualization dashboard built with React and D3.js. Features multiple chart types including radar charts, line graphs, and bar charts.',
    longDescription: 'A comprehensive business analytics dashboard showcasing various data visualization techniques using D3.js and React. The dashboard includes interactive charts for performance metrics, activity trends, and key business indicators. Features responsive design with grid and expanded views.',
    category: 'Frontend',
    techStack: ['React', 'TypeScript', 'JavaScript'],
    imageUrl: '/webmain/images/projects/dashboard-preview.png',
    liveUrl: 'https://leafy-chaja-26f1d6.netlify.app/',
    githubUrl: 'https://github.com/holaholu/business_dashboard',
    features: [
      'Interactive data visualizations with D3.js',
      'Responsive grid and expanded views',
      'Real-time data updates',
      'Custom hooks for D3 integration',
      'Material-UI theming and components'
    ],
    startDate: '2025-03-25',
    endDate: '2025-03-29',
    highlighted: true,
    inProgress: false
  }
];

// Helper functions to filter and sort projects
export const filterProjectsByTech = (projects: Project[], tech: string) =>
  projects.filter((project) => project.techStack.includes(tech as any));

export const filterProjectsByCategory = (
  projects: Project[],
  category: string
) => projects.filter((project) => project.category === category);

export const getHighlightedProjects = (projects: Project[]) =>
  projects.filter((project) => project.highlighted);

export const sortProjectsByDate = (projects: Project[]) =>
  [...projects].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
