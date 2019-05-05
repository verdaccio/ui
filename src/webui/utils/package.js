"use strict";
exports.__esModule = true;
var isString_1 = require("lodash/isString");
var format_1 = require("date-fns/format");
var distance_in_words_to_now_1 = require("date-fns/distance_in_words_to_now");
exports.TIMEFORMAT = 'DD.MM.YYYY, HH:mm:ss';
/**
 * Formats license field for webui.
 * @see https://docs.npmjs.com/files/package.json#license
 */
function formatLicense(license) {
    if (isString_1["default"](license)) {
        return license;
    }
    if (typeof license === 'object' && license.type) {
        return license.type;
    }
    return null;
}
exports.formatLicense = formatLicense;
/**
 * Formats repository field for webui.
 * @see https://docs.npmjs.com/files/package.json#repository
 */
function formatRepository(repository) {
    if (isString_1["default"](repository)) {
        return repository;
    }
    if (typeof repository === 'object' && repository.url) {
        return repository.url;
    }
    return null;
}
exports.formatRepository = formatRepository;
/**
 * For <LastSync /> component
 * @param {array} uplinks
 */
function getLastUpdatedPackageTime(uplinks) {
    if (uplinks === void 0) { uplinks = {}; }
    var lastUpdate = 0;
    Object.keys(uplinks).forEach(function (upLinkName) {
        var status = uplinks[upLinkName];
        if (status.fetched > lastUpdate) {
            lastUpdate = status.fetched;
        }
    });
    return lastUpdate ? formatDate(lastUpdate) : '';
}
exports.getLastUpdatedPackageTime = getLastUpdatedPackageTime;
/**
 * For <LastSync /> component
 * @param {Object} time
 * @returns {Array} last 3 releases
 */
function getRecentReleases(time) {
    if (time === void 0) { time = {}; }
    var recent = Object.keys(time).map(function (version) { return ({
        version: version,
        time: formatDate(time[version])
    }); });
    return recent.slice(recent.length - 3, recent.length).reverse();
}
exports.getRecentReleases = getRecentReleases;
function formatDate(lastUpdate) {
    return format_1["default"](new Date(lastUpdate), exports.TIMEFORMAT);
}
exports.formatDate = formatDate;
function formatDateDistance(lastUpdate) {
    return distance_in_words_to_now_1["default"](new Date(lastUpdate));
}
exports.formatDateDistance = formatDateDistance;
function getRouterPackageName(match) {
    var packageName = match.params.package;
    var scope = match.params.scope;
    if (scope) {
        return "@" + scope + "/" + packageName;
    }
    return packageName;
}
exports.getRouterPackageName = getRouterPackageName;
