import { Box, Paper } from "@mui/material";
import ConsoleText from "./ConsoleText";

export default function ConsoleBox() {
  return (
    <Paper
      elevation={24}
      sx={{
        border: "4px solid #444",
        borderRadius: 2,
        backgroundColor: "#1e1e1e",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
        mx: "auto",
        maxWidth: 1100,
        marginTop: 2,
        marginBottom: 2,
        width: "100%",
        height: "100%",
        overflow: "hidden", // prevents image from overflowing the border
        flexDirection: "row-reverse",
        alignItems: "center",
        minHeight: "50vh",
        maxHeight: "50vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#2d2d2d",
          p: 1,
          borderBottom: "1px solid #444",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 12,
            minHeight: 12,
            borderRadius: "50%",
            backgroundColor: "#ff5f56",
            cursor: "pointer",
          }}
        />
        <Box
          sx={{
            width: 12,
            minHeight: 12,
            borderRadius: "50%",
            backgroundColor: "#ffbd2e",
          }}
        />
        <Box
          sx={{
            width: 12,
            minHeight: 12,
            borderRadius: "50%",
            backgroundColor: "#27c93f",
          }}
        />
      </Box>
      <ConsoleText />
    </Paper>
  );
}
