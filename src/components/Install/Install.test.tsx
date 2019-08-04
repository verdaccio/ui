import React from 'react';
import { shallow } from 'enzyme';

import Install from './Install';

describe('<Install /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = shallow(<Install />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
