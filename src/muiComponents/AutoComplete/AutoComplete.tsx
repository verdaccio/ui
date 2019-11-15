import React, { forwardRef, ChangeEvent, useState } from 'react';
import { default as MuiAutoComplete, AutocompleteProps } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import styled from '@emotion/styled';
import Search from '@material-ui/icons/Search';

import CircularProgress from '../CircularProgress';

import AutoCompleteTextField from './AutoCompleteTextField';

const StyledAutoComplete = styled(MuiAutoComplete)({
  width: '100%',
  color: 'white',
});

const StyledSearch = styled(Search)({
  color: 'white',
  marginRight: 10,
});

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

interface Props {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  options: Array<Option>;
}

interface Option {
  id: string;
  label: string;
}

type AutoCompleteRef = HTMLDivElement;

/* eslint-disable react/jsx-no-bind */

const AutoComplete = forwardRef<AutoCompleteRef, Props>(function AutoComplete({ placeholder, options = [], onChange }, ref) {
  const [open, setOpen] = useState(false);
  const isLoading = open && options.length === 0;

  console.log('options', options);

  return (
    <StyledAutoComplete
      autoHighlight={true}
      freeSolo={true}
      options={options}
      loading={isLoading}
      innerRef={ref}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionLabel={option => option.label}
      renderInput={params => (
        <StyledTextField
          {...params}
          onChange={onChange}
          fullWidth={true}
          variant="standard"
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            startAdornment: <StyledSearch />,
            endAdornment: isLoading ? <CircularProgress color="inherit" size={20} /> : null,
          }}
        />
      )}
    />
  );
});

export default AutoComplete;
