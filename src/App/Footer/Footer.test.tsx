import React from 'react';

import APIProvider from 'verdaccio-ui/providers/API/APIProvider';
import AppConfigurationProvider from 'verdaccio-ui/providers/config';
import { render } from 'verdaccio-ui/utils/test-react-testing-library';

import Footer from './Footer';

describe('<Footer /> component', () => {
  beforeAll(() => {
    window.__VERDACCIO_BASENAME_UI_OPTIONS.version = 'v.1.0.0';
  });

  afterAll(() => {
    delete window.__VERDACCIO_BASENAME_UI_OPTIONS.version;
  });

  test('should load the initial state of Footer component', () => {
    const { container } = render(
      <AppConfigurationProvider>
        <APIProvider>
          <Footer />
        </APIProvider>
      </AppConfigurationProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
