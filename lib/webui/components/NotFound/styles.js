"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = __importDefault(require("@material-ui/core/Card"));
const List_1 = __importDefault(require("@material-ui/core/List"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const react_emotion_1 = __importDefault(require("react-emotion"));
exports.Wrapper = react_emotion_1.default('div') `
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 16px;
`;
exports.Inner = react_emotion_1.default('div') `
  max-width: 650px;
  display: flex;
  flex-direction: column;
`;
exports.EmptyPackage = react_emotion_1.default('img') `
  width: 150px;
  margin: 0 auto;
`;
exports.Heading = react_emotion_1.default(Typography_1.default) `
  && {
    color: #4b5e40;
  }
`;
exports.List = react_emotion_1.default(List_1.default) `
  && {
    padding: 0;
    color: #4b5e40;
  }
`;
exports.Card = react_emotion_1.default(Card_1.default) `
  margin-top: 24px;
`;
