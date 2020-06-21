import { ReactWrapper } from 'enzyme';
import React from 'react';
import { copyToClipBoardUtility } from 'verdaccio-ui/utils/cli-utils';
import { mount } from 'verdaccio-ui/utils/test-enzyme';

import CopyToClipBoard from './CopyToClipBoard';
import { CopyIcon } from './styles';

jest.mock('verdaccio-ui/utils/cli-utils');

describe('<CopyToClipBoard /> component', () => {
  let wrapper: ReactWrapper;
  const copyText = 'copy text';

  beforeEach(() => {
    wrapper = mount(<CopyToClipBoard text={copyText} />);
  });

  test('should load the component in default state', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should call the copyToClipBoardUtility for copy to clipboard utility', () => {
    wrapper.find(CopyIcon).simulate('click');
    expect(copyToClipBoardUtility).toHaveBeenCalledWith(copyText);
  });
});
