import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import styled from 'react-emotion';

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
