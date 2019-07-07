import React from 'react';
import { shallow } from 'enzyme';

describe('<Author /> component', () => {
  beforeEach(() => {
    jest.resetModules();
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
      },
    };

    jest.doMock('../../pages/version/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Author = require('./Author').default;
    const wrapper = shallow(<Author />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the component when there is no author information available', () => {
    const packageMeta = {
      latest: {
        name: 'verdaccio',
        version: '4.0.0',
      },
    };

    jest.doMock('../../pages/version/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Author = require('./Author').default;
    const wrapper = shallow(<Author />);
    expect(wrapper.html()).toEqual('');
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
      },
    };

    jest.doMock('../../pages/version/Version', () => ({
      DetailContextConsumer: component => {
        return component.children({ packageMeta });
      },
    }));

    const Author = require('./Author').default;
    const wrapper = shallow(<Author />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
