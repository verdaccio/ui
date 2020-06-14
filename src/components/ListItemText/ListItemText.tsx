import React, { forwardRef } from 'react';
import { default as MaterialUIListItemText, ListItemTextProps } from '@material-ui/core/ListItemText';

type ListItemTextRef = HTMLDivElement;

const ListItemText = forwardRef<ListItemTextRef, ListItemTextProps>(function ListItemText(props, ref) {
  return <MaterialUIListItemText {...props} ref={ref} />;
});

export default ListItemText;
