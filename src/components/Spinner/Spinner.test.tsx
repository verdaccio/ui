import React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';

describe('<Spinner /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
