import { Box, Paper } from "@mui/material";
import * as React from "react";
import WellsFargoImage from "../assets/WellsFargoLogo.png";

export default function ExperienceBox() {
  return (
    <Box
      sx={{
        width: "100%",

        marginTop: 2,
        maxWidth: 1000,
        backgroundColor: "rgb(35, 45, 63, 0.1)",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          height: "100%",
          maxHeight: "30vh",
          minHeight: "30vh",
          overflow: "hidden", // prevents image from overflowing the border
          borderRadius: 2, // adds the curved edges here (MUI spacing unit = 16px)
        }}
      >
        <img
          src={WellsFargoImage}
          alt="WellsFargo"
          style={{
            height: "100%",
            width: "26%",
            objectFit: "fill",
            display: "block",
          }}
        />
      </Paper>
    </Box>
  );
}
