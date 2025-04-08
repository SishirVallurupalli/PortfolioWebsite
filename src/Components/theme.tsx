import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Share Tech Mono', monospace",
  },
  palette: {
    primary: {
      main: "#1DCD9F",
    },
    background: {
      default: "#08090a",
      paper: "#222222",
    },
    text: {
      primary: "#ffffff",
      secondary: "#1DCD9F",
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
            backgroundColor: "#169976",
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
            backgroundColor: "#169976",
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          position: "relative",
          textDecoration: "none",
          color: "inherit",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "0%",
            height: "2px",
            backgroundColor: "#169976", // 👈 custom underline color
            transition: "width 0.3s ease-in-out",
          },
          "&:hover::after": {
            width: "100%",
          },
        },
      },
    },
  },
});

export default theme;
