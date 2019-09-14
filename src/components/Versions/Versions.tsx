import React, { ReactElement } from 'react';
import List from '@material-ui/core/List';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';

import { DetailContextConsumer } from '../../pages/Version';
import { formatDateDistance } from '../../utils/package';
import { DIST_TAGS } from '../../../lib/constants';

import { Heading, Spacer, ListItemText } from './styles';

export const NOT_AVAILABLE = 'Not available';
export const LABEL_CURRENT_TAGS = 'Current Tags';
export const LABEL_VERSION_HISTORY = 'Version History';

class Versions extends React.PureComponent {
  public render(): ReactElement<HTMLDivElement> {
    return (
      <DetailContextConsumer>
        {context => {
          const { packageMeta, packageName } = context;

          if (!packageMeta) {
            return null;
          }

          return this.renderContent(packageMeta, packageName);
        }}
      </DetailContextConsumer>
    );
  }

  public renderPackageList = (packages: {}, timeMap: Record<string, {}>, packageName): ReactElement<HTMLDivElement> => {
    return (
      <List dense={true}>
        {Object.keys(packages)
          .reverse()
          .map(version => (
            <ListItem className="version-item" key={version}>
              <Link component={RouterLink} to={`/-/web/detail/${packageName}/v/${version}`}>
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
            <Heading variant="subtitle1">{LABEL_CURRENT_TAGS}</Heading>
            {this.renderTagList(distTags)}
          </>
        )}
        {versions && (
          <>
            <Heading variant="subtitle1">{LABEL_VERSION_HISTORY}</Heading>
            {this.renderPackageList(versions, timeMap, packageName)}
          </>
        )}
      </>
    );
  }
}

export default Versions;
