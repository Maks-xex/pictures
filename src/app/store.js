import { configureStore } from "@reduxjs/toolkit";

import { imagesApi } from "../features/images/imagesApi";
import { imagesInfoApi } from "../features/currentImg/imagesInfoApi";

import currentImgReducer from "../features/currentImg/currentImgSlice";

export const store = configureStore({
	reducer: {
		currentImg: currentImgReducer,
		[imagesInfoApi.reducerPath]: imagesInfoApi.reducer,
		[imagesApi.reducerPath]: imagesApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(
			imagesInfoApi.middleware,
			imagesApi.middleware,
		),
});
