import { createAsyncThunk } from "@reduxjs/toolkit";

import { getImgInfoById } from "../../api/getImgInfoById";

export const onClickAsync = createAsyncThunk(
  "currentImg/onClickAsync",
  async (id, { rejectWithValue }) => {
    try {
      const imgInfo = await getImgInfoById(id);
      return imgInfo;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
