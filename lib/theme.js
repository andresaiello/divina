import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#f23b874d',
      main: '#f23b87',
    },
    secondary: {
      light: '#D8D8D8',
      main: '#9B9B9B',
      dark: '#4A4A4A',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Didact Gothic',
      'sans-serif',
    ].join(','),
    h6: {
      fontFamily: 'CurlzMT',
    },
    // h6: {
    //   fontFamily: [
    //     'La Belle Aurore',
    //     'cursive',
    //   ].join(','),
    // },
  },
});

export default theme;
