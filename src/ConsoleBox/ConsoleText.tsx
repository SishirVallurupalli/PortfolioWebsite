import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ExecuteCommand, setDispatch } from "./ConsoleFunction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store"; // Adjust the path to match your Redux store definition
import { addHistory, addHistoryArray } from "../redux/historySlice";

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
  const dispatch = useDispatch();
  const history = useSelector((state: RootState) => state.history.history); // Ensure RootState is correctly typed in your store
  const [input, setInput] = useState("");

  const scrollRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    setDispatch(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  const handleExecute = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter" && input != "") {
      dispatch(addHistory(`$ ${input}`));
      dispatch(addHistoryArray(ExecuteCommand(input)));
      setInput("");
    }
  };

  return (
    <Box
      ref={scrollRef}
      sx={{ px: 1, overflowY: "auto", flex: 1, maxHeight: "45vh", py: 0.5 }}
    >
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
