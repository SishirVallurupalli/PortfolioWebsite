import { Box, Paper, Typography, Grid } from "@mui/material";

import { AboutMeValue } from "../Components/types";
import AboutMe from "../data/AboutMe.json";
import ProfilePicture from "../assets/ProfilePicture.png";

export default function AboutMeBox() {
  const aboutMeData: AboutMeValue = AboutMe;
  return (
    <Paper
      elevation={24}
      sx={{
        maxWidth: 1100,
        maxHeight: 500,
        marginTop: 2,
        marginBottom: 2,
        width: "100%",
        height: "100%",
        overflow: "hidden", // prevents image from overflowing the border
        borderRadius: 2, // adds the curved edges here (MUI spacing unit = 16px)
        flexDirection: "row-reverse",
        alignItems: "center",
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12, md: 12, lg: 9 }}>
          <Box sx={{ p: 2 }}>
            <Typography variant="body1" sx={{ fontSize: 18 }}>
              {aboutMeData.data}
            </Typography>
            <Box sx={{ paddingY: 2 }}></Box>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, pt: 1 }}></Box>
        </Grid>
        <Grid size={{ xs: 0, md: 0, lg: 3 }}>
          <img
            src={ProfilePicture}
            alt="TradingBot"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "fill",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
