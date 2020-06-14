import React from 'react';

import { mount } from '@verdaccio/utils/test-enzyme';

import { DetailContextProvider } from '../../context';

import Developers, { Fab } from './Developers';
import { DeveloperType } from './types';

describe('test Developers', () => {
  const packageMeta = {
    latest: {
      packageName: 'foo',
      version: '1.0.0',
      maintainers: [
        {
          name: 'dmethvin',
          email: 'dave.methvin@gmail.com',
        },
        {
          name: 'mgol',
          email: 'm.goleb@gmail.com',
        },
      ],
      contributors: [
        {
          name: 'dmethvin',
          email: 'dave.methvin@gmail.com',
        },
        {
          name: 'mgol',
          email: 'm.goleb@gmail.com',
        },
      ],
    },
  };

  test('should render the component with no items', () => {
    const packageMeta = {
      latest: {},
    };
    const wrapper = mount(
      // @ts-ignore
      <DetailContextProvider value={{ packageMeta }}>
        <Developers type={DeveloperType.MAINTAINERS} />
      </DetailContextProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should render the component for maintainers with items', () => {
    const wrapper = mount(
      // @ts-ignore
      <DetailContextProvider value={{ packageMeta }}>
        <Developers type={DeveloperType.MAINTAINERS} />
      </DetailContextProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should render the component for contributors with items', () => {
    const wrapper = mount(
      // @ts-ignore
      <DetailContextProvider value={{ packageMeta }}>
        <Developers type={DeveloperType.CONTRIBUTORS} />
      </DetailContextProvider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('should test onClick the component avatar', () => {
    const packageMeta = {
      latest: {
        packageName: 'foo',
        version: '1.0.0',
        contributors: [
          {
            name: 'dmethvin',
            email: 'dave.methvin@gmail.com',
          },
          {
            name: 'dmethvin2',
            email: 'dave2.methvin@gmail.com',
          },
        ],
      },
    };

    const wrapper = mount(
      // @ts-ignore
      <DetailContextProvider value={{ packageMeta }}>
        <Developers type={DeveloperType.CONTRIBUTORS} visibleMax={1} />
      </DetailContextProvider>
    );

    const item2 = wrapper.find(Fab);
    // TODO: I am not sure here how to verify the method inside the component was called.
    item2.simulate('click');
  });
});
