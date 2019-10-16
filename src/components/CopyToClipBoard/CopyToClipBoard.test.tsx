import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { copyToClipBoardUtility } from '../../utils/cli-utils';

import CopyToClipBoard from './CopyToClipBoard';
import { CopyIcon } from './styles';

jest.mock('../../utils/cli-utils');

describe('<CopyToClipBoard /> component', () => {
  let wrapper: ReactWrapper;
  const copyText = 'copy text';

  beforeEach(() => {
    wrapper = mount(<CopyToClipBoard text={copyText} />);
  });

  test('render the component', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should call the copyToClipBoardUtility for copy to clipboard utility', () => {
    wrapper.find(CopyIcon).simulate('click');
    expect(copyToClipBoardUtility).toHaveBeenCalledWith(copyText);
  });
});
