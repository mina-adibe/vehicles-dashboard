import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


import { Provider } from "react-redux";
import { fetchPosts } from "./redux/action";
import store from "./redux/store";

store.dispatch(fetchPosts());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
