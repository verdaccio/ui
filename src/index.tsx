import './utils/__setPublicPath__';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const rootNode = document.getElementById('root');

const renderApp = (Component: React.ElementType): void => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootNode
  );
};

renderApp(App);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./App', () => {
    renderApp(App);
  });
}
