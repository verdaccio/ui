import React from 'react';

import CopyToClipBoard from 'verdaccio-ui/components/CopyToClipBoard';
import { copyToClipBoardUtility } from 'verdaccio-ui/utils/cli-utils';
import { render, fireEvent } from 'verdaccio-ui/utils/test-react-testing-library';

jest.mock('verdaccio-ui/utils/cli-utils');

describe('<CopyToClipBoard /> component', () => {
  test('should call the copyToClipBoardUtility for copy to clipboard utility', () => {
    const copyText = 'copy text';
    const wrapper = render(<CopyToClipBoard text={copyText} />);
    fireEvent.click(wrapper.getByTestId('copy-icon'));
    expect(copyToClipBoardUtility).toHaveBeenCalledWith(copyText);
  });
});
