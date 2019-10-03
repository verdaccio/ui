import React from 'react';
import { mount } from 'enzyme';
import Engine from './Engines';

jest.mock('./img/node.png', () => '');
jest.mock('../Install/img/npm.svg', () => '');

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

describe('<Engines /> component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render the component in default state', () => {
    const packageMeta = {
      latest: {
        engines: {
          node: '>= 0.1.98',
          npm: '>3',
        },
      },
    };

    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Engine />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component when there is no engine key in package meta', () => {
    const packageMeta = {
      latest: {},
    };

    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Engine />);
    expect(wrapper.html()).toEqual('');
  });

  test('should render the component when there is no keys in engine in package meta', () => {
    const packageMeta = {
      latest: {
        engines: {},
      },
    };

    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Engine />);
    expect(wrapper.html()).toEqual('');
  });
});
