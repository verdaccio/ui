import React from 'react';
import { mount } from 'enzyme';

import TextField from './TextField';

describe('<TextField /> component', () => {
  const props = {
    name: 'test',
    value: 'test',
  };
  test('should render the component in default state', () => {
    const wrapper = mount(<TextField name={props.name} value={props.value} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
