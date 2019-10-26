import React from 'react';
import { mount } from 'enzyme';

import RegistryInfoContent from './RegistryInfoContent';

describe('<RegistryInfoContent /> component', () => {
  test('should render the component in default state with npm tab', () => {
    const wrapper = mount(<RegistryInfoContent registryUrl="https://registry.verdaccio.org" scope="@" />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component in default state with pnpm tab', () => {
    const wrapper = mount(<RegistryInfoContent registryUrl="https://registry.verdaccio.org" scope="@" />);
    wrapper.setState({ tabPosition: 1 });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component in default state with yarn tab', () => {
    const wrapper = mount(<RegistryInfoContent registryUrl="https://registry.verdaccio.org" scope="@" />);
    wrapper.setState({ tabPosition: 2 });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
