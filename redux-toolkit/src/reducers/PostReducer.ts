import { createSlice } from "@reduxjs/toolkit";
import {
  getPost,
  getByIdPost,
  addPost,
  deletePost,
  putPost,
} from "../actions/PostAction";

const initialState = {
  data: <any>[],
  detailData: null,
  error: null as any,
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getPost.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
      .addCase(getByIdPost.fulfilled, (state, action) => {
        state.detailData = action.payload.data;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.data.unshift(action.payload.data);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
      .addCase(putPost.fulfilled, (state, action) => {
        return {
          ...initialState,
          data: initialState.data.map((data: any) =>
            data.id === action.payload.id ? action.payload.data : data
          ),
        };
      }),
});
