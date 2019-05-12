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
const CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
const react_emotion_1 = __importStar(require("react-emotion"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
exports.Wrapper = react_emotion_1.default('div') `
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    ${props => 
// @ts-ignore
props.centered &&
    react_emotion_1.css `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      `};
  }
`;
exports.Circular = react_emotion_1.default(CircularProgress_1.default) `
  && {
    color: ${colors_1.default.primary};
  }
`;
