import { default as MuiListItem, ListItemProps } from '@material-ui/core/ListItem';
import React from 'react';

const ListItem: React.FC<Omit<ListItemProps, 'button'>> = props => <MuiListItem {...props} />;

export default ListItem;
