import React from 'react';

import { mount } from '@verdaccio/utils/test-enzyme';

import { DetailContext } from '../../pages/Version';

import Authors from './Author';

const withAuthorComponent = (packageMeta: React.ContextType<typeof DetailContext>['packageMeta']): JSX.Element => (
  <DetailContext.Provider value={{ packageMeta }}>
    <Authors />
  </DetailContext.Provider>
);

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
        dist: { fileCount: 0, unpackedSize: 0 },
      },
      _uplinks: {},
    };

    const wrapper = mount(withAuthorComponent(packageMeta));
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component when there is no author information available', () => {
    const packageMeta = {
      latest: {
        name: 'verdaccio',
        version: '4.0.0',
        dist: { fileCount: 0, unpackedSize: 0 },
      },
      _uplinks: {},
    };

    const wrapper = mount(withAuthorComponent(packageMeta));
    expect(wrapper.html()).toBeNull();
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
        dist: { fileCount: 0, unpackedSize: 0 },
      },
      _uplinks: {},
    };

    const wrapper = mount(withAuthorComponent(packageMeta));
    expect(wrapper.html()).toMatchSnapshot();
  });
});
