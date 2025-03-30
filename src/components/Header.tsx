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
import { themeColors } from '../theme';

// Matrix-style glowing text animation for the developer title
const matrixAnimation = keyframes`
  0% {
    text-shadow: 0 0 1px ${themeColors.primary};
  }
  50% {
    text-shadow: 0 0 10px ${themeColors.primary}, 0 0 20px ${themeColors.primary};
  }
  100% {
    text-shadow: 0 0 1px ${themeColors.primary};
  }
`;

export const Header: React.FC = () => {
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderBottom: `1px solid ${themeColors.border}`,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(180deg, ${themeColors.primaryLight} 0%, rgba(0,0,0,0) 100%)`,
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
                background: themeColors.primaryLighter,
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
                background: themeColors.primaryLighter,
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
                border: `2px solid ${themeColors.border}`,
                boxShadow: `0 0 20px ${themeColors.primaryLight}`,
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
                color: themeColors.text,
                mb: 2,
              }}
            >
              Ola Adisa
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: themeColors.text,
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
                    color: themeColors.text,
                    border: `1px solid ${themeColors.border}`,
                    borderRadius: '8px',
                    padding: '8px',
                    '&:hover': {
                      bgcolor: themeColors.primaryLight,
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
                    color: themeColors.text,
                    border: `1px solid ${themeColors.border}`,
                    borderRadius: '8px',
                    padding: '8px',
                    '&:hover': {
                      bgcolor: themeColors.primaryLight,
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
              <IconButton
                onClick={() => setContactOpen(true)}
                sx={{
                  color: themeColors.text,
                  border: `1px solid ${themeColors.border}`,
                  borderRadius: '8px',
                  padding: '8px 16px',
                  '&:hover': {
                    bgcolor: themeColors.primaryLight,
                  },
                }}
              >
                <Typography variant="button">
                  Contact
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
