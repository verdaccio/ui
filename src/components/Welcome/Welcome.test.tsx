import React from 'react';
import { mount } from 'enzyme';

import Welcome from './Welcome';

describe('<Welcome /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = mount(<Welcome />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
