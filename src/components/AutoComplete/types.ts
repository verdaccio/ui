

import { KeyboardEvent } from 'react';

export interface IProps {
  suggestions: any[];
  suggestionsLoading?: boolean;
  suggestionsLoaded?: boolean;
  suggestionsError?: boolean;
  apiLoading?: boolean;
  color?: string;
  value?: string;
  placeholder?: string;
  startAdornment?: any;
  disableUnderline?: boolean;
  onChange?: (event: KeyboardEvent<HTMLInputElement>, { newValue, method }: { newValue: string, method: string }) => void;
  onSuggestionsFetch?: ({ value: string }) => Promise<void>;
  onCleanSuggestions?: () => void;
  onClick?: (event: KeyboardEvent<HTMLInputElement>, { suggestionValue, method }: { suggestionValue: any[], method: string }) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export interface IInputField {
  color: string;
}
