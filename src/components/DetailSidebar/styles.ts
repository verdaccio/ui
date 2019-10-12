import styled from 'react-emotion';
import ListItemText from '@material-ui/core/ListItemText';

import ListItem from '../../muiComponents/ListItem';

export const TitleListItem = styled(ListItem)({
  paddingLeft: 0,
  paddingRight: 0,
  paddingBottom: 0,
});

export const TitleListItemText = styled(ListItemText)({
  '&&': {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: '8px',
  },
});

export const PackageDescription = styled('span')({
  '&&': {
    display: 'block',
  },
});

export const PackageVersion = styled('span')({
  '&&': {
    display: 'block',
  },
});
