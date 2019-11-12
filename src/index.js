import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import configureStore from "./store/store";

const store = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
