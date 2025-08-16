import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HistoryState {
  history: string[];
}

const initialState: HistoryState = {
  history: [
    "$ Welcome to Sishir's Terminal",
    '$ You can type "help" to see the list of commands',
    "$ Type 'quit' to exit",
  ],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload);
    },
    addHistoryArray: (state, action: PayloadAction<string[]>) => {
      state.history.push(...action.payload);
    },
    setHistory: (state, action: PayloadAction<string[]>) => {
      state.history = action.payload;
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { addHistory, addHistoryArray, setHistory, clearHistory } =
  historySlice.actions;
export default historySlice.reducer;
