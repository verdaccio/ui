import React from 'react';
import { shallow } from 'enzyme';

describe('<Version /> component', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('should render the component in default state', () => {
    const packageMeta = {
      versions: {
        '1.0.0': {
          version: '1.0.0',
        },
        '2.0.0': {
          version: '2.0.0',
        },
        '3.0.0': {
          version: '3.0.0',
        },
      },
      time: {
        '1.0.0': '2016-08-26T22:36:41.762Z',
        '2.0.0': '2017-08-26T22:36:41.762Z',
        '3.0.0': '2018-02-07T06:43:22.801Z',
      },
      'dist-tags': {
        latest: '3.0.0',
      },
    };

    jest.doMock('../../pages/version/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Version = require('./Versions').default;
    const wrapper = shallow(<Version />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
