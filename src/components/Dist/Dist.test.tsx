import React from 'react';
import { shallow } from 'enzyme';

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
    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Dist = require('./Dist').default;
    const wrapper = shallow(<Dist />);
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
    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Dist = require('./Dist').default;
    const wrapper = shallow(<Dist />);
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
    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Dist = require('./Dist').default;
    const wrapper = shallow(<Dist />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
