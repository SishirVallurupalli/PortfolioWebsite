import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DirectoryState {
  currentDirectory: string[];
  homeDirectory: string[];
  secretDirectory: string[];
}

const initialState: DirectoryState = {
  currentDirectory: [], // Default to an empty string
  homeDirectory: [
    "AboutMe.txt",
    "Secrets",
    "Projects.exe",
    "Experience.exe",
    "Contact.exe",
    "help",
  ],
  secretDirectory: ["secretText.txt"],
};

const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {
    setDirectory: (state, action: PayloadAction<string>) => {
      if (action.payload === "/") {
        state.currentDirectory = state.homeDirectory;
      } else if (action.payload === "/Secrets") {
        state.currentDirectory = state.secretDirectory;
      }
    },
  },
});

export const { setDirectory } = directorySlice.actions;

export default directorySlice.reducer;
