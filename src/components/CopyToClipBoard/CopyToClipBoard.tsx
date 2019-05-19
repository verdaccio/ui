

import Tooltip from '@material-ui/core/Tooltip';
import FileCopy from '@material-ui/icons/FileCopy';
import React from 'react';

import { copyToClipBoardUtility } from '../../utils/cli-utils';
import { TEXT } from '../../utils/constants';

import { ClipBoardCopy, ClipBoardCopyText, CopyIcon } from './styles';
import { IProps } from './types';

const CopyToClipBoard: React.FC<IProps> = ({ text, children }) => {
  const renderToolTipFileCopy = () => (
    <Tooltip disableFocusListener title={TEXT.CLIPBOARD_COPY}>
      <CopyIcon onClick={copyToClipBoardUtility(text)}>
        <FileCopy />
      </CopyIcon>
    </Tooltip>
  );

  const renderText = (children: any) => {
    if (children) {
      return <ClipBoardCopyText>{children}</ClipBoardCopyText>;
    }

    return <ClipBoardCopyText>{text}</ClipBoardCopyText>;
  };
  return (
    <ClipBoardCopy>
      {renderText(children)}
      {renderToolTipFileCopy()}
    </ClipBoardCopy>
  );
};

export default CopyToClipBoard;
