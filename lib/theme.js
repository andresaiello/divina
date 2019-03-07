import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fab7d3',
      main: '#f23b87',
    },
    secondary: {
      main: '#0191ff',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'Didact Gothic',
      'sans-serif',
    ].join(','),
    h5: {
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
