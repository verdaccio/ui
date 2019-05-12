/**
 * @prettier
 */
import { Component } from 'react';
declare class DetailContainer extends Component<any, any> {
    state: {
        tabPosition: number;
    };
    render(): JSX.Element;
    handleChange: (event: any, tabPosition: number) => void;
    renderTabs: ({ readMe }: {
        readMe: any;
    }) => JSX.Element;
    renderReadme: (readMe: string) => JSX.Element;
}
export default DetailContainer;
