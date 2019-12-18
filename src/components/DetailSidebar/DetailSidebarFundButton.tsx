import React, { MouseEvent } from 'react';
import styled from '@emotion/styled';
import Favorite from '@material-ui/icons/Favorite';

import Button from '../../muiComponents/Button';
import Link from '../Link';
import { Theme } from '../../design-tokens/theme';

const StyledLink = styled(Link)<{ theme?: Theme }>(({ theme }) => ({
  marginTop: theme && theme.spacing(1),
  marginBottom: theme && theme.spacing(1),
  textDecoration: 'none',
  display: 'block',
}));

const StyledFavoriteIcon = styled(Favorite)<{ theme?: Theme }>(({ theme }) => ({
  color: theme && theme.palette.orange,
}));

const StyledFundStrong = styled('strong')({
  marginRight: 3,
});

interface Props {
  to: string;
}

/* eslint-disable react/jsx-no-bind */
const DetailSidebarFundButton: React.FC<Props> = ({ to }) => {
  const preventDefault = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();
  return (
    <StyledLink external={true} to={to}>
      <Button
        color="primary"
        fullWidth={true}
        onClick={preventDefault}
        startIcon={<StyledFavoriteIcon />}
        variant="outlined">
        <StyledFundStrong>{'Fund'}</StyledFundStrong>
        {'this package'}
      </Button>
    </StyledLink>
  );
};

export default DetailSidebarFundButton;
