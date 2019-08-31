import React from 'react';
import { mount } from 'enzyme';
import Dist from './Dist';

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

describe('<Dist /> component', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('should render the component in default state', () => {
    const packageMeta = {
      latest: {
        name: 'verdaccio',
        version: '4.0.0',
        dist: {
          fileCount: 7,
          unpackedSize: 10,
        },
        license: '',
      },
    };

    // @ts-ignore
    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Dist />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component with license as string', () => {
    const packageMeta = {
      latest: {
        name: 'verdaccio',
        version: '4.0.0',
        dist: {
          fileCount: 7,
          unpackedSize: 10,
        },
        license: 'MIT',
      },
    };

    // @ts-ignore
    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Dist />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component with license as object', () => {
    const packageMeta = {
      latest: {
        name: 'verdaccio',
        version: '4.0.0',
        dist: {
          fileCount: 7,
          unpackedSize: 10,
        },
        license: {
          type: 'MIT',
          url: 'https://www.opensource.org/licenses/mit-license.php',
        },
      },
    };

    // @ts-ignore
    mockPackageMeta.mockImplementation(() => packageMeta);

    const wrapper = mount(<Dist />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
