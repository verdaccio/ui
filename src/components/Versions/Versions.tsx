import React, { ReactElement } from 'react';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

import { DetailContextConsumer } from '../../pages/Version';
import { formatDateDistance } from '../../utils/package';
import { DIST_TAGS } from '../../../lib/constants';

import { Heading, Spacer, ListItemText } from './styles';

const NOT_AVAILABLE = 'Not available';

class Versions extends React.PureComponent {
  public render(): ReactElement<HTMLDivElement> {
    return (
      <DetailContextConsumer>
        {context => {
          return context && context.packageMeta && this.renderContent(context.packageMeta, context.packageName);
        }}
      </DetailContextConsumer>
    );
  }

  public renderPackageList = (packages: {}, timeMap: Record<string, {}> = {}, packageName): ReactElement<HTMLDivElement> => {
    return (
      <List dense={true}>
        {Object.keys(packages)
          .reverse()
          .map(version => (
            <ListItem className="version-item" key={version}>
              <Link to={`/-/web/detail/${packageName}/v/${version}`}>
                <ListItemText>{version}</ListItemText>
              </Link>
              <Spacer />
              <ListItemText>{timeMap[version] ? `${formatDateDistance(timeMap[version])} ago` : NOT_AVAILABLE}</ListItemText>
            </ListItem>
          ))}
      </List>
    );
  };

  public renderTagList = (packages: {}): ReactElement<HTMLDivElement> => {
    return (
      <List dense={true}>
        {Object.keys(packages)
          .reverse()
          .map(tag => (
            <ListItem className="version-item" key={tag}>
              <ListItemText>{tag}</ListItemText>
              <Spacer />
              <ListItemText>{packages[tag]}</ListItemText>
            </ListItem>
          ))}
      </List>
    );
  };

  public renderContent(packageMeta, packageName): ReactElement<HTMLDivElement> {
    const { versions = {}, time: timeMap = {}, [DIST_TAGS]: distTags = {} } = packageMeta;

    return (
      <>
        {distTags && (
          <>
            <Heading variant="subtitle1">{'Current Tags'}</Heading>
            {this.renderTagList(distTags)}
          </>
        )}
        {versions && (
          <>
            <Heading variant="subtitle1">{'Version History'}</Heading>
            {this.renderPackageList(versions, timeMap, packageName)}
          </>
        )}
      </>
    );
  }
}

export default Versions;
