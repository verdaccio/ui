/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';
import Grid from '@material-ui/core/Grid';
import DialogTitle from '@material-ui/core/DialogTitle';

import Loading from '../../components/Loading';
import DetailContainer from '../../components/DetailContainer';
import DetailSidebar from '../../components/DetailSidebar';
import { callDetailPage } from '../../utils/calls';
import { getRouterPackageName } from '../../utils/package';
import colors from '../../utils/styles/colors';
import { fontSize } from '../../utils/styles/sizes';

export const Title = styled(DialogTitle)`
  && {
    background-color: ${colors.primary};
    color: ${colors.white};
    font-size: ${fontSize.lg};
  }
`;

export interface DetailContextProps {
  packageMeta: any;
  packageName: string;
}

// TODO -> create a DetailContext HOC
export const DetailContext = React.createContext<DetailContextProps | null>(null);

interface Props {
  match: string;
}

const Version: React.FC<Props> = ({ match }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [packageName] = React.useState(getRouterPackageName(match));
  const [packageMeta, setPackageMeta] = React.useState(null);
  const [readMe, setReadme] = React.useState('');
  const [notFound, setNotFound] = React.useState(false);

  const loadPackageInfo = async () => {
    document.title = `Verdaccio - ${packageName}`;

    setReadme('');

    try {
      const { readMe, packageMeta } = await callDetailPage(packageName);
      setReadme(readMe);
      setPackageMeta(packageMeta);
      setNotFound(false);
      setIsLoading(false);
    } catch (err) {
      setPackageMeta(packageMeta);
      setNotFound(true);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    loadPackageInfo();
  });

  const renderDetail = () => <DetailContainer />;
  // const renderSidebar = () => <DetailSidebar />;

  return !isLoading ? (
    <DetailContext.Provider value={{ packageMeta, readMe, packageName, enableLoading: setIsLoading }}>
      <Grid className={'container content'} container={true} spacing={0}>
        <Grid item={true} xs={8}>
          {renderDetail()}
        </Grid>
        {/* <Grid item={true} xs={4}>
          {renderSidebar()}
        </Grid> */}
      </Grid>
    </DetailContext.Provider>
  ) : (
    <Loading />
  );
};

export default Version;
