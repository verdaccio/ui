/**
 * @prettier
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import App from './app';
import { theme } from './theme-utils/theme';

const rootNode = document.getElementById('root');

const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
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
