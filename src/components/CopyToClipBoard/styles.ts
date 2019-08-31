import IconButton from '@material-ui/core/IconButton';
import styled from 'react-emotion';

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
    height: '21px',
  },
});

export const CopyIcon = styled(IconButton)({});
