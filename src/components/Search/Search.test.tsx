import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent, waitForElement } from '../../utils/test-react-testing-library';
import api from '../../utils/api';

import Search from './Search';

const ComponentToBeRendered: React.FC = () => (
  <Router>
    <Search />
  </Router>
);

describe('<Search /> component', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    jest.spyOn(api, 'request').mockImplementation(() =>
      Promise.resolve([
        {
          name: '@verdaccio/types',
          version: '8.4.2',
        },
        {
          name: 'verdaccio',
          version: '4.3.5',
        },
      ])
    );
  });

  test('should load the component in default state', () => {
    const { container } = render(<ComponentToBeRendered />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('handleSearch: when user type package name in search component, show suggestions', async () => {
    const { getByPlaceholderText, getAllByText } = render(<ComponentToBeRendered />);

    const autoCompleteInput = getByPlaceholderText('Search Packages');

    fireEvent.focus(autoCompleteInput);
    fireEvent.change(autoCompleteInput, { target: { value: 'verdaccio' } });

    expect(autoCompleteInput).toHaveAttribute('value', 'verdaccio');

    const suggestionsElements = await waitForElement(() => getAllByText('verdaccio', { exact: true }));

    expect(suggestionsElements).toHaveLength(2);
    expect(api.request).toHaveBeenCalledTimes(1);
  });

  test.only('onBlur: should cancel all search requests', async () => {
    const { getByPlaceholderText, getAllByText } = render(<ComponentToBeRendered />);

    const autoCompleteInput = getByPlaceholderText('Search Packages');

    fireEvent.focusIn(autoCompleteInput, { target: { value: 'verdaccio' } });
    // fireEvent.focusOut(autoCompleteInput, { target: { value: 'verdaccio' } });
    const suggestionsElements = await waitForElement(() => getAllByText('verdaccio', { exact: true }));

    console.log('suggestionsElements', suggestionsElements);
  });
});
