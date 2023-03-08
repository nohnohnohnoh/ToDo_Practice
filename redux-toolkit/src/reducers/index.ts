import { combineReducers } from "redux";
import { postSlice } from "./PostReducer";
import { userSlice } from "./UserReducer";

export const combineReducer = combineReducers({
  users: userSlice.reducer,
  posts: postSlice.reducer,
});
