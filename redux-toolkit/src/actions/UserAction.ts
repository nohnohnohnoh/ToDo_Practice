import axios, { isAxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface PARAMS {
  email: string;
  password: string;
}

export const signIn = createAsyncThunk(
  "SIGNIN",
  async (params: PARAMS, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        params
      );
      return response.data;
    } catch (e) {
      if (isAxiosError(e)) {
        return rejectWithValue(e.response?.data);
      }
    }
  }
);

export const signUp = createAsyncThunk(
  "SIGNUP",
  async (params: PARAMS, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/create",
        params
      );
      return response.data;
    } catch (e) {
      if (isAxiosError(e)) {
        return rejectWithValue(e.response?.data);
      }
    }
  }
);
