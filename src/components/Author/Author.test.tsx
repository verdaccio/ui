import React from 'react';
import { mount } from 'enzyme';
import Authors from './Author';

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

describe('<Author /> component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should render the component in default state', () => {
    const packageMeta = {
      latest: {
        name: 'verdaccio',
        version: '4.0.0',
        author: {
          name: 'verdaccio user',
          email: 'verdaccio.user@verdaccio.org',
          url: '',
          avatar: 'https://www.gravatar.com/avatar/000000',
        },
      },
    };

    // @ts-ignore
    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Authors />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component when there is no author information available', () => {
    const packageMeta = {
      latest: {
        name: 'verdaccio',
        version: '4.0.0',
      },
    };

    // @ts-ignore
    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Authors />);
    expect(wrapper.html()).toEqual('');
  });

  test('should render the component when there is no author email', () => {
    const packageMeta = {
      latest: {
        name: 'verdaccio',
        version: '4.0.0',
        author: {
          name: 'verdaccio user',
          url: '',
          avatar: 'https://www.gravatar.com/avatar/000000',
        },
      },
    };

    // @ts-ignore
    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Authors />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
