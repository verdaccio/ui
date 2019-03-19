import React from 'react'
import isNil from 'lodash/isNil';
import 'normalize.css';
import { makeStyles } from '@material-ui/styles';

// @ts-ignore
import storage from './utils/storage';
import { makeLogin, isTokenExpire } from './utils/login';
import API from './utils/api';
import RouterApp from './router';
import Loading from './components/patterns/Loading';
import Header from './components/patterns/Header';
import LoginModal from './components/patterns/Login';

const useStyles = makeStyles(({ isLoading }) => ({
  container: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    backgroundColor: isLoading ? '#f5f6f8' : '#ffffff',
    flex: 1,
    height: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    top: 0,
    left: 0,
  },
}));

export interface AppContextProps {
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

export const AppContext = React.createContext<undefined | AppContextProps>(undefined)

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

  const classes = useStyles({ isLoading });

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
    <div className={classes.container}>
      {isLoading ? (
        <Loading />
      ) : (
        <AppContext.Provider value={{ isUserLoggedIn, packages, logoUrl, user, scope }}>
          <RouterApp onLogout={handleLogout} onToggleLoginModal={handleToggleLoginModal} />
        </AppContext.Provider >
        )}
      {renderLoginModal()}
    </div>
  )
}

export default App
