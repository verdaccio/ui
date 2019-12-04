import React from 'react';

import DialogActions from '../../muiComponents/DialogActions';
import Button from '../../muiComponents/Button';

interface Props {
  onCancel: () => void;
}

const LoginDialogActions: React.FC<Props> = ({ onCancel }) => (
  <DialogActions className={'dialog-footer'}>
    <Button color={'inherit'} id={'login--form-cancel'} onClick={onCancel} type={'button'}>
      {'Cancel'}
    </Button>
    {/* <Button color={'inherit'} disabled={!password.value || !username.value} id={'login--form-submit'} type={'submit'}>
      {'Login'}
    </Button> */}
  </DialogActions>
);

export default LoginDialogActions;
