import { Box, Typography } from "@mui/material";

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
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Sishir Vallurupalli
      </Typography>
    </Box>
  );
}
