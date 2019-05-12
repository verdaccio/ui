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
const Avatar_1 = __importDefault(require("@material-ui/core/Avatar"));
const Add_1 = __importDefault(require("@material-ui/icons/Add"));
const Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
const Version_1 = require("../../pages/version/Version");
const styles_1 = require("./styles");
class Developers extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            visibleDevs: 6,
        };
        this.handleLoadMore = () => {
            this.setState(prev => ({ visibleDevs: prev.visibleDevs + 6 }));
        };
        this.renderDevelopers = (developers, packageMeta) => {
            const { type } = this.props;
            const { visibleDevs } = this.state;
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(styles_1.Heading, { variant: 'subheading' }, type),
                react_1.default.createElement(styles_1.Content, null,
                    developers.slice(0, visibleDevs).map(developer => (react_1.default.createElement(styles_1.Details, { key: developer.email }, this.renderDeveloperDetails(developer, packageMeta)))),
                    visibleDevs < developers.length && (react_1.default.createElement(styles_1.Fab, { onClick: this.handleLoadMore, size: "small" },
                        react_1.default.createElement(Add_1.default, null))))));
        };
        this.renderDeveloperDetails = ({ name, avatar, email }, packageMeta) => {
            const { name: packageName, version } = packageMeta.latest;
            const avatarComponent = react_1.default.createElement(Avatar_1.default, { "aria-label": name, src: avatar });
            return react_1.default.createElement(Tooltip_1.default, { title: name }, this.renderLinkForMail(email, avatarComponent, packageName, version));
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, ({ packageMeta }) => {
            const { type } = this.props;
            const developerType = packageMeta.latest[type];
            if (!developerType || developerType.length === 0)
                return null;
            return this.renderDevelopers(developerType, packageMeta);
        }));
    }
    renderLinkForMail(email, avatarComponent, packageName, version) {
        if (!email) {
            return avatarComponent;
        }
        return (react_1.default.createElement("a", { href: `mailto:${email}?subject=${packageName}@${version}`, target: '_top' }, avatarComponent));
    }
}
exports.default = Developers;
