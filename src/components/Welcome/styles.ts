import Typography from '@material-ui/core/Typography';
import styled from 'react-emotion';

export const Container = styled('div')({
  '&&': {
    width: '100%',
    maxWidth: '64rem',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export const Title = styled(Typography)({
  '&&': {
    margin: '.5em 0',
    textAlign: 'center',
  },
});

export const Details = styled(Typography)({
  '&&': {
    maxWidth: '34rem',
    textAlign: 'center',
  },
});
