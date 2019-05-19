

import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { Title, Content } from './styles';

import { IProps } from './types';

const RegistryInfoDialog: React.FC<IProps> = ({ open = false, children, onClose }) => (
  <Dialog id="registryInfo--dialog-container" onClose={onClose} open={open}>
    <Title disableTypography>Register Info</Title>
    <Content>{children}</Content>
    <DialogActions>
      <Button color="inherit" id="registryInfo--dialog-close" onClick={onClose}>
        CLOSE
      </Button>
    </DialogActions>
  </Dialog>
);

export default RegistryInfoDialog;
