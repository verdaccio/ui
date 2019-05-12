import { Component } from 'react';
declare class Repository extends Component<any, any> {
    render(): JSX.Element;
    renderRepositoryText(url: string): JSX.Element;
    renderRepository: ({ packageMeta }: any) => JSX.Element | null;
    renderContent(url: string): JSX.Element;
}
export default Repository;
