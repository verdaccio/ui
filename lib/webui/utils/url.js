"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRegistryURL() {
    // Don't add slash if it's not a sub directory
    return `${location.origin}${location.pathname === '/' ? '' : location.pathname}`;
}
exports.getRegistryURL = getRegistryURL;
function getBaseNamePath() {
    // @ts-ignore
    return window.__VERDACCIO_BASENAME_UI_OPTIONS && window.__VERDACCIO_BASENAME_UI_OPTIONS.url_prefix;
}
exports.getBaseNamePath = getBaseNamePath;
function getRootPath() {
    // @ts-ignore
    return window.__VERDACCIO_BASENAME_UI_OPTIONS && window.__VERDACCIO_BASENAME_UI_OPTIONS.base;
}
exports.getRootPath = getRootPath;
