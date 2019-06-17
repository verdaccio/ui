import isString from 'lodash/isString';
import format from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

export const TIMEFORMAT = 'DD.MM.YYYY, HH:mm:ss';

/**
 * Formats license field for webui.
 * @see https://docs.npmjs.com/files/package.json#license
 */
export function formatLicense(license: any) {
  if (isString(license)) {
    return license;
  }

  if (license && typeof license === 'object' && license.type) {
    return license.type;
  }

  return null;
}

/**
 * Formats repository field for webui.
 * @see https://docs.npmjs.com/files/package.json#repository
 */
export function formatRepository(repository: any) {
  if (isString(repository)) {
    return repository;
  }

  if (repository && typeof repository === 'object' && repository.url) {
    return repository.url;
  }

  return null;
}

/**
 * For <LastSync /> component
 * @param {array} uplinks
 */
export function getLastUpdatedPackageTime(uplinks = {}) {
  let lastUpdate = 0;
  Object.keys(uplinks).forEach(upLinkName => {
    const status = uplinks[upLinkName];
    if (status.fetched > lastUpdate) {
      lastUpdate = status.fetched;
    }
  });

  return lastUpdate ? formatDate(lastUpdate) : '';
}

/**
 * For <LastSync /> component
 * @param {Object} time
 * @returns {Array} last 3 releases
 */
export function getRecentReleases(time = {}) {
  const recent = Object.keys(time).map(version => ({
    version,
    time: formatDate(time[version]),
  }));
  return recent.slice(recent.length - 3, recent.length).reverse();
}

export function formatDate(lastUpdate) {
  return format(new Date(lastUpdate), TIMEFORMAT);
}

export function formatDateDistance(lastUpdate) {
  return distanceInWordsToNow(new Date(lastUpdate));
}

export function getRouterPackageName(match) {
  const packageName = match.params.package;
  const scope = match.params.scope;
  if (scope) {
    return `@${scope}/${packageName}`;
  }

  return packageName;
}
