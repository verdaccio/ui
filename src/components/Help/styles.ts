import Card from '@material-ui/core/Card';
import styled from 'react-emotion';

import { default as Typography } from '../../muiComponents/Heading';

export const CardStyled = styled(Card)({
  '&&': {
    width: '600px',
    margin: 'auto',
  },
});

export const HelpTitle = styled(Typography)({
  '&&': {
    marginBottom: '20px',
  },
});
