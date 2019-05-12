/**
 * @prettier
 */
import { Component } from 'react';
import { IProps, IState } from './types';
declare class RegistryInfoContent extends Component<IProps, IState> {
    state: {
        tabPosition: number;
    };
    render(): JSX.Element;
    renderTabs(): JSX.Element;
    renderNpmTab(scope: string, registryUrl: string): JSX.Element;
    renderPNpmTab(scope: string, registryUrl: string): JSX.Element;
    renderYarnTab(scope: string, registryUrl: string): JSX.Element;
    handleChange: (event: any, tabPosition: number) => void;
}
export default RegistryInfoContent;
