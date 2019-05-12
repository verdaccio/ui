"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const capitalize_1 = __importDefault(require("lodash/capitalize"));
const styles_1 = require("./styles");
const brazil_svg_1 = __importDefault(require("./img/brazil.svg"));
const china_svg_1 = __importDefault(require("./img/china.svg"));
const india_svg_1 = __importDefault(require("./img/india.svg"));
const nicaragua_svg_1 = __importDefault(require("./img/nicaragua.svg"));
const pakistan_svg_1 = __importDefault(require("./img/pakistan.svg"));
const austria_svg_1 = __importDefault(require("./img/austria.svg"));
const spain_svg_1 = __importDefault(require("./img/spain.svg"));
const earth_svg_1 = __importDefault(require("./img/earth.svg"));
const verdaccio_svg_1 = __importDefault(require("./img/verdaccio.svg"));
const filebinary_svg_1 = __importDefault(require("./img/filebinary.svg"));
const law_svg_1 = __importDefault(require("./img/law.svg"));
const license_svg_1 = __importDefault(require("./img/license.svg"));
const time_svg_1 = __importDefault(require("./img/time.svg"));
const version_svg_1 = __importDefault(require("./img/version.svg"));
exports.Icons = {
    brazil: brazil_svg_1.default,
    spain: spain_svg_1.default,
    china: china_svg_1.default,
    nicaragua: nicaragua_svg_1.default,
    pakistan: pakistan_svg_1.default,
    india: india_svg_1.default,
    austria: austria_svg_1.default,
    earth: earth_svg_1.default,
    verdaccio: verdaccio_svg_1.default,
    filebinary: filebinary_svg_1.default,
    law: law_svg_1.default,
    license: license_svg_1.default,
    time: time_svg_1.default,
    version: version_svg_1.default,
};
const Icon = ({ className, name, size = 'sm', img = false, pointer = false, ...props }) => {
    // @ts-ignore
    const title = capitalize_1.default(name);
    return img ? (react_1.default.createElement(styles_1.ImgWrapper, Object.assign({ className: className, pointer: pointer, size: size, title: title, name: name }, props),
        react_1.default.createElement(styles_1.Img, { alt: title, src: exports.Icons[name] }))) : (
    // @ts-ignore
    react_1.default.createElement(styles_1.Svg, Object.assign({ className: className, pointer: pointer, size: size }, props),
        react_1.default.createElement("title", null, title),
        react_1.default.createElement("use", { xlinkHref: `${exports.Icons[name]}#${name}` })));
};
exports.default = Icon;
