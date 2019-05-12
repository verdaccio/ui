/**
 * @prettier
 */
import { Component } from 'react';
declare class Engine extends Component {
    render(): JSX.Element;
    renderEngine: ({ packageMeta }: {
        packageMeta: any;
    }) => JSX.Element | null;
    renderListItems: (heading: any, text: any) => JSX.Element;
}
export default Engine;
