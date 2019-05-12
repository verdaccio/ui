import { Component } from 'react';
import PropTypes from 'prop-types';
export default class LoginModal extends Component<any, any> {
    static propTypes: {
        visibility: PropTypes.Requireable<boolean>;
        error: PropTypes.Requireable<object>;
        onCancel: PropTypes.Requireable<(...args: any[]) => any>;
        onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        error: {};
        onCancel: () => void;
        onSubmit: () => void;
        visibility: boolean;
    };
    constructor(props: any);
    /**
     * set login modal's username and password to current state
     * Required to login
     */
    setCredentials: (name: any, e: any) => void;
    setUsername: (event: any) => void;
    setPassword: (event: any) => void;
    validateCredentials: (event: any) => void;
    submitCredentials: () => Promise<void>;
    renderErrorMessage(title: any, description: any): JSX.Element;
    renderMessage(title: any, description: any): JSX.Element;
    renderLoginError({ type, title, description }: {
        type: any;
        title: any;
        description: any;
    }): false | JSX.Element;
    renderNameField: () => JSX.Element;
    renderPasswordField: () => JSX.Element;
    renderActions: () => JSX.Element;
    render(): JSX.Element;
}
