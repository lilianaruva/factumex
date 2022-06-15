import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      state.photos.push(action.payload.photos);
    },
    deletePhotos: (state) => {
      while (state.photos.length > 0) state.photos.pop();
    },
  },
});

export const rdxuploadsactions = counterSlice.actions;

export default counterSlice.reducer;
