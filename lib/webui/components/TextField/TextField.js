"use strict";
/**
 * @prettier
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextField_1 = __importDefault(require("@material-ui/core/TextField"));
const react_1 = __importDefault(require("react"));
const TextField = ({ InputProps, classes, ...other }) => (react_1.default.createElement(TextField_1.default, Object.assign({}, other, { InputProps: {
        ...InputProps,
        classes,
    } })));
exports.default = TextField;
