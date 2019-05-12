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
/* eslint  react/jsx-max-depth:0 */
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const app_1 = require("./app");
const asyncComponent_1 = require("./utils/asyncComponent");
const history_1 = __importDefault(require("./history"));
const Header_1 = __importDefault(require("./components/Header"));
const NotFound = asyncComponent_1.asyncComponent(() => Promise.resolve().then(() => __importStar(require('./components/NotFound'))));
const VersionPackage = asyncComponent_1.asyncComponent(() => Promise.resolve().then(() => __importStar(require('./pages/version/Version'))));
const HomePage = asyncComponent_1.asyncComponent(() => Promise.resolve().then(() => __importStar(require('./pages/home'))));
class RouterApp extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderHeader = () => {
            const { onLogout, onToggleLoginModal } = this.props;
            return (react_1.default.createElement(app_1.AppContextConsumer, null, function renderConsumerVersionPage({ logoUrl, scope, user }) {
                return react_1.default.createElement(Header_1.default, { logo: logoUrl, onLogout: onLogout, onToggleLoginModal: onToggleLoginModal, scope: scope, username: user.username });
            }));
        };
        this.renderHomePage = () => {
            return (react_1.default.createElement(app_1.AppContextConsumer, null, function renderConsumerVersionPage({ isUserLoggedIn, packages }) {
                // @ts-ignore
                return react_1.default.createElement(HomePage, { isUserLoggedIn: isUserLoggedIn, packages: packages });
            }));
        };
        this.renderVersionPage = (routerProps) => {
            return (react_1.default.createElement(app_1.AppContextConsumer, null, function renderConsumerVersionPage({ isUserLoggedIn }) {
                return react_1.default.createElement(VersionPackage, Object.assign({}, routerProps, { isUserLoggedIn: isUserLoggedIn }));
            }));
        };
    }
    render() {
        return (react_1.default.createElement(react_router_dom_1.Router, { history: history_1.default },
            react_1.default.createElement(react_1.default.Fragment, null,
                this.renderHeader(),
                react_1.default.createElement(react_router_dom_1.Switch, null,
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/', render: this.renderHomePage }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/-/web/detail/@:scope/:package', render: this.renderVersionPage }),
                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: '/-/web/detail/:package', render: this.renderVersionPage }),
                    react_1.default.createElement(react_router_dom_1.Route, { component: NotFound })))));
    }
}
exports.default = RouterApp;
