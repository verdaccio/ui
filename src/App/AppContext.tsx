import { createContext } from 'react';

import { FormError } from '../components/Login/Login';

export interface AppProps {
  error?: FormError;
  logoUrl: string;
  user: {
    username?: string;
  };
  scope: string;
  showLoginModal: boolean;
  isUserLoggedIn: boolean;
  packages: [];
  isLoading: boolean;
}

export const AppContext = createContext<Partial<AppProps>>({});
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;
