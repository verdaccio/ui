import React, { Component, ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';

import { VersionPageConsumerProps, DetailContextConsumer } from '../../pages/Version';
import Avatar from '../../muiComponents/Avatar';
import List from '../../muiComponents/List';
import npm from '../Install/img/npm.svg';

import { Heading, EngineListItem } from './styles';
// @ts-ignore
import node from './img/node.png';

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

  private renderListItems = (heading: string, text: string) => {
    return (
      <List subheader={<Heading variant={'subtitle1'}>{text.split('-').join(' ')}</Heading>}>
        <EngineListItem button={true}>
          {ICONS[text]}
          <ListItemText primary={heading} />
        </EngineListItem>
      </List>
    );
  };
}

export default Engine;
