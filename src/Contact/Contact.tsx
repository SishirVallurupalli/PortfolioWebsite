import { Box, Typography } from "@mui/material";
import * as React from "react";
import ContactBar from "./ContactBar";

export default function Contact() {
  return (
    <Box
      sx={{
        padding: "50px",
        px: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Contact</Typography>
      <ContactBar />
    </Box>
  );
}
