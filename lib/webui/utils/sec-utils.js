"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @prettier
 */
const xss_1 = __importDefault(require("xss"));
function preventXSS(text) {
    const encodedText = xss_1.default(text);
    return encodedText;
}
exports.preventXSS = preventXSS;
