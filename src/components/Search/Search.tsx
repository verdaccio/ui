import React from 'react';
import debounce from 'lodash/debounce';

import AutoComplete from '../../muiComponents/AutoComplete';
import { callSearch } from '../../utils/calls';

const CONSTANTS = {
  API_DELAY: 300,
  PLACEHOLDER_TEXT: 'Search Packages',
  ABORT_ERROR: 'AbortError',
};

/* eslint-disable @typescript-eslint/explicit-function-return-type */
const Search: React.FC = () => {
  const [suggestions, setSuggestions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState();
  const [hasBeenLoaded, setHasBeenLoaded] = React.useState();
  const [error, setError] = React.useState();

  const handleFetchPackages = debounce(async (value: string) => {
    try {
      const controller = new window.AbortController();
      const signal = controller.signal;
      // Keep track of search requests.
      // this.requestList.push(controller);
      const suggestions = await callSearch(value, signal);
      setSuggestions(
        // @ts-ignore
        suggestions.map(suggestion => ({
          ...suggestion,
          id: suggestion._id,
          label: suggestion.name,
        }))
      );
      setHasBeenLoaded(true);
    } catch (error) {
      /**
       * AbortError is not the API error.
       * It means browser has cancelled the API request.
       */
      if (error.name === CONSTANTS.ABORT_ERROR) {
        setError(false);
        setHasBeenLoaded(false);
      } else {
        setError(true);
        setHasBeenLoaded(false);
      }
    } finally {
      setIsLoading(false);
    }
  }, CONSTANTS.API_DELAY);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // stops event bubbling
    event.stopPropagation();
    setIsLoading(true);
    setHasBeenLoaded(false);
    setError(undefined);
    handleFetchPackages(event.target.value);
  };

  return (
    <AutoComplete
      // onBlur={this.handleOnBlur}
      onChange={handleChange}
      // onCleanSuggestions={this.handlePackagesClearRequested}
      // onClick={this.handleClickSearch}
      // onSuggestionsFetch={debounce(this.handleFetchPackages, CONSTANTS.API_DELAY)}
      options={suggestions}
      placeholder={CONSTANTS.PLACEHOLDER_TEXT}
      // startAdornment={this.getAdorment()}
      // suggestionsError={error}
      // suggestionsLoaded={loaded}
      // suggestionsLoading={loading}
      // value={search}
    />
  );
};

export default Search;
