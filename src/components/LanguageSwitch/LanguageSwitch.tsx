import React, { MouseEvent } from 'react';
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

import Paper from '../../muiComponents/Paper';
import MenuItem from '../../muiComponents/MenuItem';
import Button from '../../muiComponents/Button';
import Tooltip from '../../muiComponents/Tooltip';
import Divider from '../../muiComponents/Divider';
import Box from '../../muiComponents/Box';
import { Theme } from '../../design-tokens/theme';
import Link from '../Link';
import Icon from '../Icon';

const getTranslatedCurrentLanguage = (
  t: TFunction
): { [key: string]: { translation: string; icon: React.ComponentProps<typeof Icon>['name'] } } => ({
  'en-us': {
    translation: t('lng.english'),
    icon: 'usa',
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
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const languages = i18next.options.resources ? Object.keys(i18next.options.resources) : [];
  const currentLanguage = i18next.language || i18next.options?.fallbackLng?.[0];

  const { translation: userLanguage } = getTranslatedCurrentLanguage(t)[currentLanguage.toLowerCase()];

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: MouseEvent<HTMLLIElement | Document | HTMLAnchorElement>) => {
    if (anchorRef.current) {
      if (anchorRef.current.contains(event.currentTarget)) {
        return;
      }
    }

    setOpen(false);
  };

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

  const handleSwitchLanguage = (language: string) => (event: MouseEvent<HTMLLIElement>) => {
    i18next.changeLanguage(language);
    handleClose(event);
  };

  return (
    <>
      <Tooltip enterDelay={300} title={t('changeLanguage')}>
        <SwitchButton color="inherit" onClick={handleToggle} ref={anchorRef}>
          <LanguageIcon />
          <span>{userLanguage}</span>
          <ExpandMoreIcon fontSize="small" />
        </SwitchButton>
      </Tooltip>
      <Popper anchorEl={anchorRef.current} disablePortal={true} open={open} role={undefined} transition={true}>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList>
                  {languages.map(language => {
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
                    <StyledLink external={true} onClick={handleClose} to="https://github.com/verdaccio/ui#translations">
                      {`${t('help-to-translate')}`}
                    </StyledLink>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default LanguageSwitch;

const SwitchButton = withStyles((theme: Theme) => ({
  label: {
    display: 'grid',
    gridGap: theme?.spacing(1),
    gridTemplateColumns: '24px 1fr 20px',
  },
}))(Button);

const StyledMenuItem = withStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    cursor: 'pointer',
    gridGap: theme?.spacing(0.5),
    gridTemplateColumns: '20px 1fr',
    alignItems: 'center',
  },
}))(MenuItem);

const StyledLink = styled(Link)<{ theme?: Theme }>(({ theme }) => ({
  color: theme?.palette.type === 'dark' ? theme?.palette.white : theme?.palette.text.primary,
  textDecoration: 'none',
}));
