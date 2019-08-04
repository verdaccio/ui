import React from 'react';
import { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import Search from './Search';

const SEARCH_FILE_PATH = './Search';
const API_FILE_PATH = '../../utils/api';
const URL_FILE_PATH = '../../utils/url';

// Global mocks
const event = {
  stopPropagation: jest.fn(),
};
window.location.assign = jest.fn();

describe('<Search /> component test', () => {
  let routerWrapper;
  let wrapper;
  beforeEach(() => {
    routerWrapper = mount(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );
  });

  test('should load the component in default state', () => {
    expect(routerWrapper.html()).toMatchSnapshot();
  });

  test('onBlur: should cancel all search requests', async () => {
    const Search = require(SEARCH_FILE_PATH).Search;

    const routerWrapper = shallow(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    wrapper = routerWrapper.find(Search).dive();
    const { handleOnBlur, requestList, setState } = wrapper.instance();
    const spyCancelAllSearchRequests = jest.spyOn(wrapper.instance(), 'cancelAllSearchRequests');
    setState({ search: 'verdaccio' });

    const request = {
      abort: jest.fn(),
    };
    // adds a request for AbortController
    wrapper.instance().requestList = [request];

    handleOnBlur(event);

    expect(request.abort).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
    expect(wrapper.state('error')).toBeFalsy();
    expect(wrapper.state('loaded')).toBeFalsy();
    expect(wrapper.state('loading')).toBeFalsy();
    expect(spyCancelAllSearchRequests).toHaveBeenCalled();
    expect(requestList).toEqual([]);
  });

  test('handleSearch: when user type package name in search component and set loading to true', () => {
    const Search = require(SEARCH_FILE_PATH).Search;

    const routerWrapper = shallow(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    wrapper = routerWrapper.find(Search).dive();

    const { handleSearch } = wrapper.instance();
    const newValue = 'verdaccio';

    handleSearch(event, { newValue, method: 'type' });

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(wrapper.state('error')).toBeFalsy();
    expect(wrapper.state('loaded')).toBeFalsy();
    expect(wrapper.state('loading')).toBeTruthy();
    expect(wrapper.state('search')).toEqual(newValue);
  });

  test('handleSearch: cancel all search requests when there is no value in search component with type method', () => {
    const Search = require(SEARCH_FILE_PATH).Search;

    const routerWrapper = shallow(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    wrapper = routerWrapper.find(Search).dive();

    const { handleSearch, requestList } = wrapper.instance();
    const spy = jest.spyOn(wrapper.instance(), 'cancelAllSearchRequests');
    const newValue = '';

    handleSearch(event, { newValue, method: 'type' });

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(wrapper.state('error')).toBeFalsy();
    expect(wrapper.state('loaded')).toBeFalsy();
    expect(wrapper.state('loading')).toBeTruthy();
    expect(wrapper.state('search')).toEqual(newValue);
    expect(spy).toHaveBeenCalled();
    expect(requestList).toEqual([]);
  });

  test('handleSearch: when method is not type method', () => {
    const Search = require(SEARCH_FILE_PATH).Search;

    const routerWrapper = shallow(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    wrapper = routerWrapper.find(Search).dive();

    const { handleSearch } = wrapper.instance();
    const newValue = '';

    handleSearch(event, { newValue, method: 'click' });

    expect(event.stopPropagation).toHaveBeenCalled();
    expect(wrapper.state('error')).toBeFalsy();
    expect(wrapper.state('loaded')).toBeFalsy();
    expect(wrapper.state('loading')).toBeFalsy();
    expect(wrapper.state('search')).toEqual(newValue);
  });

  test('handlePackagesClearRequested: should clear suggestions', () => {
    const Search = require(SEARCH_FILE_PATH).Search;

    const routerWrapper = shallow(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    wrapper = routerWrapper.find(Search).dive();

    const { handlePackagesClearRequested } = wrapper.instance();

    handlePackagesClearRequested();

    expect(wrapper.state('suggestions')).toEqual([]);
  });

  describe('<Search /> component: mocks specific tests ', () => {
    beforeEach(() => {
      jest.resetModules();
      jest.doMock('lodash/debounce', () => {
        return function debounceMock(fn) {
          return fn;
        };
      });
    });

    test('handleFetchPackages: should load the packages from API', async () => {
      const apiResponse = [{ name: 'verdaccio' }, { name: 'verdaccio-htpasswd' }];
      const suggestions = [{ name: 'verdaccio' }, { name: 'verdaccio-htpasswd' }];

      jest.doMock(API_FILE_PATH, () => ({
        request(url: string) {
          expect(url).toEqual('search/verdaccio');
          return Promise.resolve(apiResponse);
        },
      }));

      const Search = require(SEARCH_FILE_PATH).Search;

      const routerWrapper = shallow(
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      );

      wrapper = routerWrapper.find(Search).dive();
      wrapper.setState({ search: 'verdaccio' });
      const { handleFetchPackages } = wrapper.instance();

      await handleFetchPackages({ value: 'verdaccio' });

      expect(wrapper.state('suggestions')).toEqual(suggestions);
      expect(wrapper.state('error')).toBeFalsy();
      expect(wrapper.state('loaded')).toBeTruthy();
      expect(wrapper.state('loading')).toBeFalsy();
    });

    test('handleFetchPackages: when browser cancel a request', async () => {
      const apiResponse = { name: 'AbortError' };

      jest.doMock(API_FILE_PATH, () => ({ request: jest.fn(() => Promise.reject(apiResponse)) }));

      const Search = require(SEARCH_FILE_PATH).Search;

      const routerWrapper = shallow(
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      );

      wrapper = routerWrapper.find(Search).dive();

      const { handleFetchPackages, setState } = wrapper.instance();
      setState({ search: 'verdaccio' });
      await handleFetchPackages({ value: 'verdaccio' });

      expect(wrapper.state('error')).toBeFalsy();
      expect(wrapper.state('loaded')).toBeFalsy();
      expect(wrapper.state('loading')).toBeFalsy();
    });

    test('handleFetchPackages: when API server failed request', async () => {
      const apiResponse = { name: 'BAD_REQUEST' };

      jest.doMock(API_FILE_PATH, () => ({
        request(url) {
          expect(url).toEqual('search/verdaccio');
          return Promise.reject(apiResponse);
        },
      }));

      const Search = require(SEARCH_FILE_PATH).Search;
      const routerWrapper = shallow(
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      );

      wrapper = routerWrapper.find(Search).dive();
      wrapper.setState({ search: 'verdaccio' });
      const { handleFetchPackages } = wrapper.instance();

      await handleFetchPackages({ value: 'verdaccio' });

      expect(wrapper.state('error')).toBeTruthy();
      expect(wrapper.state('loaded')).toBeFalsy();
      expect(wrapper.state('loading')).toBeFalsy();
    });

    test('handleClickSearch: should change the window location on click or return key', () => {
      const getDetailPageURL = jest.fn(() => 'detail/page/url');
      jest.doMock(URL_FILE_PATH, () => ({ getDetailPageURL }));

      const suggestionValue = [];
      const Search = require(SEARCH_FILE_PATH).Search;
      const pushHandler = jest.fn();
      const routerWrapper = shallow(
        <BrowserRouter>
          <Search history={{ push: pushHandler }} />
        </BrowserRouter>
      );

      wrapper = routerWrapper.find(Search).dive();
      const { handleClickSearch } = wrapper.instance();

      // click
      handleClickSearch(event, { suggestionValue, method: 'click' });
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(pushHandler).toHaveBeenCalledTimes(1);

      // return key
      handleClickSearch(event, { suggestionValue, method: 'enter' });
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(pushHandler).toHaveBeenCalledTimes(2);
    });
  });
});
