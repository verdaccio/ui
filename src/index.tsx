import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./app";

const rootNode = document.getElementById("root");

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootNode
  );
};

renderApp();

if (module.hot) {
  module.hot.accept("./app", () => {
    renderApp();
  });
}
