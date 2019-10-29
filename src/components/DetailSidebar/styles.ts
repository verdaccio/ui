import styled from 'react-emotion';

import ListItem from '../../muiComponents/ListItem';
import ListItemText from '../../muiComponents/ListItemText';

export const TitleListItem = styled(ListItem)(`
padding: 0 0.5rem;
&:hover {
  border-radius: 4px;
}
`);

export const TitleListItemText = styled(ListItemText)({
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: '8px',
});

export const PackageDescription = styled('span')({
  display: 'block',
});

export const PackageVersion = styled('span')({
  display: 'block',
});
