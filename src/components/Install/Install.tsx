import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { DetailContext } from '../../pages/Version';
import Text from '../../muiComponents/Text';
import List from '../../muiComponents/List';
import { Theme } from '../../design-tokens/theme';

import InstallListItem, { DependencyManager } from './InstallListItem';

const StyledText = styled(Text)<{ theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight.bold,
  textTransform: 'capitalize',
}));

const Install: React.FC = () => {
  const detailContext = useContext(DetailContext);

  const { packageMeta, packageName } = detailContext;

  if (!packageMeta || !packageName) {
    return null;
  }

  return (
    <List data-testid={'installList'} subheader={<StyledText variant={'subtitle1'}>{'Installation'}</StyledText>}>
      <InstallListItem dependencyManager={DependencyManager.NPM} packageName={packageName} />
      <InstallListItem dependencyManager={DependencyManager.YARN} packageName={packageName} />
      <InstallListItem dependencyManager={DependencyManager.PNPM} packageName={packageName} />
    </List>
  );
};

export default Install;
