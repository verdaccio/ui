import React from 'react';
import PropTypes from 'prop-types';
interface Props {
    packages: any;
}
export default class PackageList extends React.Component<Props, {}> {
    static propTypes: {
        packages: PropTypes.Requireable<any[]>;
    };
    render(): JSX.Element;
    hasPackages(): boolean;
    renderPackages: () => JSX.Element;
    renderList: () => any;
}
export {};
