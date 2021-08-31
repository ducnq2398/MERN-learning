import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./app/AuthProvider";
import LoadingBar from "react-redux-loading-bar";
import { Provider } from "react-redux";
import "./scss/app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./redux/store";

import PublicRouters from "./app/router";
ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <LoadingBar
        style={{
          backgroundColor: "#1E88E5",
          height: "6px",
          zIndex: 100000,
        }}
      />
      <PublicRouters />
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
