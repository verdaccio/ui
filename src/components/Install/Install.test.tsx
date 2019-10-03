import React from 'react';
import { render } from '@testing-library/react';

import { DetailContext, DetailContextProps } from '../../pages/Version';
import data from '../Versions/__partials__/data.json';

import Install from './Install';

const detailContextValue: Partial<DetailContextProps> = {
  packageName: 'foo',
  packageMeta: data,
};

const ComponentToBeRendered: React.FC = () => (
  <DetailContext.Provider value={detailContextValue}>
    <Install />
  </DetailContext.Provider>
);

/* eslint-disable react/jsx-no-bind*/
describe('<Install />', () => {
  test('renders correctly', () => {
    const { container } = render(<ComponentToBeRendered />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should have 3 children', () => {
    const { getByTestId } = render(<ComponentToBeRendered />);
    const installListItems = getByTestId('installList');
    // installitems + subHeader = 4
    expect(installListItems.children.length).toBe(4);
  });

  test('should have the element NPM', () => {
    const { getByTestId } = render(<ComponentToBeRendered />);
    expect(getByTestId('installListItem-npm')).toBeTruthy();
  });

  test('should have the element YARN', () => {
    const { getByTestId } = render(<ComponentToBeRendered />);
    expect(getByTestId('installListItem-yarn')).toBeTruthy();
  });

  test('should have the element PNPM', () => {
    const { getByTestId } = render(<ComponentToBeRendered />);
    expect(getByTestId('installListItem-pnpm')).toBeTruthy();
  });
});
