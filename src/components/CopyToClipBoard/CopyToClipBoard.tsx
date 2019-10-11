import FileCopy from '@material-ui/icons/FileCopy';
import React from 'react';

import { copyToClipBoardUtility } from '../../utils/cli-utils';
import { TEXT } from '../../utils/constants';
import Tooltip from '../../muiComponents/Tooltip';

import { ClipBoardCopy, ClipBoardCopyText, CopyIcon } from './styles';

interface Props {
  text: string;
  children?: React.ReactNode;
}

const renderText = (text: string, children: React.ReactNode): JSX.Element => {
  if (children) {
    return <ClipBoardCopyText>{children}</ClipBoardCopyText>;
  }

  return <ClipBoardCopyText>{text}</ClipBoardCopyText>;
};

const renderToolTipFileCopy = (text: string): React.ReactElement<HTMLElement> => (
  <Tooltip disableFocusListener={true} title={TEXT.CLIPBOARD_COPY}>
    <CopyIcon onClick={copyToClipBoardUtility(text)}>
      <FileCopy />
    </CopyIcon>
  </Tooltip>
);

const CopyToClipBoard: React.FC<Props> = ({ text, children }) => {
  return (
    <ClipBoardCopy>
      {renderText(text, children)}
      {renderToolTipFileCopy(text)}
    </ClipBoardCopy>
  );
};

export default CopyToClipBoard;
