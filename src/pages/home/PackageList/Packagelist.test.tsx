import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { mount } from '@verdaccio/utils/test-enzyme';

import Help from './Help';
import { PackageList } from './PackageList';

describe('<PackageList /> component', () => {
  test('should load the component with no packages', () => {
    const props = {
      packages: [],
    };
    const wrapper = mount(<PackageList packages={props.packages} />);
    expect(wrapper.find(Help).exists()).toBeTruthy();
  });

  test('should load the component with packages', () => {
    const props = {
      packages: [
        {
          name: 'verdaccio',
          version: '1.0.0',
          time: new Date(1532211072138).getTime(),
          description: 'Private NPM repository',
          author: { name: 'Sam', avatar: 'test avatar' },
        },
        {
          name: 'abc',
          version: '1.0.1',
          time: new Date(1532211072138).getTime(),
          description: 'abc description',
          author: { name: 'Rose', avatar: 'test avatar' },
        },
        {
          name: 'xyz',
          version: '1.1.0',
          description: 'xyz description',
          author: { name: 'Martin', avatar: 'test avatar' },
        },
      ],
      help: false,
    };

    const wrapper = mount(
      <BrowserRouter>
        <PackageList packages={props.packages} />
      </BrowserRouter>
    );

    // package count
    expect(wrapper.find('Package')).toHaveLength(3);
  });
});
