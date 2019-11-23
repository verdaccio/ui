import React from 'react';

import { mount } from '../../utils/test-enzyme';

import Repository from './Repository';

jest.mock('./img/git.png', () => '');

const mockPackageMeta: jest.Mock = jest.fn(() => ({
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

describe('<Repository /> component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render the component in default state', () => {
    const packageMeta = {
      latest: {
        repository: {
          type: 'git',
          url: 'git+https://github.com/verdaccio/ui.git',
        },
      },
    };

    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Repository />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component in with no repository data', () => {
    const packageMeta = {
      latest: {},
    };

    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Repository />);
    expect(wrapper.html()).toEqual('');
  });

  test('should render the component in with invalid url', () => {
    const packageMeta = {
      latest: {
        repository: {
          type: 'git',
          url: 'git://github.com/verdaccio/ui.git',
        },
      },
    };

    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Repository />);
    expect(wrapper.html()).toEqual('');
  });
});
