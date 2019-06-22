import React, { Component, ReactElement, Consumer, Provider } from 'react';
import Grid from '@material-ui/core/Grid';
import Loading from '../../components/Loading/Loading';
import DetailContainer from '../../components/DetailContainer/DetailContainer';
import DetailSidebar from '../../components/DetailSidebar/DetailSidebar';
import { callDetailPage } from '../../utils/calls';
import { getRouterPackageName } from '../../utils/package';
import NotFound from '../../components/NotFound';
import { PackageMetaInterface } from '../../../types/packageMeta';

export interface DetailContextProps {
  packageMeta: PackageMetaInterface;
  readMe: string;
  packageName: string;
  enableLoading: () => void;
}

export const DetailContext = React.createContext<Partial<DetailContextProps>>({});

export interface VersionPageConsumerProps {
  packageMeta: PackageMetaInterface;
  readMe: string;
  packageName: string;
  enableLoading: () => void;
}

export const DetailContextProvider: Provider<Partial<VersionPageConsumerProps>> = DetailContext.Provider;
export const DetailContextConsumer: Consumer<Partial<VersionPageConsumerProps>> = DetailContext.Consumer;

interface PropsInterface {
  match: boolean;
}

interface StateInterface {
  readMe: string;
  packageName: string;
  packageMeta: PackageMetaInterface | null;
  isLoading: boolean;
  notFound: boolean;
}

class VersionPage extends Component<PropsInterface, StateInterface> {
  constructor(props) {
    super(props);

    this.state = {
      readMe: '',
      packageName: getRouterPackageName(props.match),
      packageMeta: null,
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
      const { readMe, packageMeta } = await callDetailPage(packageName);
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
    } else if (!packageMeta) {
      return <NotFound />;
    } else {
      return (
        <DetailContextProvider value={{ packageMeta, readMe, packageName, enableLoading: this.enableLoading }}>
          <Grid className={'container content'} container={true} spacing={0}>
            <Grid item={true} xs={8}>
              {this.renderDetail()}
            </Grid>
            <Grid item={true} xs={4}>
              {this.renderSidebar()}
            </Grid>
          </Grid>
        </DetailContextProvider>
      );
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
      const { readMe, packageMeta } = await callDetailPage(packageName);
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

  public renderDetail(): ReactElement<HTMLElement> {
    return <DetailContainer />;
  }

  public renderSidebar(): ReactElement<HTMLElement> {
    return <DetailSidebar />;
  }
}

export default VersionPage;
