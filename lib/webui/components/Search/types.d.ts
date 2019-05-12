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
export declare type cancelAllSearchRequests = () => void;
export declare type handlePackagesClearRequested = () => void;
export declare type handleSearch = (event: KeyboardEvent<HTMLInputElement>, { newValue, method }: {
    newValue: string;
    method: string;
}) => void;
export declare type handleClickSearch = (event: KeyboardEvent<HTMLInputElement>, { suggestionValue, method }: {
    suggestionValue: Array<object>;
    method: string;
}) => void;
export declare type handleFetchPackages = ({ value: string }: {
    value: any;
}) => Promise<void>;
export declare type onBlur = (event: KeyboardEvent<HTMLInputElement>) => void;
