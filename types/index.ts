// FIXME: this should comes from @verdaccio/types
export interface VerdaccioOptions {
  url_prefix: string;
  base: string;
}

declare global {
  interface Window {
    __VERDACCIO_BASENAME_UI_OPTIONS: VerdaccioOptions;
    VERDACCIO_API_URL: string;
  }
}
