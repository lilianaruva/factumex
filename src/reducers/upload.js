import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photos: [],
  modalEmployee: false,
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
    changeModalState: (state, action) => {
      state.modalEmployee = action.payload.modalEmployee;
    },
  },
});

export const rdxuploadsactions = counterSlice.actions;

export default counterSlice.reducer;
