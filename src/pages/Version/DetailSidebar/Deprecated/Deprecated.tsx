import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';

import { Theme } from 'verdaccio-ui/design-tokens/theme';

export const CardStyled = styled(Card)<{ theme?: Theme }>(({ theme }) => {
  return {
    marginTop: '1rem',
    marginBottom: '1rem',
    backgroundColor: theme?.palette?.error.light,
    opacity: '0.9',
    color: theme?.palette?.error.contrastText,
    fontWeight: 'bold',
  };
});

export type Props = {
  message: string;
};

const Deprecated: React.FC<Props> = ({ message }) => {
  return (
    <CardStyled>
      <CardContent>{message}</CardContent>
    </CardStyled>
  );
};

export default Deprecated;
