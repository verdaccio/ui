import React, { useContext } from 'react';
import styled from '@emotion/styled';
import Favorite from '@material-ui/icons/Favorite';

import Button from '../../muiComponents/Button';
import Link from '../Link';
import { isURL } from '../../utils/url';
import { Theme } from '../../design-tokens/theme';
import { DetailContext } from '../../pages/Version';

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

/* eslint-disable react/jsx-no-bind */
const DetailSidebarFundButton: React.FC = () => {
  const detailContext = useContext(DetailContext);

  const { packageMeta } = detailContext;

  const fundingUrl = packageMeta?.latest?.funding?.url as string;

  if (!isURL(fundingUrl)) {
    return null;
  }

  return (
    <StyledLink external={true} to={fundingUrl}>
      <Button color="primary" fullWidth={true} startIcon={<StyledFavoriteIcon />} variant="outlined">
        <StyledFundStrong>{'Fund'}</StyledFundStrong>
        {'this package'}
      </Button>
    </StyledLink>
  );
};

export default DetailSidebarFundButton;
