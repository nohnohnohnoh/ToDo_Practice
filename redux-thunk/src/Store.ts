import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import ReduxTunk from "redux-thunk";
import { combineReducer } from "./reducers/index";

const initialState = {
  users: {
    isLoggingIn: false,
    data: null,
  },
  posts: [{ title: "", content: "" }],
};
const enhancer = compose(applyMiddleware(ReduxTunk));

const reducer = "reducer";

const store = createStore(combineReducer, initialState, enhancer);
