import React, { FC, ReactElement } from 'react';
import { DetailContextProvider } from './context';
import Grid from '@material-ui/core/Grid';
import DetailContainer from '../../components/DetailContainer';
import DetailSidebar from '../../components/DetailSidebar';
import { PackageMetaInterface } from '../../../types/packageMeta';

export interface VersionRenderProps {
  readMe: string;
  packageName: string;
  packageMeta: PackageMetaInterface;
  enableLoading: () => void;
}

function renderDetail(): ReactElement<HTMLElement> {
  return <DetailContainer />;
}

function renderSidebar(): ReactElement<HTMLElement> {
  return <DetailSidebar />;
}

const VersionRender: FC<VersionRenderProps> = ({ packageMeta, readMe, packageName, enableLoading }) => {
  return (
    <DetailContextProvider value={{ packageMeta, readMe, packageName, enableLoading }}>
      <Grid className={'container content'} container={true} spacing={0}>
        <Grid item={true} xs={8}>
          {renderDetail()}
        </Grid>
        <Grid item={true} xs={4}>
          {renderSidebar()}
        </Grid>
      </Grid>
    </DetailContextProvider>
  );
};

export { VersionRender };
