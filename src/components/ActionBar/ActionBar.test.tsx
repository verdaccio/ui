import React from 'react';
import { mount, shallow } from 'enzyme';

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
          tarball: 'https://verdaccio.tld/download',
        },
      },
    };

    jest.doMock('../../pages/Version', () => ({
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

    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const ActionBar = require('./ActionBar').default;
    const wrapper = shallow(<ActionBar />);
    // FIXME: this only renders the DetailContextConsumer, thus
    // the wrapper will be always empty
    expect(wrapper.html()).toEqual('');
  });

  test('when there is a button to download a tarball', () => {
    const packageMeta = {
      latest: {
        dist: {
          tarball: 'http://localhost:8080/bootstrap/-/bootstrap-4.3.1.tgz',
        },
      },
    };

    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const ActionBar = require('./ActionBar').default;
    const wrapper = mount(<ActionBar />);
    expect(wrapper.html()).toMatchSnapshot();

    const button = wrapper.find('button');
    expect(button).toHaveLength(1);
  });
});
