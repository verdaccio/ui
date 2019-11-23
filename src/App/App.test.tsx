import React from 'react';

import {
  render,
  waitForElement,
  fireEvent,
  queryByText as reactTestingLibraryQueryByText,
} from '../utils/test-react-testing-library';
import storage from '../utils/storage';
// eslint-disable-next-line jest/no-mocks-import
import { generateTokenWithTimeRange } from '../../jest/unit/components/__mocks__/token';

import App from './App';

/* eslint-disable react/jsx-no-bind*/
describe('<App />', () => {
  test('should display the Loading component at the beginning ', () => {
    const { container, queryByTestId } = render(<App />);

    expect(container.firstChild).toMatchSnapshot();
    expect(queryByTestId('loading')).toBeTruthy();
  });

  test('should display the Header component ', async () => {
    const { container, queryByTestId } = render(<App />);

    expect(container.firstChild).toMatchSnapshot();
    expect(queryByTestId('loading')).toBeTruthy();

    // wait for the Header component appearance and return the element
    const headerElement = await waitForElement(() => queryByTestId('header'));
    expect(headerElement).toBeTruthy();
  });

  test('isUserAlreadyLoggedIn: token already available in storage', async () => {
    storage.setItem('username', 'verdaccio');
    storage.setItem('token', generateTokenWithTimeRange(24));

    const { queryByTestId } = render(<App />);

    // wait for the Account's circle element component appearance and return the element
    const accountCircleElement = await waitForElement(() => queryByTestId('header--menu-accountcircle'));
    expect(accountCircleElement).toBeTruthy();

    if (accountCircleElement) {
      fireEvent.click(accountCircleElement);

      // wait for the Greeting's label element component appearance and return the element
      const greetingsLabelElement = await waitForElement(() => queryByTestId('greetings-label'));
      expect(greetingsLabelElement).toBeTruthy();

      if (greetingsLabelElement) {
        expect(reactTestingLibraryQueryByText(greetingsLabelElement, 'verdaccio')).toBeTruthy();
      }
    }
  });
});
