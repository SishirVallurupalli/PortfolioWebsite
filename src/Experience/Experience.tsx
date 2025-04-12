import { Box, Typography } from "@mui/material";
import ExperienceBox from "./ExperienceBox";
import experienceData from "../data/experiences.json";
import { ExperienceValue } from "../Components/types";

export default function Experience() {
  const experiences: ExperienceValue[] = experienceData;
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
      {experiences.map((exp) => {
        return <ExperienceBox key={exp.Title} experience={exp} />;
      })}
    </Box>
  );
}
