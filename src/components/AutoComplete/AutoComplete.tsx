import React, { KeyboardEvent, memo } from 'react';
import styled from '@emotion/styled';
import Autosuggest, { SuggestionSelectedEventData, InputProps, ChangeEvent } from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

import { fontWeight } from '../../utils/styles/sizes';
import MenuItem from '../../muiComponents/MenuItem';

import { Wrapper, InputField, SuggestionContainer } from './styles';

const StyledAnchor = styled('a')<{ fw: number }>(props => ({
  fontWeight: props.fw,
}));

const StyledMenuItem = styled(MenuItem)({
  cursor: 'pointer',
});

interface Props {
  suggestions: unknown[];
  suggestionsLoading?: boolean;
  suggestionsLoaded?: boolean;
  suggestionsError?: boolean;
  apiLoading?: boolean;
  value?: string;
  placeholder?: string;
  startAdornment?: JSX.Element;
  disableUnderline?: boolean;
  onChange: (event: React.FormEvent<HTMLInputElement>, params: ChangeEvent) => void;
  onSuggestionsFetch: ({ value: string }) => Promise<void>;
  onCleanSuggestions?: () => void;
  onClick?: (event: React.FormEvent<HTMLInputElement>, data: SuggestionSelectedEventData<unknown>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void;
}

/* eslint-disable react/jsx-sort-props  */
/* eslint-disable verdaccio/jsx-spread */
const renderInputComponent = (inputProps): JSX.Element => {
  const { ref, startAdornment, disableUnderline, onKeyDown, ...others } = inputProps;
  return (
    <InputField
      fullWidth={true}
      InputProps={{
        inputRef: node => {
          ref(node);
        },
        startAdornment,
        disableUnderline,
        onKeyDown,
      }}
      {...others}
    />
  );
};

const getSuggestionValue = (suggestion): string => suggestion.name;

const renderSuggestion = (suggestion, { query, isHighlighted }): JSX.Element => {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);
  return (
    <StyledMenuItem component="div" selected={isHighlighted}>
      <div>
        {parts.map((part, index) => {
          const fw = part.highlight ? fontWeight.semiBold : fontWeight.light;
          return (
            <StyledAnchor fw={fw} key={String(index)}>
              {part.text}
            </StyledAnchor>
          );
        })}
      </div>
    </StyledMenuItem>
  );
};

const renderMessage = (message): JSX.Element => {
  return (
    <MenuItem component="div" selected={false}>
      <div>{message}</div>
    </MenuItem>
  );
};

const SUGGESTIONS_RESPONSE = {
  LOADING: 'Loading...',
  FAILURE: 'Something went wrong.',
  NO_RESULT: 'No results found.',
};

const AutoComplete = memo(
  ({
    suggestions,
    startAdornment,
    onChange,
    onSuggestionsFetch,
    onCleanSuggestions,
    value = '',
    placeholder = '',
    disableUnderline = false,
    onClick,
    onKeyDown,
    onBlur,
    suggestionsLoading = false,
    suggestionsLoaded = false,
    suggestionsError = false,
  }: Props) => {
    const autosuggestProps = {
      renderInputComponent,
      suggestions,
      getSuggestionValue,
      renderSuggestion,
      onSuggestionsFetchRequested: onSuggestionsFetch,
      onSuggestionsClearRequested: onCleanSuggestions,
    };
    const inputProps: InputProps<unknown> = {
      value,
      onChange,
      placeholder,
      // material-ui@4.5.1 introduce better types for TextInput, check readme
      // @ts-ignore
      startAdornment,
      disableUnderline,
      onKeyDown,
      onBlur,
    };

    // this format avoid arrow function eslint rule
    function renderSuggestionsContainer({ containerProps, children, query }): JSX.Element {
      return (
        <SuggestionContainer {...containerProps} square={true}>
          {suggestionsLoaded && children === null && query && renderMessage(SUGGESTIONS_RESPONSE.NO_RESULT)}
          {suggestionsLoading && query && renderMessage(SUGGESTIONS_RESPONSE.LOADING)}
          {suggestionsError && renderMessage(SUGGESTIONS_RESPONSE.FAILURE)}
          {children}
        </SuggestionContainer>
      );
    }

    return (
      <Wrapper>
        <Autosuggest
          {...autosuggestProps}
          inputProps={inputProps}
          onSuggestionSelected={onClick}
          renderSuggestionsContainer={renderSuggestionsContainer}
        />
      </Wrapper>
    );
  }
);

export default AutoComplete;
