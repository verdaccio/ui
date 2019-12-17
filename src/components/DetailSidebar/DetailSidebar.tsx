import React, { useContext } from 'react';
import styled from '@emotion/styled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { DetailContext } from '../../pages/Version';
import Paper from '../../muiComponents/Paper';
import Button from '../../muiComponents/Button';
import ActionBar from '../ActionBar';
import Repository from '../Repository';
import Engines from '../Engines';
import Dist from '../Dist';
import Install from '../Install';
import Author from '../Author';
import Developers from '../Developers';
import { Theme } from '../../design-tokens/theme';

import DetailSidebarTitle from './DetailSidebarTitle';

const StyledPaper = styled(Paper)<{ theme?: Theme }>(({ theme }) => ({
  padding: theme.spacing(3, 2),
}));

const DetailSidebar: React.FC = () => {
  const detailContext = useContext(DetailContext);

  const { packageMeta, packageName, packageVersion } = detailContext;

  if (!packageMeta || !packageName) {
    return null;
  }

  return (
    <StyledPaper>
      <DetailSidebarTitle
        description={packageMeta.latest?.description}
        isLatest={typeof packageVersion === 'undefined'}
        packageName={packageName}
        version={packageVersion || packageMeta.latest.version}
      />
      <ActionBar />
      <Install />
      {packageMeta?.latest?.funding && (
        <Button color="secondary" fullWidth={true} startIcon={<FavoriteBorderIcon />} variant="contained">
          {'Fund this package'}
        </Button>
      )}
      <Repository />
      <Engines />

      <Dist />
      <Author />
      <Developers type="maintainers" />
      <Developers type="contributors" />
    </StyledPaper>
  );
};

export default DetailSidebar;
