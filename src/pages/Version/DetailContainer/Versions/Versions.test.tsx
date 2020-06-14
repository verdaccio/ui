import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, cleanup } from '../../../../utils/test-react-testing-library';
import { mount } from '../../../../utils/test-enzyme';
import { DetailContext } from '../../context';
import { DetailContextProps } from '../../version-config';
import translationEN from '../../../../../i18n/translations/en-US.json';

import Versions from './Versions';
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

    expect(getByText(translationEN.versions['version-history'])).toBeTruthy();
    expect(getByText(translationEN.versions['current-tags'])).toBeTruthy();

    // pick some versions
    expect(getByText('2.3.0')).toBeTruthy();
    expect(getByText('canary')).toBeTruthy();
  });

  test('should not render versions', () => {
    const { queryByText } = render(
      <ComponentToBeRendered contextValue={{ packageName: detailContextValue.packageName }} />
    );

    expect(queryByText(translationEN.versions['version-history'])).toBeFalsy();
    expect(queryByText(translationEN.versions['current-tags'])).toBeFalsy();
  });

  test.todo('should click on version link');
});
