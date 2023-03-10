import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../actions/UserAction";
import { PayloadAction } from "@reduxjs/toolkit";

type UserSlce = {
  isLogging: boolean;
  data: any;
  error: any;
};

const initialState: UserSlce = {
  isLogging: false,
  data: null,
  error: null,
};

type Error = {
  error: any;
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
      .addCase(signIn.fulfilled, (state, action: PayloadAction<UserSlce>) => {
        state.isLogging = false;
        state.data = action.payload;
      })
      .addCase(signIn.rejected, (state, action: Error) => {
        state.error = action.error;
      })
      .addCase(signUp.pending, (state) => {
        state.isLogging = true;
        state.data = null;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<UserSlce>) => {
        state.isLogging = false;
        state.data = action.payload;
      })
      .addCase(signUp.rejected, (state, action: Error) => {
        state.error = action.error;
      }),
});
