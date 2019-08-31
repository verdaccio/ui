import React from 'react';
import { mount } from 'enzyme';
import Help from './Help';

describe('<Help /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = mount(<Help />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
