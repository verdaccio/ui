
import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../../../src/webui/components/Footer/index';

jest.mock('../../../../package.json', () => ({
    version: '4.0.0-alpha.3'
}));

describe('<Footer /> component', () => {
    let wrapper;
    beforeEach(() => {
        window.VERDACCIO_VERSION = 'v.1.0.0';
        wrapper = mount(<Footer />);
        delete window.VERDACCIO_VERSION;
    });

    test('should load the initial state of Footer component', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
});
