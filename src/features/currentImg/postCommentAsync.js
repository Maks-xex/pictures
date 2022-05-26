import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { addComment } from "./currentImgSlice";

import { postComment } from "../../api/postComment";

export const postCommentAsync = createAsyncThunk(
	"currentImg/postCommentAsync",
	async (formValues, { rejectWithValue, dispatch }) => {
		const id = useSelector((state) => state.currentImg.currentImg.id);
		try {
			const response = await postComment(formValues, id);
			dispatch(addComment(response));
		} catch (error) {
			rejectWithValue(error.message);
		}
	},
);
