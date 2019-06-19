import { DetailContextConsumer } from '../../pages/version/Version';
import { formatDateDistance } from '../../utils/package';
import { Heading, Spacer, ListItemText } from './styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React, { ReactElement } from 'react';
import { DIST_TAGS } from '../../../lib/constants';

const NOT_AVAILABLE = 'Not available';

class Versions extends React.PureComponent<any> {
  public render(): ReactElement<HTMLDivElement> {
    return (
      <DetailContextConsumer>
        {context => {
          return context && context.packageMeta && this.renderContent(context.packageMeta);
        }}
      </DetailContextConsumer>
    );
  }

  public renderPackageList = (packages: any, isVersion: boolean = false, timeMap: Record<string, any> = {}): ReactElement<HTMLDivElement> => {
    return (
      <List>
        {Object.keys(packages)
          .reverse()
          .map(version => (
            <ListItem className="version-item" key={version}>
              <ListItemText>{version}</ListItemText>
              <Spacer />
              {isVersion && <ListItemText>{timeMap[version] ? `${formatDateDistance(timeMap[version])} ago` : NOT_AVAILABLE}</ListItemText>}
              {isVersion === false && <ListItemText>{packages[version]}</ListItemText>}
            </ListItem>
          ))}
      </List>
    );
  };

  public renderContent(packageMeta): ReactElement<HTMLDivElement> {
    const { versions = {}, time: timeMap = {}, [DIST_TAGS]: distTags = {} } = packageMeta;

    return (
      <>
        {distTags && (
          <>
            <Heading variant="subheading">{'Current Tags'}</Heading>
            {this.renderPackageList(distTags, false, timeMap)}
          </>
        )}
        {versions && (
          <>
            <Heading variant="subheading">{'Version History'}</Heading>
            {this.renderPackageList(versions, true, timeMap)}
          </>
        )}
      </>
    );
  }
}

export default Versions;
