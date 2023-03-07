import { AnyAction, Action, Dispatch } from "redux";
import axios, { AxiosResponse, isAxiosError } from "axios";
import { RootState } from "../Store";
import { ThunkAction } from "redux-thunk";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface PARAMS {
  email: string;
  password: string;
}

export const signIn = createAsyncThunk("login", async (params, thunkAPI) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/users/login",
      params
    );
    return response.data;
  } catch (e) {
    if (isAxiosError(e)) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
});
export const signUp = createAsyncThunk("SIGNUP", async (params, thunkAPI) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/users/create",
      params
    );
    return response.data;
  } catch (e) {
    if (isAxiosError(e)) {
      return thunkAPI.rejectWithValue(e.response?.data);
    }
  }
});
