import { isObject } from 'util';

import { UpLinks } from '@verdaccio/types';
import isString from 'lodash/isString';
import format from 'date-fns/format';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import { Time } from '../../types/packageMeta';

export const TIMEFORMAT = 'DD.MM.YYYY, HH:mm:ss';

/**
 * Formats license field for webui.
 * @see https://docs.npmjs.com/files/package.json#license
 */
// License should use type License defined above, but conflicts with the unit test that provide array or empty object
/* eslint-disable @typescript-eslint/no-explicit-any */
export function formatLicense(license: any): string | undefined {
  if (isString(license)) {
    return license;
  }

  if (license && isObject(license) && license.type) {
    return license.type;
  }

  return;
}

export interface Repository {
  type: string;
  url: string;
}

/**
 * Formats repository field for webui.
 * @see https://docs.npmjs.com/files/package.json#repository
 */

// Repository should use type Repository defined above, but conflicts with the unit test that provide array or empty object
/* eslint-disable @typescript-eslint/no-explicit-any */
export function formatRepository(repository: any): string | null {
  if (isString(repository)) {
    return repository;
  }

  if (repository && isObject(repository) && repository.url) {
    return repository.url;
  }

  return null;
}

export function formatDate(lastUpdate: string | number): string {
  return format(new Date(lastUpdate), TIMEFORMAT);
}

export function formatDateDistance(lastUpdate: Date | string | number): string {
  return distanceInWordsToNow(new Date(lastUpdate));
}

/**
 * For <LastSync /> component
 * @param {array} uplinks
 */
export function getLastUpdatedPackageTime(uplinks: UpLinks = {}): string {
  let lastUpdate = 0;
  Object.keys(uplinks).forEach(function computeUplink(upLinkName): void {
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
export function getRecentReleases(time: Time = {}): Time[] {
  const recent = Object.keys(time).map(version => ({
    version,
    time: formatDate(time[version]),
  }));

  return recent.slice(recent.length - 3, recent.length).reverse();
}
