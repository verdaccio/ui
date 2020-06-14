import React, { KeyboardEvent, memo } from 'react';
import styled from '@emotion/styled';
import Autosuggest, { SuggestionSelectedEventData, InputProps, ChangeEvent } from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { useTranslation } from 'react-i18next';

import MenuItem from '../MenuItem';
import { Theme } from '../../design-tokens/theme';

import { Wrapper, InputField, SuggestionContainer } from './styles';

const StyledAnchor = styled('a')<{ highlight: boolean; theme?: Theme }>(props => ({
  fontWeight: props.theme && props.highlight ? props.theme.fontWeight.semiBold : props.theme.fontWeight.light,
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
          return (
            <StyledAnchor highlight={part.highlight} key={String(index)}>
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
    const { t } = useTranslation();

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
          {suggestionsLoaded && children === null && query && renderMessage(t('autoComplete.no-results-found'))}
          {suggestionsLoading && query && renderMessage(t('autoComplete.loading'))}
          {suggestionsError && renderMessage(t('error.unspecific'))}
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
