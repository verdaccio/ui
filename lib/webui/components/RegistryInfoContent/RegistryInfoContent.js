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
const styles_1 = require("./styles");
const CopyToClipBoard_1 = __importDefault(require("../CopyToClipBoard"));
const Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
const Tab_1 = __importDefault(require("@material-ui/core/Tab"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const cli_utils_1 = require("../../utils/cli-utils");
const constants_1 = require("../../utils/constants");
/* eslint react/prop-types:0 */
function TabContainer({ children }) {
    return (react_1.default.createElement(styles_1.CommandContainer, null,
        react_1.default.createElement(Typography_1.default, { component: "div", style: { padding: 0, minHeight: 170 } }, children)));
}
class RegistryInfoContent extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            tabPosition: 0,
        };
        this.handleChange = (event, tabPosition) => {
            event.preventDefault();
            this.setState({ tabPosition });
        };
    }
    render() {
        return react_1.default.createElement("div", null, this.renderTabs());
    }
    renderTabs() {
        const { scope, registryUrl } = this.props;
        const { tabPosition } = this.state;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Tabs_1.default, { indicatorColor: "primary", onChange: this.handleChange, textColor: "primary", value: tabPosition, variant: "fullWidth" },
                react_1.default.createElement(Tab_1.default, { label: constants_1.NODE_MANAGER.npm }),
                react_1.default.createElement(Tab_1.default, { label: constants_1.NODE_MANAGER.pnpm }),
                react_1.default.createElement(Tab_1.default, { label: constants_1.NODE_MANAGER.yarn })),
            tabPosition === 0 && react_1.default.createElement(TabContainer, null, this.renderNpmTab(scope, registryUrl)),
            tabPosition === 1 && react_1.default.createElement(TabContainer, null, this.renderPNpmTab(scope, registryUrl)),
            tabPosition === 2 && react_1.default.createElement(TabContainer, null, this.renderYarnTab(scope, registryUrl))));
    }
    renderNpmTab(scope, registryUrl) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(CopyToClipBoard_1.default, { text: cli_utils_1.getCLISetConfigRegistry(`${constants_1.NODE_MANAGER.npm} set`, scope, registryUrl) }),
            react_1.default.createElement(CopyToClipBoard_1.default, { text: cli_utils_1.getCLISetRegistry(`${constants_1.NODE_MANAGER.npm} adduser`, registryUrl) }),
            react_1.default.createElement(CopyToClipBoard_1.default, { text: cli_utils_1.getCLIChangePassword(constants_1.NODE_MANAGER.npm, registryUrl) })));
    }
    renderPNpmTab(scope, registryUrl) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(CopyToClipBoard_1.default, { text: cli_utils_1.getCLISetConfigRegistry(`${constants_1.NODE_MANAGER.pnpm} set`, scope, registryUrl) }),
            react_1.default.createElement(CopyToClipBoard_1.default, { text: cli_utils_1.getCLISetRegistry(`${constants_1.NODE_MANAGER.pnpm} adduser`, registryUrl) }),
            react_1.default.createElement(CopyToClipBoard_1.default, { text: cli_utils_1.getCLIChangePassword(constants_1.NODE_MANAGER.pnpm, registryUrl) })));
    }
    renderYarnTab(scope, registryUrl) {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(CopyToClipBoard_1.default, { text: cli_utils_1.getCLISetConfigRegistry(`${constants_1.NODE_MANAGER.yarn} config set`, scope, registryUrl) })));
    }
}
exports.default = RegistryInfoContent;
