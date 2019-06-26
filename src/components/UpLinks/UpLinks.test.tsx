import React from 'react';
import { shallow } from 'enzyme';

import UpLinks from './UpLinks';

describe('<UpLinks /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = shallow(<UpLinks />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
