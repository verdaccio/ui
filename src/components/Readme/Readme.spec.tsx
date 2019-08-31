import React from 'react';
import { mount } from 'enzyme';
import Readme from './Readme';

describe('<Readme /> component', () => {
  test('should load the component in default state', () => {
    const wrapper = mount(<Readme description="test" />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should dangerously set html', () => {
    const wrapper = mount(<Readme description="<h1>This is a test string</h1>" />);
    expect(wrapper.html()).toEqual('<div class="markdown-body"><h1>This is a test string</h1></div>');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
