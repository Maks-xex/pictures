import { createSlice } from "@reduxjs/toolkit";

import { onClickAsync } from "./onClickAsync";
import { postCommentAsync } from "./postCommentAsync";

const setError = (state, action) => {
	state.loading = false;
	state.error = action.payload;
};

const currentImgSlice = createSlice({
	name: "currentImg",
	initialState: {
		currentImg: null,
		loading: null,
		error: null,
	},
	reducers: {
		clearCurrentImg(state, action) {
			state.currentImg = action.payload;
		},
		addComment(state, action) {
			state.currentImg.comments.push(action.payload);
		},
	},
	extraReducers: {
		[onClickAsync.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[onClickAsync.fulfilled]: (state, action) => {
			state.loading = false;
			state.currentImg = action.payload;
		},
		[onClickAsync.rejected]: setError,
		[postCommentAsync.rejected]: setError,
	},
});

export const { clearCurrentImg, addComment } = currentImgSlice.actions;
export default currentImgSlice.reducer;
