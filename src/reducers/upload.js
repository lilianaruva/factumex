import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const rdxuploadsactions = counterSlice.actions;

export default counterSlice.reducer;
