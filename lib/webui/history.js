"use strict";
/**
 * @prettier
 */
Object.defineProperty(exports, "__esModule", { value: true });
const history_1 = require("history");
const url_1 = require("./utils/url");
const history = history_1.createBrowserHistory({
    basename: url_1.getBaseNamePath(),
});
exports.default = history;
