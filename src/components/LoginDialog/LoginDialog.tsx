import React from 'react';

import Dialog from '../../muiComponents/Dialog';
import DialogContent from '../../muiComponents/DialogContent';

import LoginDialogCloseButton from './LoginDialogCloseButton';
import LoginDialogForm from './LoginDialogForm';
import LoginDialogHeader from './LoginDialogHeader';

interface Props {
  open?: boolean;
  error?: FormError;
  onClose: () => void;
  //   onSubmit: (username: string, password: string) => void;
}

interface FormError {
  type: string;
  title: string;
  description: string;
}

const LoginDialog: React.FC<Props> = ({ onClose, open = false }) => {
  return (
    <Dialog aria-labelledby="form-dialog-title" fullWidth={true} maxWidth="sm" onClose={onClose} open={open}>
      <LoginDialogCloseButton onClose={onClose} />
      <DialogContent>
        <LoginDialogHeader />
        <LoginDialogForm />
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
