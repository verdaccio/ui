import styled from 'react-emotion';

import { default as Typography } from '../../muiComponents/Heading';
import Card from '../../muiComponents/Card';

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
