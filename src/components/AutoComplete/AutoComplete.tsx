

import React from 'react';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import MenuItem from '@material-ui/core/MenuItem';

import { fontWeight } from '../../utils/styles/sizes';
import { Wrapper, InputField, SuggestionContainer } from './styles';
import { IProps } from './types';

const renderInputComponent = inputProps => {
  const { ref, startAdornment, disableUnderline, onKeyDown, ...others } = inputProps;
  return (
    <InputField
      InputProps={{
        inputRef: node => {
          ref(node);
        },
        startAdornment,
        disableUnderline,
        onKeyDown,
      }}
      fullWidth={true}
      {...others}
    />
  );
};

const getSuggestionValue = (suggestion): string => suggestion.name;

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);
  return (
    <MenuItem component="div" selected={isHighlighted}>
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <a href={suggestion.link} key={String(index)} style={{ fontWeight: fontWeight.semiBold }}>
              {part.text}
            </a>
          ) : (
            <a href={suggestion.link} key={String(index)} style={{ fontWeight: fontWeight.light }}>
              {part.text}
            </a>
          );
        })}
      </div>
    </MenuItem>
  );
};

const renderMessage = message => {
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

const AutoComplete = ({
  suggestions,
  startAdornment,
  onChange,
  onSuggestionsFetch,
  onCleanSuggestions,
  value = '',
  placeholder = '',
  disableUnderline = false,
  color,
  onClick,
  onKeyDown,
  onBlur,
  suggestionsLoading = false,
  suggestionsLoaded = false,
  suggestionsError = false,
}: IProps) => {
  const autosuggestProps = {
    renderInputComponent,
    suggestions,
    getSuggestionValue,
    renderSuggestion,
    onSuggestionsFetchRequested: onSuggestionsFetch,
    onSuggestionsClearRequested: onCleanSuggestions,
  };
  const inputProps = {
    value,
    onChange,
    placeholder,
    startAdornment,
    disableUnderline,
    color,
    onKeyDown,
    onBlur,
  };

  // this format avoid arrow function eslint rule
  function renderSuggestionsContainer({ containerProps, children, query }) {
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
      <Autosuggest {...autosuggestProps} inputProps={inputProps} onSuggestionSelected={onClick} renderSuggestionsContainer={renderSuggestionsContainer} />
    </Wrapper>
  );
};

export default AutoComplete;
