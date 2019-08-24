import React from 'react';
import { shallow } from 'enzyme';

jest.mock('./img/git.png', () => '');

describe('<Repository /> component', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('should render the component in default state', () => {
    const packageMeta = {
      latest: {
        repository: {
          type: 'git',
          url: 'git+https://github.com/verdaccio/ui.git',
        },
      },
    };

    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Repository = require('./Repository').default;
    const wrapper = shallow(<Repository />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component in with no repository data', () => {
    const packageMeta = {
      latest: {},
    };

    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Repository = require('./Repository').default;
    const wrapper = shallow(<Repository />);
    expect(wrapper.html()).toEqual('');
  });

  test('should render the component in with invalid url', () => {
    const packageMeta = {
      latest: {
        repository: {
          type: 'git',
          url: 'git://github.com/verdaccio/ui.git',
        },
      },
    };

    jest.doMock('../../pages/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Repository = require('./Repository').default;
    const wrapper = shallow(<Repository />);
    expect(wrapper.html()).toEqual('');
  });
});
