import React from 'react';
import { shallow } from 'enzyme';

import Author from './Author';

describe('<Author /> component', () => {
  const props = {
    name: 'austria',
  };
  test('should render the component in default state', () => {
    const wrapper = shallow(<Author />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
