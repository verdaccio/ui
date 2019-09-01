import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Versions, { LABEL_CURRENT_TAGS, LABEL_VERSION_HISTORY } from './Versions';
import data from './__partials__/data.json';

import { render, cleanup } from '@testing-library/react';

const mockPackageMeta = jest.fn(() => ({
  packageName: 'foo',
  packageMeta: data,
}));

jest.mock('../../pages/Version', () => ({
  DetailContextConsumer: component => {
    return component.children({ ...mockPackageMeta() });
  },
}));

describe('<Version /> component', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    cleanup();
  });

  test('should render the component in default state', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Versions />
      </MemoryRouter>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render versions', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Versions />
      </MemoryRouter>
    );

    expect(getByText(LABEL_VERSION_HISTORY)).toBeTruthy();
    expect(getByText(LABEL_CURRENT_TAGS)).toBeTruthy();

    // pick some versions
    expect(getByText('2.3.0')).toBeTruthy();
    expect(getByText('canary')).toBeTruthy();
  });

  test('should not render versions', () => {
    const request = {
      packageName: 'foo',
    };

    // @ts-ignore
    mockPackageMeta.mockImplementation(() => request);

    const { queryByText } = render(
      <MemoryRouter>
        <Versions />
      </MemoryRouter>
    );

    expect(queryByText(LABEL_VERSION_HISTORY)).toBeFalsy();
    expect(queryByText(LABEL_CURRENT_TAGS)).toBeFalsy();
  });
});
