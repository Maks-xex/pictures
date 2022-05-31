import { createSlice } from "@reduxjs/toolkit";

const currentImgSlice = createSlice({
	name: "currentImg",
	initialState: {
		currentImg: null,
		id: null,
	},
	reducers: {
		removeCurrentImg(state) {
			[state.currentImg, state.id] = [null, null];
		},
		addCurrentImg(state, action) {
			state.currentImg = action.payload;
		},

		addId(state, action) {
			state.id = action.payload.id;
		},
		addUserComment(state, action) {
			state.currentImg.comments.push(action.payload);
		},
	},
});

export const { removeCurrentImg, addUserComment, addCurrentImg, addId } =
	currentImgSlice.actions;
export default currentImgSlice.reducer;
