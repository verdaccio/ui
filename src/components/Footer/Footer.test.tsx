
import React from 'react';
import { mount } from 'enzyme';

import Footer from './Footer';

jest.mock('../../../package.json', () => ({
  version: '4.0.0-alpha.3'
}));

describe('<Footer /> component', () => {
  let wrapper;
  beforeEach(() => {
    // @ts-ignore : Property 'VERDACCIO_VERSION' does not exist on type 'Window'
    window.VERDACCIO_VERSION = 'v.1.0.0';
    wrapper = mount(<Footer />);
      // @ts-ignore : Property 'VERDACCIO_VERSION' does not exist on type 'Window'
    delete window.VERDACCIO_VERSION;
  });

  test('should load the initial state of Footer component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
