import React from 'react';
import { shallow } from 'enzyme';

import Tag from './Tag';

describe('<Tag /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = shallow( <Tag><span>I am a child</span></Tag>);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
