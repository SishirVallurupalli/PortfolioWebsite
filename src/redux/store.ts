import { configureStore } from "@reduxjs/toolkit";
import historyReducer from "./historySlice";
import directoryReducer from "./directorySlice";

const store = configureStore({
  reducer: {
    history: historyReducer,
    directory: directoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
