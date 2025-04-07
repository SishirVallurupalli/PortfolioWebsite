import { Box, Link, Typography } from "@mui/material";
import React from "react";

export default function ContactBar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        fontFamily: "'Share Tech Mono', monospace",
        py: 4,
        paddingTop: "50px",
        paddingBottom: "25px",
      }}
    >
      <Link
        href="mailto:sishir.vallurupalli@gmail.com"
        underline="none"
        sx={{ fontSize: "1rem" }}
      >
        sishir.vallurupalli@gmail.com
      </Link>

      <Typography>| |</Typography>

      <Link
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener"
        color="inherit"
        sx={{ fontSize: "1rem" }}
      >
        LinkedIn
      </Link>

      <Typography>| |</Typography>

      <Link
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener"
        color="inherit"
        sx={{ fontSize: "1rem" }}
      >
        GitHub
      </Link>
    </Box>
  );
}
