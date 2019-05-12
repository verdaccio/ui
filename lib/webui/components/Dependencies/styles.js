"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
const Card_1 = __importDefault(require("@material-ui/core/Card"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const Chip_1 = __importDefault(require("@material-ui/core/Chip"));
exports.CardWrap = react_emotion_1.default(Card_1.default) `
  && {
    margin: 0 0 16px;
  }
`;
exports.Heading = react_emotion_1.default(Typography_1.default) `
  && {
    font-weight: 700;
    text-transform: capitalize;
  }
`;
exports.Tags = react_emotion_1.default('div') `
  && {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin: 0 -5px;
  }
`;
exports.Tag = react_emotion_1.default(Chip_1.default) `
  && {
    margin: 5px;
  }
`;
