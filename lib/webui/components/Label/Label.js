"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_emotion_1 = __importDefault(require("react-emotion"));
const sizes_1 = require("../../utils/styles/sizes");
const Wrapper = react_emotion_1.default('div') `
  font-weight: ${({ weight }) => {
    // @ts-ignore
    return sizes_1.fontWeight[weight];
}};
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
  ${({ modifiers }) => modifiers && modifiers};
`;
const Label = ({ text = '', capitalize = false, weight = 'regular', ...props }) => {
    return (
    // @ts-ignore
    react_1.default.createElement(Wrapper, Object.assign({ capitalize: capitalize, weight: weight }, props), text));
};
exports.default = Label;
