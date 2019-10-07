import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import Button from '../../muiComponents/Button';

import { Title, Content } from './styles';
import { Props } from './types';

const LABEL = 'CLOSE';

const RegistryInfoDialog: React.FC<Props> = ({ open = false, children, onClose }) => (
  <Dialog id="registryInfo--dialog-container" onClose={onClose} open={open}>
    <Title disableTypography={true}>{'Register Info'}</Title>
    <Content>{children}</Content>
    <DialogActions>
      <Button color="inherit" id="registryInfo--dialog-close" onClick={onClose}>
        {LABEL}
      </Button>
    </DialogActions>
  </Dialog>
);

export default RegistryInfoDialog;
