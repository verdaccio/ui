import React, { FC, ChangeEvent, useState } from 'react';
import { default as MuiAutoComplete, AutocompleteProps } from '@material-ui/lab/Autocomplete';
import styled from 'react-emotion';

import CircularProgress from '../CircularProgress';
import TextField from '../TextField';

const StyledAutoComplete = styled(MuiAutoComplete)({
  width: '100%',
});

interface Props extends Pick<AutocompleteProps, 'options'> {
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// function sleep(delay = 0) {
//   return new Promise(resolve => {
//     setTimeout(resolve, delay);
//   });
// }

/* eslint-disable react/jsx-no-bind */
const AutoComplete: FC<Props> = ({ placeholder, options = [], onChange }) => {
  const [open, setOpen] = useState(false);
  const isLoading = open && options.length === 0;

  console.log('options', options);

  //   useEffect(() => {
  //     let active = true;

  //     if (!loading) {
  //       return undefined;
  //     }

  //     (async () => {
  //       const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
  //       await sleep(1e3); // For demo purposes.
  //       const countries = await response.json();

  //       if (active) {
  //         setOptions(Object.keys(countries).map(key => countries[key].item[0]));
  //       }
  //     })();

  //     return () => {
  //       active = false;
  //     };
  //   }, [loading]);

  // useEffect(() => {
  //   if (!open) {
  //     setOptions([]);
  //   }
  // }, [open]);

  return (
    <StyledAutoComplete
      autoHighlight={true}
      // open={open}
      // onOpen={() => {
      //   setOpen(true);
      // }}
      // onClose={() => {
      //   setOpen(false);
      // }}
      // getOptionLabel={option => option.name}
      options={options}
      loading={isLoading}
      renderInput={params => (
        <TextField
          {...params}
          onChange={onChange}
          label={placeholder}
          fullWidth={true}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
            type: 'search',
          }}
        />
      )}
    />
  );
};

export default AutoComplete;
