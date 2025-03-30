import { createTheme } from '@mui/material/styles';

// Gold theme colors
const themeColors = {
  primary: '#FFD700', // Pure gold
  primaryLight: 'rgba(255, 215, 0, 0.1)', // Transparent gold for hover effects
  primaryLighter: 'rgba(255, 215, 0, 0.2)', // Slightly more visible gold
  text: '#FFD700',
  border: '#FFD700',
  shadow: '#FFD700',
  background: 'rgba(17, 15, 0, 0.9)', // Dark background with slight gold tint
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: themeColors.primary,
    },
    background: {
      default: '#000',
      paper: themeColors.background,
    },
    text: {
      primary: themeColors.text,
      secondary: themeColors.text,
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
          scrollbarColor: `${themeColors.primary} ${themeColors.background}`,
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: themeColors.background,
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: themeColors.primary,
            minHeight: 24,
            border: `3px solid ${themeColors.background}`,
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: themeColors.primary,
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: themeColors.primary,
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: themeColors.primary,
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: themeColors.background,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: themeColors.text,
          borderColor: themeColors.border,
          '&:hover': {
            borderColor: themeColors.border,
            backgroundColor: themeColors.primaryLight,
          },
        },
      },
    },
  },
});

export { theme, themeColors };
