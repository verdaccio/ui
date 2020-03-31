import { createContext } from 'react';

interface Props {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}

const ThemeContext = createContext<undefined | Props>(undefined);

export default ThemeContext;
