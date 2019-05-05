"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var storage_1 = require("./storage");
var API = /** @class */ (function () {
    function API() {
    }
    API.prototype.request = function (url, method, options) {
        if (method === void 0) { method = 'GET'; }
        if (options === void 0) { options = {}; }
        // @ts-ignore
        if (!window.VERDACCIO_API_URL) {
            throw new Error('VERDACCIO_API_URL is not defined!');
        }
        var token = storage_1["default"].getItem('token');
        if (token) {
            if (!options.headers)
                options.headers = {};
            options.headers.authorization = "Bearer " + token;
        }
        if (!['http://', 'https://', '//'].some(function (prefix) { return url.startsWith(prefix); })) {
            // @ts-ignore
            url = window.VERDACCIO_API_URL + url;
        }
        /**
         * Handles response according to content type
         * @param {object} response
         * @returns {promise}
         */
        function handleResponseType(response) {
            if (response.headers) {
                var contentType = response.headers.get('Content-Type');
                if (contentType.includes('application/pdf')) {
                    return Promise.all([response.ok, response.blob()]);
                }
                if (contentType.includes('application/json')) {
                    return Promise.all([response.ok, response.json()]);
                }
                // it includes all text types
                if (contentType.includes('text/')) {
                    return Promise.all([response.ok, response.text()]);
                }
            }
        }
        return new Promise(function (resolve, reject) {
            fetch(url, __assign({ method: method, credentials: 'same-origin' }, options))
                // @ts-ignore
                .then(handleResponseType)
                .then(function (_a) {
                var responseOk = _a[0], body = _a[1];
                if (responseOk) {
                    resolve(body);
                }
                else {
                    reject(body);
                }
            })["catch"](function (error) {
                reject(error);
            });
        });
    };
    return API;
}());
exports["default"] = new API();
