import React, { useState, useContext, useCallback } from 'react';

import { makeLogin } from '../../utils/login';
import storage from '../../utils/storage';
import Dialog from '../../muiComponents/Dialog';
import DialogContent from '../../muiComponents/DialogContent';
import AppContext from '../../App/AppContext';

import LoginDialogCloseButton from './LoginDialogCloseButton';
import LoginDialogForm, { FormValues } from './LoginDialogForm';
import LoginDialogHeader from './LoginDialogHeader';

interface Props {
  open?: boolean;
  onClose: () => void;
}

const LoginDialog: React.FC<Props> = ({ onClose, open = false }) => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw Error('The app Context was not correct used');
  }

  const [error, setError] = useState();

  const handleDoLogin = useCallback(
    async (data: FormValues) => {
      const { username, token, error } = await makeLogin(data.username, data.password);

      if (error) {
        setError(error);
      }

      if (username && token) {
        storage.setItem('username', username);
        storage.setItem('token', token);
        appContext.setUser({ username });
        onClose();
      }
    },
    [appContext, onClose]
  );

  return (
    <Dialog fullWidth={true} maxWidth="sm" onClose={onClose} open={open}>
      <LoginDialogCloseButton onClose={onClose} />
      <DialogContent>
        <LoginDialogHeader />
        <LoginDialogForm error={error} onSubmit={handleDoLogin} />
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
