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
const index_1 = __importDefault(require("@material-ui/core/Avatar/index"));
const index_2 = __importDefault(require("@material-ui/core/List/index"));
const index_3 = __importDefault(require("@material-ui/core/ListItemText/index"));
const Version_1 = require("../../pages/version/Version");
const styles_1 = require("./styles");
class Authors extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderAuthor = ({ packageMeta }) => {
            const { author, name: packageName, version } = packageMeta.latest;
            if (!author) {
                return null;
            }
            const avatarComponent = react_1.default.createElement(index_1.default, { alt: author.name, src: author.avatar });
            return (react_1.default.createElement(index_2.default, { subheader: react_1.default.createElement(styles_1.Heading, { variant: 'subheading' }, 'Author') },
                react_1.default.createElement(styles_1.AuthorListItem, null,
                    this.renderLinkForMail(author.email, avatarComponent, packageName, version),
                    react_1.default.createElement(index_3.default, { primary: author.name }))));
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, (context) => {
            return this.renderAuthor(context);
        }));
    }
    renderLinkForMail(email, avatarComponent, packageName, version) {
        if (!email) {
            return avatarComponent;
        }
        return (react_1.default.createElement("a", { href: `mailto:${email}?subject=${packageName}@${version}`, target: '_top' }, avatarComponent));
    }
}
exports.default = Authors;
