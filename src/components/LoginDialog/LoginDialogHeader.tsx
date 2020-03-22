import React from 'react';
import styled from '@emotion/styled';
import LockOutlined from '@material-ui/icons/LockOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';

import Heading from '../../muiComponents/Heading';
import Avatar from '../../muiComponents/Avatar';
import Box from '../../muiComponents/Box';
import IconButton from '../../muiComponents/IconButton';
import { Theme } from '../../design-tokens/theme';

const StyledAvatar = styled(Avatar)<{ theme?: Theme }>(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white,
}));

const StyledIconButton = styled(IconButton)<{ theme?: Theme }>(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing() / 2,
  top: theme.spacing() / 2,
  color: theme.palette.grey[500],
}));

interface Props {
  onClose?: () => void;
}

const LoginDialogHeader: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <Box alignItems="center" display="flex" flexDirection="column" position="relative">
      {onClose && (
        <StyledIconButton aria-label={t('button.close')} onClick={onClose}>
          <CloseIcon />
        </StyledIconButton>
      )}
      <StyledAvatar>
        <LockOutlined />
      </StyledAvatar>
      <Heading>{t('button.login')}</Heading>
    </Box>
  );
};

export default LoginDialogHeader;
