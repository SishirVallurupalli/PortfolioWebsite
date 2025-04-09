import { Box, Typography } from "@mui/material";
import ProjectBox from "./ProjectsBox";
import projectsData from "../data/projects.json";
import { ProjectsValue } from "../Components/types";

export default function Projects() {
  const projectsVal: ProjectsValue[] = projectsData;
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
      <Typography variant="h4">Projects</Typography>
      {projectsVal.map((project) => {
        return <ProjectBox project={project} />;
      })}
    </Box>
  );
}
