"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isString_1 = __importDefault(require("lodash/isString"));
const isNumber_1 = __importDefault(require("lodash/isNumber"));
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const js_base64_1 = require("js-base64");
const api_1 = __importDefault(require("./api"));
const constants_1 = require("../../lib/constants");
function isTokenExpire(token) {
    if (!isString_1.default(token)) {
        return true;
    }
    let [, payload] = token.split('.');
    if (!payload) {
        return true;
    }
    try {
        payload = JSON.parse(js_base64_1.Base64.decode(payload));
    }
    catch (error) {
        // eslint-disable-next-line
        console.error('Invalid token:', error, token);
        return true;
    }
    if (!payload.exp || !isNumber_1.default(payload.exp)) {
        return true;
    }
    // Report as expire before (real expire time - 30s)
    const jsTimestamp = (payload.exp * 1000) - 30000;
    const expired = Date.now() >= jsTimestamp;
    return expired;
}
exports.isTokenExpire = isTokenExpire;
async function makeLogin(username, password) {
    // checks isEmpty
    if (isEmpty_1.default(username) || isEmpty_1.default(password)) {
        const error = {
            title: 'Unable to login',
            type: 'error',
            description: 'Username or password can\'t be empty!',
        };
        return { error };
    }
    try {
        const response = await api_1.default.request('login', 'POST', {
            body: JSON.stringify({ username, password }),
            headers: {
                Accept: constants_1.HEADERS.JSON,
                'Content-Type': constants_1.HEADERS.JSON,
            },
        });
        const result = {
            username: response.username,
            token: response.token,
        };
        return result;
    }
    catch (e) {
        const error = {
            title: 'Unable to login',
            type: 'error',
            description: e.error,
        };
        return { error };
    }
}
exports.makeLogin = makeLogin;
