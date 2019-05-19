import React from 'react';
import { shallow } from 'enzyme';

import Repository from './Repository';

describe('<Repository /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = shallow(<Repository />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
