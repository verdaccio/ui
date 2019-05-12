"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = __importDefault(require("@material-ui/core/Card"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const react_emotion_1 = __importDefault(require("react-emotion"));
exports.CardStyled = react_emotion_1.default(Card_1.default) `
  && {
    width: 600px;
    margin: auto;
  }
`;
exports.HelpTitle = react_emotion_1.default(Typography_1.default) `
  && {
    margin-bottom: 20px;
  }
`;
