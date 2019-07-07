import React, { Component, ReactElement } from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

import Avatar from '../primitives/Avatar';

import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/version/Version';
import { Heading, EngineListItem } from './styles';
// @ts-ignore
import node from './img/node.png';
import npm from '../Install/img/npm.svg';

const ICONS = {
  'node-JS': <Avatar src={node} />,
  'NPM-version': <Avatar src={npm} />,
};

class Engine extends Component {
  public render(): ReactElement<HTMLElement> {
    return (
      <DetailContextConsumer>
        {context => {
          return this.renderEngine(context as VersionPageConsumerProps);
        }}
      </DetailContextConsumer>
    );
  }

  private renderEngine = ({ packageMeta }): ReactElement<HTMLElement> | null => {
    const { engines } = packageMeta.latest;
    if (!engines) {
      return null;
    }

    const engineDict = {
      'node-JS': engines.node,
      'NPM-version': engines.npm,
    };

    const accumulator: React.ReactNode[] = [];
    const items = Object.keys(engineDict).reduce((markup, text, key) => {
      const heading = engineDict[text];
      if (heading) {
        markup.push(
          <Grid item={true} key={key} xs={6}>
            {this.renderListItems(heading, text)}
          </Grid>
        );
      }
      return markup;
    }, accumulator);

    if (items.length < 1) {
      return null;
    }

    return <Grid container={true}>{items}</Grid>;
  };

  private renderListItems = (heading, text) => {
    return (
      <List subheader={<Heading variant={'subtitle1'}>{text.split('-').join(' ')}</Heading>}>
        <EngineListItem>
          {ICONS[text]}
          <ListItemText primary={heading} />
        </EngineListItem>
      </List>
    );
  };
}

export default Engine;
