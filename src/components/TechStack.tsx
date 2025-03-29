import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { keyframes } from '@mui/system';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px #0f0; }
  50% { box-shadow: 0 0 20px #0f0; }
  100% { box-shadow: 0 0 5px #0f0; }
`;

interface TechCategoryProps {
  title: string;
  items: string[];
}

const TechCategory: React.FC<TechCategoryProps> = ({ title, items }) => (
  <Box sx={{ width: { xs: '100%', md: '50%', lg: '33.33%' }, p: 1.5 }}>
    <Paper
      sx={{
        p: 3,
        height: '100%',
        backgroundColor: 'rgba(0, 17, 0, 0.7)',
        border: '1px solid #0f0',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(0, 17, 0, 0.9)',
          animation: `${glowAnimation} 2s infinite`,
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: '#0f0',
          fontFamily: 'monospace',
          mb: 2,
          textAlign: 'center',
          textShadow: '0 0 10px #0f0',
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          justifyContent: 'center',
        }}
      >
        {items.map((item) => (
          <Typography
            key={item}
            sx={{
              color: '#0f0',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              padding: '4px 8px',
              border: '1px solid #0f0',
              borderRadius: '4px',
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 0, 0.2)',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Paper>
  </Box>
);

export const TechStack: React.FC = () => {
  const technologies = {
    'Programming Languages': ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
    'Frameworks & Libraries': ['React', 'Angular', 'Node.js', 'Django', 'Flask', 'Redux', 'Next.js'],
    'Databases': ['SQL', 'NoSQL (MongoDB, DynamoDB)'],
    'Cloud & DevOps': [
      'AWS (Lambda, EC2, EKS, ECS, S3)',
      'CodePipeline',
      'CloudFormation',
      'Docker',
      'Kubernetes',
      'Git',
      'Microservices',
      'CI/CD',
      'Serverless'
    ],
    'Data Science & AI': ['NumPy', 'Pandas', 'AI LLM', 'NLP API Integrations']
  };

  return (
    <Box
      sx={{
        py: 6,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,255,0,0.05) 0%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          sx={{
            color: '#0f0',
            fontFamily: 'monospace',
            textAlign: 'center',
            mb: 4,
            textShadow: '0 0 15px #0f0',
          }}
        >
          Technical Expertise
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -1.5 }}>
          {Object.entries(technologies).map(([category, items]) => (
            <TechCategory key={category} title={category} items={items} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
