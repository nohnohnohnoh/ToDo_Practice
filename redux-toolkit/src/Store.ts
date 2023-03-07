import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducer } from "./reducers/index";
import { createLogger } from "redux-logger";

const logger = createLogger();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: combineReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
