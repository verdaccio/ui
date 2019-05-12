/**
 * @prettier
 */
import { Component } from 'react';
declare class Dependencies extends Component<any, any> {
    state: {
        tabPosition: number;
    };
    render(): JSX.Element;
    checkDependencyLength(dependency?: Object): boolean;
    renderDependencies({ packageMeta }: {
        packageMeta: any;
    }): JSX.Element;
}
export default Dependencies;
