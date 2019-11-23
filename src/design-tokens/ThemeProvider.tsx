import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import theme from './theme';

const ThemeProvider: React.FC = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </EmotionThemeProvider>
);

export default ThemeProvider;
