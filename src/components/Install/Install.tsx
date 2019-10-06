import React, { useContext } from 'react';
import styled from 'react-emotion';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import { DetailContext } from '../../pages/Version';
import { fontWeight } from '../../utils/styles/sizes';

import InstallListItem, { DependencyManager } from './InstallListItem';

const Heading = styled(Typography)({
  fontWeight: fontWeight.bold,
  textTransform: 'capitalize',
});

const Install: React.FC = () => {
  const detailContext = useContext(DetailContext);

  const { packageMeta, packageName } = detailContext;

  if (!packageMeta || !packageName) {
    return null;
  }

  return (
    <List data-testid={'installList'} subheader={<Heading variant={'subtitle1'}>{'Installation'}</Heading>}>
      <InstallListItem dependencyManager={DependencyManager.NPM} packageName={packageName} />
      <InstallListItem dependencyManager={DependencyManager.YARN} packageName={packageName} />
      <InstallListItem dependencyManager={DependencyManager.PNPM} packageName={packageName} />
    </List>
  );
};

export default Install;
