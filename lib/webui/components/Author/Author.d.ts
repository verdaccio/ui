/**
 * @prettier
 */
import { Component, ReactNode } from 'react';
declare class Authors extends Component<any, any> {
    render(): JSX.Element;
    renderLinkForMail(email: string, avatarComponent: ReactNode, packageName: string, version: string): {} | null | undefined;
    renderAuthor: ({ packageMeta }: any) => JSX.Element | null;
}
export default Authors;
