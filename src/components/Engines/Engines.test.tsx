import React from 'react';
import { shallow } from 'enzyme';

jest.mock('./img/node.png', () => '');
jest.mock('../Install/img/npm.svg', () => '');

describe('<Engines /> component', () => {
  beforeEach(() => {
    jest.resetModules();
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

    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Engines = require('./Engines').default;
    const wrapper = shallow(<Engines />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component when there is no engine key in package meta', () => {
    const packageMeta = {
      latest: {},
    };

    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Engines = require('./Engines').default;
    const wrapper = shallow(<Engines />);
    expect(wrapper.html()).toEqual('');
  });

  test('should render the component when there is no keys in engine in package meta', () => {
    const packageMeta = {
      latest: {
        engines: {},
      },
    };

    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Engines = require('./Engines').default;
    const wrapper = shallow(<Engines />);
    expect(wrapper.html()).toEqual('');
  });
});
