import React from 'react';
import { mount } from 'enzyme';

import Install from './Install';

describe('<Install /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = mount(<Install />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
