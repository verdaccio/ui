"use strict";
/**
 * @prettier
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const isNil_1 = __importDefault(require("lodash/isNil"));
const storage_1 = __importDefault(require("./utils/storage"));
const login_1 = require("./utils/login");
const Loading_1 = __importDefault(require("./components/Loading"));
const Login_1 = __importDefault(require("./components/Login"));
const Header_1 = __importDefault(require("./components/Header"));
const Layout_1 = require("./components/Layout");
const router_1 = __importDefault(require("./router"));
const api_1 = __importDefault(require("./utils/api"));
require("./styles/typeface-roboto.scss");
require("./styles/main.scss");
require("normalize.css");
const Footer_1 = __importDefault(require("./components/Footer"));
exports.AppContext = react_1.default.createContext(null);
exports.AppContextProvider = exports.AppContext.Provider;
exports.AppContextConsumer = exports.AppContext.Consumer;
class App extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
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
        this.isUserAlreadyLoggedIn = () => {
            // checks for token validity
            const token = storage_1.default.getItem('token');
            const username = storage_1.default.getItem('username');
            if (login_1.isTokenExpire(token) || isNil_1.default(username)) {
                this.handleLogout();
            }
            else {
                this.setState({
                    user: { username, token },
                    isUserLoggedIn: true,
                });
            }
        };
        this.loadOnHandler = async () => {
            try {
                // @ts-ignore
                this.req = await api_1.default.request('packages', 'GET');
                this.setState({
                    // @ts-ignore
                    packages: this.req,
                    isLoading: false,
                });
            }
            catch (error) {
                // FIXME: add dialog
                console.error({
                    title: 'Warning',
                    message: `Unable to load package list: ${error.message}`,
                });
                this.setLoading(false);
            }
        };
        this.setLoading = isLoading => this.setState({
            isLoading,
        });
        /**
         * Toggles the login modal
         * Required by: <LoginModal /> <Header />
         */
        this.handleToggleLoginModal = () => {
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
        this.handleDoLogin = async (usernameValue, passwordValue) => {
            // @ts-ignore
            const { username, token, error } = await login_1.makeLogin(usernameValue, passwordValue);
            if (username && token) {
                this.setLoggedUser(username, token);
                storage_1.default.setItem('username', username);
                storage_1.default.setItem('token', token);
            }
            if (error) {
                this.setState({
                    user: {},
                    error,
                });
            }
        };
        this.setLoggedUser = (username, token) => {
            this.setState({
                user: {
                    username,
                    token,
                },
                isUserLoggedIn: true,
                showLoginModal: false,
            });
        };
        /**
         * Logouts user
         * Required by: <Header />
         */
        this.handleLogout = () => {
            storage_1.default.removeItem('username');
            storage_1.default.removeItem('token');
            this.setState({
                user: {},
                isUserLoggedIn: false,
            });
        };
        this.renderLoginModal = () => {
            const { error, showLoginModal } = this.state;
            return react_1.default.createElement(Login_1.default, { error: error, onCancel: this.handleToggleLoginModal, onSubmit: this.handleDoLogin, visibility: showLoginModal });
        };
        this.renderContent = () => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Layout_1.Content, null,
                    react_1.default.createElement(router_1.default, { onLogout: this.handleLogout, onToggleLoginModal: this.handleToggleLoginModal }, this.renderHeader())),
                react_1.default.createElement(Footer_1.default, null)));
        };
        this.renderHeader = () => {
            const { logoUrl, 
            // @ts-ignore
            user: { username }, scope, } = this.state;
            return react_1.default.createElement(Header_1.default, { logo: logoUrl, onLogout: this.handleLogout, onToggleLoginModal: this.handleToggleLoginModal, scope: scope, username: username });
        };
    }
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
        const context = { isUserLoggedIn, packages, logoUrl, user, scope };
        return (
        // @ts-ignore
        react_1.default.createElement(Layout_1.Container, { isLoading: isLoading },
            isLoading ? (react_1.default.createElement(Loading_1.default, null)) : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(exports.AppContextProvider, { value: context }, this.renderContent()))),
            this.renderLoginModal()));
    }
}
exports.default = App;
