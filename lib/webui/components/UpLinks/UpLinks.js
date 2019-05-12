"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @prettier
 */
const react_1 = __importDefault(require("react"));
const List_1 = __importDefault(require("@material-ui/core/List"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const Version_1 = require("../../pages/version/Version");
const NoItems_1 = __importDefault(require("../NoItems"));
const package_1 = require("../../utils/package");
const styles_1 = require("./styles");
class UpLinks extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.renderUpLinksList = uplinks => (react_1.default.createElement(List_1.default, null, Object.keys(uplinks)
            .reverse()
            .map(name => (react_1.default.createElement(ListItem_1.default, { key: name },
            react_1.default.createElement(styles_1.ListItemText, null, name),
            react_1.default.createElement(styles_1.Spacer, null),
            react_1.default.createElement(styles_1.ListItemText, null, `${package_1.formatDateDistance(uplinks[name].fetched)} ago`))))));
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, ({ packageMeta }) => {
            return this.renderContent(packageMeta._uplinks, packageMeta.latest);
        }));
    }
    renderContent(uplinks, { name }) {
        if (Object.keys(uplinks).length > 0) {
            return (uplinks && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(styles_1.Heading, { variant: "subheading" }, "Uplinks"),
                this.renderUpLinksList(uplinks))));
        }
        return react_1.default.createElement(NoItems_1.default, { text: `${name} has no uplinks.` });
    }
}
exports.default = UpLinks;
