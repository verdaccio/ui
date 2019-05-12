"use strict";
/* eslint react/jsx-max-depth: 0 */
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
const List_1 = __importDefault(require("@material-ui/core/List"));
const ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
const Version_1 = require("../../pages/version/Version");
const CopyToClipBoard_1 = __importDefault(require("../CopyToClipBoard"));
const styles_1 = require("./styles");
// @ts-ignore
const git_png_1 = __importDefault(require("./img/git.png"));
class Repository extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderRepository = ({ packageMeta }) => {
            const { repository: { 
            //@ts-ignore
            url, } = {}, } = packageMeta.latest;
            if (!url) {
                return null;
            }
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(List_1.default, { dense: true, subheader: react_1.default.createElement(styles_1.Heading, { variant: 'subheading' }, "Repository") },
                    react_1.default.createElement(styles_1.RepositoryListItem, null,
                        react_1.default.createElement(Avatar_1.default, { src: git_png_1.default }),
                        react_1.default.createElement(ListItemText_1.default, { primary: this.renderContent(url) })))));
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, (context) => {
            return this.renderRepository(context);
        }));
    }
    ;
    renderRepositoryText(url) {
        return (react_1.default.createElement(styles_1.GithubLink, { href: url, target: '_blank' }, url));
    }
    renderContent(url) {
        return (react_1.default.createElement(CopyToClipBoard_1.default, { text: url }, this.renderRepositoryText(url)));
    }
}
exports.default = Repository;
