import { configureStore } from "@reduxjs/toolkit";

import imagesReducer from "../features/images/imagesSlice";
import currentImgReducer from "../features/currentImg/currentImgSlice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    currentImg: currentImgReducer,
  },
});
