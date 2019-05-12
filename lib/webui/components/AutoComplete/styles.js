"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_emotion_1 = __importStar(require("react-emotion"));
const Paper_1 = __importDefault(require("@material-ui/core/Paper"));
const TextField_1 = __importDefault(require("../TextField"));
exports.Wrapper = react_emotion_1.default('div') `
  && {
    width: 100%;
    height: 32px;
    position: relative;
    z-index: 1;
  }
`;
exports.InputField = ({ color, ...others }) => (react_1.default.createElement(TextField_1.default, Object.assign({}, others, { classes: {
        input: react_emotion_1.css `
        && {
          ${color &&
            react_emotion_1.css `
              color: ${color};
            `};
        }
      `,
        root: react_emotion_1.css `
        && {
          &:before {
            content: '';
            border: none;
          }
          &:after {
            ${color &&
            react_emotion_1.css `
                border-color: ${color};
              `};
          }
          &:hover:before {
            content: none;
          }
        }
      `,
    } })));
exports.SuggestionContainer = react_emotion_1.default(Paper_1.default) `
  && {
    max-height: 500px;
    overflow-y: scroll;
  }
`;
