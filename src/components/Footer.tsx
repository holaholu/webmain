import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 2,
        backgroundColor: 'rgba(0, 17, 0, 0.9)',
        borderTop: '1px solid #0f0',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #0f0, transparent)',
          boxShadow: '0 0 15px #0f0',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mb: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: '#0f0',
                opacity: 0.9,
                fontFamily: 'monospace',
              }}
            >
              This Page is powered by:
            </Typography>
            {['React', 'TypeScript', 'Material-UI', 'HTML', 'CSS','Github Pages'].map((tech) => (
              <Typography
                key={tech}
                component="span"
                sx={{
                  color: '#0f0',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  padding: '2px 8px',
                  border: '1px solid #0f0',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(0,255,0,0.1)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0,255,0,0.2)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {tech}
              </Typography>
            ))}
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: '#0f0',
              fontFamily: 'monospace',
              textAlign: 'center',
            }}
          >
            © {new Date().getFullYear()} Ola Adisa. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton
              component={Link}
              href="https://github.com/holaholu"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: '#0f0',
                border: '1px solid #0f0',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(0,255,0,0.1)',
                },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.linkedin.com/in/olaoluadisa/"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: '#0f0',
                border: '1px solid #0f0',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(0,255,0,0.1)',
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => window.location.href = 'mailto:olaoluhimself@yahoo.com'}
              size="small"
              sx={{
                color: '#0f0',
                border: '1px solid #0f0',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'rgba(0,255,0,0.1)',
                },
              }}
            >
              <EmailIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
