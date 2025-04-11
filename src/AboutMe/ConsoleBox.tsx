import { Box, Paper, TextField, Typography } from "@mui/material";
import React from "react";

function ConsoleText({ child }: { child: string }) {
  return (
    <Typography
      sx={{
        fontSize: "1rem",
        fontFamily: 'Consolas, "Courier New", monospace',
        backgroundColor: "#1e1e1e",
        color: "#00ff00",
      }}
    >
      {child}
    </Typography>
  );
}

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
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#ff5f56",
          }}
        />
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#ffbd2e",
          }}
        />
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#27c93f",
          }}
        />
      </Box>
      <Box sx={{ px: 1 }}>
        <ConsoleText child="> Welcome to Sishir's Terminal" />
        <ConsoleText child='> You can learn more about me by wrinting this command "./AboutMe"' />
        <Box sx={{ display: "flex" }}>
          <ConsoleText child="> "></ConsoleText>
          <TextField
            variant="standard"
            fullWidth
            placeholder="Type a command"
            sx={{
              mt: 0,
              px: 1,
              fontSize: "1rem",
              fontFamily: 'Consolas, "Courier New", monospace',
              color: "#00ff00",
              backgroundColor: "transparent",
            }}
            slotProps={{
              input: {
                disableUnderline: true,
                style: {
                  fontFamily: 'Consolas, "Courier New", monospace',
                  fontSize: "1rem",
                  color: "#00ff00",
                  padding: 0,
                  height: "1.5rem",
                  lineHeight: 1.5,
                },
                spellCheck: false,
                autoComplete: "off",
              },
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
}
