import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router';

import vueMetadata from '../../../test/fixtures/metadata/vue.json';

import Version from './Version';
import { waitForElement } from '@testing-library/dom';
import ErrorBoundary from '../../App/AppError';
// import { NOT_FOUND_TEXT } from '../../components/NotFound/NotFound';

// :-) we mock this otherways fails on render
jest.mock('@material-ui/core/Avatar');

describe('test Version page', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render the version page', async () => {
    const readmeText = 'test';
    // FIXME: a better way to mock this
    // @ts-ignore
    global.window.VERDACCIO_API_URL = 'http://test';
    // @ts-ignore
    fetch.mockResponses(
      [[JSON.stringify(vueMetadata)], { status: 200, headers: { 'content-type': 'application/json' } }],
      [[`<p align="center">${readmeText}</p>`], { status: 200, headers: { 'content-type': 'text/html' } }]
    );

    const { getByTestId, getByText } = render(
      <ErrorBoundary>
        <MemoryRouter>
          <Version match={{ params: { ['package']: 'vue' } }}></Version>
        </MemoryRouter>
      </ErrorBoundary>
    );

    // first it display loading
    const hasLoading = getByTestId('loading');
    expect(hasLoading).toBeTruthy();

    // we wait fetch response (mocked above)
    await waitForElement(() => getByTestId('version-layout'));

    // check whether readme was loaded
    const hasReadme = getByText(readmeText);

    expect(hasReadme).toBeTruthy();
  });
});
