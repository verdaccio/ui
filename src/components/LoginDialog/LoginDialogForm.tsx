import React, { memo } from 'react';
import styled from '@emotion/styled';
import useForm from 'react-hook-form';

import TextField from '../../muiComponents/TextField';
import Button from '../../muiComponents/Button';
import { Theme } from '../../design-tokens/theme';
import { LoginError } from '../../utils/login';

import LoginDialogFormError from './LoginDialogFormError';

const StyledForm = styled('form')<{ theme?: Theme }>(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const StyledButton = styled(Button)<{ theme?: Theme }>(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export interface FormValues {
  username: string;
  password: string;
}

interface Props {
  onSubmit: (formValues: FormValues) => void;
  error?: LoginError;
}

const LoginDialogForm = memo(({ onSubmit, error }: Props) => {
  const {
    register,
    errors,
    handleSubmit,
    formState: { isValid },
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmitForm = (formValues: FormValues) => {
    onSubmit(formValues);
  };

  return (
    <StyledForm noValidate={true} onSubmit={handleSubmit(onSubmitForm)}>
      <TextField
        autoComplete="username"
        error={!!errors.username}
        fullWidth={true}
        helperText={errors.username?.message}
        inputRef={register({
          required: { value: true, message: 'This field is required' },
          minLength: { value: 2, message: 'This field required the min length of 2' },
        })}
        label="Username"
        margin="normal"
        name="username"
        placeholder="Your username"
        required={true}
        variant="outlined"
      />
      <TextField
        autoComplete="current-password"
        error={!!errors.password}
        fullWidth={true}
        helperText={errors.password?.message}
        inputRef={register({
          required: { value: true, message: 'This field is required' },
          minLength: { value: 2, message: 'This field required the min length of 2' },
        })}
        label="Password"
        margin="normal"
        name="password"
        placeholder="Your strong password"
        required={true}
        type="password"
        variant="outlined"
      />
      {error && <LoginDialogFormError error={error} />}
      <StyledButton color="primary" disabled={!isValid} fullWidth={true} size="large" type="submit" variant="contained">
        {'Sign In'}
      </StyledButton>
    </StyledForm>
  );
});

export default LoginDialogForm;
