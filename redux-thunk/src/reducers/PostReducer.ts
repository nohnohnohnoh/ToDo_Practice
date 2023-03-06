import { produce } from "immer";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const postReducer = (prevState = initialState, action: any) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      default:
        break;
    }
  });
};
