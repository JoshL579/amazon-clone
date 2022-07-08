import { createTheme } from '@mui/material/styles'
import AmazonEmber from '../assets/fonts/AmazonEmberBold/Amazon-Ember.ttf';

export const theme = createTheme({
  palette: {
    primary: {
        light: '#232f3e',
        main: '#131921',
    },
    secondary: {
      main: '#febd69',
    },
    grey: {
      main: '#f3f3f3',
      contrastText: '#000'
    },
    blue: {
      main: "#0066c0"
    }
  },
  typography: {
    fontFamily: [
      "Amazon Ember",
      'Arial',
      'sans-serif'
    ].join(','),

    h6: {
      fontSize: 16,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700
    },
    body2: {
      fontSize: 14,
      fontWeight: 500
    },

    button: {
      textTransform: 'unset',
      letterSpacing: '0.03rem'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Amazon Ember";
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Amazon Ember'), local('Amazon-Ember'), url(${AmazonEmber}) format('truetype');
        }
      `,
    },
  },
})
