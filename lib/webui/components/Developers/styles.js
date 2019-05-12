"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const Fab_1 = __importDefault(require("@material-ui/core/Fab"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
exports.Details = react_emotion_1.default('span') `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
exports.Content = react_emotion_1.default('div') `
  margin: 10px 0 10px 0;
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 5px;
  }
`;
exports.Heading = react_emotion_1.default(Typography_1.default) `
  && {
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: capitalize;
  }
`;
exports.Fab = react_emotion_1.default(Fab_1.default) `
  && {
    background-color: ${colors_1.default.primary};
    color: ${colors_1.default.white};
  }
`;
