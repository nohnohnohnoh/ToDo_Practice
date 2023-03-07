import { combineReducers } from "redux";
import { postReducer } from "./PostReducer";
import { userReducer } from "./UserReducer";

export const combineReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
});
