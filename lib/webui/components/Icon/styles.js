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
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importStar(require("react-emotion"));
const getSize = (size) => {
    switch (size) {
        case 'md':
            return `
        width: 18px;
        height: 18px;
      `;
        default:
            return `
        width: 14px;
        height: 16px;
      `;
    }
};
const commonStyle = ({ size = 'sm', pointer, modifiers }) => react_emotion_1.css `
  && {
    display: inline-block;
    cursor: ${pointer ? 'pointer' : 'default'};
    ${getSize(size)};
    ${modifiers && modifiers};
  }
`;
exports.Svg = react_emotion_1.default('svg') `
  && {
    ${commonStyle};
  }
`;
exports.ImgWrapper = react_emotion_1.default('span') `
  && {
    ${commonStyle};
  }
`;
exports.Img = react_emotion_1.default('img') `
  && {
    width: 100%;
    height: auto;
  }
`;
