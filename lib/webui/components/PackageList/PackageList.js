"use strict";
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
const prop_types_1 = __importDefault(require("prop-types"));
const Divider_1 = __importDefault(require("@material-ui/core/Divider"));
const Package_1 = __importDefault(require("../Package/Package"));
const Help_1 = __importDefault(require("../Help"));
const package_1 = require("../../utils/package");
// @ts-ignore
const packageList_scss_1 = __importDefault(require("./packageList.scss"));
class PackageList extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.renderPackages = () => {
            return (react_1.default.createElement(react_1.default.Fragment, null, this.renderList()));
        };
        this.renderList = () => {
            const { packages } = this.props;
            return (packages.map((pkg, i) => {
                const { name, version, description, time, keywords, dist, homepage, bugs } = pkg;
                const author = pkg.author;
                // TODO: move format license to API side.
                const license = package_1.formatLicense(pkg.license);
                return (react_1.default.createElement(react_1.Fragment, { key: i },
                    i !== 0 && react_1.default.createElement(Divider_1.default, null),
                    react_1.default.createElement(Package_1.default, Object.assign({}, { name, dist, version, author, description, license, time, keywords, homepage, bugs }))));
            }));
        };
    }
    render() {
        return (react_1.default.createElement("div", { className: "package-list-items" },
            react_1.default.createElement("div", { className: packageList_scss_1.default.pkgContainer }, this.hasPackages() ? this.renderPackages() : react_1.default.createElement(Help_1.default, null))));
    }
    hasPackages() {
        const { packages } = this.props;
        return packages.length > 0;
    }
}
PackageList.propTypes = {
    packages: prop_types_1.default.array,
};
exports.default = PackageList;
