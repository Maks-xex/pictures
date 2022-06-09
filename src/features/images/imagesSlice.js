import { createSlice } from "@reduxjs/toolkit";
import { getAsyncImages } from "./getAsyncImages";

const imagesSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getAsyncImages.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getAsyncImages.fulfilled]: (state, action) => {
      state.loading = false;
      state.images = action.payload;
    },
    [getAsyncImages.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default imagesSlice.reducer;
