import React from 'react';
import Search from '@material-ui/icons/Search';
import styled from '@emotion/styled';

import InputAdornment from '../../../components/InputAdornment';
import { Theme } from '../../../design-tokens/theme';

const StyledInputAdornment = styled(InputAdornment)<{ theme?: Theme }>(props => ({
  color: props.theme && props.theme.palette.white,
}));

const SearchAdornment: React.FC = () => (
  <StyledInputAdornment position={'start'}>
    <Search />
  </StyledInputAdornment>
);

export default SearchAdornment;
