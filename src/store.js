import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./reducers/upload";

export const store = configureStore({
  reducer: { uploadReducer },
});
