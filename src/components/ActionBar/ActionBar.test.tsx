import React from 'react';
import { mount } from 'enzyme';
import { ActionBar } from './ActionBar';

const mockPackageMeta = jest.fn(() => ({
  latest: {
    homepage: 'https://verdaccio.tld',
    bugs: {
      url: 'https://verdaccio.tld/bugs',
    },
    dist: {
      tarball: 'https://verdaccio.tld/download',
    },
  },
}));

jest.mock('../../pages/Version', () => ({
  DetailContextConsumer: component => {
    return component.children({ packageMeta: mockPackageMeta() });
  },
}));

describe('<ActionBar /> component', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  test('should render the component in default state', () => {
    // const ActionBar = require('./ActionBar');
    const wrapper = mount(<ActionBar />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('when there is no action bar data', () => {
    // @ts-ignore
    mockPackageMeta.mockImplementation(() => ({latest: {}})
);

    const wrapper = mount(<ActionBar />);
    // FIXME: this only renders the DetailContextConsumer, thus
    // the wrapper will be always empty
    expect(wrapper.html()).toEqual('');
  });

  test('when there is a button to download a tarball', () => {
    // @ts-ignore
    mockPackageMeta.mockImplementation(() => ({
      latest: {
        dist: {
          tarball: 'http://localhost:8080/bootstrap/-/bootstrap-4.3.1.tgz',
        },
      },
    }));

    const wrapper = mount(<ActionBar />);
    expect(wrapper.html()).toMatchSnapshot();

    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
  });
});
