import React from 'react';
import { shallow } from 'enzyme';

import Versions from './Versions';

describe('<Versions /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = shallow(<Versions />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
