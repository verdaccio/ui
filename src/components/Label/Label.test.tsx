import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';

describe('<Label /> component', () => {
  const props = {
    text: 'test',
  };
  test('should render the component in default state', () => {
    const wrapper = shallow(<Label text={props.text} />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
