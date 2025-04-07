import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Share Tech Mono', monospace",
  },
  palette: {
    background: {
      default: "#243642",
      paper: "#243642",
    },
    text: {
      primary: "#E2F1E7",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          position: "relative",
          textTransform: "none",
          fontSize: "1rem",
          color: "inherit",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: -4,
            height: "4px",
            width: "0%",
            backgroundColor: "#ffffff",
            transition: "width 0.3s ease-in-out",
          },
          "&:hover::after": {
            width: "100%",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          position: "relative",
          display: "inline-block",
          marginBottom: "1.5rem",
          "&::after": {
            content: '""',
            display: "block",
            // width of the underline
            height: "10px",
            marginTop: "30px",
            marginRight: "40px",
            marginLeft: "40px",
            backgroundColor: "#ffffff",
          },
        },
      },
    },
  },
});

export default theme;
