/**
 * @prettier
 */

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import { Theme } from '@material-ui/core/styles';
import { withRouter, RouteComponentProps } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacings.giga,
    width: '100%    ',
  },
  list: {
    paddingTop: 0,
    paddingBottom: 0,
    color: theme.colors.primary,
  },
}));

// TODO -> add translations
// TODO -> Add router types in handleGoTo method
const NotFoundGoToList: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyles();
  const handleGoTo = (to: string) => () => {
    history.push(to);
  };
  return (
    <Card className={classes.root}>
      <List className={classes.list} style={{ padding: 0 }}>
        <ListItem divider button onClick={handleGoTo('/')}>
          {'Home'}
        </ListItem>
        <ListItem button onClick={() => history.goBack()}>
          {'Back'}
        </ListItem>
      </List>
    </Card>
  );
};

export default withRouter(NotFoundGoToList);
