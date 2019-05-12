"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const NoItems = ({ className, text }) => (react_1.default.createElement(Typography_1.default, { className: className, gutterBottom: true, variant: "subtitle1" }, text));
exports.default = NoItems;
