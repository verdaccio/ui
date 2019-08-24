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
    <Grid className={'container content'} container={true} spacing={0}>
      <Grid item={true} xs={8}>
        {renderDetail()}
      </Grid>
      <Grid item={true} xs={4}>
        {renderSidebar()}
      </Grid>
    </Grid>
  );
};

export { Layout };
