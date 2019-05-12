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
const index_2 = __importDefault(require("@material-ui/core/Grid/index"));
const index_3 = __importDefault(require("@material-ui/core/List/index"));
const index_4 = __importDefault(require("@material-ui/core/ListItemText/index"));
const Version_1 = require("../../pages/version/Version");
const styles_1 = require("./styles");
// @ts-ignore
const node_png_1 = __importDefault(require("./img/node.png"));
const npm_svg_1 = __importDefault(require("../Install/img/npm.svg"));
const ICONS = {
    'node-JS': react_1.default.createElement(index_1.default, { src: node_png_1.default }),
    'NPM-version': react_1.default.createElement(index_1.default, { src: npm_svg_1.default }),
};
class Engine extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderEngine = ({ packageMeta }) => {
            const { engines } = packageMeta.latest;
            if (!engines) {
                return null;
            }
            const engineDict = {
                'node-JS': engines.node,
                'NPM-version': engines.npm,
            };
            const items = Object.keys(engineDict).reduce((markup, text, key) => {
                const heading = engineDict[text];
                if (heading) {
                    markup.push(
                    // @ts-ignore
                    react_1.default.createElement(index_2.default, { item: true, key: key, xs: 6 }, this.renderListItems(heading, text)));
                }
                return markup;
            }, []);
            if (items.length < 1) {
                return null;
            }
            return react_1.default.createElement(index_2.default, { container: true }, items);
        };
        this.renderListItems = (heading, text) => {
            return (react_1.default.createElement(index_3.default, { subheader: react_1.default.createElement(styles_1.Heading, { variant: 'subheading' }, text.split('-').join(' ')) },
                react_1.default.createElement(styles_1.EngineListItem, null,
                    ICONS[text],
                    react_1.default.createElement(index_4.default, { primary: heading }))));
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, context => {
            return this.renderEngine(context);
        }));
    }
}
exports.default = Engine;
