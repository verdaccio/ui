"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Link = ({ children, to = '#', blank = false, ...props }) => (react_1.default.createElement("a", Object.assign({ href: to, target: blank ? '_blank' : '_self' }, props), children));
exports.default = Link;
