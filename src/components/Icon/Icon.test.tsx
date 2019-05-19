import React from 'react';
import { shallow } from 'enzyme';

import Icon from './Icon';

describe('<Icon /> component', () => {
  const props = {
    name: 'austria',
  };
  test('should render the component in default state', () => {
    const wrapper = shallow(<Icon name={props.name} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
