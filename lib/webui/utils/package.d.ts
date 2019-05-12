export declare const TIMEFORMAT = "DD.MM.YYYY, HH:mm:ss";
/**
 * Formats license field for webui.
 * @see https://docs.npmjs.com/files/package.json#license
 */
export declare function formatLicense(license: any): any;
/**
 * Formats repository field for webui.
 * @see https://docs.npmjs.com/files/package.json#repository
 */
export declare function formatRepository(repository: any): any;
/**
 * For <LastSync /> component
 * @param {array} uplinks
 */
export declare function getLastUpdatedPackageTime(uplinks?: {}): string;
/**
 * For <LastSync /> component
 * @param {Object} time
 * @returns {Array} last 3 releases
 */
export declare function getRecentReleases(time?: {}): {
    version: string;
    time: string;
}[];
export declare function formatDate(lastUpdate: any): string;
export declare function formatDateDistance(lastUpdate: any): string;
export declare function getRouterPackageName(match: any): any;
