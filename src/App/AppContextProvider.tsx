import React, { useState, useEffect } from 'react';

import AppContext, { AppProps, User } from './AppContext';

interface Props {
  packages: any[];
  user?: User;
}

/* eslint-disable react-hooks/exhaustive-deps */
const AppContextProvider: React.FC<Props> = ({ children, packages, user }) => {
  const [state, setState] = useState<AppProps>({
    scope: window.VERDACCIO_SCOPE || '',
    packages,
    user,
  });

  useEffect(() => {
    setState({
      ...state,
      user,
    });
  }, [user]);

  useEffect(() => {
    setState({
      ...state,
      packages,
    });
  }, [packages]);

  const setUser = (user?: User) => {
    setState({
      ...state,
      user,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setUser,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
