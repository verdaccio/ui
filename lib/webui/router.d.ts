/**
 * @prettier
 */
import { Component } from 'react';
declare class RouterApp extends Component<any, any> {
    render(): JSX.Element;
    renderHeader: () => JSX.Element;
    renderHomePage: () => JSX.Element;
    renderVersionPage: (routerProps: any) => JSX.Element;
}
export default RouterApp;
