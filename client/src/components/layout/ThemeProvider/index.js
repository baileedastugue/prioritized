import { createTheme } from '@mui/material/styles';

const outerTheme = createTheme({
  palette: {
    secondary: {
      main: '#ffab91',
    },
    primary: {
      main: '#00acc1',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#fdd835',
    },
    success: {
      main: '#388e3c',
    },
    info: {
      main: '#9575cd',
    },
    grey: {
      main: '#bdbdbd',
    },
    type: 'light',
  },
  typography: {
    h1: {
      fontFamily: 'Prata',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Prata',
    },
    h3: {
      fontFamily: 'Prata',
    },
    h4: {
      fontFamily: 'Prata',
    },
    h5: {
      fontFamily: 'Prata',
    },
    h6: {
      fontFamily: 'Lato, sans-serif',
    },
    subtitle1: {
      fontFamily: 'Lato, sans-serif',
    },
    subtitle2: {
      fontFamily: 'Lato, sans-serif',
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '1.1rem',
    },
    body2: {
      fontFamily: 'Lato, sans-serif',
    },
    button: {
      fontFamily: 'Lato, sans-serif',
    },
    overline: {
      fontFamily: 'Lato, sans-serif',
    },
  },
});

export default outerTheme;
