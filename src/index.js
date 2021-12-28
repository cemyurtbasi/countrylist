import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./Assets/styles/font/stylesheet.css";
import "./Assets/styles/filecss/main.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);