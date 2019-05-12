/**
 * @prettier
 */
import React, { Component } from 'react';
import './styles/typeface-roboto.scss';
import './styles/main.scss';
import 'normalize.css';
export declare const AppContext: React.Context<null>;
export declare const AppContextProvider: React.ProviderExoticComponent<React.ProviderProps<null>>;
export declare const AppContextConsumer: React.ExoticComponent<React.ConsumerProps<null>>;
export default class App extends Component<any, any> {
    state: {
        error: {};
        logoUrl: any;
        user: {};
        scope: string;
        showLoginModal: boolean;
        isUserLoggedIn: boolean;
        packages: never[];
        isLoading: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(_: any, prevState: any): void;
    render(): JSX.Element;
    isUserAlreadyLoggedIn: () => void;
    loadOnHandler: () => Promise<void>;
    setLoading: (isLoading: any) => void;
    /**
     * Toggles the login modal
     * Required by: <LoginModal /> <Header />
     */
    handleToggleLoginModal: () => void;
    /**
     * handles login
     * Required by: <Header />
     */
    handleDoLogin: (usernameValue: any, passwordValue: any) => Promise<void>;
    setLoggedUser: (username: any, token: any) => void;
    /**
     * Logouts user
     * Required by: <Header />
     */
    handleLogout: () => void;
    renderLoginModal: () => JSX.Element;
    renderContent: () => JSX.Element;
    renderHeader: () => JSX.Element;
}
