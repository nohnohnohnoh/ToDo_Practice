# TypeScript Redux-Thunk

## Typescript 환경에서 실제 api를 redux-thunk 미들웨어를 이용해 상태관리 연습.

### index.ts

```javascript
import { Provider } from "react-redux";
import { store } from "./Store";

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
// redux react-redux redux-thunk 연결
```

### store.ts

```javascript
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
// createStore legacy_createStore as createStore로 import
// ts에서 미들웨어를 읽기위해 Middleware 타입지정 redux-thunk 읽기 위해 ThunkMiddleware 타입지정
// useDisapatch useSelector를 쓰기위해 type 지정
```

### Action Reducer

```javascript
// action
import { AnyAction, Action, Dispatch } from "redux";
import axios, { isAxiosError } from "axios";

interface PARAMS {
  email: string;
  password: string;
}

export const signUp =
  (params: PARAMS) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      // const response = await axios.post
      dispatch({ type: "SIGNUPSUCCES", payload: response });
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch({ type: "USERFAILURE", error: e.response?.data });
      }
    }
  };

export const signIn =
  (params: PARAMS) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      // const response = await axios.post
      dispatch({ type: "SIGNINSUCCESS", payload: response });
    } catch (e) {
      if (isAxiosError(e)) {
        dispatch({ type: "USERFAILURE", error: e.response?.data });
      }
    }
  };
// reducer
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
        draft.isLoggingIn = true;
        draft.data = null;
        break;
      case "SIGNINSUCCESS":
        draft.isLoggingIn = false;
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
```

### useDispatch useSelcetor

```javascript
const users = useSelector((state: RootState) => state.users);
const dispatch: AppDispatch = useDispatch();
/// useDispatch useSelcetor 타입지정
```

## 개선점

- 아직 data에 대한 정확한 타입지정이 미흡.
- AnyAction으로 action에 타입지정이 아닌 action에 대한 type을 만들고 각 action에 대한 타입 지정.
- 새로고침하면 상태관리 state가 리셋되는 현상 redux-persist로 개선.
