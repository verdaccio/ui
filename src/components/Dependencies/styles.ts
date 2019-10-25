import styled from 'react-emotion';
import Card from '@material-ui/core/Card';

import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';
import Chip from '../../muiComponents/Chip';

export const CardWrap = styled(Card)({
  '&&': {
    margin: '0 0 16px',
  },
});

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

export const Tags = styled('div')({
  '&&': {
    display: 'flex',
    justifyContent: 'start',
    flexWrap: 'wrap',
    margin: '0 -5px',
  },
});

export const Tag = styled(Chip)({
  margin: '5px',
});
