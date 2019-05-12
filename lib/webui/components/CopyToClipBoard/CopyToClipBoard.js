"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
const FileCopy_1 = __importDefault(require("@material-ui/icons/FileCopy"));
const react_1 = __importDefault(require("react"));
const cli_utils_1 = require("../../utils/cli-utils");
const constants_1 = require("../../utils/constants");
const styles_1 = require("./styles");
const CopyToClipBoard = ({ text, children }) => {
    const renderToolTipFileCopy = () => (react_1.default.createElement(Tooltip_1.default, { disableFocusListener: true, title: constants_1.TEXT.CLIPBOARD_COPY },
        react_1.default.createElement(styles_1.CopyIcon, { onClick: cli_utils_1.copyToClipBoardUtility(text) },
            react_1.default.createElement(FileCopy_1.default, null))));
    const renderText = (children) => {
        if (children) {
            return react_1.default.createElement(styles_1.ClipBoardCopyText, null, children);
        }
        return react_1.default.createElement(styles_1.ClipBoardCopyText, null, text);
    };
    return (react_1.default.createElement(styles_1.ClipBoardCopy, null,
        renderText(children),
        renderToolTipFileCopy()));
};
exports.default = CopyToClipBoard;
