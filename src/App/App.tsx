import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import isNil from 'lodash/isNil';
import { Router } from 'react-router-dom';

import storage from '../utils/storage';
import { isTokenExpire } from '../utils/login';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '../muiComponents/Box';
import StyleBaseline from '../design-tokens/StyleBaseline';
import { Theme } from '../design-tokens/theme';

import AppContextProvider from './AppContextProvider';
import AppRoute, { history } from './AppRoute';

const StyledBox = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  backgroundColor: theme && theme.palette.white,
}));

const StyledBoxContent = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  [`@media screen and (min-width: ${theme && theme.breakPoints.container}px)`]: {
    maxWidth: theme && theme.breakPoints.container,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
const App: React.FC = () => {
  const [user, setUser] = useState();

  /**
   * Logout user
   * Required by: <Header />
   */
  const logout = () => {
    storage.removeItem('username');
    storage.removeItem('token');
    setUser(undefined);
  };

  const checkUserAlreadyLoggedIn = () => {
    // checks for token validity
    const token = storage.getItem('token');
    const username = storage.getItem('username');

    if (isTokenExpire(token) || isNil(username)) {
      logout();
      return;
    }

    setUser({ username });
  };

  useEffect(() => {
    checkUserAlreadyLoggedIn();
  }, []);

  return (
    <>
      <StyleBaseline />
      <StyledBox display="flex" flexDirection="column" height="100%">
        <>
          <Router history={history}>
            <AppContextProvider user={user}>
              <Header />
              <StyledBoxContent flexGrow={1}>
                {/* eslint-disable-next-line react/jsx-max-depth */}
                <AppRoute />
              </StyledBoxContent>
            </AppContextProvider>
          </Router>
          <Footer />
        </>
      </StyledBox>
    </>
  );
};

export default App;
