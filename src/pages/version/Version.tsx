import React, { Component, ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import Loading from '../../components/Loading/Loading';
import DetailContainer from '../../components/DetailContainer/DetailContainer';
import DetailSidebar from '../../components/DetailSidebar/DetailSidebar';
import { callDetailPage } from '../../utils/calls';
import { getRouterPackageName } from '../../utils/package';
import NotFound from '../../components/NotFound';
import { DetailContextProvider } from './context';
import { PropsInterface, StateInterface } from './types';
import { VersionRender } from './VersionRender';

class Version extends Component<PropsInterface, Partial<StateInterface>> {
  constructor(props) {
    super(props);

    this.state = {
      readMe: '',
      packageName: getRouterPackageName(props.match),
      isLoading: true,
      notFound: false,
    };
  }

  public static getDerivedStateFromProps(nextProps, prevState): { packageName?: string; isLoading: boolean; notFound?: boolean } | null {
    const { match } = nextProps;
    const packageName = getRouterPackageName(match);

    if (packageName !== prevState.packageName) {
      try {
        return {
          packageName,
          isLoading: false,
        };
      } catch (err) {
        return {
          notFound: true,
          isLoading: false,
        };
      }
    } else {
      return null;
    }
  }

  public async componentDidMount(): Promise<void> {
    await this.loadPackageInfo();
  }

  /* eslint no-unused-vars: 0 */
  public async componentDidUpdate(nextProps, prevState: StateInterface): Promise<void> {
    const { packageName } = this.state;
    if (packageName !== prevState.packageName) {
      const { readMe, packageMeta } = (await callDetailPage(packageName)) as Partial<StateInterface>;
      this.setState({
        readMe,
        packageMeta,
        packageName,
        notFound: false,
        isLoading: false,
      });
    }
  }

  public render(): ReactElement<HTMLElement> {
    const { isLoading, packageMeta, readMe, packageName } = this.state;

    if (isLoading) {
      return <Loading />;
    } else if (typeof packageMeta === 'undefined' || typeof packageName === 'undefined' || typeof readMe === 'undefined') {
      return <NotFound />;
    } else {
      return <VersionRender enableLoading={this.enableLoading} packageMeta={packageMeta} packageName={packageName} readMe={readMe} />;
    }
  }

  public async loadPackageInfo(): Promise<void> {
    const { packageName } = this.state;
    // FIXME: use utility
    document.title = `Verdaccio - ${packageName}`;

    this.setState({
      readMe: '',
    });

    try {
      const { readMe, packageMeta } = (await callDetailPage(packageName)) as Partial<StateInterface>;
      this.setState({
        readMe,
        packageMeta,
        packageName,
        notFound: false,
        isLoading: false,
      });
    } catch (err) {
      this.setState({
        notFound: true,
        packageName,
        isLoading: false,
      });
    }
  }

  public enableLoading = () => {
    this.setState({
      isLoading: true,
    });
  };
}

export default Version;
