import { createAsyncThunk } from "@reduxjs/toolkit";

import { getImages } from "../../api/getImages";

export const getAsyncImages = createAsyncThunk(
	"images/getAsyncImages",
	async (_, { rejectWithValue }) => {
		try {
			const images = await getImages();
			return images;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
