import React, { memo } from 'react';
import styled from '@emotion/styled';
import Error from '@material-ui/icons/Error';

import SnackbarContent from '../../muiComponents/SnackbarContent';
import Box from '../../muiComponents/Box';
import { Theme } from '../../design-tokens/theme';
import { LoginError } from '../../utils/login';

const StyledSnackbarContent = styled(SnackbarContent)<{ theme?: Theme }>(({ theme }) => ({
  backgroundColor: theme.palette.error.dark,
}));

const StyledErrorIcon = styled(Error)<{ theme?: Theme }>(({ theme }) => ({
  fontSize: 20,
  opacity: 0.9,
  marginRight: theme.spacing(1),
}));

export interface FormValues {
  username: string;
  password: string;
}

interface Props {
  error: LoginError;
}

const LoginDialogFormError = memo(({ error }: Props) => {
  return (
    <StyledSnackbarContent
      message={
        <Box alignItems="center" display="flex">
          <StyledErrorIcon />
          {error.description}
        </Box>
      }
    />
  );
});

export default LoginDialogFormError;
