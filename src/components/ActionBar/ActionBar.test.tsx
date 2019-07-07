import React from 'react';
import { shallow } from 'enzyme';

describe('<ActionBar /> component', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('should render the component in default state', () => {
    const packageMeta = {
      latest: {
        homepage: 'https://verdaccio.tld',
        bugs: {
          url: 'https://verdaccio.tld/bugs',
        },
        dist: {
          tarball: 'https://verdaccio.tld/download'
        },
      },
    };

    jest.doMock('../../pages/version/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const ActionBar = require('./ActionBar').default;
    const wrapper = shallow(<ActionBar />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('when there is no action bar data', () => {
    const packageMeta = {
      latest: {},
    };

    jest.doMock('../../pages/version/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const ActionBar = require('./ActionBar').default;
    const wrapper = shallow(<ActionBar />);
    expect(wrapper.html()).toEqual('');
  });
});
