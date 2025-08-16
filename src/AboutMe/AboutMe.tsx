import { Box, Typography } from "@mui/material";
import AboutMeBox from "./AboutMeBox";

export default function AboutMe() {
  return (
    <Box
      id="about-me"
      sx={{
        padding: "50px",
        px: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", paddingBottom: 4 }}>
        About Me
      </Typography>
      <AboutMeBox />
    </Box>
  );
}
