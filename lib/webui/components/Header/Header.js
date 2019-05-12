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
const react_router_dom_1 = require("react-router-dom");
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
const Menu_1 = __importDefault(require("@material-ui/core/Menu"));
const Info_1 = __importDefault(require("@material-ui/icons/Info"));
const Help_1 = __importDefault(require("@material-ui/icons/Help"));
const Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
const AccountCircle_1 = __importDefault(require("@material-ui/icons/AccountCircle"));
const Search_1 = __importDefault(require("@material-ui/icons/Search"));
const url_1 = require("../../utils/url");
const Link_1 = __importDefault(require("../Link"));
const Logo_1 = __importDefault(require("../Logo"));
const RegistryInfoDialog_1 = __importDefault(require("../RegistryInfoDialog/RegistryInfoDialog"));
const Label_1 = __importDefault(require("../Label/Label"));
const Search_2 = __importDefault(require("../Search/Search"));
const RegistryInfoContent_1 = __importDefault(require("../RegistryInfoContent/RegistryInfoContent"));
const styles_1 = require("./styles");
class Header extends react_1.Component {
    constructor(props) {
        super(props);
        /**
         * opens popover menu for logged in user.
         */
        this.handleLoggedInMenu = (event) => {
            this.setState({
                anchorEl: event.currentTarget,
            });
        };
        /**
         * closes popover menu for logged in user
         */
        this.handleLoggedInMenuClose = () => {
            this.setState({
                anchorEl: null,
            });
        };
        /**
         * opens registry information dialog.
         */
        this.handleOpenRegistryInfoDialog = () => {
            this.setState({
                openInfoDialog: true,
            });
        };
        /**
         * closes registry information dialog.
         */
        this.handleCloseRegistryInfoDialog = () => {
            this.setState({
                openInfoDialog: false,
            });
        };
        /**
         * close/open popover menu for logged in users.
         */
        this.handleToggleLogin = () => {
            const { onToggleLoginModal } = this.props;
            this.setState({
                anchorEl: null,
            }, onToggleLoginModal);
        };
        this.handleToggleMNav = () => {
            const { showMobileNavBar } = this.state;
            this.setState({
                showMobileNavBar: !showMobileNavBar,
            });
        };
        this.handleDismissMNav = () => {
            this.setState({
                showMobileNavBar: false,
            });
        };
        this.renderLeftSide = () => {
            const { withoutSearch = false } = this.props;
            return (react_1.default.createElement(styles_1.LeftSide, null,
                react_1.default.createElement(react_router_dom_1.Link, { style: { marginRight: '1em' }, to: '/' }, this.renderLogo()),
                !withoutSearch && (react_1.default.createElement(styles_1.SearchWrapper, null,
                    react_1.default.createElement(Search_2.default, null)))));
        };
        this.renderLogo = () => {
            const { logo } = this.props;
            if (logo) {
                return react_1.default.createElement("img", { alt: "logo", height: "40px", src: logo });
            }
            else {
                return react_1.default.createElement(Logo_1.default, null);
            }
        };
        this.renderToolTipIcon = (title, type) => {
            let content;
            switch (type) {
                case 'help':
                    content = (
                    // @ts-ignore
                    react_1.default.createElement(IconButton_1.default, { blank: true, color: 'inherit', component: Link_1.default, to: 'https://verdaccio.org/docs/en/installation' },
                        react_1.default.createElement(Help_1.default, null)));
                    break;
                case 'info':
                    content = (react_1.default.createElement(IconButton_1.default, { color: "inherit", id: "header--button-registryInfo", onClick: this.handleOpenRegistryInfoDialog },
                        react_1.default.createElement(Info_1.default, null)));
                    break;
                case 'search':
                    content = (react_1.default.createElement(styles_1.IconSearchButton, { color: "inherit", onClick: this.handleToggleMNav },
                        react_1.default.createElement(Search_1.default, null)));
                    break;
            }
            return (react_1.default.createElement(Tooltip_1.default, { disableFocusListener: true, title: title }, content));
        };
        this.renderRightSide = () => {
            const { username = '', withoutSearch = false } = this.props;
            return (react_1.default.createElement(styles_1.RightSide, null,
                !withoutSearch && this.renderToolTipIcon('Search packages', 'search'),
                this.renderToolTipIcon('Documentation', 'help'),
                this.renderToolTipIcon('Registry Information', 'info'),
                username ? (this.renderMenu()) : (react_1.default.createElement(Button_1.default, { color: "inherit", id: "header--button-login", onClick: this.handleToggleLogin }, "Login"))));
        };
        this.renderGreetings = () => {
            const { username = '' } = this.props;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(styles_1.Greetings, null, "Hi,"),
                react_1.default.createElement(Label_1.default, { capitalize: true, text: username, weight: "bold" })));
        };
        /**
         * render popover menu
         */
        this.renderMenu = () => {
            const { onLogout } = this.props;
            const { anchorEl } = this.state;
            const open = Boolean(anchorEl);
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(IconButton_1.default, { color: "inherit", id: "header--button-account", onClick: this.handleLoggedInMenu },
                    react_1.default.createElement(AccountCircle_1.default, null)),
                react_1.default.createElement(Menu_1.default, { anchorEl: anchorEl, anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }, id: "sidebar-menu", onClose: this.handleLoggedInMenuClose, open: open, transformOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    } },
                    react_1.default.createElement(MenuItem_1.default, { disabled: true }, this.renderGreetings()),
                    react_1.default.createElement(MenuItem_1.default, { id: "header--button-logout", onClick: onLogout }, "Logout"))));
        };
        this.renderInfoDialog = () => {
            const { scope } = this.props;
            const { openInfoDialog, registryUrl } = this.state;
            return (react_1.default.createElement(RegistryInfoDialog_1.default, { onClose: this.handleCloseRegistryInfoDialog, open: openInfoDialog },
                react_1.default.createElement(RegistryInfoContent_1.default, { registryUrl: registryUrl, scope: scope })));
        };
        this.state = {
            openInfoDialog: false,
            registryUrl: url_1.getRegistryURL(),
            showMobileNavBar: false,
        };
    }
    render() {
        const { showMobileNavBar } = this.state;
        const { withoutSearch = false } = this.props;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(styles_1.NavBar, { position: "static" },
                react_1.default.createElement(styles_1.InnerNavBar, null,
                    this.renderLeftSide(),
                    this.renderRightSide()),
                this.renderInfoDialog()),
            showMobileNavBar &&
                !withoutSearch && (react_1.default.createElement(styles_1.MobileNavBar, null,
                react_1.default.createElement(styles_1.InnerMobileNavBar, null,
                    react_1.default.createElement(Search_2.default, null)),
                react_1.default.createElement(Button_1.default, { color: "inherit", onClick: this.handleDismissMNav }, "Cancel")))));
    }
}
exports.default = Header;
