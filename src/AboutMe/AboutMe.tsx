import { Box, Typography } from "@mui/material";
import ConsoleBox from "./ConsoleBox/ConsoleBox";

export default function AboutMe() {
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
      <Typography variant="h3" sx={{ textAlign: "center", paddingBottom: 4 }}>
        Sishir Vallurupalli
      </Typography>
      <ConsoleBox />
    </Box>
  );
}
