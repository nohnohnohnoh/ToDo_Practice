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
