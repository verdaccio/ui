import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import { waitForElement } from '@testing-library/dom';
import { FetchMock } from 'jest-fetch-mock';

import { NOT_FOUND_TEXT } from '../../components/NotFound';

import Version from './Version';
import { DetailContext } from './context';
import data from './__partials__/data.json';

// :-) we mock this otherways fails on render, some weird issue on material-ui
jest.mock('../../muiComponents/Avatar');

const detailContextValue = {
  packageName: 'foo',
  packageMeta: data,
  readMe: 'Read me!',
  enableLoading: jest.fn(),
  isLoading: false,
  hasNotBeenFound: false,
  version: '1.0.0',
};

describe('test Version page', () => {
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
    (fetch as FetchMock).resetMocks();
  });

  test('should render the version page', async () => {
    const readmeText = 'test';
    (fetch as FetchMock).mockResponses(
      [JSON.stringify(vueMetadata), { status: 200, headers: { 'content-type': 'application/json' } }],
      [`<p align="center">${readmeText}</p>`, { status: 200, headers: { 'content-type': 'text/html' } }]
    );

  /* eslint-disable react/jsx-max-depth */
  test('should render the version page', async () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <DetailContext.Provider value={detailContextValue}>
          <Version />
        </DetailContext.Provider>
      </MemoryRouter>
    );
    // we wait fetch response (mocked above)
    await waitForElement(() => getByTestId('version-layout'));
    // check whether readme was loaded
    const hasReadme = getByText(detailContextValue.readMe);
    expect(hasReadme).toBeTruthy();
  });

  test('should render 404 page if the resources are not found', async () => {
    (fetch as FetchMock).mockResponses(
      [JSON.stringify({}), { status: 404, headers: { 'content-type': 'application/json' } }],
      [``, { status: 404, headers: { 'content-type': 'text/html' } }]
    const { getByText } = render(
      <MemoryRouter>
        <DetailContext.Provider
          value={{
            ...detailContextValue,
            hasNotBeenFound: true,
          }}>
          <Version />
        </DetailContext.Provider>
      </MemoryRouter>
    );
    // we wait fetch response (mocked above)
    const notFoundElement = await waitForElement(() => getByText(NOT_FOUND_TEXT));
    expect(notFoundElement).toBeTruthy();
  });

  // Wanna contribute? Here we some scenarios we need to test

  test.todo('should test click on tabs');
  test.todo('should check what is rendered int he sidebar is correct');
  test.todo('should test click back home on 404');
  test.todo('should test click on elements in the sidebar');
  test.todo('should test other not consider scenarios');
});
