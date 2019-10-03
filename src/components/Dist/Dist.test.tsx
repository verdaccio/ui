import React from 'react';
import { mount } from 'enzyme';

import { DetailContext } from '../../pages/Version';
import Dist from './Dist';

const withDistComponent = (packageMeta: React.ContextType<typeof DetailContext>['packageMeta']): JSX.Element => (
  <DetailContext.Provider value={{ packageMeta }}>
    <Dist />
  </DetailContext.Provider>
);

describe('<Dist /> component', () => {
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
      _uplinks: {},
    };

    const wrapper = mount(withDistComponent(packageMeta));
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
      _uplinks: {},
    };

    const wrapper = mount(withDistComponent(packageMeta));
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
      _uplinks: {},
    };

    const wrapper = mount(withDistComponent(packageMeta));
    expect(wrapper.html()).toMatchSnapshot();
  });
});
