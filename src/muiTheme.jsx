import { createTheme } from "@mui/material/styles";

const fuciaPink = "#E20489";
const main = "#6A1347";
const lightFuciaPink = " #FFB9EB73";
const dark = "#5A5959";
const lightGrey = "#8A8A8A";
const white = "#fff";
const purple = "#6A1354";
const deepRed = "#5F0B4A";

export const muiTheme = createTheme({
  palette: {
    common: {
      dark,
      deepRed,
      lightFuciaPink,
    },
    text: {
      secondary: "#494949",
      info: lightGrey,
      primary: dark,
      main: fuciaPink,
    },
    primary: {
      main,
    },
    // secondary: {
    //   main: grey,
    // },
    error: {
      main: fuciaPink,
    },

    secondary: {
      main: dark,
    },
    info: {
      main: lightGrey,
    },
    success: {
      main: purple,
    },
    // warning: {
    //   main: gold,
    // },
    // disabled: {
    //   main: disable,
    // },
  },

  typography: {
    fontFamily: ["Raleway", "sans-serif", "Roboto"].join(", "),
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: "clamp(4rem, 2vw, 4.5rem)",
      fontWeight: 800,
      color: "#fff",
      // lineHeight: "3rem",
    },
    h2: {
      fontSize: "clamp(2.5rem, 2vw, 3.5rem)",
      fontWeight: 700,
    },
    h3: {
      fontSize: "clamp(2rem, 2vw,2.7rem)",
      fontWeight: 500,
    },
    h4: {
      fontSize: "clamp(1.6rem,2vw,2.4rem)",
      fontWeight: 500,
    },
    h5: {
      fontSize: "clamp(1.4rem,2vw,1.85rem)",
      fontWeight: 500,
    },
    h6: {
      fontSize: "clamp(1.9rem,2vw,2.2rem)",
      fontWeight: 500,
    },

    body2: {
      fontSize: "clamp(1.6rem,2vw, 2.4rem)",
      fontWeight: 500,
      lineHeight: 1.85,
    },
    body1: {
      fontSize: "clamp(1.8rem,2vw, 2rem)",
      fontWeight: 500,
      lineHeight: 1.85,
      textAlign: "justify",
    },

    btn: {
      fontSize: "1.5rem",
      textTransform: "none",
      height: "5rem",
      borderRadius: 10,
      boxShadow: "0px 0px 4px -1px rgba(71,64,71,0.63)",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        boxShadow:
          "0px 5px 5px -3px rgba(0,0,0,.5),0px 8px 10px 1px rgba(0,0,0,0.01),0px 3px 14px 2px rgba(0,0,0,0.01)",
      },
    },
  },
});
