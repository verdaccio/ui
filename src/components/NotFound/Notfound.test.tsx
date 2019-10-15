import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

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
  test.todo('Test Button Click');
});
