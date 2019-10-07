import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { render, cleanup } from '@testing-library/react';

import { DetailContext, DetailContextProps } from '../../pages/Version';

import Versions, { LABEL_CURRENT_TAGS, LABEL_VERSION_HISTORY } from './Versions';
import data from './__partials__/data.json';

const detailContextValue: Partial<DetailContextProps> = {
  packageName: 'foo',
  packageMeta: data,
};

const ComponentToBeRendered: React.FC<{ contextValue: Partial<DetailContextProps> }> = ({ contextValue }) => (
  <MemoryRouter>
    <DetailContext.Provider value={contextValue}>
      <Versions />
    </DetailContext.Provider>
  </MemoryRouter>
);

describe('<Version /> component', () => {
  afterEach(() => {
    cleanup();
  });

  // FIXME: this test is not deterministic (writes `N days ago` in the snapshot, where N is random number)
  test.skip('should render the component in default state', () => {
    const wrapper = mount(<ComponentToBeRendered contextValue={detailContextValue} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render versions', () => {
    const { getByText } = render(<ComponentToBeRendered contextValue={detailContextValue} />);

    expect(getByText(LABEL_VERSION_HISTORY)).toBeTruthy();
    expect(getByText(LABEL_CURRENT_TAGS)).toBeTruthy();

    // pick some versions
    expect(getByText('2.3.0')).toBeTruthy();
    expect(getByText('canary')).toBeTruthy();
  });

  test('should not render versions', () => {
    const { queryByText } = render(<ComponentToBeRendered contextValue={{ packageName: detailContextValue.packageName }} />);

    expect(queryByText(LABEL_VERSION_HISTORY)).toBeFalsy();
    expect(queryByText(LABEL_CURRENT_TAGS)).toBeFalsy();
  });

  test.todo('should click on version link');
});
