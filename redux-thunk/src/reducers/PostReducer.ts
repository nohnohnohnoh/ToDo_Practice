import { produce } from "immer";
import { AnyAction } from "redux";

const initialState = {
  isLoading: false,
  data: <any>[],
  error: null,
};

export const GETSUCCESS = "GETPOSTSUCCESS";
export const GETBYIDSUCCESS = "GETBYIDSUCCESS";
export const ADDPOSTSUCCESS = "ADDPOSTSUCCESS";
export const PUTPOSTSUCCESS = "PUTPOSTSUCCESS";
export const DELETEPOSTSUCCESS = "DELETEPOSTSUCCESS";
export const POSTFAILURE = "POSTFAILURE";

export const postReducer = (prevState = initialState, action: AnyAction) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case GETSUCCESS:
        draft.data = action.payload.data;
        break;
      case GETBYIDSUCCESS:
        draft.data = action.payload.data;
        break;
      case ADDPOSTSUCCESS:
        draft.data.push(action.payload.data);
        break;
      case PUTPOSTSUCCESS:
        draft.data.push(...action.payload.data, action.payload.data);
        break;
      case DELETEPOSTSUCCESS:
        draft.data = action.payload.data;
        break;
      case POSTFAILURE:
        draft.error = action.error;
        break;
      default:
        break;
    }
  });
};
