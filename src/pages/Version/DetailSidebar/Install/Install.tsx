import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import { DetailContext } from '../..';
import Text from '../../../../components/Text';
import List from '../../../../components/List';
import { Theme } from '../../../../design-tokens/theme';

import InstallListItem, { DependencyManager } from './InstallListItem';

const StyledText = styled(Text)<{ theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight.bold,
  textTransform: 'capitalize',
}));

const Install: React.FC = () => {
  const { t } = useTranslation();
  const detailContext = useContext(DetailContext);

  const { packageMeta, packageName } = detailContext;

  if (!packageMeta || !packageName) {
    return null;
  }

  return (
    <List
      data-testid={'installList'}
      subheader={<StyledText variant={'subtitle1'}>{t('sidebar.installation.title')}</StyledText>}>
      <InstallListItem dependencyManager={DependencyManager.NPM} packageName={packageName} />
      <InstallListItem dependencyManager={DependencyManager.YARN} packageName={packageName} />
      <InstallListItem dependencyManager={DependencyManager.PNPM} packageName={packageName} />
    </List>
  );
};

export default Install;
