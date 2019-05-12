/**
 * @prettier
 */
import React from 'react';
declare class Versions extends React.PureComponent<any> {
    render(): JSX.Element;
    renderPackageList: (packages: any, isVersion?: boolean, timeMap?: Object) => JSX.Element;
    renderContent(packageMeta: any): JSX.Element;
}
export default Versions;
