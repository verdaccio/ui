import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { waitForElement } from '@testing-library/dom';

import vueMetadata from '../../../test/fixtures/metadata/vue.json';
import ErrorBoundary from '../../App/AppError';

import Version from './Version';

// :-) we mock this otherways fails on render, some weird issue on material-ui
jest.mock('../../muiComponents/Avatar');

// eslint-disable-next-line react/display-name
jest.mock('../../components/NotFound', () => () => <div>{'Not found'}</div>);

describe('test Version page', () => {
  jest.setTimeout(40000000);
  beforeAll(() => {
    // FIXME: a better way to mock this
    // @ts-ignore
    global.window.VERDACCIO_API_URL = 'http://test';
  });

  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    jest.resetAllMocks();
    // @ts-ignore
    fetch.resetMocks();
  });

  test('should render the version page', async () => {
    const readmeText = 'test';
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

  test('should render 404 page if the resources are not found', async () => {
    // @ts-ignore
    fetch.mockResponses(
      [[JSON.stringify({})], { status: 404, headers: { 'content-type': 'application/json' } }],
      [[``], { status: 404, headers: { 'content-type': 'text/html' } }]
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
    await waitForElement(() => getByText('Not found'));

    // check whether readme was loaded
    const hasReadme = getByText('Not found');

    expect(hasReadme).toBeTruthy();
  });

  // Wanna contribute? Here we some scenarios we need to test

  test.todo('should test click on tabs');
  test.todo('should check what is rendered int he sidebar is correct');
  test.todo('should test click back home on 404');
  test.todo('should test click on elements in the sidebar');
  test.todo('should test other not consider scenarios');
});
