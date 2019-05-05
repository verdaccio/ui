/**
 * @prettier
 */

import { KeyboardEvent } from 'react';

export interface IState {
  search: string;
  suggestions: any[];
  loading: boolean;
  loaded: boolean;
  error: boolean;
}

export type cancelAllSearchRequests = () => void;
export type handlePackagesClearRequested = () => void;
export type handleSearch = (event: KeyboardEvent<HTMLInputElement>, { newValue, method }: { newValue: string, method: string }) => void;
export type handleClickSearch = (event: KeyboardEvent<HTMLInputElement>, { suggestionValue, method }: { suggestionValue: Array<object>, method: string }) => void;
export type handleFetchPackages = ({ value: string }) => Promise<void>;
export type onBlur = (event: KeyboardEvent<HTMLInputElement>) => void;
