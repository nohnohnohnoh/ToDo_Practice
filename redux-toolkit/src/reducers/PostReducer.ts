import { createSlice } from "@reduxjs/toolkit";
import {
  getPost,
  getByIdPost,
  addPost,
  deletePost,
  putPost,
} from "../actions/PostAction";
import { PayloadAction } from "@reduxjs/toolkit";

type PostSlice = {
  data: any[];
};

const initialState: PostSlice = {
  data: [],
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getPost.fulfilled, (state, action: PayloadAction<PostSlice>) => {
        state.data = action.payload.data;
      })
      .addCase(
        getByIdPost.fulfilled,
        (state, action: PayloadAction<PostSlice>) => {
          state.data = [action.payload.data];
        }
      )
      .addCase(addPost.fulfilled, (state, action: PayloadAction<PostSlice>) => {
        state.data.unshift(action.payload.data);
      })
      .addCase(
        deletePost.fulfilled,
        (state, action: PayloadAction<PostSlice>) => {
          state.data = action.payload.data;
        }
      )
      .addCase(putPost.fulfilled, (state, action: PayloadAction<PostSlice>) => {
        state.data.unshift(action.payload.data);
      }),
});
