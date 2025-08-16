import { Box, Paper, Typography, Grid } from "@mui/material";

import { AboutMeValue } from "../Components/types";
import AboutMe from "../data/AboutMe.json";
import ProfilePicture from "../assets/ProfilePicture.png";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function AboutMeBox() {
  const summary =
    "I am iOS Developer with Wells Fargo, based in Phoenix, AZ. I have a passion for building high-quality mobile applications and a strong background in Swift and Objective-C. I am always eager to learn new technologies and improve my skills.";
  const aboutMeData: AboutMeValue[] = AboutMe;
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
            <Typography variant="body1" sx={{ fontSize: 16 }}>
              {summary}
            </Typography>
            {aboutMeData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1, // space between Title and Data
                  paddingY: 1,
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: 16 }}
                >
                  [{item.Title}]
                </Typography>
                {item.link ? (
                  <Typography
                    variant="body1"
                    sx={{ fontSize: 16, color: "text.primary" }}
                    component="a"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    style={{ textDecoration: "underline" }}
                  >
                    {item.data}
                    {""}
                    <OpenInNewIcon
                      sx={{ fontSize: 20, verticalAlign: "text-bottom" }}
                    />
                  </Typography>
                ) : (
                  <Typography variant="body1" sx={{ fontSize: 16 }}>
                    {item.data}
                  </Typography>
                )}
              </Box>
            ))}
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
