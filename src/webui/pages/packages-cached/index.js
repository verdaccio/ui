/**
 * @prettier
 * @flow
 */

import React, { Component } from 'react';
import Loading from '../../components/Loading';
import API from '../../utils/api';
import { AutoSizer, List } from 'react-virtualized';

class PackagesCachedPage extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      packageFilter: '',
      packageFilterData: [],
      data: {
        packages: [],
      },
      isLoading: true,
      error: null,
    };

    this.listRef = React.createRef();

    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.getPackageBoxHeight = this.getPackageBoxHeight.bind(this);
    this.renderPackage = this.renderPackage.bind(this);
  }

  async componentDidMount() {
    document.title = `Verdaccio - cached packages`;
    await this.loadPackagesAllInfo();
  }

  async loadPackagesAllInfo() {
    try {
      const data = JSON.parse(await API.request('packages-cached', 'GET'));

      this.setState({
        data,
        isLoading: false,
        error: null,
        packageFilter: '',
        packageFilterData: Object.keys(data.packages).sort() || [],
      });
    } catch (err) {
      this.setState({
        data: {
          packages: [],
        },
        isLoading: false,
        error: err,
        packageFilter: '',
        packageFilterData: [],
      });
    }
  }

  handleChangeFilter(event) {
    const packageFilter = event.target.value;
    const { data } = this.state;

    const packageFilterData = Object.keys(data.packages)
      .filter(packageName => {
        return packageName.indexOf(packageFilter) !== -1;
      })
      .sort();

    this.setState(
      {
        packageFilter,
        packageFilterData,
      },
      function() {
        this.listRef.current.scrollToRow(0);
        this.listRef.current.recomputeRowHeights(0);
      }
    );
  }

  getPackageBoxHeight({ index }) {
    const { data, packageFilterData } = this.state;
    const v = data.packages[packageFilterData[index]];
    if (v) {
      return 18 * (v.length + 1);
    } else {
      return 18;
    }
  }

  renderPackage({ index, key, style }) {
    const { packageFilterData } = this.state;
    const packageName = packageFilterData[index];

    return (
      <div key={key} style={style}>
        <a href={`/-/web/detail/${packageName}/`}>{packageName || '?'}</a>
        {this.renderVersions(packageName)}
      </div>
    );
  }

  _noRowsRenderer() {
    return <span>{'No packages'}</span>;
  }

  renderVersions(packageName) {
    const { data } = this.state;
    const v = data.packages[packageName];
    if (v) {
      return v.map(version => {
        return <div key={`${packageName}-${version}`}>{version}</div>;
      });
    }
  }

  renderList() {
    const { packageFilterData } = this.state;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            noRowsRenderer={this._noRowsRenderer}
            overscanRowCount={10}
            ref={this.listRef}
            rowCount={packageFilterData.length}
            rowHeight={this.getPackageBoxHeight}
            rowRenderer={this.renderPackage}
            width={width}
          />
        )}
      </AutoSizer>
    );
  }

  render() {
    const { isLoading, error } = this.state;

    if (isLoading) {
      return <Loading />;
    } else if (error) {
      return <div style={{ color: 'red' }}>{'ERROR: ' + JSON.stringify(error)}</div>;
    } else {
      return (
        <div className={'container content'} style={{ flexDirection: 'column' }}>
          <div>
            <input onChange={this.handleChangeFilter} type={'text'} />
            {'(type here to filter packages)'}
          </div>
          <div style={{ flex: '1 1 auto' }}>{this.renderList()}</div>
        </div>
      );
    }
  }
}

export default PackagesCachedPage;
