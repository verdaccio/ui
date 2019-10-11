import React, { forwardRef } from 'react';
import { default as MaterialUIListItem, ListItemProps } from '@material-ui/core/ListItem';

type ListItemRef = HTMLLIElement;

const ListItem = forwardRef<ListItemRef, Omit<ListItemProps, 'button'>>(function ListItem(props, ref) {
  return <MaterialUIListItem {...props} innerRef={ref} />;
});

export default ListItem;
