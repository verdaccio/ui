/**
 * @prettier
 */
import { Component } from 'react';
declare class Install extends Component {
    render(): JSX.Element;
    renderCopyCLI: ({ packageName }: {
        packageName: string;
    }) => JSX.Element;
    renderListItems: (packageName: string) => JSX.Element;
}
export default Install;
