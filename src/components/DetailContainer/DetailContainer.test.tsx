import React from 'react';

import { render } from '@testing-library/react';

import DetailContainer from './DetailContainer';

describe('DetailContainer', () => {
  test('renders correctly', () => {
    const { container } = render(<DetailContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
  // TODO -> implement more tests, for instance if a tab has it's correct content
});
