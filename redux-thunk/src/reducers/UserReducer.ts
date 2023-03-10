import { signIn, signUp } from "./../actions/UserAction";
import { produce } from "immer";
import { AnyAction } from "redux";

interface Type {
  isLoggingIn: boolean;
  data: null;
  error: null;
}

const initialState = {
  isLoggingIn: false,
  data: null,
  error: null,
};

export const userReducer = (
  prevState: Type = initialState,
  action: AnyAction
) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case "SIGNUPSUCCES":
        draft.data = action.payload;
        break;
      case "SIGNINREQUEST":
        // draft.isLoggingIn = true;
        draft.data = null;
        break;
      case "SIGNINSUCCESS":
        // draft.isLoggingIn = false;
        draft.data = action.payload;
        break;
      case "USERFAILURE":
        draft.error = action.error;
        break;
      default:
        break;
    }
  });
};
