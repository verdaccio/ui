/**
 * @prettier
 */
import { Component } from 'react';
interface Props {
    type: 'contributors' | 'maintainers';
}
declare class Developers extends Component<Props, any> {
    state: {
        visibleDevs: number;
    };
    render(): JSX.Element;
    handleLoadMore: () => void;
    renderDevelopers: (developers: any, packageMeta: any) => JSX.Element;
    renderLinkForMail(email: any, avatarComponent: any, packageName: any, version: any): any;
    renderDeveloperDetails: ({ name, avatar, email }: {
        name: any;
        avatar: any;
        email: any;
    }, packageMeta: any) => JSX.Element;
}
export default Developers;
