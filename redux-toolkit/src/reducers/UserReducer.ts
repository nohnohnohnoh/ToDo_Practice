import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../actions/UserAction";

const initialState = {
  isLogging: false,
  data: null,
  error: null as any,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logOut(state) {
      state.data = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signIn.pending, (state) => {
        state.isLogging = true;
        state.data = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLogging = false;
        state.data = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.error;
      }),
});
