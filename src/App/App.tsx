import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import isNil from 'lodash/isNil';
import { Router } from 'react-router-dom';

import storage from '../utils/storage';
import { isTokenExpire } from '../utils/login';
import API from '../utils/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Box from '../muiComponents/Box';
import Loading from '../components/Loading';
import StyleBaseline from '../design-tokens/StyleBaseline';
import { breakpoints } from '../utils/styles/media';

import AppContextProvider from './AppContextProvider';
import AppRoute, { history } from './AppRoute';

const StyledBoxContent = styled(Box)({
  padding: 15,
  [`@media screen and (min-width: ${breakpoints.container}px)`]: {
    maxWidth: breakpoints.container,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
const App: React.FC = () => {
  const [user, setUser] = useState();
  const [packages, setPackages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Logouts user
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

  const loadOnHandler = async () => {
    try {
      const packages = await API.request('packages', 'GET');
      // FIXME add correct type for package
      setPackages(packages as never[]);
    } catch (error) {
      // FIXME: add dialog
      console.error({
        title: 'Warning',
        message: `Unable to load package list: ${error.message}`,
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    checkUserAlreadyLoggedIn();
    loadOnHandler();
  }, []);

  return (
    <>
      <StyleBaseline />
      <Box display="flex" flexDirection="column" height="100%">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Router history={history}>
              <AppContextProvider packages={packages} user={user}>
                <Header />
                <StyledBoxContent flexGrow={1}>
                  <AppRoute />
                </StyledBoxContent>
              </AppContextProvider>
            </Router>
            <Footer />
          </>
        )}
      </Box>
    </>
  );
};

export default App;
