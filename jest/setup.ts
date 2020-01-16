/**
 * Setup configuration for Jest
 * This file includes global settings for the JEST environment.
 */
import 'raf/polyfill';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GlobalWithFetchMock } from 'jest-fetch-mock';
import 'mutationobserver-shim';

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      __APP_VERSION__: string;
      window: Window;
      navigator: Navigator;
      __VERDACCIO_BASENAME_UI_OPTIONS: { [base: string]: string };
      VERDACCIO_API_URL: string;
    }
  }
}

configure({ adapter: new Adapter() });

global.__APP_VERSION__ = '1.0.0';
global.__VERDACCIO_BASENAME_UI_OPTIONS = { base: 'http://localhost' };
global.VERDACCIO_API_URL = 'https://verdaccio.tld';

const customGlobal: GlobalWithFetchMock = global as GlobalWithFetchMock;
customGlobal.fetch = require('jest-fetch-mock');
customGlobal.fetchMock = customGlobal.fetch;

// mocking few DOM methods
if (global.document) {
  // TODO: can we remove the use of document here?
  document.createRange = jest.fn((): any => ({
    selectNodeContents: (): void => {},
  }));
  document.execCommand = jest.fn();
}
