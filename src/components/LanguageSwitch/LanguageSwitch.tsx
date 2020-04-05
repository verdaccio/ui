import React, { MouseEvent } from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import i18n from 'i18next';
import { withStyles } from '@material-ui/core/styles';
import styled from '@emotion/styled';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '../../muiComponents/Button';
import Tooltip from '../../muiComponents/Tooltip';
import Divider from '../../muiComponents/Divider';
import Box from '../../muiComponents/Box';
import Link from '../Link';
import { Theme } from '../../design-tokens/theme';

import LanguageSwitchMenuItemContent from './LanguageSwitchMenuItemContent';

const LanguageSwitch = () => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const languages = i18n.options.resources ? Object.keys(i18n.options.resources) : [];
  const userLanguage = i18n.language || i18n.options?.fallbackLng?.[0];

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: MouseEvent<HTMLLIElement | HTMLUListElement>) => {
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
    i18n.changeLanguage(language);
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
      <Menu anchorEl={anchorRef.current} onClose={handleClose} open={open}>
        {languages.map(language => (
          <MenuItem key={language} onClick={handleSwitchLanguage(language)} selected={userLanguage === language}>
            <LanguageSwitchMenuItemContent language={language} />
          </MenuItem>
        ))}
        <Box my={1}>
          <Divider />
        </Box>
        <MenuItem
          component="a"
          href="https://github.com/verdaccio/ui#translations"
          onClick={handleClose}
          target="_blank">
          {`${t('help-to-translate')}`}
        </MenuItem>
      </Menu>
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

const StyledLink = styled(Link)<{ theme?: Theme }>(({ theme }) => ({
  color: theme?.palette.white,
  textDecoration: 'none',
}));
