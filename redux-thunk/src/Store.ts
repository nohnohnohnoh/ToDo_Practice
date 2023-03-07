import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  Middleware,
} from "redux";
import ReduxTunk, { ThunkMiddleware } from "redux-thunk";
import { combineReducer } from "./reducers/index";
import { createLogger } from "redux-logger";

const initialState = {
  users: {
    isLoggingIn: false,
    data: null,
    error: null,
  },
  posts: {
    isLoading: false,
    data: [],
    datailData: [],
    error: null,
  },
};

const logger: Middleware = createLogger();
const enhancer = compose(applyMiddleware(ReduxTunk as ThunkMiddleware, logger));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = createStore(combineReducer, initialState, enhancer);
