# TypeScript Redux-toolkit.

## Typescript 환경에서 실제 api를 redux-thunk 미들웨어를 이용해 상태관리 연습.

### index.ts

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Router from "./Router";
import store from "./Store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
// redux react-redux redux-toolkit 연결
```

### store.ts

```javascript
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
```

### Action Reducer

```javascript
// action
import axios, { isAxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface PARAMS {
  email: string;
  password: string;
}

export const signIn = createAsyncThunk(
  "SIGNIN",
  async (params: PARAMS, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/login",
        params
      );
      return response.data;
    } catch (e) {
      if (isAxiosError(e)) {
        return rejectWithValue(e.response?.data);
      }
    }
  }
);

export const signUp = createAsyncThunk(
  "SIGNUP",
  async (params: PARAMS, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/create",
        params
      );
      return response.data;
    } catch (e) {
      if (isAxiosError(e)) {
        return rejectWithValue(e.response?.data);
      }
    }
  }
);

// reducer
import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../actions/UserAction";
import { PayloadAction } from "@reduxjs/toolkit";

type UserSlce = {
  isLogging: boolean,
  data: any,
  error: any,
};

const initialState: UserSlce = {
  isLogging: false,
  data: null,
  error: null,
};

type Error = {
  error: any,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    logOut(state) {
      state.data = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signIn.pending, (state) => {
        state.isLogging = true;
        state.data = null;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<UserSlce>) => {
        state.isLogging = false;
        state.data = action.payload;
      })
      .addCase(signIn.rejected, (state, action: Error) => {
        state.error = action.error;
      })
      .addCase(signUp.pending, (state) => {
        state.isLogging = true;
        state.data = null;
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<UserSlce>) => {
        state.isLogging = false;
        state.data = action.payload;
      })
      .addCase(signUp.rejected, (state, action: Error) => {
        state.error = action.error;
      }),
});
```

## 개선점 및 느낀점

- redux-thunk에 비해서 설치해야 하는 라이브러리도 적고 action을 생성 안해도 된다는 점에서 코드량이 많이 줄었다는 걸 느낌.
- API에 대한 정확한 data 타입 지정 미흡.
- error 처리에 대한 정확한 타입 지정 미흡.
- rejectWithValue에 대한 ts에러.
