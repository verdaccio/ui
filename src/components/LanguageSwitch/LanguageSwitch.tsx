import React, { MouseEvent, useCallback, useState, useRef, useContext } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import i18next, { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { Language } from '../../../i18n/config';
import ThemeContext from '../../design-tokens/ThemeContext';
import Paper from '../../muiComponents/Paper';
import MenuItem from '../../muiComponents/MenuItem';
import Button from '../../muiComponents/Button';
import Tooltip from '../../muiComponents/Tooltip';
import Divider from '../../muiComponents/Divider';
import Box from '../../muiComponents/Box';
import { Theme } from '../../design-tokens/theme';
import Link from '../Link';
import Icon from '../Icon';

const VERDACCIO_UI_GITHUB_REPOSITORY = 'https://github.com/verdaccio/ui';

const getTranslatedCurrentLanguage = (
  t: TFunction
): { [key: string]: { translation: string; icon: React.ComponentProps<typeof Icon>['name'] } } => ({
  'en-us': {
    translation: t('lng.english'),
    icon: 'usa',
  },
  'fr-fr': {
    translation: t('lng.french'),
    icon: 'france',
  },
  'pt-br': {
    translation: t('lng.portuguese'),
    icon: 'brazil',
  },
  'de-de': {
    translation: t('lng.german'),
    icon: 'germany',
  },
  'es-es': {
    translation: t('lng.spanish'),
    icon: 'spain',
  },
  'zh-cn': {
    translation: t('lng.chinese'),
    icon: 'china',
  },
});

const LanguageSwitch = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  if (!themeContext) {
    throw Error(t('theme-context-not-correct-used'));
  }

  const languages = (i18next.options.resources ? Object.keys(i18next.options.resources) : []) as Array<Language>;
  const currentLanguage: Language = i18next.language || i18next.options?.fallbackLng?.[0];

  const { translation: userLanguage } = getTranslatedCurrentLanguage(t)[currentLanguage.toLowerCase()];

  const handleToggle = useCallback(() => {
    setOpen(prevOpen => !prevOpen);
  }, []);

  const handleClose = useCallback(
    (event: MouseEvent<HTMLLIElement | Document | HTMLAnchorElement>) => {
      if (anchorRef.current) {
        if (anchorRef.current.contains(event.currentTarget)) {
          return;
        }
      }

      setOpen(false);
    },
    [setOpen]
  );

  const handleSwitchLanguage = useCallback(
    (language: Language) => (event: MouseEvent<HTMLLIElement>) => {
      themeContext.setLanguage(language);
      handleClose(event);
    },
    [handleClose, themeContext]
  );

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      if (anchorRef.current) {
        anchorRef.current.focus();
      }
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Wrapper>
      <Tooltip enterDelay={300} title={t('change-language')}>
        <SwitchButton color="inherit" onClick={handleToggle} ref={anchorRef}>
          <LanguageIcon />
          <UserLanguage>{userLanguage}</UserLanguage>
          <ExpandMoreIcon fontSize="small" />
        </SwitchButton>
      </Tooltip>
      <Popper anchorEl={anchorRef.current} disablePortal={true} open={open} role={undefined} transition={true}>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <StyledPaper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {languages
                    .filter(language => language !== currentLanguage)
                    .map(language => {
                      const { icon, translation } = getTranslatedCurrentLanguage(t)[language.toLowerCase()];
                      return (
                        <StyledMenuItem
                          key={language}
                          onClick={handleSwitchLanguage(language)}
                          selected={userLanguage === translation}>
                          <Icon name={icon} size="md" />
                          {translation}
                        </StyledMenuItem>
                      );
                    })}
                  <Box my={1}>
                    <Divider />
                  </Box>
                  <MenuItem button={true}>
                    <StyledLink external={true} onClick={handleClose} to={VERDACCIO_UI_GITHUB_REPOSITORY}>
                      {`${t('help-to-translate')}`}
                    </StyledLink>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </StyledPaper>
          </Grow>
        )}
      </Popper>
    </Wrapper>
  );
};

export default LanguageSwitch;

const Wrapper = styled('div')<{ theme?: Theme }>(({ theme }) => ({
  display: 'none',
  [`@media screen and (min-width: ${theme && theme.breakPoints.medium}px)`]: {
    display: 'inline-block',
  },
}));

const UserLanguage = styled('span')<{ theme?: Theme }>(({ theme }) => ({
  display: 'none',
  [`@media screen and (min-width: ${theme && theme.breakPoints.medium}px)`]: {
    display: 'inline-block',
  },
}));

const SwitchButton = withStyles((theme: Theme) => ({
  label: {
    display: 'grid',
    gridGap: theme?.spacing(1),
    gridTemplateColumns: '24px 20px',
    [`@media screen and (min-width: ${theme && theme.breakPoints.medium}px)`]: {
      gridTemplateColumns: '24px 1fr 20px',
    },
  },
}))(Button);

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

const StyledLink = styled(Link)<{ theme?: Theme }>(({ theme }) => ({
  color: theme?.palette.type === 'dark' ? theme?.palette.white : theme?.palette.text.primary,
  textDecoration: 'none',
}));

const StyledPaper = styled(Paper)<{ theme?: Theme }>(({ theme }) => ({
  backgroundColor: theme?.palette.type === 'dark' ? theme?.palette.cyanBlue : theme?.palette.white,
}));
