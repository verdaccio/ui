import { Component } from 'react';
declare class DetailSidebar extends Component {
    render(): JSX.Element;
    renderSideBar: ({ packageName, packageMeta }: {
        packageName: any;
        packageMeta: any;
    }) => JSX.Element;
    renderTitle: (packageName: any, packageMeta: any) => JSX.Element;
    renderCopyCLI: () => JSX.Element;
    renderMaintainers: () => JSX.Element;
    renderContributors: () => JSX.Element;
    renderRepository: () => JSX.Element;
    renderAuthor: () => JSX.Element;
    renderEngine: () => JSX.Element;
    renderDist: () => JSX.Element;
    renderActionBar: () => JSX.Element;
}
export default DetailSidebar;
