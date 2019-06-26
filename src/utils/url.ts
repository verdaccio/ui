import isURLValidator from 'validator/lib/isURL';
import isEmailValidator from 'validator/lib/isEmail';
import '../../types';

export function isURL(url): boolean {
  return isURLValidator(url || '', {
    protocols: ['http', 'https', 'git+https'],
    require_protocol: true,
  });
}

export function isEmail(email): boolean {
  return isEmailValidator(email || '');
}

export function getRegistryURL(): string {
  // Don't add slash if it's not a sub directory
  return `${location.origin}${location.pathname === '/' ? '' : location.pathname}`;
}

export function getBaseNamePath(): string {
  return window.__VERDACCIO_BASENAME_UI_OPTIONS && window.__VERDACCIO_BASENAME_UI_OPTIONS.url_prefix;
}

export function getRootPath(): string {
  return window.__VERDACCIO_BASENAME_UI_OPTIONS && window.__VERDACCIO_BASENAME_UI_OPTIONS.base;
}
