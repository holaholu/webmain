import { Project } from "../types/project";
import { getAssetPath } from "../utils/assetPath";

export const projects: Project[] = [
  {
    id: 'serverless-image-processor',
    title: 'Serverless Image Processor',
    description: 'A modern, serverless image processing application built with React and AWS Lambda. Features multiple image transformations, secure cloud storage, and global content delivery.',
    longDescription: 'A cloud-native image processing solution leveraging AWS Lambda, S3, and CloudFront. Users can upload images and apply various transformations including size optimization, artistic effects (grayscale, sepia, blur, negative), all processed securely in the cloud with rate limiting and global content delivery.',
    category: 'Cloud & DevOps',
    techStack: ['React', 'TypeScript', 'AWS Lambda', 'Sharp.js', 'Chakra UI', 'AWS S3', 'CloudFront', 'Serverless Framework'],
    imageUrl: getAssetPath('images/projects/serverless_img.png'),
    liveUrl: 'https://d39tdha10id0k5.cloudfront.net',
    githubUrl: 'https://github.com/holaholu/serverless_image_processor',
    features: [
      'Secure image upload to AWS S3',
      'Multiple image transformation effects',
      'Global content delivery via CloudFront',
      'Rate limiting and usage tracking',
      'Modern UI with Chakra components',
      'Serverless architecture for scalability'
    ],
    startDate: '2025-04-01',
    endDate: '2025-04-01',
    highlighted: true,
    inProgress: false
  },
  {
    id: 'project-management-tool',
    title: 'Project Management Tool',
    description: 'A full-stack project management application built with the MERN stack featuring AI-powered risk analysis, real-time analytics, and team collaboration.',
    longDescription: 'A comprehensive project management solution built with MongoDB, Express.js, React, and Node.js. Features include AI-powered risk analysis using GPT-4, D3.js data visualizations, task management, team collaboration, and real-time project analytics.',
    category: 'Full Stack',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'D3.js', 'Material UI', 'Redux Toolkit'],
    imageUrl: getAssetPath('images/projects/project-management-tool.png'),
    liveUrl: 'https://project-management-tool-app-d826a567f678.herokuapp.com/',
    githubUrl: 'https://github.com/holaholu/project_manager',
    features: [
      'AI-powered risk analysis with GPT-4',
      'Interactive D3.js data visualizations',
      'Real-time project analytics and insights',
      'Team collaboration and task management',
      'Modern Material-UI interface',
      'TypeScript for enhanced type safety'
    ],
    startDate: '2025-03-30',
    endDate: '2025-03-31',
    highlighted: true,
    inProgress: false
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener',
    description: 'A simple and efficient URL shortener backend service built with Flask and Redis. Features modern UI with Tailwind CSS and real-time validation.',
    longDescription: 'A URL shortening service that transforms long URLs into concise, validated links. Features include duplicate URL detection, Redis for fast storage and retrieval, modern responsive UI with Tailwind CSS, and comprehensive error handling.',
    category: 'Backend',
    techStack: ['Python', 'Flask', 'Redis', 'Tailwind CSS'],
    imageUrl: getAssetPath('images/projects/url-shortener.png'),
    liveUrl: 'https://tiny-h4p2.onrender.com/',
    githubUrl: 'https://github.com/holaholu/url_shortener',
    features: [
      'Shorten long URLs to manageable links',
      'Modern, responsive UI with Tailwind CSS',
      'Redis for fast and efficient storage',
      'Copy-to-clipboard functionality',
      'Input validation and error handling',
      'Duplicate URL detection'
    ],
    startDate: '2025-03-30',
    endDate: '2025-03-30',
    highlighted: true,
    inProgress: false
  },
  {
    id: 'ecommerce-dashboard',
    title: 'E-commerce Dashboard',
    description: 'A comprehensive e-commerce management dashboard built with React, TypeScript, and Redux. Features real-time analytics, product management, and order tracking.',
    longDescription: 'A modern e-commerce dashboard application providing business insights and management tools. Built with React and TypeScript, it features interactive data visualizations using Recharts, state management with Redux Toolkit, and a responsive UI using Ant Design and Material-UI components.',
    category: 'Frontend',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI', 'Node.js'],
    imageUrl: getAssetPath('images/projects/ecommerce_dash.png'),
    liveUrl: 'https://ecommerce-dash-psi.vercel.app/',
    githubUrl: 'https://github.com/holaholu/ecommerce_dash',
    features: [
      'Real-time business analytics dashboard',
      'Product inventory management',
      'Order tracking and management',
      'Customer data management',
      'Interactive data visualizations',
      'Responsive Material-UI interface'
    ],
    startDate: '2025-04-01',
    endDate: '2025-04-01',
    highlighted: true,
    inProgress: false
  },
  {
    id: 'business-dashboard',
    title: 'Business Data Dashboard',
    description: 'Interactive data visualization dashboard built with React and D3.js. Features multiple chart types including radar charts, line graphs, and bar charts.',
    longDescription: 'A comprehensive business analytics dashboard showcasing various data visualization techniques using D3.js and React. The dashboard includes interactive charts for performance metrics, activity trends, and key business indicators. Features responsive design with grid and expanded views.',
    category: 'Frontend',
    techStack: ['React', 'TypeScript', 'JavaScript'],
    imageUrl: getAssetPath('images/projects/dashboard-preview.png'),
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
