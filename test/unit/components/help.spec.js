/**
 * Help component
 */
import React from 'react';
import { shallow } from 'enzyme';
import Help from '../../../src/webui/components/Help';

describe('<Help /> component', () => {

  test('should render the component in default state', () => {
    const wrapper = shallow(<Help />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
