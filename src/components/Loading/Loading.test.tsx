import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

describe('<Loading /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
