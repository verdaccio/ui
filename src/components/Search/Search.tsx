import React from 'react';
import debounce from 'lodash/debounce';
import { RouteComponentProps, withRouter } from 'react-router';
import { SuggestionSelectedEventData } from 'react-autosuggest';

import AutoComplete from '../AutoComplete';
import { callSearch } from '../../utils/calls';

import SearchAdornment from './SearchAdornment';

const CONSTANTS = {
  API_DELAY: 300,
  PLACEHOLDER_TEXT: 'Search Packages',
  ABORT_ERROR: 'AbortError',
};

const Search: React.FC<RouteComponentProps> = ({ history }) => {
  const [suggestions, setSuggestions] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [requestList, setRequestList] = React.useState<Array<{ abort: () => void }>>([]);

  /**
   * Cancel all the requests which are in pending state.
   */
  const cancelAllSearchRequests = () => {
    requestList.forEach(request => request.abort());
    setRequestList([]);
  };

  /**
   * As user focuses out from input, we cancel all the request from requestList
   * and set the API state parameters to default boolean values.
   */
  const handleOnBlur = (event: React.FormEvent<HTMLInputElement>) => {
    // stops event bubbling
    event.stopPropagation();
    setLoaded(false);
    setLoading(false);
    setError(false);
    cancelAllSearchRequests();
  };

  /**
   * onChange method for the input element.
   */
  const handleSearch = (event: React.FormEvent<HTMLInputElement>, { newValue, method }) => {
    // stops event bubbling
    event.stopPropagation();
    if (method === 'type') {
      const value = newValue.trim();

      setLoading(true);
      setError(false);
      setSearch(value);
      setLoaded(false);
      /**
       * A use case where User keeps adding and removing value in input field,
       * so we cancel all the existing requests when input is empty.
       */
      if (value.length === 0) {
        cancelAllSearchRequests();
      }
    }
  };

  /**
   * Cancel all the request from list and make request list empty.
   */
  const handlePackagesClearRequested = () => {
    setSuggestions([]);
  };

  /**
   * When an user select any package by clicking or pressing return key.
   */
  const handleClickSearch = (
    event: React.FormEvent<HTMLInputElement>,
    { suggestionValue, method }: SuggestionSelectedEventData<unknown>
  ): void | undefined => {
    // stops event bubbling
    event.stopPropagation();
    switch (method) {
      case 'click':
      case 'enter':
        setSearch('');
        history.push(`/-/web/detail/${suggestionValue}`);
        break;
    }
  };

  /**
   * Fetch packages from API.
   * For AbortController see: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
   */
  const handleFetchPackages = async ({ value }: { value: string }) => {
    try {
      const controller = new window.AbortController();
      const signal = controller.signal;
      // Keep track of search requests.
      setRequestList([...requestList, controller]);
      const suggestions = await callSearch(value, signal);
      // @ts-ignore FIXME: Argument of type 'unknown' is not assignable to parameter of type 'SetStateAction<never[]>'
      setSuggestions(suggestions);
      setLoaded(true);
    } catch (error) {
      /**
       * AbortError is not the API error.
       * It means browser has cancelled the API request.
       */
      if (error.name === CONSTANTS.ABORT_ERROR) {
        setError(false);
        setLoaded(false);
      } else {
        setError(true);
        setLoaded(false);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AutoComplete
      onBlur={handleOnBlur}
      onChange={handleSearch}
      onCleanSuggestions={handlePackagesClearRequested}
      onClick={handleClickSearch}
      onSuggestionsFetch={debounce(handleFetchPackages, CONSTANTS.API_DELAY)}
      placeholder={CONSTANTS.PLACEHOLDER_TEXT}
      startAdornment={<SearchAdornment />}
      suggestions={suggestions}
      suggestionsError={error}
      suggestionsLoaded={loaded}
      suggestionsLoading={loading}
      value={search}
    />
  );
};

export default withRouter(Search);
