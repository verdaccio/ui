/**
 * @prettier
 */

import React, { ReactNode } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

interface Props {
  children: ReactNode;
}

const useStyles = makeStyles({
  listItem: {
    alignItems: 'flex-start',
  },
  interpunct: {
    paddingRight: 8,
  },
});

const OrderedList: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <List>
      {React.Children.map(children, (child, index) => (
        <ListItem key={index} className={classes.listItem}>
          <Typography variant="body2" className={classes.interpunct}>{`${index + 1}.`}</Typography>
          {child}
        </ListItem>
      ))}
    </List>
  );
};
export default OrderedList;
