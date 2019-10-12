import styled from 'react-emotion';
import { default as MuiFab } from '@material-ui/core/Fab';

import colors from '../../utils/styles/colors';
import { fontWeight } from '../../utils/styles/sizes';
import Text from '../../muiComponents/Text';

export const Details = styled('span')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Content = styled('div')({
  margin: '10px 0 10px 0',
  display: 'flex',
  flexWrap: 'wrap',
  '> *': {
    margin: '5px',
  },
});

export const StyledText = styled(Text)({
  fontWeight: fontWeight.bold,
  marginBottom: '10px',
  textTransform: 'capitalize',
});

export const Fab = styled(MuiFab)({
  '&&': {
    backgroundColor: colors.primary,
    color: colors.white,
  },
});
