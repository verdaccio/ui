import React, { Component, ReactElement } from 'react';
import isNil from 'lodash/isNil';
import 'normalize.css';
import 'typeface-roboto/index.css';

import storage from '../utils/storage';
import { makeLogin, isTokenExpire } from '../utils/login';
import Loading from '../components/Loading';
import LoginModal from '../components/Login';
import Header from '../components/Header';
import { Container, Content } from '../components/Layout';
import API from '../utils/api';
import '../utils/styles/global';
import Footer from '../components/Footer';

import AppRoute from './AppRoute';
import { AppProps, AppContextProvider } from './AppContext';

export default class App extends Component<{}, AppProps> {
  public state: AppProps = {
    logoUrl: window.VERDACCIO_LOGO,
    user: {},
    scope: window.VERDACCIO_SCOPE || '',
    showLoginModal: false,
    isUserLoggedIn: false,
    packages: [],
    isLoading: true,
  };

  public componentDidMount(): void {
    this.isUserAlreadyLoggedIn();
    this.loadOnHandler();
  }

  // eslint-disable-next-line no-unused-vars
  public componentDidUpdate(_: AppProps, prevState: AppProps): void {
    const { isUserLoggedIn } = this.state;
    if (prevState.isUserLoggedIn !== isUserLoggedIn) {
      this.loadOnHandler();
    }
  }

  public render(): React.ReactElement<HTMLDivElement> {
    const { isLoading, isUserLoggedIn, packages, logoUrl, user, scope } = this.state;

    const context = { isUserLoggedIn, packages, logoUrl, user, scope };

    return (
      <Container isLoading={isLoading}>
        {isLoading ? <Loading /> : <AppContextProvider value={context}>{this.renderContent()}</AppContextProvider>}
        {this.renderLoginModal()}
      </Container>
    );
  }

  public isUserAlreadyLoggedIn = () => {
    // checks for token validity
    const token = storage.getItem('token');
    const username: string = storage.getItem('username') as string;
    if (isTokenExpire(token) || isNil(username)) {
      this.handleLogout();
    } else {
      this.setState({
        user: { username },
        isUserLoggedIn: true,
      });
    }
  };

  public loadOnHandler = async () => {
    try {
      const packages = await API.request<any[]>('packages', 'GET');
      // @ts-ignore: FIX THIS TYPE:  Type 'any[]' is not assignable to type '[]'
      this.setState({
        packages,
        isLoading: false,
      });
    } catch (error) {
      // FIXME: add dialog
      console.error({
        title: 'Warning',
        message: `Unable to load package list: ${error.message}`,
      });
      this.setLoading(false);
    }
  };

  public setLoading = (isLoading: boolean) =>
    this.setState({
      isLoading,
    });

  /**
   * Toggles the login modal
   * Required by: <LoginModal /> <Header />
   */
  public handleToggleLoginModal = () => {
    this.setState(prevState => ({
      showLoginModal: !prevState.showLoginModal,
    }));
  };

  /**
   * handles login
   * Required by: <Header />
   */
  public handleDoLogin = async (usernameValue: string, passwordValue: string) => {
    const { username, token, error } = await makeLogin(usernameValue, passwordValue);

    if (username && token) {
      storage.setItem('username', username);
      storage.setItem('token', token);
      this.setLoggedUser(username);
    }

    if (error) {
      this.setState({
        user: {},
        error,
      });
    }
  };

  public setLoggedUser = (username: string) => {
    this.setState({
      user: {
        username,
      },
      isUserLoggedIn: true, // close login modal after successful login
      showLoginModal: false, // set isUserLoggedIn to true
    });
  };

  /**
   * Logouts user
   * Required by: <Header />
   */
  public handleLogout = () => {
    storage.removeItem('username');
    storage.removeItem('token');
    this.setState({
      user: {},
      isUserLoggedIn: false,
    });
  };

  public renderLoginModal = (): ReactElement<HTMLElement> => {
    const { error, showLoginModal } = this.state;
    return (
      <LoginModal
        error={error}
        onCancel={this.handleToggleLoginModal}
        onSubmit={this.handleDoLogin}
        visibility={showLoginModal}
      />
    );
  };

  public renderContent = (): ReactElement<HTMLElement> => {
    return (
      <>
        <Content>
          <AppRoute>{this.renderHeader()}</AppRoute>
        </Content>
        <Footer />
      </>
    );
  };

  public renderHeader = (): ReactElement<HTMLElement> => {
    const {
      logoUrl,
      user: { username },
      scope,
    } = this.state;

    return (
      <Header
        logo={logoUrl}
        onLogout={this.handleLogout}
        onToggleLoginModal={this.handleToggleLoginModal}
        scope={scope}
        username={username}
      />
    );
  };
}
