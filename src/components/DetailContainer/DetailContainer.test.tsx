import React from 'react';
import { render } from '@testing-library/react';

import DetailContainer from './DetailContainer';

describe('DetailContainer', () => {
  test('renders correctly', () => {
    const { container } = render(<DetailContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test.todo('should test click on tabs');
});
