import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./app/AuthProvider";
import LoadingBar from "react-redux-loading-bar";
import { Provider } from "react-redux";
import "./scss/app.scss";
import 'antd/dist/antd.css';
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
