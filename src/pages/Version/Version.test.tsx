import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { waitForElement } from '@testing-library/dom';

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
