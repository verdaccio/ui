import React from 'react';

import { render } from '@verdaccio/utils/test-react-testing-library';

import Icon from './Icon';

describe('<Icon /> component', () => {
  const props = {
    name: 'austria',
  };
  test('should render the component in default state', () => {
    const { container } = render(<Icon name={props.name} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
