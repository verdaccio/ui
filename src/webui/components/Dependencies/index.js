/**
 * @prettier
 * @flow
 */

import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent/index';

import { DetailContextConsumer } from '../../pages/version';

import { CardWrap, Heading, Tags, Tag } from './styles';
import NoItems from '../NoItems';

class DepDetail extends Component<any, any> {
  constructor(props: any) {
    super(props);
    const { name, version } = this.props;

    this.state = {
      name,
      version,
    };
  }

  render() {
    const { name, version } = this.state;
    const tagText = `${name}@${version}`;
    return <Tag className={'dep-tag'} clickable={true} component={'div'} label={tagText} onClick={this.handleOnClick} />;
  }

  handleOnClick = () => {
    const { name } = this.state;
    const { onLoading, history } = this.props;

    onLoading();
    history.push(`/-/web/detail/${name}`);
  };
}

const WrapperDependencyDetail = withRouter(DepDetail);

class DependencyBlock extends Component<any, any> {
  render() {
    const { dependencies, title } = this.props;
    const deps = Object.entries(dependencies);

    return (
      // $FlowFixMe
      <DetailContextConsumer>
        {({ enableLoading }) => {
          return (
            <CardWrap>
              <CardContent>
                <Heading variant={'subheading'}>{`${title} (${deps.length})`}</Heading>
                <Tags>{this.renderTags(deps, enableLoading)}</Tags>
              </CardContent>
            </CardWrap>
          );
        }}
      </DetailContextConsumer>
    );
  }

  renderTags = (deps: any, enableLoading: any) =>
    deps.map(dep => {
      const [name, version] = dep;

      return <WrapperDependencyDetail key={name} name={name} onLoading={enableLoading} version={version} />;
    });
}

class Dependencies extends Component<any, any> {
  state = {
    tabPosition: 0,
  };

  render() {
    return (
      <DetailContextConsumer>
        {packageMeta => {
          return this.renderDependencies(packageMeta);
        }}
      </DetailContextConsumer>
    );
  }

  checkDependencyLength(dependency: Object = {}) {
    return Object.keys(dependency).length > 0;
  }

  // $FlowFixMe
  renderDependencies({ packageMeta }) {
    const { latest } = packageMeta;
    const { dependencies, devDependencies, peerDependencies, name } = latest;

    const dependencyMap = { dependencies, devDependencies, peerDependencies };

    const dependencyList = Object.keys(dependencyMap).reduce((result, value, key) => {
<<<<<<< HEAD
      const selectedDepndency = dependencyMap[value];
      if (selectedDepndency && this.checkDependencyLength(selectedDepndency)) {
        result.push(<DependencyBlock className={'dependency-block'} dependencies={selectedDepndency} key={key} title={value} />);
=======
      const selectedDependency = dependencyMap[value];

      if (selectedDependency && this.checkDependencyLength(selectedDependency)) {
        result.push(<DependencyBlock dependencies={selectedDependency} key={key} title={value} />);
>>>>>>> b5e04511... refactor: fixes styles and lint
      }
      return result;
    }, []);

    if (dependencyList.length) {
      return <Fragment>{dependencyList}</Fragment>;
    }
    return <NoItems className={'no-dependencies'} text={`${name} has no dependencies.`} />;
  }
}

export default Dependencies;
