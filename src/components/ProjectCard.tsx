import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Stack,
  Box,
  Button,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        background: 'rgba(0, 17, 0, 0.9)',
        border: '1px solid #0f0',
        backdropFilter: 'blur(5px)',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: '0 0 20px rgba(0,255,0,0.3)',
          '& .MuiChip-root': {
            backgroundColor: 'rgba(0,255,0,0.2)',
          },
        },
      }}
    >
      {project.imageUrl && (
        <CardMedia
          component="img"
          height="200"
          image={project.imageUrl}
          alt={project.title}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} mb={2}>
          {project.techStack.map((tech) => (
            <Chip
            key={tech}
            label={tech}
            size="small"
            sx={{
              backgroundColor: 'rgba(0,255,0,0.1)',
              color: '#0f0',
              border: '1px solid #0f0',
              transition: 'all 0.3s ease',
            }}
          />
          ))}
        </Stack>
        <Box sx={{ mt: 'auto', display: 'flex', gap: 2 }}>
          {project.githubUrl && (
            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: '#0f0',
                borderColor: '#0f0',
                '&:hover': {
                  borderColor: '#0f0',
                  backgroundColor: 'rgba(0, 255, 0, 0.1)'
                }
              }}
            >
              View on GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="outlined"
              startIcon={<LanguageIcon />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: '#0f0',
                borderColor: '#0f0',
                '&:hover': {
                  borderColor: '#0f0',
                  backgroundColor: 'rgba(0, 255, 0, 0.1)'
                }
              }}
            >
              View Live
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
