/**
 * @prettier
 */

import React from 'react';
import FileCopy from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import { ClipBoardCopy, ClipBoardCopyText } from './styles';
import { copyToClipBoardUtility } from '../../utils/cli-utils';
import { TEXT } from '../../utils/constants';

interface Props {
  text: string;
}

const CopyToClipBoard: React.FC<Props> = ({ text }) => {
  const renderToolTipFileCopy = () => (
    <Tooltip disableFocusListener={true} title={TEXT.CLIPBOARD_COPY}>
      <IconButton onClick={copyToClipBoardUtility(text)}>
        <FileCopy />
      </IconButton>
    </Tooltip>
  );
  return (
    <ClipBoardCopy>
      <ClipBoardCopyText style={{ margin: '0 0 0 10px' }}>{text}</ClipBoardCopyText>
      {renderToolTipFileCopy()}
    </ClipBoardCopy>
  );
};

export default CopyToClipBoard;
