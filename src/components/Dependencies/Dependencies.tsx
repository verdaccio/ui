import React, { Component, Fragment, ReactElement } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';

import { DetailContextConsumer, VersionPageConsumerProps } from '../../pages/Version';
import NoItems from '../NoItems';

import { CardWrap, Heading, Tags, Tag } from './styles';

type DepDetailProps = {
  name: string;
  version: string;
  onLoading?: () => void;
} & RouteComponentProps;

interface DepDetailState {
  name: string;
  version: string;
}

class DepDetail extends Component<DepDetailProps, DepDetailState> {
  constructor(props: DepDetailProps) {
    super(props);
    const { name, version } = this.props;

    this.state = {
      name,
      version,
    };
  }

  public render(): ReactElement<HTMLElement> {
    const { name, version } = this.state;
    const tagText = `${name}@${version}`;
    return <Tag className={'dep-tag'} clickable={true} label={tagText} onClick={this.handleOnClick} />;
  }

  private handleOnClick = () => {
    const { name } = this.state;
    const { onLoading, history } = this.props;

    onLoading && onLoading();
    history.push(`/-/web/detail/${name}`);
  };
}

const WrapperDependencyDetail = withRouter(DepDetail);

class DependencyBlock extends Component<{ title: string; dependencies: [] }> {
  public render(): ReactElement<HTMLElement> {
    const { dependencies, title } = this.props;
    const deps = Object.entries(dependencies) as [];

    return (
      <DetailContextConsumer>
        {({ enableLoading }) => {
          return (
            <CardWrap>
              <CardContent>
                <Heading variant="subtitle1">{`${title} (${deps.length})`}</Heading>
                <Tags>{this.renderTags(deps, enableLoading)}</Tags>
              </CardContent>
            </CardWrap>
          );
        }}
      </DetailContextConsumer>
    );
  }

  private renderTags = (deps: [], enableLoading?: () => void) =>
    deps.map(dep => {
      const [name, version] = dep as [string, string];

      return <WrapperDependencyDetail key={name} name={name} onLoading={enableLoading} version={version} />;
    });
}

class Dependencies extends Component {
  public render(): ReactElement<HTMLElement> {
    return (
      <DetailContextConsumer>
        {packageMeta => {
          return this.renderDependencies(packageMeta as VersionPageConsumerProps);
        }}
      </DetailContextConsumer>
    );
  }

  private checkDependencyLength<T>(dependency: Record<string, T> = {}): boolean {
    return Object.keys(dependency).length > 0;
  }

  private renderDependencies({ packageMeta }): ReactElement<HTMLElement> {
    const { latest } = packageMeta;
    const { dependencies, devDependencies, peerDependencies, name } = latest;

    const dependencyMap = { dependencies, devDependencies, peerDependencies };

    const dependencyList = Object.keys(dependencyMap).reduce(
      (result, value, key) => {
        const selectedDepndency = dependencyMap[value];
        if (selectedDepndency && this.checkDependencyLength(selectedDepndency)) {
          result.push(<DependencyBlock dependencies={selectedDepndency} key={key} title={value} />);
        }
        return result;
      },
      [] as JSX.Element[]
    );

    if (dependencyList.length) {
      return <Fragment>{dependencyList}</Fragment>;
    }
    return <NoItems className="no-dependencies" text={`${name} has no dependencies.`} />;
  }
}

export default Dependencies;
