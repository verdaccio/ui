import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

import Icon from '../Icon';
import Box from '../../muiComponents/Box';
import { Theme } from '../../design-tokens/theme';

interface Props {
  language: string;
}

const LanguageSwitchMenuItemContent = ({ language }: Props) => {
  const { t } = useTranslation();

  switch (language.toLowerCase()) {
    case 'en-us':
      return (
        <StyledBox display="grid">
          <Icon name="usa" size="md" />
          {t('lng.english')}
        </StyledBox>
      );
    case 'pt-br':
      return (
        <StyledBox display="grid">
          <Icon name="brazil" size="md" />
          {t('lng.portuguese')}
        </StyledBox>
      );
    case 'de-de':
      return (
        <StyledBox display="grid">
          <Icon name="germany" size="md" />
          {t('lng.german')}
        </StyledBox>
      );
    case 'es-es':
      return (
        <StyledBox display="grid">
          <Icon name="spain" size="md" />
          {t('lng.spanish')}
        </StyledBox>
      );
    case 'zh-cn':
      return (
        <StyledBox display="grid">
          <Icon name="china" size="md" />
          {t('lng.chinese')}
        </StyledBox>
      );
    default:
      return null;
  }
};

export default LanguageSwitchMenuItemContent;

const StyledBox = styled(Box)(({ theme }: Theme) => ({
  gridGap: theme?.spacing(0.5),
  gridTemplateColumns: '20px 1fr',
  alignItems: 'center',
}));
