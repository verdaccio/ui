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
// @ts-ignore
import { DIST_TAGS } from '../../../lib/constants';

const Versions: React.FC = () => {
  const renderPackageList = (packages: any, isVersion: boolean = false) => (
    <List>
      {Object.keys(packages)
        .reverse()
        .map(version => (
          <ListItem key={version}>
            <ListItemText>{version}</ListItemText>
            <Spacer />
            <ListItemText>{isVersion ? `${formatDateDistance('2017-10-26T09:03:15.044Z')} ago` : packages[version]}</ListItemText>
          </ListItem>
        ))}
    </List>
  );

  const renderContent: React.FC<DetailContextProps> = ({ packageMeta }) => {
    const distTags = packageMeta[DIST_TAGS];
    const versions = packageMeta.versions;
    return (
      <>
        {distTags && (
          <>
            <Typography variant={'subheading'}>{'Current Tags'}</Typography>
            {renderPackageList(distTags)}
          </>
        )}
        {versions && (
          <>
            <Typography variant={'subheading'}>{'Version History'}</Typography>
            {renderPackageList(versions, true)}
          </>
        )}
      </>
    );
  };

  return <DetailContext.Consumer>{context => context && renderContent(context)}</DetailContext.Consumer>;
};

export default Versions;
