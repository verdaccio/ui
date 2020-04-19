import React, { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import i18next from 'i18next';

import { Language } from '../../i18n/config';

import ThemeContext from './ThemeContext';
import { getTheme, ThemeMode } from './theme';
import useLocalStorage from './useLocalStorage';

const ThemeProvider: React.FC = ({ children }) => {
  const isDarkModeDefault = window?.__VERDACCIO_BASENAME_UI_OPTIONS?.darkMode;
  const currentLanguage: Language = i18next.language || i18next.options?.fallbackLng?.[0];

  const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', !!isDarkModeDefault);
  const [language, setLanguage] = useLocalStorage('language', currentLanguage);

  const themeMode: ThemeMode = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language, setLanguage]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, language, setLanguage }}>
      <EmotionThemeProvider theme={getTheme(themeMode)}>
        <MuiThemeProvider theme={getTheme(themeMode)}>{children}</MuiThemeProvider>
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
