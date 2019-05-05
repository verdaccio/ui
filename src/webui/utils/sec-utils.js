"use strict";
exports.__esModule = true;
/**
 * @prettier
 */
var xss_1 = require("xss");
function preventXSS(text) {
    var encodedText = xss_1["default"](text);
    return encodedText;
}
exports.preventXSS = preventXSS;
