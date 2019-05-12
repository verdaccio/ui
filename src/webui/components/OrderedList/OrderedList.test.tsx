/**
 * @prettier
 */

import React from 'react';
import { shallow } from 'enzyme';
import OrderedList from '.';
import Typography from '@material-ui/core/Typography';

const listExample = ['first', 'second', 'third'];

describe('<OrderedList /> component', () => {
  test('should render the component in default state', () => {
    const wrapper = shallow(
      <OrderedList>
        {listExample.map(itemExample => (
          <Typography key={itemExample}>{itemExample}</Typography>
        ))}
      </OrderedList>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
