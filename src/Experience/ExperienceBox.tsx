import { Box } from "@mui/material";
import * as React from "react";

export default function ExperienceBox() {
  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #ddd",
        borderRadius: "5px",
        width: "100%",
        marginLeft: 2,
        marginTop: 2,
        maxWidth: 1000,
        backgroundColor: "rgba(128, 128, 128, 0.1)",
      }}
    >
      Hello
    </Box>
  );
}
