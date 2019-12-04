import React from 'react';
import styled from '@emotion/styled';
import useForm from 'react-hook-form';

import TextField from '../../muiComponents/TextField';
import Button from '../../muiComponents/Button';
import { Theme } from '../../design-tokens/theme';

const StyledForm = styled('form')<{ theme?: Theme }>(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const StyledButton = styled(Button)<{ theme?: Theme }>(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

interface FormValues {
  username: string;
  password: string;
}

const LoginDialogForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<FormValues>();

  const onSubmit = ({ username }) => {
    console.log('data', username);
  };

  return (
    <StyledForm noValidate={true} onSubmit={handleSubmit(onSubmit)}>
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
      <StyledButton color="primary" fullWidth={true} size="large" type="submit" variant="contained">
        {'Sign In'}
      </StyledButton>
    </StyledForm>
  );
};

export default LoginDialogForm;
