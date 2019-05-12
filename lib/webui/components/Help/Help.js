"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
const CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const react_1 = __importDefault(require("react"));
const url_1 = require("../../utils/url");
const CopyToClipBoard_1 = __importDefault(require("../CopyToClipBoard"));
const styles_1 = require("./styles");
function renderHeadingClipboardSegments(title, text) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Typography_1.default, { variant: 'body2' }, title),
        react_1.default.createElement(CopyToClipBoard_1.default, { text: text })));
}
const Help = () => {
    const registryUrl = url_1.getRegistryURL();
    return (react_1.default.createElement(styles_1.CardStyled, { id: "help-card" },
        react_1.default.createElement(CardContent_1.default, null,
            react_1.default.createElement(Typography_1.default, { component: "h2", gutterBottom: true, id: "help-card__title", variant: "headline" }, "No Package Published Yet."),
            react_1.default.createElement(styles_1.HelpTitle, { color: "textSecondary", gutterBottom: true }, "To publish your first package just:"),
            renderHeadingClipboardSegments('1. Login', `npm adduser --registry ${registryUrl}`),
            renderHeadingClipboardSegments('2. Publish', `npm publish --registry ${registryUrl}`),
            react_1.default.createElement(Typography_1.default, { variant: "body2" }, "3. Refresh this page.")),
        react_1.default.createElement(CardActions_1.default, null,
            react_1.default.createElement(Button_1.default, { color: "primary", href: "https://verdaccio.org/docs/en/installation", size: "small", target: "_blank" }, "Learn More"))));
};
exports.default = Help;
