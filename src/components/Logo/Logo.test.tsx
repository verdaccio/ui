import React from 'react';
import { shallow } from 'enzyme';

import Logo from './Logo';

describe('<Logo /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
