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
const List_1 = __importDefault(require("@material-ui/core/List"));
const Version_1 = require("../../pages/version/Version");
const styles_1 = require("./styles");
const file_size_1 = __importDefault(require("../../utils/file-size"));
class Dist extends react_1.Component {
    constructor() {
        super(...arguments);
        this.renderDist = ({ packageMeta }) => {
            const { dist = {}, license } = packageMeta.latest;
            return (react_1.default.createElement(List_1.default, { subheader: react_1.default.createElement(styles_1.Heading, { variant: "subheading" }, 'Latest Distribution') },
                react_1.default.createElement(styles_1.DistListItem, null, this.renderChips(dist, license))));
        };
    }
    render() {
        return (react_1.default.createElement(Version_1.DetailContextConsumer, null, (context) => {
            return this.renderDist(context);
        }));
    }
    renderChips(dist, license) {
        const distDict = {
            'file-count': dist.fileCount,
            size: dist.unpackedSize && file_size_1.default(dist.unpackedSize),
            license,
        };
        const chipsList = Object.keys(distDict).reduce((componentList, title, key) => {
            // @ts-ignore
            const value = distDict[title];
            if (value) {
                const label = (react_1.default.createElement("span", null,
                    react_1.default.createElement("b", null, title.split('-').join(' ')),
                    ":",
                    value));
                // @ts-ignore is not assignable to parameter of type 'never'
                componentList.push(react_1.default.createElement(styles_1.DistChips, { key: key, label: label }));
            }
            return componentList;
        }, []);
        return chipsList;
    }
}
exports.default = Dist;
