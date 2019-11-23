import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, fireEvent } from '../../utils/test-react-testing-library';

import NotFound, { GO_TO_HOME_PAGE } from './NotFound';

describe('<NotFound /> component', () => {
  test('should load the component in default state', () => {
    const { container } = render(
      <Router>
        <NotFound />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  test('go to Home Page button click', () => {
    const spy = jest.spyOn(React, 'useCallback');
    const { getByText } = render(
      <Router>
        <NotFound />
      </Router>
    );

    const node = getByText(GO_TO_HOME_PAGE);
    fireEvent.click(node);

    expect(spy).toHaveBeenCalled();
  });
});
