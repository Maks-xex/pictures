import { createAsyncThunk } from "@reduxjs/toolkit";

import { addComment } from "./currentImgSlice";

import { postComment } from "../../api/postComment";

export const postCommentAsync = createAsyncThunk(
  "currentImg/postCommentAsync",
  async ({ formValues, id }, { rejectWithValue, dispatch }) => {
    try {
      const response = await postComment(formValues, id);
      dispatch(addComment(response));
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
