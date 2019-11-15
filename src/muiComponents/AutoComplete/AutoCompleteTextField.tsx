import React from 'react';
import styled from '@emotion/styled';
import Search from '@material-ui/icons/Search';

import TextField, { TextFieldProps } from '../TextField';

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    color: 'white',
  },
  '& .MuiInput-underline': {
    ':before': {
      content: "''",
      border: 'none',
    },
    ':after': {
      borderColor: 'white',
    },
    ':hover:before': {
      content: 'none',
    },
  },
});

const StyledSearch = styled(Search)({
  color: 'white',
  marginRight: 10,
});

const AutoCompleteTextField: React.FC<TextFieldProps> = props => {
  // @ts-ignore:  Types of property 'ref' are incompatible.
  return <StyledTextField {...props} InputProps={{ startAdornment: <StyledSearch /> }} />;
};

export default AutoCompleteTextField;
