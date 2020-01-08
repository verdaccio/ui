import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { DetailContext } from '../../pages/Version';
import Paper from '../../muiComponents/Paper';
import ActionBar from '../ActionBar';
import Repository from '../Repository';
import Engines from '../Engines';
import Dist from '../Dist';
import Install from '../Install';
import Author from '../Author';
import Developers, { DeveloperType } from '../Developers';
import { Theme } from '../../design-tokens/theme';

import DetailSidebarTitle from './DetailSidebarTitle';
import DetailSidebarFundButton from './DetailSidebarFundButton';

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
    <StyledPaper className={'sidebar-info'}>
      <DetailSidebarTitle
        description={packageMeta.latest?.description}
        isLatest={typeof packageVersion === 'undefined'}
        packageName={packageName}
        version={packageVersion || packageMeta.latest.version}
      />
      <ActionBar />
      <Install />
      <DetailSidebarFundButton />
      <Repository />
      <Engines />
      <Dist />
      <Author />
      <Developers type={DeveloperType.MAINTAINERS} />
      <Developers type={DeveloperType.CONTRIBUTORS} />
    </StyledPaper>
  );
};

export default DetailSidebar;
