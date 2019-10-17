import React, { KeyboardEvent } from 'react';
import { css } from 'emotion';
import Autosuggest, { SuggestionSelectedEventData, InputProps, ChangeEvent } from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import MenuItem from '@material-ui/core/MenuItem';

import { fontWeight } from '../../utils/styles/sizes';

import { Wrapper, InputField, SuggestionContainer } from './styles';

interface Props {
  suggestions: unknown[];
  suggestionsLoading?: boolean;
  suggestionsLoaded?: boolean;
  suggestionsError?: boolean;
  apiLoading?: boolean;
  color?: string;
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
    <MenuItem component="div" selected={isHighlighted}>
      <div>
        {parts.map((part, index) => {
          const fw = part.highlight ? fontWeight.semiBold : fontWeight.light;
          return (
            <a
              className={css`
                font-weight: ${fw};
              `}
              href={suggestion.link}
              key={String(index)}>
              {part.text}
            </a>
          );
        })}
      </div>
    </MenuItem>
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
}: Props): JSX.Element => {
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
    startAdornment,
    disableUnderline,
    color,
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
      <Autosuggest {...autosuggestProps} inputProps={inputProps} onSuggestionSelected={onClick} renderSuggestionsContainer={renderSuggestionsContainer} />
    </Wrapper>
  );
};

export default AutoComplete;
