import React from 'react';
import { mount } from 'enzyme';

import { DetailContext } from '../../pages/Version';

import Engine from './Engines';

jest.mock('./img/node.png', () => '');
jest.mock('../Install/img/npm.svg', () => '');

const withEngineComponent = (packageMeta: React.ContextType<typeof DetailContext>['packageMeta']): JSX.Element => (
  <DetailContext.Provider value={{ packageMeta }}>
    <Engine />
  </DetailContext.Provider>
);

describe('<Engines /> component', () => {
  test('should render the component in default state', () => {
    const packageMeta = {
      latest: {
        name: 'verdaccio',
        version: '0.0.0',
        homepage: 'https://verdaccio.tld',
        bugs: {
          url: 'https://verdaccio.tld/bugs',
        },
        dist: {
          fileCount: 1,
          unpackedSize: 1,
        },
        engines: {
          node: '>= 0.1.98',
          npm: '>3',
        },
      },
      _uplinks: {},
    };

    const wrapper = mount(withEngineComponent(packageMeta));
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component when there is no engine key in package meta', () => {
    const packageMeta = {
      latest: {},
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper = mount(withEngineComponent(packageMeta as any));
    expect(wrapper.html()).toBeNull();
  });

  test('should render the component when there is no keys in engine in package meta', () => {
    const packageMeta = {
      latest: {
        engines: {},
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper = mount(withEngineComponent(packageMeta as any));
    expect(wrapper.html()).toBeNull();
  });
});
