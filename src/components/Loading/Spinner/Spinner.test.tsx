import React from 'react';

import { mount } from '../../../utils/test-enzyme';

import Spinner from './Spinner';

describe('<Spinner /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = mount(<Spinner />);
    const wrapperComponent = wrapper.find('Wrapper');
    const circular = wrapper.find('Circular');

    expect(circular.props().size).toBe(50);
    expect(wrapperComponent.props().centered).toBe(false);
  });

  test('should render the component in custom state', () => {
    const wrapper = mount(<Spinner centered={true} size={10} />);
    const wrapperComponent = wrapper.find('Wrapper');
    const circular = wrapper.find('Circular');

    expect(circular.props().size).toBe(10);
    expect(wrapperComponent.props().centered).toBe(true);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
