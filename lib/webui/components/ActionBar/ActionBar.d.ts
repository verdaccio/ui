/**
 * @prettier
 */
import { Component } from 'react';
declare class ActionBar extends Component<any, any> {
    render(): JSX.Element;
    renderIconsWithLink(link: any, component: any): JSX.Element | null;
    renderActionBarListItems: (packageMeta: any) => JSX.Element;
    renderActionBar: ({ packageMeta }: {
        packageMeta?: {} | undefined;
    }) => JSX.Element;
}
export default ActionBar;
