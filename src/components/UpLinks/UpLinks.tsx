import React, { ReactElement } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { DetailContextConsumer } from '../../pages/version/Version';
import NoItems from '../NoItems';
import { formatDateDistance } from '../../utils/package';

import { Heading, Spacer, ListItemText } from './styles';

class UpLinks extends React.PureComponent<{}> {
  public render(): ReactElement<HTMLElement> {
    return (
      <DetailContextConsumer>
        {context => {
          return (
            context &&
            context.packageMeta &&
            context.packageMeta &&
            context.packageMeta._uplinks &&
            context.packageMeta.latest &&
            this.renderContent(context.packageMeta._uplinks, context.packageMeta.latest)
          );
        }}
      </DetailContextConsumer>
    );
  }

  public renderUpLinksList = uplinks => (
    <List>
      {Object.keys(uplinks)
        .reverse()
        .map(name => (
          <ListItem key={name}>
            <ListItemText>{name}</ListItemText>
            <Spacer />
            <ListItemText>{`${formatDateDistance(uplinks[name].fetched)} ago`}</ListItemText>
          </ListItem>
        ))}
    </List>
  );

  public renderContent(uplinks, { name }): ReactElement<HTMLElement> {
    if (Object.keys(uplinks).length > 0) {
      return (
        uplinks && (
          <>
            <Heading variant="subtitle1">Uplinks</Heading>
            {this.renderUpLinksList(uplinks)}
          </>
        )
      );
    }
    return <NoItems text={`${name} has no uplinks.`} />;
  }
}

export default UpLinks;
