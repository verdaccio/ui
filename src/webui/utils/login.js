"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var isString_1 = require("lodash/isString");
var isNumber_1 = require("lodash/isNumber");
var isEmpty_1 = require("lodash/isEmpty");
var js_base64_1 = require("js-base64");
var api_1 = require("./api");
var constants_1 = require("../../lib/constants");
function isTokenExpire(token) {
    if (!isString_1["default"](token)) {
        return true;
    }
    var _a = token.split('.'), payload = _a[1];
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
    if (!payload.exp || !isNumber_1["default"](payload.exp)) {
        return true;
    }
    // Report as expire before (real expire time - 30s)
    var jsTimestamp = (payload.exp * 1000) - 30000;
    var expired = Date.now() >= jsTimestamp;
    return expired;
}
exports.isTokenExpire = isTokenExpire;
function makeLogin(username, password) {
    return __awaiter(this, void 0, void 0, function () {
        var error, response, result, e_1, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // checks isEmpty
                    if (isEmpty_1["default"](username) || isEmpty_1["default"](password)) {
                        error = {
                            title: 'Unable to login',
                            type: 'error',
                            description: 'Username or password can\'t be empty!'
                        };
                        return [2 /*return*/, { error: error }];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, api_1["default"].request('login', 'POST', {
                            body: JSON.stringify({ username: username, password: password }),
                            headers: {
                                Accept: constants_1.HEADERS.JSON,
                                'Content-Type': constants_1.HEADERS.JSON
                            }
                        })];
                case 2:
                    response = _a.sent();
                    result = {
                        username: response.username,
                        token: response.token
                    };
                    return [2 /*return*/, result];
                case 3:
                    e_1 = _a.sent();
                    error = {
                        title: 'Unable to login',
                        type: 'error',
                        description: e_1.error
                    };
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.makeLogin = makeLogin;
