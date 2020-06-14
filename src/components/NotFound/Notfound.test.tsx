import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, fireEvent } from '@verdaccio/utils/test-react-testing-library';

import NotFound from './NotFound';

describe('<NotFound /> component', () => {
  test('should load the component in default state', () => {
    const { container } = render(
      <Router>
        <NotFound />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('go to Home Page button click', async () => {
    const spy = jest.spyOn(React, 'useCallback');
    const { getByTestId } = render(
      <Router>
        <NotFound />
      </Router>
    );

    const node = getByTestId('not-found-go-to-home-button');
    fireEvent.click(node);
    expect(spy).toHaveBeenCalled();
  });
});
