"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
const Avatar_1 = __importDefault(require("@material-ui/core/Avatar"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
exports.TitleListItem = react_emotion_1.default(ListItem_1.default) `
  && {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
`;
exports.TitleListItemText = react_emotion_1.default(ListItemText_1.default) `
  && {
    padding-left: 0;
    padding-right: 0;
    padding-top: 8px;
  }
`;
exports.TitleAvatar = react_emotion_1.default(Avatar_1.default) `
  && {
    color: ${colors_1.default.greySuperLight};
    background-color: ${colors_1.default.primary};
    text-transform: capitalize;
  }
`;
