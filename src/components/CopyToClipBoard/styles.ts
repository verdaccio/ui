import styled from 'react-emotion';

import IconButton from '../../muiComponents/IconButton';

export const ClipBoardCopy = styled('div')({
  '&&': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const ClipBoardCopyText = styled('span')({
  '&&': {
    display: 'inline-block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    height: 'auto',
    maxHeight: '30px',
    fontWeight: 'normal',
  },
});

export const CopyIcon = styled(IconButton)({});
