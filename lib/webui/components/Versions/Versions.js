"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Version_1 = require("../../pages/version/Version");
const package_1 = require("../../utils/package");
const styles_1 = require("./styles");
const List_1 = __importDefault(require("@material-ui/core/List"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const react_1 = __importDefault(require("react"));
const constants_1 = require("../../../lib/constants");
const NOT_AVAILABLE = 'Not available';
class Versions extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.renderPackageList = (packages, isVersion = false, timeMap = {}) => {
            return (react_1.default.createElement(List_1.default, null, Object.keys(packages)
                .reverse()
                .map(version => (react_1.default.createElement(ListItem_1.default, { className: "version-item", key: version },
                react_1.default.createElement(styles_1.ListItemText, null, version),
                react_1.default.createElement(styles_1.Spacer, null),
                isVersion && react_1.default.createElement(styles_1.ListItemText, null, timeMap[version] ? `${package_1.formatDateDistance(timeMap[version])} ago` : NOT_AVAILABLE),
                isVersion === false && react_1.default.createElement(styles_1.ListItemText, null, packages[version]))))));
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, ({ packageMeta }) => {
            return this.renderContent(packageMeta);
        }));
    }
    renderContent(packageMeta) {
        const { versions = {}, time: timeMap = {}, [constants_1.DIST_TAGS]: distTags = {} } = packageMeta;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            distTags && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(styles_1.Heading, { variant: "subheading" }, "Current Tags"),
                this.renderPackageList(distTags, false, timeMap))),
            versions && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(styles_1.Heading, { variant: "subheading" }, "Version History"),
                this.renderPackageList(versions, true, timeMap)))));
    }
}
exports.default = Versions;
