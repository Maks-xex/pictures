import { createSlice } from "@reduxjs/toolkit";

const currentImgSlice = createSlice({
	name: "currentImg",
	initialState: {
		currentImg: null,
		id: null,
		skip: true,
	},
	reducers: {
		clearCurrentImg(state, action) {
			state.currentImg = action.payload;
		},
		addCurrentImg(state, action) {
			state.currentImg = action.payload;
		},
		addId(state, action) {
			state.id = action.payload.id;
			state.skip = action.payload.skip;
		},
		addUserComment(state, action) {
			state.currentImg.comments.push(action.payload);
		},
	},
});

export const { clearCurrentImg, addUserComment, addCurrentImg, addId } =
	currentImgSlice.actions;
export default currentImgSlice.reducer;
