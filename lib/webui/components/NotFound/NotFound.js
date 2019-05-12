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
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const withWidth_1 = __importStar(require("@material-ui/core/withWidth"));
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const package_svg_1 = __importDefault(require("./img/package.svg"));
const styles_1 = require("./styles");
exports.NOT_FOUND_TEXT = "Sorry, we couldn't find it...";
// eslint-disable-next-line react/prop-types
const NotFound = ({ history, width }) => {
    const handleGoTo = (to) => () => {
        history.push(to);
    };
    const handleGoBack = () => () => {
        history.goBack();
    };
    const renderList = () => (react_1.default.createElement(styles_1.List, null,
        react_1.default.createElement(ListItem_1.default, { button: true, divider: true, onClick: handleGoTo('/') }, "Home"),
        react_1.default.createElement(ListItem_1.default, { button: true, divider: true, onClick: handleGoBack() }, "Back")));
    const renderSubTitle = () => (react_1.default.createElement(Typography_1.default, { variant: "subtitle1" },
        react_1.default.createElement("div", null, "The page you're looking for doesn't exist."),
        react_1.default.createElement("div", null, 'Perhaps these links will help find what you are looking for:')));
    return (react_1.default.createElement(styles_1.Wrapper, null,
        react_1.default.createElement(styles_1.Inner, null,
            react_1.default.createElement(styles_1.EmptyPackage, { alt: "404 - Page not found", src: package_svg_1.default }),
            react_1.default.createElement(styles_1.Heading, { className: "not-found-text", variant: withWidth_1.isWidthUp('sm', width) ? 'h2' : 'h4' }, exports.NOT_FOUND_TEXT),
            renderSubTitle(),
            react_1.default.createElement(styles_1.Card, null, renderList()))));
};
exports.default = react_router_dom_1.withRouter(withWidth_1.default()(NotFound));
