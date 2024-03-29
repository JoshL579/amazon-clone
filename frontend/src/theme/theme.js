import { createTheme } from "@mui/material/styles";
import AmazonEmber from "../assets/fonts/AmazonEmberBold/Amazon-Ember.ttf";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#232f3e",
      main: "#131921",
    },
    secondary: {
      light: "#FFD814",
      main: "#FFA41C",
    },
    grey: {
      main: "#f3f3f3",
      contrastText: "#000",
      header: "#F5F6F6",
      canada: "#c0c0c0",
    },
    blue: {
      main: "#0066c0",
      light: "#007aff",
    },
    orange: {
      main: "#C7511F",
    },
  },
  typography: {
    fontFamily: ["Amazon Ember", "Arial", "sans-serif"].join(","),

    h6: {
      fontSize: 16,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
    },
    body2: {
      fontSize: 14,
      fontWeight: 500,
    },
    body3: {
      fontSize: 13,
      fontWeight: 500,
    },
    body4: {
      fontSize: 12,
      fontWeight: 500,
    },

    button: {
      textTransform: "unset",
      letterSpacing: "0.03rem",
    },
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
});
