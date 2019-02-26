/**
 * @prettier
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './app';
import theme from './design-utils/theme';

const rootNode = document.getElementById('root');

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </AppContainer>,
    rootNode
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./app', () => {
    renderApp();
  });
}
