"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const windows_1 = require("../../utils/windows");
const renderTooltip = () => (react_1.default.createElement(styles_1.ToolTip, null,
    react_1.default.createElement(styles_1.Earth, { name: "earth", size: "md" }),
    react_1.default.createElement(styles_1.Flags, null,
        react_1.default.createElement(styles_1.Flag, { name: "spain", size: "md" }),
        react_1.default.createElement(styles_1.Flag, { name: "nicaragua", size: "md" }),
        react_1.default.createElement(styles_1.Flag, { name: "india", size: "md" }),
        react_1.default.createElement(styles_1.Flag, { name: "brazil", size: "md" }),
        react_1.default.createElement(styles_1.Flag, { name: "china", size: "md" }),
        react_1.default.createElement(styles_1.Flag, { name: "austria", size: "md" }))));
const POWERED_LABEL = 'Powered by';
const MADEWITH_LABEL = ' Made with';
const ON_LABEL = 'on';
const HEARTH_EMOJI = '♥';
// @ts-ignore
const renderRight = (version = window.VERDACCIO_VERSION) => {
    return (react_1.default.createElement(styles_1.Right, null,
        POWERED_LABEL,
        react_1.default.createElement(styles_1.Logo, { img: true, name: "verdaccio", onClick: windows_1.goToVerdaccioWebsite, pointer: true, size: "md" }),
        `/ ${version}`));
};
const renderLeft = () => (react_1.default.createElement(styles_1.Left, null,
    MADEWITH_LABEL,
    react_1.default.createElement(styles_1.Love, null, HEARTH_EMOJI),
    ON_LABEL,
    renderTooltip()));
const Footer = () => (react_1.default.createElement(styles_1.Wrapper, null,
    react_1.default.createElement(styles_1.Inner, null,
        renderLeft(),
        renderRight())));
exports.default = Footer;
