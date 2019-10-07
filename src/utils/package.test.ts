import { packageMeta } from '../../jest/unit/components/store/packageMeta';

import { formatLicense, formatRepository, formatDate, formatDateDistance, getLastUpdatedPackageTime, getRecentReleases } from './package';

describe('formatLicense', (): void => {
  test('should check license field different values', (): void => {
    expect(formatLicense('MIT')).toEqual('MIT');
  });

  test('should check license field for object value', (): void => {
    const license = { type: 'ISC', url: 'https://opensource.org/licenses/ISC' };
    expect(formatLicense(license)).toEqual('ISC');
  });

  test('should check license field for other value', (): void => {
    expect(formatLicense(null)).toBeUndefined();
    expect(formatLicense({})).toBeUndefined();
    expect(formatLicense([])).toBeUndefined();
  });
});

describe('formatRepository', (): void => {
  test('should check repository field different values', (): void => {
    const repository = 'https://github.com/verdaccio/verdaccio';
    expect(formatRepository(repository)).toEqual(repository);
  });

  test('should check repository field for object value', (): void => {
    const license = {
      type: 'git',
      url: 'https://github.com/verdaccio/verdaccio',
    };
    expect(formatRepository(license)).toEqual(license.url);
  });

  test('should check repository field for other value', (): void => {
    expect(formatRepository(null)).toBeNull();
    expect(formatRepository({})).toBeNull();
    expect(formatRepository([])).toBeNull();
  });
});

describe('formatDate', (): void => {
  test('should format the date', (): void => {
    const date = 1532211072138;
    expect(formatDate(date)).toEqual('21.07.2018, 22:11:12');
  });
});

describe('formatDateDistance', (): void => {
  test('should calculate the distance', (): void => {
    // const dateAboutTwoMonthsAgo = () => {
    //   const date = new Date();
    //   date.setMonth(date.getMonth() - 1);
    //   date.setDate(date.getDay() - 20);
    //   return date;
    // };
    const dateTwoMonthsAgo = (): Date => {
      const date = new Date();
      date.setMonth(date.getMonth() - 2);
      return date;
    };
    // const date1 = dateAboutTwoMonthsAgo();
    const date2 = dateTwoMonthsAgo();
    // FIXME: we need to review this expect, fails every x time.
    // expect(formatDateDistance(date1)).toEqual('about 2 months');
    expect(formatDateDistance(date2)).toEqual('2 months');
  });
});

describe('getLastUpdatedPackageTime', (): void => {
  test('should get the last update time', (): void => {
    const lastUpdated = packageMeta._uplinks;
    expect(getLastUpdatedPackageTime(lastUpdated)).toEqual('22.07.2018, 22:11:12');
  });

  test('should get the last update time for blank uplink', (): void => {
    const lastUpdated = {};
    expect(getLastUpdatedPackageTime(lastUpdated)).toEqual('');
  });
});

describe('getRecentReleases', (): void => {
  test('should get the recent releases', (): void => {
    const { time } = packageMeta;
    const result = [
      { time: '14.12.2017, 15:43:27', version: '2.7.1' },
      { time: '05.12.2017, 23:25:06', version: '2.7.0' },
      { time: '08.11.2017, 22:47:16', version: '2.6.6' },
    ];
    expect(getRecentReleases(time)).toEqual(result);
    expect(getRecentReleases()).toEqual([]);
  });
});
