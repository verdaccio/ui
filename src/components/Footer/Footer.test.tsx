import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Footer from './Footer';

jest.mock('../../../package.json', () => ({
  version: '4.0.0-alpha.3',
}));

describe('<Footer /> component', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    window.VERDACCIO_VERSION = 'v.1.0.0';
    wrapper = mount(<Footer />);
    delete window.VERDACCIO_VERSION;
  });

  test('should load the initial state of Footer component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
