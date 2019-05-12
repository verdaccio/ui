/**
 * @prettier
 */
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IState } from './types';
import { cancelAllSearchRequests, handlePackagesClearRequested, handleSearch, handleClickSearch, handleFetchPackages, onBlur } from './types';
export declare class Search extends Component<RouteComponentProps<{}>, IState> {
    requestList: Array<any>;
    constructor(props: RouteComponentProps<{}>);
    /**
     * Cancel all the requests which are in pending state.
     */
    cancelAllSearchRequests: cancelAllSearchRequests;
    /**
     * Cancel all the request from list and make request list empty.
     */
    handlePackagesClearRequested: handlePackagesClearRequested;
    /**
     * onChange method for the input element.
     */
    handleSearch: handleSearch;
    /**
     * When an user select any package by clicking or pressing return key.
     */
    handleClickSearch: handleClickSearch;
    /**
     * Fetch packages from API.
     * For AbortController see: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
     */
    handleFetchPackages: handleFetchPackages;
    render(): JSX.Element;
    /**
     * As user focuses out from input, we cancel all the request from requestList
     * and set the API state parameters to default boolean values.
     */
    onBlur: onBlur;
}
declare const _default: import("react").ComponentClass<Pick<RouteComponentProps<{}, import("react-router").StaticContext, any>, never>, any>;
export default _default;
