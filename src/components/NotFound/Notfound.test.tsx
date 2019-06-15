import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

console.error = jest.fn();

describe('<NotFound /> component', () => {
  test('should load the component in default state', () => {
    const routerWrapper = shallow(
      <Router>
        <NotFound />
      </Router>
    );
    expect(routerWrapper.find(NotFound)).toMatchSnapshot();
  });
});
