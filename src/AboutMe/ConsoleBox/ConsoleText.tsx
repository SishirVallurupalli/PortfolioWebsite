import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

function Text({ text }: { text: string }) {
  return (
    <Typography
      sx={{
        fontSize: "1rem",
        fontFamily: 'Consolas, "Courier New", monospace',
        backgroundColor: "#1e1e1e",
        color: "#00ff00",
      }}
    >
      {text}
    </Typography>
  );
}

const ConsoleTextFieldStyling = {
  mt: 0,
  px: 1,
  fontSize: "1rem",
  fontFamily: 'Consolas, "Courier New", monospace',
  color: "#00ff00",
  backgroundColor: "transparent",
};

const ConsoleInputControl = {
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
};

export default function ConsoleText() {
  const [history, setHistory] = useState([
    "> Welcome to Sishir's Terminal",
    '> You can learn more about me by wrinting this command "./AboutMe"',
  ]);
  const [input, setInput] = useState("");

  const handleExecute = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter" && input != "") {
      const h = [...history, `$ Command ${input} not found`];
      setHistory(h);
      setInput("");
    }
  };

  return (
    <Box sx={{ px: 1 }}>
      {history.map((str: string, index) => {
        return <Text key={index} text={str} />;
      })}
      <Box sx={{ display: "flex" }}>
        <Text text="> "></Text>
        <TextField
          variant="standard"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleExecute}
          placeholder="Type a command"
          sx={ConsoleTextFieldStyling}
          slotProps={ConsoleInputControl}
        />
      </Box>
    </Box>
  );
}
