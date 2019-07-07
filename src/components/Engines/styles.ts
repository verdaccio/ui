import styled from 'react-emotion';
import Typography from '@material-ui/core/Typography';

import ListItem from '../ListItem';

export const Heading = styled(Typography)`
  && {
    font-weight: 700;
    text-transform: capitalize;
  }
`;

export const EngineListItem = styled(ListItem)`
  && {
    padding-left: 0;
  }
`;
