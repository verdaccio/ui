import React, { FC, ReactElement } from 'react';
import Grid from '@material-ui/core/Grid';
import DetailContainer from '../../components/DetailContainer';
import DetailSidebar from '../../components/DetailSidebar';

function renderDetail(): ReactElement<HTMLElement> {
  return <DetailContainer />;
}

function renderSidebar(): ReactElement<HTMLElement> {
  return <DetailSidebar />;
}

const Layout: FC<{}> = () => {
  return (
    <Grid className={'container content'} container={true} data-testid="version-layout" spacing={0}>
      <Grid item={true} md={8} xs={12}>
        {renderDetail()}
      </Grid>
      <Grid item={true} md={4} xs={12}>
        {renderSidebar()}
      </Grid>
    </Grid>
  );
};

export { Layout };
