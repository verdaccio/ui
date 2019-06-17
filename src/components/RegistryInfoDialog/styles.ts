import styled from 'react-emotion';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import colors from '../../utils/styles/colors';
import { fontSize } from '../../utils/styles/sizes';

export const Title = styled(DialogTitle)`
  && {
    background-color: ${colors.primary};
    color: ${colors.white};
    font-size: ${fontSize.lg};
  }
`;

export const Content = styled(DialogContent)`
  && {
    padding: 0 24px;
  }
`;
