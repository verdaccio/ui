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
