import styled from '@emotion/styled';
import { withStyles } from '@material-ui/core/styles';
import LanguageIcon from '@material-ui/icons/Language';
import i18next, { TFunctionKeys } from 'i18next';
import React, { useCallback, useContext, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AutoComplete } from '@verdaccio/components/AutoComplete/AutoCompleteV2';
import Icon from '@verdaccio/components/Icon';
import MenuItem from '@verdaccio/components/MenuItem';
import { Theme } from '@verdaccio/design-tokens/theme';
import ThemeContext from '@verdaccio/design-tokens/ThemeContext';

import { Language } from '../../../../i18n/config';

const lngDetails: Record<Language, { translation: TFunctionKeys; icon: React.ComponentProps<typeof Icon>['name'] }> = {
  'fr-FR': {
    translation: 'lng.french',
    icon: 'france',
  },
  'pt-BR': {
    translation: 'lng.portuguese',
    icon: 'brazil',
  },
  'de-DE': {
    translation: 'lng.german',
    icon: 'germany',
  },
  'es-ES': {
    translation: 'lng.spanish',
    icon: 'spain',
  },
  'zh-CN': {
    translation: 'lng.chinese',
    icon: 'china',
  },
  'uk-UA': {
    translation: 'lng.ukraine',
    icon: 'ukraine',
  },
  'km-KH': {
    translation: 'lng.khmer',
    icon: 'khmer',
  },
  'ja-JP': {
    translation: 'lng.japanese',
    icon: 'japan',
  },
  'en-US': {
    translation: 'lng.english',
    icon: 'usa',
  },
  'cs-CZ': {
    translation: 'lng.czech',
    icon: 'czech',
  },
  'zh-TW': {
    translation: 'lng.chineseTraditional',
    icon: 'taiwan',
  },
};

const LanguageSwitch = () => {
  const themeContext = useContext(ThemeContext);
  const [languages] = useState<Array<Language>>(Object.keys(i18next.options?.resources || {}) as Array<Language>);
  const { t } = useTranslation();

  if (!themeContext) {
    throw Error(t('theme-context-not-correct-used'));
  }

  const currentLanguage = themeContext.language;

  const switchLanguage = useCallback(
    ({ language }: { language: Language }) => {
      themeContext.setLanguage(language);
    },
    [themeContext]
  );

  const getCurrentLngDetails = useCallback(
    (language: Language) => {
      const { icon, translation } = lngDetails[language] || lngDetails['en-US'];
      return {
        icon,
        translation: t(translation),
      };
    },
    [t]
  );

  const options = useMemo(
    () =>
      languages.map(language => {
        const { icon, translation } = getCurrentLngDetails(language);
        return {
          language,
          icon,
          translation,
        };
      }),
    [languages, getCurrentLngDetails]
  );

  const option = useCallback(
    ({ icon, translation }: ReturnType<typeof getCurrentLngDetails>) => (
      <StyledMenuItem component="div">
        <Icon name={icon} size="md" />
        {translation}
      </StyledMenuItem>
    ),
    [getCurrentLngDetails]
  );

  const optionLabel = useCallback(({ translation }: ReturnType<typeof getCurrentLngDetails>) => translation, [
    getCurrentLngDetails,
  ]);

  return (
    <Wrapper>
      <AutoComplete
        defaultValue={getCurrentLngDetails(currentLanguage).translation}
        getOptionLabel={optionLabel}
        hasClearIcon={true}
        inputStartAdornment={<StyledLanguageIcon />}
        onClick={switchLanguage}
        options={options}
        renderOption={option}
        variant="outlined"
      />
    </Wrapper>
  );
};

export default LanguageSwitch;

const StyledLanguageIcon = styled(LanguageIcon)<{ theme?: Theme }>(({ theme }) => ({
  color: theme?.palette.white,
}));

const Wrapper = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  width: 220,
  display: 'none',
  [`@media screen and (min-width: ${theme && theme.breakPoints.medium}px)`]: {
    display: 'inline-block',
  },
}));

const StyledMenuItem = withStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    cursor: 'pointer',
    gridGap: theme?.spacing(0.5),
    gridTemplateColumns: '20px 1fr',
    alignItems: 'center',
    '&:first-child': {
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
  },
}))(MenuItem);
