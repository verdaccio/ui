"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logo_1 = __importDefault(require("../Logo"));
const Spinner_1 = __importDefault(require("../Spinner"));
const styles_1 = require("./styles");
const Loading = () => (react_1.default.createElement(styles_1.Wrapper, null,
    react_1.default.createElement(styles_1.Badge, null,
        react_1.default.createElement(Logo_1.default, { size: "md" })),
    react_1.default.createElement(Spinner_1.default, null)));
exports.default = Loading;
