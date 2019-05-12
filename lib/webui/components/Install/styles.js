"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Avatar_1 = __importDefault(require("@material-ui/core/Avatar"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const react_emotion_1 = __importDefault(require("react-emotion"));
exports.Heading = react_emotion_1.default(Typography_1.default) `
  && {
    font-weight: 700;
    text-transform: capitalize;
  }
`;
exports.InstallItem = react_emotion_1.default(ListItem_1.default) `
  && {
    padding: 0;
  }
`;
exports.PackageMangerAvatar = react_emotion_1.default(Avatar_1.default) `
  && {
    border-radius: 0px;
  }
`;
