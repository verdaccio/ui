"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
exports.Heading = react_emotion_1.default(Typography_1.default) `
 && {
  font-weight: 700;
 }
`;
exports.Spacer = react_emotion_1.default('div') `
    flex: 1 1 auto;
    border-bottom: 1px dotted rgba(0, 0, 0, .2);
    white-space: nowrap;
    height: 0.5em;
`;
exports.ListItemText = react_emotion_1.default(ListItemText_1.default) `
    && {
      flex: none;
      color: black;
      opacity: .6;
    }
`;
