import React from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

import Text from '../../../../components/Text';
import { Theme } from '../../../../design-tokens/theme';

import { DeveloperType } from './types';

interface Props {
  type: DeveloperType;
}

const DevelopersTitle: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation();
  switch (type) {
    case DeveloperType.CONTRIBUTORS:
      return <StyledText variant={'subtitle1'}>{t('sidebar.contributors.title')}</StyledText>;
    case DeveloperType.MAINTAINERS:
      return <StyledText variant={'subtitle1'}>{t('sidebar.maintainers.title')}</StyledText>;
      return null;
  }
};

export default DevelopersTitle;

const StyledText = styled(Text)<{ theme?: Theme }>(({ theme }) => ({
  fontWeight: theme && theme.fontWeight.bold,
  marginBottom: '10px',
}));
