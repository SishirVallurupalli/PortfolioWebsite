import { Box, Button, Chip, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import WellsFargoImage from "../assets/WellsFargoLogo.png";

export default function ExperienceBox() {
  const skills = [
    "React",
    "Node.js",
    "JavaScript / TypeScript",
    "REST APIs",
    " Git & CI/CD",
    "Agile / Scrum",
    "HTML/CSS",
  ];
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
        elevation={24}
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden", // prevents image from overflowing the border
          borderRadius: 2, // adds the curved edges here (MUI spacing unit = 16px)
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid size={9}>
            <Box sx={{ p: 2 }}>
              <Typography variant="body1" sx={{ fontSize: 16 }}>
                Software Engineer
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontSize: 12 }}
              >
                Wells Fargo in Chandler, AZ
              </Typography>
              <Typography
                variant="body2"
                sx={{ paddingTop: 1, paddingBottom: 1, fontSize: 12 }}
              >
                At Wells Fargo, I contributed to the development of scalable
                internal applications that improved operational efficiency
                across several departments. I collaborated closely with
                cross-functional teams to implement secure, maintainable code
                and integrate third-party APIs. My time there sharpened my
                problem-solving skills and deepened my understanding of
                enterprise-level software practices.
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, pt: 1 }}>
                {skills.map((element) => {
                  return (
                    <Chip label={element} variant="outlined" color="primary" />
                  );
                })}
              </Box>

              <Button sx={{ fontSize: 12, paddingTop: 1 }}>Learn More</Button>
            </Box>
          </Grid>
          <Grid size={3}>
            <img
              src={WellsFargoImage}
              alt="WellsFargo"
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
    </Box>
  );
}
