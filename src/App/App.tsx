import React, { Component } from 'react';
import isNil from 'lodash/isNil';

import storage from '../utils/storage';
import { makeLogin, isTokenExpire } from '../utils/login';

import Loading from '../components/Loading';
import LoginModal from '../components/Login';
import Header from '../components/Header';
import { Container, Content } from '../components/Layout';
import RouterApp from '../router';
import API from '../utils/api';
import '../styles/typeface-roboto.scss';
import '../styles/main.scss';
import 'normalize.css';
import Footer from '../components/Footer';

export const AppContext = React.createContext<null>(null);
export const AppContextProvider = AppContext.Provider;
export const AppContextConsumer = AppContext.Consumer;

export default class App extends Component<any, any> {
  state = {
    error: {},
    // @ts-ignore
    logoUrl: window.VERDACCIO_LOGO,
    user: {},
    // @ts-ignore
    scope: window.VERDACCIO_SCOPE ? `${window.VERDACCIO_SCOPE}:` : '',
    showLoginModal: false,
    isUserLoggedIn: false,
    packages: [],
    isLoading: true,
  };

  componentDidMount() {
    this.isUserAlreadyLoggedIn();
    this.loadOnHandler();
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(_, prevState) {
    const { isUserLoggedIn } = this.state;
    if (prevState.isUserLoggedIn !== isUserLoggedIn) {
      this.loadOnHandler();
    }
  }

  render() {
    const { isLoading, isUserLoggedIn, packages, logoUrl, user, scope } = this.state;

    const context: any = { isUserLoggedIn, packages, logoUrl, user, scope };

    return (
      // @ts-ignore
      <Container isLoading={isLoading}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <AppContextProvider value={context}>{this.renderContent()}</AppContextProvider>
          </>
        )}
        {this.renderLoginModal()}
      </Container>
    );
  }

  isUserAlreadyLoggedIn = () => {
    // checks for token validity
    const token = storage.getItem('token');
    const username = storage.getItem('username');
    if (isTokenExpire(token) || isNil(username)) {
      this.handleLogout();
    } else {
      this.setState({
        user: { username, token },
        isUserLoggedIn: true,
      });
    }
  };

  loadOnHandler = async () => {
    try {
      // @ts-ignore
      this.req = await API.request('packages', 'GET');
      this.setState({
        // @ts-ignore
        packages: this.req,
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

  setLoading = isLoading =>
    this.setState({
      isLoading,
    });

  /**
   * Toggles the login modal
   * Required by: <LoginModal /> <Header />
   */
  handleToggleLoginModal = () => {
    this.setState(prevState => ({
      // @ts-ignore
      showLoginModal: !prevState.showLoginModal,
      error: {},
    }));
  };

  /**
   * handles login
   * Required by: <Header />
   */
  handleDoLogin = async (usernameValue, passwordValue) => {
    // @ts-ignore
    const { username, token, error } = await makeLogin(usernameValue, passwordValue);

    if (username && token) {
      storage.setItem('username', username);
      storage.setItem('token', token);
      this.setLoggedUser(username, token);
    }

    if (error) {
      this.setState({
        user: {},
        error,
      });
    }
  };

  setLoggedUser = (username, token) => {
    this.setState({
      user: {
        username,
        token,
      },
      isUserLoggedIn: true, // close login modal after successful login
      showLoginModal: false, // set isUserLoggedIn to true
    });
  };

  /**
   * Logouts user
   * Required by: <Header />
   */
  handleLogout = () => {
    storage.removeItem('username');
    storage.removeItem('token');
    this.setState({
      user: {},
      isUserLoggedIn: false,
    });
  };

  renderLoginModal = () => {
    const { error, showLoginModal } = this.state;
    return <LoginModal error={error} onCancel={this.handleToggleLoginModal} onSubmit={this.handleDoLogin} visibility={showLoginModal} />;
  };

  renderContent = () => {
    return (
      <>
        <Content>
          <RouterApp onLogout={this.handleLogout} onToggleLoginModal={this.handleToggleLoginModal}>
            {this.renderHeader()}
          </RouterApp>
        </Content>
        <Footer />
      </>
    );
  };

  renderHeader = () => {
    const {
      logoUrl,
      // @ts-ignore
      user: { username },
      scope,
    } = this.state;

    return <Header logo={logoUrl} onLogout={this.handleLogout} onToggleLoginModal={this.handleToggleLoginModal} scope={scope} username={username} />;
  };
}
