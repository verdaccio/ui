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
const Chip_1 = __importDefault(require("@material-ui/core/Chip"));
const ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
exports.Heading = react_emotion_1.default(Typography_1.default) `
  && {
    font-weight: 700;
    text-transform: capitalize;
  }
`;
exports.DistListItem = react_emotion_1.default(ListItem_1.default) `
  && {
    padding-left: 0;
    padding-right: 0;
  }
`;
exports.DistChips = react_emotion_1.default(Chip_1.default) `
  && {
    margin-right: 5px;
    text-transform: capitalize;
  }
`;
exports.DownloadButton = react_emotion_1.default(Fab_1.default) `
  && {
    background-color: ${colors_1.default.primary};
    color: ${colors_1.default.white};
  }
`;
