import { produce } from "immer";
import { Action } from "redux";

const initialState = {
  isLoggingIn: false,
  data: null,
};

export const userReducer = (preveState = initialState, action: Action) => {
  return produce(preveState, (draft) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        draft.isLoggingIn = true;
        draft.data = null;
        break;
      case "LOGIN_SUCCESS":
        draft.isLoggingIn = false;
    }
  });
};
