import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '@material-ui/icons/Close';

import DialogTitle from '../../muiComponents/DialogTitle';
import IconButton from '../../muiComponents/IconButton';
import { Theme } from '../../design-tokens/theme';

const StyledIconButton = styled(IconButton)<{ theme?: Theme }>(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing() / 2,
  top: theme.spacing() / 2,
  color: theme.palette.grey[500],
}));

interface Props {
  onClose: () => void;
}

const LoginDialogCloseButton: React.FC<Props> = ({ onClose }) => (
  <DialogTitle>
    <StyledIconButton data-testid="close-login-dialog-button" onClick={onClose}>
      <CloseIcon titleAccess="Close Dialog" />
    </StyledIconButton>
  </DialogTitle>
);

export default LoginDialogCloseButton;
