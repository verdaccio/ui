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
const Version_1 = require("../../pages/version/Version");
const Readme_1 = __importDefault(require("../Readme"));
const Versions_1 = __importDefault(require("../Versions"));
const sec_utils_1 = require("../../utils/sec-utils");
const Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
const Tab_1 = __importDefault(require("@material-ui/core/Tab"));
const styles_1 = require("./styles");
const Dependencies_1 = __importDefault(require("../Dependencies"));
const UpLinks_1 = __importDefault(require("../UpLinks"));
class DetailContainer extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            tabPosition: 0,
        };
        this.handleChange = (event, tabPosition) => {
            event.preventDefault();
            this.setState({ tabPosition });
        };
        this.renderTabs = ({ readMe }) => {
            const { tabPosition } = this.state;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(styles_1.Content, null,
                    react_1.default.createElement(Tabs_1.default, { indicatorColor: 'primary', onChange: this.handleChange, textColor: 'primary', value: tabPosition, variant: 'fullWidth' },
                        react_1.default.createElement(Tab_1.default, { id: 'readme-tab', label: 'Readme' }),
                        react_1.default.createElement(Tab_1.default, { id: 'dependencies-tab', label: 'Dependencies' }),
                        react_1.default.createElement(Tab_1.default, { id: 'versions-tab', label: 'Versions' }),
                        react_1.default.createElement(Tab_1.default, { id: 'uplinks-tab', label: 'Uplinks' })),
                    react_1.default.createElement("br", null),
                    tabPosition === 0 && this.renderReadme(readMe),
                    tabPosition === 1 && react_1.default.createElement(Dependencies_1.default, null),
                    tabPosition === 2 && react_1.default.createElement(Versions_1.default, null),
                    tabPosition === 3 && react_1.default.createElement(UpLinks_1.default, null))));
        };
        this.renderReadme = (readMe) => {
            const encodedReadme = sec_utils_1.preventXSS(readMe);
            return react_1.default.createElement(Readme_1.default, { description: encodedReadme });
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, context => {
            return this.renderTabs(context);
        }));
    }
}
exports.default = DetailContainer;
