import React from 'react';
import styled from '@emotion/styled';
import LockOutlined from '@material-ui/icons/LockOutlined';
import CloseIcon from '@material-ui/icons/Close';

import Heading from '../../muiComponents/Heading';
import Avatar from '../../muiComponents/Avatar';
import Box from '../../muiComponents/Box';
import IconButton from '../../muiComponents/IconButton';
import { Theme } from '../../design-tokens/theme';

const StyledAvatar = styled(Avatar)<{ theme?: Theme }>(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
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
  return (
    <Box alignItems="center" display="flex" flexDirection="column" position="relative">
      {onClose && (
        <StyledIconButton aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </StyledIconButton>
      )}
      <StyledAvatar>
        <LockOutlined />
      </StyledAvatar>
      <Heading>{'Sign in'}</Heading>
    </Box>
  );
};

export default LoginDialogHeader;
