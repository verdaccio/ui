"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
const Fab_1 = __importDefault(require("@material-ui/core/Fab"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
exports.ActionListItem = react_emotion_1.default(ListItem_1.default) `
  && {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;
exports.Fab = react_emotion_1.default(Fab_1.default) `
  && {
    background-color: ${colors_1.default.primary};
    color: ${colors_1.default.white};
    margin-right: 10px;
  }
`;
