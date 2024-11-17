import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5F7161',
      light: '#768A79',
      dark: '#495849',
    },
    secondary: {
      main: '#E6D5B8', 
      light: '#F1E6D4',
      dark: '#CCB89C',
    },
    background: {
      default: '#FAF6F1', 
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#5F7161',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#FFFFFF',
          },
        },
      },
    },
  },
});