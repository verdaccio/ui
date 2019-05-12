"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("github-markdown-css");
const Readme = ({ description }) => react_1.default.createElement("div", { className: "markdown-body", dangerouslySetInnerHTML: { __html: description } });
exports.default = Readme;
