import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TechStack } from './components/TechStack';
import { MatrixBackground } from './components/MatrixBackground';
import { projects } from './data/projects';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff00',
    },
    secondary: {
      main: '#003300',
    },
    background: {
      default: '#000000',
      paper: '#001100',
    },
    text: {
      primary: '#00ff00',
      secondary: '#00cc00',
    },
  },
  typography: {
    fontFamily: '"Courier New", monospace',
    h1: {
      fontFamily: '"Courier New", monospace',
    },
    h2: {
      fontFamily: '"Courier New", monospace',
    },
    h3: {
      fontFamily: '"Courier New", monospace',
    },
    h4: {
      fontFamily: '"Courier New", monospace',
    },
    h5: {
      fontFamily: '"Courier New", monospace',
    },
    h6: {
      fontFamily: '"Courier New", monospace',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#00ff00 #001100',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#001100',
            width: '8px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#00ff00',
            border: '2px solid #001100',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#001100',
          border: '1px solid #00ff00',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0,255,0,0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#003300',
          color: '#00ff00',
          border: '1px solid #00ff00',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MatrixBackground />
        <Header />
        <Box sx={{ position: 'relative', zIndex: 2, flex: 1 }}>
          <ProjectsGrid projects={projects} />
          <Box sx={{ mt: 6 }}>
            <TechStack />
          </Box>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
