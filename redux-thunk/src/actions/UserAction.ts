import { AnyAction, Action, Dispatch } from "redux";
import axios, { AxiosResponse, isAxiosError } from "axios";
import { RootState } from "../Store";
import { ThunkAction } from "redux-thunk";

interface PARAMS {
  email: string;
  password: string;
}

export const signUp =
  (params: PARAMS) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/create",
        params
      );
      dispatch({ type: "SIGNUPSUCCES", payload: response });
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch({ type: "USERFAILURE", error: e.response?.data });
      }
    }
  };

export const signIn =
  (params: PARAMS) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        params
      );
      return dispatch({ type: "SIGNINSUCCESS", payload: response });
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch({ type: "USERFAILURE", error: e.response?.data });
      }
    }
  };

const signInRequest = (payload: any) => {};

const userFailure = (error: any) => {
  return {
    type: "USERFAILURE",
    error,
  };
};
