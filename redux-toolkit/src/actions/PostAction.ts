import axios, { isAxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface PARMS {
  title: string;
  content: string;
  id?: string | undefined;
}

const token = localStorage.getItem("token");

export const getPost = createAsyncThunk("getPost", async (thunkAPI) => {
  try {
    const { data } = await axios.get("http://localhost:8080/todos", {
      headers: { Authorization: token },
    });
    return data;
  } catch (e) {
    // if (isAxiosError(e)) {
    //   return thunkAPI.rejectWithValue(e.response?.data);
    // }
  }
});

export const getByIdPost = createAsyncThunk(
  "getByIdPost",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (e) {
      if (isAxiosError(e)) {
        return rejectWithValue(e.response?.data);
      }
    }
  }
);

export const addPost = createAsyncThunk(
  "addPost",
  async (params: PARMS, thunkAPI) => {
    try {
      const { data } = await axios.post("http://localhost:8080/todos", params, {
        headers: { Authorization: token },
      });
      return data;
    } catch (e) {
      if (isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.response?.data);
      }
    }
  }
);

export const deletePost = createAsyncThunk(
  "deletePost",
  async (id: string | undefined, thunkAPI) => {
    try {
      const { data } = await axios.delete(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: token },
      });
      return data;
    } catch (e) {
      if (isAxiosError(e)) {
        return thunkAPI.rejectWithValue(e.response?.data);
      }
    }
  }
);

export const putPost = createAsyncThunk(
  "putPost",
  async (params: PARMS, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8080/todos/${params.id}`,
        params,
        {
          headers: { Authorization: token },
        }
      );
      return data;
    } catch (e) {
      if (isAxiosError(e)) {
        return rejectWithValue(e.response?.data);
      }
    }
  }
);
