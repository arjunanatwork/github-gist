import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { Provider } from "react-redux";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import App from "./App";
import store from "./redux/store";

import "./index.css";

WebFont.load({
  google: {
    families: ["IBM Plex Sans:400,500,700&display=swap", "sans-serif"],
  },
});

TimeAgo.addDefaultLocale(en)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
