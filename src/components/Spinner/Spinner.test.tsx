import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';
import { Circular, Wrapper } from './styles';

describe('<Spinner /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = shallow(<Spinner />);
    const wrapperComponent = wrapper.find(Wrapper);
    const circular = wrapper.find(Circular);

    expect(circular.props().size).toBe(50);
    expect(wrapperComponent.props().centered).toBe(false);
  });

  test('should render the component in custom state', () => {
    const wrapper = shallow(<Spinner centered={true} size={10} />);
    const wrapperComponent = wrapper.find(Wrapper);
    const circular = wrapper.find(Circular);

    expect(circular.props().size).toBe(10);
    expect(wrapperComponent.props().centered).toBe(true);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
