// FIXME: this should comes from @verdaccio/types
export interface VerdaccioOptions {
  url_prefix?: string;
  uri?: string;
  base?: string;
  language?: string;
  version?: string;
  protocol?: string;
  host?: string;
  scope?: string;
  title?: string;
  primaryColor?: string;
  darkMode?: boolean;
}

declare global {
  interface Window {
    __VERDACCIO_BASENAME_UI_OPTIONS: VerdaccioOptions;
    VERDACCIO_PRIMARY_COLOR: string;
    VERDACCIO_LOGO: string;
    VERDACCIO_SCOPE: string;
  }
}
