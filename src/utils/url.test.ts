import { isURL, isEmail, getRegistryURL } from './url';

describe('url', () => {
  test('isURL() - should return true for localhost', () => {
    expect(isURL('http://localhost:8080/bootstrap/-/bootstrap-4.3.1.tgz')).toBeTruthy();
  });

  test('isURL() - should return false when protocol is missing', () => {
    expect(isURL('localhost:8080/bootstrap/-/bootstrap-4.3.1.tgz')).toBeFalsy();
  });

  test('isEmail() - should return true if valid', () => {
    expect(isEmail('email@domain.com')).toBeTruthy();
  });
  test('isEmail() - should return false if invalid', () => {
    expect(isEmail('')).toBeFalsy();
  });

  test('getRegistryURL() - should keep slash if location is a sub directory', () => {
    history.pushState({}, 'page title', '/-/web/detail');
    expect(getRegistryURL()).toBe('http://localhost/-/web/detail');
    history.pushState({}, 'page title', '/');
  });
  test('getRegistryURL() - should not add slash if location is not a sub directory', () => {
    expect(getRegistryURL()).toBe('http://localhost');
  });
});
