"use strict";
/**
 * @prettier
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importStar(require("react-emotion"));
const media_1 = __importDefault(require("../../utils/styles/media"));
const Icon_1 = __importDefault(require("../Icon/Icon"));
const colors_1 = __importDefault(require("../../utils/styles/colors"));
exports.Wrapper = react_emotion_1.default('div') `
  && {
    background: ${colors_1.default.snow};
    border-top: 1px solid ${colors_1.default.greyGainsboro};
    color: ${colors_1.default.nobel01};
    font-size: 14px;
    padding: 20px;
  }
`;
exports.Inner = react_emotion_1.default('div') `
  && {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    ${() => {
    //@ts-ignore
    return media_1.default.medium(react_emotion_1.css `
        min-width: 400px;
        max-width: 800px;
        margin: auto;
        justify-content: space-between;
      `);
}};
    ${() => {
    //@ts-ignore
    return media_1.default.large(react_emotion_1.css `
        max-width: 1240px;
      `);
}};
  }
`;
exports.Left = react_emotion_1.default('div') `
  && {
    align-items: center;
    display: none;
    ${() => {
    //@ts-ignore
    return media_1.default.medium(react_emotion_1.css `
        display: flex;
      `);
}};
  }
`;
exports.Right = react_emotion_1.default(exports.Left) `
  && {
    display: flex;
  }
`;
exports.ToolTip = react_emotion_1.default('span') `
  && {
    position: relative;
    height: 18px;
  }
`;
exports.Earth = react_emotion_1.default(Icon_1.default) `
  && {
    padding: 0 10px;
  }
`;
exports.Flags = react_emotion_1.default('span') `
  && {
    position: absolute;
    background: ${colors_1.default.greyAthens};
    padding: 1px 4px;
    border-radius: 3px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    visibility: hidden;
    top: -2px;
    :before {
      content: '';
      position: absolute;
      top: 29%;
      left: -4px;
      margin-left: -5px;
      border: 5px solid;
      border-color: ${colors_1.default.greyAthens} transparent transparent transparent;
      transform: rotate(90deg);
    }
    ${exports.ToolTip}:hover & {
      visibility: visible;
    }
  }
`;
exports.Love = react_emotion_1.default('span') `
  && {
    color: ${colors_1.default.love};
    padding: 0 5px;
  }
`;
exports.Flag = react_emotion_1.default(Icon_1.default) `
  && {
    padding: 0 5px;
  }
`;
exports.Logo = exports.Flag;
