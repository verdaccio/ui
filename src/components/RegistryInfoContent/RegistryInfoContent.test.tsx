import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { RegistryInfoContent } from './RegistryInfoContent';

describe('<RegistryInfoContent /> component', () => {
  afterEach(() => {
    cleanup();
  });

  test('should load the component with no data', () => {
    const { getByTestId } = render(<RegistryInfoContent registryUrl={''} scope={''} />);
    const unorderedListOfTodos = getByTestId('tabs-el');
    expect(unorderedListOfTodos.children.length).toBe(1);
  });

  test('should load the appropiate tab content when the tab is clicked', () => {
    const { container, getByTestId } = render(<RegistryInfoContent registryUrl={'http://localhost:4872'} scope={''} />);
    expect(container.textContent).not.toContain('pnpm adduser --registry http://localhost:4872');
    const pnpmTab = getByTestId('pnpm-tab');
    fireEvent.click(pnpmTab);
    expect(container.textContent).toContain('pnpm adduser --registry http://localhost:4872');
  });
});
