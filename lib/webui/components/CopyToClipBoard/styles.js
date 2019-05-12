"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const react_emotion_1 = __importDefault(require("react-emotion"));
exports.ClipBoardCopy = react_emotion_1.default('div') `
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
exports.ClipBoardCopyText = react_emotion_1.default('span') `
  && {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    height: 21px;
  }
`;
exports.CopyIcon = react_emotion_1.default(IconButton_1.default) `
  && {
    margin: 0 0 0 10px;
  }
`;
