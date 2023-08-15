import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#F50057',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#333333',
    },
  },
});

theme.palette.mode = 'dark';
theme.palette.primary.main = '#90CAF9';
theme.palette.secondary.main = '#F48FB1';
theme.palette.background.default = '#121212';
theme.palette.text.primary = '#FFFFFF';

export default theme;
