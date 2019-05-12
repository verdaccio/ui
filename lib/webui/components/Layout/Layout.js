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
exports.Content = react_emotion_1.default('div') `
  && {
    background-color: #ffffff;
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: column;
  }
`;
exports.Container = react_emotion_1.default('div') `
  && {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    ${props => 
//@ts-ignore
props.isLoading &&
    react_emotion_1.css `
        ${exports.Content} {
          background-color: #f5f6f8;
        }
      `}
`;
