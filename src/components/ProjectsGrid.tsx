import React, { useState, useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { ProjectCard } from './ProjectCard';
import { Project, ProjectCategory } from '../types/project';
import { motion } from 'framer-motion';

interface ProjectsGridProps {
  projects: Project[];
}

const categories: ProjectCategory[] = [
  'Frontend',
  'Backend',
  'Full Stack',
  'DevOps',
  'Cloud',
  'Mobile',
];

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [category, setCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = category === 'all' || project.category === category;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, category, searchQuery]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4, mt: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Projects
        </Typography>
        <Box sx={{ mb: 3 }}>
          <Tabs
            value={category}
            onChange={(_, newValue) => setCategory(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                fontSize: '1.1rem',
                fontFamily: 'monospace',
                color: '#0f0',
                opacity: 0.7,
                '&.Mui-selected': {
                  opacity: 1,
                  textShadow: '0 0 10px #0f0',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#0f0',
                boxShadow: '0 0 10px #0f0',
                height: '3px',
              },
            }}
          >
            <Tab label="All" value="all" />
            {categories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search projects by name, description, or technology..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 4 }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          width: '100%'
        }}
      >
        {filteredProjects.map((project, index) => (
          <Box
            key={project.id}
            sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 24px)',
                md: 'calc(33.333% - 24px)'
              }
            }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
