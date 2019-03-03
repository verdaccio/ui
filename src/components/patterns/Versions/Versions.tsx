/**
 * @prettier
 */

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';

import React from 'react';

import { DetailContext, DetailContextProps } from '../../pages/version/Version';
import { formatDateDistance } from '../../utils/package';
import { Spacer } from './styles';
import { Version, DistTag } from './types';

const Versions: React.FC = () => {
  const renderPackageList = (versions: Version) => (
    <List>
      {Object.keys(versions)
        .reverse()
        .map(version => (
          <ListItem key={version}>
            <ListItemText>{version}</ListItemText>
            <Spacer />
            <ListItemText>{`${formatDateDistance('2017-10-26T09:03:15.044Z')} ago`}</ListItemText>
          </ListItem>
        ))}
    </List>
  );

  const renderDistTagsList = (distTags: DistTag) => (
    <List>
      {Object.keys(distTags)
        .reverse()
        .map(distTag => (
          <ListItem key={distTag}>
            <ListItemText>{distTag}</ListItemText>
            <Spacer />
            <ListItemText>{distTags[distTag]}</ListItemText>
          </ListItem>
        ))}
    </List>
  );

  const renderContent: React.FC<DetailContextProps> = ({ packageMeta: { versions, distTags } }) => (
    <>
      {distTags && (
        <>
          <Typography>{'Current Tags'}</Typography>
          {renderDistTagsList(distTags)}
        </>
      )}
      {versions && (
        <>
          <Typography>{'Version History'}</Typography>
          {renderPackageList(versions)}
        </>
      )}
    </>
  );

  return <DetailContext.Consumer>{context => context && renderContent(context)}</DetailContext.Consumer>;
};

export default Versions;
