"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const Spinner = ({ size = 50, centered = false }) => (
// @ts-ignore
react_1.default.createElement(styles_1.Wrapper, { centered: centered },
    react_1.default.createElement(styles_1.Circular, { size: size })));
exports.default = Spinner;
