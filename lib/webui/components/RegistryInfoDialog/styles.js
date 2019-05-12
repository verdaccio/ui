"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
const DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
const DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
const sizes_1 = require("../../utils/styles/sizes");
exports.Title = react_emotion_1.default(DialogTitle_1.default) `
  && {
    background-color: ${colors_1.default.primary};
    color: ${colors_1.default.white};
    font-size: ${sizes_1.fontSize.lg};
  }
`;
exports.Content = react_emotion_1.default(DialogContent_1.default) `
  && {
    padding: 0 24px;
  }
`;
