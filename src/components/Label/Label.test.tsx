import React from 'react';
import { mount } from 'enzyme';

import Label from './Label';

describe('<Label /> component', () => {
  const props = {
    text: 'test',
  };
  test('should render the component in default state', () => {
    const wrapper = mount(<Label text={props.text} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
