"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
exports.Wrapper = react_emotion_1.default('div') `
  && {
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    position: absolute;
  }
`;
exports.Badge = react_emotion_1.default('div') `
  && {
    margin: 0 0 30px 0;
    border-radius: 25px;
    box-shadow: 0 10px 20px 0 rgba(69, 58, 100, 0.2);
    background: #f7f8f6;
  }
`;
