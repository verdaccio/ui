"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const List_1 = __importDefault(require("@material-ui/core/List"));
const ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
const react_1 = __importStar(require("react"));
// @ts-ignore
const Version_1 = require("../../pages/version/Version");
const CopyToClipBoard_1 = __importDefault(require("../CopyToClipBoard"));
// logos of package managers
const npm_svg_1 = __importDefault(require("./img/npm.svg"));
const pnpm_svg_1 = __importDefault(require("./img/pnpm.svg"));
const yarn_svg_1 = __importDefault(require("./img/yarn.svg"));
const styles_1 = require("./styles");
class Install extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderCopyCLI = ({ packageName }) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(List_1.default, { subheader: react_1.default.createElement(styles_1.Heading, { variant: 'subheading' }, 'Installation') }, this.renderListItems(packageName))));
        };
        this.renderListItems = (packageName) => {
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(styles_1.InstallItem, null,
                    react_1.default.createElement(styles_1.PackageMangerAvatar, { alt: 'npm logo', src: npm_svg_1.default }),
                    react_1.default.createElement(ListItemText_1.default, { primary: react_1.default.createElement(CopyToClipBoard_1.default, { text: `npm install ${packageName}` }), secondary: 'Install using NPM' })),
                react_1.default.createElement(styles_1.InstallItem, null,
                    react_1.default.createElement(styles_1.PackageMangerAvatar, { alt: 'yarn logo', src: yarn_svg_1.default }),
                    react_1.default.createElement(ListItemText_1.default, { primary: react_1.default.createElement(CopyToClipBoard_1.default, { text: `yarn add ${packageName}` }), secondary: 'Install using Yarn' })),
                react_1.default.createElement(styles_1.InstallItem, null,
                    react_1.default.createElement(styles_1.PackageMangerAvatar, { alt: 'pnpm logo', src: pnpm_svg_1.default }),
                    react_1.default.createElement(ListItemText_1.default, { primary: react_1.default.createElement(CopyToClipBoard_1.default, { text: `pnpm install ${packageName}` }), secondary: 'Install using PNPM' }))));
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, (context) => {
            return this.renderCopyCLI(context);
        }));
    }
}
exports.default = Install;
