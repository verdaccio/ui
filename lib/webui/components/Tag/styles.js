"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_emotion_1 = __importDefault(require("react-emotion"));
exports.Wrapper = react_emotion_1.default('span') `
  && {
    vertical-align: middle;
    line-height: 22px;
    border-radius: 2px;
    color: #485a3e;
    background-color: #f3f4f2;
    padding: 0.22rem 0.4rem;
    margin: 8px 8px 0 0;
  }
`;
