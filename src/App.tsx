import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TechStack } from './components/TechStack';
import { MatrixBackground } from './components/MatrixBackground';
import { projects } from './data/projects';

const App = () => {
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
