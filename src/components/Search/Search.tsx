import React, { KeyboardEvent, Component, ReactElement } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { default as IconSearch } from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import debounce from 'lodash/debounce';

import API from '../../utils/api';
import AutoComplete from '../AutoComplete';
import colors from '../../utils/styles/colors';

export interface State {
  search: string;
  suggestions: any[];
  loading: boolean;
  loaded: boolean;
  error: boolean;
}

export type cancelAllSearchRequests = () => void;
export type handlePackagesClearRequested = () => void;
export type handleSearch = (event: KeyboardEvent<HTMLInputElement>, { newValue, method }: { newValue: string; method: string }) => void;
export type handleClickSearch = (event: KeyboardEvent<HTMLInputElement>, { suggestionValue, method }: { suggestionValue: object[]; method: string }) => void;
export type handleFetchPackages = ({ value: string }) => Promise<void>;
export type onBlur = (event: KeyboardEvent<HTMLInputElement>) => void;

const CONSTANTS = {
  API_DELAY: 300,
  PLACEHOLDER_TEXT: 'Search Packages',
  ABORT_ERROR: 'AbortError',
};

export class Search extends Component<RouteComponentProps<{}>, State> {
  private requestList: any[];

  constructor(props: RouteComponentProps<{}>) {
    super(props);
    this.state = {
      search: '',
      suggestions: [],
      // loading: A boolean value to indicate that request is in pending state.
      loading: false,
      // loaded: A boolean value to indicate that result has been loaded.
      loaded: false,
      // error: A boolean value to indicate API error.
      error: false,
    };
    this.requestList = [];
  }

  /**
   * Cancel all the requests which are in pending state.
   */
  private cancelAllSearchRequests: cancelAllSearchRequests = () => {
    this.requestList.forEach(request => request.abort());
    this.requestList = [];
  };

  /**
   * Cancel all the request from list and make request list empty.
   */
  private handlePackagesClearRequested: handlePackagesClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  /**
   * onChange method for the input element.
   */
  private handleSearch: handleSearch = (event, { newValue, method }) => {
    // stops event bubbling
    event.stopPropagation();
    if (method === 'type') {
      const value = newValue.trim();
      this.setState(
        {
          search: value,
          loading: true,
          loaded: false,
          error: false,
        },
        () => {
          /**
           * A use case where User keeps adding and removing value in input field,
           * so we cancel all the existing requests when input is empty.
           */
          if (value.length === 0) {
            this.cancelAllSearchRequests();
          }
        }
      );
    }
  };

  /**
   * When an user select any package by clicking or pressing return key.
   */
  private handleClickSearch: handleClickSearch = (event, { suggestionValue, method }: any) => {
    const { history } = this.props;
    // stops event bubbling
    event.stopPropagation();
    switch (method) {
      case 'click':
      case 'enter':
        this.setState({ search: '' });
        history.push(`/-/web/detail/${suggestionValue}`);
        break;
    }
  };

  /**
   * Fetch packages from API.
   * For AbortController see: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
   */
  private handleFetchPackages: handleFetchPackages = async ({ value }) => {
    try {
      // @ts-ignore
      const controller = new window.AbortController();
      const signal = controller.signal;
      // Keep track of search requests.
      this.requestList.push(controller);
      const suggestions = await API.request(`search/${encodeURIComponent(value)}`, 'GET', { signal });
      // @ts-ignore
      this.setState({
        suggestions,
        loaded: true,
      });
    } catch (error) {
      /**
       * AbortError is not the API error.
       * It means browser has cancelled the API request.
       */
      if (error.name === CONSTANTS.ABORT_ERROR) {
        this.setState({ error: false, loaded: false });
      } else {
        this.setState({ error: true, loaded: false });
      }
    } finally {
      this.setState({ loading: false });
    }
  };

  public render(): ReactElement<HTMLElement> {
    const { suggestions, search, loaded, loading, error } = this.state;

    return (
      <AutoComplete
        color={colors.white}
        onBlur={this.handleOnBlur}
        onChange={this.handleSearch}
        onCleanSuggestions={this.handlePackagesClearRequested}
        onClick={this.handleClickSearch}
        onSuggestionsFetch={debounce(this.handleFetchPackages, CONSTANTS.API_DELAY)}
        placeholder={CONSTANTS.PLACEHOLDER_TEXT}
        startAdornment={this.getAdorment()}
        suggestions={suggestions}
        suggestionsError={error}
        suggestionsLoaded={loaded}
        suggestionsLoading={loading}
        value={search}
      />
    );
  }

  public getAdorment(): ReactElement<HTMLElement> {
    return (
      <InputAdornment position={'start'} style={{ color: colors.white }}>
        <IconSearch />
      </InputAdornment>
    );
  }

  /**
   * As user focuses out from input, we cancel all the request from requestList
   * and set the API state parameters to default boolean values.
   */
  private handleOnBlur: onBlur = event => {
    // stops event bubbling
    event.stopPropagation();
    this.setState(
      {
        loaded: false,
        loading: false,
        error: false,
      },
      () => this.cancelAllSearchRequests()
    );
  };
}

export default withRouter(Search);
