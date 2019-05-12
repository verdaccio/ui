/**
 * @prettier
 */
import React, { Component } from 'react';
export interface DetailContextProps {
    packageMeta: any;
    readMe: any;
    packageName: string;
    enableLoading: () => void;
}
export declare const DetailContext: React.Context<DetailContextProps | null>;
export declare const DetailContextProvider: React.ProviderExoticComponent<React.ProviderProps<DetailContextProps | null>>;
export declare const DetailContextConsumer: React.ExoticComponent<React.ConsumerProps<DetailContextProps | null>>;
declare class VersionPage extends Component<any, any> {
    constructor(props: any);
    componentDidMount(): Promise<void>;
    componentDidUpdate(nextProps: any, prevState: any): Promise<void>;
    static getDerivedStateFromProps(nextProps: any, prevState: any): {
        packageName: any;
        isLoading: boolean;
        notFound?: undefined;
    } | {
        notFound: boolean;
        isLoading: boolean;
        packageName?: undefined;
    } | null;
    loadPackageInfo(): Promise<void>;
    enableLoading: () => void;
    render(): JSX.Element;
    renderDetail(): JSX.Element;
    renderSidebar(): JSX.Element;
}
export default VersionPage;
