import axios, { isAxiosError } from "axios";
import { AnyAction, Dispatch } from "redux";
import {
  GETSUCCESS,
  GETBYIDSUCCESS,
  ADDPOSTSUCCESS,
  PUTPOSTSUCCESS,
  DELETEPOSTSUCCESS,
  POSTFAILURE,
} from "../reducers/PostReducer";

interface PARMS {
  title: string;
  content: string;
}

const token = localStorage.getItem("token");

export const getPost = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const { data } = await axios.get("http://localhost:8080/todos", {
      headers: { Authorization: token },
    });
    dispatch({ type: GETSUCCESS, payload: data });
  } catch (e) {
    if (isAxiosError(e)) {
      dispatch({ type: POSTFAILURE, error: e.response?.data });
    }
  }
};

export const getByIdPost =
  (id: string | undefined) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: token },
      });
      dispatch({ type: GETBYIDSUCCESS, payload: data });
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch({ type: POSTFAILURE, error: e.response?.data });
      }
    }
  };

export const addPost =
  (params: PARMS) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const { data } = await axios.post("http://localhost:8080/todos", params, {
        headers: { Authorization: token },
      });
      dispatch({ type: ADDPOSTSUCCESS, payload: data });
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch({ type: POSTFAILURE, error: e.response?.data });
      }
    }
  };

export const putPost =
  (params: PARMS, id: string | undefined) =>
  async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/todos/${id}`,
        params,
        {
          headers: { Authorization: token },
        }
      );
      dispatch({ type: PUTPOSTSUCCESS, payload: response });
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch({ type: POSTFAILURE, error: e.response?.data });
      }
    }
  };

export const deletePost =
  (id: string | undefined) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const { data } = await axios.delete(`http://localhost:8080/todos/${id}`, {
        headers: { Authorization: token },
      });
      dispatch({ type: DELETEPOSTSUCCESS, payload: data });
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch({ type: POSTFAILURE, error: e.response?.data });
      }
    }
  };
