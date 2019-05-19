import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

describe('<Link /> component', () => {
  const props = {
    to: 'https://github.com/verdaccio/ui',
  };
  test('should render the component in default state', () => {
    const wrapper = shallow(<Link to={props.to} blank />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
