import React, { useState } from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import { css } from 'emotion';

import Button from '../../muiComponents/Button';
import Dialog from '../../muiComponents/Dialog';
import DialogTitle from '../../muiComponents/DialogTitle';
import DialogContent from '../../muiComponents/DialogContent';
import DialogActions from '../../muiComponents/DialogActions';
import FormControl from '../../muiComponents/FormControl';
import FormHelperText from '../../muiComponents/FormHelperText';
import Input from '../../muiComponents/Input';
import InputLabel from '../../muiComponents/InputLabel';
import SnackbarContent from '../../muiComponents/SnackbarContent';

import { LoginModalProps, LoginModalState, FormError } from './LoginOptions';
import * as classes from './styles';

const LoginModal: React.FC<LoginModalProps> = props => {
  const { visibility = true, onCancel = () => null, error } = props as LoginModalProps;
  const [errorState, setError] = useState(props.error);
  const [form, setValues] = useState({
    form: {
      username: {
        required: true,
        pristine: true,
        helperText: 'Field required',
        value: '',
      },
      password: {
        required: true,
        pristine: true,
        helperText: 'Field required',
        value: '',
      },
    },
  });

  /**
   * set login modal's username and password to current state
   * Required to login
   */
  const setCredentials = (name, e) => {
    //@ts-ignore
    setValues({
      form: {
        ...form,
        [name]: {
          ...form[name],
          value: e.target.value,
          pristine: false,
        },
      },
    });
    // setValues({
    //   form: {
    //     username: {
    //       required: false,
    //       pristine: false,
    //       helperText: 'test',
    //       value: 'l'
    //     },
    //     password: {
    //       required: false,
    //       pristine: true,
    //       helperText: 'test',
    //       value: 'k'
    //     }
    //   }
    // })
  };

  const handleUsernameChange = event => {
    setCredentials('username', event);
  };

  const handlePasswordChange = event => {
    setCredentials('password', event);
  };

  const handleValidateCredentials = event => {
    // prevents default submit behavior
    event.preventDefault();

    setValues(
      {
        form: Object.keys(form).reduce(
          (acc, key) => ({
            ...acc,
            ...{ [key]: { ...form[key], pristine: false } },
          }),
          { username: {}, password: {} }
        ),
      },
      () => {
        if (!Object.keys(form).some(id => !form[id])) {
          submitCredentials();
        }
      }
    );
  };

  const submitCredentials = async () => {
    const username = (form.form.username && form.form.username.value) || '';
    const password = (form.form.password && form.form.password.value) || '';
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(username, password);
    }
    // let's wait for API response and then set
    // username and password filed to empty state
    setValues({
      form: Object.keys(form).reduce(
        (acc, key) => ({
          ...acc,
          ...{ [key]: { ...form[key], value: '', pristine: true } },
        }),
        { username: {}, password: {} }
      ),
    });
  };

  const renderErrorMessage = (title: string, description: string): JSX.Element => {
    return (
      <span>
        <div>
          <strong>{title}</strong>
        </div>
        <div>{description}</div>
      </span>
    );
  };

  const renderMessage = (title: string, description: string): JSX.Element => {
    return (
      <div className={classes.loginErrorMsg} id={'client-snackbar'}>
        <ErrorIcon className={classes.loginIcon} />
        {renderErrorMessage(title, description)}
      </div>
    );
  };

  const renderLoginError = ({ type, title, description }: FormError): JSX.Element | false => {
    return type === 'error' && <SnackbarContent className={classes.loginError} message={renderMessage(title, description)} />;
  };

  const renderNameField = () => {
    const {
      form: { username },
    } = form;
    return (
      <FormControl error={!username.value && !username.pristine} fullWidth={true} required={username.required}>
        <InputLabel htmlFor={'username'}>{'Username'}</InputLabel>
        <Input id={'login--form-username'} onChange={handleUsernameChange} placeholder={'Your username'} value={username.value} />
        {!username.value && !username.pristine && <FormHelperText id={'username-error'}>{username.helperText}</FormHelperText>}
      </FormControl>
    );
  };

  const renderPasswordField = () => {
    const {
      form: { password },
    } = form;
    return (
      <FormControl
        className={css`
          margin-top: 8px;
        `}
        error={!password.value && !password.pristine}
        fullWidth={true}
        required={password.required}>
        <InputLabel htmlFor={'password'}>{'Password'}</InputLabel>
        <Input id={'login--form-password'} onChange={handlePasswordChange} placeholder={'Your strong password'} type={'password'} value={password.value} />
        {!password.value && !password.pristine && <FormHelperText id={'password-error'}>{password.helperText}</FormHelperText>}
      </FormControl>
    );
  };

  const renderActions = () => {
    const {
      form: { username, password },
    } = form;
    const { onCancel } = props;
    return (
      <DialogActions className={'dialog-footer'}>
        <Button color={'inherit'} id={'login--form-cancel'} onClick={onCancel} type={'button'}>
          {'Cancel'}
        </Button>
        <Button color={'inherit'} disabled={!password.value || !username.value} id={'login--form-submit'} type={'submit'}>
          {'Login'}
        </Button>
      </DialogActions>
    );
  };

  return (
    <Dialog fullWidth={true} id={'login--form-container'} maxWidth={'xs'} onClose={onCancel} open={visibility}>
      <form noValidate={true} onSubmit={handleValidateCredentials}>
        <DialogTitle>{'Login!'}</DialogTitle>
        <DialogContent>
          {error && renderLoginError(error)}
          {renderNameField()}
          {renderPasswordField()}
        </DialogContent>
        {renderActions()}
      </form>
    </Dialog>
  );
};

export default LoginModal;
