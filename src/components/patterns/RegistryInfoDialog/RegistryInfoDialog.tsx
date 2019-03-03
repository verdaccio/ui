/**
 * @prettier
 */

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

// import styled from '@emotion/styled';
import colors from '../../utils/styles/colors';
import { fontSize } from '../../utils/styles/sizes';

// export const Title = styled(DialogTitle)`
//   && {
//     background-color: ${colors.primary};
//     color: ${colors.white};
//     font-size: ${fontSize.lg};
//   }
// `;

// export const Content = styled(DialogContent)`
//   && {
//     padding: 0 24px;
//   }
// `;

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const RegistryInfoDialog: React.FC<Props> = ({ open = false, children, onClose }) => (
  <Dialog id={'registryInfo--dialog-container'} onClose={onClose} open={open}>
    <DialogTitle disableTypography={true}>{'Register Info'}</DialogTitle>
    <DialogContent>{children}</DialogContent>
    <DialogActions>
      <Button color={'inherit'} id={'registryInfo--dialog-close'} onClick={onClose}>
        {'CLOSE'}
      </Button>
    </DialogActions>
  </Dialog>
);

export default RegistryInfoDialog;
