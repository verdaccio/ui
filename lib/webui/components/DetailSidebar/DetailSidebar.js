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
const Card_1 = __importDefault(require("@material-ui/core/Card"));
const CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
const List_1 = __importDefault(require("@material-ui/core/List"));
const ActionBar_1 = __importDefault(require("../ActionBar/ActionBar"));
const Author_1 = __importDefault(require("../Author"));
const Developers_1 = __importDefault(require("../Developers"));
const Dist_1 = __importDefault(require("../Dist/Dist"));
const Engines_1 = __importDefault(require("../Engines/Engines"));
const Install_1 = __importDefault(require("../Install"));
const Repository_1 = __importDefault(require("../Repository/Repository"));
const Version_1 = require("../../pages/version/Version");
const styles_1 = require("./styles");
class DetailSidebar extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderSideBar = ({ packageName, packageMeta }) => {
            return (react_1.default.createElement("div", { className: 'sidebar-info' },
                react_1.default.createElement(Card_1.default, null,
                    react_1.default.createElement(CardContent_1.default, null,
                        this.renderTitle(packageName, packageMeta),
                        this.renderActionBar(),
                        this.renderCopyCLI(),
                        this.renderRepository(),
                        this.renderEngine(),
                        this.renderDist(),
                        this.renderAuthor(),
                        this.renderMaintainers(),
                        this.renderContributors()))));
        };
        this.renderTitle = (packageName, packageMeta) => {
            return (react_1.default.createElement(List_1.default, { className: 'detail-info' },
                react_1.default.createElement(styles_1.TitleListItem, { alignItems: 'flex-start' },
                    react_1.default.createElement(styles_1.TitleListItemText, { primary: react_1.default.createElement("b", null, packageName), secondary: packageMeta.latest.description }))));
        };
        this.renderCopyCLI = () => {
            return react_1.default.createElement(Install_1.default, null);
        };
        this.renderMaintainers = () => {
            return react_1.default.createElement(Developers_1.default, { type: 'maintainers' });
        };
        this.renderContributors = () => {
            return react_1.default.createElement(Developers_1.default, { type: 'contributors' });
        };
        this.renderRepository = () => {
            return react_1.default.createElement(Repository_1.default, null);
        };
        this.renderAuthor = () => {
            return react_1.default.createElement(Author_1.default, null);
        };
        this.renderEngine = () => {
            return react_1.default.createElement(Engines_1.default, null);
        };
        this.renderDist = () => {
            return react_1.default.createElement(Dist_1.default, null);
        };
        this.renderActionBar = () => {
            return react_1.default.createElement(ActionBar_1.default, null);
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, (context) => this.renderSideBar(context)));
    }
    ;
}
exports.default = DetailSidebar;
