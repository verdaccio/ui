import React from 'react';
import { mount } from 'enzyme';

import Link from './Link';

describe('<Link /> component', () => {
  const props = {
    to: 'https://github.com/verdaccio/ui',
  };
  test('should render the component in default state', () => {
    const wrapper = mount(<Link blank={true} to={props.to} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
