import React from 'react';
import { mount } from 'enzyme';

import { DetailContext } from '../../pages/Version';
import { PackageMetaInterface } from '../../../types/packageMeta';

import Engine from './Engines';

jest.mock('./img/node.png', () => '');
jest.mock('../Install/img/npm.svg', () => '');

const mockPackageMeta = (): PackageMetaInterface => ({
  latest: {
    name: 'verdaccio',
    version: '0.0.0',
    dist: {
      fileCount: 1,
      unpackedSize: 1,
    },
  },
  _uplinks: {},
});

describe('<Engines /> component', () => {
  test('should render the component in default state', () => {
    const packageMeta = mockPackageMeta();

    packageMeta.latest.engines = {
      node: '>= 0.1.98',
      npm: '>3',
    };

    const wrapper = mount(
      <DetailContext.Provider value={{ packageMeta }}>
        <Engine />
      </DetailContext.Provider>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component when there is no engine key in package meta', () => {
    const packageMeta = mockPackageMeta();

    delete packageMeta.latest.engines;

    const wrapper = mount(
      <DetailContext.Provider value={{ packageMeta }}>
        <Engine />
      </DetailContext.Provider>
    );
    expect(wrapper.html()).toBeNull();
  });

  test('should render the component when there is no keys in engine in package meta', () => {
    const packageMeta = mockPackageMeta();

    packageMeta.latest.engines = {};

    const wrapper = mount(
      <DetailContext.Provider value={{ packageMeta }}>
        <Engine />
      </DetailContext.Provider>
    );
    expect(wrapper.html()).toBeNull();
  });
});
