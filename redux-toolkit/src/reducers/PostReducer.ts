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
  data: [
    {
      title: string;
      content: string;
      id: string;
      createdAt: string;
      updatedAt: string;
    }
  ];
};

const initialState: PostSlice = {
  data: [
    {
      title: null as unknown as string,
      content: null as unknown as string,
      createdAt: null as unknown as string,
      id: null as unknown as string,
      updatedAt: null as unknown as string,
    },
  ],
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(
      getPost.fulfilled,
      (state, action: PayloadAction<PostSlice>) => {
        state.data = action.payload.data;
      }
    ),
  // .addCase(
  //   // getByIdPost.fulfilled,
  //   // (state, action: PayloadAction<PostSlice>) => {
  //   //   state.detailData = action.payload.data;
  //   // }
  // )
  // .addCase(addPost.fulfilled, (state, action) => {
  //   state.data.unshift(action.payload.data);
  // })
  // .addCase(deletePost.fulfilled, (state, action) => {
  //   state.data = action.payload.data;
  // })
  // .addCase(putPost.fulfilled, (state, action) => {
  //   return {
  //     ...initialState,
  //     data: initialState.data.map((data: any) =>
  //       data.id === action.payload.id ? action.payload.data : data
  //     ),
  //   };
  // }),
});
