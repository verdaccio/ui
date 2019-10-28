import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';

import { DetailContext } from '../../pages/Version';
import Avatar from '../../muiComponents/Avatar';
import List from '../../muiComponents/List';
import npm from '../Install/img/npm.svg';

import { StyledText, EngineListItem } from './styles';
import node from './img/node.png';

const Engine: React.FC = () => {
  const { packageMeta } = useContext(DetailContext);

  const engines = packageMeta && packageMeta.latest && packageMeta.latest.engines;

  if (!engines || (!engines.node && !engines.npm)) {
    return null;
  }

  /* eslint-disable react/jsx-max-depth */
  return (
    <Grid container={true}>
      {engines.node && (
        <Grid item={true} xs={6}>
          <List subheader={<StyledText variant={'subtitle1'}>{'node JS'}</StyledText>}>
            <EngineListItem button={true}>
              <Avatar src={node} />
              <ListItemText primary={engines.node} />
            </EngineListItem>
          </List>
        </Grid>
      )}

      {engines.npm && (
        <Grid item={true} xs={6}>
          <List subheader={<StyledText variant={'subtitle1'}>{'NPM version'}</StyledText>}>
            <EngineListItem button={true}>
              <Avatar src={npm} />
              <ListItemText primary={engines.npm} />
            </EngineListItem>
          </List>
        </Grid>
      )}
    </Grid>
  );
  /* eslint-enable react/jsx-max-depth */
};

export default Engine;
