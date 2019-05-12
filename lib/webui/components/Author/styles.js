"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
exports.Heading = react_emotion_1.default(Typography_1.default) `
  && {
    font-weight: 700;
    text-transform: capitalize;
  }
`;
exports.AuthorListItem = react_emotion_1.default(ListItem_1.default) `
  && {
    padding-left: 0;
    padding-right: 0;
  }
`;
