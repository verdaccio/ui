import React from 'react'
import isNil from 'lodash/isNil';
import 'normalize.css';

// @ts-ignore
import storage from './utils/storage';
import { makeLogin, isTokenExpire } from './utils/login';
import API from './utils/api';
import RouterApp from './router';
import Loading from './components/Loading';
import Header from './components/Header';
import { Container, Content } from './components/Layout';
import LoginModal from './components/Login';
import Footer from './components/Footer';

// @ts-ignore
import './styles/main.scss'

// @ts-ignore
import packagesJson from './packages.json'

interface AppContextProps {
  isUserLoggedIn: boolean
  packages: Array<any>
  logoUrl: string
  user: {
    username?: string
    token?: string
  } 
  scope: any
}

interface LoginProps {
  username: string
  token: string
  error?: {
    title: string; 
    type: string; 
    description: any;
  }
}

export const AppContext = React.createContext<AppContextProps | null>(null);

const App: React.FC = () => {
  const [error, setError] = React.useState({})
  // @ts-ignore
  const [logoUrl, setLogoUrl] = React.useState(window.VERDACCIO_LOGO)
  const [user, setUser] = React.useState({ username: '', token: '' })
  // @ts-ignore
  const [scope, setScope] = React.useState(window.VERDACCIO_SCOPE ? `${window.VERDACCIO_SCOPE}:` : '')
  const [showLoginModal, setShowLoginModal] = React.useState(false)
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false)
  const [packages, setPackages] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  /**
   * handles login
   * Required by: <Header />
   */
  const handleDoLogin = async (usernameValue: string, passwordValue: string) => {
    // @ts-ignore
    const { username, token, error }: LoginProps = await makeLogin(usernameValue, passwordValue);

    if (username && token) {
      setLoggedUser(username, token);
      // @ts-ignore
      storage.setItem('username', username);
       // @ts-ignore
      storage.setItem('token', token);
    }

    if (error) {
     setUser({ username: '', token: '' })
     setError(error)
    }
  };

  const setLoggedUser = (username: string, token: string) => {
    setUser({
      username,
      token
    })
    
    // close login modal after successful login
    setIsUserLoggedIn(true) 

    // close login modal after successful login
    setShowLoginModal(false) 
  };

  /**
   * Logouts user
   * Required by: <Header />
   */
  const handleLogout = () => {
    // @ts-ignore
    storage.removeItem('username');
    // @ts-ignore
    storage.removeItem('token');
    setUser({ username: '', token: '' })
    setIsUserLoggedIn(false)
  };

   /**
   * Toggles the login modal
   * Required by: <LoginModal /> <Header />
   */
  const handleToggleLoginModal = () => {
    setShowLoginModal(!showLoginModal)
    setError({})
  };


  const isUserAlreadyLoggedIn = () => {
    // checks for token validity
    // @ts-ignore
    const token = storage.getItem('token');
    // @ts-ignore
    const username = storage.getItem('username');
    if (isTokenExpire(token) || isNil(username)) {
      handleLogout();
    } else {
      setUser({ username, token })
      setIsUserLoggedIn(true)
    }
  };

  const loadOnHandler = async () => {
    try {
      const packages: any = await API.request('packages', 'GET');
      setPackages(packages)
      setIsLoading(false);
    } catch (error) {
      console.error({
        title: 'Warning',
        message: `Unable to load package list: ${error.message}`,
      });
      setIsLoading(false);
    }
  };

   React.useEffect(() => {
    isUserAlreadyLoggedIn()
    loadOnHandler()
  }, []);

  const renderHeader = () => (
    <Header
      logo={logoUrl}
      onLogout={handleLogout}
      onToggleLoginModal={handleToggleLoginModal}
      scope={scope}
      username={user.username}
    />
  )

  const renderContent = () => (
    <>
      <Content>
        <RouterApp onLogout={handleLogout} onToggleLoginModal={handleToggleLoginModal}>
            {renderHeader()}
        </RouterApp>
      </Content>
      <Footer />
    </>
  )

  const renderLoginModal = () => (
    <LoginModal
      error={error}
      onCancel={handleToggleLoginModal}
      // onChange={handleSetUsernameAndPassword}
      onSubmit={handleDoLogin}
      visibility={showLoginModal}
    />
  )

  return (
    <Container isLoading={isLoading}>
      {isLoading ? (
        <Loading />
      ) : (
        <AppContext.Provider value={{ isUserLoggedIn, packages, logoUrl, user, scope }}>{renderContent()}</AppContext.Provider >
        )}
      {renderLoginModal()}
    </Container>
  )
}

export default App
