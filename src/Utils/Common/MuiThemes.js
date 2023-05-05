import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Colors from "./Colors";
import Sizes from "./Sizes";

const MuiThemes = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      h1: {
        fontSize: Sizes.FontSizeLG,
        color: Colors.NeutralDark,
      },
      h2: {
        fontSize: Sizes.FontSizeSM,
        color: Colors.NeutralDark,
        fontWeight: "bold",
      },
      body1: {
        fontSize: Sizes.FontSizeSM,
        color: Colors.NeutralDark,
      },
      body2: {
        fontSize: Sizes.FontSizeXS,
        color: Colors.NeutralDark,
      },
      minSize: {
        fontSize: Sizes.FontSizeEXS,
        color: Colors.NeutralDark,
      },
      button: {
        fontSize: Sizes.FontSizeXS,
      },
    },

    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: "primary" },
            style: {
              textTransform: "none",
              minWidth: 100,
              fontSize: Sizes.FontSizeSM,
              fontWeight: 700,
              lineHeight: "27px",
              color: Colors.Black,
              marginTop: "15px",
              marginBottom: "15px",
              borderRadius: 8,
              "&:hover": {
                color: Colors.White,
              },

            },
          },
          {
            props: { variant: "secondary" },
            style: {
              textTransform: "none",
              background: Colors.Grenn,

              minWidth: 200,
              fontSize: Sizes.FontSizeSM,
              fontWeight: "bold",
              lineHeight: "27px",
              borderRadius: 24,
              color: Colors.Black,
              "&:hover": {
                background: Colors.SecondaryMedium,
                color: Colors.White,
              },
              "&:active": {
                background: Colors.SecondaryDark,
                color: Colors.White,
              },
            },
          },
          {
            props: { variant: "third" },
            style: {
              textTransform: "none",
              background: Colors.Grenn,
              minWidth: 200,
              fontSize: Sizes.FontSizeSM,
              fontWeight: "bold",
              lineHeight: "40px",
              borderRadius: 24,
              color: Colors.Black,
              "&:hover": {
                background: Colors.SecondaryMedium,
                color: Colors.White,
              },
              "&:active": {
                background: Colors.SecondaryDark,
                color: Colors.White,
              },
            },
          },
          {
            props: { variant: "disabled" },
            style: {
              textTransform: "none",
              background: Colors.BackgroundDisabled,
              minWidth: 200,
              fontSize: Sizes.FontSizeSM,
              fontWeight: 700,
              lineHeight: "27px",
              borderRadius: 24,
              color: Colors.NeutralMedium,
              marginTop: "15px",
              marginBottom: "15px",
            },
          },
        ],
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemes;