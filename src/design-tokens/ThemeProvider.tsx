import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import ThemeContext from './ThemeContext';
import { getTheme, ThemeMode } from './theme';
import useLocalStorage from './useLocalStorage';

const ThemeProvider: React.FC = ({ children }) => {
  const isDarkModeDefault = window?.__VERDACCIO_BASENAME_UI_OPTIONS?.darkMode;
  const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', !!isDarkModeDefault);

  const themeMode: ThemeMode = isDarkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <EmotionThemeProvider theme={getTheme(themeMode)}>
        <MuiThemeProvider theme={getTheme(themeMode)}>{children}</MuiThemeProvider>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
