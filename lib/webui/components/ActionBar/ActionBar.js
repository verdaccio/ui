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
const BugReport_1 = __importDefault(require("@material-ui/icons/BugReport"));
const CloudDownload_1 = __importDefault(require("@material-ui/icons/CloudDownload"));
const Home_1 = __importDefault(require("@material-ui/icons/Home"));
const index_1 = __importDefault(require("@material-ui/core/List/index"));
const index_2 = __importDefault(require("@material-ui/core/Tooltip/index"));
const Version_1 = require("../../pages/version/Version");
const styles_1 = require("./styles");
const ACTIONS = {
    homepage: {
        icon: react_1.default.createElement(Home_1.default, null),
        title: 'Visit homepage',
    },
    issue: {
        icon: react_1.default.createElement(BugReport_1.default, null),
        title: 'Open an issue',
    },
    tarball: {
        icon: react_1.default.createElement(CloudDownload_1.default, null),
        title: 'Download tarball',
    },
};
class ActionBar extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderActionBarListItems = packageMeta => {
            // @ts-ignore
            const { latest: { bugs: { url: issue } = {}, homepage, dist: { tarball } = {} } = {} } = packageMeta;
            const actionsMap = {
                homepage,
                issue,
                tarball,
            };
            const renderList = Object.keys(actionsMap).reduce((component, value, key) => {
                const link = actionsMap[value];
                if (link) {
                    const fab = react_1.default.createElement(styles_1.Fab, { size: 'small' }, ACTIONS[value]['icon']);
                    component.push(
                    // @ts-ignore
                    react_1.default.createElement(index_2.default, { key: key, title: ACTIONS[value]['title'] },
                        react_1.default.createElement(react_1.default.Fragment, null, this.renderIconsWithLink(link, fab))));
                }
                return component;
            }, []);
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(styles_1.ActionListItem, { alignItems: 'flex-start' }, renderList)));
        };
        this.renderActionBar = ({ packageMeta = {} }) => {
            return react_1.default.createElement(index_1.default, null, this.renderActionBarListItems(packageMeta));
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, context => {
            return this.renderActionBar(context);
        }));
    }
    renderIconsWithLink(link, component) {
        if (!link) {
            return null;
        }
        return (react_1.default.createElement("a", { href: link, target: '_blank' }, component));
    }
}
exports.default = ActionBar;
