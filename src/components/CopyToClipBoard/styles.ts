import styled from 'react-emotion';

import IconButton from '../primitives/IconButton';

export const ClipBoardCopy = styled('div')`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ClipBoardCopyText = styled('span')`
  && {
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    height: 21px;
  }
`;

export const CopyIcon = styled(IconButton)`
  && {
    margin: 0 0 0 10px;
  }
`;
