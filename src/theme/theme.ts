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
    },
  },
  components: {
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
