import { Box, Typography } from "@mui/material";
import ExperienceBox from "./ExperienceBox";

export default function Experience() {
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
      <Typography variant="h4">Experience</Typography>
      <ExperienceBox />
    </Box>
  );
}
