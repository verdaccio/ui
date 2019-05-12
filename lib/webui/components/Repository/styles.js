"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
const index_1 = __importDefault(require("@material-ui/core/Grid/index"));
const index_2 = __importDefault(require("@material-ui/core/ListItem/index"));
const index_3 = __importDefault(require("@material-ui/core/Typography/index"));
const GitHub_1 = __importDefault(require("../../icons/GitHub"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
exports.Heading = react_emotion_1.default(index_3.default) `
  && {
    font-weight: 700;
    text-transform: capitalize;
  }
`;
exports.GridRepo = react_emotion_1.default(index_1.default) `
  && {
    align-items: center;
  }
`;
exports.GithubLink = react_emotion_1.default('a') `
  && {
    color: ${colors_1.default.primary};
  }
`;
exports.GithubLogo = react_emotion_1.default(GitHub_1.default) `
  && {
    font-size: 40px;
    color: ${colors_1.default.primary};
    background-color: ${colors_1.default.greySuperLight};
  }
`;
exports.RepositoryListItem = react_emotion_1.default(index_2.default) `
  && {
    padding-left: 0;
    padding-right: 0;
  }
`;
