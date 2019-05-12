"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isString_1 = __importDefault(require("lodash/isString"));
const format_1 = __importDefault(require("date-fns/format"));
const distance_in_words_to_now_1 = __importDefault(require("date-fns/distance_in_words_to_now"));
exports.TIMEFORMAT = 'DD.MM.YYYY, HH:mm:ss';
/**
 * Formats license field for webui.
 * @see https://docs.npmjs.com/files/package.json#license
 */
function formatLicense(license) {
    if (isString_1.default(license)) {
        return license;
    }
    if (license && typeof license === 'object' && license.type) {
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
    if (isString_1.default(repository)) {
        return repository;
    }
    if (repository && typeof repository === 'object' && repository.url) {
        return repository.url;
    }
    return null;
}
exports.formatRepository = formatRepository;
/**
 * For <LastSync /> component
 * @param {array} uplinks
 */
function getLastUpdatedPackageTime(uplinks = {}) {
    let lastUpdate = 0;
    Object.keys(uplinks).forEach((upLinkName) => {
        const status = uplinks[upLinkName];
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
function getRecentReleases(time = {}) {
    const recent = Object.keys(time).map((version) => ({
        version,
        time: formatDate(time[version]),
    }));
    return recent.slice(recent.length - 3, recent.length).reverse();
}
exports.getRecentReleases = getRecentReleases;
function formatDate(lastUpdate) {
    return format_1.default(new Date(lastUpdate), exports.TIMEFORMAT);
}
exports.formatDate = formatDate;
function formatDateDistance(lastUpdate) {
    return distance_in_words_to_now_1.default(new Date(lastUpdate));
}
exports.formatDateDistance = formatDateDistance;
function getRouterPackageName(match) {
    const packageName = match.params.package;
    const scope = match.params.scope;
    if (scope) {
        return `@${scope}/${packageName}`;
    }
    return packageName;
}
exports.getRouterPackageName = getRouterPackageName;
