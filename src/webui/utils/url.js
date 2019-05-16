import validator from 'validator';

export function isURL(url) {
  return validator.isURL(url || '', {
    protocols: ['http', 'https', 'git+https'],
    require_protocol: true,
  });
}

export function isEmail(email) {
  return validator.isEmail(email || '');
}

export function getRegistryURL() {
  // Don't add slash if it's not a sub directory
  return `${location.origin}${location.pathname === '/' ? '' : location.pathname}`;
}

export function getBaseNamePath() {
  return window.__VERDACCIO_BASENAME_UI_OPTIONS.url_prefix;
}

export function getRootPath() {
  return window.__VERDACCIO_BASENAME_UI_OPTIONS.base;
}
