import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./Components/theme";
import Footer from "./Components/Footer";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ paddingTop: "100px" }}>
        <Header />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
