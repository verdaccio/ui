import React from 'react';
import { mount } from 'enzyme';

import CopyToClipBoard from './CopyToClipBoard';
import { CopyIcon } from './styles';

describe('<CopyToClipBoard /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CopyToClipBoard text={'copy text'} />);
  });

  test('render the component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should call the DOM APIs for copy to clipboard utility', () => {
    const event = {
      preventDefault: jest.fn(),
    };

    // @ts-ignore: Property 'getSelection' does not exist on type 'Global'.
    global.getSelection = jest.fn(() => ({
      removeAllRanges: () => {},
      addRange: () => {},
    }));

    // @ts-ignore: Property 'document/getSelection' does not exist on type 'Global'.
    const { document, getSelection } = global;

    wrapper.find(CopyIcon).simulate('click', event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(document.createRange).toHaveBeenCalled();
    expect(getSelection).toHaveBeenCalled();
    expect(document.execCommand).toHaveBeenCalledWith('copy');
  });
});
