/**
 * @prettier
 */

import React from 'react';
import styled from '@emotion/styled';
import Typography from '@material-ui/core/Typography';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

import { DetailContext, DetailContextProps } from '../../pages/version/Version';

import Install from '../Install';
import Authors from '../Author';
import License from '../License/License';
import Repository from '../Repository';
import Developers from '../Developers';
import colors from '../../utils/styles/colors';

export const Content = styled('div')`
  padding: 10px;
  background-color: ${colors.white};
`;

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const DetailSidebar: React.FC<Props> = () => {
  const renderAuthor = () => (
    <>
      <Grid item={true} xs={6}>
        <Authors />
      </Grid>
      <Grid item={true} xs={6}>
        <License />
      </Grid>
    </>
  );

  const renderCopyCLI = () => <Install />;

  const renderMaintainers = () => <Developers type={'maintainers'} />;

  const renderContributors = () => <Developers type={'contributors'} />;

  const renderSecondLevel = (spacing: GridSpacing = 24) => (
    <Grid container={true} spacing={spacing}>
      {renderAuthor()}
    </Grid>
  );

  const renderRepository = () => <Repository />;

  const renderTitle: React.FC<DetailContextProps> = ({ packageName, packageMeta }) => (
    <>
      <Typography color={'textPrimary'} gutterBottom={true} variant={'title'}>
        {packageName}
      </Typography>
      <Typography color={'textSecondary'} gutterBottom={true} variant={'body2'}>
        {packageMeta.latest.description}
      </Typography>
    </>
  );

  const renderSideBar: React.FC<DetailContextProps> = context => (
    <Content className={'sidebar-info'}>
      <Grid container={true} spacing={24}>
        <Grid item={true} xs={12}>
          {renderTitle(context)}
        </Grid>
        <Grid className={'detail-info'} item={true} xs={12}>
          {renderCopyCLI()}
        </Grid>
        <Grid item={true} xs={12}>
          {renderSecondLevel(8)}
        </Grid>
        <Grid item={true} xs={12}>
          {renderMaintainers()}
        </Grid>
        <Grid item={true} xs={12}>
          {renderContributors()}
        </Grid>
        <Grid item={true} xs={12}>
          {renderRepository()}
        </Grid>
      </Grid>
    </Content>
  );

  return <DetailContext.Consumer>{context => context && renderSideBar(context)}</DetailContext.Consumer>;
};

export default DetailSidebar;
