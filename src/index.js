import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";

const manrope = "'Manrope', sans-serif";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      orange: "#d87d4a",
      pink: "#fbaf85",
    },
    secondary: {
      main: "#32edc1",
    },
    background: {
      default: "#fafafa",
      paper: "#f1f1f1",
      dark: "#191919",
    },
  },
  typography: {
    h1: {
      fontFamily: manrope,
      // lineHeight: 1.38,
      fontSize: "2rem",
      fontWeight: 700,
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
      "@media (min-width:900px)": {
        fontSize: "4rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "4rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "4rem",
      },
    },
    h2: {
      fontFamily: manrope,
      lineHeight: 1.38,
      fontSize: "2rem",
      fontWeight: 700,
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.75rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "3rem",
      },
    },

    h4: {
      fontSize: "1.2rem",
      fontFamily: manrope,

      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "1.2rem",
        fontWeight: 500,
      },
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 200,
      fontFamily: manrope,
      letterSpacing: "2px",

      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 500,
      fontFamily: manrope,

      "@media (min-width:600px)": {
        fontSize: "1.3rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.3rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "1.5rem",
      },
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      fontFamily: manrope,

      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontFamily: manrope,
      fontSize: "1rem",
      fontWeight: 500,
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontFamily: manrope,
      fontSize: "1rem",
      fontWeight: 600,
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1500px)": {
        fontSize: "1.2rem",
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
