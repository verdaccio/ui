import { createContext } from 'react';

import { FormError } from '../components/Login/Login';

export interface AppProps {
  error?: FormError;
  user?: User;
  scope: string;
  packages: any[];
}

export interface User {
  username: string;
}

export interface AppContextProps extends AppProps {
  setUser: (user?: User) => void;
  setError: (error?: FormError) => void;
}

const AppContext = createContext<undefined | AppContextProps>(undefined);

export default AppContext;
