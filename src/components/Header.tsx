/**
 * Header Component
 * 
 * A Matrix-themed header component that serves as the main introduction section
 * of the portfolio website. Features a professional photo, name, title, and
 * social media links with a cyberpunk-inspired design.
 * 
 * Key Features:
 * - Matrix-style glowing text animation
 * - Professional photo with Matrix border effect
 * - Social media links (GitHub, LinkedIn)
 * - Contact button that opens a dialog
 * - Responsive design for all screen sizes
 */

import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Container,
  Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { keyframes } from '@mui/system';
import { Contact } from './Contact';

// Matrix-style glowing text animation for the developer title
const matrixAnimation = keyframes`
  0% {
    text-shadow: 0 0 1px #0f0;
  }
  50% {
    text-shadow: 0 0 10px #0f0, 0 0 20px #0f0;
  }
  100% {
    text-shadow: 0 0 1px #0f0;
  }
`;

export const Header: React.FC = () => {
  // State to control the visibility of the contact dialog
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderBottom: '1px solid #0f0',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(0,255,0,0.1) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 0,
        }
      }}
    >


      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: 150,
              height: 150,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 255, 0, 0.2)',
                mixBlendMode: 'color',
                pointerEvents: 'none',
                borderRadius: '8px',
                zIndex: 1,
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 255, 0, 0.25)',
                mixBlendMode: 'soft-light',
                pointerEvents: 'none',
                borderRadius: '8px',
                zIndex: 2,
              },
            }}
          >
            <Avatar
              src={`${process.env.PUBLIC_URL}/profile.jpeg`}
              alt="Ola Adisa"
              sx={{
                width: '100%',
                height: '100%',
                border: '2px solid #0f0',
                boxShadow: '0 0 20px rgba(0,255,0,0.3)',
                borderRadius: '8px',
              }}
            />
          </Box>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 'bold',
                color: '#0f0',
                mb: 2,
              }}
            >
              Ola Adisa
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#0f0',
                fontFamily: 'monospace',
                animation: `${matrixAnimation} 2s infinite`,
                mb: 2,
              }}
            >
              Developer
            </Typography>
            <Box sx={{ 
              display: 'flex',
              gap: 2,
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Box sx={{ display: 'flex', gap: 2, pl: 0 }}>
                <IconButton
                component={Link}
                href="https://github.com/holaholu"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#0f0',
                  border: '1px solid #0f0',
                  borderRadius: '8px',
                  padding: '8px',
                  '&:hover': {
                    bgcolor: 'rgba(0,255,0,0.1)',
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component={Link}
                href="https://www.linkedin.com/in/olaoluadisa/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#0f0',
                  border: '1px solid #0f0',
                  borderRadius: '8px',
                  padding: '8px',
                  '&:hover': {
                    bgcolor: 'rgba(0,255,0,0.1)',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              </Box>
              <IconButton
                onClick={() => setContactOpen(true)}
                sx={{
                  color: '#0f0',
                  border: '1px solid #0f0',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  '&:hover': {
                    bgcolor: 'rgba(0,255,0,0.1)',
                  },
                  '& .MuiTypography-root': {
                    ml: 1,
                  },
                }}
              >
                <Typography variant="button" sx={{ fontFamily: 'monospace' }}>
                  Get in touch
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </Box>
  );
};
