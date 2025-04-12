import { Box, Button, Chip, Grid, Paper, Typography } from "@mui/material";
import TradingBotImage from "../assets/tradingBot.png";
import { ProjectsValue } from "../Components/types";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectBox({
  project,
}: {
  project: ProjectsValue;
  key: string;
}) {
  return (
    <Paper
      elevation={24}
      sx={{
        maxWidth: 1100,
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
              {project.Name}
            </Typography>
            {/* <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontSize: 14 }}
            >
              React
            </Typography> */}
            <Typography
              variant="body2"
              sx={{ paddingTop: 1, paddingBottom: 1, fontSize: 16 }}
            >
              {project.Info}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, pt: 1 }}>
              {project.Tools.map((element: string) => {
                return (
                  <Chip
                    key={element}
                    label={element}
                    variant="outlined"
                    color="primary"
                  />
                );
              })}
            </Box>
            <Box sx={{ padding: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                component="a"
                href={project.GithubLink}
                target="_blank"
                endIcon={<GitHubIcon />}
              >
                Github
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 0, md: 0, lg: 3 }}>
          <img
            src={TradingBotImage}
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
